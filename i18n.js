/* AMAYAD — i18n dictionary. Languages: es (default), en, fr, de, it.
   Every UI/content string lives here. Keep keys identical across languages.
   Strings use template literals (backticks) so quotes and HTML are safe. */
window.AMAYAD_I18N = {};

/* =============================== ESPAÑOL =============================== */
AMAYAD_I18N.es = {
  meta: { title: `AMAYAD — Asociación Mexicana de Agrivoltaics y Agricultura Digital`,
          desc: `AMAYAD: donde la energía solar y la agricultura se encuentran. Asociación fundada en 2024 en México.` },
  ui: { skip: `Saltar al contenido`, language: `Idioma`, sections: `Secciones`, topics: `Temas`, close: `Cerrar`, cancel: `Cancelar`, locale: `es-MX` },
  brand: { tagline: `Agrivoltaica + Agricultura Digital` },
  nav: { home: `Inicio`, agri: `Qué es la agrivoltaica`, membership: `Membresía`, partners: `Aliados`, members: `Miembros`, library: `Biblioteca`, contact: `Contacto` },
  cta: { request: `Solicitar membresía`, project: `Proponer un proyecto`, partner: `Ser aliado`, wg: `Unirme a un comité` },
  home: {
    eyebrow: `Asociación Mexicana de Agrivoltaics y Agricultura Digital`,
    title: `Donde la <span class="sun">energía solar</span> y la <span class="leaf">agricultura</span> se encuentran`,
    lead: `AMAYAD reúne a dos mundos —la industria solar y el campo, incluida la agricultura digital— para colaborar, crear ideas nuevas y formar alianzas que difícilmente surgirían de otra forma.`,
    cta2: `Qué es la agrivoltaica`,
    founded: `Fundada en 2024 · México`,
    chipSolar: `☀ Energía solar`, chipAgri: `🌱 Agricultura y agro digital`, chipMeet: `Un mismo terreno`,
    worldsTitle: `Dos mundos, una misma tierra`,
    worldsLead: `Seas del sector solar o del agrícola, en AMAYAD encuentras a la otra mitad de la ecuación.`,
    solarTitle: `Mundo solar`,
    solarText: `Desarrolladores, EPC, fabricantes, almacenamiento de energía, ingeniería e inversionistas.`,
    solarList: [`Acceso a tierra sin competir con la producción de alimentos`, `Socios agrícolas y aceptación comunitaria`, `Diálogo regulatorio y buenas prácticas`],
    meetTitle: `Donde se encuentran`,
    meetText: `La agrivoltaica y la agricultura digital: el espacio donde ambos sectores ganan.`,
    meetList: [`Proyectos conjuntos y pilotos`, `Ideas y modelos de negocio nuevos`, `Comités técnicos y de política pública`, `Una red para conectar a ambos sectores`],
    agriTitle: `Mundo agrícola y agro digital`,
    agriText: `Productores, empresas agrícolas y de alimentos, drones, sensores, software e investigación.`,
    agriList: [`Ingreso adicional y energía para la finca`, `Ahorro de agua y cultivos más resilientes`, `Tecnología: drones, sensores, datos e IA`],
    mexicoTitle: `México tiene sol y tierra agrícola. El potencial está en unirlos.`,
    mexicoLead: `Algunos datos de contexto que motivan el trabajo de AMAYAD.`,
    stat1n: `≈ 5 kWh/m²/día`, stat1l: `Irradiación solar promedio aproximada en México, entre las más altas del mundo.`,
    stat2n: `87.9 M ha`, stat2l: `Superficie rural con uso agrícola reportada por el Censo Agropecuario 2022 (INEGI).`,
    stat3n: `1.2 – 1.8`, stat3l: `Rango típico de la Relación de Equivalencia de Tierra reportado en la literatura para sistemas agrivoltaicos bien diseñados (más de 1 = más producción total por hectárea).`,
    statsSource: `Fuentes: AMAYAD (2024), con datos de INEGI; literatura revisada en el libro «Cosechando el Sol Dos Veces». Valores orientativos; los resultados varían según el sitio.`,
    aboutEyebrow: `Sobre AMAYAD`,
    aboutTitle: `Un puente entre el sol y el campo`,
    aboutText1: `AMAYAD —Asociación Mexicana de Agrivoltaics y Agricultura Digital— es una asociación sectorial fundada en 2024 por Luis Alfonso Escobedo y Roberto Moreno Castillo. Su papel es servir de puente entre empresas de energía solar, agricultores, empresas de alimentos y de agricultura digital, academia y gobierno.`,
    aboutText2: `No somos un desarrollador ni vendemos proyectos: construimos ecosistema, compartimos conocimiento e impulsamos las condiciones para que la agrivoltaica crezca en México con buenas prácticas.`,
    missionLabel: `Misión:`,
    missionText: `promover la innovación y la tecnología en la agricultura mexicana para aumentar la producción de forma eficiente y sostenible, integrando la agricultura de precisión, las herramientas digitales y la agrivoltaica.`,
    objectivesTitle: `Objetivos de la asociación`,
    objectives: [
      { t: `Integrar agricultura y energía solar`, d: `Impulsar la adopción de sistemas agrivoltaicos en México y difundir sus beneficios de sostenibilidad y eficiencia.` },
      { t: `Fomentar la investigación y el desarrollo`, d: `Colaborar con instituciones académicas y centros de investigación para avanzar tecnologías y prácticas.` },
      { t: `Incidir en políticas públicas`, d: `Trabajar con autoridades y legisladores en políticas y regulación adecuadas para el sector.` },
      { t: `Capacitar y educar`, d: `Organizar talleres, seminarios y programas educativos sobre agrivoltaica y agricultura digital.` },
      { t: `Establecer alianzas estratégicas`, d: `Crear una red de colaboración entre agricultores, empresas solares y otros actores clave.` },
      { t: `Desarrollar proyectos piloto`, d: `Impulsar proyectos demostrativos que muestren la viabilidad y los beneficios de la agrivoltaica.` },
      { t: `Apoyar la sostenibilidad y la innovación`, d: `Promover prácticas ambientalmente responsables e innovación en la integración de agricultura y energía.` }
    ],
    committeesTitle: `Comités y grupos de trabajo`,
    committeesLead: `Los comités previstos por AMAYAD funcionarán como grupos de trabajo abiertos a los miembros. Se están conformando: puedes postularte.`,
    committeeTag: `Comité previsto`,
    committees: [
      { t: `Relaciones institucionales y asuntos internacionales`, d: `Vínculo con instituciones gubernamentales, no gubernamentales e internacionales; alianzas y financiamiento.` },
      { t: `Integración de energía solar y agricultura`, d: `Proyectos solares en sistemas agrivoltaicos, almacenamiento, compatibilidad de cultivos, salud del suelo y pastoreo.` },
      { t: `Asuntos regulatorios y buenas prácticas`, d: `Seguimiento normativo, guías de cumplimiento, buenas prácticas y propiedad intelectual.` },
      { t: `Investigación, desarrollo e inteligencia alimentaria`, d: `Experimentación, publicación de resultados, tendencias alimentarias, cadena de suministro e inocuidad.` },
      { t: `Comunicación y eventos`, d: `Relaciones públicas, redes sociales, boletines, talleres, cursos, seminarios y congreso anual.` },
      { t: `SIG e integración tecnológica`, d: `SIG, drones, sensores IoT, IA y otras tecnologías para la gestión de datos y la toma de decisiones.` }
    ],
    waysTitle: `¿Cómo quieres participar?`,
    waysLead: `Elige la puerta que mejor te queda. Todas llevan al mismo lugar: colaborar.`,
    wayMember: `Únete como miembro fundador y ayuda a definir la agenda.`,
    wayProject: `¿Tienes una idea o un terreno? Cuéntanos y buscamos con quién hacerla realidad.`,
    wayPartner: `Para instituciones y organizaciones que quieren colaborar con AMAYAD.`,
    wayWg: `Participa en un comité: regulación, tecnología, investigación y más.`
  },
  agri: {
    eyebrow: `Conocimiento`,
    title: `¿Qué es la agrivoltaica?`,
    lead: `Explicada para ambos públicos: quienes vienen del sol y quienes vienen del campo. Elige un tema.`,
    sourcesNote: `Fuentes: documentación de AMAYAD (2024) y el borrador del libro «Cosechando el Sol Dos Veces». Las cifras provienen de la literatura citada en ellos y varían según el sitio, el cultivo y el diseño.`,
    topics: [
      { id: `concept`, tab: `Concepto`, title: `La misma tierra, dos cosechas`,
        body: `<p>La agrivoltaica —también llamada agrofotovoltaica, o <em>solar sharing</em> en Japón— combina generación solar fotovoltaica y producción agrícola en la misma parcela. La clave no es la simple cercanía, sino el <b>diseño intencional</b>: la altura, la separación y la inclinación de los paneles se eligen pensando en el cultivo, el ganado o los polinizadores.</p>
<p>Parte de una observación sencilla: muchos cultivos solo aprovechan una parte de la luz que reciben. Un arreglo bien diseñado convierte ese excedente en electricidad y deja suficiente luz —y sombra útil— para el cultivo.</p>
<h3>Configuraciones comunes</h3>
<ul><li><b>Elevada (sobre pilotes):</b> paneles altos; maquinaria o ganado pasan por debajo.</li>
<li><b>Vertical bifacial:</b> hileras verticales que dejan el campo abierto entre ellas.</li>
<li><b>Entre hileras:</b> cultivos entre y bajo los paneles.</li>
<li><b>Pastoreo:</b> ovejas u otros animales bajo los paneles.</li>
<li><b>Invernadero solar:</b> módulos integrados en la cubierta.</li>
<li><b>Polinizadores:</b> vegetación que favorece la biodiversidad.</li></ul>`,
        side: `<h3>Las 5 C del éxito agrivoltaico</h3><p>Marco del estudio InSPIRE (EE. UU.):</p>
<div class="five"><div><b>Clima</b> — sol, lluvia y temperatura.</div><div><b>Configuración</b> — arreglo de paneles y cultivos.</div><div><b>Cultivos</b> — especies y prácticas.</div><div><b>Compatibilidad</b> — que energía y agricultura no choquen.</div><div><b>Colaboración</b> — agricultores, investigadores y empresas. Aquí entra AMAYAD.</div></div>` },
      { id: `benefits`, tab: `Beneficios`, title: `Más valor de la misma hectárea`,
        body: `<p>Bien diseñada, una hectárea agrivoltaica puede producir en conjunto más alimento y energía que dos hectáreas separadas. Se mide con la <b>Relación de Equivalencia de Tierra (LER)</b>: un valor mayor que 1 indica ventaja del uso combinado.</p>
<ul><li><b>Uso eficiente del suelo:</b> la literatura revisada reporta valores de LER típicamente entre 1.2 y 1.8, según cultivo, clima y diseño.</li>
<li><b>Ahorro de agua:</b> la sombra y un menor viento reducen la evapotranspiración; estudios de campo en varios climas reportan reducciones del riego del orden del 20 al 30 %.</li>
<li><b>Microclima:</b> temperaturas más moderadas a la altura del cultivo y menor estrés por calor.</li>
<li><b>Protección parcial:</b> los paneles funcionan como rompevientos y pueden dar cierta protección contra granizo (no sustituyen sistemas dedicados).</li>
<li><b>Energía limpia</b> para la finca o para la red.</li>
<li><b>Suelo y biodiversidad:</b> vegetación y polinizadores bajo los paneles.</li></ul>`,
        side: `<h3>Con honestidad</h3><p>Los resultados dependen del sitio: altura, inclinación, separación, cultivo y clima. No todos los cultivos se benefician igual. Por eso AMAYAD impulsa pilotos, datos y buenas prácticas antes que promesas.</p>` },
      { id: `farmers`, tab: `Para agricultores`, title: `Para agricultores y productores`,
        body: `<p>La agrivoltaica no busca sacar la tierra de la agricultura, sino sumarle una segunda fuente de valor.</p>
<ul><li><b>Ingreso adicional y diversificado</b> —arrendamiento, venta de energía o autoconsumo— sin abandonar la producción.</li>
<li><b>Energía para la finca:</b> bombeo y riego automatizado, iluminación, climatización de invernaderos y naves, procesamiento y empaque, cercos eléctricos, ventilación y monitoreo.</li>
<li><b>Cultivos más resilientes</b> al calor extremo y a la sequía en muchas regiones.</li>
<li><b>Menor costo de riego</b> gracias a una menor evaporación.</li></ul>`,
        side: `<h3>¿Qué cultivos se adaptan mejor?</h3><p>Referencia orientativa (contexto alemán):</p>
<ul><li><b>Alta compatibilidad:</b> lechugas y hojas verdes, espinaca, lúpulo, leguminosas, habas.</li>
<li><b>Media:</b> centeno, cebada, avena, col, chícharo, espárrago, zanahoria, rábano.</li>
<li><b>Menor:</b> trigo, maíz, calabaza, vid, girasol y muchos frutales.</li></ul>
<p>En México la compatibilidad debe validarse localmente: es una prioridad para AMAYAD.</p>` },
      { id: `solar`, tab: `Para desarrolladores solares`, title: `Para desarrolladores y empresas solares`,
        body: `<p>Para la industria solar, la agrivoltaica abre acceso a tierra sin competir con la producción de alimentos: un punto clave para la aceptación social.</p>
<ul><li><b>Nuevos sitios</b> en tierra agrícola, con un modelo que las comunidades rurales pueden respaldar.</li>
<li><b>Aliados locales:</b> productores que se vuelven socios, no solo arrendadores.</li>
<li><b>Menor costo de manejo de vegetación</b> cuando se integra el pastoreo.</li>
<li><b>Diferenciación</b> ante inversionistas y compradores de energía que valoran el impacto social y ambiental.</li>
<li><b>Regulación en construcción:</b> Alemania, Francia, Italia y Japón ya definen reglas; en México aún no existe una definición legal específica de agrivoltaica, y AMAYAD trabaja para aportar a ella.</li></ul>`,
        side: `<h3>Lo que encuentras en AMAYAD</h3><ul><li>Contacto con productores, organizaciones agrícolas y empresas de agricultura digital.</li><li>Diálogo sobre política pública y buenas prácticas.</li><li>Comités de integración solar-agrícola y regulación.</li></ul>` },
      { id: `digital`, tab: `Agricultura digital y drones`, title: `Agricultura digital y drones`,
        body: `<p>La agricultura digital integra datos, sensores y automatización para decidir mejor y desperdiciar menos. Un sitio agrivoltaico ya cuenta con electrónica, comunicaciones y monitoreo: extenderlos al cultivo de abajo es una combinación natural.</p>
<ul><li><b>Sensores IoT:</b> humedad y temperatura del suelo, estaciones meteorológicas, riego automatizado.</li>
<li><b>Drones y teledetección:</b> cámaras multiespectrales e índices como el NDVI señalan zonas con problemas antes de que sean visibles a simple vista.</li>
<li><b>SIG:</b> mapas para elegir sitios y analizar datos espaciales.</li>
<li><b>IA y gemelos digitales:</b> modelos que estiman el rendimiento bajo una configuración de paneles determinada.</li>
<li><b>Agricultura de precisión, robótica y trazabilidad</b> (por ejemplo, con blockchain).</li></ul>`,
        side: `<h3>Un solo tablero</h3><p>En un sitio bien gestionado, el responsable agrícola y el responsable solar pueden ver lado a lado la generación de energía, la humedad del suelo y la salud del cultivo, y decidir juntos. Esa es la esencia de AMAYAD: dos mundos con los mismos datos.</p>` },
      { id: `nexus`, tab: `Nexo alimento-energía-agua`, title: `El nexo alimento-energía-agua`,
        body: `<p>Tres presiones convergen sobre la misma tierra: más demanda de alimentos (la ONU proyecta alrededor de 9,700 millones de personas hacia 2050), más tierra para energía renovable y menos agua disponible en muchas regiones, incluido el altiplano mexicano.</p>
<p>Durante décadas, el campo y la energía compitieron por la misma superficie. La agrivoltaica rechaza esa disyuntiva: bien diseñada, produce alimento y electricidad a la vez y puede reducir el consumo de agua.</p>
<p>Por eso requiere colaboración entre sectores que rara vez conversaban: desarrollo solar, agricultura de producción y agricultura digital.</p>`,
        side: `<h3>Alineación con los ODS</h3><p>AMAYAD vincula su trabajo con varios Objetivos de Desarrollo Sostenible, entre ellos:</p><ul><li>ODS 2 · Hambre cero</li><li>ODS 5 · Igualdad de género</li><li>ODS 7 · Energía asequible y no contaminante</li><li>ODS 13 · Acción por el clima</li><li>ODS 15 · Vida de ecosistemas terrestres</li><li>ODS 17 · Alianzas para lograr los objetivos</li></ul>` }
    ]
  },
  tiers: {
    company_small:  { kind: `Empresa`, name: `Empresa — ventas menores a 1 millón USD`, desc: `Para empresas con ventas anuales inferiores a 1 millón de dólares.` },
    company_medium: { kind: `Empresa`, name: `Empresa — ventas de 1 a 5 millones USD`, desc: `Para empresas con ventas anuales de entre 1 y 5 millones de dólares.` },
    company_large:  { kind: `Empresa`, name: `Empresa — ventas mayores a 5 millones USD`, desc: `Para empresas con ventas anuales superiores a 5 millones de dólares.` },
    individual:     { kind: `Persona`, name: `Individual`, desc: `Para profesionales, consultores, investigadores y personas interesadas.` },
    student:        { kind: `Estudiante`, name: `Estudiante`, desc: `Para estudiantes que quieren formarse y conectar con el sector.` }
  },
  mem: {
    eyebrow: `Membresía`, title: `Elige tu nivel de membresía`,
    lead: `Cinco niveles según el tipo y el tamaño de tu organización. Todos dan acceso a la comunidad AMAYAD y a su marco de beneficios.`,
    foundingTitle: `Sé miembro fundador.`,
    foundingText: `AMAYAD está formando su primera generación de miembros: quienes se sumen ahora podrán influir en la dirección, los comités y las prioridades de la asociación.`,
    priceNote: `Cuotas anuales en dólares estadounidenses (USD), según la estructura de membresía de AMAYAD. Enviar el formulario es una solicitud: AMAYAD confirmará la admisión, la cuota vigente y la forma de pago.`,
    perYear: `año`, registerTier: `Registrarme en este nivel`,
    benefitsTitle: `Marco de beneficios`,
    benefitsLead: `Beneficios que AMAYAD se propone ofrecer a sus miembros. Se implementan de forma progresiva conforme crece la asociación.`,
    benefits: [
      { t: `Recursos y expertos`, d: `Guías de buenas prácticas, webinars, consultas con especialistas y biblioteca de estudios.` },
      { t: `Educación y networking`, d: `Talleres, seminarios, días de campo, tarifas preferentes en eventos y vínculos B2B con miembros y aliados.` },
      { t: `Representación e incidencia`, d: `Voz en temas regulatorios y legislativos, relación con autoridades y asambleas con derecho a voto.` },
      { t: `Marketing y promoción`, d: `Difusión de tu organización en redes sociales y comunicados sobre las actividades de los miembros.` },
      { t: `Comunicación e información`, d: `Noticias del sector, foros para intercambiar ideas y canales exclusivos para miembros.` },
      { t: `Beneficios económicos`, d: `Tarifas preferentes, oportunidades de negocio, directorio de miembros y marketplace sectorial.` },
      { t: `Sostenibilidad`, d: `Impulso a la resiliencia agrícola y a una transición energética sin conflictos de uso de suelo.` },
      { t: `Apoyo legal y cumplimiento`, d: `Orientación sobre cumplimiento regulatorio y talleres sobre normas locales e internacionales.` },
      { t: `Beneficios adicionales`, d: `Apoyo para acceder a financiamiento, vínculo con inversionistas, demostraciones tecnológicas, apoyo a la exportación y red bilingüe e internacional.` }
    ],
    whoTitle: `¿Quién puede ser miembro?`,
    whoList: [`Empresas solares que buscan integrarse con la agricultura`, `Fabricantes de paneles y proveedores de equipo`, `Almacenamiento de energía y empresas digitales del sector solar`, `Empresas agrícolas que buscan diversificar cultivos e ingresos`, `Empresas de sensores, software, hardware y drones`, `Investigadores, universidades y centros de investigación`, `Organizaciones gubernamentales y no gubernamentales`, `Inversionistas y financieras`, `Estudiantes`]
  },
  partners: {
    eyebrow: `Aliados`, title: `Aliados y organizaciones en conversación`,
    lead: `AMAYAD se construye en colaboración. Aquí mostramos, con transparencia, el estado de cada relación.`,
    confirmed: `Aliados`, potential: `Aliados potenciales — en conversación`, open: `Espacios disponibles`,
    note: `Solo listamos organizaciones con su autorización. «En conversación» indica un diálogo en curso, no un acuerdo formal. No usamos logotipos sin permiso por escrito.`,
    status: { partner: `Aliado`, conversation: `En conversación` },
    noneYet: `Próximamente.`, soon: `Próximamente`, slot: `Tu organización aquí`, slotCta: `Conviértete en aliado de AMAYAD →`
  },
  members: {
    eyebrow: `Directorio`, title: `Miembros de AMAYAD`,
    lead: `El directorio de miembros de la asociación. Las organizaciones aparecerán aquí una vez confirmada su membresía y su autorización para publicarlas.`,
    emptyTitle: `Sé de los primeros miembros`,
    emptyText: `El directorio está listo para recibir a la primera generación de miembros fundadores de AMAYAD. Tu organización puede ser una de las primeras en aparecer aquí.`,
    ghost: `Espacio para miembro fundador`, consentNote: `Solo publicamos miembros con su autorización expresa.`, founding: `Miembro fundador`
  },
  lib: {
    eyebrow: `Biblioteca`, title: `Biblioteca de recursos`,
    lead: `Guías, investigación, regulación, casos de estudio y publicaciones de AMAYAD. Solo incluimos recursos verificables.`,
    suggest: `Sugerir un recurso`,
    cats: { all: `Todos`, guides: `Guías`, research: `Investigación`, regulation: `Regulación`, cases: `Casos de estudio`, amayad: `Publicaciones AMAYAD` },
    status: { available: `Disponible`, forthcoming: `Próximamente` },
    open: `Abrir recurso`, soonTitle: `Próximamente`,
    soonText: `Estamos seleccionando recursos para esta categoría. ¿Conoces uno valioso? Sugiérelo.`
  },
  contact: {
    eyebrow: `Contacto`, title: `Hablemos`,
    lead: `Escríbenos para dudas, propuestas de proyecto, alianzas o para unirte a un comité.`,
    directTitle: `Correo`, directNote: `Respondemos según la disponibilidad del equipo.`, quickTitle: `Accesos rápidos`,
    subjects: { general: `Consulta general`, membership: `Membresía`, project: `Proponer un proyecto`, partner: `Ser aliado`, wg: `Unirme a un comité / grupo de trabajo`, resource: `Sugerir un recurso para la biblioteca`, press: `Prensa y medios` }
  },
  form: {
    subject: `Asunto`, name: `Nombre completo`, org: `Organización`, role: `Cargo / rol`, email: `Correo electrónico`, phone: `Teléfono`, country: `País`, sector: `Sector`,
    sectors: { solar: `Energía solar`, agriculture: `Agricultura`, digital: `Agricultura digital`, research: `Investigación / academia`, government: `Gobierno`, investor: `Inversionista / financiamiento`, other: `Otro` },
    interests: `Intereses (opcional)`,
    interestOptions: { design: `Diseño y proyectos agrivoltaicos`, digital: `Agricultura digital, drones y sensores`, policy: `Política pública y regulación`, finance: `Financiamiento y modelos de negocio`, research: `Investigación y datos`, training: `Capacitación y eventos`, networking: `Alianzas y networking` },
    message: `Mensaje`, messageOpt: `Mensaje (opcional)`,
    consent: `He leído y acepto el`, privacyLink: `aviso de privacidad`, consentShort: `Aviso de privacidad aceptado`,
    send: `Enviar mensaje`, tier: `Nivel de membresía`, choose: `Selecciona…`,
    errRequired: `Por favor completa los campos obligatorios marcados.`, errEmail: `Revisa el formato del correo electrónico.`, errConsent: `Debes aceptar el aviso de privacidad para continuar.`,
    okTitle: `¡Gracias!`, okSent: `Recibimos tu solicitud. El equipo de AMAYAD se pondrá en contacto contigo.`,
    okMailto: `Tu solicitud está lista. Para completar el envío, haz clic en el botón: se abrirá tu correo con los datos ya escritos.`,
    mailtoBtn: `Enviar por correo`, okNote: `Enviar una solicitud no implica aceptación automática; AMAYAD dará seguimiento.`
  },
  reg: { title: `Solicitud de membresía`, lead: `Completa tus datos. Puedes cambiar el nivel de membresía en el menú.`, submit: `Enviar solicitud`, mailSubject: `Solicitud de membresía` },
  privacy: {
    title: `Aviso de privacidad (versión preliminar)`,
    body: `<p class="draft">Versión preliminar, sujeta a revisión legal.</p>
<h3>Responsable</h3><p>Asociación Mexicana de Agrivoltaics y Agricultura Digital (AMAYAD), México.</p>
<h3>Datos que recabamos</h3><p>Los que nos proporcionas en los formularios: nombre, organización, cargo, correo, teléfono, país, sector, intereses y mensaje.</p>
<h3>Finalidades</h3><p>Atender tu solicitud de membresía o contacto, darle seguimiento y comunicarnos contigo sobre AMAYAD. No vendemos tus datos.</p>
<h3>Transferencias</h3><p>Podemos apoyarnos en proveedores de correo, formularios o alojamiento web, bajo obligaciones de confidencialidad.</p>
<h3>Tus derechos</h3><p>Puedes solicitar el acceso, la rectificación, la cancelación u oposición (derechos ARCO) conforme a la legislación mexicana de protección de datos personales, escribiendo a {email}.</p>
<h3>Idioma y almacenamiento local</h3><p>El sitio guarda tu idioma preferido en tu navegador (localStorage) y, en la primera visita, consulta un servicio externo de geolocalización por IP únicamente para sugerir el idioma. No usamos cookies de rastreo.</p>
<h3>Cambios</h3><p>Publicaremos cualquier actualización de este aviso en este sitio.</p>`
  },
  footer: { tagline: `Donde la energía solar y la agricultura se encuentran.`, founded: `Fundada en 2024`, privacy: `Aviso de privacidad` }
};

