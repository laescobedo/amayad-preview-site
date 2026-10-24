/* AMAYAD — i18n v2.1 additions (Courses & workshops, Dachimilco pilot, Regional chapters).
   Loaded AFTER i18n-v2.js and deep-merged. Arrays replace earlier arrays.
   Keep keys identical across es / en / fr / de / it (check: node tools/check_i18n.js). */
(function () {
  function isObj(x) { return x && typeof x === "object" && !Array.isArray(x); }
  function merge(a, b) { Object.keys(b).forEach(function (k) { if (isObj(a[k]) && isObj(b[k])) merge(a[k], b[k]); else a[k] = b[k]; }); return a; }
  var V = {};

/* =============================== ESPAÑOL =============================== */
V.es = {
  nav: { courses: `Cursos y talleres`, dachimilco: `Dachimilco`, regions: `Regiones` },
  contact: { subjects: { courses: `Cursos y talleres`, dachimilco: `Proyecto piloto Dachimilco`, regions: `Capítulos regionales` } },
  home2: { quick: [
    { id: `membership`, i: `🤝`, t: `Membresía`, d: `5 niveles y patrocinio` },
    { id: `courses`, i: `🎓`, t: `Cursos y talleres`, d: `En PASE, Dachimilco y en línea` },
    { id: `dachimilco`, i: `🌱`, t: `Proyecto piloto Dachimilco`, d: `Agrivoltaica en una chinampa` },
    { id: `regions`, i: `🗺️`, t: `Regiones`, d: `6 macrorregiones AMAYAD` },
    { id: `programs`, i: `🚀`, t: `Programas`, d: `Embajadores, jóvenes, comités` },
    { id: `events`, i: `📅`, t: `Eventos`, d: `24 nov 2026: libro e iniciativa` },
    { id: `legislative`, i: `⚖️`, t: `Asuntos legislativos`, d: `Marco legal e incentivos` },
    { id: `library`, i: `📚`, t: `Biblioteca`, d: `Guías, estudios y leyes` },
    { id: `partnerships`, i: `🌐`, t: `Alianzas y ecosistema`, d: `Quién participa` }
  ] },
  prog: { courses: { note: `Aún no hay cursos abiertos. Consulta el catálogo propuesto y las sedes en coordinación en «Cursos y talleres».` } },
  courses: {
    eyebrow: `Formación`, title: `Cursos y talleres`,
    lead: `Aprende agrivoltaica donde ya se practica: en campo, en formato híbrido o en línea. Catálogo propuesto — preinscríbete y te avisamos cuando haya fechas.`,
    seeCatalog: `Ver catálogo de cursos`, preregister: `Me interesa / preinscripción`,
    sitesTitle: `Sedes propuestas`, sitesLead: `Sitios demostrativos donde planeamos impartir los talleres de campo.`,
    sitesNote: `Sedes en coordinación. La mención de la UNAM, de PASE y del Dr. Aarón Sánchez Juárez describe la sede y el instructor propuestos; no implica aval, certificación ni respaldo institucional. Fechas, cupos y costos se publicarán cuando se confirmen.`,
    catalogTitle: `Catálogo propuesto`, catalogLead: `Filtra por sede o por público. Todos los cursos están en estado «planeado».`,
    catalogNote: `Catálogo indicativo: contenidos, duración y formato pueden cambiar. No se publican fechas ni precios hasta que estén confirmados.`,
    fLocation: `Sede`, fAudience: `Público`,
    preTitle: `Preinscripción`, preText: `Dinos qué curso y sede te interesan. Usaremos tu registro para definir fechas y grupos, y te avisaremos primero.`,
    teach: `Quiero impartir o proponer un curso`,
    evTitle: `Cursos y días de campo en PASE y Dachimilco`, evText: `Planeados, sin fechas aún. Preinscríbete para recibir la convocatoria.`,
    hosts: `Anfitrión`, instructor: `Instructor propuesto`, coursesHere: `Cursos en esta sede`, source: `Fuente`,
    none: `No hay cursos con estos filtros.`, audience: `Público`, where: `Sedes`, interested: `Me interesa`,
    anyCourse: `Cualquiera / aún no sé`, anyLocation: `Cualquiera / la más cercana`,
    status: { coordination: `En coordinación`, development: `En desarrollo`, available: `Disponible`, planned: `Planeado`, open: `Inscripciones abiertas` },
    fmt: { field: `Taller de campo`, hybrid: `Híbrido`, online: `En línea` },
    aud: { farmers: `Agricultores`, solar: `Profesionales solares`, students: `Estudiantes`, officials: `Funcionarios` }
  },
  dachi: {
    eyebrow: `Proyecto piloto`, statusTag: `En desarrollo`,
    homeTitle: `Dachimilco: agrivoltaica en una chinampa`,
    homeText: `Un piloto en Cuemanco, Xochimilco, para comparar configuraciones solares sobre cultivos, formar a agricultores y estudiantes, y generar datos abiertos para México.`,
    homeCta: `Conocer Dachimilco`, supportCta: `Apoyar / colaborar`,
    lead: `Piloto agrivoltaico en una chinampa de Xochimilco: laboratorio vivo, centro de formación y modelo replicable donde la energía solar y la agricultura tradicional trabajan juntas.`,
    websiteCta: `Sitio web de Dachimilco`, websiteSoon: `Dachimilco tendrá su propio sitio web próximamente.`,
    jContext: `Contexto`, jObjectives: `Objetivos`, jDesign: `Diseño`, jTech: `Tecnología`, jRoadmap: `Fases`, jNeeds: `Necesidades`, jSupport: `Apoyar`,
    contextTitle: `La chinampa como laboratorio`,
    contextText1: `Las chinampas de Xochimilco son un sistema agrícola tradicional rodeado de canales. Dachimilco propone instalar paneles solares sobre cultivos en una chinampa cercana al embarcadero de Cuemanco, sin dejar de producir alimentos.`,
    contextText2: `La energía generada se usaría para los cultivos y para los locatarios del mercado del embarcadero, y una parte podría venderse mediante generación distribuida.`,
    whyXochi: [`Tradición agrícola: un lugar ideal para demostrar los beneficios de la agrivoltaica.`, `Conservación del patrimonio: tecnología que acompaña y fortalece las prácticas tradicionales.`, `Condiciones climáticas adecuadas para producir energía y alimentos a la vez.`, `Educación y conciencia comunitaria sobre energías limpias.`, `Un modelo replicable en otras chinampas y zonas periurbanas.`],
    factsTitle: `Datos clave del diseño`,
    facts: [
      { k: `Ubicación`, v: `Chinampa en Cuemanco, Xochimilco (≈235 m del embarcadero)` },
      { k: `Tipo`, v: `Piloto de investigación y demostración` },
      { k: `Configuraciones`, v: `3: fija elevada, seguidor de un eje y bifacial vertical` },
      { k: `Parcelas`, v: `27 activas bajo paneles + parcelas testigo sin paneles` },
      { k: `Potencia planeada`, v: `≈90 kWp (30 kWp por configuración)` },
      { k: `Estado`, v: `En desarrollo` }
    ],
    objTitle: `Objetivos`, objLead: `Lo que el piloto busca demostrar y aportar.`,
    objectives: [
      { i: `📊`, t: `Datos y comparación`, d: `Comparar configuraciones fotovoltaicas sobre distintos cultivos con sensores de suelo, clima y radiación.` },
      { i: `🎓`, t: `Centro de formación`, d: `Capacitar a agricultores locales, estudiantes, empresas solares, universidades y asociaciones.` },
      { i: `🤝`, t: `Colaboración y política pública`, d: `Compartir conocimiento con instituciones y aportar datos para políticas de agricultura y energía.` },
      { i: `💹`, t: `Modelos de negocio`, d: `Evaluar costos y beneficios, y compartir datos de CAPEX, OPEX y retorno para informar decisiones.` }
    ],
    designTitle: `Diseño agrivoltaico`, designLead: `Tres configuraciones, cada una con 9 parcelas bajo paneles, más parcelas testigo sin paneles para comparar.`,
    configs: [
      { i: `🅰️`, t: `(a) Estructura fija elevada`, d: `Paneles a cierta altura, con mucha luz y buena circulación de aire: para cultivos que requieren luz directa.` },
      { i: `🅱️`, t: `(b) Montaje inclinado / seguidor de un eje`, d: `Optimiza la captación solar y da sombra parcial intermitente: para cultivos que toleran o aprovechan algo de sombra.` },
      { i: `🆑`, t: `(c) Bifacial vertical`, d: `Paneles verticales que captan luz por ambas caras: útil para hileras alternas de cultivo y para aprovechar el espacio.` }
    ],
    cropsTitle: `Cultivos considerados`,
    crops: [`Lechuga`, `Brócoli`, `Kale`, `Moras`, `Papa`, `Trigo`, `Arúgula`, `Dalias`, `Gladiolas`],
    designNote: `Diseño conceptual (2024); la configuración final puede cambiar.`,
    techTitle: `Tecnología y agua`, techLead: `Agricultura digital integrada al diseño, más un plan de manejo y reciclaje de paneles y baterías al final de su vida útil.`,
    tech: [
      { i: `📡`, t: `Sensores e IoT`, d: `Temperatura, humedad y pH del suelo, nitrógeno, temperatura del aire y radiación solar en cada parcela.` },
      { i: `🤖`, t: `IA para el riego`, d: `Análisis de datos para automatizar el riego y optimizar agua y nutrientes.` },
      { i: `🖥️`, t: `Monitoreo SCADA`, d: `Seguimiento en tiempo real del rendimiento de los sistemas solares y mantenimiento preventivo.` },
      { i: `🌧️`, t: `Captación pluvial`, d: `Recolectar la lluvia que escurre de los paneles y estructuras para regar.` },
      { i: `💧`, t: `Riego inteligente`, d: `Riego por goteo ajustado a las necesidades de cada planta y del suelo.` },
      { i: `🔋`, t: `Almacenamiento`, d: `Baterías para disponer de energía de noche o en días nublados y redistribuirla.` }
    ],
    benefitsTitle: `Beneficios esperados`,
    benefits: [
      { i: `🏘️`, t: `Comunidad`, d: `Energía para los locatarios del mercado de Cuemanco, talleres y visitas guiadas.` },
      { i: `🌿`, t: `Medio ambiente`, d: `Uso eficiente del agua, refugio para polinizadores, menos energía fósil y protección del suelo.` },
      { i: `🔬`, t: `Conocimiento`, d: `Un laboratorio vivo con datos útiles para investigación, empresas agrícolas y solares, y gobierno.` }
    ],
    roadmapTitle: `Fases`, roadmapLead: `Hoja de ruta propuesta, sin fechas comprometidas.`,
    roadmap: [
      { y: `2024`, t: `Concepto y diseño`, d: `Definición de objetivos, diseño y estimación de presupuesto.` },
      { y: `Ahora`, t: `Alianzas y financiamiento`, d: `Búsqueda de aliados técnicos y académicos, patrocinadores y preparación del crowdfunding.`, planned: true },
      { y: `Siguiente`, t: `Construcción y siembra`, d: `Instalación de las tres configuraciones, sensores, captación pluvial y siembra.`, planned: true },
      { y: `Operación`, t: `Datos y formación`, d: `Monitoreo, comparación con parcelas testigo, cursos y visitas guiadas.`, planned: true },
      { y: `Réplica`, t: `Datos abiertos y escalamiento`, d: `Compartir resultados para investigación y políticas públicas, y replicar en otras chinampas.`, planned: true }
    ],
    needsTitle: `Lo que necesita el piloto`, needsLead: `Formas concretas de hacerlo realidad.`,
    needs: [
      { i: `💰`, t: `Financiamiento`, d: `Crowdfunding, patrocinadores y fondos para la construcción y la operación.` },
      { i: `⚙️`, t: `Aliados tecnológicos`, d: `Módulos, seguidores, estructuras, inversores, sensores, riego y almacenamiento.` },
      { i: `🎓`, t: `Aliados académicos`, d: `Investigación conjunta, tesis, prácticas profesionales y publicaciones.` },
      { i: `🙌`, t: `Comunidad y voluntariado`, d: `Chinamperos, comunicación, documentación y apoyo en campo.` }
    ],
    budgetTag: `Estimación`, budgetTitle: `Presupuesto estimado`,
    budgetNote: `Estimación preliminar: la base incluye paneles, inversores, seguidores, SCADA, mano de obra y plantación; los complementos suman captación pluvial, almacenamiento, riego inteligente y sensores. Sujeto a actualización.`,
    budgetBase: `Sistema base`, budgetAddons: `Con todos los complementos`,
    supportEyebrow: `Súmate`, supportTitle: `Apoya Dachimilco`,
    supportText: `Estamos preparando una campaña de crowdfunding y buscando aliados. Registra tu interés y te contactaremos cuando las condiciones estén definidas.`,
    supportWays: [`Interés en el crowdfunding`, `Patrocinio en especie o con equipo`, `Colaboración en investigación`, `Voluntariado y comunicación`, `Visitas y cursos`],
    crowdLink: `Ir a la campaña ↗`,
    crowdNote: `Aquí solo registras tu interés: este sitio no procesa pagos ni ofrece rendimientos. Las condiciones del crowdfunding se publicarán cuando estén definidas.`,
    coursesTitle: `Cursos planeados en Dachimilco`,
    sourceNote: `Fuente: documentación conceptual del proyecto (2024). Las cifras de diseño y presupuesto son estimaciones de esa etapa y pueden cambiar. Dachimilco tendrá su propio sitio web, desarrollado por otro equipo.`
  },
  reg2: {
    eyebrow: `Capítulos regionales`, statusTag: `Estructura regional propuesta — en definición`,
    homeTitle: `Seis regiones, seis climas`,
    homeText: `AMAYAD planea organizarse en 6 capítulos regionales según el clima, porque cada región tiene cultivos, retos y oportunidades agrivoltaicas distintas.`,
    homeCta: `Ver las regiones`,
    memTitle: `Elige tu región`, memText: `Al registrarte puedes indicar tu capítulo regional (propuesta en definición) para conectar con miembros de tu zona.`,
    title: `Regiones de AMAYAD`,
    lead: `Propuesta de 6 capítulos regionales basada en las zonas climáticas de México. Cada capítulo reunirá a agricultores, empresas solares, academia y gobierno de su región.`,
    legend: `Regiones`, mapHint: `Pasa el cursor o toca un estado para ver su región; elige una región en la leyenda.`,
    mapAlt: `Mapa de México con los estados coloreados según la región propuesta`, markerTitle: `CDMX: PASE (Topilejo) y Dachimilco (Xochimilco)`,
    pickTitle: `Elige una región`, pickText: `Haz clic en el mapa o en la leyenda para ver estados, clima, cultivos principales y oportunidad agrivoltaica.`,
    allTitle: `Las 6 regiones propuestas`, allLead: `Agrupación por estado, pensada para facilitar la organización de capítulos.`,
    sourceNote: `Propuesta de AMAYAD basada en la carta de climas del INEGI (clasificación de Köppen modificada por E. García). Agrupación aproximada: los climas no siguen las fronteras estatales. Cultivos y oportunidades son descripciones cualitativas. Mapa: Natural Earth (dominio público).`,
    chapterTitle: `¿Quieres impulsar el capítulo de tu región?`, chapterText: `Buscamos personas y organizaciones que ayuden a formar cada capítulo regional.`,
    chapterCta: `Proponer / coordinar un capítulo`,
    states: `Estados`, climate: `Clima`, crops: `Cultivos principales`, opportunity: `Oportunidad agrivoltaica`, region: `Región`,
    clear: `Ver todas`, showOnMap: `Ver en el mapa`, optUnsure: `No estoy seguro/a`, optAbroad: `Fuera de México`
  },
  f: {
    labels: { region: `Región (capítulo)`, course: `Curso`, site: `Sede`, format: `Formato preferido`, audience: `Participo como`, dachiInterest: `¿Cómo te gustaría apoyar?` },
    titles: { course: `Preinscripción a cursos y talleres`, dachimilco: `Apoyar Dachimilco` },
    intros: { course: `Cursos planeados, sin fechas ni precios todavía. Tu preinscripción nos ayuda a definir grupos y sedes; te avisaremos primero.`, dachimilco: `Registra tu interés en apoyar el piloto. No se procesan pagos: te contactaremos cuando haya condiciones definidas.` },
    submits: { course: `Preinscribirme`, dachimilco: `Registrar mi interés` },
    opts: {
      format: { field: `Taller de campo`, hybrid: `Híbrido`, online: `En línea`, any: `Cualquiera` },
      audience: { farmers: `Agricultor/a`, solar: `Profesional solar`, students: `Estudiante`, officials: `Funcionario/a`, other: `Otro` },
      dachiInterest: { crowdfunding: `Interés en el crowdfunding`, sponsorPlot: `Patrocinar una parcela`, technical: `Aliado tecnológico / en especie`, research: `Investigación y datos`, volunteer: `Voluntariado`, visit: `Visitas y cursos`, media: `Medios y difusión`, other: `Otro` }
    }
  }
};

/* =============================== ENGLISH =============================== */
V.en = {
  nav: { courses: `Courses & workshops`, dachimilco: `Dachimilco`, regions: `Regions` },
  contact: { subjects: { courses: `Courses & workshops`, dachimilco: `Dachimilco pilot project`, regions: `Regional chapters` } },
  home2: { quick: [
    { id: `membership`, i: `🤝`, t: `Membership`, d: `5 tiers and sponsorship` },
    { id: `courses`, i: `🎓`, t: `Courses & workshops`, d: `At PASE, Dachimilco and online` },
    { id: `dachimilco`, i: `🌱`, t: `Dachimilco pilot project`, d: `Agrivoltaics on a chinampa` },
    { id: `regions`, i: `🗺️`, t: `Regions`, d: `6 AMAYAD macro-regions` },
    { id: `programs`, i: `🚀`, t: `Programmes`, d: `Ambassadors, young farmers, committees` },
    { id: `events`, i: `📅`, t: `Events`, d: `24 Nov 2026: book and initiative` },
    { id: `legislative`, i: `⚖️`, t: `Legislative affairs`, d: `Legal framework and incentives` },
    { id: `library`, i: `📚`, t: `Library`, d: `Guides, studies and laws` },
    { id: `partnerships`, i: `🌐`, t: `Partnerships & ecosystem`, d: `Who takes part` }
  ] },
  prog: { courses: { note: `No courses are open yet. See the proposed catalogue and the sites in coordination under “Courses & workshops”.` } },
  courses: {
    eyebrow: `Training`, title: `Courses & workshops`,
    lead: `Learn agrivoltaics where it is already practised: in the field, hybrid or online. Proposed catalogue — pre-register and we'll let you know when dates are set.`,
    seeCatalog: `See course catalogue`, preregister: `I'm interested / pre-register`,
    sitesTitle: `Proposed sites`, sitesLead: `Demonstration sites where we plan to hold the field workshops.`,
    sitesNote: `Sites in coordination. Mentions of UNAM, PASE and Dr. Aarón Sánchez Juárez describe the proposed site and instructor; they do not imply endorsement, certification or institutional backing. Dates, places and fees will be published once confirmed.`,
    catalogTitle: `Proposed catalogue`, catalogLead: `Filter by site or audience. All courses are “planned”.`,
    catalogNote: `Indicative catalogue: content, length and format may change. No dates or prices are published until confirmed.`,
    fLocation: `Site`, fAudience: `Audience`,
    preTitle: `Pre-registration`, preText: `Tell us which course and site interest you. We'll use your registration to set dates and groups, and you'll hear first.`,
    teach: `I want to teach or propose a course`,
    evTitle: `Courses and field days at PASE and Dachimilco`, evText: `Planned, no dates yet. Pre-register to get the call.`,
    hosts: `Host`, instructor: `Proposed instructor`, coursesHere: `Courses at this site`, source: `Source`,
    none: `No courses match these filters.`, audience: `Audience`, where: `Sites`, interested: `I'm interested`,
    anyCourse: `Any / not sure yet`, anyLocation: `Any / the nearest`,
    status: { coordination: `In coordination`, development: `In development`, available: `Available`, planned: `Planned`, open: `Registration open` },
    fmt: { field: `Field workshop`, hybrid: `Hybrid`, online: `Online` },
    aud: { farmers: `Farmers`, solar: `Solar professionals`, students: `Students`, officials: `Officials` }
  },
  dachi: {
    eyebrow: `Pilot project`, statusTag: `In development`,
    homeTitle: `Dachimilco: agrivoltaics on a chinampa`,
    homeText: `A pilot in Cuemanco, Xochimilco, to compare solar configurations over crops, train farmers and students, and produce open data for Mexico.`,
    homeCta: `Discover Dachimilco`, supportCta: `Support / collaborate`,
    lead: `An agrivoltaic pilot on a chinampa in Xochimilco: a living lab, a training centre and a replicable model where solar energy and traditional farming work together.`,
    websiteCta: `Dachimilco website`, websiteSoon: `Dachimilco will have its own website soon.`,
    jContext: `Context`, jObjectives: `Objectives`, jDesign: `Design`, jTech: `Technology`, jRoadmap: `Phases`, jNeeds: `Needs`, jSupport: `Support`,
    contextTitle: `The chinampa as a laboratory`,
    contextText1: `Xochimilco's chinampas are a traditional farming system surrounded by canals. Dachimilco proposes installing solar panels over crops on a chinampa near the Cuemanco pier, while continuing to grow food.`,
    contextText2: `The energy would be used for the crops and for the stallholders of the pier market, and part of it could be sold through distributed generation.`,
    whyXochi: [`Farming tradition: an ideal place to demonstrate the benefits of agrivoltaics.`, `Heritage conservation: technology that supports and strengthens traditional practices.`, `Suitable climate to produce energy and food at the same time.`, `Community education and awareness about clean energy.`, `A model that can be replicated on other chinampas and peri-urban areas.`],
    factsTitle: `Key design facts`,
    facts: [
      { k: `Location`, v: `Chinampa in Cuemanco, Xochimilco (≈235 m from the pier)` },
      { k: `Type`, v: `Research and demonstration pilot` },
      { k: `Configurations`, v: `3: elevated fixed, single-axis tracker and vertical bifacial` },
      { k: `Plots`, v: `27 active plots under panels + control plots without panels` },
      { k: `Planned capacity`, v: `≈90 kWp (30 kWp per configuration)` },
      { k: `Status`, v: `In development` }
    ],
    objTitle: `Objectives`, objLead: `What the pilot aims to demonstrate and contribute.`,
    objectives: [
      { i: `📊`, t: `Data and comparison`, d: `Compare PV configurations over different crops with soil, weather and radiation sensors.` },
      { i: `🎓`, t: `Training centre`, d: `Train local farmers, students, solar companies, universities and associations.` },
      { i: `🤝`, t: `Collaboration and public policy`, d: `Share knowledge with institutions and provide data for agriculture and energy policy.` },
      { i: `💹`, t: `Business models`, d: `Assess costs and benefits, and share CAPEX, OPEX and return data to inform decisions.` }
    ],
    designTitle: `Agrivoltaic design`, designLead: `Three configurations, each with 9 plots under panels, plus control plots without panels for comparison.`,
    configs: [
      { i: `🅰️`, t: `(a) Elevated fixed structure`, d: `Panels at height, with plenty of light and air flow: for crops that need direct light.` },
      { i: `🅱️`, t: `(b) Tilted mount / single-axis tracker`, d: `Optimises solar capture while giving intermittent partial shade: for crops that tolerate or benefit from some shade.` },
      { i: `🆑`, t: `(c) Vertical bifacial`, d: `Vertical panels that capture light on both faces: useful for alternating crop rows and making the most of space.` }
    ],
    cropsTitle: `Crops considered`,
    crops: [`Lettuce`, `Broccoli`, `Kale`, `Blackberries`, `Potato`, `Wheat`, `Arugula`, `Dahlias`, `Gladioli`],
    designNote: `Conceptual design (2024); the final configuration may change.`,
    techTitle: `Technology and water`, techLead: `Digital agriculture built into the design, plus a plan for handling and recycling panels and batteries at end of life.`,
    tech: [
      { i: `📡`, t: `Sensors and IoT`, d: `Soil temperature, moisture and pH, nitrogen, air temperature and solar radiation in every plot.` },
      { i: `🤖`, t: `AI for irrigation`, d: `Data analysis to automate irrigation and optimise water and nutrients.` },
      { i: `🖥️`, t: `SCADA monitoring`, d: `Real-time tracking of solar system performance and preventive maintenance.` },
      { i: `🌧️`, t: `Rainwater harvesting`, d: `Collecting rain running off panels and structures for irrigation.` },
      { i: `💧`, t: `Smart irrigation`, d: `Drip irrigation adjusted to each plant's and the soil's needs.` },
      { i: `🔋`, t: `Storage`, d: `Batteries to have energy at night or on cloudy days and to redistribute it.` }
    ],
    benefitsTitle: `Expected benefits`,
    benefits: [
      { i: `🏘️`, t: `Community`, d: `Energy for the Cuemanco market stallholders, workshops and guided visits.` },
      { i: `🌿`, t: `Environment`, d: `Efficient water use, refuge for pollinators, less fossil energy and soil protection.` },
      { i: `🔬`, t: `Knowledge`, d: `A living lab with useful data for research, farming and solar companies, and government.` }
    ],
    roadmapTitle: `Phases`, roadmapLead: `Proposed roadmap, with no committed dates.`,
    roadmap: [
      { y: `2024`, t: `Concept and design`, d: `Objectives, design and budget estimate defined.` },
      { y: `Now`, t: `Partners and funding`, d: `Looking for technical and academic partners and sponsors, and preparing the crowdfunding.`, planned: true },
      { y: `Next`, t: `Construction and planting`, d: `Installing the three configurations, sensors and rainwater harvesting, and planting.`, planned: true },
      { y: `Operation`, t: `Data and training`, d: `Monitoring, comparison with control plots, courses and guided visits.`, planned: true },
      { y: `Replication`, t: `Open data and scale-up`, d: `Sharing results for research and public policy, and replicating on other chinampas.`, planned: true }
    ],
    needsTitle: `What the pilot needs`, needsLead: `Concrete ways to make it happen.`,
    needs: [
      { i: `💰`, t: `Funding`, d: `Crowdfunding, sponsors and funds for construction and operation.` },
      { i: `⚙️`, t: `Technology partners`, d: `Modules, trackers, structures, inverters, sensors, irrigation and storage.` },
      { i: `🎓`, t: `Academic partners`, d: `Joint research, theses, internships and publications.` },
      { i: `🙌`, t: `Community and volunteers`, d: `Chinampa farmers, communication, documentation and field support.` }
    ],
    budgetTag: `Estimate`, budgetTitle: `Estimated budget`,
    budgetNote: `Preliminary estimate: the base covers panels, inverters, trackers, SCADA, labour and planting; add-ons cover rainwater harvesting, storage, smart irrigation and sensors. Subject to update.`,
    budgetBase: `Base system`, budgetAddons: `With all add-ons`,
    supportEyebrow: `Get involved`, supportTitle: `Support Dachimilco`,
    supportText: `We are preparing a crowdfunding campaign and looking for partners. Register your interest and we'll contact you when the terms are defined.`,
    supportWays: [`Interest in the crowdfunding`, `In-kind or equipment sponsorship`, `Research collaboration`, `Volunteering and communication`, `Visits and courses`],
    crowdLink: `Go to the campaign ↗`,
    crowdNote: `Here you only register interest: this site processes no payments and offers no returns. Crowdfunding terms will be published once defined.`,
    coursesTitle: `Courses planned at Dachimilco`,
    sourceNote: `Source: the project's concept documentation (2024). Design and budget figures are estimates from that stage and may change. Dachimilco will have its own website, built by another team.`
  },
  reg2: {
    eyebrow: `Regional chapters`, statusTag: `Proposed regional structure — in definition`,
    homeTitle: `Six regions, six climates`,
    homeText: `AMAYAD plans to organise into 6 regional chapters by climate, because each region has different crops, challenges and agrivoltaic opportunities.`,
    homeCta: `See the regions`,
    memTitle: `Choose your region`, memText: `When you register you can indicate your regional chapter (proposal in definition) to connect with members near you.`,
    title: `AMAYAD regions`,
    lead: `A proposal of 6 regional chapters based on Mexico's climate zones. Each chapter will bring together farmers, solar companies, academia and government in its region.`,
    legend: `Regions`, mapHint: `Hover over or tap a state to see its region; choose a region in the legend.`,
    mapAlt: `Map of Mexico with states coloured by proposed region`, markerTitle: `Mexico City: PASE (Topilejo) and Dachimilco (Xochimilco)`,
    pickTitle: `Choose a region`, pickText: `Click the map or the legend to see states, climate, main crops and agrivoltaic opportunity.`,
    allTitle: `The 6 proposed regions`, allLead: `Grouped by state, to make organising chapters easier.`,
    sourceNote: `AMAYAD proposal based on INEGI's climate map (Köppen classification modified by E. García). Approximate grouping: climates do not follow state borders. Crops and opportunities are qualitative descriptions. Map: Natural Earth (public domain).`,
    chapterTitle: `Want to drive your region's chapter?`, chapterText: `We are looking for people and organisations to help form each regional chapter.`,
    chapterCta: `Propose / coordinate a chapter`,
    states: `States`, climate: `Climate`, crops: `Main crops`, opportunity: `Agrivoltaic opportunity`, region: `Region`,
    clear: `Show all`, showOnMap: `Show on map`, optUnsure: `Not sure`, optAbroad: `Outside Mexico`
  },
  f: {
    labels: { region: `Region (chapter)`, course: `Course`, site: `Site`, format: `Preferred format`, audience: `I take part as`, dachiInterest: `How would you like to help?` },
    titles: { course: `Course & workshop pre-registration`, dachimilco: `Support Dachimilco` },
    intros: { course: `Planned courses, with no dates or prices yet. Your pre-registration helps us define groups and sites; you'll hear first.`, dachimilco: `Register your interest in supporting the pilot. No payments are processed: we'll contact you once terms are defined.` },
    submits: { course: `Pre-register`, dachimilco: `Register my interest` },
    opts: {
      format: { field: `Field workshop`, hybrid: `Hybrid`, online: `Online`, any: `Any` },
      audience: { farmers: `Farmer`, solar: `Solar professional`, students: `Student`, officials: `Public official`, other: `Other` },
      dachiInterest: { crowdfunding: `Interest in the crowdfunding`, sponsorPlot: `Sponsor a plot`, technical: `Technology / in-kind partner`, research: `Research and data`, volunteer: `Volunteering`, visit: `Visits and courses`, media: `Media and outreach`, other: `Other` }
    }
  }
};

/* =============================== FRANÇAIS =============================== */
V.fr = {
  nav: { courses: `Cours et ateliers`, dachimilco: `Dachimilco`, regions: `Régions` },
  contact: { subjects: { courses: `Cours et ateliers`, dachimilco: `Projet pilote Dachimilco`, regions: `Chapitres régionaux` } },
  home2: { quick: [
    { id: `membership`, i: `🤝`, t: `Adhésion`, d: `5 niveaux et parrainage` },
    { id: `courses`, i: `🎓`, t: `Cours et ateliers`, d: `À PASE, à Dachimilco et en ligne` },
    { id: `dachimilco`, i: `🌱`, t: `Projet pilote Dachimilco`, d: `Agrivoltaïsme sur une chinampa` },
    { id: `regions`, i: `🗺️`, t: `Régions`, d: `6 macrorégions AMAYAD` },
    { id: `programs`, i: `🚀`, t: `Programmes`, d: `Ambassadeurs, jeunes, comités` },
    { id: `events`, i: `📅`, t: `Événements`, d: `24 nov. 2026 : livre et initiative` },
    { id: `legislative`, i: `⚖️`, t: `Affaires législatives`, d: `Cadre juridique et incitations` },
    { id: `library`, i: `📚`, t: `Bibliothèque`, d: `Guides, études et lois` },
    { id: `partnerships`, i: `🌐`, t: `Partenariats et écosystème`, d: `Qui participe` }
  ] },
  prog: { courses: { note: `Aucun cours n'est encore ouvert. Consultez le catalogue proposé et les sites en coordination dans « Cours et ateliers ».` } },
  courses: {
    eyebrow: `Formation`, title: `Cours et ateliers`,
    lead: `Apprenez l'agrivoltaïsme là où il se pratique déjà : sur le terrain, en hybride ou en ligne. Catalogue proposé — préinscrivez-vous et nous vous préviendrons dès que les dates seront fixées.`,
    seeCatalog: `Voir le catalogue des cours`, preregister: `Je suis intéressé·e / préinscription`,
    sitesTitle: `Sites proposés`, sitesLead: `Sites de démonstration où nous prévoyons d'organiser les ateliers de terrain.`,
    sitesNote: `Sites en coordination. La mention de l'UNAM, de PASE et du Dr Aarón Sánchez Juárez décrit le site et l'instructeur proposés ; elle n'implique ni aval, ni certification, ni soutien institutionnel. Dates, places et tarifs seront publiés une fois confirmés.`,
    catalogTitle: `Catalogue proposé`, catalogLead: `Filtrez par site ou par public. Tous les cours sont « prévus ».`,
    catalogNote: `Catalogue indicatif : contenu, durée et format peuvent changer. Aucune date ni aucun prix n'est publié avant confirmation.`,
    fLocation: `Site`, fAudience: `Public`,
    preTitle: `Préinscription`, preText: `Dites-nous quel cours et quel site vous intéressent. Votre inscription nous aidera à fixer dates et groupes, et vous serez informé·e en premier.`,
    teach: `Je veux enseigner ou proposer un cours`,
    evTitle: `Cours et journées au champ à PASE et Dachimilco`, evText: `Prévus, sans dates pour l'instant. Préinscrivez-vous pour recevoir l'appel.`,
    hosts: `Hôte`, instructor: `Instructeur proposé`, coursesHere: `Cours sur ce site`, source: `Source`,
    none: `Aucun cours ne correspond à ces filtres.`, audience: `Public`, where: `Sites`, interested: `Ça m'intéresse`,
    anyCourse: `N'importe lequel / je ne sais pas encore`, anyLocation: `N'importe lequel / le plus proche`,
    status: { coordination: `En coordination`, development: `En développement`, available: `Disponible`, planned: `Prévu`, open: `Inscriptions ouvertes` },
    fmt: { field: `Atelier de terrain`, hybrid: `Hybride`, online: `En ligne` },
    aud: { farmers: `Agriculteurs`, solar: `Professionnels du solaire`, students: `Étudiants`, officials: `Agents publics` }
  },
  dachi: {
    eyebrow: `Projet pilote`, statusTag: `En développement`,
    homeTitle: `Dachimilco : l'agrivoltaïsme sur une chinampa`,
    homeText: `Un pilote à Cuemanco, Xochimilco, pour comparer des configurations solaires au-dessus des cultures, former agriculteurs et étudiants, et produire des données ouvertes pour le Mexique.`,
    homeCta: `Découvrir Dachimilco`, supportCta: `Soutenir / collaborer`,
    lead: `Un pilote agrivoltaïque sur une chinampa de Xochimilco : laboratoire vivant, centre de formation et modèle reproductible où énergie solaire et agriculture traditionnelle travaillent ensemble.`,
    websiteCta: `Site web de Dachimilco`, websiteSoon: `Dachimilco aura bientôt son propre site web.`,
    jContext: `Contexte`, jObjectives: `Objectifs`, jDesign: `Conception`, jTech: `Technologie`, jRoadmap: `Phases`, jNeeds: `Besoins`, jSupport: `Soutenir`,
    contextTitle: `La chinampa comme laboratoire`,
    contextText1: `Les chinampas de Xochimilco sont un système agricole traditionnel entouré de canaux. Dachimilco propose d'installer des panneaux solaires au-dessus des cultures sur une chinampa proche de l'embarcadère de Cuemanco, tout en continuant à produire des aliments.`,
    contextText2: `L'énergie produite servirait aux cultures et aux commerçants du marché de l'embarcadère ; une partie pourrait être vendue via la production décentralisée.`,
    whyXochi: [`Tradition agricole : un lieu idéal pour démontrer les bénéfices de l'agrivoltaïsme.`, `Préservation du patrimoine : une technologie qui accompagne et renforce les pratiques traditionnelles.`, `Un climat adapté pour produire énergie et aliments en même temps.`, `Éducation et sensibilisation de la communauté aux énergies propres.`, `Un modèle reproductible sur d'autres chinampas et zones périurbaines.`],
    factsTitle: `Données clés de la conception`,
    facts: [
      { k: `Emplacement`, v: `Chinampa à Cuemanco, Xochimilco (≈235 m de l'embarcadère)` },
      { k: `Type`, v: `Pilote de recherche et de démonstration` },
      { k: `Configurations`, v: `3 : fixe surélevée, tracker mono-axe et bifaciale verticale` },
      { k: `Parcelles`, v: `27 parcelles actives sous panneaux + parcelles témoins sans panneaux` },
      { k: `Puissance prévue`, v: `≈90 kWc (30 kWc par configuration)` },
      { k: `Statut`, v: `En développement` }
    ],
    objTitle: `Objectifs`, objLead: `Ce que le pilote veut démontrer et apporter.`,
    objectives: [
      { i: `📊`, t: `Données et comparaison`, d: `Comparer des configurations photovoltaïques sur différentes cultures grâce à des capteurs de sol, de météo et de rayonnement.` },
      { i: `🎓`, t: `Centre de formation`, d: `Former agriculteurs locaux, étudiants, entreprises solaires, universités et associations.` },
      { i: `🤝`, t: `Collaboration et politiques publiques`, d: `Partager les connaissances avec les institutions et fournir des données pour les politiques agricoles et énergétiques.` },
      { i: `💹`, t: `Modèles économiques`, d: `Évaluer coûts et bénéfices, et partager les données de CAPEX, d'OPEX et de rentabilité pour éclairer les décisions.` }
    ],
    designTitle: `Conception agrivoltaïque`, designLead: `Trois configurations, chacune avec 9 parcelles sous panneaux, plus des parcelles témoins sans panneaux pour comparer.`,
    configs: [
      { i: `🅰️`, t: `(a) Structure fixe surélevée`, d: `Panneaux en hauteur, beaucoup de lumière et une bonne circulation d'air : pour les cultures qui ont besoin de lumière directe.` },
      { i: `🅱️`, t: `(b) Montage incliné / tracker mono-axe`, d: `Optimise la captation solaire tout en offrant une ombre partielle intermittente : pour les cultures qui tolèrent ou apprécient un peu d'ombre.` },
      { i: `🆑`, t: `(c) Bifaciale verticale`, d: `Panneaux verticaux captant la lumière sur leurs deux faces : utiles pour des rangs de cultures alternés et pour optimiser l'espace.` }
    ],
    cropsTitle: `Cultures envisagées`,
    crops: [`Laitue`, `Brocoli`, `Chou kale`, `Mûres`, `Pomme de terre`, `Blé`, `Roquette`, `Dahlias`, `Glaïeuls`],
    designNote: `Conception de principe (2024) ; la configuration finale peut changer.`,
    techTitle: `Technologie et eau`, techLead: `L'agriculture numérique intégrée à la conception, plus un plan de gestion et de recyclage des panneaux et batteries en fin de vie.`,
    tech: [
      { i: `📡`, t: `Capteurs et IoT`, d: `Température, humidité et pH du sol, azote, température de l'air et rayonnement solaire dans chaque parcelle.` },
      { i: `🤖`, t: `IA pour l'irrigation`, d: `Analyse des données pour automatiser l'irrigation et optimiser eau et nutriments.` },
      { i: `🖥️`, t: `Supervision SCADA`, d: `Suivi en temps réel des performances des systèmes solaires et maintenance préventive.` },
      { i: `🌧️`, t: `Récupération d'eau de pluie`, d: `Collecter la pluie qui ruisselle des panneaux et des structures pour irriguer.` },
      { i: `💧`, t: `Irrigation intelligente`, d: `Goutte-à-goutte ajusté aux besoins de chaque plante et du sol.` },
      { i: `🔋`, t: `Stockage`, d: `Des batteries pour disposer d'énergie la nuit ou par temps couvert et la redistribuer.` }
    ],
    benefitsTitle: `Bénéfices attendus`,
    benefits: [
      { i: `🏘️`, t: `Communauté`, d: `De l'énergie pour les commerçants du marché de Cuemanco, des ateliers et des visites guidées.` },
      { i: `🌿`, t: `Environnement`, d: `Usage efficace de l'eau, refuge pour les pollinisateurs, moins d'énergie fossile et protection des sols.` },
      { i: `🔬`, t: `Connaissance`, d: `Un laboratoire vivant avec des données utiles pour la recherche, les entreprises agricoles et solaires, et les pouvoirs publics.` }
    ],
    roadmapTitle: `Phases`, roadmapLead: `Feuille de route proposée, sans dates engagées.`,
    roadmap: [
      { y: `2024`, t: `Concept et conception`, d: `Définition des objectifs, de la conception et de l'estimation budgétaire.` },
      { y: `Maintenant`, t: `Partenariats et financement`, d: `Recherche de partenaires techniques et académiques et de sponsors, préparation du financement participatif.`, planned: true },
      { y: `Ensuite`, t: `Construction et plantation`, d: `Installation des trois configurations, des capteurs et de la récupération d'eau de pluie, puis plantation.`, planned: true },
      { y: `Exploitation`, t: `Données et formation`, d: `Suivi, comparaison avec les parcelles témoins, cours et visites guidées.`, planned: true },
      { y: `Réplication`, t: `Données ouvertes et passage à l'échelle`, d: `Partager les résultats pour la recherche et les politiques publiques, et reproduire sur d'autres chinampas.`, planned: true }
    ],
    needsTitle: `Ce dont le pilote a besoin`, needsLead: `Des façons concrètes de le concrétiser.`,
    needs: [
      { i: `💰`, t: `Financement`, d: `Financement participatif, sponsors et fonds pour la construction et l'exploitation.` },
      { i: `⚙️`, t: `Partenaires technologiques`, d: `Modules, trackers, structures, onduleurs, capteurs, irrigation et stockage.` },
      { i: `🎓`, t: `Partenaires académiques`, d: `Recherche conjointe, mémoires, stages et publications.` },
      { i: `🙌`, t: `Communauté et bénévolat`, d: `Agriculteurs des chinampas, communication, documentation et appui sur le terrain.` }
    ],
    budgetTag: `Estimation`, budgetTitle: `Budget estimé`,
    budgetNote: `Estimation préliminaire : la base comprend panneaux, onduleurs, trackers, SCADA, main-d'œuvre et plantation ; les compléments ajoutent récupération d'eau de pluie, stockage, irrigation intelligente et capteurs. Susceptible d'être mis à jour.`,
    budgetBase: `Système de base`, budgetAddons: `Avec tous les compléments`,
    supportEyebrow: `Participez`, supportTitle: `Soutenez Dachimilco`,
    supportText: `Nous préparons une campagne de financement participatif et cherchons des partenaires. Indiquez votre intérêt et nous vous contacterons quand les conditions seront définies.`,
    supportWays: [`Intérêt pour le financement participatif`, `Parrainage en nature ou en équipement`, `Collaboration de recherche`, `Bénévolat et communication`, `Visites et cours`],
    crowdLink: `Aller à la campagne ↗`,
    crowdNote: `Ici, vous indiquez seulement votre intérêt : ce site ne traite aucun paiement et ne promet aucun rendement. Les conditions du financement participatif seront publiées une fois définies.`,
    coursesTitle: `Cours prévus à Dachimilco`,
    sourceNote: `Source : documentation conceptuelle du projet (2024). Les chiffres de conception et de budget sont des estimations de cette étape et peuvent changer. Dachimilco aura son propre site web, développé par une autre équipe.`
  },
  reg2: {
    eyebrow: `Chapitres régionaux`, statusTag: `Structure régionale proposée — en cours de définition`,
    homeTitle: `Six régions, six climats`,
    homeText: `AMAYAD prévoit de s'organiser en 6 chapitres régionaux selon le climat, car chaque région a ses cultures, ses défis et ses opportunités agrivoltaïques.`,
    homeCta: `Voir les régions`,
    memTitle: `Choisissez votre région`, memText: `Lors de votre inscription, vous pouvez indiquer votre chapitre régional (proposition en cours de définition) pour échanger avec les membres de votre zone.`,
    title: `Régions d'AMAYAD`,
    lead: `Une proposition de 6 chapitres régionaux fondée sur les zones climatiques du Mexique. Chaque chapitre réunira agriculteurs, entreprises solaires, monde académique et pouvoirs publics de sa région.`,
    legend: `Régions`, mapHint: `Survolez ou touchez un État pour voir sa région ; choisissez une région dans la légende.`,
    mapAlt: `Carte du Mexique avec les États colorés selon la région proposée`, markerTitle: `Mexico : PASE (Topilejo) et Dachimilco (Xochimilco)`,
    pickTitle: `Choisissez une région`, pickText: `Cliquez sur la carte ou la légende pour voir les États, le climat, les principales cultures et l'opportunité agrivoltaïque.`,
    allTitle: `Les 6 régions proposées`, allLead: `Regroupement par État, pour faciliter l'organisation des chapitres.`,
    sourceNote: `Proposition d'AMAYAD fondée sur la carte des climats de l'INEGI (classification de Köppen modifiée par E. García). Regroupement approximatif : les climats ne suivent pas les frontières des États. Cultures et opportunités sont des descriptions qualitatives. Carte : Natural Earth (domaine public).`,
    chapterTitle: `Vous voulez animer le chapitre de votre région ?`, chapterText: `Nous cherchons des personnes et des organisations pour aider à former chaque chapitre régional.`,
    chapterCta: `Proposer / coordonner un chapitre`,
    states: `États`, climate: `Climat`, crops: `Principales cultures`, opportunity: `Opportunité agrivoltaïque`, region: `Région`,
    clear: `Tout afficher`, showOnMap: `Voir sur la carte`, optUnsure: `Je ne sais pas`, optAbroad: `Hors du Mexique`
  },
  f: {
    labels: { region: `Région (chapitre)`, course: `Cours`, site: `Site`, format: `Format préféré`, audience: `Je participe en tant que`, dachiInterest: `Comment souhaitez-vous aider ?` },
    titles: { course: `Préinscription aux cours et ateliers`, dachimilco: `Soutenir Dachimilco` },
    intros: { course: `Cours prévus, sans dates ni prix pour l'instant. Votre préinscription nous aide à définir groupes et sites ; vous serez informé·e en premier.`, dachimilco: `Indiquez votre intérêt pour soutenir le pilote. Aucun paiement n'est traité : nous vous contacterons une fois les conditions définies.` },
    submits: { course: `Me préinscrire`, dachimilco: `Indiquer mon intérêt` },
    opts: {
      format: { field: `Atelier de terrain`, hybrid: `Hybride`, online: `En ligne`, any: `Peu importe` },
      audience: { farmers: `Agriculteur/trice`, solar: `Professionnel·le du solaire`, students: `Étudiant·e`, officials: `Agent·e public·que`, other: `Autre` },
      dachiInterest: { crowdfunding: `Intérêt pour le financement participatif`, sponsorPlot: `Parrainer une parcelle`, technical: `Partenaire technologique / en nature`, research: `Recherche et données`, volunteer: `Bénévolat`, visit: `Visites et cours`, media: `Médias et diffusion`, other: `Autre` }
    }
  }
};

/* =============================== DEUTSCH =============================== */
V.de = {
  nav: { courses: `Kurse & Workshops`, dachimilco: `Dachimilco`, regions: `Regionen` },
  contact: { subjects: { courses: `Kurse & Workshops`, dachimilco: `Pilotprojekt Dachimilco`, regions: `Regionalgruppen` } },
  home2: { quick: [
    { id: `membership`, i: `🤝`, t: `Mitgliedschaft`, d: `5 Stufen und Sponsoring` },
    { id: `courses`, i: `🎓`, t: `Kurse & Workshops`, d: `In PASE, Dachimilco und online` },
    { id: `dachimilco`, i: `🌱`, t: `Pilotprojekt Dachimilco`, d: `Agri-PV auf einer Chinampa` },
    { id: `regions`, i: `🗺️`, t: `Regionen`, d: `6 AMAYAD-Makroregionen` },
    { id: `programs`, i: `🚀`, t: `Programme`, d: `Botschafter, Junglandwirte, Ausschüsse` },
    { id: `events`, i: `📅`, t: `Veranstaltungen`, d: `24. Nov. 2026: Buch und Initiative` },
    { id: `legislative`, i: `⚖️`, t: `Politik & Recht`, d: `Rechtsrahmen und Anreize` },
    { id: `library`, i: `📚`, t: `Bibliothek`, d: `Leitfäden, Studien und Gesetze` },
    { id: `partnerships`, i: `🌐`, t: `Partnerschaften & Ökosystem`, d: `Wer mitmacht` }
  ] },
  prog: { courses: { note: `Noch sind keine Kurse offen. Den vorgeschlagenen Katalog und die Standorte in Abstimmung finden Sie unter „Kurse & Workshops“.` } },
  courses: {
    eyebrow: `Weiterbildung`, title: `Kurse & Workshops`,
    lead: `Lernen Sie Agri-PV dort, wo sie schon praktiziert wird: im Feld, hybrid oder online. Vorgeschlagener Katalog — melden Sie sich vor, wir informieren Sie, sobald Termine feststehen.`,
    seeCatalog: `Kurskatalog ansehen`, preregister: `Interesse / Voranmeldung`,
    sitesTitle: `Vorgeschlagene Standorte`, sitesLead: `Demonstrationsstandorte, an denen wir die Feld-Workshops planen.`,
    sitesNote: `Standorte in Abstimmung. Die Nennung der UNAM, von PASE und Dr. Aarón Sánchez Juárez beschreibt den vorgeschlagenen Standort und Dozenten; sie bedeutet keine Billigung, Zertifizierung oder institutionelle Unterstützung. Termine, Plätze und Gebühren werden nach Bestätigung veröffentlicht.`,
    catalogTitle: `Vorgeschlagener Katalog`, catalogLead: `Nach Standort oder Zielgruppe filtern. Alle Kurse sind „geplant“.`,
    catalogNote: `Unverbindlicher Katalog: Inhalt, Dauer und Format können sich ändern. Termine und Preise werden erst nach Bestätigung veröffentlicht.`,
    fLocation: `Standort`, fAudience: `Zielgruppe`,
    preTitle: `Voranmeldung`, preText: `Sagen Sie uns, welcher Kurs und Standort Sie interessiert. Mit Ihrer Anmeldung planen wir Termine und Gruppen — und Sie erfahren es zuerst.`,
    teach: `Ich möchte unterrichten oder einen Kurs vorschlagen`,
    evTitle: `Kurse und Feldtage in PASE und Dachimilco`, evText: `Geplant, noch ohne Termine. Melden Sie sich vor, um die Ausschreibung zu erhalten.`,
    hosts: `Gastgeber`, instructor: `Vorgeschlagener Dozent`, coursesHere: `Kurse an diesem Standort`, source: `Quelle`,
    none: `Keine Kurse für diese Filter.`, audience: `Zielgruppe`, where: `Standorte`, interested: `Ich bin interessiert`,
    anyCourse: `Beliebig / noch unsicher`, anyLocation: `Beliebig / der nächstgelegene`,
    status: { coordination: `In Abstimmung`, development: `In Entwicklung`, available: `Verfügbar`, planned: `Geplant`, open: `Anmeldung offen` },
    fmt: { field: `Feld-Workshop`, hybrid: `Hybrid`, online: `Online` },
    aud: { farmers: `Landwirte`, solar: `Solarfachleute`, students: `Studierende`, officials: `Behördenvertreter` }
  },
  dachi: {
    eyebrow: `Pilotprojekt`, statusTag: `In Entwicklung`,
    homeTitle: `Dachimilco: Agri-PV auf einer Chinampa`,
    homeText: `Ein Pilotprojekt in Cuemanco, Xochimilco, um Solarkonfigurationen über Kulturen zu vergleichen, Landwirte und Studierende auszubilden und offene Daten für Mexiko zu erzeugen.`,
    homeCta: `Dachimilco entdecken`, supportCta: `Unterstützen / mitwirken`,
    lead: `Ein Agri-PV-Pilotprojekt auf einer Chinampa in Xochimilco: lebendes Labor, Ausbildungszentrum und übertragbares Modell, in dem Solarenergie und traditionelle Landwirtschaft zusammenarbeiten.`,
    websiteCta: `Website von Dachimilco`, websiteSoon: `Dachimilco bekommt bald eine eigene Website.`,
    jContext: `Kontext`, jObjectives: `Ziele`, jDesign: `Design`, jTech: `Technik`, jRoadmap: `Phasen`, jNeeds: `Bedarf`, jSupport: `Unterstützen`,
    contextTitle: `Die Chinampa als Labor`,
    contextText1: `Die Chinampas von Xochimilco sind ein traditionelles, von Kanälen umgebenes Anbausystem. Dachimilco schlägt vor, auf einer Chinampa nahe dem Bootsanleger von Cuemanco Solarmodule über Kulturen zu installieren, ohne die Lebensmittelproduktion aufzugeben.`,
    contextText2: `Die Energie würde für die Kulturen und für die Händler des Marktes am Anleger genutzt; ein Teil könnte über dezentrale Erzeugung verkauft werden.`,
    whyXochi: [`Landwirtschaftliche Tradition: ein idealer Ort, um die Vorteile von Agri-PV zu zeigen.`, `Erhalt des Kulturerbes: Technik, die traditionelle Praktiken begleitet und stärkt.`, `Geeignetes Klima, um gleichzeitig Energie und Lebensmittel zu erzeugen.`, `Bildung und Bewusstsein der Gemeinschaft für saubere Energie.`, `Ein Modell, das sich auf andere Chinampas und stadtnahe Gebiete übertragen lässt.`],
    factsTitle: `Wichtige Designdaten`,
    facts: [
      { k: `Standort`, v: `Chinampa in Cuemanco, Xochimilco (≈235 m vom Anleger)` },
      { k: `Art`, v: `Forschungs- und Demonstrationsprojekt` },
      { k: `Konfigurationen`, v: `3: aufgeständert fest, einachsiger Tracker und vertikal bifazial` },
      { k: `Parzellen`, v: `27 aktive Parzellen unter Modulen + Kontrollparzellen ohne Module` },
      { k: `Geplante Leistung`, v: `≈90 kWp (30 kWp je Konfiguration)` },
      { k: `Status`, v: `In Entwicklung` }
    ],
    objTitle: `Ziele`, objLead: `Was das Pilotprojekt zeigen und beitragen will.`,
    objectives: [
      { i: `📊`, t: `Daten und Vergleich`, d: `PV-Konfigurationen über verschiedenen Kulturen mit Boden-, Wetter- und Strahlungssensoren vergleichen.` },
      { i: `🎓`, t: `Ausbildungszentrum`, d: `Lokale Landwirte, Studierende, Solarunternehmen, Hochschulen und Verbände schulen.` },
      { i: `🤝`, t: `Zusammenarbeit und Politik`, d: `Wissen mit Institutionen teilen und Daten für Agrar- und Energiepolitik liefern.` },
      { i: `💹`, t: `Geschäftsmodelle`, d: `Kosten und Nutzen bewerten und CAPEX-, OPEX- und Renditedaten für Entscheidungen teilen.` }
    ],
    designTitle: `Agri-PV-Design`, designLead: `Drei Konfigurationen mit je 9 Parzellen unter Modulen, dazu Kontrollparzellen ohne Module zum Vergleich.`,
    configs: [
      { i: `🅰️`, t: `(a) Aufgeständerte feste Struktur`, d: `Module in der Höhe, mit viel Licht und guter Luftzirkulation: für Kulturen mit hohem Lichtbedarf.` },
      { i: `🅱️`, t: `(b) Geneigte Montage / einachsiger Tracker`, d: `Optimiert den Solarertrag und spendet zeitweise Teilschatten: für Kulturen, die etwas Schatten vertragen oder davon profitieren.` },
      { i: `🆑`, t: `(c) Vertikal bifazial`, d: `Senkrechte Module, die auf beiden Seiten Licht einfangen: geeignet für wechselnde Pflanzreihen und optimale Flächennutzung.` }
    ],
    cropsTitle: `Vorgesehene Kulturen`,
    crops: [`Salat`, `Brokkoli`, `Grünkohl`, `Brombeeren`, `Kartoffeln`, `Weizen`, `Rucola`, `Dahlien`, `Gladiolen`],
    designNote: `Konzeptdesign (2024); die endgültige Konfiguration kann sich ändern.`,
    techTitle: `Technik und Wasser`, techLead: `Digitale Landwirtschaft als Teil des Designs, plus ein Plan für Rücknahme und Recycling von Modulen und Batterien am Lebensende.`,
    tech: [
      { i: `📡`, t: `Sensoren und IoT`, d: `Bodentemperatur, -feuchte und pH-Wert, Stickstoff, Lufttemperatur und Sonneneinstrahlung in jeder Parzelle.` },
      { i: `🤖`, t: `KI für die Bewässerung`, d: `Datenanalyse, um die Bewässerung zu automatisieren und Wasser und Nährstoffe zu optimieren.` },
      { i: `🖥️`, t: `SCADA-Überwachung`, d: `Echtzeitüberwachung der Solaranlagen und vorbeugende Wartung.` },
      { i: `🌧️`, t: `Regenwassernutzung`, d: `Regen, der von Modulen und Strukturen abläuft, sammeln und zur Bewässerung nutzen.` },
      { i: `💧`, t: `Intelligente Bewässerung`, d: `Tropfbewässerung, angepasst an den Bedarf jeder Pflanze und des Bodens.` },
      { i: `🔋`, t: `Speicher`, d: `Batterien, um nachts oder bei Bewölkung Energie zu haben und sie zu verteilen.` }
    ],
    benefitsTitle: `Erwarteter Nutzen`,
    benefits: [
      { i: `🏘️`, t: `Gemeinschaft`, d: `Energie für die Händler des Marktes in Cuemanco, Workshops und Führungen.` },
      { i: `🌿`, t: `Umwelt`, d: `Effiziente Wassernutzung, Lebensraum für Bestäuber, weniger fossile Energie und Bodenschutz.` },
      { i: `🔬`, t: `Wissen`, d: `Ein lebendes Labor mit nützlichen Daten für Forschung, Agrar- und Solarunternehmen und Behörden.` }
    ],
    roadmapTitle: `Phasen`, roadmapLead: `Vorgeschlagener Fahrplan, ohne verbindliche Termine.`,
    roadmap: [
      { y: `2024`, t: `Konzept und Design`, d: `Festlegung von Zielen, Design und Budgetschätzung.` },
      { y: `Jetzt`, t: `Partner und Finanzierung`, d: `Suche nach technischen und akademischen Partnern und Sponsoren, Vorbereitung des Crowdfundings.`, planned: true },
      { y: `Als Nächstes`, t: `Bau und Bepflanzung`, d: `Installation der drei Konfigurationen, Sensoren und Regenwassernutzung, dann Bepflanzung.`, planned: true },
      { y: `Betrieb`, t: `Daten und Ausbildung`, d: `Monitoring, Vergleich mit Kontrollparzellen, Kurse und Führungen.`, planned: true },
      { y: `Übertragung`, t: `Offene Daten und Skalierung`, d: `Ergebnisse für Forschung und Politik teilen und auf andere Chinampas übertragen.`, planned: true }
    ],
    needsTitle: `Was das Pilotprojekt braucht`, needsLead: `Konkrete Wege, es Wirklichkeit werden zu lassen.`,
    needs: [
      { i: `💰`, t: `Finanzierung`, d: `Crowdfunding, Sponsoren und Mittel für Bau und Betrieb.` },
      { i: `⚙️`, t: `Technologiepartner`, d: `Module, Tracker, Unterkonstruktionen, Wechselrichter, Sensoren, Bewässerung und Speicher.` },
      { i: `🎓`, t: `Akademische Partner`, d: `Gemeinsame Forschung, Abschlussarbeiten, Praktika und Publikationen.` },
      { i: `🙌`, t: `Gemeinschaft und Ehrenamt`, d: `Chinampa-Bauern, Kommunikation, Dokumentation und Unterstützung vor Ort.` }
    ],
    budgetTag: `Schätzung`, budgetTitle: `Geschätztes Budget`,
    budgetNote: `Vorläufige Schätzung: Die Basis umfasst Module, Wechselrichter, Tracker, SCADA, Arbeitskosten und Bepflanzung; die Ergänzungen umfassen Regenwassernutzung, Speicher, intelligente Bewässerung und Sensoren. Änderungen vorbehalten.`,
    budgetBase: `Basissystem`, budgetAddons: `Mit allen Ergänzungen`,
    supportEyebrow: `Machen Sie mit`, supportTitle: `Dachimilco unterstützen`,
    supportText: `Wir bereiten eine Crowdfunding-Kampagne vor und suchen Partner. Bekunden Sie Ihr Interesse — wir melden uns, sobald die Bedingungen feststehen.`,
    supportWays: [`Interesse am Crowdfunding`, `Sach- oder Ausrüstungssponsoring`, `Forschungskooperation`, `Ehrenamt und Kommunikation`, `Besuche und Kurse`],
    crowdLink: `Zur Kampagne ↗`,
    crowdNote: `Hier bekunden Sie nur Ihr Interesse: Diese Website wickelt keine Zahlungen ab und verspricht keine Renditen. Die Crowdfunding-Bedingungen werden nach ihrer Festlegung veröffentlicht.`,
    coursesTitle: `Geplante Kurse in Dachimilco`,
    sourceNote: `Quelle: Konzeptunterlagen des Projekts (2024). Design- und Budgetzahlen sind Schätzungen aus dieser Phase und können sich ändern. Dachimilco erhält eine eigene Website, die ein anderes Team entwickelt.`
  },
  reg2: {
    eyebrow: `Regionalgruppen`, statusTag: `Vorgeschlagene Regionalstruktur — in Ausarbeitung`,
    homeTitle: `Sechs Regionen, sechs Klimazonen`,
    homeText: `AMAYAD plant, sich in 6 Regionalgruppen nach Klima zu organisieren, denn jede Region hat eigene Kulturen, Herausforderungen und Agri-PV-Chancen.`,
    homeCta: `Regionen ansehen`,
    memTitle: `Wählen Sie Ihre Region`, memText: `Bei der Anmeldung können Sie Ihre Regionalgruppe angeben (Vorschlag in Ausarbeitung), um sich mit Mitgliedern in Ihrer Nähe zu vernetzen.`,
    title: `AMAYAD-Regionen`,
    lead: `Ein Vorschlag für 6 Regionalgruppen auf Basis der Klimazonen Mexikos. Jede Gruppe bringt Landwirte, Solarunternehmen, Wissenschaft und Behörden ihrer Region zusammen.`,
    legend: `Regionen`, mapHint: `Fahren Sie über einen Bundesstaat oder tippen Sie darauf, um seine Region zu sehen; wählen Sie eine Region in der Legende.`,
    mapAlt: `Karte Mexikos mit Bundesstaaten nach vorgeschlagener Region eingefärbt`, markerTitle: `Mexiko-Stadt: PASE (Topilejo) und Dachimilco (Xochimilco)`,
    pickTitle: `Region wählen`, pickText: `Klicken Sie auf die Karte oder die Legende, um Bundesstaaten, Klima, Hauptkulturen und Agri-PV-Chancen zu sehen.`,
    allTitle: `Die 6 vorgeschlagenen Regionen`, allLead: `Gruppierung nach Bundesstaaten, um die Organisation der Gruppen zu erleichtern.`,
    sourceNote: `AMAYAD-Vorschlag auf Basis der Klimakarte des INEGI (Köppen-Klassifikation, modifiziert von E. García). Ungefähre Gruppierung: Klimazonen folgen nicht den Grenzen der Bundesstaaten. Kulturen und Chancen sind qualitative Beschreibungen. Karte: Natural Earth (gemeinfrei).`,
    chapterTitle: `Möchten Sie die Gruppe Ihrer Region voranbringen?`, chapterText: `Wir suchen Personen und Organisationen, die beim Aufbau jeder Regionalgruppe helfen.`,
    chapterCta: `Gruppe vorschlagen / koordinieren`,
    states: `Bundesstaaten`, climate: `Klima`, crops: `Hauptkulturen`, opportunity: `Agri-PV-Chance`, region: `Region`,
    clear: `Alle anzeigen`, showOnMap: `Auf der Karte zeigen`, optUnsure: `Weiß nicht`, optAbroad: `Außerhalb Mexikos`
  },
  f: {
    labels: { region: `Region (Gruppe)`, course: `Kurs`, site: `Standort`, format: `Bevorzugtes Format`, audience: `Ich nehme teil als`, dachiInterest: `Wie möchten Sie helfen?` },
    titles: { course: `Voranmeldung für Kurse & Workshops`, dachimilco: `Dachimilco unterstützen` },
    intros: { course: `Geplante Kurse, noch ohne Termine und Preise. Ihre Voranmeldung hilft uns, Gruppen und Standorte festzulegen — Sie erfahren es zuerst.`, dachimilco: `Bekunden Sie Ihr Interesse, das Pilotprojekt zu unterstützen. Es werden keine Zahlungen abgewickelt: Wir melden uns, sobald die Bedingungen feststehen.` },
    submits: { course: `Voranmelden`, dachimilco: `Interesse bekunden` },
    opts: {
      format: { field: `Feld-Workshop`, hybrid: `Hybrid`, online: `Online`, any: `Egal` },
      audience: { farmers: `Landwirt/in`, solar: `Solarfachkraft`, students: `Student/in`, officials: `Behördenvertreter/in`, other: `Sonstiges` },
      dachiInterest: { crowdfunding: `Interesse am Crowdfunding`, sponsorPlot: `Eine Parzelle sponsern`, technical: `Technologie- / Sachpartner`, research: `Forschung und Daten`, volunteer: `Ehrenamt`, visit: `Besuche und Kurse`, media: `Medien und Öffentlichkeitsarbeit`, other: `Sonstiges` }
    }
  }
};

/* =============================== ITALIANO =============================== */
V.it = {
  nav: { courses: `Corsi e workshop`, dachimilco: `Dachimilco`, regions: `Regioni` },
  contact: { subjects: { courses: `Corsi e workshop`, dachimilco: `Progetto pilota Dachimilco`, regions: `Sezioni regionali` } },
  home2: { quick: [
    { id: `membership`, i: `🤝`, t: `Adesione`, d: `5 livelli e sponsorizzazione` },
    { id: `courses`, i: `🎓`, t: `Corsi e workshop`, d: `A PASE, a Dachimilco e online` },
    { id: `dachimilco`, i: `🌱`, t: `Progetto pilota Dachimilco`, d: `Agrivoltaico su una chinampa` },
    { id: `regions`, i: `🗺️`, t: `Regioni`, d: `6 macroregioni AMAYAD` },
    { id: `programs`, i: `🚀`, t: `Programmi`, d: `Ambasciatori, giovani, comitati` },
    { id: `events`, i: `📅`, t: `Eventi`, d: `24 nov 2026: libro e iniziativa` },
    { id: `legislative`, i: `⚖️`, t: `Affari legislativi`, d: `Quadro normativo e incentivi` },
    { id: `library`, i: `📚`, t: `Biblioteca`, d: `Guide, studi e leggi` },
    { id: `partnerships`, i: `🌐`, t: `Partnership ed ecosistema`, d: `Chi partecipa` }
  ] },
  prog: { courses: { note: `Non ci sono ancora corsi aperti. Consulta il catalogo proposto e le sedi in coordinamento in «Corsi e workshop».` } },
  courses: {
    eyebrow: `Formazione`, title: `Corsi e workshop`,
    lead: `Impara l'agrivoltaico dove già si pratica: in campo, in formato ibrido o online. Catalogo proposto — preiscriviti e ti avviseremo quando ci saranno le date.`,
    seeCatalog: `Vedi il catalogo dei corsi`, preregister: `Mi interessa / preiscrizione`,
    sitesTitle: `Sedi proposte`, sitesLead: `Siti dimostrativi dove prevediamo di tenere i workshop in campo.`,
    sitesNote: `Sedi in coordinamento. La menzione dell'UNAM, di PASE e del Dr. Aarón Sánchez Juárez descrive la sede e il docente proposti; non implica approvazione, certificazione né sostegno istituzionale. Date, posti e costi saranno pubblicati quando confermati.`,
    catalogTitle: `Catalogo proposto`, catalogLead: `Filtra per sede o per pubblico. Tutti i corsi sono «previsti».`,
    catalogNote: `Catalogo indicativo: contenuti, durata e formato possono cambiare. Date e prezzi non vengono pubblicati finché non sono confermati.`,
    fLocation: `Sede`, fAudience: `Pubblico`,
    preTitle: `Preiscrizione`, preText: `Dicci quale corso e quale sede ti interessano. Useremo la tua iscrizione per definire date e gruppi, e sarai il primo a saperlo.`,
    teach: `Voglio insegnare o proporre un corso`,
    evTitle: `Corsi e giornate in campo a PASE e Dachimilco`, evText: `Previsti, ancora senza date. Preiscriviti per ricevere il bando.`,
    hosts: `Ospite`, instructor: `Docente proposto`, coursesHere: `Corsi in questa sede`, source: `Fonte`,
    none: `Nessun corso corrisponde a questi filtri.`, audience: `Pubblico`, where: `Sedi`, interested: `Mi interessa`,
    anyCourse: `Qualsiasi / non so ancora`, anyLocation: `Qualsiasi / la più vicina`,
    status: { coordination: `In coordinamento`, development: `In sviluppo`, available: `Disponibile`, planned: `Previsto`, open: `Iscrizioni aperte` },
    fmt: { field: `Workshop in campo`, hybrid: `Ibrido`, online: `Online` },
    aud: { farmers: `Agricoltori`, solar: `Professionisti del solare`, students: `Studenti`, officials: `Funzionari pubblici` }
  },
  dachi: {
    eyebrow: `Progetto pilota`, statusTag: `In sviluppo`,
    homeTitle: `Dachimilco: agrivoltaico su una chinampa`,
    homeText: `Un pilota a Cuemanco, Xochimilco, per confrontare configurazioni solari sopra le colture, formare agricoltori e studenti e produrre dati aperti per il Messico.`,
    homeCta: `Scopri Dachimilco`, supportCta: `Sostieni / collabora`,
    lead: `Un pilota agrivoltaico su una chinampa di Xochimilco: laboratorio vivente, centro di formazione e modello replicabile in cui energia solare e agricoltura tradizionale lavorano insieme.`,
    websiteCta: `Sito web di Dachimilco`, websiteSoon: `Dachimilco avrà presto un proprio sito web.`,
    jContext: `Contesto`, jObjectives: `Obiettivi`, jDesign: `Progetto`, jTech: `Tecnologia`, jRoadmap: `Fasi`, jNeeds: `Necessità`, jSupport: `Sostieni`,
    contextTitle: `La chinampa come laboratorio`,
    contextText1: `Le chinampas di Xochimilco sono un sistema agricolo tradizionale circondato da canali. Dachimilco propone di installare pannelli solari sopra le colture su una chinampa vicina all'imbarcadero di Cuemanco, continuando a produrre cibo.`,
    contextText2: `L'energia prodotta servirebbe alle colture e ai commercianti del mercato dell'imbarcadero; una parte potrebbe essere venduta tramite generazione distribuita.`,
    whyXochi: [`Tradizione agricola: un luogo ideale per dimostrare i benefici dell'agrivoltaico.`, `Tutela del patrimonio: tecnologia che accompagna e rafforza le pratiche tradizionali.`, `Clima adatto a produrre energia e cibo contemporaneamente.`, `Educazione e sensibilizzazione della comunità sull'energia pulita.`, `Un modello replicabile su altre chinampas e aree periurbane.`],
    factsTitle: `Dati chiave del progetto`,
    facts: [
      { k: `Ubicazione`, v: `Chinampa a Cuemanco, Xochimilco (≈235 m dall'imbarcadero)` },
      { k: `Tipo`, v: `Pilota di ricerca e dimostrazione` },
      { k: `Configurazioni`, v: `3: fissa sopraelevata, inseguitore monoassiale e bifacciale verticale` },
      { k: `Parcelle`, v: `27 parcelle attive sotto i pannelli + parcelle testimone senza pannelli` },
      { k: `Potenza prevista`, v: `≈90 kWp (30 kWp per configurazione)` },
      { k: `Stato`, v: `In sviluppo` }
    ],
    objTitle: `Obiettivi`, objLead: `Ciò che il pilota vuole dimostrare e offrire.`,
    objectives: [
      { i: `📊`, t: `Dati e confronto`, d: `Confrontare configurazioni fotovoltaiche su colture diverse con sensori di suolo, meteo e radiazione.` },
      { i: `🎓`, t: `Centro di formazione`, d: `Formare agricoltori locali, studenti, aziende solari, università e associazioni.` },
      { i: `🤝`, t: `Collaborazione e politiche pubbliche`, d: `Condividere conoscenze con le istituzioni e fornire dati per le politiche agricole ed energetiche.` },
      { i: `💹`, t: `Modelli di business`, d: `Valutare costi e benefici e condividere dati su CAPEX, OPEX e ritorno per orientare le decisioni.` }
    ],
    designTitle: `Progetto agrivoltaico`, designLead: `Tre configurazioni, ciascuna con 9 parcelle sotto i pannelli, più parcelle testimone senza pannelli per il confronto.`,
    configs: [
      { i: `🅰️`, t: `(a) Struttura fissa sopraelevata`, d: `Pannelli in quota, con molta luce e buona circolazione d'aria: per colture che richiedono luce diretta.` },
      { i: `🅱️`, t: `(b) Montaggio inclinato / inseguitore monoassiale`, d: `Ottimizza la captazione solare e offre ombra parziale intermittente: per colture che tollerano o traggono vantaggio da un po' d'ombra.` },
      { i: `🆑`, t: `(c) Bifacciale verticale`, d: `Pannelli verticali che captano luce su entrambe le facce: utili per file di colture alternate e per sfruttare lo spazio.` }
    ],
    cropsTitle: `Colture previste`,
    crops: [`Lattuga`, `Broccoli`, `Cavolo riccio`, `More`, `Patate`, `Grano`, `Rucola`, `Dalie`, `Gladioli`],
    designNote: `Progetto concettuale (2024); la configurazione finale può cambiare.`,
    techTitle: `Tecnologia e acqua`, techLead: `Agricoltura digitale integrata nel progetto, più un piano di gestione e riciclo di pannelli e batterie a fine vita.`,
    tech: [
      { i: `📡`, t: `Sensori e IoT`, d: `Temperatura, umidità e pH del suolo, azoto, temperatura dell'aria e radiazione solare in ogni parcella.` },
      { i: `🤖`, t: `IA per l'irrigazione`, d: `Analisi dei dati per automatizzare l'irrigazione e ottimizzare acqua e nutrienti.` },
      { i: `🖥️`, t: `Monitoraggio SCADA`, d: `Controllo in tempo reale delle prestazioni degli impianti solari e manutenzione preventiva.` },
      { i: `🌧️`, t: `Raccolta dell'acqua piovana`, d: `Raccogliere la pioggia che scorre da pannelli e strutture per irrigare.` },
      { i: `💧`, t: `Irrigazione intelligente`, d: `Irrigazione a goccia calibrata sulle esigenze di ogni pianta e del suolo.` },
      { i: `🔋`, t: `Accumulo`, d: `Batterie per avere energia di notte o nei giorni nuvolosi e ridistribuirla.` }
    ],
    benefitsTitle: `Benefici attesi`,
    benefits: [
      { i: `🏘️`, t: `Comunità`, d: `Energia per i commercianti del mercato di Cuemanco, workshop e visite guidate.` },
      { i: `🌿`, t: `Ambiente`, d: `Uso efficiente dell'acqua, rifugio per gli impollinatori, meno energia fossile e protezione del suolo.` },
      { i: `🔬`, t: `Conoscenza`, d: `Un laboratorio vivente con dati utili per ricerca, aziende agricole e solari e istituzioni.` }
    ],
    roadmapTitle: `Fasi`, roadmapLead: `Tabella di marcia proposta, senza date vincolanti.`,
    roadmap: [
      { y: `2024`, t: `Concetto e progetto`, d: `Definizione di obiettivi, progetto e stima del budget.` },
      { y: `Ora`, t: `Partner e finanziamento`, d: `Ricerca di partner tecnici e accademici e di sponsor, preparazione del crowdfunding.`, planned: true },
      { y: `Poi`, t: `Costruzione e semina`, d: `Installazione delle tre configurazioni, dei sensori e della raccolta dell'acqua piovana, poi semina.`, planned: true },
      { y: `Esercizio`, t: `Dati e formazione`, d: `Monitoraggio, confronto con le parcelle testimone, corsi e visite guidate.`, planned: true },
      { y: `Replica`, t: `Dati aperti e scalabilità`, d: `Condividere i risultati per la ricerca e le politiche pubbliche e replicare su altre chinampas.`, planned: true }
    ],
    needsTitle: `Di cosa ha bisogno il pilota`, needsLead: `Modi concreti per realizzarlo.`,
    needs: [
      { i: `💰`, t: `Finanziamento`, d: `Crowdfunding, sponsor e fondi per costruzione ed esercizio.` },
      { i: `⚙️`, t: `Partner tecnologici`, d: `Moduli, inseguitori, strutture, inverter, sensori, irrigazione e accumulo.` },
      { i: `🎓`, t: `Partner accademici`, d: `Ricerca congiunta, tesi, tirocini e pubblicazioni.` },
      { i: `🙌`, t: `Comunità e volontariato`, d: `Agricoltori delle chinampas, comunicazione, documentazione e supporto in campo.` }
    ],
    budgetTag: `Stima`, budgetTitle: `Budget stimato`,
    budgetNote: `Stima preliminare: la base comprende pannelli, inverter, inseguitori, SCADA, manodopera e semina; i complementi aggiungono raccolta dell'acqua piovana, accumulo, irrigazione intelligente e sensori. Soggetto ad aggiornamento.`,
    budgetBase: `Sistema base`, budgetAddons: `Con tutti i complementi`,
    supportEyebrow: `Partecipa`, supportTitle: `Sostieni Dachimilco`,
    supportText: `Stiamo preparando una campagna di crowdfunding e cerchiamo partner. Registra il tuo interesse e ti contatteremo quando le condizioni saranno definite.`,
    supportWays: [`Interesse per il crowdfunding`, `Sponsorizzazione in natura o con attrezzature`, `Collaborazione di ricerca`, `Volontariato e comunicazione`, `Visite e corsi`],
    crowdLink: `Vai alla campagna ↗`,
    crowdNote: `Qui registri solo il tuo interesse: questo sito non elabora pagamenti né promette rendimenti. Le condizioni del crowdfunding saranno pubblicate quando definite.`,
    coursesTitle: `Corsi previsti a Dachimilco`,
    sourceNote: `Fonte: documentazione concettuale del progetto (2024). Le cifre di progetto e di budget sono stime di quella fase e possono cambiare. Dachimilco avrà un proprio sito web, sviluppato da un altro team.`
  },
  reg2: {
    eyebrow: `Sezioni regionali`, statusTag: `Struttura regionale proposta — in definizione`,
    homeTitle: `Sei regioni, sei climi`,
    homeText: `AMAYAD prevede di organizzarsi in 6 sezioni regionali in base al clima, perché ogni regione ha colture, sfide e opportunità agrivoltaiche diverse.`,
    homeCta: `Vedi le regioni`,
    memTitle: `Scegli la tua regione`, memText: `Al momento dell'iscrizione puoi indicare la tua sezione regionale (proposta in definizione) per entrare in contatto con i soci della tua zona.`,
    title: `Le regioni di AMAYAD`,
    lead: `Una proposta di 6 sezioni regionali basata sulle zone climatiche del Messico. Ogni sezione riunirà agricoltori, aziende solari, università e istituzioni della propria regione.`,
    legend: `Regioni`, mapHint: `Passa il cursore o tocca uno stato per vederne la regione; scegli una regione nella legenda.`,
    mapAlt: `Mappa del Messico con gli stati colorati secondo la regione proposta`, markerTitle: `Città del Messico: PASE (Topilejo) e Dachimilco (Xochimilco)`,
    pickTitle: `Scegli una regione`, pickText: `Clicca sulla mappa o sulla legenda per vedere stati, clima, colture principali e opportunità agrivoltaica.`,
    allTitle: `Le 6 regioni proposte`, allLead: `Raggruppamento per stato, per facilitare l'organizzazione delle sezioni.`,
    sourceNote: `Proposta di AMAYAD basata sulla carta dei climi dell'INEGI (classificazione di Köppen modificata da E. García). Raggruppamento approssimativo: i climi non seguono i confini degli stati. Colture e opportunità sono descrizioni qualitative. Mappa: Natural Earth (pubblico dominio).`,
    chapterTitle: `Vuoi promuovere la sezione della tua regione?`, chapterText: `Cerchiamo persone e organizzazioni che aiutino a costituire ogni sezione regionale.`,
    chapterCta: `Proporre / coordinare una sezione`,
    states: `Stati`, climate: `Clima`, crops: `Colture principali`, opportunity: `Opportunità agrivoltaica`, region: `Regione`,
    clear: `Mostra tutte`, showOnMap: `Vedi sulla mappa`, optUnsure: `Non so`, optAbroad: `Fuori dal Messico`
  },
  f: {
    labels: { region: `Regione (sezione)`, course: `Corso`, site: `Sede`, format: `Formato preferito`, audience: `Partecipo come`, dachiInterest: `Come vorresti aiutare?` },
    titles: { course: `Preiscrizione a corsi e workshop`, dachimilco: `Sostieni Dachimilco` },
    intros: { course: `Corsi previsti, ancora senza date né prezzi. La tua preiscrizione ci aiuta a definire gruppi e sedi; sarai il primo a saperlo.`, dachimilco: `Registra il tuo interesse a sostenere il pilota. Non vengono elaborati pagamenti: ti contatteremo quando le condizioni saranno definite.` },
    submits: { course: `Preiscrivimi`, dachimilco: `Registra il mio interesse` },
    opts: {
      format: { field: `Workshop in campo`, hybrid: `Ibrido`, online: `Online`, any: `Indifferente` },
      audience: { farmers: `Agricoltore/trice`, solar: `Professionista del solare`, students: `Studente/ssa`, officials: `Funzionario/a pubblico/a`, other: `Altro` },
      dachiInterest: { crowdfunding: `Interesse per il crowdfunding`, sponsorPlot: `Sponsorizzare una parcella`, technical: `Partner tecnologico / in natura`, research: `Ricerca e dati`, volunteer: `Volontariato`, visit: `Visite e corsi`, media: `Media e divulgazione`, other: `Altro` }
    }
  }
};

  Object.keys(V).forEach(function (l) { window.AMAYAD_I18N[l] = merge(window.AMAYAD_I18N[l] || {}, V[l]); });
})();
