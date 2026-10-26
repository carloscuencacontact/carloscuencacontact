const articles = [
  {
    category: "TRANSPORTE URBANO",
    title: "El Bus Dénia alcanza los 68.700 viajeros en agosto, un 30,9% más que en 2019",
    summary: "El servicio registró 68.700 pasajeros en agosto. La línea L3, que conecta con las playas, concentró el 60,5% de los viajes.",
    image: "assets/bus_denia_l3.jpeg",
    imageAlt: "Autobús de la línea 3 de Dénia",
    date: "Datos de agosto",
    sourceUrl: "https://www.denia.com/el-bus-denia-alcanza-los-68-700-viajeros-en-agosto-un-309-mas-que-en-2019/",
    sourceName: "Denia.com",
    paragraphs: [
      "El Bus Dénia transportó 68.700 viajeros durante agosto, un 30,9% más que en agosto de 2019, cuando registró 52.473. Frente a julio, con 63.246 pasajeros, el servicio creció un 8,6%. La media diaria del mes fue de 2.216 usuarios.",
      "Las líneas de playa concentraron buena parte de la demanda. La L3 sumó 41.540 pasajeros, el 60,5% del total, y registró 5.562 viajeros más que en agosto de 2019. La L2 contabilizó 12.716 pasajeros y obtuvo la ocupación media más alta de la red, con 17,09 viajeros por expedición.",
      "El resto de líneas registró 4.267 viajeros en la L1, 9.432 en la L4 y 745 en la L5. También aumentó el uso nocturno: la media pasó de 104 pasajeros diarios en julio a 124 en agosto. La franja con más viajes fue la de 19:00 a 19:59, con 6.227 usuarios."
    ]
  },
  {
    category: "CULTURA",
    title: "Dénia prepara un ciclo de cine al aire libre en sus barrios",
    summary: "La propuesta acerca proyecciones y actividades culturales gratuitas a distintos espacios del municipio.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Amigos compartiendo una actividad en un parque",
    date: "Hoy",
    paragraphs: [
      "El ciclo lleva el cine a varios barrios de Dénia con sesiones al aire libre y una selección de películas para públicos diversos. Cada proyección se acompaña de una presentación breve o de una conversación abierta para compartir impresiones al terminar.",
      "La iniciativa prioriza espacios accesibles y horarios compatibles con la vida familiar. La organización coordina el calendario, los permisos, los derechos de exhibición y las alternativas ante posibles cambios meteorológicos."
    ]
  },
  {
    category: "INNOVACIÓN",
    title: "Jóvenes de Dénia impulsan un mapa digital de comercios y talleres locales",
    summary: "El proyecto reúne recursos de proximidad y busca dar visibilidad a iniciativas creadas por jóvenes de la ciudad.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Equipo reunido alrededor de una mesa de trabajo",
    date: "Hoy",
    paragraphs: [
      "La idea propone crear un mapa digital para localizar comercios, talleres y proyectos de jóvenes de Dénia. Además de direcciones, cada ficha podría incluir horarios, servicios y formas de contacto, siempre con información facilitada y revisada por los propios negocios.",
      "Un prototipo de este tipo permitiría explorar herramientas digitales y dar mayor visibilidad al tejido local. Para convertirlo en un servicio útil harían falta responsables de actualización, criterios claros de inclusión y medidas para proteger los datos de quienes participen."
    ]
  },
  {
    category: "SERVICIOS",
    title: "Dénia plantea reforzar los autobuses entre el centro y Les Marines",
    summary: "Una propuesta vecinal pide revisar frecuencias y paradas para facilitar los trayectos entre el casco urbano y la costa.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Vista urbana con calles y edificios",
    date: "Hoy",
    paragraphs: [
      "La propuesta revisa las conexiones en autobús entre el centro de Dénia y Les Marines, con especial atención a las horas de mayor demanda. Entre las medidas planteadas figuran ajustar frecuencias, mejorar la información de las paradas y facilitar los transbordos.",
      "La evaluación del servicio tiene en cuenta los datos de uso, las necesidades de residentes y visitantes, la accesibilidad y la disponibilidad de vehículos. Los cambios de líneas y horarios se comunican a través del Ayuntamiento y del operador."
    ]
  },
  {
    category: "MEDIO AMBIENTE",
    title: "Entidades de Dénia organizan una jornada de limpieza de la costa",
    summary: "La actividad propone recorrer varios tramos del litoral y compartir consejos para reducir residuos en el mar.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Paisaje natural de la Marina Alta",
    date: "Hoy",
    paragraphs: [
      "La jornada abierta retira residuos de distintos tramos del litoral de Dénia. La actividad combina una recogida organizada con una breve explicación sobre cómo separar los materiales encontrados y evitar que vuelvan al entorno marino.",
      "La participación debería coordinarse con entidades locales y seguir indicaciones de seguridad, especialmente en zonas rocosas o protegidas. También sería importante registrar los residuos de forma responsable y no manipular objetos peligrosos, que tendrían que comunicarse a los servicios competentes."
    ]
  },
  {
    category: "EDUCACIÓN",
    title: "Colegios de Dénia preparan talleres sobre el mar Mediterráneo",
    summary: "La propuesta educativa combina actividades en el aula con recursos para conocer mejor el entorno marino local.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Aula preparada para una jornada educativa",
    date: "Ayer",
    paragraphs: [
      "Los talleres propuestos acercarían el Mediterráneo al alumnado de Dénia a través de actividades sobre biodiversidad, navegación y cuidado de la costa. Las sesiones podrían combinar recursos de aula con materiales elaborados por especialistas y asociaciones vinculadas al entorno marino.",
      "El formato permitiría adaptar los contenidos a distintas edades e incluir preguntas preparadas por cada clase. Para llevar el programa a centros reales habría que acordar la participación con los equipos educativos y comprobar que los recursos y las visitas cumplen sus criterios pedagógicos."
    ]
  },
  {
    category: "SEGURIDAD",
    title: "Dénia plantea una campaña de prevención y convivencia para las noches de verano",
    summary: "La propuesta reúne recomendaciones para disfrutar de los espacios públicos y cuidar el descanso vecinal.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Calle urbana al anochecer",
    date: "Hoy",
    paragraphs: [
      "La campaña de muestra ofrecería recomendaciones prácticas para compatibilizar el ocio nocturno con el descanso de quienes viven cerca de las zonas concurridas. La comunicación podría incluir información sobre movilidad segura, cuidado de los espacios compartidos y canales para resolver incidencias.",
      "La convivencia también depende de la colaboración entre establecimientos, visitantes y residentes. Cualquier acción oficial tendría que contrastarse con el Ayuntamiento y los servicios responsables antes de difundir horarios, medidas o teléfonos de contacto."
    ]
  },
  {
    category: "PATRIMONIO",
    title: "El archivo de Dénia prepara una muestra sobre la historia del puerto",
    summary: "La exposición reunirá fotografías y documentos para acercar la memoria marítima local a nuevos públicos.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Documentos y notas sobre una mesa de trabajo",
    date: "Hoy",
    paragraphs: [
      "La exposición reúne fotografías, planos y documentos relacionados con la evolución del puerto de Dénia. Un recorrido cronológico explica cómo las actividades marítimas han influido en la vida cotidiana y en la relación de la ciudad con el Mediterráneo.",
      "La selección de materiales debería respetar las condiciones de conservación y los derechos de reproducción. Las cartelas y actividades complementarias podrían elaborarse con apoyo de especialistas y testimonios, una vez identificadas y verificadas las fuentes documentales."
    ]
  },
  {
    category: "TRÁFICO",
    title: "Obras de mejora en una calle de Dénia exigirán desvíos temporales",
    summary: "El plan de circulación alternativo prioriza el acceso a viviendas y comercios durante las tareas.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Tráfico en una avenida al caer la tarde",
    date: "Ayer",
    paragraphs: [
      "Este artículo de muestra describe un escenario de obras urbanas con cortes parciales y desvíos en una calle de Dénia. Una planificación adecuada tendría que explicar las fases de los trabajos, mantener rutas peatonales accesibles y facilitar el acceso a viviendas y comercios.",
      "Antes de publicar un aviso real convendría confirmar la ubicación, las fechas y los itinerarios alternativos con fuentes oficiales. La señalización provisional y las actualizaciones durante la obra ayudarían a reducir confusiones y a que cada persona pudiera organizar sus desplazamientos."
    ]
  },
  {
    category: "AYUNTAMIENTO",
    title: "El pleno de Dénia debate propuestas para mejorar la movilidad urbana",
    summary: "La sesión pone sobre la mesa ideas para facilitar los desplazamientos cotidianos a pie, en bici y en transporte público.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Edificio institucional con columnas",
    date: "Hoy",
    paragraphs: [
      "El debate municipal aborda cómo hacer más cómodos los desplazamientos cotidianos en Dénia. Las propuestas incluyen itinerarios peatonales, conexiones ciclistas y coordinación con el transporte público, atendiendo a las necesidades de distintos barrios.",
      "Un análisis completo tendría en cuenta accesibilidad, seguridad vial y opiniones vecinales, además de los recursos disponibles. Las decisiones, plazos y acuerdos de un pleno real deben comprobarse en el acta municipal y en los canales oficiales."
    ]
  },
  {
    category: "PUERTO Y MAR",
    title: "Asociaciones de Dénia abren un diálogo sobre el futuro del puerto",
    summary: "Entidades locales y representantes del sector marítimo comparten propuestas para compatibilizar actividad y entorno.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Personas reunidas alrededor de una mesa",
    date: "Hoy",
    paragraphs: [
      "La mesa de diálogo propuesta serviría para reunir perspectivas sobre el futuro del puerto de Dénia, desde la actividad marítima hasta el uso ciudadano del frente litoral. Un encuentro abierto podría recoger prioridades y explicar los retos que distintos sectores consideran más importantes.",
      "Para que el diálogo fuera representativo sería necesario convocar a las entidades implicadas, publicar conclusiones y aclarar qué propuestas son viables. Este texto no anuncia una reunión confirmada; los participantes y fechas tendrían que verificarse antes de publicar."
    ]
  },
  {
    category: "VIVIENDA",
    title: "Una propuesta de alquiler asequible para jóvenes centra el debate en Dénia",
    summary: "La iniciativa plantea explorar fórmulas de colaboración para ampliar las opciones residenciales de la población joven.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Edificios residenciales en una zona urbana",
    date: "Ayer",
    paragraphs: [
      "La propuesta estudia fórmulas para ampliar las alternativas de alquiler para jóvenes en Dénia. Entre las cuestiones analizadas están la disponibilidad de vivienda, las condiciones de acceso y el papel de las administraciones y los propietarios.",
      "Cualquier medida concreta necesitaría evaluación jurídica y económica, criterios públicos y mecanismos de seguimiento. No se trata de un programa aprobado ni de una convocatoria abierta; las condiciones reales tendrían que consultarse con las fuentes oficiales."
    ]
  },
  {
    category: "FÚTBOL",
    title: "El CD Dénia prepara su próximo partido con una convocatoria abierta a la afición",
    summary: "El club invita a la grada a acompañar al equipo y anima a las familias a acercarse al campo.",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Balón de fútbol sobre el césped de un campo",
    date: "Hoy",
    paragraphs: [
      "La previa deportiva pone el foco en el ambiente alrededor del próximo encuentro del CD Dénia. La afición se prepara para reunirse y apoyar al equipo, mientras el club ultima los detalles de la cita.",
      "El club informa sobre el rival, la hora, el campo y la disponibilidad de entradas a través de sus canales oficiales, junto con cualquier cambio en el calendario."
    ]
  },
  {
    category: "BALONCESTO",
    title: "Dénia amplía la oferta de deporte base para adolescentes",
    summary: "La propuesta combina entrenamientos semanales y actividades abiertas para probar distintas disciplinas.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Partido de baloncesto en una cancha",
    date: "Hoy",
    paragraphs: [
      "La propuesta deportiva de muestra reuniría sesiones de iniciación y entrenamientos regulares para adolescentes de Dénia. Un programa variado permitiría probar distintas disciplinas y encontrar opciones compatibles con los horarios escolares y otras actividades.",
      "La oferta definitiva dependería de instalaciones, personal cualificado y plazas disponibles. Las familias deberían confirmar edades, calendario, precios y proceso de inscripción con las entidades organizadoras antes de acudir."
    ]
  },
  {
    category: "ATLETISMO",
    title: "La carrera popular de Dénia anuncia recorrido y abre inscripciones",
    summary: "La prueba plantea un trazado urbano con opciones para distintos niveles y edades.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Corredores participando en una carrera popular",
    date: "Ayer",
    paragraphs: [
      "La carrera popular recorre calles de Dénia con alternativas para quienes buscan completar una distancia corta o participar caminando. El diseño del trayecto equilibra la seguridad de los participantes con las necesidades de movilidad del resto de la ciudad.",
      "La organización publica el mapa, los horarios, los cortes de tráfico y el procedimiento de inscripción en sus canales oficiales."
    ]
  },
  {
    category: "ARTES VISUALES",
    title: "Una exposición en Dénia reúne obras inspiradas en la Marina Alta",
    summary: "La muestra reúne distintas miradas artísticas sobre el paisaje y la vida cotidiana de la comarca.",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Obras expuestas en una galería de arte",
    date: "Hoy",
    paragraphs: [
      "La muestra propuesta reúne obras que interpretan paisajes, escenas urbanas y recuerdos de la Marina Alta. La exposición podría ofrecer una mirada diversa sobre el territorio a través de técnicas y lenguajes distintos, junto con información sobre cada pieza y su autoría.",
      "Un programa paralelo de visitas o conversaciones acercaría el proceso creativo al público. Para visitar una exposición real habría que comprobar sede, fechas y horarios con la entidad cultural organizadora."
    ]
  },
  {
    category: "MÚSICA",
    title: "Dénia programa conciertos gratuitos en distintos espacios del municipio",
    summary: "El ciclo plantea actuaciones al aire libre y propuestas para acercar la música a públicos diversos.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Público disfrutando de un concierto al aire libre",
    date: "Ayer",
    paragraphs: [
      "El ciclo musical distribuye actuaciones por varios espacios de Dénia para acercar la música en directo a distintos barrios. La programación combina artistas locales, repertorios variados y conciertos pensados para públicos de diferentes edades.",
      "La asistencia y la organización dependerían de un calendario confirmado, aforos y condiciones de cada espacio. Antes de desplazarse a un concierto real, conviene verificar horarios y posibles cambios en los canales oficiales."
    ]
  },
  {
    category: "LECTURA",
    title: "La biblioteca de Dénia lanza un club de lectura de autores valencianos",
    summary: "La iniciativa propone encuentros periódicos para compartir lecturas y conversar con la comunidad.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Estanterías con libros en una biblioteca",
    date: "Ayer",
    paragraphs: [
      "El club de lectura dedica sus encuentros a obras de autores valencianos, con sesiones para comentar los libros y descubrir nuevas voces. La biblioteca facilita ejemplares y propone lecturas que combinan narrativa, ensayo y literatura para jóvenes.",
      "Para participar en una actividad real habría que consultar el calendario, el idioma de cada sesión y si es necesaria la inscripción. La propuesta no representa un programa confirmado por la biblioteca."
    ]
  },
  {
    category: "PROGRAMA",
    title: "Dénia presenta un calendario de actos para sus fiestas locales",
    summary: "La programación reúne actividades culturales, música y propuestas para distintos públicos.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Celebración popular con luces y público",
    date: "Hoy",
    paragraphs: [
      "La agenda reúne actividades culturales, música y encuentros comunitarios para las fiestas locales en Dénia. La programación tiene en cuenta distintos horarios y edades, además de ofrecer información sobre accesibilidad y posibles cambios.",
      "El calendario, los lugares y las normas de las celebraciones se comunican a través del Ayuntamiento y las entidades organizadoras."
    ]
  },
  {
    category: "PARTICIPACIÓN",
    title: "Las comisiones de Dénia abren la inscripción para colaborar en las fiestas",
    summary: "La convocatoria invita a vecinas y vecinos a participar en la preparación de actividades y encuentros.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Escenario preparado para una celebración nocturna",
    date: "Ayer",
    paragraphs: [
      "La propuesta anima a vecinas y vecinos de Dénia a colaborar en la preparación de las fiestas, desde tareas organizativas hasta iniciativas culturales. La participación comunitaria puede ayudar a que las actividades reflejen intereses diversos y cuenten con apoyo local.",
      "Una convocatoria real debería explicar qué comisiones participan, cómo apuntarse y qué compromisos implica colaborar. Esta noticia no anuncia una inscripción abierta; esos datos deben confirmarse con las organizaciones responsables."
    ]
  },
  {
    category: "TRADICIONES",
    title: "Dénia recupera relatos y fotografías de su tradición marinera",
    summary: "La jornada invita a compartir recuerdos familiares y materiales sobre la historia del litoral local.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Mesas preparadas para una celebración comunitaria",
    date: "Ayer",
    paragraphs: [
      "La jornada invita a compartir fotografías, relatos y recuerdos vinculados a la tradición marinera de Dénia. Las historias familiares aportan perspectivas personales sobre los oficios, los cambios del litoral y la vida cotidiana junto al mar.",
      "La organización documenta la procedencia de los materiales, solicita permiso para reproducirlos y devuelve los originales a sus propietarios."
    ]
  }
];