/* =============================== ENGLISH =============================== */
AMAYAD_I18N.en = {
  meta: { title: `AMAYAD — Mexican Association for Agrivoltaics and Digital Agriculture`,
          desc: `AMAYAD: where solar energy and agriculture meet. An association founded in 2024 in Mexico.` },
  ui: { skip: `Skip to content`, language: `Language`, sections: `Sections`, topics: `Topics`, close: `Close`, cancel: `Cancel`, locale: `en-US` },
  brand: { tagline: `Agrivoltaics + Digital Agriculture` },
  nav: { home: `Home`, agri: `What is agrivoltaics`, membership: `Membership`, partners: `Partners`, members: `Members`, library: `Library`, contact: `Contact` },
  cta: { request: `Request membership`, project: `Propose a project`, partner: `Become a partner`, wg: `Join a working group` },
  home: {
    eyebrow: `Mexican Association for Agrivoltaics and Digital Agriculture`,
    title: `Where <span class="sun">solar energy</span> and <span class="leaf">agriculture</span> meet`,
    lead: `AMAYAD brings two worlds together — the solar industry and agriculture, including digital agriculture — to collaborate, spark new ideas and build partnerships that would be hard to find any other way.`,
    cta2: `What is agrivoltaics`,
    founded: `Founded in 2024 · Mexico`,
    chipSolar: `☀ Solar energy`, chipAgri: `🌱 Agriculture & digital agri`, chipMeet: `One shared field`,
    worldsTitle: `Two worlds, one piece of land`,
    worldsLead: `Whether you come from solar or from farming, AMAYAD is where you meet the other half of the equation.`,
    solarTitle: `The solar world`,
    solarText: `Developers, EPC contractors, manufacturers, energy storage, engineering firms and investors.`,
    solarList: [`Access to land without competing with food production`, `Farming partners and community acceptance`, `Regulatory dialogue and good practice`],
    meetTitle: `Where they meet`,
    meetText: `Agrivoltaics and digital agriculture: the space where both sectors win.`,
    meetList: [`Joint projects and pilots`, `New ideas and business models`, `Technical and policy committees`, `A network that connects both sectors`],
    agriTitle: `The farming & digital agri world`,
    agriText: `Growers, agribusiness and food companies, drones, sensors, software and research.`,
    agriList: [`Extra income and on-farm energy`, `Water savings and more resilient crops`, `Technology: drones, sensors, data and AI`],
    mexicoTitle: `Mexico has sun and farmland. The opportunity is to combine them.`,
    mexicoLead: `A few context figures behind AMAYAD's work.`,
    stat1n: `≈ 5 kWh/m²/day`, stat1l: `Approximate average solar irradiance in Mexico — among the highest in the world.`,
    stat2n: `87.9 M ha`, stat2l: `Rural land in agricultural use, as reported by the 2022 Agricultural Census (INEGI).`,
    stat3n: `1.2 – 1.8`, stat3l: `Typical Land Equivalent Ratio range reported in the literature for well-designed agrivoltaic systems (above 1 = more total output per hectare).`,
    statsSource: `Sources: AMAYAD (2024), citing INEGI; literature reviewed in the book "Harvesting the Sun Twice". Indicative values; results vary by site.`,
    aboutEyebrow: `About AMAYAD`,
    aboutTitle: `A bridge between the sun and the field`,
    aboutText1: `AMAYAD — the Mexican Association for Agrivoltaics and Digital Agriculture (Asociación Mexicana de Agrivoltaics y Agricultura Digital) — is a sector association founded in 2024 by Luis Alfonso Escobedo and Roberto Moreno Castillo. It serves as a bridge between solar energy companies, farmers, food and digital agriculture companies, academia and government.`,
    aboutText2: `We are not a developer and we do not sell projects: we build an ecosystem, share knowledge and help create the conditions for agrivoltaics to grow in Mexico with good practice.`,
    missionLabel: `Mission:`,
    missionText: `to promote innovation and technology in Mexican agriculture to increase production efficiently and sustainably, bringing together precision agriculture, digital tools and agrivoltaics.`,
    objectivesTitle: `The association's objectives`,
    objectives: [
      { t: `Integrate agriculture and solar energy`, d: `Encourage the adoption of agrivoltaic systems in Mexico and communicate their sustainability and efficiency benefits.` },
      { t: `Foster research and development`, d: `Work with academic institutions and research centres to advance technologies and practices.` },
      { t: `Shape public policy`, d: `Work with officials and legislators on suitable policies and regulations for the sector.` },
      { t: `Provide training and education`, d: `Organise workshops, seminars and educational programmes on agrivoltaics and digital agriculture.` },
      { t: `Build strategic alliances`, d: `Create a collaboration network among farmers, solar companies and other key stakeholders.` },
      { t: `Develop pilot projects`, d: `Promote demonstration projects that show the viability and benefits of agrivoltaics.` },
      { t: `Support sustainability and innovation`, d: `Promote environmentally responsible practices and innovation in combining agriculture and energy.` }
    ],
    committeesTitle: `Committees and working groups`,
    committeesLead: `AMAYAD's planned committees will operate as working groups open to members. They are being formed now — you can apply.`,
    committeeTag: `Planned committee`,
    committees: [
      { t: `Institutional relations & international affairs`, d: `Relations with governmental, non-governmental and international institutions; partnerships and funding.` },
      { t: `Solar energy & agriculture integration`, d: `Solar projects in agrivoltaic systems, storage, crop compatibility, soil health and grazing.` },
      { t: `Regulatory affairs & good practice`, d: `Regulatory monitoring, compliance guidelines, good practice and intellectual property.` },
      { t: `Research, development & food intelligence`, d: `Experiments, published findings, food trends, supply chains and food safety.` },
      { t: `Communication & events`, d: `Public relations, social media, newsletters, workshops, courses, seminars and the annual congress.` },
      { t: `GIS & technology integration`, d: `GIS, drones, IoT sensors, AI and other technologies for data management and decision-making.` }
    ],
    waysTitle: `How would you like to take part?`,
    waysLead: `Pick the door that fits you best. They all lead to the same place: collaboration.`,
    wayMember: `Join as a founding member and help set the agenda.`,
    wayProject: `Have an idea or a site? Tell us and we'll help find the right people to make it happen.`,
    wayPartner: `For institutions and organisations that want to collaborate with AMAYAD.`,
    wayWg: `Join a committee: regulation, technology, research and more.`
  },
  agri: {
    eyebrow: `Knowledge`,
    title: `What is agrivoltaics?`,
    lead: `Explained for both audiences — people from solar and people from farming. Choose a topic.`,
    sourcesNote: `Sources: AMAYAD documentation (2024) and the draft book "Harvesting the Sun Twice" (Cosechando el Sol Dos Veces). Figures come from the literature cited there and vary by site, crop and design.`,
    topics: [
      { id: `concept`, tab: `Concept`, title: `The same land, two harvests`,
        body: `<p>Agrivoltaics — also called agrophotovoltaics, or <em>solar sharing</em> in Japan — combines solar photovoltaic generation and agricultural production on the same plot. What matters is not mere proximity but <b>intentional design</b>: panel height, spacing and tilt are chosen with the crop, livestock or pollinators in mind.</p>
<p>It starts from a simple observation: many crops use only part of the sunlight they receive. A well-designed array turns that surplus into electricity and still leaves enough light — and useful shade — for the crop.</p>
<h3>Common configurations</h3>
<ul><li><b>Elevated (on stilts):</b> high panels; machinery or livestock pass underneath.</li>
<li><b>Vertical bifacial:</b> vertical rows that leave the field open between them.</li>
<li><b>Inter-row:</b> crops grown between and beneath the panels.</li>
<li><b>Grazing:</b> sheep or other animals under the panels.</li>
<li><b>Solar greenhouse:</b> modules integrated into the roof.</li>
<li><b>Pollinator habitat:</b> vegetation that supports biodiversity.</li></ul>`,
        side: `<h3>The 5 Cs of agrivoltaic success</h3><p>Framework from the U.S. InSPIRE study:</p>
<div class="five"><div><b>Climate</b> — sun, rain and temperature.</div><div><b>Configuration</b> — layout of panels and crops.</div><div><b>Crops</b> — species and cultivation practices.</div><div><b>Compatibility</b> — energy and farming without conflict.</div><div><b>Collaboration</b> — farmers, researchers and companies. This is where AMAYAD comes in.</div></div>` },
      { id: `benefits`, tab: `Benefits`, title: `More value from the same hectare`,
        body: `<p>Well designed, one agrivoltaic hectare can produce more food and energy combined than two separate hectares. This is measured with the <b>Land Equivalent Ratio (LER)</b>: a value above 1 means the combined use has an advantage.</p>
<ul><li><b>Efficient land use:</b> the reviewed literature reports LER values typically between 1.2 and 1.8, depending on crop, climate and design.</li>
<li><b>Water savings:</b> shade and lower wind reduce evapotranspiration; field studies in several climates report irrigation reductions in the order of 20–30%.</li>
<li><b>Microclimate:</b> milder temperatures at crop level and less heat stress.</li>
<li><b>Partial protection:</b> panels act as windbreaks and can offer some protection from hail (not a substitute for dedicated systems).</li>
<li><b>Clean energy</b> for the farm or the grid.</li>
<li><b>Soil and biodiversity:</b> vegetation and pollinators beneath the panels.</li></ul>`,
        side: `<h3>Being honest</h3><p>Results depend on the site: height, tilt, spacing, crop and climate. Not every crop benefits equally. That is why AMAYAD favours pilots, data and good practice over promises.</p>` },
      { id: `farmers`, tab: `For farmers`, title: `For farmers and growers`,
        body: `<p>Agrivoltaics is not about taking land out of farming — it adds a second source of value.</p>
<ul><li><b>Extra, diversified income</b> — lease payments, energy sales or self-consumption — while you keep farming.</li>
<li><b>Energy for the farm:</b> pumping and automated irrigation, lighting, heating and cooling of greenhouses and barns, processing and packing, electric fencing, ventilation and monitoring.</li>
<li><b>More resilient crops</b> in the face of extreme heat and drought in many regions.</li>
<li><b>Lower irrigation costs</b> thanks to reduced evaporation.</li></ul>`,
        side: `<h3>Which crops fit best?</h3><p>Indicative reference (German context):</p>
<ul><li><b>Highly compatible:</b> lettuce and leafy greens, spinach, hops, legumes, field beans.</li>
<li><b>Moderately compatible:</b> rye, barley, oats, cabbage, peas, asparagus, carrots, radish.</li>
<li><b>Less compatible:</b> wheat, maize, pumpkin, grapes, sunflower and many fruit crops.</li></ul>
<p>In Mexico, compatibility must be validated locally — a priority for AMAYAD.</p>` },
      { id: `solar`, tab: `For solar developers`, title: `For solar developers and companies`,
        body: `<p>For the solar industry, agrivoltaics opens access to land without competing with food production — a key factor for social acceptance.</p>
<ul><li><b>New sites</b> on farmland, with a model rural communities can support.</li>
<li><b>Local allies:</b> growers who become partners, not just landlords.</li>
<li><b>Lower vegetation-management costs</b> when grazing is integrated.</li>
<li><b>Differentiation</b> with investors and energy buyers who value social and environmental impact.</li>
<li><b>Regulation in the making:</b> Germany, France, Italy and Japan already define rules; Mexico does not yet have a specific legal definition of agrivoltaics, and AMAYAD aims to contribute to one.</li></ul>`,
        side: `<h3>What you'll find at AMAYAD</h3><ul><li>Connections with growers, farming organisations and digital agriculture companies.</li><li>Dialogue on public policy and good practice.</li><li>Committees on solar–agriculture integration and regulation.</li></ul>` },
      { id: `digital`, tab: `Digital agriculture & drones`, title: `Digital agriculture and drones`,
        body: `<p>Digital agriculture combines data, sensors and automation to make better decisions and waste less. An agrivoltaic site already has electronics, communications and monitoring — extending them to the crop below is a natural fit.</p>
<ul><li><b>IoT sensors:</b> soil moisture and temperature, weather stations, automated irrigation.</li>
<li><b>Drones and remote sensing:</b> multispectral cameras and indices such as NDVI flag problem areas before they are visible to the naked eye.</li>
<li><b>GIS:</b> maps to select sites and analyse spatial data.</li>
<li><b>AI and digital twins:</b> models that estimate yield under a given panel configuration.</li>
<li><b>Precision agriculture, robotics and traceability</b> (for example, with blockchain).</li></ul>`,
        side: `<h3>One shared dashboard</h3><p>On a well-run site, the farm manager and the solar asset manager can see energy output, soil moisture and crop health side by side — and decide together. That is the essence of AMAYAD: two worlds working from the same data.</p>` },
      { id: `nexus`, tab: `Food-energy-water nexus`, title: `The food-energy-water nexus`,
        body: `<p>Three pressures converge on the same land: rising food demand (the UN projects around 9.7 billion people by 2050), more land needed for renewable energy, and less water available in many regions, including the Mexican highlands.</p>
<p>For decades, farming and energy competed for the same ground. Agrivoltaics rejects that trade-off: when well designed, it produces food and electricity at the same time and can reduce water use.</p>
<p>That is why it requires collaboration between sectors that rarely talked to each other: solar development, production agriculture and digital agriculture.</p>`,
        side: `<h3>Aligned with the SDGs</h3><p>AMAYAD links its work to several Sustainable Development Goals, including:</p><ul><li>SDG 2 · Zero hunger</li><li>SDG 5 · Gender equality</li><li>SDG 7 · Affordable and clean energy</li><li>SDG 13 · Climate action</li><li>SDG 15 · Life on land</li><li>SDG 17 · Partnerships for the goals</li></ul>` }
    ]
  },
  tiers: {
    company_small:  { kind: `Company`, name: `Company — sales below USD 1 million`, desc: `For companies with annual sales below USD 1 million.` },
    company_medium: { kind: `Company`, name: `Company — sales USD 1–5 million`, desc: `For companies with annual sales between USD 1 million and 5 million.` },
    company_large:  { kind: `Company`, name: `Company — sales above USD 5 million`, desc: `For companies with annual sales above USD 5 million.` },
    individual:     { kind: `Individual`, name: `Individual`, desc: `For professionals, consultants, researchers and interested individuals.` },
    student:        { kind: `Student`, name: `Student`, desc: `For students who want to learn and connect with the sector.` }
  },
  mem: {
    eyebrow: `Membership`, title: `Choose your membership tier`,
    lead: `Five tiers based on the type and size of your organisation. All give access to the AMAYAD community and its benefits framework.`,
    foundingTitle: `Become a founding member.`,
    foundingText: `AMAYAD is forming its first generation of members: those who join now can influence the association's direction, committees and priorities.`,
    priceNote: `Annual dues in US dollars (USD), as set out in AMAYAD's membership structure. Submitting the form is an application: AMAYAD will confirm admission, current dues and payment method.`,
    perYear: `year`, registerTier: `Register for this tier`,
    benefitsTitle: `Benefits framework`,
    benefitsLead: `The benefits AMAYAD intends to offer its members. They are being rolled out progressively as the association grows.`,
    benefits: [
      { t: `Resources and experts`, d: `Good-practice guides, webinars, expert consultations and a library of studies.` },
      { t: `Education and networking`, d: `Workshops, seminars, field days, preferential event rates and B2B connections with members and partners.` },
      { t: `Advocacy and representation`, d: `A voice on regulatory and legislative matters, relations with authorities and general assemblies with voting rights.` },
      { t: `Marketing and promotion`, d: `Promotion of your organisation on social media and press releases about members' activities.` },
      { t: `Communication and information`, d: `Sector news, forums to exchange ideas and members-only channels.` },
      { t: `Financial benefits`, d: `Preferential rates, business opportunities, a member directory and a sector marketplace.` },
      { t: `Sustainability`, d: `Support for agricultural resilience and an energy transition without land-use conflicts.` },
      { t: `Legal and compliance support`, d: `Guidance on regulatory compliance and workshops on local and international standards.` },
      { t: `Additional benefits`, d: `Help accessing funding, links with investors, technology demos, export support and a bilingual, international network.` }
    ],
    whoTitle: `Who can join?`,
    whoList: [`Solar companies looking to integrate with agriculture`, `Panel manufacturers and equipment suppliers`, `Energy storage and digital companies in the solar sector`, `Agricultural companies seeking to diversify crops and income`, `Sensor, software, hardware and drone companies`, `Researchers, universities and research centres`, `Governmental and non-governmental organisations`, `Investors and financiers`, `Students`]
  },
  partners: {
    eyebrow: `Partners`, title: `Partners and organisations in conversation`,
    lead: `AMAYAD is built through collaboration. Here we show, transparently, the status of each relationship.`,
    confirmed: `Partners`, potential: `Potential partners — in conversation`, open: `Open slots`,
    note: `We only list organisations with their permission. "In conversation" means an ongoing dialogue, not a formal agreement. We do not use logos without written permission.`,
    status: { partner: `Partner`, conversation: `In conversation` },
    noneYet: `Coming soon.`, soon: `Coming soon`, slot: `Your organisation here`, slotCta: `Become an AMAYAD partner →`
  },
  members: {
    eyebrow: `Directory`, title: `AMAYAD members`,
    lead: `The association's member directory. Organisations will appear here once their membership and permission to publish are confirmed.`,
    emptyTitle: `Be among the first members`,
    emptyText: `The directory is ready to welcome AMAYAD's first generation of founding members. Your organisation could be one of the first to appear here.`,
    ghost: `Founding member slot`, consentNote: `We only publish members with their explicit permission.`, founding: `Founding member`
  },
  lib: {
    eyebrow: `Library`, title: `Resource library`,
    lead: `Guides, research, regulation, case studies and AMAYAD publications. We only include verifiable resources.`,
    suggest: `Suggest a resource`,
    cats: { all: `All`, guides: `Guides`, research: `Research`, regulation: `Regulation`, cases: `Case studies`, amayad: `AMAYAD publications` },
    status: { available: `Available`, forthcoming: `Coming soon` },
    open: `Open resource`, soonTitle: `Coming soon`,
    soonText: `We are curating resources for this category. Know a valuable one? Suggest it.`
  },
  contact: {
    eyebrow: `Contact`, title: `Let's talk`,
    lead: `Write to us with questions, project proposals, partnership ideas or to join a committee.`,
    directTitle: `Email`, directNote: `We reply as team availability allows.`, quickTitle: `Quick links`,
    subjects: { general: `General enquiry`, membership: `Membership`, project: `Propose a project`, partner: `Become a partner`, wg: `Join a committee / working group`, resource: `Suggest a library resource`, press: `Press and media` }
  },
  form: {
    subject: `Subject`, name: `Full name`, org: `Organisation`, role: `Position / role`, email: `Email`, phone: `Phone`, country: `Country`, sector: `Sector`,
    sectors: { solar: `Solar energy`, agriculture: `Agriculture`, digital: `Digital agriculture`, research: `Research / academia`, government: `Government`, investor: `Investor / finance`, other: `Other` },
    interests: `Interests (optional)`,
    interestOptions: { design: `Agrivoltaic design and projects`, digital: `Digital agriculture, drones and sensors`, policy: `Public policy and regulation`, finance: `Finance and business models`, research: `Research and data`, training: `Training and events`, networking: `Partnerships and networking` },
    message: `Message`, messageOpt: `Message (optional)`,
    consent: `I have read and accept the`, privacyLink: `privacy notice`, consentShort: `Privacy notice accepted`,
    send: `Send message`, tier: `Membership tier`, choose: `Select…`,
    errRequired: `Please complete the required fields.`, errEmail: `Please check the email format.`, errConsent: `You must accept the privacy notice to continue.`,
    okTitle: `Thank you!`, okSent: `We have received your request. The AMAYAD team will be in touch.`,
    okMailto: `Your request is ready. To complete it, click the button: your email app will open with the details already filled in.`,
    mailtoBtn: `Send by email`, okNote: `Submitting a request does not imply automatic acceptance; AMAYAD will follow up.`
  },
  reg: { title: `Membership application`, lead: `Fill in your details. You can change the membership tier in the menu.`, submit: `Send application`, mailSubject: `Membership application` },
  privacy: {
    title: `Privacy notice (draft)`,
    body: `<p class="draft">Draft version, subject to legal review.</p>
<h3>Data controller</h3><p>Asociación Mexicana de Agrivoltaics y Agricultura Digital (AMAYAD), Mexico.</p>
<h3>Data we collect</h3><p>What you provide in our forms: name, organisation, position, email, phone, country, sector, interests and message.</p>
<h3>Purposes</h3><p>To handle your membership or contact request, follow up and communicate with you about AMAYAD. We do not sell your data.</p>
<h3>Transfers</h3><p>We may rely on email, form or web-hosting providers bound by confidentiality obligations.</p>
<h3>Your rights</h3><p>You may request access, rectification, cancellation or objection (ARCO rights) under Mexican personal data protection law by writing to {email}.</p>
<h3>Language and local storage</h3><p>The site stores your preferred language in your browser (localStorage) and, on your first visit, queries an external IP geolocation service solely to suggest a language. We do not use tracking cookies.</p>
<h3>Changes</h3><p>Any updates to this notice will be published on this site.</p>`
  },
  footer: { tagline: `Where solar energy and agriculture meet.`, founded: `Founded in 2024`, privacy: `Privacy notice` }
};

