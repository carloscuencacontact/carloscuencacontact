const articles = [
  {
    id: "una-iniciativa-vecinal-transforma-la-plaza-en-punto-de-encuentro",
    category: "COMUNIDAD",
    title: "Una iniciativa vecinal transforma la plaza en punto de encuentro",
    summary: "La propuesta reúne a residentes de todas las edades en torno a nuevas actividades y espacios compartidos.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Grupo de personas reunidas al aire libre",
    date: "Hace 24 min",
    readingTime: "3 min de lectura"
  },
  {
    id: "el-festival-que-quiere-acercar-la-cultura-a-todos-los-barrios",
    category: "CULTURA",
    title: "El festival que quiere acercar la cultura a todos los barrios",
    summary: "Música, talleres y actividades gratuitas llenarán de vida diferentes rincones de la ciudad.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Amigos compartiendo una actividad en un parque",
    date: "Hace 1 h",
    readingTime: "4 min de lectura"
  },
  {
    id: "nuevos-proyectos-locales-ponen-el-foco-en-el-talento-joven",
    category: "INNOVACIÓN",
    title: "Nuevos proyectos locales ponen el foco en el talento joven",
    summary: "Una red de espacios colaborativos abre sus puertas para impulsar ideas y compartir conocimientos.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Equipo reunido alrededor de una mesa de trabajo",
    date: "Hace 2 h",
    readingTime: "5 min de lectura"
  },
  {
    id: "la-comarca-estudia-nuevas-conexiones-entre-sus-municipios",
    category: "SERVICIOS",
    title: "La comarca estudia nuevas conexiones entre sus municipios",
    summary: "La propuesta busca facilitar los desplazamientos diarios y mejorar la conexión con los servicios esenciales.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Vista urbana con calles y edificios",
    date: "Hoy, 12:20",
    readingTime: "4 min de lectura"
  },
  {
    id: "nuevas-iniciativas-locales-promueven-el-cuidado-del-entorno",
    category: "MEDIO AMBIENTE",
    title: "Nuevas iniciativas locales promueven el cuidado del entorno",
    summary: "Asociaciones y vecinos colaboran en acciones para proteger los espacios naturales de la Marina Alta.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Paisaje de montaña y naturaleza",
    date: "Hoy, 11:05",
    readingTime: "3 min de lectura"
  },
  {
    id: "los-centros-educativos-presentan-sus-proyectos-para-este-curso",
    category: "EDUCACIÓN",
    title: "Los centros educativos presentan sus proyectos para este curso",
    summary: "La programación incluye actividades abiertas a las familias y nuevas propuestas de aprendizaje.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Aula preparada para una jornada educativa",
    date: "Ayer, 17:40",
    readingTime: "3 min de lectura"
  },
  {
    id: "la-novia-de-adrian-explota",
    category: "SEGURIDAD",
    title: "La novia de Adrian explota",
    summary: "El programa contempla más recursos, coordinación entre equipos y nuevas medidas de prevención.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Calle urbana al anochecer",
    date: "Hoy, 10:42",
    readingTime: "4 min de lectura"
  },
  {
    id: "abierta-una-investigacion-tras-detectarse-incidencias-en-un-servicio-local",
    category: "INVESTIGACIÓN",
    title: "Abierta una investigación tras detectarse incidencias en un servicio local",
    summary: "Las autoridades han iniciado las diligencias y solicitan la colaboración de posibles testigos.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Documentos y notas sobre una mesa de trabajo",
    date: "Hoy, 09:15",
    readingTime: "3 min de lectura"
  },
  {
    id: "un-dispositivo-especial-regulara-el-trafico-durante-los-trabajos-de-mantenimiento",
    category: "TRÁFICO",
    title: "Un dispositivo especial regulará el tráfico durante los trabajos de mantenimiento",
    summary: "Los desvíos estarán señalizados y se recomienda planificar los desplazamientos con antelación.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Tráfico en una avenida al caer la tarde",
    date: "Ayer, 18:30",
    readingTime: "2 min de lectura"
  },
  {
    id: "el-pleno-debate-las-prioridades-de-inversion-para-el-proximo-ejercicio",
    category: "AYUNTAMIENTO",
    title: "El pleno debate las prioridades de inversión para el próximo ejercicio",
    summary: "Los grupos municipales presentan sus propuestas antes de la votación prevista para la próxima semana.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Edificio institucional con columnas",
    date: "Hoy, 11:30",
    readingTime: "5 min de lectura"
  },
  {
    id: "los-partidos-retoman-las-conversaciones-para-alcanzar-un-acuerdo-institucional",
    category: "PARLAMENTO",
    title: "Los partidos retoman las conversaciones para alcanzar un acuerdo institucional",
    summary: "Representantes de las distintas formaciones se reunirán de nuevo en una mesa de diálogo.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Personas reunidas alrededor de una mesa",
    date: "Hoy, 09:50",
    readingTime: "4 min de lectura"
  },
  {
    id: "presentan-un-plan-piloto-para-ampliar-el-acceso-a-la-vivienda-asequible",
    category: "POLÍTICAS PÚBLICAS",
    title: "Presentan un plan piloto para ampliar el acceso a la vivienda asequible",
    summary: "La propuesta se desarrollará en varias fases y contará con seguimiento público de sus resultados.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Edificios residenciales en una zona urbana",
    date: "Ayer, 17:10",
    readingTime: "3 min de lectura"
  },
  {
    id: "el-equipo-local-prepara-una-jornada-decisiva-con-el-apoyo-de-su-aficion",
    category: "FÚTBOL",
    title: "El equipo local prepara una jornada decisiva con el apoyo de su afición",
    summary: "El cuerpo técnico destaca el buen momento del grupo antes de un encuentro clave en casa.",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Balón de fútbol sobre el césped de un campo",
    date: "Hoy, 12:05",
    readingTime: "3 min de lectura"
  },
  {
    id: "el-club-anuncia-una-nueva-escuela-deportiva-abierta-a-jovenes-de-la-ciudad",
    category: "BALONCESTO",
    title: "El club anuncia una nueva escuela deportiva abierta a jóvenes de la ciudad",
    summary: "La iniciativa busca acercar el deporte base a más familias con entrenamientos semanales.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Partido de baloncesto en una cancha",
    date: "Hoy, 10:20",
    readingTime: "4 min de lectura"
  },
  {
    id: "la-carrera-popular-suma-una-nueva-ruta-y-abre-el-plazo-de-inscripcion",
    category: "ATLETISMO",
    title: "La carrera popular suma una nueva ruta y abre el plazo de inscripción",
    summary: "La cita deportiva volverá a recorrer las calles con propuestas para todas las edades.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Corredores participando en una carrera popular",
    date: "Ayer, 16:45",
    readingTime: "2 min de lectura"
  },
  {
    id: "una-exposicion-colectiva-reune-a-artistas-de-la-marina-alta",
    category: "ARTES VISUALES",
    title: "Una exposición colectiva reúne a artistas de la Marina Alta",
    summary: "La muestra propone un recorrido por distintas miradas y lenguajes creativos de la comarca.",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Obras expuestas en una galería de arte",
    date: "Hoy, 10:15",
    readingTime: "3 min de lectura"
  },
  {
    id: "la-musica-en-directo-vuelve-a-llenar-los-espacios-publicos",
    category: "MÚSICA",
    title: "La música en directo vuelve a llenar los espacios públicos",
    summary: "El ciclo cultural ofrecerá actuaciones abiertas y gratuitas durante las próximas semanas.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Público disfrutando de un concierto al aire libre",
    date: "Ayer, 19:30",
    readingTime: "4 min de lectura"
  },
  {
    id: "bibliotecas-de-la-comarca-impulsan-una-nueva-iniciativa-lectora",
    category: "LECTURA",
    title: "Bibliotecas de la comarca impulsan una nueva iniciativa lectora",
    summary: "El proyecto invita a compartir recomendaciones y descubrir autores locales.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Estanterías con libros en una biblioteca",
    date: "Ayer, 16:00",
    readingTime: "2 min de lectura"
  },
  {
    id: "el-municipio-presenta-el-programa-de-sus-fiestas-populares",
    category: "PROGRAMA",
    title: "El municipio presenta el programa de sus fiestas populares",
    summary: "La agenda reúne propuestas para todas las edades y actividades impulsadas por las asociaciones locales.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Celebración popular con luces y público",
    date: "Hoy, 09:45",
    readingTime: "3 min de lectura"
  },
  {
    id: "las-comisiones-festivas-abren-la-inscripcion-para-nuevos-participantes",
    category: "PARTICIPACIÓN",
    title: "Las comisiones festivas abren la inscripción para nuevos participantes",
    summary: "La convocatoria invita a vecinas y vecinos a colaborar en la organización de los actos.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Escenario preparado para una celebración nocturna",
    date: "Ayer, 18:00",
    readingTime: "2 min de lectura"
  },
  {
    id: "una-jornada-recupera-las-tradiciones-y-la-memoria-del-pueblo",
    category: "TRADICIONES",
    title: "Una jornada recupera las tradiciones y la memoria del pueblo",
    summary: "La iniciativa reunirá testimonios, música y actividades en torno a la cultura popular.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Mesas preparadas para una celebración comunitaria",
    date: "Ayer, 12:20",
    readingTime: "3 min de lectura"
  }
];

const articleId = new URLSearchParams(window.location.search).get("id");
const currentArticle = articles.find(article => article.id === articleId);
const articleElement = document.querySelector("#article");
const notFoundElement = document.querySelector("#article-not-found");

if (currentArticle) {
  document.title = `${currentArticle.title} — El Vèrtex`;
  document.querySelector("#article-category").textContent = currentArticle.category;
  document.querySelector("#article-title").textContent = currentArticle.title;
  document.querySelector("#article-summary").textContent = currentArticle.summary;
  document.querySelector("#article-date").textContent = currentArticle.date;
  document.querySelector("#article-reading-time").textContent = currentArticle.readingTime;
  const image = document.querySelector("#article-image");
  image.src = currentArticle.image;
  image.alt = currentArticle.imageAlt;
  articleElement.hidden = false;
} else {
  document.title = "Noticia no encontrada — El Vèrtex";
  notFoundElement.hidden = false;
}
