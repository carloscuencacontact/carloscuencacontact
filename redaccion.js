const setupNotice = document.querySelector("#editorial-setup-notice");
const loginSection = document.querySelector("#editorial-login");
const dashboard = document.querySelector("#editorial-dashboard");
const loginForm = document.querySelector("#login-form");
const articleForm = document.querySelector("#article-form");
const loginMessage = document.querySelector("#editorial-login-message");
const editorMessage = document.querySelector("#editorial-message");
const articleList = document.querySelector("#editorial-article-list");
const cancelEditButton = document.querySelector("#cancel-edit-button");
const submitButtons = [...articleForm.querySelectorAll('button[type="submit"]')];

function showMessage(target, message, kind = "") {
  target.textContent = message;
  target.dataset.kind = kind;
  window.elvertexSetLanguage?.(window.elvertexLanguage || "es");
}

function articleSlug(title) {
  return title.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function setSubmitting(isSubmitting) {
  for (const button of submitButtons) button.disabled = isSubmitting;
  if (isSubmitting) showMessage(editorMessage, "Guardando…");
}

function resetArticleForm() {
  articleForm.reset();
  articleForm.elements.id.value = "";
  cancelEditButton.hidden = true;
  document.querySelector("#editorial-form-title").textContent = "Nueva noticia";
  showMessage(editorMessage, "");
}

function canUseEditor() {
  if (window.elvertexSupabase) return true;

  setupNotice.hidden = false;
  const setupLink = document.createElement("a");
  setupLink.href = "EDITORIAL.md";
  setupLink.textContent = "Ver las instrucciones de configuración";
  setupNotice.replaceChildren(
    document.createTextNode("El panel aún no está conectado. Crea tu proyecto Supabase y configura supabase-config.js. "),
    setupLink
  );
  loginMessage.textContent = "No se puede iniciar sesión hasta completar la configuración.";
  return false;
}

async function loadArticles() {
  showMessage(editorMessage, "Cargando noticias…");
  const { data, error } = await window.elvertexSupabase
    .from("news_articles")
    .select("id, slug, title, category, status, updated_at")
    .order("updated_at", { ascending: false });

  if (error) {
    showMessage(editorMessage, `No se pudieron cargar las noticias: ${error.message}`, "error");
    return;
  }

  articleList.replaceChildren(...data.map(createArticleListItem));
  showMessage(editorMessage, data.length ? "" : "Todavía no hay noticias guardadas.");
}

function createArticleListItem(article) {
  const item = document.createElement("li");
  item.className = "editorial-list-item";

  const details = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = article.title;
  const metadata = document.createElement("p");
  metadata.textContent = `${article.category} · ${article.status === "published" ? "Publicada" : "Borrador"} · ${new Intl.DateTimeFormat("es", { dateStyle: "medium" }).format(new Date(article.updated_at))}`;
  details.append(title, metadata);

  const actions = document.createElement("div");
  actions.className = "editorial-list-actions";

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.textContent = "Editar";
  editButton.addEventListener("click", () => editArticle(article.id));

  const previewLink = document.createElement("a");
  previewLink.href = `noticia.html?id=${encodeURIComponent(article.slug)}`;
  previewLink.textContent = "Ver";
  previewLink.target = "_blank";
  previewLink.rel = "noopener noreferrer";
  actions.append(editButton, previewLink);

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Eliminar";
  deleteButton.addEventListener("click", () => deleteArticle(article.id, article.title));
  actions.append(deleteButton);

  item.append(details, actions);
  window.elvertexSetLanguage?.(window.elvertexLanguage || "es");
  return item;
}

async function editArticle(id) {
  showMessage(editorMessage, "Cargando noticia…");
  const { data, error } = await window.elvertexSupabase
    .from("news_articles")
    .select("id, title, summary, category, body, image_url, image_alt, published_at")
    .eq("id", id)
    .single();

  if (error) {
    showMessage(editorMessage, `No se pudo abrir la noticia: ${error.message}`, "error");
    return;
  }

  for (const field of ["id", "title", "summary", "category", "imageAlt"]) {
    articleForm.elements[field].value = field === "imageAlt" ? data.image_alt : data[field];
  }
  articleForm.elements.body.value = data.body;
  articleForm.elements.imageUrl.value = data.image_url;
  articleForm.elements.publishedAt.value = data.published_at || "";
  cancelEditButton.hidden = false;
  document.querySelector("#editorial-form-title").textContent = "Editar noticia";
  showMessage(editorMessage, "Edita el texto y guarda los cambios.");
  articleForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function uploadImage(file) {
  if (!file) return "";
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) throw new Error("La imagen debe ser JPG, PNG o WebP.");
  if (file.size > 5 * 1024 * 1024) throw new Error("La imagen no puede superar los 5 MB.");

  const extension = file.type === "image/jpeg" ? "jpg" : file.type.split("/")[1];
  const path = `${crypto.randomUUID()}.${extension}`;
  const { error } = await window.elvertexSupabase.storage.from("news-images").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
    contentType: file.type
  });
  if (error) throw error;

  const { data } = window.elvertexSupabase.storage.from("news-images").getPublicUrl(path);
  return data.publicUrl;
}