/* =============================== FRANÇAIS =============================== */
AMAYAD_I18N.fr = {
  meta: { title: `AMAYAD — Association mexicaine d'agrivoltaïsme et d'agriculture numérique`,
          desc: `AMAYAD : là où l'énergie solaire et l'agriculture se rencontrent. Association fondée en 2024 au Mexique.` },
  ui: { skip: `Aller au contenu`, language: `Langue`, sections: `Sections`, topics: `Thèmes`, close: `Fermer`, cancel: `Annuler`, locale: `fr-FR` },
  brand: { tagline: `Agrivoltaïsme + Agriculture numérique` },
  nav: { home: `Accueil`, agri: `L'agrivoltaïsme`, membership: `Adhésion`, partners: `Partenaires`, members: `Membres`, library: `Bibliothèque`, contact: `Contact` },
  cta: { request: `Demander l'adhésion`, project: `Proposer un projet`, partner: `Devenir partenaire`, wg: `Rejoindre un groupe de travail` },
  home: {
    eyebrow: `Association mexicaine d'agrivoltaïsme et d'agriculture numérique`,
    title: `Là où l'<span class="sun">énergie solaire</span> et l'<span class="leaf">agriculture</span> se rencontrent`,
    lead: `AMAYAD réunit deux mondes — l'industrie solaire et l'agriculture, y compris l'agriculture numérique — pour collaborer, faire naître de nouvelles idées et nouer des partenariats difficiles à trouver autrement.`,
    cta2: `Qu'est-ce que l'agrivoltaïsme ?`,
    founded: `Fondée en 2024 · Mexique`,
    chipSolar: `☀ Énergie solaire`, chipAgri: `🌱 Agriculture et agri numérique`, chipMeet: `Un même terrain`,
    worldsTitle: `Deux mondes, une même terre`,
    worldsLead: `Que vous veniez du solaire ou de l'agriculture, AMAYAD est l'endroit où vous rencontrez l'autre moitié de l'équation.`,
    solarTitle: `Le monde solaire`,
    solarText: `Développeurs, EPC, fabricants, stockage d'énergie, bureaux d'ingénierie et investisseurs.`,
    solarList: [`Accès au foncier sans concurrencer la production alimentaire`, `Partenaires agricoles et acceptation locale`, `Dialogue réglementaire et bonnes pratiques`],
    meetTitle: `Là où ils se rencontrent`,
    meetText: `L'agrivoltaïsme et l'agriculture numérique : l'espace où les deux secteurs gagnent.`,
    meetList: [`Projets communs et pilotes`, `Nouvelles idées et nouveaux modèles économiques`, `Comités techniques et de politiques publiques`, `Un réseau qui relie les deux secteurs`],
    agriTitle: `Le monde agricole et agri numérique`,
    agriText: `Producteurs, entreprises agricoles et agroalimentaires, drones, capteurs, logiciels et recherche.`,
    agriList: [`Revenu complémentaire et énergie pour l'exploitation`, `Économies d'eau et cultures plus résilientes`, `Technologie : drones, capteurs, données et IA`],
    mexicoTitle: `Le Mexique a du soleil et des terres agricoles. Tout l'enjeu est de les réunir.`,
    mexicoLead: `Quelques chiffres de contexte qui motivent le travail d'AMAYAD.`,
    stat1n: `≈ 5 kWh/m²/jour`, stat1l: `Irradiation solaire moyenne approximative au Mexique, parmi les plus élevées au monde.`,
    stat2n: `87,9 M ha`, stat2l: `Surface rurale à usage agricole selon le recensement agricole 2022 (INEGI).`,
    stat3n: `1,2 – 1,8`, stat3l: `Fourchette typique du ratio de surface équivalente (LER) rapportée dans la littérature pour des systèmes agrivoltaïques bien conçus (au-dessus de 1 = davantage de production totale par hectare).`,
    statsSource: `Sources : AMAYAD (2024), citant l'INEGI ; littérature analysée dans le livre « Cosechando el Sol Dos Veces » (Récolter le soleil deux fois). Valeurs indicatives ; les résultats varient selon le site.`,
    aboutEyebrow: `À propos d'AMAYAD`,
    aboutTitle: `Un pont entre le soleil et les champs`,
    aboutText1: `AMAYAD — Asociación Mexicana de Agrivoltaics y Agricultura Digital (Association mexicaine d'agrivoltaïsme et d'agriculture numérique) — est une association sectorielle fondée en 2024 par Luis Alfonso Escobedo et Roberto Moreno Castillo. Elle sert de pont entre les entreprises solaires, les agriculteurs, les entreprises agroalimentaires et d'agriculture numérique, le monde académique et les pouvoirs publics.`,
    aboutText2: `Nous ne sommes pas un développeur et ne vendons pas de projets : nous construisons un écosystème, partageons des connaissances et contribuons à créer les conditions d'un essor de l'agrivoltaïsme au Mexique, fondé sur les bonnes pratiques.`,
    missionLabel: `Mission :`,
    missionText: `promouvoir l'innovation et la technologie dans l'agriculture mexicaine afin d'accroître la production de manière efficace et durable, en réunissant agriculture de précision, outils numériques et agrivoltaïsme.`,
    objectivesTitle: `Objectifs de l'association`,
    objectives: [
      { t: `Intégrer agriculture et énergie solaire`, d: `Encourager l'adoption de systèmes agrivoltaïques au Mexique et faire connaître leurs bénéfices en matière de durabilité et d'efficacité.` },
      { t: `Favoriser la recherche et le développement`, d: `Collaborer avec les établissements universitaires et les centres de recherche pour faire progresser technologies et pratiques.` },
      { t: `Contribuer aux politiques publiques`, d: `Travailler avec les autorités et les législateurs à des politiques et réglementations adaptées au secteur.` },
      { t: `Former et sensibiliser`, d: `Organiser des ateliers, séminaires et programmes éducatifs sur l'agrivoltaïsme et l'agriculture numérique.` },
      { t: `Nouer des alliances stratégiques`, d: `Créer un réseau de collaboration entre agriculteurs, entreprises solaires et autres acteurs clés.` },
      { t: `Développer des projets pilotes`, d: `Promouvoir des projets de démonstration qui montrent la viabilité et les bénéfices de l'agrivoltaïsme.` },
      { t: `Soutenir la durabilité et l'innovation`, d: `Promouvoir des pratiques respectueuses de l'environnement et l'innovation dans l'association de l'agriculture et de l'énergie.` }
    ],
    committeesTitle: `Comités et groupes de travail`,
    committeesLead: `Les comités prévus par AMAYAD fonctionneront comme des groupes de travail ouverts aux membres. Ils sont en cours de constitution : vous pouvez candidater.`,
    committeeTag: `Comité prévu`,
    committees: [
      { t: `Relations institutionnelles et affaires internationales`, d: `Liens avec les institutions publiques, non gouvernementales et internationales ; partenariats et financements.` },
      { t: `Intégration de l'énergie solaire et de l'agriculture`, d: `Projets solaires agrivoltaïques, stockage, compatibilité des cultures, santé des sols et pâturage.` },
      { t: `Affaires réglementaires et bonnes pratiques`, d: `Veille réglementaire, guides de conformité, bonnes pratiques et propriété intellectuelle.` },
      { t: `Recherche, développement et intelligence alimentaire`, d: `Expérimentations, publication de résultats, tendances alimentaires, chaînes d'approvisionnement et sécurité sanitaire.` },
      { t: `Communication et événements`, d: `Relations publiques, réseaux sociaux, lettres d'information, ateliers, formations, séminaires et congrès annuel.` },
      { t: `SIG et intégration technologique`, d: `SIG, drones, capteurs IoT, IA et autres technologies pour la gestion des données et la prise de décision.` }
    ],
    waysTitle: `Comment souhaitez-vous participer ?`,
    waysLead: `Choisissez la porte qui vous convient. Elles mènent toutes au même endroit : la collaboration.`,
    wayMember: `Rejoignez-nous comme membre fondateur et contribuez à définir l'agenda.`,
    wayProject: `Vous avez une idée ou un terrain ? Parlez-nous-en et nous chercherons avec qui la concrétiser.`,
    wayPartner: `Pour les institutions et organisations qui souhaitent collaborer avec AMAYAD.`,
    wayWg: `Participez à un comité : réglementation, technologie, recherche et plus encore.`
  },
  agri: {
    eyebrow: `Connaissances`,
    title: `Qu'est-ce que l'agrivoltaïsme ?`,
    lead: `Expliqué pour les deux publics : ceux qui viennent du solaire et ceux qui viennent des champs. Choisissez un thème.`,
    sourcesNote: `Sources : documentation d'AMAYAD (2024) et le manuscrit du livre « Cosechando el Sol Dos Veces ». Les chiffres proviennent de la littérature qui y est citée et varient selon le site, la culture et la conception.`,
    topics: [
      { id: `concept`, tab: `Concept`, title: `Une même terre, deux récoltes`,
        body: `<p>L'agrivoltaïsme — aussi appelé agrophotovoltaïsme, ou <em>solar sharing</em> au Japon — associe production d'électricité photovoltaïque et production agricole sur une même parcelle. L'essentiel n'est pas la simple proximité, mais une <b>conception intentionnelle</b> : la hauteur, l'espacement et l'inclinaison des panneaux sont choisis en fonction de la culture, du bétail ou des pollinisateurs.</p>
<p>Le point de départ est simple : de nombreuses cultures n'utilisent qu'une partie de la lumière qu'elles reçoivent. Une installation bien conçue transforme ce surplus en électricité tout en laissant assez de lumière — et d'ombre utile — à la culture.</p>
<h3>Configurations courantes</h3>
<ul><li><b>Surélevée (sur pieux) :</b> panneaux hauts ; machines ou animaux passent dessous.</li>
<li><b>Verticale bifaciale :</b> rangées verticales qui laissent le champ ouvert entre elles.</li>
<li><b>Inter-rangs :</b> cultures entre et sous les panneaux.</li>
<li><b>Pâturage :</b> moutons ou autres animaux sous les panneaux.</li>
<li><b>Serre photovoltaïque :</b> modules intégrés à la toiture.</li>
<li><b>Pollinisateurs :</b> végétation favorable à la biodiversité.</li></ul>`,
        side: `<h3>Les 5 C de la réussite agrivoltaïque</h3><p>Cadre issu de l'étude américaine InSPIRE :</p>
<div class="five"><div><b>Climat</b> — soleil, pluie et température.</div><div><b>Configuration</b> — disposition des panneaux et des cultures.</div><div><b>Cultures</b> — espèces et pratiques culturales.</div><div><b>Compatibilité</b> — énergie et agriculture sans conflit.</div><div><b>Collaboration</b> — agriculteurs, chercheurs et entreprises. C'est là qu'intervient AMAYAD.</div></div>` },
      { id: `benefits`, tab: `Bénéfices`, title: `Plus de valeur sur le même hectare`,
        body: `<p>Bien conçu, un hectare agrivoltaïque peut produire au total plus de nourriture et d'énergie que deux hectares séparés. On le mesure avec le <b>ratio de surface équivalente (LER)</b> : une valeur supérieure à 1 indique un avantage de l'usage combiné.</p>
<ul><li><b>Usage efficace du sol :</b> la littérature analysée rapporte des LER généralement compris entre 1,2 et 1,8 selon la culture, le climat et la conception.</li>
<li><b>Économies d'eau :</b> l'ombre et un vent plus faible réduisent l'évapotranspiration ; des études de terrain sous plusieurs climats font état de réductions de l'irrigation de l'ordre de 20 à 30 %.</li>
<li><b>Microclimat :</b> températures plus modérées au niveau de la culture et moins de stress thermique.</li>
<li><b>Protection partielle :</b> les panneaux font office de brise-vent et peuvent offrir une certaine protection contre la grêle (sans remplacer des systèmes dédiés).</li>
<li><b>Énergie propre</b> pour l'exploitation ou le réseau.</li>
<li><b>Sol et biodiversité :</b> végétation et pollinisateurs sous les panneaux.</li></ul>`,
        side: `<h3>En toute honnêteté</h3><p>Les résultats dépendent du site : hauteur, inclinaison, espacement, culture et climat. Toutes les cultures n'en bénéficient pas de la même façon. C'est pourquoi AMAYAD privilégie les projets pilotes, les données et les bonnes pratiques plutôt que les promesses.</p>` },
      { id: `farmers`, tab: `Pour les agriculteurs`, title: `Pour les agriculteurs et producteurs`,
        body: `<p>L'agrivoltaïsme ne vise pas à retirer des terres à l'agriculture, mais à y ajouter une deuxième source de valeur.</p>
<ul><li><b>Un revenu complémentaire et diversifié</b> — loyer, vente d'énergie ou autoconsommation — sans abandonner la production.</li>
<li><b>De l'énergie pour l'exploitation :</b> pompage et irrigation automatisée, éclairage, chauffage et refroidissement des serres et bâtiments, transformation et conditionnement, clôtures électriques, ventilation et suivi.</li>
<li><b>Des cultures plus résilientes</b> face aux fortes chaleurs et à la sécheresse dans de nombreuses régions.</li>
<li><b>Des coûts d'irrigation réduits</b> grâce à une moindre évaporation.</li></ul>`,
        side: `<h3>Quelles cultures s'y prêtent le mieux ?</h3><p>Référence indicative (contexte allemand) :</p>
<ul><li><b>Très compatibles :</b> salades et légumes-feuilles, épinard, houblon, légumineuses, féverole.</li>
<li><b>Moyennement compatibles :</b> seigle, orge, avoine, chou, pois, asperge, carotte, radis.</li>
<li><b>Peu compatibles :</b> blé, maïs, courge, vigne, tournesol et de nombreux fruitiers.</li></ul>
<p>Au Mexique, la compatibilité doit être validée localement : c'est une priorité pour AMAYAD.</p>` },
      { id: `solar`, tab: `Pour les développeurs solaires`, title: `Pour les développeurs et entreprises solaires`,
        body: `<p>Pour l'industrie solaire, l'agrivoltaïsme ouvre l'accès au foncier sans concurrencer la production alimentaire — un facteur clé d'acceptation sociale.</p>
<ul><li><b>De nouveaux sites</b> sur terres agricoles, avec un modèle que les communautés rurales peuvent soutenir.</li>
<li><b>Des alliés locaux :</b> des producteurs qui deviennent des partenaires, et pas seulement des bailleurs.</li>
<li><b>Des coûts d'entretien de la végétation réduits</b> lorsque le pâturage est intégré.</li>
<li><b>Une différenciation</b> auprès des investisseurs et des acheteurs d'énergie attentifs à l'impact social et environnemental.</li>
<li><b>Une réglementation en construction :</b> l'Allemagne, la France, l'Italie et le Japon ont déjà fixé des règles ; le Mexique ne dispose pas encore d'une définition juridique spécifique de l'agrivoltaïsme, et AMAYAD souhaite y contribuer.</li></ul>`,
        side: `<h3>Ce que vous trouverez chez AMAYAD</h3><ul><li>Des contacts avec des producteurs, des organisations agricoles et des entreprises d'agriculture numérique.</li><li>Un dialogue sur les politiques publiques et les bonnes pratiques.</li><li>Des comités sur l'intégration solaire-agricole et la réglementation.</li></ul>` },
      { id: `digital`, tab: `Agriculture numérique et drones`, title: `Agriculture numérique et drones`,
        body: `<p>L'agriculture numérique associe données, capteurs et automatisation pour mieux décider et moins gaspiller. Un site agrivoltaïque dispose déjà d'électronique, de communications et de supervision : les étendre à la culture située dessous est une évidence.</p>
<ul><li><b>Capteurs IoT :</b> humidité et température du sol, stations météo, irrigation automatisée.</li>
<li><b>Drones et télédétection :</b> caméras multispectrales et indices comme le NDVI signalent les zones à problème avant qu'elles ne soient visibles à l'œil nu.</li>
<li><b>SIG :</b> cartes pour choisir les sites et analyser les données spatiales.</li>
<li><b>IA et jumeaux numériques :</b> modèles qui estiment le rendement pour une configuration de panneaux donnée.</li>
<li><b>Agriculture de précision, robotique et traçabilité</b> (par exemple avec la blockchain).</li></ul>`,
        side: `<h3>Un seul tableau de bord</h3><p>Sur un site bien géré, le responsable agricole et le gestionnaire de l'actif solaire voient côte à côte la production d'énergie, l'humidité du sol et la santé des cultures — et décident ensemble. C'est l'essence d'AMAYAD : deux mondes qui partagent les mêmes données.</p>` },
      { id: `nexus`, tab: `Nexus alimentation-énergie-eau`, title: `Le nexus alimentation-énergie-eau`,
        body: `<p>Trois pressions convergent sur la même terre : une demande alimentaire croissante (l'ONU prévoit environ 9,7 milliards d'habitants d'ici 2050), davantage de terres nécessaires aux énergies renouvelables et moins d'eau disponible dans de nombreuses régions, dont les hauts plateaux mexicains.</p>
<p>Pendant des décennies, agriculture et énergie se sont disputé les mêmes surfaces. L'agrivoltaïsme refuse ce dilemme : bien conçu, il produit à la fois de la nourriture et de l'électricité et peut réduire la consommation d'eau.</p>
<p>C'est pourquoi il exige une collaboration entre des secteurs qui se parlaient rarement : le développement solaire, l'agriculture de production et l'agriculture numérique.</p>`,
        side: `<h3>En phase avec les ODD</h3><p>AMAYAD relie son action à plusieurs Objectifs de développement durable, notamment :</p><ul><li>ODD 2 · Faim « zéro »</li><li>ODD 5 · Égalité entre les sexes</li><li>ODD 7 · Énergie propre et d'un coût abordable</li><li>ODD 13 · Lutte contre les changements climatiques</li><li>ODD 15 · Vie terrestre</li><li>ODD 17 · Partenariats pour la réalisation des objectifs</li></ul>` }
    ]
  },
  tiers: {
    company_small:  { kind: `Entreprise`, name: `Entreprise — CA inférieur à 1 million USD`, desc: `Pour les entreprises dont le chiffre d'affaires annuel est inférieur à 1 million de dollars.` },
    company_medium: { kind: `Entreprise`, name: `Entreprise — CA de 1 à 5 millions USD`, desc: `Pour les entreprises dont le chiffre d'affaires annuel est compris entre 1 et 5 millions de dollars.` },
    company_large:  { kind: `Entreprise`, name: `Entreprise — CA supérieur à 5 millions USD`, desc: `Pour les entreprises dont le chiffre d'affaires annuel dépasse 5 millions de dollars.` },
    individual:     { kind: `Particulier`, name: `Individuel`, desc: `Pour les professionnels, consultants, chercheurs et personnes intéressées.` },
    student:        { kind: `Étudiant`, name: `Étudiant`, desc: `Pour les étudiants qui souhaitent se former et entrer en contact avec le secteur.` }
  },
  mem: {
    eyebrow: `Adhésion`, title: `Choisissez votre niveau d'adhésion`,
    lead: `Cinq niveaux selon le type et la taille de votre organisation. Tous donnent accès à la communauté AMAYAD et à son cadre d'avantages.`,
    foundingTitle: `Devenez membre fondateur.`,
    foundingText: `AMAYAD constitue sa première génération de membres : ceux qui nous rejoignent maintenant pourront influencer l'orientation, les comités et les priorités de l'association.`,
    priceNote: `Cotisations annuelles en dollars américains (USD), selon la structure d'adhésion d'AMAYAD. L'envoi du formulaire constitue une demande : AMAYAD confirmera l'admission, la cotisation en vigueur et le mode de paiement.`,
    perYear: `an`, registerTier: `M'inscrire à ce niveau`,
    benefitsTitle: `Cadre d'avantages`,
    benefitsLead: `Les avantages qu'AMAYAD entend offrir à ses membres. Ils sont mis en place progressivement, au rythme de la croissance de l'association.`,
    benefits: [
      { t: `Ressources et experts`, d: `Guides de bonnes pratiques, webinaires, consultations d'experts et bibliothèque d'études.` },
      { t: `Formation et réseautage`, d: `Ateliers, séminaires, journées de terrain, tarifs préférentiels aux événements et relations B2B avec membres et partenaires.` },
      { t: `Représentation et plaidoyer`, d: `Une voix sur les questions réglementaires et législatives, des relations avec les autorités et des assemblées générales avec droit de vote.` },
      { t: `Marketing et promotion`, d: `Mise en avant de votre organisation sur les réseaux sociaux et communiqués sur les activités des membres.` },
      { t: `Communication et information`, d: `Actualités du secteur, forums d'échange et canaux réservés aux membres.` },
      { t: `Avantages économiques`, d: `Tarifs préférentiels, opportunités d'affaires, annuaire des membres et place de marché sectorielle.` },
      { t: `Durabilité`, d: `Soutien à la résilience agricole et à une transition énergétique sans conflit d'usage des sols.` },
      { t: `Appui juridique et conformité`, d: `Orientation sur la conformité réglementaire et ateliers sur les normes locales et internationales.` },
      { t: `Avantages supplémentaires`, d: `Aide à l'accès aux financements, mise en relation avec des investisseurs, démonstrations technologiques, soutien à l'export et réseau bilingue et international.` }
    ],
    whoTitle: `Qui peut adhérer ?`,
    whoList: [`Entreprises solaires souhaitant s'intégrer à l'agriculture`, `Fabricants de panneaux et fournisseurs d'équipements`, `Stockage d'énergie et entreprises numériques du secteur solaire`, `Entreprises agricoles souhaitant diversifier cultures et revenus`, `Entreprises de capteurs, logiciels, matériel et drones`, `Chercheurs, universités et centres de recherche`, `Organisations gouvernementales et non gouvernementales`, `Investisseurs et financeurs`, `Étudiants`]
  },
  partners: {
    eyebrow: `Partenaires`, title: `Partenaires et organisations en discussion`,
    lead: `AMAYAD se construit dans la collaboration. Nous indiquons ici, en toute transparence, l'état de chaque relation.`,
    confirmed: `Partenaires`, potential: `Partenaires potentiels — en discussion`, open: `Places disponibles`,
    note: `Nous ne mentionnons que les organisations qui l'ont autorisé. « En discussion » signifie un dialogue en cours, et non un accord formel. Nous n'utilisons aucun logo sans autorisation écrite.`,
    status: { partner: `Partenaire`, conversation: `En discussion` },
    noneYet: `Prochainement.`, soon: `Prochainement`, slot: `Votre organisation ici`, slotCta: `Devenez partenaire d'AMAYAD →`
  },
  members: {
    eyebrow: `Annuaire`, title: `Membres d'AMAYAD`,
    lead: `L'annuaire des membres de l'association. Les organisations y figureront une fois leur adhésion et leur autorisation de publication confirmées.`,
    emptyTitle: `Soyez parmi les premiers membres`,
    emptyText: `L'annuaire est prêt à accueillir la première génération de membres fondateurs d'AMAYAD. Votre organisation peut être l'une des premières à y figurer.`,
    ghost: `Place de membre fondateur`, consentNote: `Nous ne publions que les membres ayant donné leur autorisation expresse.`, founding: `Membre fondateur`
  },
  lib: {
    eyebrow: `Bibliothèque`, title: `Bibliothèque de ressources`,
    lead: `Guides, recherche, réglementation, études de cas et publications d'AMAYAD. Nous n'incluons que des ressources vérifiables.`,
    suggest: `Suggérer une ressource`,
    cats: { all: `Toutes`, guides: `Guides`, research: `Recherche`, regulation: `Réglementation`, cases: `Études de cas`, amayad: `Publications AMAYAD` },
    status: { available: `Disponible`, forthcoming: `Prochainement` },
    open: `Ouvrir la ressource`, soonTitle: `Prochainement`,
    soonText: `Nous sélectionnons des ressources pour cette catégorie. Vous en connaissez une utile ? Suggérez-la.`
  },
  contact: {
    eyebrow: `Contact`, title: `Parlons-en`,
    lead: `Écrivez-nous pour vos questions, propositions de projet, idées de partenariat ou pour rejoindre un comité.`,
    directTitle: `E-mail`, directNote: `Nous répondons selon la disponibilité de l'équipe.`, quickTitle: `Accès rapides`,
    subjects: { general: `Demande générale`, membership: `Adhésion`, project: `Proposer un projet`, partner: `Devenir partenaire`, wg: `Rejoindre un comité / groupe de travail`, resource: `Suggérer une ressource`, press: `Presse et médias` }
  },
  form: {
    subject: `Objet`, name: `Nom complet`, org: `Organisation`, role: `Fonction / rôle`, email: `E-mail`, phone: `Téléphone`, country: `Pays`, sector: `Secteur`,
    sectors: { solar: `Énergie solaire`, agriculture: `Agriculture`, digital: `Agriculture numérique`, research: `Recherche / université`, government: `Pouvoirs publics`, investor: `Investisseur / financement`, other: `Autre` },
    interests: `Centres d'intérêt (facultatif)`,
    interestOptions: { design: `Conception et projets agrivoltaïques`, digital: `Agriculture numérique, drones et capteurs`, policy: `Politiques publiques et réglementation`, finance: `Financement et modèles économiques`, research: `Recherche et données`, training: `Formation et événements`, networking: `Partenariats et réseautage` },
    message: `Message`, messageOpt: `Message (facultatif)`,
    consent: `J'ai lu et j'accepte la`, privacyLink: `politique de confidentialité`, consentShort: `Politique de confidentialité acceptée`,
    send: `Envoyer le message`, tier: `Niveau d'adhésion`, choose: `Sélectionner…`,
    errRequired: `Veuillez remplir les champs obligatoires.`, errEmail: `Veuillez vérifier le format de l'adresse e-mail.`, errConsent: `Vous devez accepter la politique de confidentialité pour continuer.`,
    okTitle: `Merci !`, okSent: `Nous avons bien reçu votre demande. L'équipe d'AMAYAD vous contactera.`,
    okMailto: `Votre demande est prête. Pour l'envoyer, cliquez sur le bouton : votre messagerie s'ouvrira avec les informations déjà saisies.`,
    mailtoBtn: `Envoyer par e-mail`, okNote: `L'envoi d'une demande n'implique pas une acceptation automatique ; AMAYAD assurera le suivi.`
  },
  reg: { title: `Demande d'adhésion`, lead: `Renseignez vos coordonnées. Vous pouvez changer de niveau d'adhésion dans le menu.`, submit: `Envoyer la demande`, mailSubject: `Demande d'adhésion` },
  privacy: {
    title: `Politique de confidentialité (projet)`,
    body: `<p class="draft">Version provisoire, soumise à validation juridique.</p>
<h3>Responsable du traitement</h3><p>Asociación Mexicana de Agrivoltaics y Agricultura Digital (AMAYAD), Mexique.</p>
<h3>Données collectées</h3><p>Celles que vous indiquez dans les formulaires : nom, organisation, fonction, e-mail, téléphone, pays, secteur, centres d'intérêt et message.</p>
<h3>Finalités</h3><p>Traiter votre demande d'adhésion ou de contact, en assurer le suivi et communiquer avec vous au sujet d'AMAYAD. Nous ne vendons pas vos données.</p>
<h3>Transferts</h3><p>Nous pouvons faire appel à des prestataires de messagerie, de formulaires ou d'hébergement web, soumis à des obligations de confidentialité.</p>
<h3>Vos droits</h3><p>Vous pouvez demander l'accès, la rectification, l'effacement ou vous opposer au traitement (droits ARCO) conformément à la législation mexicaine sur la protection des données personnelles, en écrivant à {email}.</p>
<h3>Langue et stockage local</h3><p>Le site enregistre votre langue préférée dans votre navigateur (localStorage) et, lors de votre première visite, interroge un service externe de géolocalisation IP uniquement pour suggérer une langue. Nous n'utilisons pas de cookies de suivi.</p>
<h3>Modifications</h3><p>Toute mise à jour de cette politique sera publiée sur ce site.</p>`
  },
  footer: { tagline: `Là où l'énergie solaire et l'agriculture se rencontrent.`, founded: `Fondée en 2024`, privacy: `Politique de confidentialité` }
};