const createSlug = title => title
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const articleId = new URLSearchParams(window.location.search).get("id");
const currentArticle = articles.find(article => createSlug(article.title) === articleId);
const articleElement = document.querySelector("#article");
const notFoundElement = document.querySelector("#article-not-found");
const articleStatus = document.querySelector("#article-status");

function renderArticle(article, isPublishedArticle) {
  document.title = `${article.title} — El Vèrtex`;
  document.querySelector("#article-category").textContent = article.category;
  document.querySelector("#article-title").textContent = article.title;
  document.querySelector("#article-summary").textContent = article.summary;
  document.querySelector("#article-date").textContent = article.date;
  document.querySelector("#article-reading-time").textContent = isPublishedArticle
    ? `${Math.max(1, Math.ceil(article.body.trim().split(/\s+/).length / 200))} min de lectura`
    : `${article.paragraphs.length} min de lectura`;

  const label = document.querySelector("#article-label");
  label.textContent = isPublishedArticle ? "Noticia publicada" : "";
  label.hidden = !isPublishedArticle;

  const image = document.querySelector("#article-image");
  image.src = isPublishedArticle ? article.image_url : article.image;
  image.alt = isPublishedArticle ? article.image_alt || article.title : article.imageAlt;

  const body = document.querySelector("#article-body");
  const paragraphs = isPublishedArticle ? article.body.split(/\r?\n\s*\r?\n/) : article.paragraphs;
  for (const paragraphText of paragraphs) {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    body.append(paragraph);
  }

  const source = document.querySelector("#article-source");
  if (article.sourceUrl && !isPublishedArticle) {
    const sourceLink = source.querySelector("a");
    sourceLink.href = article.sourceUrl;
    sourceLink.textContent = article.sourceName;
    source.hidden = false;
    body.append(source);
  }

  articleElement.hidden = false;
}

async function loadArticle() {
  if (currentArticle) {
    renderArticle(currentArticle, false);
    return;
  }

  if (articleId && window.elvertexSupabase) {
    const { data, error } = await window.elvertexSupabase
      .from("news_articles")
      .select("slug, title, summary, category, body, image_url, image_alt, published_at")
      .eq("slug", articleId)
      .eq("status", "published")
      .maybeSingle();

    if (error) {
      document.title = "Error al cargar la noticia — El Vèrtex";
      articleStatus.textContent = "No se pudo cargar la noticia. Inténtalo de nuevo más tarde.";
      console.error("Error al cargar la noticia:", error.message);
      return;
    }

    if (data) {
      data.date = new Intl.DateTimeFormat("es", { dateStyle: "long" }).format(new Date(data.published_at));
      renderArticle(data, true);
      return;
    }
  }

  document.title = "Noticia no encontrada — El Vèrtex";
  notFoundElement.hidden = false;
}

loadArticle();
