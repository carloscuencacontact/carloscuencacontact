const publicNewsSection = document.querySelector("#published-news");
const publicNewsGrid = document.querySelector("#published-news-grid");
const publicNewsStatus = document.querySelector("#published-news-status");

function createPublishedCard(article) {
  const articleUrl = `noticia.html?id=${encodeURIComponent(article.slug)}`;
  const card = document.createElement("article");
  card.className = "news-card";

  const imageLink = document.createElement("a");
  imageLink.className = "news-card-image image-frame";
  imageLink.href = articleUrl;
  imageLink.setAttribute("aria-label", `Leer noticia: ${article.title}`);

  const image = document.createElement("img");
  image.src = article.image_url;
  image.alt = article.image_alt || article.title;
  image.loading = "lazy";
  imageLink.append(image);

  const content = document.createElement("div");
  content.className = "story-content";

  const category = document.createElement("span");
  category.className = "story-category";
  category.textContent = article.category;

  const heading = document.createElement("h3");
  const title = document.createElement("a");
  title.href = articleUrl;
  title.textContent = article.title;
  heading.append(title);

  const summary = document.createElement("p");
  summary.textContent = article.summary;

  const meta = document.createElement("span");
  meta.className = "story-meta";
  meta.textContent = new Intl.DateTimeFormat("es", { dateStyle: "medium" }).format(new Date(article.published_at));

  content.append(category, heading, summary, meta);
  card.append(imageLink, content);
  return card;
}

async function loadPublishedNews() {
  if (!publicNewsSection) return;

  if (!window.elvertexSupabase) {
    publicNewsSection.hidden = false;
    publicNewsStatus.hidden = false;
    publicNewsStatus.textContent = "Las noticias publicadas aparecerán aquí cuando se configure el servicio editorial.";
    return;
  }

  const { data, error } = await window.elvertexSupabase
    .from("news_articles")
    .select("slug, title, summary, category, image_url, image_alt, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(12);

  if (error) {
    publicNewsSection.hidden = false;
    publicNewsStatus.hidden = false;
    publicNewsStatus.textContent = "No se pudieron cargar las noticias publicadas. Inténtalo de nuevo más tarde.";
    console.error("Error al cargar las noticias publicadas:", error.message);
    return;
  }

  if (!data.length) return;
  publicNewsGrid.replaceChildren(...data.map(createPublishedCard));
  publicNewsSection.hidden = false;
}

loadPublishedNews();