/* =============================== DEUTSCH =============================== */
AMAYAD_I18N.de = {
  meta: { title: `AMAYAD — Mexikanischer Verband für Agri-Photovoltaik und digitale Landwirtschaft`,
          desc: `AMAYAD: Wo Solarenergie und Landwirtschaft zusammenkommen. Ein 2024 in Mexiko gegründeter Verband.` },
  ui: { skip: `Zum Inhalt springen`, language: `Sprache`, sections: `Bereiche`, topics: `Themen`, close: `Schließen`, cancel: `Abbrechen`, locale: `de-DE` },
  brand: { tagline: `Agri-PV + Digitale Landwirtschaft` },
  nav: { home: `Start`, agri: `Was ist Agri-PV?`, membership: `Mitgliedschaft`, partners: `Partner`, members: `Mitglieder`, library: `Bibliothek`, contact: `Kontakt` },
  cta: { request: `Mitgliedschaft beantragen`, project: `Projekt vorschlagen`, partner: `Partner werden`, wg: `Arbeitsgruppe beitreten` },
  home: {
    eyebrow: `Mexikanischer Verband für Agri-Photovoltaik und digitale Landwirtschaft`,
    title: `Wo <span class="sun">Solarenergie</span> und <span class="leaf">Landwirtschaft</span> zusammenkommen`,
    lead: `AMAYAD bringt zwei Welten zusammen — die Solarbranche und die Landwirtschaft, einschließlich der digitalen Landwirtschaft —, um gemeinsam neue Ideen zu entwickeln und Partnerschaften zu knüpfen, die auf anderem Weg kaum entstehen würden.`,
    cta2: `Was ist Agri-PV?`,
    founded: `Gegründet 2024 · Mexiko`,
    chipSolar: `☀ Solarenergie`, chipAgri: `🌱 Landwirtschaft & Digital-Agrar`, chipMeet: `Eine gemeinsame Fläche`,
    worldsTitle: `Zwei Welten, eine Fläche`,
    worldsLead: `Ob Sie aus der Solarbranche oder aus der Landwirtschaft kommen: Bei AMAYAD treffen Sie die andere Hälfte der Gleichung.`,
    solarTitle: `Die Solarwelt`,
    solarText: `Projektentwickler, EPC-Unternehmen, Hersteller, Energiespeicher, Ingenieurbüros und Investoren.`,
    solarList: [`Zugang zu Flächen ohne Konkurrenz zur Nahrungsmittelproduktion`, `Landwirtschaftliche Partner und Akzeptanz vor Ort`, `Regulatorischer Dialog und gute Praxis`],
    meetTitle: `Wo sie sich treffen`,
    meetText: `Agri-PV und digitale Landwirtschaft: der Raum, in dem beide Branchen gewinnen.`,
    meetList: [`Gemeinsame Projekte und Pilotanlagen`, `Neue Ideen und Geschäftsmodelle`, `Fach- und Politikkomitees`, `Ein Netzwerk, das beide Branchen verbindet`],
    agriTitle: `Die Agrar- & Digital-Agrar-Welt`,
    agriText: `Landwirte, Agrar- und Lebensmittelunternehmen, Drohnen, Sensorik, Software und Forschung.`,
    agriList: [`Zusätzliches Einkommen und Energie für den Betrieb`, `Wassereinsparung und widerstandsfähigere Kulturen`, `Technologie: Drohnen, Sensoren, Daten und KI`],
    mexicoTitle: `Mexiko hat Sonne und Agrarflächen. Die Chance liegt darin, beides zu verbinden.`,
    mexicoLead: `Einige Kontextzahlen, die die Arbeit von AMAYAD begründen.`,
    stat1n: `≈ 5 kWh/m²/Tag`, stat1l: `Ungefähre durchschnittliche Sonneneinstrahlung in Mexiko — eine der höchsten weltweit.`,
    stat2n: `87,9 Mio. ha`, stat2l: `Ländliche Fläche in landwirtschaftlicher Nutzung laut Agrarzensus 2022 (INEGI).`,
    stat3n: `1,2 – 1,8`, stat3l: `Typische Spanne des Land Equivalent Ratio (LER), die in der Literatur für gut geplante Agri-PV-Anlagen berichtet wird (über 1 = mehr Gesamtertrag pro Hektar).`,
    statsSource: `Quellen: AMAYAD (2024) mit Daten von INEGI; im Buch „Cosechando el Sol Dos Veces“ (Die Sonne zweimal ernten) ausgewertete Literatur. Richtwerte; die Ergebnisse variieren je nach Standort.`,
    aboutEyebrow: `Über AMAYAD`,
    aboutTitle: `Eine Brücke zwischen Sonne und Feld`,
    aboutText1: `AMAYAD — Asociación Mexicana de Agrivoltaics y Agricultura Digital (Mexikanischer Verband für Agri-Photovoltaik und digitale Landwirtschaft) — ist ein Branchenverband, der 2024 von Luis Alfonso Escobedo und Roberto Moreno Castillo gegründet wurde. Er versteht sich als Brücke zwischen Solarunternehmen, Landwirten, Lebensmittel- und Digital-Agrar-Unternehmen, Wissenschaft und Behörden.`,
    aboutText2: `Wir sind kein Projektentwickler und verkaufen keine Projekte: Wir bauen ein Ökosystem auf, teilen Wissen und schaffen Voraussetzungen dafür, dass Agri-PV in Mexiko nach guter fachlicher Praxis wachsen kann.`,
    missionLabel: `Mission:`,
    missionText: `Innovation und Technologie in der mexikanischen Landwirtschaft fördern, um die Produktion effizient und nachhaltig zu steigern — durch die Verbindung von Präzisionslandwirtschaft, digitalen Werkzeugen und Agri-PV.`,
    objectivesTitle: `Ziele des Verbands`,
    objectives: [
      { t: `Landwirtschaft und Solarenergie verbinden`, d: `Die Einführung von Agri-PV-Systemen in Mexiko fördern und ihre Vorteile für Nachhaltigkeit und Effizienz vermitteln.` },
      { t: `Forschung und Entwicklung fördern`, d: `Mit Hochschulen und Forschungszentren zusammenarbeiten, um Technologien und Praktiken weiterzuentwickeln.` },
      { t: `Politik mitgestalten`, d: `Mit Behörden und Gesetzgebern an geeigneten Rahmenbedingungen und Regulierungen für die Branche arbeiten.` },
      { t: `Aus- und Weiterbildung`, d: `Workshops, Seminare und Bildungsprogramme zu Agri-PV und digitaler Landwirtschaft organisieren.` },
      { t: `Strategische Allianzen aufbauen`, d: `Ein Kooperationsnetzwerk zwischen Landwirten, Solarunternehmen und weiteren Akteuren schaffen.` },
      { t: `Pilotprojekte entwickeln`, d: `Demonstrationsprojekte fördern, die Machbarkeit und Nutzen von Agri-PV zeigen.` },
      { t: `Nachhaltigkeit und Innovation unterstützen`, d: `Umweltverträgliche Praktiken und Innovation bei der Verbindung von Landwirtschaft und Energie fördern.` }
    ],
    committeesTitle: `Komitees und Arbeitsgruppen`,
    committeesLead: `Die von AMAYAD geplanten Komitees arbeiten als Arbeitsgruppen, die Mitgliedern offenstehen. Sie befinden sich im Aufbau — Sie können sich bewerben.`,
    committeeTag: `Geplantes Komitee`,
    committees: [
      { t: `Institutionelle Beziehungen & Internationales`, d: `Beziehungen zu staatlichen, nichtstaatlichen und internationalen Institutionen; Partnerschaften und Finanzierung.` },
      { t: `Integration von Solarenergie & Landwirtschaft`, d: `Solarprojekte in Agri-PV-Systemen, Speicher, Kulturverträglichkeit, Bodengesundheit und Beweidung.` },
      { t: `Regulierung & gute Praxis`, d: `Beobachtung der Regulierung, Compliance-Leitfäden, gute Praxis und geistiges Eigentum.` },
      { t: `Forschung, Entwicklung & Food Intelligence`, d: `Versuche, Veröffentlichung von Ergebnissen, Ernährungstrends, Lieferketten und Lebensmittelsicherheit.` },
      { t: `Kommunikation & Veranstaltungen`, d: `Öffentlichkeitsarbeit, soziale Medien, Newsletter, Workshops, Kurse, Seminare und Jahreskongress.` },
      { t: `GIS & Technologieintegration`, d: `GIS, Drohnen, IoT-Sensoren, KI und weitere Technologien für Datenmanagement und Entscheidungsfindung.` }
    ],
    waysTitle: `Wie möchten Sie mitwirken?`,
    waysLead: `Wählen Sie den Einstieg, der zu Ihnen passt. Alle führen zum selben Ziel: Zusammenarbeit.`,
    wayMember: `Werden Sie Gründungsmitglied und gestalten Sie die Agenda mit.`,
    wayProject: `Sie haben eine Idee oder eine Fläche? Erzählen Sie uns davon — wir suchen die passenden Partner zur Umsetzung.`,
    wayPartner: `Für Institutionen und Organisationen, die mit AMAYAD zusammenarbeiten möchten.`,
    wayWg: `Wirken Sie in einem Komitee mit: Regulierung, Technologie, Forschung und mehr.`
  },
  agri: {
    eyebrow: `Wissen`,
    title: `Was ist Agri-Photovoltaik?`,
    lead: `Erklärt für beide Zielgruppen — für Menschen aus der Solarbranche und aus der Landwirtschaft. Wählen Sie ein Thema.`,
    sourcesNote: `Quellen: Unterlagen von AMAYAD (2024) und das Buchmanuskript „Cosechando el Sol Dos Veces“. Die Zahlen stammen aus der dort zitierten Literatur und variieren je nach Standort, Kultur und Anlagendesign.`,
    topics: [
      { id: `concept`, tab: `Konzept`, title: `Eine Fläche, zwei Ernten`,
        body: `<p>Agri-Photovoltaik (Agri-PV) — in Japan als <em>Solar Sharing</em> bekannt — kombiniert Solarstromerzeugung und landwirtschaftliche Produktion auf derselben Fläche. Entscheidend ist nicht bloße Nähe, sondern <b>bewusste Planung</b>: Höhe, Abstand und Neigung der Module werden mit Blick auf Kulturpflanzen, Nutztiere oder Bestäuber gewählt.</p>
<p>Ausgangspunkt ist eine einfache Beobachtung: Viele Kulturen nutzen nur einen Teil des Sonnenlichts, das sie erhalten. Eine gut geplante Anlage wandelt diesen Überschuss in Strom um und lässt dennoch genug Licht — und nützlichen Schatten — für die Pflanzen.</p>
<h3>Gängige Konfigurationen</h3>
<ul><li><b>Hoch aufgeständert:</b> hohe Module; Maschinen oder Tiere passieren darunter.</li>
<li><b>Vertikal bifazial:</b> senkrechte Modulreihen, zwischen denen das Feld offen bleibt.</li>
<li><b>Zwischen den Reihen:</b> Anbau zwischen und unter den Modulen.</li>
<li><b>Beweidung:</b> Schafe oder andere Tiere unter den Modulen.</li>
<li><b>Solar-Gewächshaus:</b> Module im Dach integriert.</li>
<li><b>Bestäuber:</b> Vegetation, die die Biodiversität fördert.</li></ul>`,
        side: `<h3>Die 5 C erfolgreicher Agri-PV</h3><p>Rahmen aus der US-amerikanischen InSPIRE-Studie:</p>
<div class="five"><div><b>Climate (Klima)</b> — Sonne, Regen, Temperatur.</div><div><b>Configuration (Konfiguration)</b> — Anordnung von Modulen und Kulturen.</div><div><b>Crops (Kulturen)</b> — Arten und Anbaupraxis.</div><div><b>Compatibility (Kompatibilität)</b> — Energie und Landwirtschaft ohne Konflikt.</div><div><b>Collaboration (Kooperation)</b> — Landwirte, Forschende und Unternehmen. Hier setzt AMAYAD an.</div></div>` },
      { id: `benefits`, tab: `Vorteile`, title: `Mehr Wert von derselben Fläche`,
        body: `<p>Gut geplant kann ein Hektar Agri-PV insgesamt mehr Nahrungsmittel und Energie erzeugen als zwei getrennte Hektar. Gemessen wird das mit dem <b>Land Equivalent Ratio (LER)</b>: Ein Wert über 1 zeigt einen Vorteil der kombinierten Nutzung.</p>
<ul><li><b>Effiziente Flächennutzung:</b> Die ausgewertete Literatur berichtet LER-Werte typischerweise zwischen 1,2 und 1,8 — je nach Kultur, Klima und Design.</li>
<li><b>Wassereinsparung:</b> Schatten und weniger Wind verringern die Evapotranspiration; Feldstudien in verschiedenen Klimazonen berichten von Bewässerungseinsparungen in der Größenordnung von 20–30 %.</li>
<li><b>Mikroklima:</b> gemäßigtere Temperaturen auf Pflanzenhöhe und weniger Hitzestress.</li>
<li><b>Teilweiser Schutz:</b> Module wirken als Windschutz und können einen gewissen Hagelschutz bieten (kein Ersatz für eigene Schutzsysteme).</li>
<li><b>Sauberer Strom</b> für den Betrieb oder das Netz.</li>
<li><b>Boden und Biodiversität:</b> Vegetation und Bestäuber unter den Modulen.</li></ul>`,
        side: `<h3>Ehrlich gesagt</h3><p>Die Ergebnisse hängen vom Standort ab: Höhe, Neigung, Abstand, Kultur und Klima. Nicht jede Kultur profitiert gleichermaßen. Deshalb setzt AMAYAD auf Pilotprojekte, Daten und gute Praxis statt auf Versprechen.</p>` },
      { id: `farmers`, tab: `Für Landwirte`, title: `Für Landwirtinnen und Landwirte`,
        body: `<p>Bei Agri-PV geht es nicht darum, Flächen der Landwirtschaft zu entziehen, sondern eine zweite Wertquelle hinzuzufügen.</p>
<ul><li><b>Zusätzliches, diversifiziertes Einkommen</b> — Pacht, Stromverkauf oder Eigenverbrauch — bei fortgesetzter Bewirtschaftung.</li>
<li><b>Energie für den Betrieb:</b> Pumpen und automatisierte Bewässerung, Beleuchtung, Heizung und Kühlung von Gewächshäusern und Ställen, Verarbeitung und Verpackung, Elektrozäune, Belüftung und Monitoring.</li>
<li><b>Widerstandsfähigere Kulturen</b> gegenüber extremer Hitze und Dürre in vielen Regionen.</li>
<li><b>Geringere Bewässerungskosten</b> dank reduzierter Verdunstung.</li></ul>`,
        side: `<h3>Welche Kulturen eignen sich?</h3><p>Orientierende Einteilung (deutscher Kontext):</p>
<ul><li><b>Gut geeignet:</b> Salate und Blattgemüse, Spinat, Hopfen, Leguminosen, Ackerbohnen.</li>
<li><b>Bedingt geeignet:</b> Roggen, Gerste, Hafer, Kohl, Erbsen, Spargel, Möhren, Radieschen.</li>
<li><b>Weniger geeignet:</b> Weizen, Mais, Kürbis, Wein, Sonnenblumen und viele Obstkulturen.</li></ul>
<p>In Mexiko muss die Eignung lokal überprüft werden — eine Priorität für AMAYAD.</p>` },
      { id: `solar`, tab: `Für Solarentwickler`, title: `Für Solarentwickler und -unternehmen`,
        body: `<p>Für die Solarbranche eröffnet Agri-PV den Zugang zu Flächen, ohne mit der Nahrungsmittelproduktion zu konkurrieren — ein Schlüsselfaktor für gesellschaftliche Akzeptanz.</p>
<ul><li><b>Neue Standorte</b> auf Agrarflächen, mit einem Modell, das ländliche Gemeinden mittragen können.</li>
<li><b>Lokale Verbündete:</b> Landwirte werden zu Partnern, nicht nur zu Verpächtern.</li>
<li><b>Geringere Kosten für Vegetationspflege</b>, wenn Beweidung integriert wird.</li>
<li><b>Differenzierung</b> gegenüber Investoren und Stromabnehmern, die soziale und ökologische Wirkung schätzen.</li>
<li><b>Regulierung im Aufbau:</b> Deutschland, Frankreich, Italien und Japan haben bereits Regeln; in Mexiko gibt es noch keine spezifische rechtliche Definition von Agri-PV, und AMAYAD möchte dazu beitragen.</li></ul>`,
        side: `<h3>Was Sie bei AMAYAD finden</h3><ul><li>Kontakte zu Landwirten, Agrarorganisationen und Unternehmen der digitalen Landwirtschaft.</li><li>Dialog zu Politik und guter Praxis.</li><li>Komitees zu Solar-Agrar-Integration und Regulierung.</li></ul>` },
      { id: `digital`, tab: `Digitale Landwirtschaft & Drohnen`, title: `Digitale Landwirtschaft und Drohnen`,
        body: `<p>Digitale Landwirtschaft verbindet Daten, Sensorik und Automatisierung, um bessere Entscheidungen zu treffen und weniger zu verschwenden. Eine Agri-PV-Anlage verfügt bereits über Elektronik, Kommunikation und Monitoring — diese auf die Kultur darunter auszuweiten, liegt nahe.</p>
<ul><li><b>IoT-Sensoren:</b> Bodenfeuchte und -temperatur, Wetterstationen, automatisierte Bewässerung.</li>
<li><b>Drohnen und Fernerkundung:</b> Multispektralkameras und Indizes wie NDVI zeigen Problemzonen, bevor sie mit bloßem Auge sichtbar sind.</li>
<li><b>GIS:</b> Karten zur Standortwahl und Analyse räumlicher Daten.</li>
<li><b>KI und digitale Zwillinge:</b> Modelle, die den Ertrag unter einer bestimmten Modulkonfiguration abschätzen.</li>
<li><b>Präzisionslandwirtschaft, Robotik und Rückverfolgbarkeit</b> (z. B. mit Blockchain).</li></ul>`,
        side: `<h3>Ein gemeinsames Dashboard</h3><p>Auf einer gut geführten Anlage sehen Betriebsleitung und Solar-Asset-Management Stromerzeugung, Bodenfeuchte und Pflanzengesundheit nebeneinander — und entscheiden gemeinsam. Das ist der Kern von AMAYAD: zwei Welten, dieselben Daten.</p>` },
      { id: `nexus`, tab: `Nexus Nahrung-Energie-Wasser`, title: `Der Nexus Nahrung-Energie-Wasser`,
        body: `<p>Drei Belastungen treffen auf derselben Fläche zusammen: steigender Nahrungsmittelbedarf (die UN rechnet mit rund 9,7 Milliarden Menschen bis 2050), mehr Flächenbedarf für erneuerbare Energien und weniger verfügbares Wasser in vielen Regionen, auch im mexikanischen Hochland.</p>
<p>Jahrzehntelang konkurrierten Landwirtschaft und Energie um dieselben Flächen. Agri-PV löst diesen Zielkonflikt auf: Gut geplant erzeugt sie gleichzeitig Nahrungsmittel und Strom und kann den Wasserverbrauch senken.</p>
<p>Deshalb braucht es die Zusammenarbeit von Branchen, die bisher selten miteinander gesprochen haben: Solarentwicklung, landwirtschaftliche Produktion und digitale Landwirtschaft.</p>`,
        side: `<h3>Im Einklang mit den SDGs</h3><p>AMAYAD verknüpft seine Arbeit mit mehreren Zielen für nachhaltige Entwicklung, darunter:</p><ul><li>SDG 2 · Kein Hunger</li><li>SDG 5 · Geschlechtergleichheit</li><li>SDG 7 · Bezahlbare und saubere Energie</li><li>SDG 13 · Maßnahmen zum Klimaschutz</li><li>SDG 15 · Leben an Land</li><li>SDG 17 · Partnerschaften zur Erreichung der Ziele</li></ul>` }
    ]
  },
  tiers: {
    company_small:  { kind: `Unternehmen`, name: `Unternehmen — Umsatz unter 1 Mio. USD`, desc: `Für Unternehmen mit einem Jahresumsatz unter 1 Million US-Dollar.` },
    company_medium: { kind: `Unternehmen`, name: `Unternehmen — Umsatz 1–5 Mio. USD`, desc: `Für Unternehmen mit einem Jahresumsatz zwischen 1 und 5 Millionen US-Dollar.` },
    company_large:  { kind: `Unternehmen`, name: `Unternehmen — Umsatz über 5 Mio. USD`, desc: `Für Unternehmen mit einem Jahresumsatz über 5 Millionen US-Dollar.` },
    individual:     { kind: `Einzelperson`, name: `Einzelmitglied`, desc: `Für Fachleute, Beratende, Forschende und interessierte Personen.` },
    student:        { kind: `Studierende`, name: `Studierende`, desc: `Für Studierende, die sich weiterbilden und mit der Branche vernetzen möchten.` }
  },
  mem: {
    eyebrow: `Mitgliedschaft`, title: `Wählen Sie Ihre Mitgliedschaftsstufe`,
    lead: `Fünf Stufen je nach Art und Größe Ihrer Organisation. Alle bieten Zugang zur AMAYAD-Community und zu ihrem Leistungsrahmen.`,
    foundingTitle: `Werden Sie Gründungsmitglied.`,
    foundingText: `AMAYAD baut seine erste Mitgliedergeneration auf: Wer jetzt beitritt, kann Ausrichtung, Komitees und Prioritäten des Verbands mitprägen.`,
    priceNote: `Jahresbeiträge in US-Dollar (USD) gemäß der Mitgliedschaftsstruktur von AMAYAD. Das Absenden des Formulars ist ein Antrag: AMAYAD bestätigt Aufnahme, aktuellen Beitrag und Zahlungsweise.`,
    perYear: `Jahr`, registerTier: `Für diese Stufe anmelden`,
    benefitsTitle: `Leistungsrahmen`,
    benefitsLead: `Die Leistungen, die AMAYAD seinen Mitgliedern anbieten möchte. Sie werden mit dem Wachstum des Verbands schrittweise umgesetzt.`,
    benefits: [
      { t: `Ressourcen und Fachleute`, d: `Leitfäden zur guten Praxis, Webinare, Expertenberatung und eine Studienbibliothek.` },
      { t: `Bildung und Networking`, d: `Workshops, Seminare, Feldtage, Vorzugspreise für Veranstaltungen und B2B-Kontakte zu Mitgliedern und Partnern.` },
      { t: `Interessenvertretung`, d: `Mitsprache bei regulatorischen und gesetzgeberischen Fragen, Kontakte zu Behörden und Mitgliederversammlungen mit Stimmrecht.` },
      { t: `Marketing und Sichtbarkeit`, d: `Vorstellung Ihrer Organisation in sozialen Medien und Pressemitteilungen über Aktivitäten der Mitglieder.` },
      { t: `Kommunikation und Information`, d: `Branchennews, Foren zum Austausch und exklusive Kanäle für Mitglieder.` },
      { t: `Wirtschaftliche Vorteile`, d: `Vorzugskonditionen, Geschäftsmöglichkeiten, Mitgliederverzeichnis und ein Branchen-Marktplatz.` },
      { t: `Nachhaltigkeit`, d: `Unterstützung für eine resiliente Landwirtschaft und eine Energiewende ohne Flächennutzungskonflikte.` },
      { t: `Rechtliche Unterstützung und Compliance`, d: `Orientierung zur Einhaltung von Vorschriften und Workshops zu lokalen und internationalen Normen.` },
      { t: `Weitere Vorteile`, d: `Hilfe beim Zugang zu Fördermitteln, Kontakte zu Investoren, Technologie-Demos, Exportunterstützung und ein zweisprachiges, internationales Netzwerk.` }
    ],
    whoTitle: `Wer kann Mitglied werden?`,
    whoList: [`Solarunternehmen, die sich mit der Landwirtschaft verbinden möchten`, `Modulhersteller und Ausrüster`, `Energiespeicher- und Digitalunternehmen der Solarbranche`, `Agrarunternehmen, die Kulturen und Einkommen diversifizieren möchten`, `Unternehmen für Sensorik, Software, Hardware und Drohnen`, `Forschende, Hochschulen und Forschungszentren`, `Staatliche und nichtstaatliche Organisationen`, `Investoren und Finanzierer`, `Studierende`]
  },
  partners: {
    eyebrow: `Partner`, title: `Partner und Organisationen im Gespräch`,
    lead: `AMAYAD entsteht durch Zusammenarbeit. Hier zeigen wir transparent den Stand jeder Beziehung.`,
    confirmed: `Partner`, potential: `Potenzielle Partner — im Gespräch`, open: `Freie Plätze`,
    note: `Wir listen nur Organisationen mit deren Zustimmung. „Im Gespräch“ bedeutet einen laufenden Dialog, keine formelle Vereinbarung. Logos verwenden wir nur mit schriftlicher Genehmigung.`,
    status: { partner: `Partner`, conversation: `Im Gespräch` },
    noneYet: `Demnächst.`, soon: `Demnächst`, slot: `Ihre Organisation hier`, slotCta: `Werden Sie Partner von AMAYAD →`
  },
  members: {
    eyebrow: `Verzeichnis`, title: `Mitglieder von AMAYAD`,
    lead: `Das Mitgliederverzeichnis des Verbands. Organisationen erscheinen hier, sobald ihre Mitgliedschaft und ihre Zustimmung zur Veröffentlichung bestätigt sind.`,
    emptyTitle: `Gehören Sie zu den ersten Mitgliedern`,
    emptyText: `Das Verzeichnis ist bereit für die erste Generation von Gründungsmitgliedern von AMAYAD. Ihre Organisation kann eine der ersten hier sein.`,
    ghost: `Platz für ein Gründungsmitglied`, consentNote: `Wir veröffentlichen Mitglieder nur mit ausdrücklicher Zustimmung.`, founding: `Gründungsmitglied`
  },
  lib: {
    eyebrow: `Bibliothek`, title: `Ressourcenbibliothek`,
    lead: `Leitfäden, Forschung, Regulierung, Fallstudien und Publikationen von AMAYAD. Wir nehmen nur überprüfbare Ressourcen auf.`,
    suggest: `Ressource vorschlagen`,
    cats: { all: `Alle`, guides: `Leitfäden`, research: `Forschung`, regulation: `Regulierung`, cases: `Fallstudien`, amayad: `AMAYAD-Publikationen` },
    status: { available: `Verfügbar`, forthcoming: `Demnächst` },
    open: `Ressource öffnen`, soonTitle: `Demnächst`,
    soonText: `Wir stellen Ressourcen für diese Kategorie zusammen. Kennen Sie eine wertvolle Quelle? Schlagen Sie sie vor.`
  },
  contact: {
    eyebrow: `Kontakt`, title: `Sprechen wir miteinander`,
    lead: `Schreiben Sie uns bei Fragen, Projektvorschlägen, Partnerschaftsideen oder wenn Sie einem Komitee beitreten möchten.`,
    directTitle: `E-Mail`, directNote: `Wir antworten im Rahmen der Verfügbarkeit des Teams.`, quickTitle: `Schnellzugriff`,
    subjects: { general: `Allgemeine Anfrage`, membership: `Mitgliedschaft`, project: `Projekt vorschlagen`, partner: `Partner werden`, wg: `Komitee / Arbeitsgruppe beitreten`, resource: `Ressource für die Bibliothek vorschlagen`, press: `Presse und Medien` }
  },
  form: {
    subject: `Betreff`, name: `Vollständiger Name`, org: `Organisation`, role: `Position / Funktion`, email: `E-Mail`, phone: `Telefon`, country: `Land`, sector: `Sektor`,
    sectors: { solar: `Solarenergie`, agriculture: `Landwirtschaft`, digital: `Digitale Landwirtschaft`, research: `Forschung / Wissenschaft`, government: `Öffentliche Hand`, investor: `Investor / Finanzierung`, other: `Sonstiges` },
    interests: `Interessen (optional)`,
    interestOptions: { design: `Agri-PV-Planung und -Projekte`, digital: `Digitale Landwirtschaft, Drohnen und Sensorik`, policy: `Politik und Regulierung`, finance: `Finanzierung und Geschäftsmodelle`, research: `Forschung und Daten`, training: `Weiterbildung und Veranstaltungen`, networking: `Partnerschaften und Networking` },
    message: `Nachricht`, messageOpt: `Nachricht (optional)`,
    consent: `Ich habe die`, privacyLink: `Datenschutzhinweise gelesen und akzeptiere sie`, consentShort: `Datenschutzhinweise akzeptiert`,
    send: `Nachricht senden`, tier: `Mitgliedschaftsstufe`, choose: `Bitte wählen…`,
    errRequired: `Bitte füllen Sie die Pflichtfelder aus.`, errEmail: `Bitte prüfen Sie das Format der E-Mail-Adresse.`, errConsent: `Bitte akzeptieren Sie die Datenschutzhinweise, um fortzufahren.`,
    okTitle: `Vielen Dank!`, okSent: `Wir haben Ihre Anfrage erhalten. Das AMAYAD-Team meldet sich bei Ihnen.`,
    okMailto: `Ihre Anfrage ist vorbereitet. Klicken Sie zum Abschließen auf die Schaltfläche: Ihr E-Mail-Programm öffnet sich mit den bereits ausgefüllten Angaben.`,
    mailtoBtn: `Per E-Mail senden`, okNote: `Eine Anfrage bedeutet keine automatische Aufnahme; AMAYAD meldet sich bei Ihnen.`
  },
  reg: { title: `Mitgliedsantrag`, lead: `Bitte geben Sie Ihre Daten ein. Die Mitgliedschaftsstufe können Sie im Menü ändern.`, submit: `Antrag senden`, mailSubject: `Mitgliedsantrag` },
  privacy: {
    title: `Datenschutzhinweise (Entwurf)`,
    body: `<p class="draft">Entwurfsfassung, vorbehaltlich rechtlicher Prüfung.</p>
<h3>Verantwortliche Stelle</h3><p>Asociación Mexicana de Agrivoltaics y Agricultura Digital (AMAYAD), Mexiko.</p>
<h3>Erhobene Daten</h3><p>Die Angaben aus unseren Formularen: Name, Organisation, Position, E-Mail, Telefon, Land, Sektor, Interessen und Nachricht.</p>
<h3>Zwecke</h3><p>Bearbeitung Ihres Mitglieds- oder Kontaktantrags, Nachverfolgung und Kommunikation mit Ihnen über AMAYAD. Wir verkaufen Ihre Daten nicht.</p>
<h3>Weitergabe</h3><p>Wir können E-Mail-, Formular- oder Hosting-Dienstleister einsetzen, die zur Vertraulichkeit verpflichtet sind.</p>
<h3>Ihre Rechte</h3><p>Sie können nach mexikanischem Datenschutzrecht Auskunft, Berichtigung, Löschung oder Widerspruch verlangen (ARCO-Rechte), indem Sie an {email} schreiben.</p>
<h3>Sprache und lokale Speicherung</h3><p>Die Website speichert Ihre bevorzugte Sprache in Ihrem Browser (localStorage) und fragt beim ersten Besuch einen externen IP-Geolokalisierungsdienst ab — ausschließlich, um eine Sprache vorzuschlagen. Wir verwenden keine Tracking-Cookies.</p>
<h3>Änderungen</h3><p>Aktualisierungen dieser Hinweise werden auf dieser Website veröffentlicht.</p>`
  },
  footer: { tagline: `Wo Solarenergie und Landwirtschaft zusammenkommen.`, founded: `Gegründet 2024`, privacy: `Datenschutz` }
};

