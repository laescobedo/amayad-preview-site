/* AMAYAD — i18n v2 additions. Loaded AFTER i18n.js and deep-merged into it.
   Contains every string added in v2 (new sections, forms, search, events…)
   plus a few v1 keys that changed (nav, contact subjects, library categories).
   Keep keys identical across es / en / fr / de / it. */
(function () {
  function isObj(x) { return x && typeof x === "object" && !Array.isArray(x); }
  function merge(a, b) { Object.keys(b).forEach(function (k) { if (isObj(a[k]) && isObj(b[k])) merge(a[k], b[k]); else a[k] = b[k]; }); return a; }
  var V = {};

/* =============================== ESPAÑOL =============================== */
V.es = {
  ui: { search: `Buscar`, searchPh: `Buscar en el sitio…`, searchHint: `Escribe para buscar en todas las secciones (membresía, programas, eventos, leyes…).`, searchNone: `Sin resultados. Prueba con otra palabra.`, searchCount: `{n} resultados`,
        login: `Acceso miembros`, onThisPage: `En esta página`, comingSoon: `próximamente`, socialSoon: `Esta red social estará disponible próximamente.` },
  nav: { home: `Inicio`, about: `Nosotros`, membership: `Membresía`, programs: `Programas`, events: `Eventos`, partnerships: `Alianzas`, legislative: `Asuntos legislativos`, library: `Biblioteca`, members: `Miembros`, contact: `Contacto` },
  cta: { sponsor: `Ser patrocinador`, apply: `Postularme`, nominate: `Nominar a alguien`, notify: `Avísame`, support: `Apoyar la iniciativa`, subscribe: `Suscribirme`, discord: `Comunidad en Discord`, register: `Registrarme`, registerInterest: `Registrar mi interés`, addCal: `Añadir al calendario`, partner: `Ser aliado`, wg: `Unirme a un comité` },
  home2: {
    cta2: `Ver programas`,
    benefitsTitle: `Lo que la agrivoltaica puede aportar`,
    benefits: [
      { i: `🌾`, t: `Seguridad alimentaria`, d: `Energía sin sacar la tierra de la producción de alimentos.` },
      { i: `🌍`, t: `Menos emisiones de CO₂`, d: `Electricidad solar que sustituye energía fósil en el campo y en la red.` },
      { i: `💧`, t: `Ahorro de agua`, d: `La sombra parcial reduce la evaporación y la demanda de riego.` },
      { i: `💰`, t: `Ingreso extra para el agricultor`, d: `Una segunda cosecha: energía, arrendamiento o autoconsumo.` },
      { i: `⚡`, t: `Energía limpia para el campo`, d: `Bombeo, riego, frío y procesamiento con energía propia.` },
      { i: `🌡️`, t: `Cultivos más resilientes`, d: `Un microclima más moderado ante el calor extremo.` }
    ],
    benefitsNote: `Beneficios cualitativos. Los resultados dependen del sitio, el cultivo y el diseño del sistema.`,
    quickTitle: `Accesos rápidos`,
    quick: [
      { id: `membership`, i: `🤝`, t: `Membresía`, d: `5 niveles y patrocinio` },
      { id: `programs`, i: `🎓`, t: `Programas`, d: `Embajadores, jóvenes, comités` },
      { id: `events`, i: `📅`, t: `Eventos`, d: `24 nov 2026: libro e iniciativa` },
      { id: `legislative`, i: `⚖️`, t: `Asuntos legislativos`, d: `Marco legal e incentivos` },
      { id: `library`, i: `📚`, t: `Biblioteca`, d: `Guías, estudios y leyes` },
      { id: `partnerships`, i: `🌐`, t: `Alianzas y ecosistema`, d: `Quién participa` }
    ],
    nextEventTitle: `Próximo evento`,
    newsTitle: `Últimas noticias`,
    newsSoon: `Noticias próximamente`,
    newsSoonText: `Aquí publicaremos avances de AMAYAD, de sus programas y del sector.`,
    newsletterTag: `Boletín semanal`,
    newsletterTitle: `Boletín semanal de beneficios`,
    newsletterText: `Cada semana: novedades del sector, oportunidades para miembros, eventos y avances legislativos. Gratis; te das de baja cuando quieras.`,
    nlOk: `¡Listo! Quedaste suscrito al boletín.`,
    nlMailto: `Tu suscripción está lista. Haz clic en el botón para enviarla por correo.`,
    discordTag: `Comunidad`,
    discordTitle: `Únete a la conversación`,
    discordText: `Un espacio para que gente del sol y del campo comparta preguntas, proyectos y oportunidades.`,
    discordSoon: `La comunidad de Discord abrirá pronto. Suscríbete al boletín para recibir la invitación.`,
    waySponsor: `Para agronegocios, startups y empresas que quieren impulsar el sector.`
  },
  about: {
    eyebrow: `Nosotros`, title: `Quiénes somos`,
    lead: `AMAYAD nació en 2024 con una idea sencilla: que el mundo de la energía solar y el de la agricultura —incluida la agricultura digital— se encuentren, colaboren y formen alianzas.`,
    jMission: `Misión y visión`, jHistory: `Historia`, jFounders: `Cofundadores`, jGovernance: `Gobernanza`, jAgri: `¿Qué es la agrivoltaica?`,
    missionTitle: `Misión`,
    missionText: `Promover la innovación y la tecnología en la agricultura mexicana para producir más, de forma eficiente y sostenible, integrando la agrivoltaica, la agricultura de precisión y las herramientas digitales.`,
    visionTitle: `Visión`,
    visionText: `Que México sea líder en la adopción de la agrivoltaica a gran escala, generando empleo en el campo y mejorando la autosuficiencia energética y alimentaria.`,
    historyTitle: `Nuestra historia`,
    history: [
      { y: `2024`, t: `Fundación`, d: `Luis Alfonso Escobedo y Roberto Moreno Castillo cofundan AMAYAD para unir a la industria solar y al campo.` },
      { y: `2024`, t: `Primera presentación pública`, d: `AMAYAD presenta públicamente sus objetivos, comités, beneficios y estructura de membresía.` },
      { y: `2026`, t: `Programas en formación`, d: `Embajadores, Red de Jóvenes Agricultores y comités de trabajo, incluido Mujeres en Agrivoltaica.` },
      { y: `24 nov 2026`, t: `Libro e iniciativa`, d: `Presentación de «Cosechando el Sol Dos Veces» y de la iniciativa de política pública en agrivoltaica.`, planned: true },
      { y: `Próximamente`, t: `Primer Congreso de Agrivoltaica en México`, d: `Fecha y sede por definir.`, planned: true }
    ],
    foundersTitle: `Cofundadores`,
    foundersLead: `AMAYAD fue cofundada en 2024 por:`,
    founders: [
      { name: `Luis Alfonso Escobedo`, role: `Cofundador`, d: `Autor del libro «Cosechando el Sol Dos Veces», sobre agrivoltaica y agricultura digital.` },
      { name: `Roberto Moreno Castillo`, role: `Cofundador`, d: `Semblanza próximamente.` }
    ],
    governanceTitle: `Gobernanza`,
    governanceLead: `La estructura de gobierno de AMAYAD se está conformando. Publicaremos nombres solo cuando estén confirmados.`,
    inFormation: `En formación`,
    governance: [
      { t: `Asamblea General`, d: `Órgano máximo. Los miembros participarán con derecho a voto, conforme a los estatutos.` },
      { t: `Consejo Directivo`, d: `Dirección estratégica de la asociación. Integración en proceso.` },
      { t: `Comités de trabajo`, d: `Siete comités temáticos abiertos a los miembros.` },
      { t: `Estatutos y código de ética`, d: `Se publicarán en este sitio.` }
    ],
    seeCommittees: `Ver comités`
  },
  mem2: {
    jTiers: `Niveles`, jCompare: `Comparativa`, jWhy: `¿Por qué unirte?`, jSponsor: `Patrocinio`, jFaq: `Preguntas`,
    brochure: `Descargar folleto (PDF)`,
    idealFor: `Ideal para:`,
    ideal: { company_small: `startups, pymes agrícolas, instaladores y empresas de agrotecnología.`, company_medium: `empresas en crecimiento: EPC, distribuidores, agroindustria mediana.`, company_large: `fabricantes, desarrolladores, empresas de alimentos y corporativos.`, individual: `consultores, investigadores, productores y profesionales.`, student: `estudiantes de agronomía, ingeniería, energía y afines.` },
    short: { company_small: `< 1 M USD`, company_medium: `1–5 M USD`, company_large: `> 5 M USD`, individual: `Individual`, student: `Estudiante` },
    colBenefit: `Beneficio`, rowFee: `Cuota anual`, rowFounding: `Reconocimiento como miembro fundador (al unirte ahora)`, join: `Elegir`,
    tableTitle: `Comparativa de beneficios`,
    tableLead: `Todos los niveles comparten el mismo marco de beneficios; lo que cambia es la cuota según el tipo y tamaño de tu organización.`,
    tableNote: `El marco de beneficios es común a todos los niveles y se implementa de forma progresiva. Cualquier diferenciación por nivel la definirá el Consejo Directivo y se publicará aquí.`,
    whyTitle: `¿Por qué unirte?`, whyLead: `Dos mundos, razones distintas, un mismo terreno.`,
    whySolarTitle: `Si vienes del mundo solar`,
    whySolar: [`Acceso a tierra sin competir con la producción de alimentos`, `Socios agrícolas locales y mayor aceptación social de tus proyectos`, `Voz en la construcción de la definición y el marco legal de la agrivoltaica`, `Contacto con empresas de alimentos, cooperativas y productores`, `Visibilidad como pionero ante inversionistas y clientes`],
    whyAgriTitle: `Si vienes del campo o del agro digital`,
    whyAgri: [`Un ingreso adicional sin dejar de producir`, `Energía para bombeo, riego, frío y procesamiento`, `Ahorro de agua y cultivos más resilientes al calor`, `Acceso a tecnología: drones, sensores, datos e IA`, `Capacitación y días de campo (previstos) y voz en la política pública`],
    sponsorEyebrow: `Patrocinio`,
    sponsorTitle: `Patrocina el crecimiento de la agrivoltaica en México`,
    sponsorLead: `Para agronegocios, startups y patrocinadores corporativos que quieren visibilidad ante ambos mundos y apoyar los programas de AMAYAD.`,
    sponsorNote: `Paquetes a la medida, sin precios publicados: cuéntanos tus objetivos y te enviaremos una propuesta.`,
    sponsorTypes: [
      { i: `🚜`, t: `Agronegocios`, d: `Insumos, maquinaria, riego, empresas de alimentos y agroindustria.` },
      { i: `🚀`, t: `Startups`, d: `Agrotecnología, clima, datos y energía en etapa temprana.` },
      { i: `🏢`, t: `Patrocinadores corporativos`, d: `Fabricantes, desarrolladores, financieras y grandes empresas.` }
    ],
    testiTitle: `Testimonios`, testiLead: `Las voces de nuestros primeros miembros aparecerán aquí.`,
    testiSoon: `Espacio reservado para el testimonio de un miembro fundador.`,
    faqTitle: `Preguntas frecuentes`,
    faq: [
      { q: `¿Enviar el formulario me hace miembro?`, a: `Es una solicitud. AMAYAD confirmará tu admisión, la cuota vigente y la forma de pago.` },
      { q: `¿En qué moneda están las cuotas?`, a: `En dólares estadounidenses (USD) por año, según la estructura publicada por AMAYAD.` },
      { q: `¿Qué nivel me corresponde?`, a: `Las empresas eligen según sus ventas anuales; las personas, el nivel Individual; los estudiantes, el nivel Estudiante. Si dudas, escríbenos.` },
      { q: `¿Los beneficios ya están disponibles?`, a: `Se implementan de forma progresiva conforme crece la asociación. Los miembros fundadores ayudan a decidir las prioridades.` },
      { q: `¿Mi organización puede patrocinar sin ser miembro?`, a: `Sí. Usa el formulario de patrocinio y armamos una propuesta a la medida.` }
    ],
    askQuestion: `Tengo una pregunta`
  },
  prog: {
    eyebrow: `Programas`, title: `Programas y servicios`,
    lead: `Formas concretas de participar. Todos están en formación: súmate desde el inicio y ayúdanos a darles forma.`,
    tabs: { amb: `Embajadores`, yfn: `Jóvenes Agricultores`, com: `Comités`, courses: `Cursos`, handbook: `Manual`, services: `Servicios` },
    status: { forming: `En formación`, planned: `Planeado`, soon: `Próximamente` },
    amb: {
      title: `Programa de Embajadores`,
      lead: `Personas que representan a AMAYAD en su región o sector y acercan la agrivoltaica y la agricultura digital a más gente.`,
      objTitle: `Objetivos`,
      objectives: [
        { i: `📣`, t: `Concientización`, d: `Dar a conocer qué es la agrivoltaica y sus beneficios para el campo y la energía.` },
        { i: `🤝`, t: `Participación`, d: `Atraer a productores, empresas y estudiantes a la comunidad AMAYAD.` },
        { i: `✅`, t: `Credibilidad`, d: `Difundir información rigurosa y buenas prácticas, sin promesas exageradas.` }
      ],
      rolesTitle: `Roles`,
      roles: [
        { i: `⚖️`, t: `Incidencia`, d: `Representar la visión de AMAYAD ante autoridades y organizaciones locales.` },
        { i: `🎓`, t: `Educación`, d: `Charlas, talleres y materiales para productores, escuelas y empresas.` },
        { i: `🔗`, t: `Networking`, d: `Conectar a la gente del sol con la gente del campo.` },
        { i: `✍️`, t: `Creación de contenido`, d: `Historias, fotos y videos del sector en tu región.` }
      ],
      whoTitle: `¿Quién puede postularse?`,
      who: [`Productores y técnicos agrícolas`, `Profesionales de la energía solar`, `Estudiantes e investigadores`, `Emprendedores de agrotecnología`, `Líderes comunitarios y de organizaciones`],
      getTitle: `Lo que AMAYAD prevé ofrecer`,
      get: [`Materiales y capacitación para embajadores`, `Reconocimiento público como embajador`, `Acceso a la red de miembros y aliados`, `Acceso preferente a eventos`]
    },
    yfn: {
      title: `Red e Intercambio de Jóvenes Agricultores`,
      lead: `Una red para jóvenes que quieren innovar en el campo con energía solar y tecnología digital.`,
      ages: `18 a 35 años.`, agesText: `Productores, estudiantes y profesionales jóvenes de cualquier región.`,
      rolesTitle: `Roles en la red`,
      roles: [
        { i: `📣`, t: `Embajadores`, d: `Llevan la agrivoltaica a sus comunidades, escuelas y redes.` },
        { i: `🧭`, t: `Mentores`, d: `Jóvenes con experiencia que acompañan a quienes empiezan.` },
        { i: `💡`, t: `Innovadores`, d: `Desarrollan ideas, pilotos y soluciones digitales para el campo.` }
      ],
      actTitle: `Actividades previstas`,
      activities: [
        { i: `🎓`, t: `Capacitación`, d: `Talleres sobre agrivoltaica, drones, sensores y modelos de negocio.` },
        { i: `🚌`, t: `Visitas de campo`, d: `Recorridos por sitios demostrativos y proyectos.` },
        { i: `🤝`, t: `Mentoría`, d: `Acompañamiento de profesionales del sector solar y agrícola.` },
        { i: `🌎`, t: `Intercambio`, d: `Intercambios entre regiones y, a futuro, con otros países.` }
      ],
      note: `Programa en formación; las actividades dependen de alianzas y financiamiento que se anunciarán cuando estén confirmados.`
    },
    women: { t: `Mujeres en Agrivoltaica`, d: `Capacitación, oportunidades, liderazgo e innovación para mujeres en la agricultura, la energía y la agricultura digital.` },
    newCommittee: `Nuevo comité`, joinThis: `Unirme a este comité`,
    courses: {
      title: `Cursos y capacitación`,
      lead: `Formación práctica para productores, técnicos, estudiantes y empresas solares.`,
      formats: [
        { i: `🌱`, t: `Talleres en sitios demostrativos`, d: `Aprender en campo, junto a sistemas agrivoltaicos reales.` },
        { i: `👩‍🌾`, t: `Días de campo`, d: `Jornadas abiertas para productores y comunidades.` },
        { i: `💻`, t: `Webinars`, d: `Sesiones en línea sobre tecnología, mercado y regulación.` },
        { i: `📜`, t: `Certificación`, d: `Programa de certificación en agrivoltaica (previsto).` }
      ],
      topicsTitle: `Temas previstos`,
      topics: [`Diseño de sistemas agrivoltaicos`, `Compatibilidad de cultivos`, `Agricultura digital, drones y sensores`, `Operación y mantenimiento`, `Modelos de negocio y financiamiento`, `Marco legal e incentivos fiscales`],
      note: `Aún no hay cursos abiertos. Sedes y aliados académicos se anunciarán cuando estén confirmados.`
    },
    handbook: {
      title: `Manual AMAYAD de agrivoltaica`,
      lead: `Una guía práctica, pensada para México, que reúna lo que hay que saber antes de diseñar, financiar u operar un proyecto agrivoltaico.`,
      contribute: `Quiero contribuir`,
      tocTitle: `Contenido previsto`,
      toc: [`¿Qué es la agrivoltaica?`, `Selección de sitio y recurso solar`, `Configuraciones y estructuras`, `Cultivos y ganado`, `Agua y suelo`, `Agricultura digital y monitoreo`, `Permisos y marco legal en México`, `Modelos de negocio, incentivos fiscales y financiamiento`, `Comunidades, ejidos y tenencia de la tierra`, `Casos de estudio`]
    },
    services: {
      title: `Servicios`,
      lead: `Apoyo especializado para quienes quieren dar el siguiente paso.`,
      soonTag: `Próximamente · vía firmas aliadas`,
      legalTitle: `Asesoría legal para propietarios`,
      legalText: `Orientación para propietarios, ejidos y comunidades que reciben propuestas de proyectos solares o agrivoltaicos.`,
      legalList: [`Contratos de arrendamiento y servidumbre`, `Uso de suelo y permisos`, `Distribución justa de beneficios`],
      softTitle: `Soft-landing para empresas que llegan a México`,
      softText: `Para empresas extranjeras que quieren entrar al mercado agrivoltaico mexicano.`,
      softList: [`Panorama regulatorio y del mercado`, `Contacto con productores y socios locales`, `Vinculación con el ecosistema AMAYAD`],
      note: `AMAYAD no presta estos servicios directamente: los canalizará a firmas aliadas cuando los acuerdos estén formalizados.`
    }
  },
  ev: {
    eyebrow: `Eventos`, title: `Eventos`,
    lead: `Presentaciones, congresos, webinars y días de campo para que los dos mundos se encuentren.`,
    upcoming: `Próximos eventos`, planned: `Planeados`, past: `Eventos anteriores`,
    none: `Pronto anunciaremos nuevos eventos.`, pastNone: `Aquí aparecerá el archivo de eventos realizados.`,
    proposeTitle: `¿Quieres organizar o recibir un evento?`, proposeText: `Propón un webinar, un día de campo o una visita a tu proyecto.`, proposeCta: `Proponer un evento`,
    types: { presentation: `Presentación`, congress: `Congreso`, webinar: `Webinar`, workshop: `Taller`, fieldday: `Día de campo`, networking: `Networking` },
    status: { confirmed: `Fecha confirmada`, planned: `Planeado`, past: `Realizado` },
    tabs: { overview: `Resumen`, agenda: `Agenda`, speakers: `Ponentes`, sponsors: `Patrocinadores` },
    dateShort: `Fecha`, dateTBD: `Fecha por definir`, venueTBD: `Sede por confirmar`, timeTBD: `Horario por confirmar`,
    agendaTBA: `La agenda se publicará próximamente.`, agendaNote: `Agenda preliminar; horarios por confirmar.`,
    speakersTBA: `Ponentes por anunciar.`, moreSpeakers: `Más ponentes`, tba: `Por anunciar`,
    sponsorsNone: `Hay oportunidades de patrocinio disponibles para este evento.`, sponsorCta: `Patrocinar este evento`,
    when: `Cuándo`, where: `Dónde`, details: `Ver detalles`
  },
  part2: {
    ecoEyebrow: `Ecosistema`, ecoTitle: `¿Quién participa en la agrivoltaica?`,
    ecoLead: `La agrivoltaica necesita a muchos actores. AMAYAD es el punto de encuentro entre ellos.`,
    hub: `Punto de encuentro`,
    eco: [
      { id: `private`, i: `🏭`, t: `Sector privado`, d: `Quienes producen, construyen y compran.`, items: [`Agricultores y productores`, `Empresas de alimentos`, `Cooperativas`, `Fabricantes de paneles solares`, `Seguidores solares (trackers)`, `Inversores`, `Estructuras`, `Solar comunitaria`] },
      { id: `public`, i: `🏛️`, t: `Sector público`, d: `Quienes regulan, impulsan y forman talento.`, items: [`Secretaría de energía`, `Secretaría de agricultura`, `Secretaría de educación`, `Universidades y centros de investigación`] },
      { id: `dev`, i: `🌐`, t: `Fondos de desarrollo`, d: `Quienes financian y aportan cooperación técnica.`, items: [`GIZ`, `BID`, `Banco Mundial`, `Otras instituciones de desarrollo`] }
    ],
    ecoNote: `Mapa de categorías de actores del ecosistema. Las organizaciones mencionadas no son aliadas de AMAYAD ni la respaldan; nuestros aliados son solo los que aparecen arriba como «Aliado».`,
    waysTitle: `Formas de colaborar`,
    ways: [
      { i: `🏛️`, t: `Alianza institucional`, d: `Convenios con asociaciones, cámaras y organismos.` },
      { i: `🎓`, t: `Colaboración académica`, d: `Investigación, tesis, prácticas y sitios demostrativos.` },
      { i: `📅`, t: `Aliado de eventos`, d: `Coorganizar presentaciones, webinars y el congreso.` },
      { i: `📰`, t: `Medios y difusión`, d: `Contenidos, entrevistas y alcance para el sector.` }
    ]
  },
  leg: {
    eyebrow: `Asuntos legislativos`, title: `Un marco para la agrivoltaica en México`,
    lead: `La agrivoltaica crece en el mundo con reglas claras. México todavía no las tiene. AMAYAD quiere contribuir a construirlas.`,
    jWhy: `¿Por qué?`, jMexico: `México hoy`, jIntl: `Experiencia internacional`, jInitiative: `Iniciativa AMAYAD`, jTax: `Incentivos fiscales`,
    whyTitle: `¿Por qué México necesita una definición y un marco?`,
    whyLead: `Sin una definición, cualquier planta solar en tierra agrícola podría llamarse «agrivoltaica», y los proyectos bien hechos no tienen cómo distinguirse.`,
    why: [
      { i: `📘`, t: `Certeza jurídica`, d: `Definir qué es —y qué no es— un sistema agrivoltaico.` },
      { i: `🌾`, t: `Proteger la producción de alimentos`, d: `Criterios mínimos de uso agrícola para que la tierra siga produciendo.` },
      { i: `💳`, t: `Habilitar incentivos y financiamiento`, d: `Programas, crédito y reglas de uso de suelo específicas.` },
      { i: `🏡`, t: `Claridad para propietarios y ejidos`, d: `Contratos y beneficios más justos y transparentes.` },
      { i: `📊`, t: `Datos y verificación`, d: `Monitoreo para demostrar resultados agrícolas y energéticos.` },
      { i: `🔗`, t: `Coordinación entre autoridades`, d: `Energía y agricultura trabajando con los mismos criterios.` }
    ],
    mxTitle: `México hoy`,
    mx1n: `Sin definición legal`, mx1l: `México aún no cuenta con una definición legal ni un marco específico para la agrivoltaica.`,
    mx2n: `< 0.7 MW`, mx2l: `La Ley del Sector Eléctrico (2025) exenta del permiso de generación a las centrales con capacidad menor a 0.7 MW (art. 19), lo que es relevante para proyectos a escala de finca.`,
    mxNote: `Otras obligaciones (interconexión, uso de suelo, ambientales) pueden aplicar. Información orientativa, no asesoría legal.`,
    intlTitle: `Lo que hacen otros países`, intlLead: `Ejemplos de cómo se ha regulado la agrivoltaica.`,
    intl: [
      { flag: `🇩🇪`, c: `Alemania`, inst: `Norma DIN SPEC 91434`, facts: [`El rendimiento agrícola debe ser al menos el 66 % del rendimiento de referencia.`, `Pérdida máxima de superficie agrícola: 10 % (categoría I) y 15 % (categoría II).`] },
      { flag: `🇫🇷`, c: `Francia`, inst: `Ley APER (2023) y Decreto 2024-318`, facts: [`Pérdida de rendimiento de máximo 10 % frente a una parcela testigo.`, `Tasa de cobertura máxima de 40 % para plantas de más de 10 MWc.`] },
      { flag: `🇯🇵`, c: `Japón`, inst: `Ministerio de Agricultura (MAFF)`, facts: [`Permisos de conversión de tierras agrícolas condicionados a mantener al menos el 80 % del rendimiento promedio local.`, `Permisos por plazos de 3 o 10 años.`] },
      { flag: `🇮🇹`, c: `Italia`, inst: `Lineamientos MASE (2022) y PNRR`, facts: [`Lineamientos nacionales de 2022 para instalaciones agrivoltaicas.`, `Medida del PNRR de 1,099 millones de euros dedicada a la agrivoltaica.`] },
      { flag: `🇺🇸`, c: `Massachusetts (EE. UU.)`, inst: `Programa SMART`, facts: [`Incentivo adicional («adder») para proyectos solares de doble uso agrícola.`, `Actualmente 0.09 USD/kWh bajo SMART 3.0.`] }
    ],
    intlNote: `Resumen orientativo; consulta los textos oficiales. Las reglas cambian con frecuencia.`,
    initStatus: `En desarrollo`,
    initTitle: `Iniciativa de política pública de AMAYAD`,
    initText: `AMAYAD está desarrollando una propuesta para que México cuente con una definición y un marco para la agrivoltaica. Se presentará públicamente el 24 de noviembre de 2026.`,
    initTopicsTitle: `Temas en análisis`,
    initTopics: [`Definición legal de agrivoltaica`, `Criterios mínimos de producción agrícola y monitoreo`, `Categorías por tipo de sistema y escala`, `Coordinación entre autoridades de energía y agricultura`, `Incentivos y financiamiento`, `Protección de propietarios, ejidos y comunidades`],
    initNote: `Temas en análisis; el contenido final puede cambiar. No implica respaldo de ninguna autoridad.`,
    supportTitle: `Apoya la iniciativa`,
    supportText: `Súmate para recibir avances, aportar comentarios y participar en mesas de trabajo.`,
    seeEvent: `Ver el evento del 24 de noviembre →`,
    taxTitle: `Incentivos fiscales`,
    taxLead: `Herramientas que ya existen en México y pueden mejorar la viabilidad de un proyecto.`,
    taxCardTitle: `Deducción inmediata de hasta 100 % · LISR art. 34, fracc. XIII`,
    taxCardText: `La Ley del Impuesto sobre la Renta permite deducir hasta el 100 % de la inversión en maquinaria y equipo para generar energía con fuentes renovables, como la solar, sujeto a condiciones.`,
    taxConditions: [`El equipo debe mantenerse en operación al menos 5 años después del ejercicio en que se dedujo; si no, se recalcula con actualización y recargos.`, `Aplican las demás disposiciones fiscales vigentes.`],
    taxAdvisor: `Información general, no asesoría fiscal. Consulta a tu asesor fiscal.`,
    updatesTitle: `Actualizaciones legislativas`,
    updatesText: `Próximamente: seguimiento de iniciativas, normas y consultas públicas relevantes para el sector, en el boletín y en esta sección.`
  },
  lib: {
    lead: `Guías, investigación, regulación, incentivos y publicaciones de AMAYAD. Solo incluimos recursos verificables; lo planeado se marca como «Próximamente».`,
    cats: { all: `Todos`, guides: `Guías`, research: `Investigación`, regulation: `Regulación`, tax: `Incentivos fiscales`, cases: `Casos de estudio`, amayad: `Publicaciones AMAYAD`, handbook: `Manual`, carbon: `Bonos de carbono`, blockchain: `Blockchain y trazabilidad`, map: `Mapa mundial`, magazine: `Revista / boletín`, reports: `Informes anuales` }
  },
  members2: { portalTitle: `Portal de miembros`, portalText: `Directorio privado, documentos y beneficios para miembros. Próximamente.` },
  contact: {
    subjects: { general: `Consulta general`, membership: `Membresía`, sponsor: `Patrocinio`, partner: `Ser aliado`, wg: `Unirme a un comité`, project: `Proponer un proyecto`, events: `Eventos`, policy: `Iniciativa de política pública`, services: `Servicios (asesoría / soft-landing)`, resource: `Sugerir un recurso`, press: `Prensa y medios` }
  },
  footer2: { follow: `Síguenos`, explore: `Explorar`, contactTitle: `Contacto`, prototype: `v2 · prototipo` },
  f: {
    emailPh: `tu@correo.com`,
    errAge: `La Red de Jóvenes Agricultores es para personas de 18 a 35 años.`,
    errGroup: `Selecciona al menos una opción.`,
    titles: { sponsor: `Solicitud de patrocinio`, ambassador: `Programa de Embajadores`, youngfarmers: `Red de Jóvenes Agricultores`, partner: `Ser aliado de AMAYAD`, policy: `Apoyar la iniciativa`, committee: `Unirme a un comité`, access: `Portal de miembros — próximamente`, notify: `Avísame cuando esté disponible`, event: `Registrar interés en el evento` },
    intros: {
      sponsor: `Cuéntanos sobre tu organización y tus objetivos. Te enviaremos una propuesta a la medida (no hay precios publicados).`,
      ambassador: `Postúlate como embajador o nomina a alguien que represente bien a AMAYAD en su región o sector.`,
      youngfarmers: `Para jóvenes de 18 a 35 años. Cuéntanos quién eres y cómo te gustaría participar.`,
      partner: `Para instituciones, asociaciones, universidades y empresas que quieren colaborar con AMAYAD.`,
      policy: `Recibe avances de la iniciativa, aporta comentarios y participa en mesas de trabajo.`,
      committee: `Elige el comité en el que te gustaría participar.`,
      access: `<b>El portal para miembros estará disponible próximamente.</b> Solicita acceso y te avisaremos en cuanto esté listo.`,
      notify: `Te avisaremos por correo cuando esté disponible.`,
      event: `Regístrate y te enviaremos la sede, el horario y los detalles en cuanto estén confirmados.`
    },
    submits: { sponsor: `Enviar solicitud`, ambassador: `Enviar`, youngfarmers: `Enviar postulación`, partner: `Enviar propuesta`, policy: `Sumarme`, committee: `Enviar`, access: `Solicitar acceso`, notify: `Avísame`, event: `Registrar interés` },
    labels: { sponsorType: `Tipo de patrocinador`, organization: `Organización`, name: `Nombre completo`, role: `Cargo / rol`, email: `Correo electrónico`, phone: `Teléfono`, country: `País`, message: `Mensaje`, mode: `¿Qué quieres hacer?`, location: `Estado / ciudad`, sector: `Sector`, roles: `Roles que te interesan`, nomineeName: `Nombre de la persona nominada`, nomineeEmail: `Correo de la persona nominada`, age: `Edad`, background: `Perfil`, yfnRole: `Rol que te interesa`, yfnInterests: `Me interesa`, orgType: `Tipo de organización`, profile: `Te sumas como`, committee: `Comité`, memberStatus: `Situación`, topic: `Tema`, eventId: `Evento`, attendance: `Quiero participar como` },
    opts: {
      sponsorType: { agbusiness: `Agronegocio`, startup: `Startup`, corporate: `Patrocinador corporativo`, other: `Otro` },
      ambMode: { apply: `Postularme`, nominate: `Nominar a alguien` },
      ambRoles: { advocacy: `Incidencia`, education: `Educación`, networking: `Networking`, content: `Creación de contenido` },
      yfnBackground: { farmer: `Productor/a agrícola`, student: `Estudiante`, solar: `Profesional solar`, digital: `Agrotecnología / digital`, other: `Otro` },
      yfnRole: { ambassador: `Embajador/a`, mentor: `Mentor/a`, innovator: `Innovador/a` },
      yfnInterests: { training: `Capacitación`, fieldtrips: `Visitas de campo`, mentorship: `Mentoría`, exchange: `Intercambio` },
      orgType: { private: `Empresa privada`, association: `Asociación o cámara`, academia: `Universidad / investigación`, public: `Gobierno`, devfund: `Organismo de desarrollo`, ngo: `ONG`, media: `Medio de comunicación`, other: `Otro` },
      profile: { farmer: `Productor/a`, solar: `Sector solar`, digital: `Agricultura digital`, academia: `Academia`, government: `Servidor/a público/a`, ngo: `Sociedad civil`, citizen: `Ciudadano/a`, other: `Otro` },
      memberStatus: { member: `Ya soy miembro`, applicant: `Envié mi solicitud`, notyet: `Aún no soy miembro` },
      topic: { courses: `Cursos y capacitación`, handbook: `Manual de agrivoltaica`, library: `Recursos de la biblioteca`, services: `Servicios`, other: `Otro` },
      attendance: { attend: `Asistente`, speak: `Ponente`, sponsor: `Patrocinador`, volunteer: `Voluntario/a`, press: `Prensa` }
    }
  },
  privacy: { extra: `<h3>Boletín</h3><p>Si te suscribes al boletín semanal, usaremos tu correo solo para enviártelo. Puedes darte de baja en cualquier momento.</p>` }
};

/* =============================== ENGLISH =============================== */
V.en = {
  ui: { search: `Search`, searchPh: `Search the site…`, searchHint: `Type to search every section (membership, programmes, events, laws…).`, searchNone: `No results. Try another word.`, searchCount: `{n} results`,
        login: `Member login`, onThisPage: `On this page`, comingSoon: `coming soon`, socialSoon: `This social network will be available soon.` },
  nav: { home: `Home`, about: `About`, membership: `Membership`, programs: `Programmes`, events: `Events`, partnerships: `Partnerships`, legislative: `Legislative affairs`, library: `Library`, members: `Members`, contact: `Contact` },
  cta: { sponsor: `Become a sponsor`, apply: `Apply`, nominate: `Nominate someone`, notify: `Notify me`, support: `Support the initiative`, subscribe: `Subscribe`, discord: `Discord community`, register: `Register`, registerInterest: `Register interest`, addCal: `Add to calendar`, partner: `Become a partner`, wg: `Join a committee` },
  home2: {
    cta2: `See programmes`,
    benefitsTitle: `What agrivoltaics can deliver`,
    benefits: [
      { i: `🌾`, t: `Food security`, d: `Energy without taking land out of food production.` },
      { i: `🌍`, t: `Lower CO₂ emissions`, d: `Solar power replacing fossil energy on farms and on the grid.` },
      { i: `💧`, t: `Water savings`, d: `Partial shade reduces evaporation and irrigation demand.` },
      { i: `💰`, t: `Extra farmer income`, d: `A second harvest: energy, land lease or self-consumption.` },
      { i: `⚡`, t: `Clean energy for farms`, d: `Pumping, irrigation, cooling and processing with your own power.` },
      { i: `🌡️`, t: `More resilient crops`, d: `A milder microclimate during extreme heat.` }
    ],
    benefitsNote: `Qualitative benefits. Results depend on the site, the crop and the system design.`,
    quickTitle: `Quick links`,
    quick: [
      { id: `membership`, i: `🤝`, t: `Membership`, d: `5 tiers and sponsorship` },
      { id: `programs`, i: `🎓`, t: `Programmes`, d: `Ambassadors, young farmers, committees` },
      { id: `events`, i: `📅`, t: `Events`, d: `24 Nov 2026: book and initiative` },
      { id: `legislative`, i: `⚖️`, t: `Legislative affairs`, d: `Legal framework and incentives` },
      { id: `library`, i: `📚`, t: `Library`, d: `Guides, studies and laws` },
      { id: `partnerships`, i: `🌐`, t: `Partnerships & ecosystem`, d: `Who takes part` }
    ],
    nextEventTitle: `Next event`,
    newsTitle: `Latest news`,
    newsSoon: `News coming soon`,
    newsSoonText: `We will post updates on AMAYAD, its programmes and the sector here.`,
    newsletterTag: `Weekly newsletter`,
    newsletterTitle: `Weekly benefits newsletter`,
    newsletterText: `Every week: sector news, member opportunities, events and policy updates. Free; unsubscribe any time.`,
    nlOk: `Done! You are subscribed to the newsletter.`,
    nlMailto: `Your subscription is ready. Click the button to send it by email.`,
    discordTag: `Community`,
    discordTitle: `Join the conversation`,
    discordText: `A space where people from solar and from farming share questions, projects and opportunities.`,
    discordSoon: `The Discord community opens soon. Subscribe to the newsletter to get the invitation.`,
    waySponsor: `For agribusinesses, startups and companies that want to boost the sector.`
  },
  about: {
    eyebrow: `About`, title: `Who we are`,
    lead: `AMAYAD was born in 2024 from a simple idea: the solar energy world and the agriculture world — including digital agriculture — should meet, collaborate and form partnerships.`,
    jMission: `Mission & vision`, jHistory: `History`, jFounders: `Co-founders`, jGovernance: `Governance`, jAgri: `What is agrivoltaics?`,
    missionTitle: `Mission`,
    missionText: `To promote innovation and technology in Mexican agriculture so it produces more, efficiently and sustainably, by integrating agrivoltaics, precision agriculture and digital tools.`,
    visionTitle: `Vision`,
    visionText: `A Mexico that leads large-scale adoption of agrivoltaics, creating rural jobs and improving energy and food self-sufficiency.`,
    historyTitle: `Our history`,
    history: [
      { y: `2024`, t: `Founding`, d: `Luis Alfonso Escobedo and Roberto Moreno Castillo co-found AMAYAD to bring the solar industry and farming together.` },
      { y: `2024`, t: `First public presentation`, d: `AMAYAD publicly presents its objectives, committees, benefits and membership structure.` },
      { y: `2026`, t: `Programmes in formation`, d: `Ambassadors, Young Farmers Network and working committees, including Women in Agrivoltaics.` },
      { y: `24 Nov 2026`, t: `Book and initiative`, d: `Launch of “Cosechando el Sol Dos Veces” and of the agrivoltaics public-policy initiative.`, planned: true },
      { y: `Coming soon`, t: `First Agrivoltaics Congress in Mexico`, d: `Date and venue to be defined.`, planned: true }
    ],
    foundersTitle: `Co-founders`,
    foundersLead: `AMAYAD was co-founded in 2024 by:`,
    founders: [
      { name: `Luis Alfonso Escobedo`, role: `Co-founder`, d: `Author of the book “Cosechando el Sol Dos Veces” (Harvesting the Sun Twice) on agrivoltaics and digital agriculture.` },
      { name: `Roberto Moreno Castillo`, role: `Co-founder`, d: `Bio coming soon.` }
    ],
    governanceTitle: `Governance`,
    governanceLead: `AMAYAD's governance structure is being set up. Names will be published only once confirmed.`,
    inFormation: `In formation`,
    governance: [
      { t: `General Assembly`, d: `Highest body. Members will take part with voting rights, as set out in the bylaws.` },
      { t: `Board of Directors`, d: `Strategic leadership of the association. Being formed.` },
      { t: `Working committees`, d: `Seven thematic committees open to members.` },
      { t: `Bylaws and code of ethics`, d: `Will be published on this site.` }
    ],
    seeCommittees: `See committees`
  },
  mem2: {
    jTiers: `Tiers`, jCompare: `Comparison`, jWhy: `Why join?`, jSponsor: `Sponsorship`, jFaq: `FAQ`,
    brochure: `Download brochure (PDF)`,
    idealFor: `Ideal for:`,
    ideal: { company_small: `startups, small farm businesses, installers and agtech companies.`, company_medium: `growing companies: EPCs, distributors, mid-size agribusiness.`, company_large: `manufacturers, developers, food companies and corporates.`, individual: `consultants, researchers, growers and professionals.`, student: `students of agronomy, engineering, energy and related fields.` },
    short: { company_small: `< USD 1M`, company_medium: `USD 1–5M`, company_large: `> USD 5M`, individual: `Individual`, student: `Student` },
    colBenefit: `Benefit`, rowFee: `Annual fee`, rowFounding: `Founding-member recognition (when joining now)`, join: `Choose`,
    tableTitle: `Benefits comparison`,
    tableLead: `All tiers share the same benefits framework; what changes is the fee, based on the type and size of your organisation.`,
    tableNote: `The benefits framework is common to all tiers and is rolled out progressively. Any per-tier differentiation will be set by the Board and published here.`,
    whyTitle: `Why join?`, whyLead: `Two worlds, different reasons, one common ground.`,
    whySolarTitle: `If you come from solar`,
    whySolar: [`Access to land without competing with food production`, `Local farming partners and stronger social acceptance for your projects`, `A voice in shaping the definition and legal framework for agrivoltaics`, `Contact with food companies, cooperatives and growers`, `Visibility as a pioneer with investors and customers`],
    whyAgriTitle: `If you come from farming or digital agriculture`,
    whyAgri: [`Extra income while you keep farming`, `Energy for pumping, irrigation, cooling and processing`, `Water savings and crops more resilient to heat`, `Access to technology: drones, sensors, data and AI`, `Training and field days (planned) and a voice in public policy`],
    sponsorEyebrow: `Sponsorship`,
    sponsorTitle: `Sponsor the growth of agrivoltaics in Mexico`,
    sponsorLead: `For agribusinesses, startups and corporate sponsors that want visibility with both worlds and to support AMAYAD's programmes.`,
    sponsorNote: `Tailored packages, no published prices: tell us your goals and we will send you a proposal.`,
    sponsorTypes: [
      { i: `🚜`, t: `Agribusinesses`, d: `Inputs, machinery, irrigation, food companies and agro-industry.` },
      { i: `🚀`, t: `Startups`, d: `Early-stage agtech, climate, data and energy.` },
      { i: `🏢`, t: `Corporate sponsors`, d: `Manufacturers, developers, financiers and large companies.` }
    ],
    testiTitle: `Testimonials`, testiLead: `The voices of our first members will appear here.`,
    testiSoon: `Space reserved for a founding member's testimonial.`,
    faqTitle: `Frequently asked questions`,
    faq: [
      { q: `Does sending the form make me a member?`, a: `It is an application. AMAYAD will confirm your admission, the current fee and how to pay.` },
      { q: `What currency are the fees in?`, a: `US dollars (USD) per year, according to the structure published by AMAYAD.` },
      { q: `Which tier is right for me?`, a: `Companies choose by annual sales; individuals choose Individual; students choose Student. If in doubt, write to us.` },
      { q: `Are the benefits already available?`, a: `They are rolled out progressively as the association grows. Founding members help set the priorities.` },
      { q: `Can my organisation sponsor without being a member?`, a: `Yes. Use the sponsorship form and we will put together a tailored proposal.` }
    ],
    askQuestion: `I have a question`
  },
  prog: {
    eyebrow: `Programmes`, title: `Programmes and services`,
    lead: `Concrete ways to take part. All of them are being set up: join from the start and help shape them.`,
    tabs: { amb: `Ambassadors`, yfn: `Young Farmers`, com: `Committees`, courses: `Courses`, handbook: `Handbook`, services: `Services` },
    status: { forming: `In formation`, planned: `Planned`, soon: `Coming soon` },
    amb: {
      title: `Ambassadors Programme`,
      lead: `People who represent AMAYAD in their region or sector and bring agrivoltaics and digital agriculture to more people.`,
      objTitle: `Objectives`,
      objectives: [
        { i: `📣`, t: `Awareness`, d: `Explain what agrivoltaics is and what it offers farming and energy.` },
        { i: `🤝`, t: `Engagement`, d: `Bring growers, companies and students into the AMAYAD community.` },
        { i: `✅`, t: `Credibility`, d: `Share rigorous information and good practice, without overpromising.` }
      ],
      rolesTitle: `Roles`,
      roles: [
        { i: `⚖️`, t: `Advocacy`, d: `Represent AMAYAD's vision before local authorities and organisations.` },
        { i: `🎓`, t: `Education`, d: `Talks, workshops and materials for growers, schools and companies.` },
        { i: `🔗`, t: `Networking`, d: `Connect solar people with farming people.` },
        { i: `✍️`, t: `Content creation`, d: `Stories, photos and videos of the sector in your region.` }
      ],
      whoTitle: `Who can apply?`,
      who: [`Growers and agricultural technicians`, `Solar energy professionals`, `Students and researchers`, `Agtech entrepreneurs`, `Community and organisation leaders`],
      getTitle: `What AMAYAD plans to offer`,
      get: [`Materials and training for ambassadors`, `Public recognition as an ambassador`, `Access to the network of members and partners`, `Priority access to events`]
    },
    yfn: {
      title: `Young Farmers Network & Exchange`,
      lead: `A network for young people who want to innovate in farming with solar energy and digital technology.`,
      ages: `Ages 18 to 35.`, agesText: `Young growers, students and professionals from any region.`,
      rolesTitle: `Roles in the network`,
      roles: [
        { i: `📣`, t: `Ambassadors`, d: `Bring agrivoltaics to their communities, schools and networks.` },
        { i: `🧭`, t: `Mentors`, d: `Experienced young people who support those starting out.` },
        { i: `💡`, t: `Innovators`, d: `Develop ideas, pilots and digital solutions for farming.` }
      ],
      actTitle: `Planned activities`,
      activities: [
        { i: `🎓`, t: `Training`, d: `Workshops on agrivoltaics, drones, sensors and business models.` },
        { i: `🚌`, t: `Field trips`, d: `Visits to demonstration sites and projects.` },
        { i: `🤝`, t: `Mentorship`, d: `Guidance from solar and farming professionals.` },
        { i: `🌎`, t: `Exchange`, d: `Exchanges between regions and, in future, with other countries.` }
      ],
      note: `Programme in formation; activities depend on partnerships and funding that will be announced once confirmed.`
    },
    women: { t: `Women in Agrivoltaics`, d: `Training, opportunities, leadership and innovation for women in agriculture, energy and digital agriculture.` },
    newCommittee: `New committee`, joinThis: `Join this committee`,
    courses: {
      title: `Courses and training`,
      lead: `Hands-on training for growers, technicians, students and solar companies.`,
      formats: [
        { i: `🌱`, t: `Workshops at demonstration sites`, d: `Learning in the field, next to real agrivoltaic systems.` },
        { i: `👩‍🌾`, t: `Field days`, d: `Open days for growers and communities.` },
        { i: `💻`, t: `Webinars`, d: `Online sessions on technology, markets and regulation.` },
        { i: `📜`, t: `Certification`, d: `Agrivoltaics certification programme (planned).` }
      ],
      topicsTitle: `Planned topics`,
      topics: [`Agrivoltaic system design`, `Crop compatibility`, `Digital agriculture, drones and sensors`, `Operation and maintenance`, `Business models and finance`, `Legal framework and tax incentives`],
      note: `No courses are open yet. Venues and academic partners will be announced once confirmed.`
    },
    handbook: {
      title: `AMAYAD Agrivoltaics Handbook`,
      lead: `A practical guide, written for Mexico, covering what you need to know before designing, financing or operating an agrivoltaic project.`,
      contribute: `I want to contribute`,
      tocTitle: `Planned contents`,
      toc: [`What is agrivoltaics?`, `Site selection and solar resource`, `Configurations and structures`, `Crops and livestock`, `Water and soil`, `Digital agriculture and monitoring`, `Permits and legal framework in Mexico`, `Business models, tax incentives and finance`, `Communities, ejidos and land tenure`, `Case studies`]
    },
    services: {
      title: `Services`,
      lead: `Specialised support for those ready to take the next step.`,
      soonTag: `Coming soon · via allied firms`,
      legalTitle: `Legal advisory for landowners`,
      legalText: `Guidance for landowners, ejidos and communities receiving proposals for solar or agrivoltaic projects.`,
      legalList: [`Lease and easement contracts`, `Land use and permits`, `Fair benefit sharing`],
      softTitle: `Soft-landing for companies entering Mexico`,
      softText: `For foreign companies that want to enter the Mexican agrivoltaics market.`,
      softList: [`Regulatory and market overview`, `Contact with growers and local partners`, `Connection with the AMAYAD ecosystem`],
      note: `AMAYAD does not provide these services directly: it will refer them to allied firms once agreements are formalised.`
    }
  },
  ev: {
    eyebrow: `Events`, title: `Events`,
    lead: `Launches, congresses, webinars and field days where the two worlds meet.`,
    upcoming: `Upcoming events`, planned: `Planned`, past: `Past events`,
    none: `New events will be announced soon.`, pastNone: `The archive of past events will appear here.`,
    proposeTitle: `Want to organise or host an event?`, proposeText: `Propose a webinar, a field day or a visit to your project.`, proposeCta: `Propose an event`,
    types: { presentation: `Launch`, congress: `Congress`, webinar: `Webinar`, workshop: `Workshop`, fieldday: `Field day`, networking: `Networking` },
    status: { confirmed: `Date confirmed`, planned: `Planned`, past: `Held` },
    tabs: { overview: `Overview`, agenda: `Agenda`, speakers: `Speakers`, sponsors: `Sponsors` },
    dateShort: `Date`, dateTBD: `Date to be defined`, venueTBD: `Venue to be confirmed`, timeTBD: `Time to be confirmed`,
    agendaTBA: `The agenda will be published soon.`, agendaNote: `Preliminary agenda; times to be confirmed.`,
    speakersTBA: `Speakers to be announced.`, moreSpeakers: `More speakers`, tba: `To be announced`,
    sponsorsNone: `Sponsorship opportunities are available for this event.`, sponsorCta: `Sponsor this event`,
    when: `When`, where: `Where`, details: `See details`
  },
  part2: {
    ecoEyebrow: `Ecosystem`, ecoTitle: `Who takes part in agrivoltaics?`,
    ecoLead: `Agrivoltaics needs many players. AMAYAD is where they meet.`,
    hub: `Meeting point`,
    eco: [
      { id: `private`, i: `🏭`, t: `Private sector`, d: `Those who produce, build and buy.`, items: [`Farmers and growers`, `Food companies`, `Cooperatives`, `Solar panel manufacturers`, `Solar trackers`, `Inverters`, `Mounting structures`, `Community solar`] },
      { id: `public`, i: `🏛️`, t: `Public sector`, d: `Those who regulate, promote and train talent.`, items: [`Energy ministry`, `Agriculture ministry`, `Education ministry`, `Universities and research centres`] },
      { id: `dev`, i: `🌐`, t: `Development funds`, d: `Those who finance and provide technical cooperation.`, items: [`GIZ`, `IDB`, `World Bank`, `Other development institutions`] }
    ],
    ecoNote: `A map of categories of actors in the ecosystem. The organisations named are not AMAYAD partners and do not endorse it; our partners are only those listed above as “Partner”.`,
    waysTitle: `Ways to collaborate`,
    ways: [
      { i: `🏛️`, t: `Institutional alliance`, d: `Agreements with associations, chambers and bodies.` },
      { i: `🎓`, t: `Academic collaboration`, d: `Research, theses, internships and demonstration sites.` },
      { i: `📅`, t: `Event partner`, d: `Co-organise launches, webinars and the congress.` },
      { i: `📰`, t: `Media and outreach`, d: `Content, interviews and reach for the sector.` }
    ]
  },
  leg: {
    eyebrow: `Legislative affairs`, title: `A framework for agrivoltaics in Mexico`,
    lead: `Agrivoltaics is growing worldwide under clear rules. Mexico does not have them yet. AMAYAD wants to help build them.`,
    jWhy: `Why?`, jMexico: `Mexico today`, jIntl: `International experience`, jInitiative: `AMAYAD initiative`, jTax: `Tax incentives`,
    whyTitle: `Why does Mexico need a definition and a framework?`,
    whyLead: `Without a definition, any solar plant on farmland could call itself “agrivoltaic”, and well-designed projects have no way to stand out.`,
    why: [
      { i: `📘`, t: `Legal certainty`, d: `Define what an agrivoltaic system is — and what it is not.` },
      { i: `🌾`, t: `Protect food production`, d: `Minimum agricultural-use criteria so the land keeps producing.` },
      { i: `💳`, t: `Unlock incentives and finance`, d: `Dedicated programmes, credit and land-use rules.` },
      { i: `🏡`, t: `Clarity for landowners and ejidos`, d: `Fairer, more transparent contracts and benefits.` },
      { i: `📊`, t: `Data and verification`, d: `Monitoring that demonstrates agricultural and energy results.` },
      { i: `🔗`, t: `Coordination between authorities`, d: `Energy and agriculture working with the same criteria.` }
    ],
    mxTitle: `Mexico today`,
    mx1n: `No legal definition`, mx1l: `Mexico does not yet have a legal definition or a specific framework for agrivoltaics.`,
    mx2n: `< 0.7 MW`, mx2l: `The Electricity Sector Law (LSE, 2025) exempts power plants under 0.7 MW from the generation permit (Art. 19), which is relevant for farm-scale projects.`,
    mxNote: `Other obligations (interconnection, land use, environmental) may apply. For guidance only, not legal advice.`,
    intlTitle: `What other countries do`, intlLead: `Examples of how agrivoltaics has been regulated.`,
    intl: [
      { flag: `🇩🇪`, c: `Germany`, inst: `DIN SPEC 91434 standard`, facts: [`Agricultural yield must be at least 66% of the reference yield.`, `Maximum loss of agricultural land: 10% (category I) and 15% (category II).`] },
      { flag: `🇫🇷`, c: `France`, inst: `APER law (2023) and Decree 2024-318`, facts: [`Yield loss of no more than 10% compared with a control plot.`, `Maximum coverage rate of 40% for plants above 10 MWp.`] },
      { flag: `🇯🇵`, c: `Japan`, inst: `Ministry of Agriculture (MAFF)`, facts: [`Farmland conversion permits conditioned on keeping at least 80% of the local average yield.`, `Permits for terms of 3 or 10 years.`] },
      { flag: `🇮🇹`, c: `Italy`, inst: `MASE guidelines (2022) and PNRR`, facts: [`National guidelines (2022) for agrivoltaic installations.`, `A €1.099 billion PNRR measure dedicated to agrivoltaics.`] },
      { flag: `🇺🇸`, c: `Massachusetts (USA)`, inst: `SMART programme`, facts: [`An agricultural “adder” incentive for dual-use solar projects.`, `Currently USD 0.09/kWh under SMART 3.0.`] }
    ],
    intlNote: `Summary for guidance; check the official texts. Rules change often.`,
    initStatus: `In development`,
    initTitle: `AMAYAD public-policy initiative`,
    initText: `AMAYAD is developing a proposal so that Mexico has a definition and a framework for agrivoltaics. It will be presented publicly on 24 November 2026.`,
    initTopicsTitle: `Topics under analysis`,
    initTopics: [`Legal definition of agrivoltaics`, `Minimum agricultural production and monitoring criteria`, `Categories by system type and scale`, `Coordination between energy and agriculture authorities`, `Incentives and finance`, `Protection of landowners, ejidos and communities`],
    initNote: `Topics under analysis; the final content may change. It does not imply endorsement by any authority.`,
    supportTitle: `Support the initiative`,
    supportText: `Sign up to receive updates, share comments and take part in working groups.`,
    seeEvent: `See the 24 November event →`,
    taxTitle: `Tax incentives`,
    taxLead: `Tools that already exist in Mexico and can improve a project's viability.`,
    taxCardTitle: `Up to 100% immediate deduction · LISR Art. 34, section XIII`,
    taxCardText: `Mexico's Income Tax Law allows up to 100% of the investment in machinery and equipment for renewable energy generation, such as solar, to be deducted, subject to conditions.`,
    taxConditions: [`The equipment must stay in operation for at least 5 years after the year of the deduction; otherwise it is recalculated with inflation adjustment and surcharges.`, `All other applicable tax rules apply.`],
    taxAdvisor: `General information, not tax advice. Consult your tax advisor.`,
    updatesTitle: `Legislative updates`,
    updatesText: `Coming soon: tracking of bills, standards and public consultations relevant to the sector, in the newsletter and in this section.`
  },
  lib: {
    lead: `Guides, research, regulation, incentives and AMAYAD publications. We only include verifiable resources; planned items are marked “Coming soon”.`,
    cats: { all: `All`, guides: `Guides`, research: `Research`, regulation: `Regulation`, tax: `Tax incentives`, cases: `Case studies`, amayad: `AMAYAD publications`, handbook: `Handbook`, carbon: `Carbon credits`, blockchain: `Blockchain & traceability`, map: `World map`, magazine: `Magazine / newsletter`, reports: `Annual reports` }
  },
  members2: { portalTitle: `Member portal`, portalText: `Private directory, documents and member benefits. Coming soon.` },
  contact: {
    subjects: { general: `General enquiry`, membership: `Membership`, sponsor: `Sponsorship`, partner: `Become a partner`, wg: `Join a committee`, project: `Propose a project`, events: `Events`, policy: `Public-policy initiative`, services: `Services (advisory / soft-landing)`, resource: `Suggest a resource`, press: `Press and media` }
  },
  footer2: { follow: `Follow us`, explore: `Explore`, contactTitle: `Contact`, prototype: `v2 · prototype` },
  f: {
    emailPh: `you@email.com`,
    errAge: `The Young Farmers Network is for people aged 18 to 35.`,
    errGroup: `Please choose at least one option.`,
    titles: { sponsor: `Sponsorship enquiry`, ambassador: `Ambassadors Programme`, youngfarmers: `Young Farmers Network`, partner: `Become an AMAYAD partner`, policy: `Support the initiative`, committee: `Join a committee`, access: `Member portal — coming soon`, notify: `Notify me when available`, event: `Register interest in the event` },
    intros: {
      sponsor: `Tell us about your organisation and goals. We will send you a tailored proposal (no published prices).`,
      ambassador: `Apply to become an ambassador or nominate someone who would represent AMAYAD well in their region or sector.`,
      youngfarmers: `For young people aged 18 to 35. Tell us who you are and how you would like to take part.`,
      partner: `For institutions, associations, universities and companies that want to collaborate with AMAYAD.`,
      policy: `Receive updates on the initiative, share comments and join working groups.`,
      committee: `Choose the committee you would like to join.`,
      access: `<b>The member portal is coming soon.</b> Request access and we will let you know as soon as it is ready.`,
      notify: `We will email you when it is available.`,
      event: `Register and we will send you the venue, time and details as soon as they are confirmed.`
    },
    submits: { sponsor: `Send enquiry`, ambassador: `Send`, youngfarmers: `Send application`, partner: `Send proposal`, policy: `Count me in`, committee: `Send`, access: `Request access`, notify: `Notify me`, event: `Register interest` },
    labels: { sponsorType: `Sponsor type`, organization: `Organisation`, name: `Full name`, role: `Position / role`, email: `Email`, phone: `Phone`, country: `Country`, message: `Message`, mode: `What would you like to do?`, location: `State / city`, sector: `Sector`, roles: `Roles you are interested in`, nomineeName: `Nominee's name`, nomineeEmail: `Nominee's email`, age: `Age`, background: `Background`, yfnRole: `Role you are interested in`, yfnInterests: `I am interested in`, orgType: `Type of organisation`, profile: `You join as`, committee: `Committee`, memberStatus: `Status`, topic: `Topic`, eventId: `Event`, attendance: `I want to take part as` },
    opts: {
      sponsorType: { agbusiness: `Agribusiness`, startup: `Startup`, corporate: `Corporate sponsor`, other: `Other` },
      ambMode: { apply: `Apply myself`, nominate: `Nominate someone` },
      ambRoles: { advocacy: `Advocacy`, education: `Education`, networking: `Networking`, content: `Content creation` },
      yfnBackground: { farmer: `Grower`, student: `Student`, solar: `Solar professional`, digital: `Agtech / digital`, other: `Other` },
      yfnRole: { ambassador: `Ambassador`, mentor: `Mentor`, innovator: `Innovator` },
      yfnInterests: { training: `Training`, fieldtrips: `Field trips`, mentorship: `Mentorship`, exchange: `Exchange` },
      orgType: { private: `Private company`, association: `Association or chamber`, academia: `University / research`, public: `Government`, devfund: `Development institution`, ngo: `NGO`, media: `Media`, other: `Other` },
      profile: { farmer: `Grower`, solar: `Solar sector`, digital: `Digital agriculture`, academia: `Academia`, government: `Public servant`, ngo: `Civil society`, citizen: `Citizen`, other: `Other` },
      memberStatus: { member: `I am already a member`, applicant: `I have applied`, notyet: `I am not a member yet` },
      topic: { courses: `Courses and training`, handbook: `Agrivoltaics handbook`, library: `Library resources`, services: `Services`, other: `Other` },
      attendance: { attend: `Attendee`, speak: `Speaker`, sponsor: `Sponsor`, volunteer: `Volunteer`, press: `Press` }
    }
  },
  privacy: { extra: `<h3>Newsletter</h3><p>If you subscribe to the weekly newsletter, we will use your email only to send it to you. You can unsubscribe at any time.</p>` }
};

/* =============================== FRANÇAIS =============================== */
V.fr = {
  ui: { search: `Rechercher`, searchPh: `Rechercher sur le site…`, searchHint: `Tapez pour chercher dans toutes les sections (adhésion, programmes, événements, lois…).`, searchNone: `Aucun résultat. Essayez un autre mot.`, searchCount: `{n} résultats`,
        login: `Espace membres`, onThisPage: `Sur cette page`, comingSoon: `bientôt`, socialSoon: `Ce réseau social sera bientôt disponible.` },
  nav: { home: `Accueil`, about: `À propos`, membership: `Adhésion`, programs: `Programmes`, events: `Événements`, partnerships: `Partenariats`, legislative: `Affaires législatives`, library: `Bibliothèque`, members: `Membres`, contact: `Contact` },
  cta: { sponsor: `Devenir sponsor`, apply: `Candidater`, nominate: `Proposer quelqu'un`, notify: `Me prévenir`, support: `Soutenir l'initiative`, subscribe: `S'abonner`, discord: `Communauté Discord`, register: `S'inscrire`, registerInterest: `Manifester mon intérêt`, addCal: `Ajouter au calendrier`, partner: `Devenir partenaire`, wg: `Rejoindre un comité` },
  home2: {
    cta2: `Voir les programmes`,
    benefitsTitle: `Ce que l'agrivoltaïsme peut apporter`,
    benefits: [
      { i: `🌾`, t: `Sécurité alimentaire`, d: `De l'énergie sans retirer les terres de la production alimentaire.` },
      { i: `🌍`, t: `Moins d'émissions de CO₂`, d: `De l'électricité solaire qui remplace l'énergie fossile à la ferme et sur le réseau.` },
      { i: `💧`, t: `Économies d'eau`, d: `L'ombrage partiel réduit l'évaporation et les besoins d'irrigation.` },
      { i: `💰`, t: `Revenu supplémentaire pour l'agriculteur`, d: `Une deuxième récolte : énergie, bail ou autoconsommation.` },
      { i: `⚡`, t: `Énergie propre pour la ferme`, d: `Pompage, irrigation, froid et transformation avec sa propre énergie.` },
      { i: `🌡️`, t: `Cultures plus résilientes`, d: `Un microclimat plus doux face aux fortes chaleurs.` }
    ],
    benefitsNote: `Bénéfices qualitatifs. Les résultats dépendent du site, de la culture et de la conception du système.`,
    quickTitle: `Accès rapides`,
    quick: [
      { id: `membership`, i: `🤝`, t: `Adhésion`, d: `5 niveaux et parrainage` },
      { id: `programs`, i: `🎓`, t: `Programmes`, d: `Ambassadeurs, jeunes, comités` },
      { id: `events`, i: `📅`, t: `Événements`, d: `24 nov. 2026 : livre et initiative` },
      { id: `legislative`, i: `⚖️`, t: `Affaires législatives`, d: `Cadre juridique et incitations` },
      { id: `library`, i: `📚`, t: `Bibliothèque`, d: `Guides, études et lois` },
      { id: `partnerships`, i: `🌐`, t: `Partenariats et écosystème`, d: `Qui participe` }
    ],
    nextEventTitle: `Prochain événement`,
    newsTitle: `Dernières actualités`,
    newsSoon: `Actualités à venir`,
    newsSoonText: `Nous publierons ici les nouvelles d'AMAYAD, de ses programmes et du secteur.`,
    newsletterTag: `Lettre hebdomadaire`,
    newsletterTitle: `Lettre hebdomadaire des avantages`,
    newsletterText: `Chaque semaine : actualités du secteur, opportunités pour les membres, événements et avancées législatives. Gratuit ; désabonnement à tout moment.`,
    nlOk: `C'est fait ! Vous êtes abonné(e) à la lettre.`,
    nlMailto: `Votre abonnement est prêt. Cliquez sur le bouton pour l'envoyer par e-mail.`,
    discordTag: `Communauté`,
    discordTitle: `Rejoignez la conversation`,
    discordText: `Un espace où les acteurs du solaire et de l'agriculture partagent questions, projets et opportunités.`,
    discordSoon: `La communauté Discord ouvrira bientôt. Abonnez-vous à la lettre pour recevoir l'invitation.`,
    waySponsor: `Pour les entreprises agricoles, startups et sociétés qui veulent dynamiser le secteur.`
  },
  about: {
    eyebrow: `À propos`, title: `Qui sommes-nous`,
    lead: `AMAYAD est née en 2024 d'une idée simple : faire se rencontrer le monde de l'énergie solaire et celui de l'agriculture — y compris l'agriculture numérique — pour collaborer et nouer des partenariats.`,
    jMission: `Mission et vision`, jHistory: `Histoire`, jFounders: `Cofondateurs`, jGovernance: `Gouvernance`, jAgri: `Qu'est-ce que l'agrivoltaïsme ?`,
    missionTitle: `Mission`,
    missionText: `Promouvoir l'innovation et la technologie dans l'agriculture mexicaine pour produire davantage, de manière efficace et durable, en intégrant l'agrivoltaïsme, l'agriculture de précision et les outils numériques.`,
    visionTitle: `Vision`,
    visionText: `Un Mexique leader de l'adoption à grande échelle de l'agrivoltaïsme, créateur d'emplois ruraux et plus autonome sur le plan énergétique et alimentaire.`,
    historyTitle: `Notre histoire`,
    history: [
      { y: `2024`, t: `Fondation`, d: `Luis Alfonso Escobedo et Roberto Moreno Castillo cofondent AMAYAD pour rapprocher l'industrie solaire et l'agriculture.` },
      { y: `2024`, t: `Première présentation publique`, d: `AMAYAD présente publiquement ses objectifs, comités, avantages et structure d'adhésion.` },
      { y: `2026`, t: `Programmes en formation`, d: `Ambassadeurs, Réseau des jeunes agriculteurs et comités de travail, dont Femmes et agrivoltaïsme.` },
      { y: `24 nov. 2026`, t: `Livre et initiative`, d: `Présentation de « Cosechando el Sol Dos Veces » et de l'initiative de politique publique sur l'agrivoltaïsme.`, planned: true },
      { y: `Bientôt`, t: `Premier Congrès de l'agrivoltaïsme au Mexique`, d: `Date et lieu à définir.`, planned: true }
    ],
    foundersTitle: `Cofondateurs`,
    foundersLead: `AMAYAD a été cofondée en 2024 par :`,
    founders: [
      { name: `Luis Alfonso Escobedo`, role: `Cofondateur`, d: `Auteur du livre « Cosechando el Sol Dos Veces » sur l'agrivoltaïsme et l'agriculture numérique.` },
      { name: `Roberto Moreno Castillo`, role: `Cofondateur`, d: `Biographie à venir.` }
    ],
    governanceTitle: `Gouvernance`,
    governanceLead: `La structure de gouvernance d'AMAYAD est en cours de constitution. Les noms ne seront publiés qu'une fois confirmés.`,
    inFormation: `En formation`,
    governance: [
      { t: `Assemblée générale`, d: `Organe suprême. Les membres y participeront avec droit de vote, selon les statuts.` },
      { t: `Conseil d'administration`, d: `Direction stratégique de l'association. En cours de constitution.` },
      { t: `Comités de travail`, d: `Sept comités thématiques ouverts aux membres.` },
      { t: `Statuts et code d'éthique`, d: `Seront publiés sur ce site.` }
    ],
    seeCommittees: `Voir les comités`
  },
  mem2: {
    jTiers: `Niveaux`, jCompare: `Comparatif`, jWhy: `Pourquoi adhérer ?`, jSponsor: `Parrainage`, jFaq: `Questions`,
    brochure: `Télécharger la brochure (PDF)`,
    idealFor: `Idéal pour :`,
    ideal: { company_small: `startups, petites entreprises agricoles, installateurs et agtech.`, company_medium: `entreprises en croissance : EPC, distributeurs, agro-industrie moyenne.`, company_large: `fabricants, développeurs, entreprises agroalimentaires et grands groupes.`, individual: `consultants, chercheurs, producteurs et professionnels.`, student: `étudiants en agronomie, ingénierie, énergie et domaines voisins.` },
    short: { company_small: `< 1 M USD`, company_medium: `1–5 M USD`, company_large: `> 5 M USD`, individual: `Individuel`, student: `Étudiant` },
    colBenefit: `Avantage`, rowFee: `Cotisation annuelle`, rowFounding: `Reconnaissance comme membre fondateur (en adhérant maintenant)`, join: `Choisir`,
    tableTitle: `Comparatif des avantages`,
    tableLead: `Tous les niveaux partagent le même cadre d'avantages ; seule la cotisation change selon le type et la taille de votre organisation.`,
    tableNote: `Le cadre d'avantages est commun à tous les niveaux et déployé progressivement. Toute différenciation par niveau sera fixée par le conseil d'administration et publiée ici.`,
    whyTitle: `Pourquoi adhérer ?`, whyLead: `Deux mondes, des raisons différentes, un même terrain.`,
    whySolarTitle: `Si vous venez du solaire`,
    whySolar: [`Accès au foncier sans concurrencer la production alimentaire`, `Partenaires agricoles locaux et meilleure acceptation sociale de vos projets`, `Une voix dans la définition et le cadre juridique de l'agrivoltaïsme`, `Contact avec des entreprises agroalimentaires, coopératives et producteurs`, `Visibilité de pionnier auprès des investisseurs et des clients`],
    whyAgriTitle: `Si vous venez de l'agriculture ou de l'agri numérique`,
    whyAgri: [`Un revenu supplémentaire tout en continuant à produire`, `De l'énergie pour le pompage, l'irrigation, le froid et la transformation`, `Économies d'eau et cultures plus résistantes à la chaleur`, `Accès à la technologie : drones, capteurs, données et IA`, `Formations et journées terrain (prévues) et une voix dans les politiques publiques`],
    sponsorEyebrow: `Parrainage`,
    sponsorTitle: `Parrainez l'essor de l'agrivoltaïsme au Mexique`,
    sponsorLead: `Pour les entreprises agricoles, startups et sponsors corporate qui veulent gagner en visibilité auprès des deux mondes et soutenir les programmes d'AMAYAD.`,
    sponsorNote: `Offres sur mesure, sans prix publiés : présentez-nous vos objectifs et nous vous enverrons une proposition.`,
    sponsorTypes: [
      { i: `🚜`, t: `Entreprises agricoles`, d: `Intrants, machinisme, irrigation, agroalimentaire et agro-industrie.` },
      { i: `🚀`, t: `Startups`, d: `Agtech, climat, données et énergie en phase de démarrage.` },
      { i: `🏢`, t: `Sponsors corporate`, d: `Fabricants, développeurs, financeurs et grandes entreprises.` }
    ],
    testiTitle: `Témoignages`, testiLead: `Les voix de nos premiers membres apparaîtront ici.`,
    testiSoon: `Espace réservé au témoignage d'un membre fondateur.`,
    faqTitle: `Questions fréquentes`,
    faq: [
      { q: `L'envoi du formulaire fait-il de moi un membre ?`, a: `C'est une demande. AMAYAD confirmera votre admission, la cotisation en vigueur et le mode de paiement.` },
      { q: `En quelle devise sont les cotisations ?`, a: `En dollars américains (USD) par an, selon la structure publiée par AMAYAD.` },
      { q: `Quel niveau me correspond ?`, a: `Les entreprises choisissent selon leur chiffre d'affaires annuel ; les particuliers, le niveau Individuel ; les étudiants, le niveau Étudiant. En cas de doute, écrivez-nous.` },
      { q: `Les avantages sont-ils déjà disponibles ?`, a: `Ils sont déployés progressivement à mesure que l'association grandit. Les membres fondateurs aident à fixer les priorités.` },
      { q: `Mon organisation peut-elle être sponsor sans être membre ?`, a: `Oui. Utilisez le formulaire de parrainage et nous préparerons une proposition sur mesure.` }
    ],
    askQuestion: `J'ai une question`
  },
  prog: {
    eyebrow: `Programmes`, title: `Programmes et services`,
    lead: `Des façons concrètes de participer. Tous sont en cours de constitution : rejoignez-les dès le début et aidez-nous à les façonner.`,
    tabs: { amb: `Ambassadeurs`, yfn: `Jeunes agriculteurs`, com: `Comités`, courses: `Formations`, handbook: `Manuel`, services: `Services` },
    status: { forming: `En formation`, planned: `Prévu`, soon: `Bientôt` },
    amb: {
      title: `Programme Ambassadeurs`,
      lead: `Des personnes qui représentent AMAYAD dans leur région ou leur secteur et font connaître l'agrivoltaïsme et l'agriculture numérique.`,
      objTitle: `Objectifs`,
      objectives: [
        { i: `📣`, t: `Sensibilisation`, d: `Faire connaître l'agrivoltaïsme et ses bénéfices pour l'agriculture et l'énergie.` },
        { i: `🤝`, t: `Engagement`, d: `Attirer producteurs, entreprises et étudiants dans la communauté AMAYAD.` },
        { i: `✅`, t: `Crédibilité`, d: `Diffuser une information rigoureuse et de bonnes pratiques, sans promesses excessives.` }
      ],
      rolesTitle: `Rôles`,
      roles: [
        { i: `⚖️`, t: `Plaidoyer`, d: `Porter la vision d'AMAYAD auprès des autorités et organisations locales.` },
        { i: `🎓`, t: `Éducation`, d: `Conférences, ateliers et supports pour producteurs, écoles et entreprises.` },
        { i: `🔗`, t: `Réseautage`, d: `Mettre en relation les acteurs du solaire et de l'agriculture.` },
        { i: `✍️`, t: `Création de contenu`, d: `Histoires, photos et vidéos du secteur dans votre région.` }
      ],
      whoTitle: `Qui peut candidater ?`,
      who: [`Producteurs et techniciens agricoles`, `Professionnels de l'énergie solaire`, `Étudiants et chercheurs`, `Entrepreneurs de l'agtech`, `Responsables communautaires et associatifs`],
      getTitle: `Ce qu'AMAYAD prévoit d'offrir`,
      get: [`Supports et formation pour les ambassadeurs`, `Reconnaissance publique en tant qu'ambassadeur`, `Accès au réseau des membres et partenaires`, `Accès prioritaire aux événements`]
    },
    yfn: {
      title: `Réseau et échanges des jeunes agriculteurs`,
      lead: `Un réseau pour les jeunes qui veulent innover en agriculture grâce à l'énergie solaire et au numérique.`,
      ages: `De 18 à 35 ans.`, agesText: `Jeunes producteurs, étudiants et professionnels de toutes les régions.`,
      rolesTitle: `Rôles dans le réseau`,
      roles: [
        { i: `📣`, t: `Ambassadeurs`, d: `Font connaître l'agrivoltaïsme dans leurs communautés, écoles et réseaux.` },
        { i: `🧭`, t: `Mentors`, d: `Des jeunes expérimentés qui accompagnent ceux qui débutent.` },
        { i: `💡`, t: `Innovateurs`, d: `Développent des idées, des pilotes et des solutions numériques pour l'agriculture.` }
      ],
      actTitle: `Activités prévues`,
      activities: [
        { i: `🎓`, t: `Formation`, d: `Ateliers sur l'agrivoltaïsme, les drones, les capteurs et les modèles économiques.` },
        { i: `🚌`, t: `Visites de terrain`, d: `Visites de sites de démonstration et de projets.` },
        { i: `🤝`, t: `Mentorat`, d: `Accompagnement par des professionnels du solaire et de l'agriculture.` },
        { i: `🌎`, t: `Échanges`, d: `Échanges entre régions et, à terme, avec d'autres pays.` }
      ],
      note: `Programme en formation ; les activités dépendent de partenariats et de financements qui seront annoncés une fois confirmés.`
    },
    women: { t: `Femmes et agrivoltaïsme`, d: `Formation, opportunités, leadership et innovation pour les femmes dans l'agriculture, l'énergie et l'agriculture numérique.` },
    newCommittee: `Nouveau comité`, joinThis: `Rejoindre ce comité`,
    courses: {
      title: `Cours et formations`,
      lead: `Des formations pratiques pour producteurs, techniciens, étudiants et entreprises solaires.`,
      formats: [
        { i: `🌱`, t: `Ateliers sur des sites de démonstration`, d: `Apprendre sur le terrain, à côté de vrais systèmes agrivoltaïques.` },
        { i: `👩‍🌾`, t: `Journées terrain`, d: `Journées ouvertes aux producteurs et aux communautés.` },
        { i: `💻`, t: `Webinaires`, d: `Sessions en ligne sur la technologie, le marché et la réglementation.` },
        { i: `📜`, t: `Certification`, d: `Programme de certification en agrivoltaïsme (prévu).` }
      ],
      topicsTitle: `Thèmes prévus`,
      topics: [`Conception de systèmes agrivoltaïques`, `Compatibilité des cultures`, `Agriculture numérique, drones et capteurs`, `Exploitation et maintenance`, `Modèles économiques et financement`, `Cadre juridique et incitations fiscales`],
      note: `Aucun cours n'est encore ouvert. Les lieux et partenaires académiques seront annoncés une fois confirmés.`
    },
    handbook: {
      title: `Manuel AMAYAD de l'agrivoltaïsme`,
      lead: `Un guide pratique, pensé pour le Mexique, réunissant l'essentiel avant de concevoir, financer ou exploiter un projet agrivoltaïque.`,
      contribute: `Je veux contribuer`,
      tocTitle: `Contenu prévu`,
      toc: [`Qu'est-ce que l'agrivoltaïsme ?`, `Choix du site et ressource solaire`, `Configurations et structures`, `Cultures et élevage`, `Eau et sol`, `Agriculture numérique et suivi`, `Autorisations et cadre juridique au Mexique`, `Modèles économiques, incitations fiscales et financement`, `Communautés, ejidos et foncier`, `Études de cas`]
    },
    services: {
      title: `Services`,
      lead: `Un appui spécialisé pour ceux qui veulent passer à l'étape suivante.`,
      soonTag: `Bientôt · via des cabinets partenaires`,
      legalTitle: `Conseil juridique pour les propriétaires`,
      legalText: `Orientation pour les propriétaires, ejidos et communautés qui reçoivent des propositions de projets solaires ou agrivoltaïques.`,
      legalList: [`Contrats de bail et de servitude`, `Usage des sols et autorisations`, `Partage équitable des bénéfices`],
      softTitle: `Soft-landing pour les entreprises qui arrivent au Mexique`,
      softText: `Pour les entreprises étrangères souhaitant entrer sur le marché agrivoltaïque mexicain.`,
      softList: [`Panorama réglementaire et du marché`, `Contact avec des producteurs et partenaires locaux`, `Mise en relation avec l'écosystème AMAYAD`],
      note: `AMAYAD ne fournit pas ces services directement : elle orientera vers des cabinets partenaires une fois les accords formalisés.`
    }
  },
  ev: {
    eyebrow: `Événements`, title: `Événements`,
    lead: `Présentations, congrès, webinaires et journées terrain où les deux mondes se rencontrent.`,
    upcoming: `Événements à venir`, planned: `Prévus`, past: `Événements passés`,
    none: `De nouveaux événements seront annoncés bientôt.`, pastNone: `Les archives des événements passés apparaîtront ici.`,
    proposeTitle: `Envie d'organiser ou d'accueillir un événement ?`, proposeText: `Proposez un webinaire, une journée terrain ou une visite de votre projet.`, proposeCta: `Proposer un événement`,
    types: { presentation: `Présentation`, congress: `Congrès`, webinar: `Webinaire`, workshop: `Atelier`, fieldday: `Journée terrain`, networking: `Réseautage` },
    status: { confirmed: `Date confirmée`, planned: `Prévu`, past: `Passé` },
    tabs: { overview: `Résumé`, agenda: `Programme`, speakers: `Intervenants`, sponsors: `Sponsors` },
    dateShort: `Date`, dateTBD: `Date à définir`, venueTBD: `Lieu à confirmer`, timeTBD: `Horaire à confirmer`,
    agendaTBA: `Le programme sera publié prochainement.`, agendaNote: `Programme provisoire ; horaires à confirmer.`,
    speakersTBA: `Intervenants à annoncer.`, moreSpeakers: `Autres intervenants`, tba: `À annoncer`,
    sponsorsNone: `Des opportunités de parrainage sont disponibles pour cet événement.`, sponsorCta: `Parrainer cet événement`,
    when: `Quand`, where: `Où`, details: `Voir les détails`
  },
  part2: {
    ecoEyebrow: `Écosystème`, ecoTitle: `Qui participe à l'agrivoltaïsme ?`,
    ecoLead: `L'agrivoltaïsme a besoin de nombreux acteurs. AMAYAD est leur point de rencontre.`,
    hub: `Point de rencontre`,
    eco: [
      { id: `private`, i: `🏭`, t: `Secteur privé`, d: `Ceux qui produisent, construisent et achètent.`, items: [`Agriculteurs et producteurs`, `Entreprises agroalimentaires`, `Coopératives`, `Fabricants de panneaux solaires`, `Trackers solaires`, `Onduleurs`, `Structures`, `Solaire communautaire`] },
      { id: `public`, i: `🏛️`, t: `Secteur public`, d: `Ceux qui réglementent, encouragent et forment les talents.`, items: [`Ministère de l'énergie`, `Ministère de l'agriculture`, `Ministère de l'éducation`, `Universités et centres de recherche`] },
      { id: `dev`, i: `🌐`, t: `Fonds de développement`, d: `Ceux qui financent et apportent une coopération technique.`, items: [`GIZ`, `BID`, `Banque mondiale`, `Autres institutions de développement`] }
    ],
    ecoNote: `Carte des catégories d'acteurs de l'écosystème. Les organisations citées ne sont pas partenaires d'AMAYAD et ne la soutiennent pas ; nos partenaires sont uniquement ceux indiqués plus haut comme « Partenaire ».`,
    waysTitle: `Façons de collaborer`,
    ways: [
      { i: `🏛️`, t: `Alliance institutionnelle`, d: `Accords avec des associations, chambres et organismes.` },
      { i: `🎓`, t: `Collaboration académique`, d: `Recherche, mémoires, stages et sites de démonstration.` },
      { i: `📅`, t: `Partenaire d'événements`, d: `Coorganiser présentations, webinaires et le congrès.` },
      { i: `📰`, t: `Médias et diffusion`, d: `Contenus, interviews et audience pour le secteur.` }
    ]
  },
  leg: {
    eyebrow: `Affaires législatives`, title: `Un cadre pour l'agrivoltaïsme au Mexique`,
    lead: `L'agrivoltaïsme se développe dans le monde avec des règles claires. Le Mexique n'en a pas encore. AMAYAD veut contribuer à les construire.`,
    jWhy: `Pourquoi ?`, jMexico: `Le Mexique aujourd'hui`, jIntl: `Expérience internationale`, jInitiative: `Initiative AMAYAD`, jTax: `Incitations fiscales`,
    whyTitle: `Pourquoi le Mexique a-t-il besoin d'une définition et d'un cadre ?`,
    whyLead: `Sans définition, toute centrale solaire sur terre agricole pourrait se dire « agrivoltaïque », et les projets bien conçus ne peuvent pas se distinguer.`,
    why: [
      { i: `📘`, t: `Sécurité juridique`, d: `Définir ce qu'est — et ce que n'est pas — un système agrivoltaïque.` },
      { i: `🌾`, t: `Protéger la production alimentaire`, d: `Des critères minimaux d'usage agricole pour que la terre continue de produire.` },
      { i: `💳`, t: `Ouvrir l'accès aux incitations et au financement`, d: `Programmes, crédit et règles d'usage des sols spécifiques.` },
      { i: `🏡`, t: `Clarté pour les propriétaires et les ejidos`, d: `Des contrats et des bénéfices plus justes et transparents.` },
      { i: `📊`, t: `Données et vérification`, d: `Un suivi qui démontre les résultats agricoles et énergétiques.` },
      { i: `🔗`, t: `Coordination entre autorités`, d: `Énergie et agriculture travaillant avec les mêmes critères.` }
    ],
    mxTitle: `Le Mexique aujourd'hui`,
    mx1n: `Pas de définition légale`, mx1l: `Le Mexique ne dispose pas encore d'une définition légale ni d'un cadre spécifique pour l'agrivoltaïsme.`,
    mx2n: `< 0,7 MW`, mx2l: `La loi sur le secteur électrique (LSE, 2025) exempte de permis de production les centrales de moins de 0,7 MW (art. 19), ce qui concerne les projets à l'échelle de la ferme.`,
    mxNote: `D'autres obligations (raccordement, usage des sols, environnement) peuvent s'appliquer. Information indicative, pas un conseil juridique.`,
    intlTitle: `Ce que font d'autres pays`, intlLead: `Exemples de réglementation de l'agrivoltaïsme.`,
    intl: [
      { flag: `🇩🇪`, c: `Allemagne`, inst: `Norme DIN SPEC 91434`, facts: [`Le rendement agricole doit atteindre au moins 66 % du rendement de référence.`, `Perte maximale de surface agricole : 10 % (catégorie I) et 15 % (catégorie II).`] },
      { flag: `🇫🇷`, c: `France`, inst: `Loi APER (2023) et décret 2024-318`, facts: [`Perte de rendement de 10 % au maximum par rapport à une parcelle témoin.`, `Taux de couverture maximal de 40 % pour les installations de plus de 10 MWc.`] },
      { flag: `🇯🇵`, c: `Japon`, inst: `Ministère de l'Agriculture (MAFF)`, facts: [`Autorisations de conversion de terres agricoles conditionnées au maintien d'au moins 80 % du rendement moyen local.`, `Autorisations d'une durée de 3 ou 10 ans.`] },
      { flag: `🇮🇹`, c: `Italie`, inst: `Lignes directrices MASE (2022) et PNRR`, facts: [`Lignes directrices nationales (2022) pour les installations agrivoltaïques.`, `Une mesure du PNRR de 1,099 milliard d'euros consacrée à l'agrivoltaïsme.`] },
      { flag: `🇺🇸`, c: `Massachusetts (États-Unis)`, inst: `Programme SMART`, facts: [`Une incitation supplémentaire (« adder ») pour les projets solaires à double usage agricole.`, `Actuellement 0,09 USD/kWh dans le cadre de SMART 3.0.`] }
    ],
    intlNote: `Résumé indicatif ; consultez les textes officiels. Les règles évoluent souvent.`,
    initStatus: `En cours d'élaboration`,
    initTitle: `Initiative de politique publique d'AMAYAD`,
    initText: `AMAYAD élabore une proposition pour doter le Mexique d'une définition et d'un cadre pour l'agrivoltaïsme. Elle sera présentée publiquement le 24 novembre 2026.`,
    initTopicsTitle: `Thèmes à l'étude`,
    initTopics: [`Définition légale de l'agrivoltaïsme`, `Critères minimaux de production agricole et de suivi`, `Catégories par type de système et par échelle`, `Coordination entre autorités de l'énergie et de l'agriculture`, `Incitations et financement`, `Protection des propriétaires, ejidos et communautés`],
    initNote: `Thèmes à l'étude ; le contenu final peut changer. Cela n'implique le soutien d'aucune autorité.`,
    supportTitle: `Soutenez l'initiative`,
    supportText: `Inscrivez-vous pour recevoir les avancées, donner votre avis et participer aux groupes de travail.`,
    seeEvent: `Voir l'événement du 24 novembre →`,
    taxTitle: `Incitations fiscales`,
    taxLead: `Des outils qui existent déjà au Mexique et peuvent améliorer la viabilité d'un projet.`,
    taxCardTitle: `Déduction immédiate jusqu'à 100 % · LISR art. 34, fraction XIII`,
    taxCardText: `La loi mexicaine de l'impôt sur le revenu permet de déduire jusqu'à 100 % de l'investissement en machines et équipements de production d'énergie renouvelable, comme le solaire, sous conditions.`,
    taxConditions: [`L'équipement doit rester en service au moins 5 ans après l'exercice de la déduction ; à défaut, celle-ci est recalculée avec actualisation et majorations.`, `Les autres dispositions fiscales en vigueur s'appliquent.`],
    taxAdvisor: `Information générale, pas un conseil fiscal. Consultez votre conseiller fiscal.`,
    updatesTitle: `Actualités législatives`,
    updatesText: `Bientôt : suivi des initiatives, normes et consultations publiques pertinentes pour le secteur, dans la lettre et dans cette section.`
  },
  lib: {
    lead: `Guides, recherche, réglementation, incitations et publications d'AMAYAD. Nous n'incluons que des ressources vérifiables ; les éléments prévus sont marqués « Prochainement ».`,
    cats: { all: `Toutes`, guides: `Guides`, research: `Recherche`, regulation: `Réglementation`, tax: `Incitations fiscales`, cases: `Études de cas`, amayad: `Publications AMAYAD`, handbook: `Manuel`, carbon: `Crédits carbone`, blockchain: `Blockchain et traçabilité`, map: `Carte mondiale`, magazine: `Magazine / lettre`, reports: `Rapports annuels` }
  },
  members2: { portalTitle: `Espace membres`, portalText: `Annuaire privé, documents et avantages réservés aux membres. Bientôt disponible.` },
  contact: {
    subjects: { general: `Demande générale`, membership: `Adhésion`, sponsor: `Parrainage`, partner: `Devenir partenaire`, wg: `Rejoindre un comité`, project: `Proposer un projet`, events: `Événements`, policy: `Initiative de politique publique`, services: `Services (conseil / soft-landing)`, resource: `Suggérer une ressource`, press: `Presse et médias` }
  },
  footer2: { follow: `Suivez-nous`, explore: `Explorer`, contactTitle: `Contact`, prototype: `v2 · prototype` },
  f: {
    emailPh: `vous@email.com`,
    errAge: `Le Réseau des jeunes agriculteurs s'adresse aux personnes de 18 à 35 ans.`,
    errGroup: `Veuillez choisir au moins une option.`,
    titles: { sponsor: `Demande de parrainage`, ambassador: `Programme Ambassadeurs`, youngfarmers: `Réseau des jeunes agriculteurs`, partner: `Devenir partenaire d'AMAYAD`, policy: `Soutenir l'initiative`, committee: `Rejoindre un comité`, access: `Espace membres — bientôt`, notify: `Me prévenir quand ce sera disponible`, event: `Manifester mon intérêt pour l'événement` },
    intros: {
      sponsor: `Présentez-nous votre organisation et vos objectifs. Nous vous enverrons une proposition sur mesure (pas de prix publiés).`,
      ambassador: `Candidatez comme ambassadeur ou proposez une personne qui représenterait bien AMAYAD dans sa région ou son secteur.`,
      youngfarmers: `Pour les jeunes de 18 à 35 ans. Dites-nous qui vous êtes et comment vous aimeriez participer.`,
      partner: `Pour les institutions, associations, universités et entreprises souhaitant collaborer avec AMAYAD.`,
      policy: `Recevez les avancées de l'initiative, donnez votre avis et participez aux groupes de travail.`,
      committee: `Choisissez le comité auquel vous aimeriez participer.`,
      access: `<b>L'espace membres sera bientôt disponible.</b> Demandez l'accès et nous vous préviendrons dès qu'il sera prêt.`,
      notify: `Nous vous préviendrons par e-mail dès que ce sera disponible.`,
      event: `Inscrivez-vous et nous vous enverrons le lieu, l'horaire et les détails dès qu'ils seront confirmés.`
    },
    submits: { sponsor: `Envoyer la demande`, ambassador: `Envoyer`, youngfarmers: `Envoyer ma candidature`, partner: `Envoyer la proposition`, policy: `Je soutiens`, committee: `Envoyer`, access: `Demander l'accès`, notify: `Me prévenir`, event: `Manifester mon intérêt` },
    labels: { sponsorType: `Type de sponsor`, organization: `Organisation`, name: `Nom complet`, role: `Fonction / rôle`, email: `E-mail`, phone: `Téléphone`, country: `Pays`, message: `Message`, mode: `Que souhaitez-vous faire ?`, location: `État / ville`, sector: `Secteur`, roles: `Rôles qui vous intéressent`, nomineeName: `Nom de la personne proposée`, nomineeEmail: `E-mail de la personne proposée`, age: `Âge`, background: `Profil`, yfnRole: `Rôle qui vous intéresse`, yfnInterests: `Je suis intéressé(e) par`, orgType: `Type d'organisation`, profile: `Vous participez en tant que`, committee: `Comité`, memberStatus: `Situation`, topic: `Sujet`, eventId: `Événement`, attendance: `Je souhaite participer en tant que` },
    opts: {
      sponsorType: { agbusiness: `Entreprise agricole`, startup: `Startup`, corporate: `Sponsor corporate`, other: `Autre` },
      ambMode: { apply: `Candidater moi-même`, nominate: `Proposer quelqu'un` },
      ambRoles: { advocacy: `Plaidoyer`, education: `Éducation`, networking: `Réseautage`, content: `Création de contenu` },
      yfnBackground: { farmer: `Producteur/trice`, student: `Étudiant(e)`, solar: `Professionnel(le) du solaire`, digital: `Agtech / numérique`, other: `Autre` },
      yfnRole: { ambassador: `Ambassadeur/rice`, mentor: `Mentor`, innovator: `Innovateur/trice` },
      yfnInterests: { training: `Formation`, fieldtrips: `Visites de terrain`, mentorship: `Mentorat`, exchange: `Échanges` },
      orgType: { private: `Entreprise privée`, association: `Association ou chambre`, academia: `Université / recherche`, public: `Pouvoirs publics`, devfund: `Institution de développement`, ngo: `ONG`, media: `Média`, other: `Autre` },
      profile: { farmer: `Producteur/trice`, solar: `Secteur solaire`, digital: `Agriculture numérique`, academia: `Monde académique`, government: `Agent public`, ngo: `Société civile`, citizen: `Citoyen(ne)`, other: `Autre` },
      memberStatus: { member: `Je suis déjà membre`, applicant: `J'ai envoyé ma demande`, notyet: `Je ne suis pas encore membre` },
      topic: { courses: `Cours et formations`, handbook: `Manuel de l'agrivoltaïsme`, library: `Ressources de la bibliothèque`, services: `Services`, other: `Autre` },
      attendance: { attend: `Participant(e)`, speak: `Intervenant(e)`, sponsor: `Sponsor`, volunteer: `Bénévole`, press: `Presse` }
    }
  },
  privacy: { extra: `<h3>Lettre d'information</h3><p>Si vous vous abonnez à la lettre hebdomadaire, nous utiliserons votre e-mail uniquement pour vous l'envoyer. Vous pouvez vous désabonner à tout moment.</p>` }
};

/* =============================== DEUTSCH =============================== */
V.de = {
  ui: { search: `Suchen`, searchPh: `Website durchsuchen…`, searchHint: `Tippen Sie, um alle Bereiche zu durchsuchen (Mitgliedschaft, Programme, Veranstaltungen, Gesetze…).`, searchNone: `Keine Treffer. Versuchen Sie ein anderes Wort.`, searchCount: `{n} Treffer`,
        login: `Mitglieder-Login`, onThisPage: `Auf dieser Seite`, comingSoon: `demnächst`, socialSoon: `Dieses soziale Netzwerk ist bald verfügbar.` },
  nav: { home: `Start`, about: `Über uns`, membership: `Mitgliedschaft`, programs: `Programme`, events: `Veranstaltungen`, partnerships: `Partnerschaften`, legislative: `Politik & Recht`, library: `Bibliothek`, members: `Mitglieder`, contact: `Kontakt` },
  cta: { sponsor: `Sponsor werden`, apply: `Bewerben`, nominate: `Jemanden nominieren`, notify: `Benachrichtigen`, support: `Initiative unterstützen`, subscribe: `Abonnieren`, discord: `Discord-Community`, register: `Anmelden`, registerInterest: `Interesse anmelden`, addCal: `Zum Kalender hinzufügen`, partner: `Partner werden`, wg: `Einem Komitee beitreten` },
  home2: {
    cta2: `Programme ansehen`,
    benefitsTitle: `Was Agri-PV leisten kann`,
    benefits: [
      { i: `🌾`, t: `Ernährungssicherheit`, d: `Energie, ohne Flächen der Lebensmittelproduktion zu entziehen.` },
      { i: `🌍`, t: `Weniger CO₂-Emissionen`, d: `Solarstrom ersetzt fossile Energie auf dem Hof und im Netz.` },
      { i: `💧`, t: `Wassereinsparung`, d: `Teilverschattung verringert Verdunstung und Bewässerungsbedarf.` },
      { i: `💰`, t: `Zusatzeinkommen für Landwirte`, d: `Eine zweite Ernte: Energie, Pacht oder Eigenverbrauch.` },
      { i: `⚡`, t: `Saubere Energie für den Hof`, d: `Pumpen, Bewässerung, Kühlung und Verarbeitung mit eigenem Strom.` },
      { i: `🌡️`, t: `Widerstandsfähigere Kulturen`, d: `Ein milderes Mikroklima bei extremer Hitze.` }
    ],
    benefitsNote: `Qualitative Vorteile. Die Ergebnisse hängen von Standort, Kultur und Systemauslegung ab.`,
    quickTitle: `Schnellzugriff`,
    quick: [
      { id: `membership`, i: `🤝`, t: `Mitgliedschaft`, d: `5 Stufen und Sponsoring` },
      { id: `programs`, i: `🎓`, t: `Programme`, d: `Botschafter, Junglandwirte, Komitees` },
      { id: `events`, i: `📅`, t: `Veranstaltungen`, d: `24. Nov. 2026: Buch und Initiative` },
      { id: `legislative`, i: `⚖️`, t: `Politik & Recht`, d: `Rechtsrahmen und Anreize` },
      { id: `library`, i: `📚`, t: `Bibliothek`, d: `Leitfäden, Studien und Gesetze` },
      { id: `partnerships`, i: `🌐`, t: `Partnerschaften & Ökosystem`, d: `Wer mitwirkt` }
    ],
    nextEventTitle: `Nächste Veranstaltung`,
    newsTitle: `Aktuelles`,
    newsSoon: `Neuigkeiten folgen`,
    newsSoonText: `Hier berichten wir über AMAYAD, seine Programme und die Branche.`,
    newsletterTag: `Wöchentlicher Newsletter`,
    newsletterTitle: `Wöchentlicher Vorteils-Newsletter`,
    newsletterText: `Jede Woche: Branchennews, Chancen für Mitglieder, Veranstaltungen und politische Entwicklungen. Kostenlos; jederzeit abbestellbar.`,
    nlOk: `Erledigt! Sie haben den Newsletter abonniert.`,
    nlMailto: `Ihr Abonnement ist bereit. Klicken Sie auf die Schaltfläche, um es per E-Mail zu senden.`,
    discordTag: `Community`,
    discordTitle: `Machen Sie mit`,
    discordText: `Ein Ort, an dem Menschen aus Solarbranche und Landwirtschaft Fragen, Projekte und Chancen teilen.`,
    discordSoon: `Die Discord-Community startet bald. Abonnieren Sie den Newsletter, um die Einladung zu erhalten.`,
    waySponsor: `Für Agrarunternehmen, Start-ups und Firmen, die die Branche voranbringen wollen.`
  },
  about: {
    eyebrow: `Über uns`, title: `Wer wir sind`,
    lead: `AMAYAD entstand 2024 aus einer einfachen Idee: Die Welt der Solarenergie und die der Landwirtschaft — einschließlich der digitalen Landwirtschaft — sollen sich begegnen, zusammenarbeiten und Partnerschaften bilden.`,
    jMission: `Mission & Vision`, jHistory: `Geschichte`, jFounders: `Mitgründer`, jGovernance: `Governance`, jAgri: `Was ist Agri-PV?`,
    missionTitle: `Mission`,
    missionText: `Innovation und Technologie in der mexikanischen Landwirtschaft fördern, damit sie effizient und nachhaltig mehr produziert — durch die Verbindung von Agri-PV, Präzisionslandwirtschaft und digitalen Werkzeugen.`,
    visionTitle: `Vision`,
    visionText: `Ein Mexiko, das bei der großflächigen Einführung von Agri-PV führend ist, Arbeitsplätze auf dem Land schafft und seine Energie- und Ernährungssouveränität stärkt.`,
    historyTitle: `Unsere Geschichte`,
    history: [
      { y: `2024`, t: `Gründung`, d: `Luis Alfonso Escobedo und Roberto Moreno Castillo gründen AMAYAD, um Solarbranche und Landwirtschaft zusammenzubringen.` },
      { y: `2024`, t: `Erste öffentliche Vorstellung`, d: `AMAYAD stellt seine Ziele, Komitees, Vorteile und Mitgliedschaftsstruktur öffentlich vor.` },
      { y: `2026`, t: `Programme im Aufbau`, d: `Botschafter, Junglandwirte-Netzwerk und Arbeitskomitees, darunter Frauen in der Agri-PV.` },
      { y: `24. Nov. 2026`, t: `Buch und Initiative`, d: `Vorstellung von „Cosechando el Sol Dos Veces“ und der politischen Initiative zur Agri-PV.`, planned: true },
      { y: `Demnächst`, t: `Erster Agri-PV-Kongress in Mexiko`, d: `Datum und Ort werden noch festgelegt.`, planned: true }
    ],
    foundersTitle: `Mitgründer`,
    foundersLead: `AMAYAD wurde 2024 gegründet von:`,
    founders: [
      { name: `Luis Alfonso Escobedo`, role: `Mitgründer`, d: `Autor des Buches „Cosechando el Sol Dos Veces“ über Agri-PV und digitale Landwirtschaft.` },
      { name: `Roberto Moreno Castillo`, role: `Mitgründer`, d: `Kurzbiografie folgt.` }
    ],
    governanceTitle: `Governance`,
    governanceLead: `Die Gremienstruktur von AMAYAD wird derzeit aufgebaut. Namen werden erst nach Bestätigung veröffentlicht.`,
    inFormation: `Im Aufbau`,
    governance: [
      { t: `Mitgliederversammlung`, d: `Oberstes Organ. Mitglieder nehmen gemäß Satzung mit Stimmrecht teil.` },
      { t: `Vorstand`, d: `Strategische Leitung des Verbands. Wird derzeit gebildet.` },
      { t: `Arbeitskomitees`, d: `Sieben thematische Komitees, offen für Mitglieder.` },
      { t: `Satzung und Ethikkodex`, d: `Werden auf dieser Website veröffentlicht.` }
    ],
    seeCommittees: `Komitees ansehen`
  },
  mem2: {
    jTiers: `Stufen`, jCompare: `Vergleich`, jWhy: `Warum beitreten?`, jSponsor: `Sponsoring`, jFaq: `Fragen`,
    brochure: `Broschüre herunterladen (PDF)`,
    idealFor: `Ideal für:`,
    ideal: { company_small: `Start-ups, kleine Agrarbetriebe, Installateure und Agrartech-Firmen.`, company_medium: `wachsende Unternehmen: EPC, Händler, mittlere Agrarindustrie.`, company_large: `Hersteller, Projektentwickler, Lebensmittelunternehmen und Konzerne.`, individual: `Berater, Forschende, Landwirte und Fachleute.`, student: `Studierende der Agrarwissenschaft, Technik, Energie und verwandter Fächer.` },
    short: { company_small: `< 1 Mio. USD`, company_medium: `1–5 Mio. USD`, company_large: `> 5 Mio. USD`, individual: `Einzelperson`, student: `Studierende` },
    colBenefit: `Vorteil`, rowFee: `Jahresbeitrag`, rowFounding: `Anerkennung als Gründungsmitglied (bei Beitritt jetzt)`, join: `Wählen`,
    tableTitle: `Vorteile im Vergleich`,
    tableLead: `Alle Stufen teilen denselben Vorteilsrahmen; es ändert sich nur der Beitrag je nach Art und Größe Ihrer Organisation.`,
    tableNote: `Der Vorteilsrahmen gilt für alle Stufen und wird schrittweise umgesetzt. Eine Differenzierung nach Stufen legt der Vorstand fest und sie wird hier veröffentlicht.`,
    whyTitle: `Warum beitreten?`, whyLead: `Zwei Welten, unterschiedliche Gründe, ein gemeinsamer Boden.`,
    whySolarTitle: `Wenn Sie aus der Solarbranche kommen`,
    whySolar: [`Zugang zu Flächen ohne Konkurrenz zur Lebensmittelproduktion`, `Lokale landwirtschaftliche Partner und mehr Akzeptanz für Ihre Projekte`, `Mitsprache bei Definition und Rechtsrahmen der Agri-PV`, `Kontakt zu Lebensmittelunternehmen, Genossenschaften und Erzeugern`, `Sichtbarkeit als Vorreiter bei Investoren und Kunden`],
    whyAgriTitle: `Wenn Sie aus der Landwirtschaft oder dem Digital-Farming kommen`,
    whyAgri: [`Zusatzeinkommen bei weiterlaufender Produktion`, `Energie für Pumpen, Bewässerung, Kühlung und Verarbeitung`, `Wassereinsparung und hitzeresistentere Kulturen`, `Zugang zu Technologie: Drohnen, Sensoren, Daten und KI`, `Schulungen und Feldtage (geplant) und Mitsprache in der Politik`],
    sponsorEyebrow: `Sponsoring`,
    sponsorTitle: `Fördern Sie das Wachstum der Agri-PV in Mexiko`,
    sponsorLead: `Für Agrarunternehmen, Start-ups und Unternehmenssponsoren, die in beiden Welten sichtbar sein und die Programme von AMAYAD unterstützen wollen.`,
    sponsorNote: `Individuelle Pakete ohne veröffentlichte Preise: Nennen Sie uns Ihre Ziele, und wir senden Ihnen ein Angebot.`,
    sponsorTypes: [
      { i: `🚜`, t: `Agrarunternehmen`, d: `Betriebsmittel, Maschinen, Bewässerung, Lebensmittel- und Agrarindustrie.` },
      { i: `🚀`, t: `Start-ups`, d: `Agrartech, Klima, Daten und Energie in der Frühphase.` },
      { i: `🏢`, t: `Unternehmenssponsoren`, d: `Hersteller, Projektentwickler, Finanzierer und Großunternehmen.` }
    ],
    testiTitle: `Stimmen`, testiLead: `Hier erscheinen die Stimmen unserer ersten Mitglieder.`,
    testiSoon: `Platz für das Statement eines Gründungsmitglieds.`,
    faqTitle: `Häufige Fragen`,
    faq: [
      { q: `Bin ich mit dem Absenden des Formulars Mitglied?`, a: `Es ist ein Antrag. AMAYAD bestätigt Ihre Aufnahme, den aktuellen Beitrag und die Zahlungsweise.` },
      { q: `In welcher Währung sind die Beiträge?`, a: `In US-Dollar (USD) pro Jahr, gemäß der von AMAYAD veröffentlichten Struktur.` },
      { q: `Welche Stufe passt zu mir?`, a: `Unternehmen wählen nach Jahresumsatz; Einzelpersonen die Stufe Einzelperson; Studierende die Stufe Studierende. Im Zweifel schreiben Sie uns.` },
      { q: `Sind die Vorteile schon verfügbar?`, a: `Sie werden schrittweise eingeführt, während der Verband wächst. Gründungsmitglieder helfen, Prioritäten zu setzen.` },
      { q: `Kann meine Organisation sponsern, ohne Mitglied zu sein?`, a: `Ja. Nutzen Sie das Sponsoring-Formular, und wir erstellen ein individuelles Angebot.` }
    ],
    askQuestion: `Ich habe eine Frage`
  },
  prog: {
    eyebrow: `Programme`, title: `Programme und Services`,
    lead: `Konkrete Wege mitzuwirken. Alle befinden sich im Aufbau: Seien Sie von Anfang an dabei und gestalten Sie mit.`,
    tabs: { amb: `Botschafter`, yfn: `Junglandwirte`, com: `Komitees`, courses: `Kurse`, handbook: `Handbuch`, services: `Services` },
    status: { forming: `Im Aufbau`, planned: `Geplant`, soon: `Demnächst` },
    amb: {
      title: `Botschafterprogramm`,
      lead: `Menschen, die AMAYAD in ihrer Region oder Branche vertreten und Agri-PV sowie digitale Landwirtschaft bekannter machen.`,
      objTitle: `Ziele`,
      objectives: [
        { i: `📣`, t: `Bewusstsein`, d: `Erklären, was Agri-PV ist und was sie Landwirtschaft und Energie bringt.` },
        { i: `🤝`, t: `Beteiligung`, d: `Landwirte, Unternehmen und Studierende für die AMAYAD-Community gewinnen.` },
        { i: `✅`, t: `Glaubwürdigkeit`, d: `Fundierte Informationen und gute Praxis teilen, ohne zu übertreiben.` }
      ],
      rolesTitle: `Rollen`,
      roles: [
        { i: `⚖️`, t: `Interessenvertretung`, d: `Die Vision von AMAYAD gegenüber lokalen Behörden und Organisationen vertreten.` },
        { i: `🎓`, t: `Bildung`, d: `Vorträge, Workshops und Materialien für Landwirte, Schulen und Unternehmen.` },
        { i: `🔗`, t: `Networking`, d: `Menschen aus der Solarbranche mit Menschen aus der Landwirtschaft verbinden.` },
        { i: `✍️`, t: `Content-Erstellung`, d: `Geschichten, Fotos und Videos aus der Branche in Ihrer Region.` }
      ],
      whoTitle: `Wer kann sich bewerben?`,
      who: [`Landwirte und Agrartechniker`, `Fachleute der Solarenergie`, `Studierende und Forschende`, `Agrartech-Gründer`, `Führungskräfte aus Gemeinden und Organisationen`],
      getTitle: `Was AMAYAD anbieten möchte`,
      get: [`Materialien und Schulungen für Botschafter`, `Öffentliche Anerkennung als Botschafter`, `Zugang zum Netzwerk aus Mitgliedern und Partnern`, `Bevorzugter Zugang zu Veranstaltungen`]
    },
    yfn: {
      title: `Junglandwirte-Netzwerk & Austausch`,
      lead: `Ein Netzwerk für junge Menschen, die die Landwirtschaft mit Solarenergie und digitaler Technik erneuern wollen.`,
      ages: `18 bis 35 Jahre.`, agesText: `Junge Landwirte, Studierende und Fachleute aus allen Regionen.`,
      rolesTitle: `Rollen im Netzwerk`,
      roles: [
        { i: `📣`, t: `Botschafter`, d: `Bringen Agri-PV in ihre Gemeinden, Schulen und Netzwerke.` },
        { i: `🧭`, t: `Mentoren`, d: `Erfahrene junge Menschen, die Einsteiger begleiten.` },
        { i: `💡`, t: `Innovatoren`, d: `Entwickeln Ideen, Pilotprojekte und digitale Lösungen für die Landwirtschaft.` }
      ],
      actTitle: `Geplante Aktivitäten`,
      activities: [
        { i: `🎓`, t: `Schulungen`, d: `Workshops zu Agri-PV, Drohnen, Sensorik und Geschäftsmodellen.` },
        { i: `🚌`, t: `Exkursionen`, d: `Besuche von Demonstrationsanlagen und Projekten.` },
        { i: `🤝`, t: `Mentoring`, d: `Begleitung durch Fachleute aus Solarbranche und Landwirtschaft.` },
        { i: `🌎`, t: `Austausch`, d: `Austausch zwischen Regionen und künftig mit anderen Ländern.` }
      ],
      note: `Programm im Aufbau; die Aktivitäten hängen von Partnerschaften und Finanzierung ab, die nach Bestätigung bekanntgegeben werden.`
    },
    women: { t: `Frauen in der Agri-PV`, d: `Weiterbildung, Chancen, Führung und Innovation für Frauen in Landwirtschaft, Energie und digitaler Landwirtschaft.` },
    newCommittee: `Neues Komitee`, joinThis: `Diesem Komitee beitreten`,
    courses: {
      title: `Kurse und Weiterbildung`,
      lead: `Praxisnahe Weiterbildung für Landwirte, Techniker, Studierende und Solarunternehmen.`,
      formats: [
        { i: `🌱`, t: `Workshops an Demonstrationsstandorten`, d: `Lernen im Feld, direkt an echten Agri-PV-Anlagen.` },
        { i: `👩‍🌾`, t: `Feldtage`, d: `Offene Tage für Landwirte und Gemeinden.` },
        { i: `💻`, t: `Webinare`, d: `Online-Sitzungen zu Technik, Markt und Regulierung.` },
        { i: `📜`, t: `Zertifizierung`, d: `Agri-PV-Zertifizierungsprogramm (geplant).` }
      ],
      topicsTitle: `Geplante Themen`,
      topics: [`Auslegung von Agri-PV-Anlagen`, `Eignung von Kulturen`, `Digitale Landwirtschaft, Drohnen und Sensorik`, `Betrieb und Wartung`, `Geschäftsmodelle und Finanzierung`, `Rechtsrahmen und Steueranreize`],
      note: `Noch sind keine Kurse offen. Standorte und akademische Partner werden nach Bestätigung bekanntgegeben.`
    },
    handbook: {
      title: `AMAYAD-Handbuch Agri-PV`,
      lead: `Ein praktischer Leitfaden für Mexiko mit allem, was man vor Planung, Finanzierung oder Betrieb eines Agri-PV-Projekts wissen sollte.`,
      contribute: `Ich möchte beitragen`,
      tocTitle: `Geplante Inhalte`,
      toc: [`Was ist Agri-PV?`, `Standortwahl und Solarressource`, `Konfigurationen und Unterkonstruktionen`, `Kulturen und Tierhaltung`, `Wasser und Boden`, `Digitale Landwirtschaft und Monitoring`, `Genehmigungen und Rechtsrahmen in Mexiko`, `Geschäftsmodelle, Steueranreize und Finanzierung`, `Gemeinden, Ejidos und Landbesitz`, `Fallstudien`]
    },
    services: {
      title: `Services`,
      lead: `Spezialisierte Unterstützung für alle, die den nächsten Schritt gehen wollen.`,
      soonTag: `Demnächst · über Partnerkanzleien`,
      legalTitle: `Rechtsberatung für Grundeigentümer`,
      legalText: `Orientierung für Eigentümer, Ejidos und Gemeinden, die Angebote für Solar- oder Agri-PV-Projekte erhalten.`,
      legalList: [`Pacht- und Dienstbarkeitsverträge`, `Landnutzung und Genehmigungen`, `Faire Vorteilsverteilung`],
      softTitle: `Soft-Landing für Unternehmen mit Markteintritt in Mexiko`,
      softText: `Für ausländische Unternehmen, die in den mexikanischen Agri-PV-Markt eintreten wollen.`,
      softList: [`Überblick über Regulierung und Markt`, `Kontakt zu Landwirten und lokalen Partnern`, `Anbindung an das AMAYAD-Ökosystem`],
      note: `AMAYAD erbringt diese Leistungen nicht selbst: Sie werden nach Abschluss der Vereinbarungen an Partnerkanzleien vermittelt.`
    }
  },
  ev: {
    eyebrow: `Veranstaltungen`, title: `Veranstaltungen`,
    lead: `Vorstellungen, Kongresse, Webinare und Feldtage, bei denen sich beide Welten treffen.`,
    upcoming: `Kommende Veranstaltungen`, planned: `Geplant`, past: `Vergangene Veranstaltungen`,
    none: `Neue Veranstaltungen werden bald angekündigt.`, pastNone: `Hier erscheint das Archiv vergangener Veranstaltungen.`,
    proposeTitle: `Möchten Sie eine Veranstaltung organisieren oder ausrichten?`, proposeText: `Schlagen Sie ein Webinar, einen Feldtag oder einen Besuch Ihres Projekts vor.`, proposeCta: `Veranstaltung vorschlagen`,
    types: { presentation: `Vorstellung`, congress: `Kongress`, webinar: `Webinar`, workshop: `Workshop`, fieldday: `Feldtag`, networking: `Networking` },
    status: { confirmed: `Datum bestätigt`, planned: `Geplant`, past: `Stattgefunden` },
    tabs: { overview: `Überblick`, agenda: `Programm`, speakers: `Referenten`, sponsors: `Sponsoren` },
    dateShort: `Datum`, dateTBD: `Datum offen`, venueTBD: `Ort wird bestätigt`, timeTBD: `Uhrzeit wird bestätigt`,
    agendaTBA: `Das Programm wird bald veröffentlicht.`, agendaNote: `Vorläufiges Programm; Uhrzeiten werden bestätigt.`,
    speakersTBA: `Referenten werden bekanntgegeben.`, moreSpeakers: `Weitere Referenten`, tba: `Wird bekanntgegeben`,
    sponsorsNone: `Für diese Veranstaltung gibt es Sponsoring-Möglichkeiten.`, sponsorCta: `Diese Veranstaltung sponsern`,
    when: `Wann`, where: `Wo`, details: `Details ansehen`
  },
  part2: {
    ecoEyebrow: `Ökosystem`, ecoTitle: `Wer wirkt bei Agri-PV mit?`,
    ecoLead: `Agri-PV braucht viele Akteure. AMAYAD ist ihr Treffpunkt.`,
    hub: `Treffpunkt`,
    eco: [
      { id: `private`, i: `🏭`, t: `Privatwirtschaft`, d: `Wer produziert, baut und einkauft.`, items: [`Landwirte und Erzeuger`, `Lebensmittelunternehmen`, `Genossenschaften`, `Hersteller von Solarmodulen`, `Solar-Tracker`, `Wechselrichter`, `Unterkonstruktionen`, `Bürgersolar`] },
      { id: `public`, i: `🏛️`, t: `Öffentlicher Sektor`, d: `Wer reguliert, fördert und Fachkräfte ausbildet.`, items: [`Energieministerium`, `Landwirtschaftsministerium`, `Bildungsministerium`, `Universitäten und Forschungszentren`] },
      { id: `dev`, i: `🌐`, t: `Entwicklungsfinanzierung`, d: `Wer finanziert und technische Zusammenarbeit leistet.`, items: [`GIZ`, `IDB`, `Weltbank`, `Weitere Entwicklungsinstitutionen`] }
    ],
    ecoNote: `Übersicht über Kategorien von Akteuren im Ökosystem. Die genannten Organisationen sind keine Partner von AMAYAD und unterstützen sie nicht; unsere Partner sind nur die oben als „Partner“ aufgeführten.`,
    waysTitle: `Formen der Zusammenarbeit`,
    ways: [
      { i: `🏛️`, t: `Institutionelle Allianz`, d: `Vereinbarungen mit Verbänden, Kammern und Institutionen.` },
      { i: `🎓`, t: `Akademische Zusammenarbeit`, d: `Forschung, Abschlussarbeiten, Praktika und Demonstrationsstandorte.` },
      { i: `📅`, t: `Veranstaltungspartner`, d: `Vorstellungen, Webinare und den Kongress mitorganisieren.` },
      { i: `📰`, t: `Medien und Reichweite`, d: `Inhalte, Interviews und Reichweite für die Branche.` }
    ]
  },
  leg: {
    eyebrow: `Politik & Recht`, title: `Ein Rahmen für Agri-PV in Mexiko`,
    lead: `Agri-PV wächst weltweit mit klaren Regeln. Mexiko hat sie noch nicht. AMAYAD möchte dazu beitragen, sie zu schaffen.`,
    jWhy: `Warum?`, jMexico: `Mexiko heute`, jIntl: `Internationale Erfahrung`, jInitiative: `AMAYAD-Initiative`, jTax: `Steueranreize`,
    whyTitle: `Warum braucht Mexiko eine Definition und einen Rahmen?`,
    whyLead: `Ohne Definition könnte sich jede Solaranlage auf Agrarland „Agri-PV“ nennen – und gut geplante Projekte können sich nicht abheben.`,
    why: [
      { i: `📘`, t: `Rechtssicherheit`, d: `Festlegen, was eine Agri-PV-Anlage ist – und was nicht.` },
      { i: `🌾`, t: `Lebensmittelproduktion schützen`, d: `Mindestkriterien für die landwirtschaftliche Nutzung, damit das Land weiter produziert.` },
      { i: `💳`, t: `Anreize und Finanzierung ermöglichen`, d: `Eigene Programme, Kredite und Regeln zur Landnutzung.` },
      { i: `🏡`, t: `Klarheit für Eigentümer und Ejidos`, d: `Fairere, transparentere Verträge und Vorteile.` },
      { i: `📊`, t: `Daten und Nachweis`, d: `Monitoring, das landwirtschaftliche und energetische Ergebnisse belegt.` },
      { i: `🔗`, t: `Abstimmung zwischen Behörden`, d: `Energie und Landwirtschaft arbeiten mit denselben Kriterien.` }
    ],
    mxTitle: `Mexiko heute`,
    mx1n: `Keine gesetzliche Definition`, mx1l: `Mexiko hat noch keine gesetzliche Definition und keinen spezifischen Rahmen für Agri-PV.`,
    mx2n: `< 0,7 MW`, mx2l: `Das Stromsektorgesetz (LSE, 2025) befreit Anlagen unter 0,7 MW von der Erzeugungsgenehmigung (Art. 19) – relevant für Projekte im Hofmaßstab.`,
    mxNote: `Andere Pflichten (Netzanschluss, Landnutzung, Umwelt) können gelten. Nur zur Orientierung, keine Rechtsberatung.`,
    intlTitle: `Was andere Länder tun`, intlLead: `Beispiele für die Regulierung von Agri-PV.`,
    intl: [
      { flag: `🇩🇪`, c: `Deutschland`, inst: `Norm DIN SPEC 91434`, facts: [`Der landwirtschaftliche Ertrag muss mindestens 66 % des Referenzertrags betragen.`, `Maximaler Verlust landwirtschaftlicher Fläche: 10 % (Kategorie I) und 15 % (Kategorie II).`] },
      { flag: `🇫🇷`, c: `Frankreich`, inst: `APER-Gesetz (2023) und Dekret 2024-318`, facts: [`Ertragsverlust von höchstens 10 % gegenüber einer Referenzfläche.`, `Maximaler Überdeckungsgrad von 40 % für Anlagen über 10 MWp.`] },
      { flag: `🇯🇵`, c: `Japan`, inst: `Landwirtschaftsministerium (MAFF)`, facts: [`Genehmigungen zur Umwidmung von Agrarland unter der Bedingung, mindestens 80 % des örtlichen Durchschnittsertrags zu halten.`, `Genehmigungen für 3 oder 10 Jahre.`] },
      { flag: `🇮🇹`, c: `Italien`, inst: `MASE-Leitlinien (2022) und PNRR`, facts: [`Nationale Leitlinien (2022) für Agri-PV-Anlagen.`, `Eine PNRR-Maßnahme über 1,099 Mrd. Euro für Agri-PV.`] },
      { flag: `🇺🇸`, c: `Massachusetts (USA)`, inst: `SMART-Programm`, facts: [`Ein landwirtschaftlicher Zuschlag („Adder“) für Solarprojekte mit landwirtschaftlicher Doppelnutzung.`, `Derzeit 0,09 USD/kWh unter SMART 3.0.`] }
    ],
    intlNote: `Zusammenfassung zur Orientierung; maßgeblich sind die amtlichen Texte. Regeln ändern sich häufig.`,
    initStatus: `In Arbeit`,
    initTitle: `Politische Initiative von AMAYAD`,
    initText: `AMAYAD erarbeitet einen Vorschlag, damit Mexiko eine Definition und einen Rahmen für Agri-PV erhält. Er wird am 24. November 2026 öffentlich vorgestellt.`,
    initTopicsTitle: `Themen in Prüfung`,
    initTopics: [`Gesetzliche Definition von Agri-PV`, `Mindestkriterien für landwirtschaftliche Produktion und Monitoring`, `Kategorien nach Anlagentyp und Größe`, `Abstimmung zwischen Energie- und Agrarbehörden`, `Anreize und Finanzierung`, `Schutz von Eigentümern, Ejidos und Gemeinden`],
    initNote: `Themen in Prüfung; der endgültige Inhalt kann sich ändern. Dies bedeutet keine Unterstützung durch eine Behörde.`,
    supportTitle: `Initiative unterstützen`,
    supportText: `Melden Sie sich an, um Neuigkeiten zu erhalten, Feedback zu geben und an Arbeitsgruppen teilzunehmen.`,
    seeEvent: `Zur Veranstaltung am 24. November →`,
    taxTitle: `Steueranreize`,
    taxLead: `Instrumente, die es in Mexiko bereits gibt und die die Wirtschaftlichkeit eines Projekts verbessern können.`,
    taxCardTitle: `Sofortabschreibung bis 100 % · LISR Art. 34 Abs. XIII`,
    taxCardText: `Das mexikanische Einkommensteuergesetz erlaubt, bis zu 100 % der Investition in Maschinen und Anlagen zur Erzeugung erneuerbarer Energie wie Solarstrom abzusetzen – unter Bedingungen.`,
    taxConditions: [`Die Anlagen müssen nach dem Jahr der Abschreibung mindestens 5 Jahre in Betrieb bleiben; andernfalls wird mit Inflationsanpassung und Zuschlägen neu berechnet.`, `Die übrigen geltenden Steuervorschriften sind zu beachten.`],
    taxAdvisor: `Allgemeine Information, keine Steuerberatung. Fragen Sie Ihre Steuerberatung.`,
    updatesTitle: `Politische Updates`,
    updatesText: `Demnächst: Verfolgung relevanter Gesetzesinitiativen, Normen und öffentlicher Konsultationen – im Newsletter und in diesem Bereich.`
  },
  lib: {
    lead: `Leitfäden, Forschung, Regulierung, Anreize und AMAYAD-Publikationen. Wir nehmen nur überprüfbare Ressourcen auf; Geplantes ist als „Demnächst“ markiert.`,
    cats: { all: `Alle`, guides: `Leitfäden`, research: `Forschung`, regulation: `Regulierung`, tax: `Steueranreize`, cases: `Fallstudien`, amayad: `AMAYAD-Publikationen`, handbook: `Handbuch`, carbon: `CO₂-Zertifikate`, blockchain: `Blockchain & Rückverfolgbarkeit`, map: `Weltkarte`, magazine: `Magazin / Newsletter`, reports: `Jahresberichte` }
  },
  members2: { portalTitle: `Mitgliederportal`, portalText: `Privates Verzeichnis, Dokumente und Mitgliedervorteile. Demnächst.` },
  contact: {
    subjects: { general: `Allgemeine Anfrage`, membership: `Mitgliedschaft`, sponsor: `Sponsoring`, partner: `Partner werden`, wg: `Einem Komitee beitreten`, project: `Projekt vorschlagen`, events: `Veranstaltungen`, policy: `Politische Initiative`, services: `Services (Beratung / Soft-Landing)`, resource: `Ressource vorschlagen`, press: `Presse und Medien` }
  },
  footer2: { follow: `Folgen Sie uns`, explore: `Entdecken`, contactTitle: `Kontakt`, prototype: `v2 · Prototyp` },
  f: {
    emailPh: `sie@email.de`,
    errAge: `Das Junglandwirte-Netzwerk richtet sich an Personen von 18 bis 35 Jahren.`,
    errGroup: `Bitte wählen Sie mindestens eine Option.`,
    titles: { sponsor: `Sponsoring-Anfrage`, ambassador: `Botschafterprogramm`, youngfarmers: `Junglandwirte-Netzwerk`, partner: `Partner von AMAYAD werden`, policy: `Initiative unterstützen`, committee: `Einem Komitee beitreten`, access: `Mitgliederportal — demnächst`, notify: `Benachrichtigen, sobald verfügbar`, event: `Interesse an der Veranstaltung anmelden` },
    intros: {
      sponsor: `Erzählen Sie uns von Ihrer Organisation und Ihren Zielen. Wir senden Ihnen ein individuelles Angebot (keine veröffentlichten Preise).`,
      ambassador: `Bewerben Sie sich als Botschafter oder nominieren Sie jemanden, der AMAYAD in seiner Region oder Branche gut vertreten würde.`,
      youngfarmers: `Für junge Menschen von 18 bis 35 Jahren. Erzählen Sie uns, wer Sie sind und wie Sie mitwirken möchten.`,
      partner: `Für Institutionen, Verbände, Universitäten und Unternehmen, die mit AMAYAD zusammenarbeiten möchten.`,
      policy: `Erhalten Sie Neuigkeiten zur Initiative, geben Sie Feedback und wirken Sie in Arbeitsgruppen mit.`,
      committee: `Wählen Sie das Komitee, in dem Sie mitwirken möchten.`,
      access: `<b>Das Mitgliederportal ist bald verfügbar.</b> Beantragen Sie Zugang, und wir informieren Sie, sobald es bereit ist.`,
      notify: `Wir benachrichtigen Sie per E-Mail, sobald es verfügbar ist.`,
      event: `Melden Sie sich an, und wir senden Ihnen Ort, Uhrzeit und Details, sobald sie bestätigt sind.`
    },
    submits: { sponsor: `Anfrage senden`, ambassador: `Senden`, youngfarmers: `Bewerbung senden`, partner: `Vorschlag senden`, policy: `Ich bin dabei`, committee: `Senden`, access: `Zugang beantragen`, notify: `Benachrichtigen`, event: `Interesse anmelden` },
    labels: { sponsorType: `Art des Sponsors`, organization: `Organisation`, name: `Vollständiger Name`, role: `Position / Rolle`, email: `E-Mail`, phone: `Telefon`, country: `Land`, message: `Nachricht`, mode: `Was möchten Sie tun?`, location: `Bundesstaat / Stadt`, sector: `Branche`, roles: `Rollen, die Sie interessieren`, nomineeName: `Name der nominierten Person`, nomineeEmail: `E-Mail der nominierten Person`, age: `Alter`, background: `Hintergrund`, yfnRole: `Rolle, die Sie interessiert`, yfnInterests: `Ich interessiere mich für`, orgType: `Art der Organisation`, profile: `Sie machen mit als`, committee: `Komitee`, memberStatus: `Status`, topic: `Thema`, eventId: `Veranstaltung`, attendance: `Ich möchte teilnehmen als` },
    opts: {
      sponsorType: { agbusiness: `Agrarunternehmen`, startup: `Start-up`, corporate: `Unternehmenssponsor`, other: `Sonstiges` },
      ambMode: { apply: `Mich selbst bewerben`, nominate: `Jemanden nominieren` },
      ambRoles: { advocacy: `Interessenvertretung`, education: `Bildung`, networking: `Networking`, content: `Content-Erstellung` },
      yfnBackground: { farmer: `Landwirt/in`, student: `Studierende/r`, solar: `Solarfachkraft`, digital: `Agrartech / digital`, other: `Sonstiges` },
      yfnRole: { ambassador: `Botschafter/in`, mentor: `Mentor/in`, innovator: `Innovator/in` },
      yfnInterests: { training: `Schulungen`, fieldtrips: `Exkursionen`, mentorship: `Mentoring`, exchange: `Austausch` },
      orgType: { private: `Privatunternehmen`, association: `Verband oder Kammer`, academia: `Universität / Forschung`, public: `Öffentliche Hand`, devfund: `Entwicklungsinstitution`, ngo: `NGO`, media: `Medien`, other: `Sonstiges` },
      profile: { farmer: `Landwirt/in`, solar: `Solarbranche`, digital: `Digitale Landwirtschaft`, academia: `Wissenschaft`, government: `Öffentlicher Dienst`, ngo: `Zivilgesellschaft`, citizen: `Bürger/in`, other: `Sonstiges` },
      memberStatus: { member: `Ich bin bereits Mitglied`, applicant: `Ich habe einen Antrag gestellt`, notyet: `Ich bin noch kein Mitglied` },
      topic: { courses: `Kurse und Weiterbildung`, handbook: `Agri-PV-Handbuch`, library: `Bibliotheksressourcen`, services: `Services`, other: `Sonstiges` },
      attendance: { attend: `Teilnehmer/in`, speak: `Referent/in`, sponsor: `Sponsor`, volunteer: `Freiwillige/r`, press: `Presse` }
    }
  },
  privacy: { extra: `<h3>Newsletter</h3><p>Wenn Sie den wöchentlichen Newsletter abonnieren, verwenden wir Ihre E-Mail-Adresse nur für dessen Versand. Sie können sich jederzeit abmelden.</p>` }
};

/* =============================== ITALIANO =============================== */
V.it = {
  ui: { search: `Cerca`, searchPh: `Cerca nel sito…`, searchHint: `Scrivi per cercare in tutte le sezioni (adesione, programmi, eventi, leggi…).`, searchNone: `Nessun risultato. Prova con un'altra parola.`, searchCount: `{n} risultati`,
        login: `Area soci`, onThisPage: `In questa pagina`, comingSoon: `prossimamente`, socialSoon: `Questo social network sarà disponibile a breve.` },
  nav: { home: `Home`, about: `Chi siamo`, membership: `Adesione`, programs: `Programmi`, events: `Eventi`, partnerships: `Partnership`, legislative: `Affari legislativi`, library: `Biblioteca`, members: `Soci`, contact: `Contatti` },
  cta: { sponsor: `Diventa sponsor`, apply: `Candidati`, nominate: `Segnala qualcuno`, notify: `Avvisami`, support: `Sostieni l'iniziativa`, subscribe: `Iscriviti`, discord: `Community Discord`, register: `Registrati`, registerInterest: `Segnala il tuo interesse`, addCal: `Aggiungi al calendario`, partner: `Diventa partner`, wg: `Entra in un comitato` },
  home2: {
    cta2: `Vedi i programmi`,
    benefitsTitle: `Cosa può offrire l'agrivoltaico`,
    benefits: [
      { i: `🌾`, t: `Sicurezza alimentare`, d: `Energia senza sottrarre terreni alla produzione di cibo.` },
      { i: `🌍`, t: `Meno emissioni di CO₂`, d: `Elettricità solare che sostituisce l'energia fossile in azienda e in rete.` },
      { i: `💧`, t: `Risparmio idrico`, d: `L'ombreggiamento parziale riduce evaporazione e fabbisogno irriguo.` },
      { i: `💰`, t: `Reddito extra per l'agricoltore`, d: `Un secondo raccolto: energia, affitto o autoconsumo.` },
      { i: `⚡`, t: `Energia pulita per l'azienda agricola`, d: `Pompaggio, irrigazione, refrigerazione e trasformazione con energia propria.` },
      { i: `🌡️`, t: `Colture più resilienti`, d: `Un microclima più mite durante il caldo estremo.` }
    ],
    benefitsNote: `Benefici qualitativi. I risultati dipendono dal sito, dalla coltura e dalla progettazione del sistema.`,
    quickTitle: `Accesso rapido`,
    quick: [
      { id: `membership`, i: `🤝`, t: `Adesione`, d: `5 livelli e sponsorizzazione` },
      { id: `programs`, i: `🎓`, t: `Programmi`, d: `Ambasciatori, giovani, comitati` },
      { id: `events`, i: `📅`, t: `Eventi`, d: `24 nov 2026: libro e iniziativa` },
      { id: `legislative`, i: `⚖️`, t: `Affari legislativi`, d: `Quadro normativo e incentivi` },
      { id: `library`, i: `📚`, t: `Biblioteca`, d: `Guide, studi e leggi` },
      { id: `partnerships`, i: `🌐`, t: `Partnership ed ecosistema`, d: `Chi partecipa` }
    ],
    nextEventTitle: `Prossimo evento`,
    newsTitle: `Ultime notizie`,
    newsSoon: `Notizie in arrivo`,
    newsSoonText: `Qui pubblicheremo aggiornamenti su AMAYAD, i suoi programmi e il settore.`,
    newsletterTag: `Newsletter settimanale`,
    newsletterTitle: `Newsletter settimanale dei vantaggi`,
    newsletterText: `Ogni settimana: notizie dal settore, opportunità per i soci, eventi e novità legislative. Gratis; ti cancelli quando vuoi.`,
    nlOk: `Fatto! Sei iscritto/a alla newsletter.`,
    nlMailto: `La tua iscrizione è pronta. Clicca sul pulsante per inviarla via e-mail.`,
    discordTag: `Community`,
    discordTitle: `Unisciti alla conversazione`,
    discordText: `Uno spazio dove chi viene dal solare e chi viene dall'agricoltura condivide domande, progetti e opportunità.`,
    discordSoon: `La community Discord aprirà a breve. Iscriviti alla newsletter per ricevere l'invito.`,
    waySponsor: `Per aziende agricole, startup e imprese che vogliono far crescere il settore.`
  },
  about: {
    eyebrow: `Chi siamo`, title: `Chi siamo`,
    lead: `AMAYAD è nata nel 2024 da un'idea semplice: far incontrare il mondo dell'energia solare e quello dell'agricoltura — inclusa l'agricoltura digitale — perché collaborino e creino partnership.`,
    jMission: `Missione e visione`, jHistory: `Storia`, jFounders: `Cofondatori`, jGovernance: `Governance`, jAgri: `Che cos'è l'agrivoltaico?`,
    missionTitle: `Missione`,
    missionText: `Promuovere l'innovazione e la tecnologia nell'agricoltura messicana per produrre di più, in modo efficiente e sostenibile, integrando agrivoltaico, agricoltura di precisione e strumenti digitali.`,
    visionTitle: `Visione`,
    visionText: `Un Messico leader nell'adozione su larga scala dell'agrivoltaico, che crea lavoro nelle campagne e migliora l'autosufficienza energetica e alimentare.`,
    historyTitle: `La nostra storia`,
    history: [
      { y: `2024`, t: `Fondazione`, d: `Luis Alfonso Escobedo e Roberto Moreno Castillo cofondano AMAYAD per unire industria solare e agricoltura.` },
      { y: `2024`, t: `Prima presentazione pubblica`, d: `AMAYAD presenta pubblicamente obiettivi, comitati, vantaggi e struttura associativa.` },
      { y: `2026`, t: `Programmi in formazione`, d: `Ambasciatori, Rete dei giovani agricoltori e comitati di lavoro, incluso Donne nell'agrivoltaico.` },
      { y: `24 nov 2026`, t: `Libro e iniziativa`, d: `Presentazione di «Cosechando el Sol Dos Veces» e dell'iniziativa di politica pubblica sull'agrivoltaico.`, planned: true },
      { y: `Prossimamente`, t: `Primo Congresso sull'agrivoltaico in Messico`, d: `Data e sede da definire.`, planned: true }
    ],
    foundersTitle: `Cofondatori`,
    foundersLead: `AMAYAD è stata cofondata nel 2024 da:`,
    founders: [
      { name: `Luis Alfonso Escobedo`, role: `Cofondatore`, d: `Autore del libro «Cosechando el Sol Dos Veces» su agrivoltaico e agricoltura digitale.` },
      { name: `Roberto Moreno Castillo`, role: `Cofondatore`, d: `Biografia in arrivo.` }
    ],
    governanceTitle: `Governance`,
    governanceLead: `La struttura di governo di AMAYAD è in fase di costituzione. I nomi saranno pubblicati solo quando confermati.`,
    inFormation: `In formazione`,
    governance: [
      { t: `Assemblea generale`, d: `Organo supremo. I soci parteciperanno con diritto di voto, secondo lo statuto.` },
      { t: `Consiglio direttivo`, d: `Guida strategica dell'associazione. In fase di costituzione.` },
      { t: `Comitati di lavoro`, d: `Sette comitati tematici aperti ai soci.` },
      { t: `Statuto e codice etico`, d: `Saranno pubblicati su questo sito.` }
    ],
    seeCommittees: `Vedi i comitati`
  },
  mem2: {
    jTiers: `Livelli`, jCompare: `Confronto`, jWhy: `Perché aderire?`, jSponsor: `Sponsorizzazione`, jFaq: `Domande`,
    brochure: `Scarica la brochure (PDF)`,
    idealFor: `Ideale per:`,
    ideal: { company_small: `startup, piccole aziende agricole, installatori e aziende agritech.`, company_medium: `aziende in crescita: EPC, distributori, agroindustria media.`, company_large: `produttori, sviluppatori, aziende alimentari e grandi gruppi.`, individual: `consulenti, ricercatori, agricoltori e professionisti.`, student: `studenti di agraria, ingegneria, energia e settori affini.` },
    short: { company_small: `< 1 Mln USD`, company_medium: `1–5 Mln USD`, company_large: `> 5 Mln USD`, individual: `Individuale`, student: `Studente` },
    colBenefit: `Vantaggio`, rowFee: `Quota annuale`, rowFounding: `Riconoscimento come socio fondatore (aderendo ora)`, join: `Scegli`,
    tableTitle: `Confronto dei vantaggi`,
    tableLead: `Tutti i livelli condividono lo stesso quadro di vantaggi; cambia solo la quota in base al tipo e alla dimensione della tua organizzazione.`,
    tableNote: `Il quadro dei vantaggi è comune a tutti i livelli e viene attuato progressivamente. Eventuali differenze per livello saranno stabilite dal Consiglio direttivo e pubblicate qui.`,
    whyTitle: `Perché aderire?`, whyLead: `Due mondi, motivi diversi, un terreno comune.`,
    whySolarTitle: `Se vieni dal solare`,
    whySolar: [`Accesso ai terreni senza competere con la produzione di cibo`, `Partner agricoli locali e maggiore accettazione sociale dei tuoi progetti`, `Voce nella definizione e nel quadro normativo dell'agrivoltaico`, `Contatto con aziende alimentari, cooperative e produttori`, `Visibilità da pioniere verso investitori e clienti`],
    whyAgriTitle: `Se vieni dall'agricoltura o dall'agritech`,
    whyAgri: [`Un reddito extra continuando a produrre`, `Energia per pompaggio, irrigazione, refrigerazione e trasformazione`, `Risparmio idrico e colture più resistenti al caldo`, `Accesso alla tecnologia: droni, sensori, dati e IA`, `Formazione e giornate in campo (previste) e voce nelle politiche pubbliche`],
    sponsorEyebrow: `Sponsorizzazione`,
    sponsorTitle: `Sponsorizza la crescita dell'agrivoltaico in Messico`,
    sponsorLead: `Per aziende agricole, startup e sponsor aziendali che vogliono visibilità verso entrambi i mondi e sostenere i programmi di AMAYAD.`,
    sponsorNote: `Pacchetti su misura, senza prezzi pubblicati: raccontaci i tuoi obiettivi e ti invieremo una proposta.`,
    sponsorTypes: [
      { i: `🚜`, t: `Aziende agricole e agroalimentari`, d: `Mezzi tecnici, macchine, irrigazione, aziende alimentari e agroindustria.` },
      { i: `🚀`, t: `Startup`, d: `Agritech, clima, dati ed energia in fase iniziale.` },
      { i: `🏢`, t: `Sponsor aziendali`, d: `Produttori, sviluppatori, finanziatori e grandi imprese.` }
    ],
    testiTitle: `Testimonianze`, testiLead: `Qui appariranno le voci dei nostri primi soci.`,
    testiSoon: `Spazio riservato alla testimonianza di un socio fondatore.`,
    faqTitle: `Domande frequenti`,
    faq: [
      { q: `Inviare il modulo mi rende socio?`, a: `È una richiesta. AMAYAD confermerà l'ammissione, la quota in vigore e le modalità di pagamento.` },
      { q: `In che valuta sono le quote?`, a: `In dollari statunitensi (USD) all'anno, secondo la struttura pubblicata da AMAYAD.` },
      { q: `Quale livello fa per me?`, a: `Le aziende scelgono in base al fatturato annuo; le persone il livello Individuale; gli studenti il livello Studente. In caso di dubbio, scrivici.` },
      { q: `I vantaggi sono già disponibili?`, a: `Vengono introdotti progressivamente man mano che l'associazione cresce. I soci fondatori aiutano a definire le priorità.` },
      { q: `La mia organizzazione può fare da sponsor senza essere socia?`, a: `Sì. Usa il modulo di sponsorizzazione e prepareremo una proposta su misura.` }
    ],
    askQuestion: `Ho una domanda`
  },
  prog: {
    eyebrow: `Programmi`, title: `Programmi e servizi`,
    lead: `Modi concreti per partecipare. Sono tutti in fase di avvio: unisciti dall'inizio e aiutaci a dar loro forma.`,
    tabs: { amb: `Ambasciatori`, yfn: `Giovani agricoltori`, com: `Comitati`, courses: `Corsi`, handbook: `Manuale`, services: `Servizi` },
    status: { forming: `In formazione`, planned: `Previsto`, soon: `Prossimamente` },
    amb: {
      title: `Programma Ambasciatori`,
      lead: `Persone che rappresentano AMAYAD nella propria regione o nel proprio settore e avvicinano più gente all'agrivoltaico e all'agricoltura digitale.`,
      objTitle: `Obiettivi`,
      objectives: [
        { i: `📣`, t: `Consapevolezza`, d: `Far conoscere l'agrivoltaico e i suoi benefici per agricoltura ed energia.` },
        { i: `🤝`, t: `Coinvolgimento`, d: `Avvicinare agricoltori, aziende e studenti alla community AMAYAD.` },
        { i: `✅`, t: `Credibilità`, d: `Diffondere informazioni rigorose e buone pratiche, senza promesse eccessive.` }
      ],
      rolesTitle: `Ruoli`,
      roles: [
        { i: `⚖️`, t: `Advocacy`, d: `Rappresentare la visione di AMAYAD presso autorità e organizzazioni locali.` },
        { i: `🎓`, t: `Formazione`, d: `Incontri, workshop e materiali per agricoltori, scuole e aziende.` },
        { i: `🔗`, t: `Networking`, d: `Mettere in contatto chi viene dal solare con chi viene dall'agricoltura.` },
        { i: `✍️`, t: `Creazione di contenuti`, d: `Storie, foto e video del settore nella tua regione.` }
      ],
      whoTitle: `Chi può candidarsi?`,
      who: [`Agricoltori e tecnici agricoli`, `Professionisti dell'energia solare`, `Studenti e ricercatori`, `Imprenditori agritech`, `Leader di comunità e organizzazioni`],
      getTitle: `Cosa AMAYAD prevede di offrire`,
      get: [`Materiali e formazione per gli ambasciatori`, `Riconoscimento pubblico come ambasciatore`, `Accesso alla rete di soci e partner`, `Accesso prioritario agli eventi`]
    },
    yfn: {
      title: `Rete e scambio dei giovani agricoltori`,
      lead: `Una rete per i giovani che vogliono innovare in agricoltura con energia solare e tecnologie digitali.`,
      ages: `Dai 18 ai 35 anni.`, agesText: `Giovani agricoltori, studenti e professionisti di qualsiasi regione.`,
      rolesTitle: `Ruoli nella rete`,
      roles: [
        { i: `📣`, t: `Ambasciatori`, d: `Portano l'agrivoltaico nelle loro comunità, scuole e reti.` },
        { i: `🧭`, t: `Mentori`, d: `Giovani con esperienza che accompagnano chi inizia.` },
        { i: `💡`, t: `Innovatori`, d: `Sviluppano idee, progetti pilota e soluzioni digitali per l'agricoltura.` }
      ],
      actTitle: `Attività previste`,
      activities: [
        { i: `🎓`, t: `Formazione`, d: `Workshop su agrivoltaico, droni, sensori e modelli di business.` },
        { i: `🚌`, t: `Visite in campo`, d: `Visite a siti dimostrativi e progetti.` },
        { i: `🤝`, t: `Mentoring`, d: `Affiancamento da parte di professionisti del solare e dell'agricoltura.` },
        { i: `🌎`, t: `Scambi`, d: `Scambi tra regioni e, in futuro, con altri paesi.` }
      ],
      note: `Programma in formazione; le attività dipendono da partnership e finanziamenti che saranno annunciati una volta confermati.`
    },
    women: { t: `Donne nell'agrivoltaico`, d: `Formazione, opportunità, leadership e innovazione per le donne in agricoltura, energia e agricoltura digitale.` },
    newCommittee: `Nuovo comitato`, joinThis: `Entra in questo comitato`,
    courses: {
      title: `Corsi e formazione`,
      lead: `Formazione pratica per agricoltori, tecnici, studenti e aziende del solare.`,
      formats: [
        { i: `🌱`, t: `Workshop presso siti dimostrativi`, d: `Imparare in campo, accanto a veri impianti agrivoltaici.` },
        { i: `👩‍🌾`, t: `Giornate in campo`, d: `Giornate aperte per agricoltori e comunità.` },
        { i: `💻`, t: `Webinar`, d: `Sessioni online su tecnologia, mercato e normativa.` },
        { i: `📜`, t: `Certificazione`, d: `Programma di certificazione sull'agrivoltaico (previsto).` }
      ],
      topicsTitle: `Temi previsti`,
      topics: [`Progettazione di impianti agrivoltaici`, `Compatibilità delle colture`, `Agricoltura digitale, droni e sensori`, `Gestione e manutenzione`, `Modelli di business e finanziamento`, `Quadro normativo e incentivi fiscali`],
      note: `Non ci sono ancora corsi aperti. Sedi e partner accademici saranno annunciati una volta confermati.`
    },
    handbook: {
      title: `Manuale AMAYAD dell'agrivoltaico`,
      lead: `Una guida pratica, pensata per il Messico, con ciò che serve sapere prima di progettare, finanziare o gestire un progetto agrivoltaico.`,
      contribute: `Voglio contribuire`,
      tocTitle: `Contenuti previsti`,
      toc: [`Che cos'è l'agrivoltaico?`, `Scelta del sito e risorsa solare`, `Configurazioni e strutture`, `Colture e allevamento`, `Acqua e suolo`, `Agricoltura digitale e monitoraggio`, `Autorizzazioni e quadro normativo in Messico`, `Modelli di business, incentivi fiscali e finanziamento`, `Comunità, ejidos e proprietà fondiaria`, `Casi di studio`]
    },
    services: {
      title: `Servizi`,
      lead: `Supporto specializzato per chi vuole fare il passo successivo.`,
      soonTag: `Prossimamente · tramite studi partner`,
      legalTitle: `Consulenza legale per i proprietari terrieri`,
      legalText: `Orientamento per proprietari, ejidos e comunità che ricevono proposte di progetti solari o agrivoltaici.`,
      legalList: [`Contratti di affitto e servitù`, `Uso del suolo e autorizzazioni`, `Equa ripartizione dei benefici`],
      softTitle: `Soft-landing per aziende che entrano in Messico`,
      softText: `Per aziende estere che vogliono entrare nel mercato agrivoltaico messicano.`,
      softList: [`Panoramica normativa e di mercato`, `Contatto con agricoltori e partner locali`, `Collegamento con l'ecosistema AMAYAD`],
      note: `AMAYAD non presta direttamente questi servizi: li indirizzerà a studi partner una volta formalizzati gli accordi.`
    }
  },
  ev: {
    eyebrow: `Eventi`, title: `Eventi`,
    lead: `Presentazioni, congressi, webinar e giornate in campo in cui i due mondi si incontrano.`,
    upcoming: `Prossimi eventi`, planned: `In programma`, past: `Eventi passati`,
    none: `Presto annunceremo nuovi eventi.`, pastNone: `Qui apparirà l'archivio degli eventi passati.`,
    proposeTitle: `Vuoi organizzare o ospitare un evento?`, proposeText: `Proponi un webinar, una giornata in campo o una visita al tuo progetto.`, proposeCta: `Proponi un evento`,
    types: { presentation: `Presentazione`, congress: `Congresso`, webinar: `Webinar`, workshop: `Workshop`, fieldday: `Giornata in campo`, networking: `Networking` },
    status: { confirmed: `Data confermata`, planned: `In programma`, past: `Svolto` },
    tabs: { overview: `Panoramica`, agenda: `Programma`, speakers: `Relatori`, sponsors: `Sponsor` },
    dateShort: `Data`, dateTBD: `Data da definire`, venueTBD: `Sede da confermare`, timeTBD: `Orario da confermare`,
    agendaTBA: `Il programma sarà pubblicato a breve.`, agendaNote: `Programma provvisorio; orari da confermare.`,
    speakersTBA: `Relatori da annunciare.`, moreSpeakers: `Altri relatori`, tba: `Da annunciare`,
    sponsorsNone: `Sono disponibili opportunità di sponsorizzazione per questo evento.`, sponsorCta: `Sponsorizza questo evento`,
    when: `Quando`, where: `Dove`, details: `Vedi dettagli`
  },
  part2: {
    ecoEyebrow: `Ecosistema`, ecoTitle: `Chi partecipa all'agrivoltaico?`,
    ecoLead: `L'agrivoltaico ha bisogno di molti attori. AMAYAD è il loro punto d'incontro.`,
    hub: `Punto d'incontro`,
    eco: [
      { id: `private`, i: `🏭`, t: `Settore privato`, d: `Chi produce, costruisce e acquista.`, items: [`Agricoltori e produttori`, `Aziende alimentari`, `Cooperative`, `Produttori di pannelli solari`, `Inseguitori solari (tracker)`, `Inverter`, `Strutture`, `Solare di comunità`] },
      { id: `public`, i: `🏛️`, t: `Settore pubblico`, d: `Chi regola, promuove e forma i talenti.`, items: [`Ministero dell'energia`, `Ministero dell'agricoltura`, `Ministero dell'istruzione`, `Università e centri di ricerca`] },
      { id: `dev`, i: `🌐`, t: `Fondi per lo sviluppo`, d: `Chi finanzia e offre cooperazione tecnica.`, items: [`GIZ`, `BID`, `Banca Mondiale`, `Altre istituzioni per lo sviluppo`] }
    ],
    ecoNote: `Mappa delle categorie di attori dell'ecosistema. Le organizzazioni citate non sono partner di AMAYAD né la sostengono; i nostri partner sono solo quelli indicati sopra come «Partner».`,
    waysTitle: `Modi di collaborare`,
    ways: [
      { i: `🏛️`, t: `Alleanza istituzionale`, d: `Accordi con associazioni, camere ed enti.` },
      { i: `🎓`, t: `Collaborazione accademica`, d: `Ricerca, tesi, tirocini e siti dimostrativi.` },
      { i: `📅`, t: `Partner per eventi`, d: `Co-organizzare presentazioni, webinar e il congresso.` },
      { i: `📰`, t: `Media e divulgazione`, d: `Contenuti, interviste e visibilità per il settore.` }
    ]
  },
  leg: {
    eyebrow: `Affari legislativi`, title: `Un quadro per l'agrivoltaico in Messico`,
    lead: `L'agrivoltaico cresce nel mondo con regole chiare. Il Messico non le ha ancora. AMAYAD vuole contribuire a costruirle.`,
    jWhy: `Perché?`, jMexico: `Il Messico oggi`, jIntl: `Esperienza internazionale`, jInitiative: `Iniziativa AMAYAD`, jTax: `Incentivi fiscali`,
    whyTitle: `Perché il Messico ha bisogno di una definizione e di un quadro?`,
    whyLead: `Senza una definizione, qualsiasi impianto solare su terreno agricolo potrebbe dirsi «agrivoltaico», e i progetti ben fatti non possono distinguersi.`,
    why: [
      { i: `📘`, t: `Certezza giuridica`, d: `Definire che cos'è — e che cosa non è — un impianto agrivoltaico.` },
      { i: `🌾`, t: `Proteggere la produzione di cibo`, d: `Criteri minimi di uso agricolo perché la terra continui a produrre.` },
      { i: `💳`, t: `Abilitare incentivi e finanziamenti`, d: `Programmi, credito e regole d'uso del suolo dedicati.` },
      { i: `🏡`, t: `Chiarezza per proprietari ed ejidos`, d: `Contratti e benefici più equi e trasparenti.` },
      { i: `📊`, t: `Dati e verifica`, d: `Monitoraggio che dimostri i risultati agricoli ed energetici.` },
      { i: `🔗`, t: `Coordinamento tra autorità`, d: `Energia e agricoltura che lavorano con gli stessi criteri.` }
    ],
    mxTitle: `Il Messico oggi`,
    mx1n: `Nessuna definizione legale`, mx1l: `Il Messico non dispone ancora di una definizione legale né di un quadro specifico per l'agrivoltaico.`,
    mx2n: `< 0,7 MW`, mx2l: `La Legge sul settore elettrico (LSE, 2025) esenta dal permesso di generazione gli impianti sotto 0,7 MW (art. 19), un aspetto rilevante per i progetti su scala aziendale.`,
    mxNote: `Possono applicarsi altri obblighi (connessione, uso del suolo, ambiente). Informazione orientativa, non consulenza legale.`,
    intlTitle: `Cosa fanno altri paesi`, intlLead: `Esempi di come è stato regolato l'agrivoltaico.`,
    intl: [
      { flag: `🇩🇪`, c: `Germania`, inst: `Norma DIN SPEC 91434`, facts: [`La resa agricola deve essere almeno il 66% della resa di riferimento.`, `Perdita massima di superficie agricola: 10% (categoria I) e 15% (categoria II).`] },
      { flag: `🇫🇷`, c: `Francia`, inst: `Legge APER (2023) e Decreto 2024-318`, facts: [`Perdita di resa non superiore al 10% rispetto a una parcella testimone.`, `Tasso di copertura massimo del 40% per impianti oltre 10 MWp.`] },
      { flag: `🇯🇵`, c: `Giappone`, inst: `Ministero dell'Agricoltura (MAFF)`, facts: [`Permessi di conversione dei terreni agricoli subordinati al mantenimento di almeno l'80% della resa media locale.`, `Permessi della durata di 3 o 10 anni.`] },
      { flag: `🇮🇹`, c: `Italia`, inst: `Linee guida MASE (2022) e PNRR`, facts: [`Linee guida nazionali (2022) per gli impianti agrivoltaici.`, `Una misura del PNRR da 1,099 miliardi di euro dedicata all'agrivoltaico.`] },
      { flag: `🇺🇸`, c: `Massachusetts (USA)`, inst: `Programma SMART`, facts: [`Un incentivo aggiuntivo («adder») per progetti solari a doppio uso agricolo.`, `Attualmente 0,09 USD/kWh nell'ambito di SMART 3.0.`] }
    ],
    intlNote: `Sintesi orientativa; consulta i testi ufficiali. Le regole cambiano spesso.`,
    initStatus: `In elaborazione`,
    initTitle: `Iniziativa di politica pubblica di AMAYAD`,
    initText: `AMAYAD sta elaborando una proposta perché il Messico abbia una definizione e un quadro per l'agrivoltaico. Sarà presentata pubblicamente il 24 novembre 2026.`,
    initTopicsTitle: `Temi in analisi`,
    initTopics: [`Definizione legale di agrivoltaico`, `Criteri minimi di produzione agricola e monitoraggio`, `Categorie per tipo di impianto e scala`, `Coordinamento tra autorità dell'energia e dell'agricoltura`, `Incentivi e finanziamenti`, `Tutela di proprietari, ejidos e comunità`],
    initNote: `Temi in analisi; il contenuto finale può cambiare. Non implica il sostegno di alcuna autorità.`,
    supportTitle: `Sostieni l'iniziativa`,
    supportText: `Iscriviti per ricevere aggiornamenti, inviare commenti e partecipare ai tavoli di lavoro.`,
    seeEvent: `Vedi l'evento del 24 novembre →`,
    taxTitle: `Incentivi fiscali`,
    taxLead: `Strumenti già esistenti in Messico che possono migliorare la sostenibilità economica di un progetto.`,
    taxCardTitle: `Deduzione immediata fino al 100% · LISR art. 34, frazione XIII`,
    taxCardText: `La legge messicana sull'imposta sul reddito consente di dedurre fino al 100% dell'investimento in macchinari e impianti per la generazione da fonti rinnovabili, come il solare, a determinate condizioni.`,
    taxConditions: [`Gli impianti devono restare in funzione almeno 5 anni dopo l'esercizio della deduzione; altrimenti si ricalcola con rivalutazione e maggiorazioni.`, `Si applicano le altre disposizioni fiscali vigenti.`],
    taxAdvisor: `Informazione generale, non consulenza fiscale. Consulta il tuo consulente fiscale.`,
    updatesTitle: `Aggiornamenti legislativi`,
    updatesText: `Prossimamente: monitoraggio di iniziative, norme e consultazioni pubbliche rilevanti per il settore, nella newsletter e in questa sezione.`
  },
  lib: {
    lead: `Guide, ricerca, normativa, incentivi e pubblicazioni di AMAYAD. Includiamo solo risorse verificabili; ciò che è previsto è indicato come «Prossimamente».`,
    cats: { all: `Tutte`, guides: `Guide`, research: `Ricerca`, regulation: `Normativa`, tax: `Incentivi fiscali`, cases: `Casi di studio`, amayad: `Pubblicazioni AMAYAD`, handbook: `Manuale`, carbon: `Crediti di carbonio`, blockchain: `Blockchain e tracciabilità`, map: `Mappa mondiale`, magazine: `Rivista / newsletter`, reports: `Relazioni annuali` }
  },
  members2: { portalTitle: `Area soci`, portalText: `Elenco riservato, documenti e vantaggi per i soci. Prossimamente.` },
  contact: {
    subjects: { general: `Richiesta generale`, membership: `Adesione`, sponsor: `Sponsorizzazione`, partner: `Diventare partner`, wg: `Entrare in un comitato`, project: `Proporre un progetto`, events: `Eventi`, policy: `Iniziativa di politica pubblica`, services: `Servizi (consulenza / soft-landing)`, resource: `Suggerire una risorsa`, press: `Stampa e media` }
  },
  footer2: { follow: `Seguici`, explore: `Esplora`, contactTitle: `Contatti`, prototype: `v2 · prototipo` },
  f: {
    emailPh: `tu@email.it`,
    errAge: `La Rete dei giovani agricoltori è per persone dai 18 ai 35 anni.`,
    errGroup: `Seleziona almeno un'opzione.`,
    titles: { sponsor: `Richiesta di sponsorizzazione`, ambassador: `Programma Ambasciatori`, youngfarmers: `Rete dei giovani agricoltori`, partner: `Diventa partner di AMAYAD`, policy: `Sostieni l'iniziativa`, committee: `Entra in un comitato`, access: `Area soci — prossimamente`, notify: `Avvisami quando sarà disponibile`, event: `Segnala interesse per l'evento` },
    intros: {
      sponsor: `Raccontaci della tua organizzazione e dei tuoi obiettivi. Ti invieremo una proposta su misura (nessun prezzo pubblicato).`,
      ambassador: `Candidati come ambasciatore o segnala qualcuno che rappresenterebbe bene AMAYAD nella sua regione o nel suo settore.`,
      youngfarmers: `Per giovani dai 18 ai 35 anni. Raccontaci chi sei e come vorresti partecipare.`,
      partner: `Per istituzioni, associazioni, università e aziende che vogliono collaborare con AMAYAD.`,
      policy: `Ricevi aggiornamenti sull'iniziativa, invia commenti e partecipa ai tavoli di lavoro.`,
      committee: `Scegli il comitato a cui vorresti partecipare.`,
      access: `<b>L'area soci sarà disponibile a breve.</b> Richiedi l'accesso e ti avviseremo appena sarà pronta.`,
      notify: `Ti avviseremo via e-mail quando sarà disponibile.`,
      event: `Registrati e ti invieremo sede, orario e dettagli appena saranno confermati.`
    },
    submits: { sponsor: `Invia richiesta`, ambassador: `Invia`, youngfarmers: `Invia candidatura`, partner: `Invia proposta`, policy: `Ci sono`, committee: `Invia`, access: `Richiedi accesso`, notify: `Avvisami`, event: `Segnala interesse` },
    labels: { sponsorType: `Tipo di sponsor`, organization: `Organizzazione`, name: `Nome e cognome`, role: `Ruolo / posizione`, email: `E-mail`, phone: `Telefono`, country: `Paese`, message: `Messaggio`, mode: `Cosa vuoi fare?`, location: `Stato / città`, sector: `Settore`, roles: `Ruoli che ti interessano`, nomineeName: `Nome della persona segnalata`, nomineeEmail: `E-mail della persona segnalata`, age: `Età`, background: `Profilo`, yfnRole: `Ruolo che ti interessa`, yfnInterests: `Mi interessa`, orgType: `Tipo di organizzazione`, profile: `Partecipi come`, committee: `Comitato`, memberStatus: `Situazione`, topic: `Argomento`, eventId: `Evento`, attendance: `Voglio partecipare come` },
    opts: {
      sponsorType: { agbusiness: `Azienda agricola / agroalimentare`, startup: `Startup`, corporate: `Sponsor aziendale`, other: `Altro` },
      ambMode: { apply: `Candidarmi`, nominate: `Segnalare qualcuno` },
      ambRoles: { advocacy: `Advocacy`, education: `Formazione`, networking: `Networking`, content: `Creazione di contenuti` },
      yfnBackground: { farmer: `Agricoltore/trice`, student: `Studente/ssa`, solar: `Professionista del solare`, digital: `Agritech / digitale`, other: `Altro` },
      yfnRole: { ambassador: `Ambasciatore/trice`, mentor: `Mentore`, innovator: `Innovatore/trice` },
      yfnInterests: { training: `Formazione`, fieldtrips: `Visite in campo`, mentorship: `Mentoring`, exchange: `Scambi` },
      orgType: { private: `Azienda privata`, association: `Associazione o camera`, academia: `Università / ricerca`, public: `Pubblica amministrazione`, devfund: `Istituzione per lo sviluppo`, ngo: `ONG`, media: `Media`, other: `Altro` },
      profile: { farmer: `Agricoltore/trice`, solar: `Settore solare`, digital: `Agricoltura digitale`, academia: `Mondo accademico`, government: `Funzionario/a pubblico/a`, ngo: `Società civile`, citizen: `Cittadino/a`, other: `Altro` },
      memberStatus: { member: `Sono già socio`, applicant: `Ho inviato la richiesta`, notyet: `Non sono ancora socio` },
      topic: { courses: `Corsi e formazione`, handbook: `Manuale dell'agrivoltaico`, library: `Risorse della biblioteca`, services: `Servizi`, other: `Altro` },
      attendance: { attend: `Partecipante`, speak: `Relatore/trice`, sponsor: `Sponsor`, volunteer: `Volontario/a`, press: `Stampa` }
    }
  },
  privacy: { extra: `<h3>Newsletter</h3><p>Se ti iscrivi alla newsletter settimanale, useremo la tua e-mail solo per inviartela. Puoi cancellarti in qualsiasi momento.</p>` }
};

  Object.keys(V).forEach(function (l) { window.AMAYAD_I18N[l] = merge(window.AMAYAD_I18N[l] || {}, V[l]); });
})();
