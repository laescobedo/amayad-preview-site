/* AMAYAD — i18n v2.2 additions: AMAYAD regional structure (6 macro-regions defined by Luis).
   Loaded AFTER i18n-v21.js and deep-merged (overrides reg2.*). Region texts live in data.js (AMAYAD_REGIONS).
   Keep keys identical across es / en / fr / de / it (check: node tools/check_i18n.js). */
(function () {
  function isObj(x) { return x && typeof x === "object" && !Array.isArray(x); }
  function merge(a, b) { Object.keys(b).forEach(function (k) { if (isObj(a[k]) && isObj(b[k])) merge(a[k], b[k]); else a[k] = b[k]; }); return a; }
  var V = {};

V.es = { reg2: {
  eyebrow: `Capítulos regionales`, statusTag: `Estructura regional AMAYAD`,
  homeTitle: `Seis macrorregiones`,
  homeText: `AMAYAD se organiza en 6 macrorregiones definidas por la radiación solar y por los modelos de negocio agrícola de cada zona.`,
  memText: `Al registrarte puedes indicar tu macrorregión para conectar con miembros de tu zona.`,
  title: `Estructura regional AMAYAD`,
  lead: `Seis macrorregiones definidas por dos factores clave que determinan cómo se combinan energía y agricultura en cada zona del país.`,
  factor1: `Radiación solar — producción de energía`, factor2: `Modelos de negocio agrícola — tipo de monitoreo digital y nivel de capitalización`,
  mapAlt: `Mapa de México con los estados coloreados por macrorregión AMAYAD`,
  pickText: `Haz clic en el mapa o en la leyenda para ver sus estados, su perfil fotovoltaico y agrícola y sus oportunidades.`,
  allTitle: `Las 6 macrorregiones`, allLead: `Perfil fotovoltaico, perfil agrícola y oportunidades de agricultura digital y agrivoltaica en cada región.`,
  sourceNote: `Estructura regional definida por AMAYAD. Las descripciones son generales y cualitativas: dentro de cada región hay gran diversidad de climas y sistemas productivos. Mapa: Natural Earth (dominio público).`,
  chapterText: `La coordinación de cada capítulo regional está por definir. Buscamos personas y organizaciones que ayuden a formarlos.`,
  pv: `Perfil fotovoltaico`, agri: `Perfil agrícola`, digital: `Oportunidad para agricultura digital`, agripv: `Oportunidad agrivoltaica`,
  coordinator: `Coordinación del capítulo`, tbd: `Por definir`,
  tableTitle: `Resumen por región`, tableLead: `El enfoque principal de agricultura digital y de agrivoltaica en cada macrorregión.`,
  thRegion: `Región`, thDigital: `Enfoque de agricultura digital`, thAgripv: `Enfoque agrivoltaico principal`
} };

V.en = { reg2: {
  eyebrow: `Regional chapters`, statusTag: `AMAYAD regional structure`,
  homeTitle: `Six macro-regions`,
  homeText: `AMAYAD is organised into 6 macro-regions defined by solar radiation and by the farm business models of each area.`,
  memText: `When you register you can indicate your macro-region to connect with members near you.`,
  title: `AMAYAD regional structure`,
  lead: `Six macro-regions defined by two key factors that shape how energy and agriculture come together in each part of the country.`,
  factor1: `Solar radiation — energy production`, factor2: `Farm business models — type of digital monitoring and level of capitalisation`,
  mapAlt: `Map of Mexico with states coloured by AMAYAD macro-region`,
  pickText: `Click the map or the legend to see its states, PV and farming profile, and opportunities.`,
  allTitle: `The 6 macro-regions`, allLead: `PV profile, farming profile and digital-agriculture and agrivoltaic opportunities in each region.`,
  sourceNote: `Regional structure defined by AMAYAD. Descriptions are general and qualitative: each region contains a wide diversity of climates and production systems. Map: Natural Earth (public domain).`,
  chapterText: `Coordination of each regional chapter is still to be defined. We are looking for people and organisations to help form them.`,
  pv: `PV profile`, agri: `Farming profile`, digital: `Digital agriculture opportunity`, agripv: `Agrivoltaic opportunity`,
  coordinator: `Chapter coordination`, tbd: `To be defined`,
  tableTitle: `Summary by region`, tableLead: `The main digital-agriculture and agrivoltaic focus of each macro-region.`,
  thRegion: `Region`, thDigital: `Digital agriculture focus`, thAgripv: `Main agrivoltaic focus`
} };

V.fr = { reg2: {
  eyebrow: `Chapitres régionaux`, statusTag: `Structure régionale AMAYAD`,
  homeTitle: `Six macrorégions`,
  homeText: `AMAYAD s'organise en 6 macrorégions définies par l'ensoleillement et par les modèles économiques agricoles de chaque zone.`,
  memText: `Lors de votre inscription, vous pouvez indiquer votre macrorégion pour entrer en contact avec les membres proches de chez vous.`,
  title: `Structure régionale AMAYAD`,
  lead: `Six macrorégions définies par deux facteurs clés qui déterminent la façon dont énergie et agriculture se combinent dans chaque partie du pays.`,
  factor1: `Rayonnement solaire — production d'énergie`, factor2: `Modèles économiques agricoles — type de suivi numérique et niveau de capitalisation`,
  mapAlt: `Carte du Mexique avec les États colorés selon la macrorégion AMAYAD`,
  pickText: `Cliquez sur la carte ou la légende pour voir ses États, son profil photovoltaïque et agricole et ses opportunités.`,
  allTitle: `Les 6 macrorégions`, allLead: `Profil photovoltaïque, profil agricole et opportunités d'agriculture numérique et d'agrivoltaïsme dans chaque région.`,
  sourceNote: `Structure régionale définie par AMAYAD. Les descriptions sont générales et qualitatives : chaque région présente une grande diversité de climats et de systèmes de production. Carte : Natural Earth (domaine public).`,
  chapterText: `La coordination de chaque chapitre régional reste à définir. Nous recherchons des personnes et des organisations pour aider à les former.`,
  pv: `Profil photovoltaïque`, agri: `Profil agricole`, digital: `Opportunité pour l'agriculture numérique`, agripv: `Opportunité agrivoltaïque`,
  coordinator: `Coordination du chapitre`, tbd: `À définir`,
  tableTitle: `Synthèse par région`, tableLead: `L'axe principal d'agriculture numérique et d'agrivoltaïsme de chaque macrorégion.`,
  thRegion: `Région`, thDigital: `Axe agriculture numérique`, thAgripv: `Axe agrivoltaïque principal`
} };

V.de = { reg2: {
  eyebrow: `Regionalgruppen`, statusTag: `Regionale Struktur von AMAYAD`,
  homeTitle: `Sechs Makroregionen`,
  homeText: `AMAYAD gliedert sich in 6 Makroregionen, bestimmt durch die Sonneneinstrahlung und die landwirtschaftlichen Geschäftsmodelle der jeweiligen Gegend.`,
  memText: `Bei der Registrierung kannst du deine Makroregion angeben, um dich mit Mitgliedern in deiner Nähe zu vernetzen.`,
  title: `Regionale Struktur von AMAYAD`,
  lead: `Sechs Makroregionen, bestimmt durch zwei Schlüsselfaktoren, die prägen, wie Energie und Landwirtschaft in jedem Teil des Landes zusammenkommen.`,
  factor1: `Sonneneinstrahlung — Energieerzeugung`, factor2: `Landwirtschaftliche Geschäftsmodelle — Art des digitalen Monitorings und Kapitalisierungsgrad`,
  mapAlt: `Karte Mexikos mit nach AMAYAD-Makroregion eingefärbten Bundesstaaten`,
  pickText: `Klicke auf die Karte oder die Legende, um Bundesstaaten, PV- und Agrarprofil sowie Chancen zu sehen.`,
  allTitle: `Die 6 Makroregionen`, allLead: `PV-Profil, Agrarprofil sowie Chancen für digitale Landwirtschaft und Agri-PV in jeder Region.`,
  sourceNote: `Von AMAYAD festgelegte regionale Struktur. Die Beschreibungen sind allgemein und qualitativ: Jede Region umfasst eine große Vielfalt an Klimata und Produktionssystemen. Karte: Natural Earth (gemeinfrei).`,
  chapterText: `Die Koordination der einzelnen Regionalgruppen steht noch nicht fest. Wir suchen Menschen und Organisationen, die beim Aufbau helfen.`,
  pv: `PV-Profil`, agri: `Agrarprofil`, digital: `Chance für digitale Landwirtschaft`, agripv: `Agri-PV-Chance`,
  coordinator: `Koordination der Gruppe`, tbd: `Noch offen`,
  tableTitle: `Überblick nach Region`, tableLead: `Der Hauptschwerpunkt für digitale Landwirtschaft und Agri-PV in jeder Makroregion.`,
  thRegion: `Region`, thDigital: `Schwerpunkt digitale Landwirtschaft`, thAgripv: `Agri-PV-Hauptschwerpunkt`
} };

V.it = { reg2: {
  eyebrow: `Sezioni regionali`, statusTag: `Struttura regionale AMAYAD`,
  homeTitle: `Sei macroregioni`,
  homeText: `AMAYAD si organizza in 6 macroregioni definite dall'irraggiamento solare e dai modelli di business agricolo di ciascuna zona.`,
  memText: `Al momento dell'iscrizione puoi indicare la tua macroregione per entrare in contatto con i soci della tua zona.`,
  title: `Struttura regionale AMAYAD`,
  lead: `Sei macroregioni definite da due fattori chiave che determinano come energia e agricoltura si combinano in ogni parte del Paese.`,
  factor1: `Irraggiamento solare — produzione di energia`, factor2: `Modelli di business agricolo — tipo di monitoraggio digitale e livello di capitalizzazione`,
  mapAlt: `Mappa del Messico con gli stati colorati per macroregione AMAYAD`,
  pickText: `Clicca sulla mappa o sulla legenda per vedere i suoi stati, il profilo fotovoltaico e agricolo e le opportunità.`,
  allTitle: `Le 6 macroregioni`, allLead: `Profilo fotovoltaico, profilo agricolo e opportunità di agricoltura digitale e agrivoltaico in ogni regione.`,
  sourceNote: `Struttura regionale definita da AMAYAD. Le descrizioni sono generali e qualitative: ogni regione presenta una grande varietà di climi e sistemi produttivi. Mappa: Natural Earth (pubblico dominio).`,
  chapterText: `Il coordinamento di ciascuna sezione regionale è ancora da definire. Cerchiamo persone e organizzazioni che aiutino a costituirle.`,
  pv: `Profilo fotovoltaico`, agri: `Profilo agricolo`, digital: `Opportunità per l'agricoltura digitale`, agripv: `Opportunità agrivoltaica`,
  coordinator: `Coordinamento della sezione`, tbd: `Da definire`,
  tableTitle: `Sintesi per regione`, tableLead: `L'orientamento principale di agricoltura digitale e agrivoltaico di ciascuna macroregione.`,
  thRegion: `Regione`, thDigital: `Orientamento agricoltura digitale`, thAgripv: `Orientamento agrivoltaico principale`
} };

  Object.keys(V).forEach(function (l) { window.AMAYAD_I18N[l] = merge(window.AMAYAD_I18N[l] || {}, V[l]); });
})();