/* =============================== ITALIANO =============================== */
AMAYAD_I18N.it = {
  meta: { title: `AMAYAD — Associazione messicana per l'agrivoltaico e l'agricoltura digitale`,
          desc: `AMAYAD: dove l'energia solare e l'agricoltura si incontrano. Associazione fondata nel 2024 in Messico.` },
  ui: { skip: `Vai al contenuto`, language: `Lingua`, sections: `Sezioni`, topics: `Argomenti`, close: `Chiudi`, cancel: `Annulla`, locale: `it-IT` },
  brand: { tagline: `Agrivoltaico + Agricoltura digitale` },
  nav: { home: `Home`, agri: `Cos'è l'agrivoltaico`, membership: `Adesione`, partners: `Partner`, members: `Soci`, library: `Biblioteca`, contact: `Contatti` },
  cta: { request: `Richiedi l'adesione`, project: `Proponi un progetto`, partner: `Diventa partner`, wg: `Entra in un gruppo di lavoro` },
  home: {
    eyebrow: `Associazione messicana per l'agrivoltaico e l'agricoltura digitale`,
    title: `Dove l'<span class="sun">energia solare</span> e l'<span class="leaf">agricoltura</span> si incontrano`,
    lead: `AMAYAD unisce due mondi — l'industria solare e l'agricoltura, compresa l'agricoltura digitale — per collaborare, generare nuove idee e creare partnership difficili da trovare in altro modo.`,
    cta2: `Cos'è l'agrivoltaico`,
    founded: `Fondata nel 2024 · Messico`,
    chipSolar: `☀ Energia solare`, chipAgri: `🌱 Agricoltura e agri digitale`, chipMeet: `Uno stesso terreno`,
    worldsTitle: `Due mondi, una stessa terra`,
    worldsLead: `Che tu venga dal solare o dall'agricoltura, in AMAYAD trovi l'altra metà dell'equazione.`,
    solarTitle: `Il mondo solare`,
    solarText: `Sviluppatori, EPC, produttori, accumulo di energia, società di ingegneria e investitori.`,
    solarList: [`Accesso ai terreni senza competere con la produzione alimentare`, `Partner agricoli e accettazione da parte delle comunità`, `Dialogo normativo e buone pratiche`],
    meetTitle: `Dove si incontrano`,
    meetText: `Agrivoltaico e agricoltura digitale: lo spazio in cui entrambi i settori vincono.`,
    meetList: [`Progetti congiunti e impianti pilota`, `Nuove idee e modelli di business`, `Comitati tecnici e di politiche pubbliche`, `Una rete che collega i due settori`],
    agriTitle: `Il mondo agricolo e agri digitale`,
    agriText: `Produttori, aziende agricole e alimentari, droni, sensori, software e ricerca.`,
    agriList: [`Reddito aggiuntivo ed energia per l'azienda`, `Risparmio idrico e colture più resilienti`, `Tecnologia: droni, sensori, dati e IA`],
    mexicoTitle: `Il Messico ha sole e terreni agricoli. L'opportunità è unirli.`,
    mexicoLead: `Alcuni dati di contesto alla base del lavoro di AMAYAD.`,
    stat1n: `≈ 5 kWh/m²/giorno`, stat1l: `Irraggiamento solare medio approssimativo in Messico, tra i più alti al mondo.`,
    stat2n: `87,9 Mln ha`, stat2l: `Superficie rurale a uso agricolo secondo il Censimento agricolo 2022 (INEGI).`,
    stat3n: `1,2 – 1,8`, stat3l: `Intervallo tipico del Land Equivalent Ratio (LER) riportato in letteratura per sistemi agrivoltaici ben progettati (sopra 1 = più produzione totale per ettaro).`,
    statsSource: `Fonti: AMAYAD (2024), con dati INEGI; letteratura esaminata nel libro «Cosechando el Sol Dos Veces» (Raccogliere il sole due volte). Valori indicativi; i risultati variano in base al sito.`,
    aboutEyebrow: `Chi è AMAYAD`,
    aboutTitle: `Un ponte tra il sole e i campi`,
    aboutText1: `AMAYAD — Asociación Mexicana de Agrivoltaics y Agricultura Digital (Associazione messicana per l'agrivoltaico e l'agricoltura digitale) — è un'associazione di settore fondata nel 2024 da Luis Alfonso Escobedo e Roberto Moreno Castillo. Fa da ponte tra aziende dell'energia solare, agricoltori, aziende alimentari e di agricoltura digitale, mondo accademico e istituzioni.`,
    aboutText2: `Non siamo uno sviluppatore e non vendiamo progetti: costruiamo un ecosistema, condividiamo conoscenze e contribuiamo a creare le condizioni perché l'agrivoltaico cresca in Messico secondo buone pratiche.`,
    missionLabel: `Missione:`,
    missionText: `promuovere l'innovazione e la tecnologia nell'agricoltura messicana per aumentare la produzione in modo efficiente e sostenibile, integrando agricoltura di precisione, strumenti digitali e agrivoltaico.`,
    objectivesTitle: `Obiettivi dell'associazione`,
    objectives: [
      { t: `Integrare agricoltura ed energia solare`, d: `Favorire l'adozione di sistemi agrivoltaici in Messico e diffonderne i benefici in termini di sostenibilità ed efficienza.` },
      { t: `Promuovere ricerca e sviluppo`, d: `Collaborare con università e centri di ricerca per far avanzare tecnologie e pratiche.` },
      { t: `Contribuire alle politiche pubbliche`, d: `Lavorare con istituzioni e legislatori per politiche e normative adeguate al settore.` },
      { t: `Formazione ed educazione`, d: `Organizzare workshop, seminari e programmi formativi su agrivoltaico e agricoltura digitale.` },
      { t: `Creare alleanze strategiche`, d: `Costruire una rete di collaborazione tra agricoltori, aziende solari e altri attori chiave.` },
      { t: `Sviluppare progetti pilota`, d: `Promuovere progetti dimostrativi che mostrino la fattibilità e i benefici dell'agrivoltaico.` },
      { t: `Sostenere sostenibilità e innovazione`, d: `Promuovere pratiche rispettose dell'ambiente e l'innovazione nell'integrazione tra agricoltura ed energia.` }
    ],
    committeesTitle: `Comitati e gruppi di lavoro`,
    committeesLead: `I comitati previsti da AMAYAD funzioneranno come gruppi di lavoro aperti ai soci. Sono in fase di costituzione: puoi candidarti.`,
    committeeTag: `Comitato previsto`,
    committees: [
      { t: `Relazioni istituzionali e affari internazionali`, d: `Rapporti con istituzioni governative, non governative e internazionali; partnership e finanziamenti.` },
      { t: `Integrazione tra energia solare e agricoltura`, d: `Progetti solari agrivoltaici, accumulo, compatibilità delle colture, salute del suolo e pascolo.` },
      { t: `Affari normativi e buone pratiche`, d: `Monitoraggio normativo, linee guida di conformità, buone pratiche e proprietà intellettuale.` },
      { t: `Ricerca, sviluppo e food intelligence`, d: `Sperimentazioni, pubblicazione dei risultati, tendenze alimentari, filiere e sicurezza alimentare.` },
      { t: `Comunicazione ed eventi`, d: `Relazioni pubbliche, social media, newsletter, workshop, corsi, seminari e congresso annuale.` },
      { t: `GIS e integrazione tecnologica`, d: `GIS, droni, sensori IoT, IA e altre tecnologie per la gestione dei dati e il supporto alle decisioni.` }
    ],
    waysTitle: `Come vuoi partecipare?`,
    waysLead: `Scegli la porta più adatta a te. Portano tutte nello stesso posto: la collaborazione.`,
    wayMember: `Entra come socio fondatore e contribuisci a definire l'agenda.`,
    wayProject: `Hai un'idea o un terreno? Raccontacelo e cercheremo con chi realizzarla.`,
    wayPartner: `Per istituzioni e organizzazioni che vogliono collaborare con AMAYAD.`,
    wayWg: `Partecipa a un comitato: normativa, tecnologia, ricerca e altro.`
  },
  agri: {
    eyebrow: `Conoscenza`,
    title: `Cos'è l'agrivoltaico?`,
    lead: `Spiegato per entrambi i pubblici: chi viene dal solare e chi viene dai campi. Scegli un argomento.`,
    sourcesNote: `Fonti: documentazione di AMAYAD (2024) e la bozza del libro «Cosechando el Sol Dos Veces». I dati provengono dalla letteratura ivi citata e variano in base a sito, coltura e progettazione.`,
    topics: [
      { id: `concept`, tab: `Concetto`, title: `La stessa terra, due raccolti`,
        body: `<p>L'agrivoltaico — detto anche agro-fotovoltaico, o <em>solar sharing</em> in Giappone — combina produzione di energia solare fotovoltaica e produzione agricola sullo stesso appezzamento. Ciò che conta non è la semplice vicinanza, ma una <b>progettazione intenzionale</b>: altezza, distanza e inclinazione dei pannelli vengono scelte pensando alla coltura, al bestiame o agli impollinatori.</p>
<p>Il punto di partenza è semplice: molte colture sfruttano solo una parte della luce che ricevono. Un impianto ben progettato trasforma questo surplus in elettricità lasciando comunque abbastanza luce — e ombra utile — alla coltura.</p>
<h3>Configurazioni comuni</h3>
<ul><li><b>Sopraelevata (su pali):</b> pannelli alti; macchine o animali passano sotto.</li>
<li><b>Verticale bifacciale:</b> file verticali che lasciano il campo libero tra di esse.</li>
<li><b>Interfilare:</b> colture tra e sotto i pannelli.</li>
<li><b>Pascolo:</b> pecore o altri animali sotto i pannelli.</li>
<li><b>Serra fotovoltaica:</b> moduli integrati nella copertura.</li>
<li><b>Impollinatori:</b> vegetazione che favorisce la biodiversità.</li></ul>`,
        side: `<h3>Le 5 C del successo agrivoltaico</h3><p>Quadro tratto dallo studio statunitense InSPIRE:</p>
<div class="five"><div><b>Clima</b> — sole, pioggia e temperatura.</div><div><b>Configurazione</b> — disposizione di pannelli e colture.</div><div><b>Colture</b> — specie e pratiche colturali.</div><div><b>Compatibilità</b> — energia e agricoltura senza conflitti.</div><div><b>Collaborazione</b> — agricoltori, ricercatori e aziende. È qui che entra in gioco AMAYAD.</div></div>` },
      { id: `benefits`, tab: `Benefici`, title: `Più valore dallo stesso ettaro`,
        body: `<p>Se ben progettato, un ettaro agrivoltaico può produrre complessivamente più cibo ed energia di due ettari separati. Si misura con il <b>Land Equivalent Ratio (LER)</b>: un valore superiore a 1 indica un vantaggio dell'uso combinato.</p>
<ul><li><b>Uso efficiente del suolo:</b> la letteratura esaminata riporta valori di LER tipicamente compresi tra 1,2 e 1,8, a seconda di coltura, clima e progettazione.</li>
<li><b>Risparmio idrico:</b> ombra e minore vento riducono l'evapotraspirazione; studi di campo in diversi climi riportano riduzioni dell'irrigazione nell'ordine del 20–30%.</li>
<li><b>Microclima:</b> temperature più moderate a livello della coltura e minore stress da calore.</li>
<li><b>Protezione parziale:</b> i pannelli fungono da frangivento e possono offrire una certa protezione dalla grandine (non sostituiscono sistemi dedicati).</li>
<li><b>Energia pulita</b> per l'azienda o per la rete.</li>
<li><b>Suolo e biodiversità:</b> vegetazione e impollinatori sotto i pannelli.</li></ul>`,
        side: `<h3>In tutta onestà</h3><p>I risultati dipendono dal sito: altezza, inclinazione, distanza, coltura e clima. Non tutte le colture ne beneficiano allo stesso modo. Per questo AMAYAD privilegia progetti pilota, dati e buone pratiche rispetto alle promesse.</p>` },
      { id: `farmers`, tab: `Per gli agricoltori`, title: `Per agricoltori e produttori`,
        body: `<p>L'agrivoltaico non punta a sottrarre terra all'agricoltura, ma ad aggiungere una seconda fonte di valore.</p>
<ul><li><b>Reddito aggiuntivo e diversificato</b> — canone, vendita di energia o autoconsumo — senza abbandonare la produzione.</li>
<li><b>Energia per l'azienda:</b> pompaggio e irrigazione automatizzata, illuminazione, riscaldamento e raffrescamento di serre e stalle, lavorazione e confezionamento, recinzioni elettriche, ventilazione e monitoraggio.</li>
<li><b>Colture più resilienti</b> al caldo estremo e alla siccità in molte regioni.</li>
<li><b>Costi di irrigazione inferiori</b> grazie alla minore evaporazione.</li></ul>`,
        side: `<h3>Quali colture si adattano meglio?</h3><p>Riferimento indicativo (contesto tedesco):</p>
<ul><li><b>Alta compatibilità:</b> lattughe e ortaggi a foglia, spinaci, luppolo, leguminose, favino.</li>
<li><b>Media:</b> segale, orzo, avena, cavolo, pisello, asparago, carota, ravanello.</li>
<li><b>Bassa:</b> frumento, mais, zucca, vite, girasole e molte colture frutticole.</li></ul>
<p>In Messico la compatibilità va verificata localmente: è una priorità per AMAYAD.</p>` },
      { id: `solar`, tab: `Per gli sviluppatori solari`, title: `Per sviluppatori e aziende solari`,
        body: `<p>Per l'industria solare, l'agrivoltaico apre l'accesso ai terreni senza competere con la produzione di cibo: un fattore chiave per l'accettazione sociale.</p>
<ul><li><b>Nuovi siti</b> su terreni agricoli, con un modello che le comunità rurali possono sostenere.</li>
<li><b>Alleati locali:</b> produttori che diventano partner, non solo locatori.</li>
<li><b>Minori costi di gestione della vegetazione</b> quando si integra il pascolo.</li>
<li><b>Differenziazione</b> verso investitori e acquirenti di energia attenti all'impatto sociale e ambientale.</li>
<li><b>Normativa in costruzione:</b> Germania, Francia, Italia e Giappone hanno già definito regole; in Messico non esiste ancora una definizione giuridica specifica di agrivoltaico, e AMAYAD intende contribuire a crearla.</li></ul>`,
        side: `<h3>Cosa trovi in AMAYAD</h3><ul><li>Contatti con produttori, organizzazioni agricole e aziende di agricoltura digitale.</li><li>Dialogo su politiche pubbliche e buone pratiche.</li><li>Comitati su integrazione solare-agricola e normativa.</li></ul>` },
      { id: `digital`, tab: `Agricoltura digitale e droni`, title: `Agricoltura digitale e droni`,
        body: `<p>L'agricoltura digitale integra dati, sensori e automazione per decidere meglio e sprecare meno. Un impianto agrivoltaico dispone già di elettronica, comunicazioni e monitoraggio: estenderli alla coltura sottostante è una scelta naturale.</p>
<ul><li><b>Sensori IoT:</b> umidità e temperatura del suolo, stazioni meteo, irrigazione automatizzata.</li>
<li><b>Droni e telerilevamento:</b> camere multispettrali e indici come l'NDVI segnalano le zone critiche prima che siano visibili a occhio nudo.</li>
<li><b>GIS:</b> mappe per scegliere i siti e analizzare i dati spaziali.</li>
<li><b>IA e gemelli digitali:</b> modelli che stimano la resa con una determinata configurazione dei pannelli.</li>
<li><b>Agricoltura di precisione, robotica e tracciabilità</b> (ad esempio con la blockchain).</li></ul>`,
        side: `<h3>Un'unica dashboard</h3><p>In un impianto ben gestito, il responsabile agricolo e il gestore dell'impianto solare vedono fianco a fianco produzione di energia, umidità del suolo e salute della coltura — e decidono insieme. È l'essenza di AMAYAD: due mondi con gli stessi dati.</p>` },
      { id: `nexus`, tab: `Nesso cibo-energia-acqua`, title: `Il nesso cibo-energia-acqua`,
        body: `<p>Tre pressioni convergono sulla stessa terra: una domanda di cibo crescente (l'ONU prevede circa 9,7 miliardi di persone entro il 2050), più terreno necessario per le rinnovabili e meno acqua disponibile in molte regioni, incluso l'altopiano messicano.</p>
<p>Per decenni agricoltura ed energia si sono contese le stesse superfici. L'agrivoltaico rifiuta questo dilemma: se ben progettato, produce cibo ed elettricità allo stesso tempo e può ridurre il consumo d'acqua.</p>
<p>Per questo richiede la collaborazione tra settori che raramente dialogavano: sviluppo solare, agricoltura produttiva e agricoltura digitale.</p>`,
        side: `<h3>In linea con gli SDG</h3><p>AMAYAD collega il proprio lavoro a diversi Obiettivi di sviluppo sostenibile, tra cui:</p><ul><li>SDG 2 · Fame zero</li><li>SDG 5 · Parità di genere</li><li>SDG 7 · Energia pulita e accessibile</li><li>SDG 13 · Lotta contro il cambiamento climatico</li><li>SDG 15 · Vita sulla terra</li><li>SDG 17 · Partnership per gli obiettivi</li></ul>` }
    ]
  },
  tiers: {
    company_small:  { kind: `Azienda`, name: `Azienda — fatturato inferiore a 1 milione USD`, desc: `Per aziende con fatturato annuo inferiore a 1 milione di dollari.` },
    company_medium: { kind: `Azienda`, name: `Azienda — fatturato da 1 a 5 milioni USD`, desc: `Per aziende con fatturato annuo tra 1 e 5 milioni di dollari.` },
    company_large:  { kind: `Azienda`, name: `Azienda — fatturato superiore a 5 milioni USD`, desc: `Per aziende con fatturato annuo superiore a 5 milioni di dollari.` },
    individual:     { kind: `Persona`, name: `Individuale`, desc: `Per professionisti, consulenti, ricercatori e persone interessate.` },
    student:        { kind: `Studente`, name: `Studente`, desc: `Per studenti che vogliono formarsi e entrare in contatto con il settore.` }
  },
  mem: {
    eyebrow: `Adesione`, title: `Scegli il tuo livello di adesione`,
    lead: `Cinque livelli in base al tipo e alle dimensioni della tua organizzazione. Tutti danno accesso alla comunità AMAYAD e al suo quadro di vantaggi.`,
    foundingTitle: `Diventa socio fondatore.`,
    foundingText: `AMAYAD sta formando la sua prima generazione di soci: chi aderisce ora potrà influire sulla direzione, sui comitati e sulle priorità dell'associazione.`,
    priceNote: `Quote annuali in dollari statunitensi (USD), secondo la struttura associativa di AMAYAD. L'invio del modulo è una richiesta: AMAYAD confermerà l'ammissione, la quota in vigore e la modalità di pagamento.`,
    perYear: `anno`, registerTier: `Iscriviti a questo livello`,
    benefitsTitle: `Quadro dei vantaggi`,
    benefitsLead: `I vantaggi che AMAYAD intende offrire ai propri soci. Vengono introdotti gradualmente man mano che l'associazione cresce.`,
    benefits: [
      { t: `Risorse ed esperti`, d: `Guide di buone pratiche, webinar, consulenze con esperti e una biblioteca di studi.` },
      { t: `Formazione e networking`, d: `Workshop, seminari, giornate in campo, tariffe agevolate agli eventi e relazioni B2B con soci e partner.` },
      { t: `Rappresentanza e advocacy`, d: `Voce sulle questioni normative e legislative, rapporti con le autorità e assemblee generali con diritto di voto.` },
      { t: `Marketing e promozione`, d: `Promozione della tua organizzazione sui social media e comunicati stampa sulle attività dei soci.` },
      { t: `Comunicazione e informazione`, d: `Notizie di settore, forum di confronto e canali riservati ai soci.` },
      { t: `Vantaggi economici`, d: `Tariffe agevolate, opportunità di business, elenco dei soci e marketplace di settore.` },
      { t: `Sostenibilità`, d: `Sostegno alla resilienza agricola e a una transizione energetica senza conflitti nell'uso del suolo.` },
      { t: `Supporto legale e conformità`, d: `Orientamento sulla conformità normativa e workshop su standard locali e internazionali.` },
      { t: `Vantaggi aggiuntivi`, d: `Supporto nell'accesso ai finanziamenti, contatti con investitori, dimostrazioni tecnologiche, supporto all'export e una rete bilingue e internazionale.` }
    ],
    whoTitle: `Chi può aderire?`,
    whoList: [`Aziende solari che vogliono integrarsi con l'agricoltura`, `Produttori di pannelli e fornitori di apparecchiature`, `Accumulo di energia e aziende digitali del settore solare`, `Aziende agricole che vogliono diversificare colture e reddito`, `Aziende di sensori, software, hardware e droni`, `Ricercatori, università e centri di ricerca`, `Organizzazioni governative e non governative`, `Investitori e finanziatori`, `Studenti`]
  },
  partners: {
    eyebrow: `Partner`, title: `Partner e organizzazioni in dialogo`,
    lead: `AMAYAD si costruisce collaborando. Qui mostriamo con trasparenza lo stato di ogni relazione.`,
    confirmed: `Partner`, potential: `Partner potenziali — in dialogo`, open: `Spazi disponibili`,
    note: `Elenchiamo solo organizzazioni che lo hanno autorizzato. «In dialogo» indica una conversazione in corso, non un accordo formale. Non usiamo loghi senza autorizzazione scritta.`,
    status: { partner: `Partner`, conversation: `In dialogo` },
    noneYet: `Prossimamente.`, soon: `Prossimamente`, slot: `La tua organizzazione qui`, slotCta: `Diventa partner di AMAYAD →`
  },
  members: {
    eyebrow: `Elenco`, title: `Soci di AMAYAD`,
    lead: `L'elenco dei soci dell'associazione. Le organizzazioni compariranno qui una volta confermate l'adesione e l'autorizzazione alla pubblicazione.`,
    emptyTitle: `Sii tra i primi soci`,
    emptyText: `L'elenco è pronto ad accogliere la prima generazione di soci fondatori di AMAYAD. La tua organizzazione può essere tra le prime a comparire qui.`,
    ghost: `Spazio per socio fondatore`, consentNote: `Pubblichiamo i soci solo con la loro autorizzazione esplicita.`, founding: `Socio fondatore`
  },
  lib: {
    eyebrow: `Biblioteca`, title: `Biblioteca di risorse`,
    lead: `Guide, ricerca, normativa, casi di studio e pubblicazioni di AMAYAD. Includiamo solo risorse verificabili.`,
    suggest: `Suggerisci una risorsa`,
    cats: { all: `Tutte`, guides: `Guide`, research: `Ricerca`, regulation: `Normativa`, cases: `Casi di studio`, amayad: `Pubblicazioni AMAYAD` },
    status: { available: `Disponibile`, forthcoming: `Prossimamente` },
    open: `Apri la risorsa`, soonTitle: `Prossimamente`,
    soonText: `Stiamo selezionando risorse per questa categoria. Ne conosci una utile? Suggeriscila.`
  },
  contact: {
    eyebrow: `Contatti`, title: `Parliamone`,
    lead: `Scrivici per domande, proposte di progetto, idee di partnership o per entrare in un comitato.`,
    directTitle: `E-mail`, directNote: `Rispondiamo in base alla disponibilità del team.`, quickTitle: `Accessi rapidi`,
    subjects: { general: `Richiesta generale`, membership: `Adesione`, project: `Proporre un progetto`, partner: `Diventare partner`, wg: `Entrare in un comitato / gruppo di lavoro`, resource: `Suggerire una risorsa per la biblioteca`, press: `Stampa e media` }
  },
  form: {
    subject: `Oggetto`, name: `Nome e cognome`, org: `Organizzazione`, role: `Ruolo / posizione`, email: `E-mail`, phone: `Telefono`, country: `Paese`, sector: `Settore`,
    sectors: { solar: `Energia solare`, agriculture: `Agricoltura`, digital: `Agricoltura digitale`, research: `Ricerca / università`, government: `Pubblica amministrazione`, investor: `Investitore / finanza`, other: `Altro` },
    interests: `Interessi (facoltativo)`,
    interestOptions: { design: `Progettazione e progetti agrivoltaici`, digital: `Agricoltura digitale, droni e sensori`, policy: `Politiche pubbliche e normativa`, finance: `Finanziamenti e modelli di business`, research: `Ricerca e dati`, training: `Formazione ed eventi`, networking: `Partnership e networking` },
    message: `Messaggio`, messageOpt: `Messaggio (facoltativo)`,
    consent: `Ho letto e accetto`, privacyLink: `l'informativa sulla privacy`, consentShort: `Informativa sulla privacy accettata`,
    send: `Invia messaggio`, tier: `Livello di adesione`, choose: `Seleziona…`,
    errRequired: `Compila i campi obbligatori.`, errEmail: `Controlla il formato dell'indirizzo e-mail.`, errConsent: `Devi accettare l'informativa sulla privacy per continuare.`,
    okTitle: `Grazie!`, okSent: `Abbiamo ricevuto la tua richiesta. Il team di AMAYAD ti contatterà.`,
    okMailto: `La tua richiesta è pronta. Per completare l'invio, fai clic sul pulsante: si aprirà la tua e-mail con i dati già compilati.`,
    mailtoBtn: `Invia per e-mail`, okNote: `L'invio di una richiesta non comporta l'accettazione automatica; AMAYAD ti ricontatterà.`
  },
  reg: { title: `Richiesta di adesione`, lead: `Inserisci i tuoi dati. Puoi cambiare il livello di adesione dal menu.`, submit: `Invia richiesta`, mailSubject: `Richiesta di adesione` },
  privacy: {
    title: `Informativa sulla privacy (bozza)`,
    body: `<p class="draft">Versione provvisoria, soggetta a revisione legale.</p>
<h3>Titolare</h3><p>Asociación Mexicana de Agrivoltaics y Agricultura Digital (AMAYAD), Messico.</p>
<h3>Dati raccolti</h3><p>Quelli che inserisci nei moduli: nome, organizzazione, ruolo, e-mail, telefono, paese, settore, interessi e messaggio.</p>
<h3>Finalità</h3><p>Gestire la tua richiesta di adesione o di contatto, darle seguito e comunicare con te riguardo ad AMAYAD. Non vendiamo i tuoi dati.</p>
<h3>Trasferimenti</h3><p>Possiamo avvalerci di fornitori di e-mail, moduli o hosting web vincolati da obblighi di riservatezza.</p>
<h3>I tuoi diritti</h3><p>Puoi richiedere accesso, rettifica, cancellazione od opposizione (diritti ARCO) ai sensi della normativa messicana sulla protezione dei dati personali, scrivendo a {email}.</p>
<h3>Lingua e archiviazione locale</h3><p>Il sito salva la lingua preferita nel tuo browser (localStorage) e, alla prima visita, interroga un servizio esterno di geolocalizzazione IP al solo scopo di suggerire una lingua. Non utilizziamo cookie di tracciamento.</p>
<h3>Modifiche</h3><p>Eventuali aggiornamenti di questa informativa saranno pubblicati su questo sito.</p>`
  },
  footer: { tagline: `Dove l'energia solare e l'agricoltura si incontrano.`, founded: `Fondata nel 2024`, privacy: `Informativa sulla privacy` }
};