async function saveArticle(event) {
  event.preventDefault();
  setSubmitting(true);

  try {
    const form = new FormData(articleForm);
    const title = String(form.get("title")).trim();
    const paragraphs = String(form.get("body")).trim().split(/\r?\n\s*\r?\n/).map(part => part.trim()).filter(Boolean);
    const existingId = String(form.get("id"));
    const currentStatus = event.submitter.value;
    const previousPublishedAt = String(form.get("publishedAt"));
    const uploadedImage = await uploadImage(form.get("image"));
    const imageUrl = uploadedImage || String(form.get("imageUrl")).trim();
    const { data: userData, error: userError } = await window.elvertexSupabase.auth.getUser();
    if (userError) throw userError;
    if (!userData.user) throw new Error("La sesión ha caducado. Inicia sesión de nuevo.");

    if (!imageUrl) throw new Error("Sube una fotografía o indica su URL.");
    const article = {
      slug: articleSlug(title),
      title,
      category: String(form.get("category")),
      summary: String(form.get("summary")).trim(),
      body: paragraphs.join("\n\n"),
      image_url: imageUrl,
      image_alt: String(form.get("imageAlt")).trim(),
      author_id: userData.user.id,
      status: currentStatus,
      published_at: currentStatus === "published" ? previousPublishedAt || new Date().toISOString() : null
    };
    if (existingId) article.id = existingId;

    const { error } = await window.elvertexSupabase.from("news_articles").upsert(article);
    if (error) throw error;

    resetArticleForm();
    showMessage(editorMessage, currentStatus === "published" ? "Noticia publicada." : "Borrador guardado.", "success");
    await loadArticles();
    showMessage(editorMessage, currentStatus === "published" ? "Noticia publicada y registrada." : "Borrador guardado y registrado.", "success");
  } catch (error) {
    showMessage(editorMessage, `No se pudo guardar la noticia: ${error.message}`, "error");
  } finally {
    setSubmitting(false);
  }
}

async function deleteArticle(id, title) {
  if (!window.confirm(`¿Eliminar «${title}»? Esta acción no se puede deshacer.`)) return;
  showMessage(editorMessage, "Eliminando noticia…");

  const { error } = await window.elvertexSupabase.from("news_articles").delete().eq("id", id);
  if (error) {
    showMessage(editorMessage, `No se pudo eliminar la noticia: ${error.message}`, "error");
    return;
  }

  resetArticleForm();
  await loadArticles();
  showMessage(editorMessage, "Noticia eliminada.", "success");
}

async function syncSession() {
  if (!canUseEditor()) return;

  const { data, error } = await window.elvertexSupabase.auth.getSession();
  if (error) {
    showMessage(loginMessage, `No se pudo comprobar la sesión: ${error.message}`, "error");
    return;
  }
  const isEditor = hasEditorRole(data.session);
  showAuthenticatedState(isEditor);
  if (data.session && !isEditor) {
    showMessage(loginMessage, "Esta cuenta no tiene permisos de redacción.", "error");
  }
}

function showAuthenticatedState(isAuthenticated) {
  loginSection.hidden = isAuthenticated;
  dashboard.hidden = !isAuthenticated;
  if (isAuthenticated) loadArticles();
}

function hasEditorRole(session) {
  return session?.user?.app_metadata?.role === "editor";
}

loginForm.addEventListener("submit", async event => {
  event.preventDefault();
  if (!canUseEditor()) return;
  const form = new FormData(loginForm);
  showMessage(loginMessage, "Iniciando sesión…");

  const { data, error } = await window.elvertexSupabase.auth.signInWithPassword({
    email: form.get("email"),
    password: form.get("password")
  });
  if (error) {
    showMessage(loginMessage, `No se pudo iniciar sesión: ${error.message}`, "error");
    return;
  }

  if (!hasEditorRole(data.session)) {
    const { error: signOutError } = await window.elvertexSupabase.auth.signOut();
    const message = "Esta cuenta no tiene permisos de redacción. Contacta con quien administra el sitio.";
    showMessage(loginMessage, signOutError ? `${message} No se pudo cerrar la sesión: ${signOutError.message}` : message, "error");
    return;
  }

  loginForm.reset();
  showMessage(loginMessage, "");
  showAuthenticatedState(true);
});

articleForm.addEventListener("submit", saveArticle);
cancelEditButton.addEventListener("click", resetArticleForm);
document.querySelector("#logout-button").addEventListener("click", async () => {
  const { error } = await window.elvertexSupabase.auth.signOut();
  if (error) {
    showMessage(editorMessage, `No se pudo cerrar sesión: ${error.message}`, "error");
    return;
  }
  showAuthenticatedState(false);
  resetArticleForm();
  showMessage(loginMessage, "Sesión cerrada.", "success");
});

if (window.elvertexSupabase) {
  window.elvertexSupabase.auth.onAuthStateChange((_event, session) => {
    const isEditor = hasEditorRole(session);
    showAuthenticatedState(isEditor);
    if (session && !isEditor) {
      showMessage(loginMessage, "Esta cuenta no tiene permisos de redacción.", "error");
      queueMicrotask(() => {
        window.elvertexSupabase.auth.signOut().then(({ error }) => {
          if (error) showMessage(loginMessage, `No se pudo cerrar la sesión: ${error.message}`, "error");
        });
      });
    }
  });
  syncSession();
} else {
  canUseEditor();
}
