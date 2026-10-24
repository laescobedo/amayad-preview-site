/* =====================================================================
   AMAYAD — EDITABLE DATA (v2)
   ---------------------------------------------------------------------
   This is the file you edit to publish content. No coding skills needed:
   copy an existing block, change the values, save, reload the page.

   Text fields can be:
     - a plain string  -> shown the same in every language, or
     - an object       -> { es: "…", en: "…", fr: "…", de: "…", it: "…" }
   Missing languages fall back to English, then Spanish.

   Anything marked  [PLACEHOLDER]  must be filled in before going live.
   See README.md ("Placeholders to fill") for the complete checklist.
   ===================================================================== */

window.AMAYAD_CONFIG = {
  /* Form backend for ALL forms (membership, sponsorship, programmes,
     partner, policy support, member-access request, contact).
     Leave "" to use the mailto: fallback (the visitor's mail app opens
     with everything pre-filled). Any endpoint that accepts a JSON POST
     works, e.g. Formspree "https://formspree.io/f/xxxxxxx".
     Every submission includes a "form" field telling you which form it was. */
  FORM_ENDPOINT: "",                                   // [PLACEHOLDER]

  /* Newsletter sign-up endpoint (weekly benefits newsletter).
     Leave "" to use FORM_ENDPOINT; if both are "", mailto: fallback.
     Mailchimp/Brevo/Buttondown etc. usually give you a JSON/POST URL. */
  NEWSLETTER_ENDPOINT: "",                             // [PLACEHOLDER]

  /* [PLACEHOLDER] Official AMAYAD mailbox. Current value is the address
     published by AMAYAD in 2024. */
  CONTACT_EMAIL: "info@bytets.com",

  /* Discord community invite link, e.g. "https://discord.gg/xxxx".
     While "", the Discord button shows "coming soon". */
  DISCORD_URL: "https://discord.gg/XrSfxYrT5p",        // v2.4: public invite (server "Agrivoltaics and Digital Agriculture")

  /* AMAYAD Telegram AI bot. While "", the site shows "coming soon".
     Do NOT put @AgriVoltBot here: it is an external example, not confirmed as AMAYAD's. */
  TELEGRAM_BOT_URL: "",                                // [PLACEHOLDER]

  /* Member portal. While "", the "Member login" button opens the
     "Member portal coming soon — request access" window. */
  MEMBER_PORTAL_URL: "",                               // [PLACEHOLDER]

  /* Social networks. Leave "" to show the icon as "coming soon". */
  SOCIAL: {
    linkedin:  "",   // [PLACEHOLDER] e.g. "https://www.linkedin.com/company/amayad"
    instagram: "",   // [PLACEHOLDER]
    facebook:  "",   // [PLACEHOLDER]
    youtube:   "",   // [PLACEHOLDER]
    x:         "",   // [PLACEHOLDER]
    whatsapp:  ""    // [PLACEHOLDER] e.g. WhatsApp channel link
  },

  /* Free geo-IP endpoints tried in order for first-visit language detection. */
  GEO_ENDPOINTS: ["https://ipapi.co/json/", "https://get.geojs.io/v1/ip/country.json"],
  GEO_TIMEOUT_MS: 2500,

  DEFAULT_LANG: "es",
  SUPPORTED_LANGS: ["es", "en", "fr", "de", "it"]
};

/* ---------------------------------------------------------------------
   MEMBERSHIP TIERS — v2.4 PROPOSAL (Oct 2026). Annual fees. MXN for Mexico, USD for international.
   founding = founding-member price (30% off, locked 2 years) for joining 24 Nov 2026 – 31 Mar 2027.
   IVA to be confirmed. Names/descriptions are translated in i18n-v24.js (tiers.<id>).
   group: "mx" (cards + comparison table) | "intl" (international block).
   Universities / research centres are NOT a paid tier: see "Alianzas académicas" (Partnerships).
   --------------------------------------------------------------------- */
window.AMAYAD_FOUNDING = { discountPct: 30, lockYears: 2, from: "2026-11-24", to: "2027-03-31" };
window.AMAYAD_TIERS = [
  { id: "community",      price: 0,     founding: 0,     currency: "MXN", group: "mx" },
  { id: "student",        price: 400,   founding: 280,   currency: "MXN", group: "mx" },
  { id: "farmer",         price: 600,   founding: 420,   currency: "MXN", group: "mx" },
  { id: "professional",   price: 1800,  founding: 1260,  currency: "MXN", group: "mx", featured: true },
  { id: "company_micro",  price: 8000,  founding: 5600,  currency: "MXN", group: "mx" },
  { id: "company_pyme",   price: 18000, founding: 12600, currency: "MXN", group: "mx" },
  { id: "company_grande", price: 45000, founding: 31500, currency: "MXN", group: "mx" },
  { id: "intl_individual",     price: 120,  currency: "USD", group: "intl", like: "professional" },
  { id: "intl_company_small",  price: 500,  currency: "USD", group: "intl", like: "company_micro" },
  { id: "intl_company_medium", price: 1000, currency: "USD", group: "intl", like: "company_pyme" },
  { id: "intl_company_large",  price: 2500, currency: "USD", group: "intl", like: "company_grande" }
];

/* PERKS MATRIX — v2.4 PROPOSAL. One value per "mx" tier, in AMAYAD_TIERS order:
   community, student, farmer, professional, company_micro, company_pyme, company_grande.
   Values: "y" = included, "n" = not included, number = shown as is,
           "k:xxx" = text perks.v.xxx, [n, "unit"] = n + perks.u.unit.
   Bot quotas, seats, discounts and passes are proposals pending Board approval. */
window.AMAYAD_PERKS = [
  { id: "seats",          v: [1, 1, 1, 1, 2, 5, 10] },
  { id: "newsletter",     v: ["y", "y", "y", "y", "y", "y", "y"] },
  { id: "daily",          v: ["n", "y", "y", "y", "y", "y", "y"] },
  { id: "magazine",       v: ["n", "y", "y", "y", "k:allSeats", "k:allSeats", "k:allSeats"] },
  { id: "discordPublic",  v: ["y", "y", "y", "y", "y", "y", "y"] },
  { id: "discordMembers", v: ["n", "y", "y", "y", "k:allSeats", "k:allSeats", "k:allSeats"] },
  { id: "bot",            v: [[3, "perDay"], [15, "perDay"], [15, "perDay"], [30, "perDay"], [40, "perSeatDay"], [60, "perSeatDay"], [100, "perSeatDay"]] },
  { id: "library",        v: ["k:public", "k:full", "k:full", "k:full", "k:full", "k:full", "k:full"] },
  { id: "webinars",       v: ["k:open", "k:allRec", "k:allRec", "k:allRec", "k:allRec", "k:allRec", "k:allRec"] },
  { id: "committees",     v: ["n", "k:observer", "y", "y", "y", "y", "y"] },
  { id: "voting",         v: ["n", "k:voice", "y", "y", "k:oneVote", "k:oneVote", "k:oneVote"] },
  { id: "directory",      v: ["n", "n", "k:profile", "k:profile", "k:listing", "k:listingLogo", "k:featured"] },
  { id: "events",         v: ["k:general", "k:disc50", "k:disc30", "k:disc20", "k:pass1", "k:pass2", "k:pass4"] },
  { id: "founding",       v: ["n", "y", "y", "y", "y", "y", "y"] }
];

/* ---------------------------------------------------------------------
   EVENTS  (shown on the Events tab and the Home "next event" card)
   date:      "YYYY-MM-DD" (or null when the date is not set yet)
   time:      "18:00" local time, or "" if not defined
   status:    "confirmed" | "planned"
   type:      "presentation" | "congress" | "webinar" | "workshop" | "fieldday" | "networking"
   venue:     text or "" (shows "Venue to be confirmed")
   agenda:    [{ time: "18:00", title: {...} }]   — leave [] for "to be announced"
   speakers:  [{ name: "…", role: {...} }]        — only people who confirmed
   sponsors:  [{ name: "…", url: "…" }]           — only confirmed sponsors
   registerUrl: external registration link; "" = in-site "register interest" form
   Past events (date before today) move automatically to "Past events".
   --------------------------------------------------------------------- */
window.AMAYAD_EVENTS = [
  {
    id: "book-policy-2026",
    date: "2026-11-24", time: "", status: "confirmed", type: "presentation",
    title: {
      es: "Presentación del libro «Cosechando el Sol Dos Veces» y de la iniciativa de política pública en agrivoltaica",
      en: "Launch of the book “Cosechando el Sol Dos Veces” (Harvesting the Sun Twice) and of an agrivoltaics public-policy initiative",
      fr: "Présentation du livre « Cosechando el Sol Dos Veces » et d'une initiative de politique publique sur l'agrivoltaïsme",
      de: "Vorstellung des Buches „Cosechando el Sol Dos Veces“ und einer politischen Initiative zur Agri-PV",
      it: "Presentazione del libro «Cosechando el Sol Dos Veces» e di un'iniziativa di politica pubblica sull'agrivoltaico"
    },
    summary: {
      es: "Luis Alfonso Escobedo, cofundador de AMAYAD, presenta su libro sobre agrivoltaica y agricultura digital. En la misma sesión se presentará la propuesta de iniciativa de política pública para la agrivoltaica en México que AMAYAD está desarrollando.",
      en: "Luis Alfonso Escobedo, AMAYAD co-founder, presents his book on agrivoltaics and digital agriculture. The same session will present the agrivoltaics public-policy initiative for Mexico that AMAYAD is developing.",
      fr: "Luis Alfonso Escobedo, cofondateur d'AMAYAD, présente son livre sur l'agrivoltaïsme et l'agriculture numérique. La même session présentera l'initiative de politique publique sur l'agrivoltaïsme au Mexique qu'AMAYAD est en train d'élaborer.",
      de: "Luis Alfonso Escobedo, Mitgründer von AMAYAD, stellt sein Buch über Agri-PV und digitale Landwirtschaft vor. In derselben Veranstaltung wird die politische Initiative zur Agri-PV in Mexiko vorgestellt, die AMAYAD derzeit ausarbeitet.",
      it: "Luis Alfonso Escobedo, cofondatore di AMAYAD, presenta il suo libro su agrivoltaico e agricoltura digitale. Nella stessa sessione sarà presentata l'iniziativa di politica pubblica sull'agrivoltaico in Messico che AMAYAD sta elaborando."
    },
    venue: "",                                            // [PLACEHOLDER] venue TBD
    city: "",                                             // [PLACEHOLDER]
    agenda: [
      { time: "", title: { es: "Bienvenida", en: "Welcome", fr: "Accueil", de: "Begrüßung", it: "Benvenuto" } },
      { time: "", title: { es: "Presentación del libro «Cosechando el Sol Dos Veces»", en: "Book presentation: “Cosechando el Sol Dos Veces”", fr: "Présentation du livre « Cosechando el Sol Dos Veces »", de: "Buchvorstellung „Cosechando el Sol Dos Veces“", it: "Presentazione del libro «Cosechando el Sol Dos Veces»" } },
      { time: "", title: { es: "Presentación de la iniciativa de política pública en agrivoltaica", en: "Presentation of the agrivoltaics public-policy initiative", fr: "Présentation de l'initiative de politique publique sur l'agrivoltaïsme", de: "Vorstellung der politischen Initiative zur Agri-PV", it: "Presentazione dell'iniziativa di politica pubblica sull'agrivoltaico" } },
      { time: "", title: { es: "Preguntas y networking", en: "Q&A and networking", fr: "Questions et réseautage", de: "Fragen und Networking", it: "Domande e networking" } }
    ],
    speakers: [
      { name: "Luis Alfonso Escobedo", role: { es: "Autor · Cofundador de AMAYAD", en: "Author · AMAYAD co-founder", fr: "Auteur · Cofondateur d'AMAYAD", de: "Autor · Mitgründer von AMAYAD", it: "Autore · Cofondatore di AMAYAD" } }
    ],
    sponsors: [],
    registerUrl: ""
  },
  {
    id: "congress-1",
    date: null, time: "", status: "planned", type: "congress",
    title: {
      es: "Primer Congreso de Agrivoltaica en México",
      en: "First Agrivoltaics Congress in Mexico",
      fr: "Premier Congrès de l'agrivoltaïsme au Mexique",
      de: "Erster Agri-PV-Kongress in Mexiko",
      it: "Primo Congresso sull'agrivoltaico in Messico"
    },
    summary: {
      es: "AMAYAD planea organizar un congreso que reúna a la industria solar, al campo, a la agricultura digital, a la academia y al gobierno. Fecha y sede por definir.",
      en: "AMAYAD plans to organise a congress bringing together the solar industry, farmers, digital agriculture, academia and government. Date and venue to be defined.",
      fr: "AMAYAD prévoit d'organiser un congrès réunissant l'industrie solaire, le monde agricole, l'agriculture numérique, le monde académique et les pouvoirs publics. Date et lieu à définir.",
      de: "AMAYAD plant einen Kongress, der Solarbranche, Landwirtschaft, digitale Landwirtschaft, Wissenschaft und Behörden zusammenbringt. Datum und Ort werden noch festgelegt.",
      it: "AMAYAD prevede di organizzare un congresso che riunisca industria solare, mondo agricolo, agricoltura digitale, università e istituzioni. Data e sede da definire."
    },
    venue: "", city: "", agenda: [], speakers: [], sponsors: [], registerUrl: ""
  }
  /* Example:
  ,{ id: "webinar-1", date: "2027-02-10", time: "17:00", status: "confirmed", type: "webinar",
     title: { es: "Webinar: …", en: "Webinar: …" }, summary: { es: "…", en: "…" },
     venue: "Online", city: "", agenda: [], speakers: [], sponsors: [], registerUrl: "https://…" }
  */
];

/* ---------------------------------------------------------------------
   NEWS (Home → "Latest news"). Empty = "coming soon" placeholders.
   { date: "2026-11-24", title: {...}, text: {...}, url: "" }
   --------------------------------------------------------------------- */
window.AMAYAD_NEWS = [];

/* ---------------------------------------------------------------------
   PARTNERS
   status: "partner"        -> confirmed partner
           "conversation"   -> potential partner / in conversation
   Only add organisations that have agreed to be listed. No logos.
   --------------------------------------------------------------------- */
window.AMAYAD_PARTNERS = [
  { name: "INAMAP", status: "partner", url: "", note: "" },                         // [PLACEHOLDER] full name + URL
  { name: "Círculo de Exportadores", status: "conversation", url: "", note: "" },
  { name: "ANES", fullName: "Asociación Nacional de Energía Solar", status: "conversation", url: "", note: "" }
];
/* Number of empty "your organisation here" slots shown after the list. */
window.AMAYAD_PARTNER_SLOTS = 3;

/* ---------------------------------------------------------------------
   MEMBERS — empty until members confirm in writing they can be listed.
   sector: solar | agriculture | digital | research | government | investor | other
   --------------------------------------------------------------------- */
window.AMAYAD_MEMBERS = [
  /* { name: "Empresa Ejemplo S.A. de C.V.", sector: "solar", tier: "company_micro",
       city: "Hermosillo, Sonora", url: "https://example.com", founding: true } */
];

/* ---------------------------------------------------------------------
   PROGRAMME LINKS — optional external links (e.g. a Google Form or a
   PDF brochure). "" = use the built-in form on the site.
   --------------------------------------------------------------------- */
window.AMAYAD_PROGRAM_LINKS = {
  ambassadorsForm: "",        // [PLACEHOLDER optional]
  youngFarmersForm: "",       // [PLACEHOLDER optional]
  membershipBrochurePdf: "",  // [PLACEHOLDER optional] shows a "Download brochure" button when set
  sponsorshipDeckPdf: "",     // [PLACEHOLDER optional]
  handbookPdf: "",            // when the handbook is published
  policyInitiativePdf: ""     // when the policy initiative is published
};

/* ---------------------------------------------------------------------
   LIBRARY
   category: guides | research | regulation | cases | amayad |
             handbook | tax | carbon | blockchain | map | magazine | reports
   status:   "available" | "forthcoming"
   Only add resources with a working, verifiable URL (or mark forthcoming).
   Categories without items show a "coming soon" card automatically.
   --------------------------------------------------------------------- */
window.AMAYAD_LIBRARY = [
  {
    category: "amayad", status: "forthcoming", year: 2026,
    title: { es: "Cosechando el Sol Dos Veces", en: "Harvesting the Sun Twice",
             fr: "Harvesting the Sun Twice (Cosechando el Sol Dos Veces)",
             de: "Harvesting the Sun Twice (Cosechando el Sol Dos Veces)",
             it: "Harvesting the Sun Twice (Cosechando el Sol Dos Veces)" },
    source: "Luis Alfonso Escobedo",
    desc: { es: "Libro de referencia sobre agrivoltaica y agricultura digital, escrito por el cofundador de AMAYAD. Presentación: 24 de noviembre de 2026.",
            en: "A reference book on agrivoltaics and digital agriculture by AMAYAD's co-founder. Launch: 24 November 2026.",
            fr: "Ouvrage de référence sur l'agrivoltaïsme et l'agriculture numérique, par le cofondateur d'AMAYAD. Présentation : 24 novembre 2026.",
            de: "Ein Fachbuch über Agri-PV und digitale Landwirtschaft vom Mitgründer von AMAYAD. Vorstellung: 24. November 2026.",
            it: "Un libro di riferimento su agrivoltaico e agricoltura digitale del cofondatore di AMAYAD. Presentazione: 24 novembre 2026." },
    url: ""
  },
  {
    category: "guides", status: "available", year: null,
    title: "Agrivoltaics: Opportunities for Agriculture and the Energy Transition",
    source: "Fraunhofer ISE (EN / DE)",
    desc: { es: "Guía del Instituto Fraunhofer de Sistemas de Energía Solar (Alemania) sobre tecnología, agricultura, economía y marco normativo.",
            en: "Guide by the Fraunhofer Institute for Solar Energy Systems (Germany) covering technology, agriculture, economics and regulation.",
            fr: "Guide de l'Institut Fraunhofer pour les systèmes d'énergie solaire (Allemagne) : technologie, agriculture, économie et réglementation.",
            de: "Leitfaden des Fraunhofer-Instituts für Solare Energiesysteme zu Technik, Landwirtschaft, Wirtschaftlichkeit und Rechtsrahmen.",
            it: "Guida del Fraunhofer Institute for Solar Energy Systems (Germania) su tecnologia, agricoltura, economia e normativa." },
    url: "https://www.ise.fraunhofer.de/en/publications/studies/agrivoltaics-opportunities-for-agriculture-and-the-energy-transition.html"
  },
  {
    category: "research", status: "available", year: 2022,
    title: "The 5 Cs of Agrivoltaic Success Factors in the United States: Lessons from the InSPIRE Research Study",
    source: "NREL/TP-6A20-83566 · OSTI.gov (EN)",
    desc: { es: "Informe técnico que propone cinco factores de éxito: clima, configuración, cultivos, compatibilidad y colaboración.",
            en: "Technical report proposing five success factors: climate, configuration, crops, compatibility and collaboration.",
            fr: "Rapport technique proposant cinq facteurs de réussite : climat, configuration, cultures, compatibilité et collaboration.",
            de: "Technischer Bericht mit fünf Erfolgsfaktoren: Klima, Konfiguration, Kulturen, Kompatibilität und Kooperation.",
            it: "Rapporto tecnico che propone cinque fattori di successo: clima, configurazione, colture, compatibilità e collaborazione." },
    url: "https://www.osti.gov/biblio/1882930"
  },
  {
    category: "research", status: "available", year: null,
    title: "Agrivoltaics — Solar Market Research and Analysis",
    source: "NLR (U.S. national laboratory, formerly NREL) (EN)",
    desc: { es: "Página de investigación en agrivoltaica del laboratorio nacional estadounidense, con enlaces al proyecto InSPIRE.",
            en: "Agrivoltaics research page of the U.S. national laboratory, with links to the InSPIRE project.",
            fr: "Page de recherche sur l'agrivoltaïsme du laboratoire national américain, avec des liens vers le projet InSPIRE.",
            de: "Agri-PV-Forschungsseite des US-Nationallabors mit Links zum InSPIRE-Projekt.",
            it: "Pagina di ricerca sull'agrivoltaico del laboratorio nazionale statunitense, con link al progetto InSPIRE." },
    url: "https://www.nlr.gov/solar/market-research-analysis/agrivoltaics"
  },
  {
    category: "regulation", status: "available", year: 2025,
    title: { es: "Ley del Sector Eléctrico (LSE, 2025)", en: "Mexico's Electricity Sector Law (LSE, 2025)", fr: "Loi mexicaine sur le secteur électrique (LSE, 2025)", de: "Mexikanisches Stromsektorgesetz (LSE, 2025)", it: "Legge messicana sul settore elettrico (LSE, 2025)" },
    source: "Cámara de Diputados · DOF 18-03-2025 (ES)",
    desc: { es: "Texto oficial. El artículo 19 establece que las centrales con capacidad menor a 0.7 MW son generadoras exentas y no requieren permiso de generación.",
            en: "Official text (Spanish). Article 19 states that power plants under 0.7 MW are exempt generators and need no generation permit.",
            fr: "Texte officiel (espagnol). L'article 19 prévoit que les centrales de moins de 0,7 MW sont exemptées de permis de production.",
            de: "Amtlicher Text (Spanisch). Art. 19: Anlagen unter 0,7 MW sind befreite Erzeuger und benötigen keine Erzeugungsgenehmigung.",
            it: "Testo ufficiale (spagnolo). L'articolo 19 stabilisce che gli impianti sotto 0,7 MW sono esenti dal permesso di generazione." },
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LSE.pdf"
  },
  {
    category: "tax", status: "available", year: null,
    title: { es: "Ley del Impuesto sobre la Renta — art. 34, fracc. XIII", en: "Mexican Income Tax Law (LISR) — Art. 34, section XIII", fr: "Loi mexicaine de l'impôt sur le revenu (LISR) — art. 34, fraction XIII", de: "Mexikanisches Einkommensteuergesetz (LISR) — Art. 34 Abs. XIII", it: "Legge messicana sull'imposta sul reddito (LISR) — art. 34, frazione XIII" },
    source: "Cámara de Diputados (ES)",
    desc: { es: "Deducción de hasta 100 % para maquinaria y equipo de generación con fuentes renovables, sujeta a condiciones. Consulta a tu asesor fiscal.",
            en: "Up to 100% deduction for renewable-generation machinery and equipment, subject to conditions. Consult your tax advisor.",
            fr: "Déduction jusqu'à 100 % des équipements de production d'énergie renouvelable, sous conditions. Consultez votre conseiller fiscal.",
            de: "Bis zu 100 % Abschreibung für Anlagen zur Erzeugung erneuerbarer Energie, unter Bedingungen. Fragen Sie Ihre Steuerberatung.",
            it: "Deduzione fino al 100% per macchinari e impianti di generazione rinnovabile, a determinate condizioni. Consulta il tuo consulente fiscale." },
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf"
  },
  { category: "handbook", status: "forthcoming", year: null,
    title: { es: "Manual AMAYAD de agrivoltaica para México", en: "AMAYAD Agrivoltaics Handbook for Mexico", fr: "Manuel AMAYAD de l'agrivoltaïsme pour le Mexique", de: "AMAYAD-Handbuch Agri-PV für Mexiko", it: "Manuale AMAYAD dell'agrivoltaico per il Messico" },
    source: "AMAYAD",
    desc: { es: "Guía práctica planeada: selección de sitio, configuraciones, cultivos, permisos, modelos de negocio y monitoreo digital.", en: "Planned practical guide: site selection, configurations, crops, permits, business models and digital monitoring.", fr: "Guide pratique prévu : choix du site, configurations, cultures, autorisations, modèles économiques et suivi numérique.", de: "Geplanter Praxisleitfaden: Standortwahl, Konfigurationen, Kulturen, Genehmigungen, Geschäftsmodelle und digitales Monitoring.", it: "Guida pratica prevista: scelta del sito, configurazioni, colture, autorizzazioni, modelli di business e monitoraggio digitale." },
    url: "" },
  { category: "carbon", status: "forthcoming", year: null,
    title: { es: "Bonos de carbono y agrivoltaica: guía explicativa", en: "Carbon credits and agrivoltaics: an explainer", fr: "Crédits carbone et agrivoltaïsme : guide explicatif", de: "CO₂-Zertifikate und Agri-PV: ein Erklärstück", it: "Crediti di carbonio e agrivoltaico: una guida" },
    source: "AMAYAD",
    desc: { es: "Explicador planeado sobre cómo funcionan los mercados de carbono y qué considerar en proyectos agrivoltaicos.", en: "Planned explainer on how carbon markets work and what to consider in agrivoltaic projects.", fr: "Explication prévue sur le fonctionnement des marchés du carbone et les points d'attention pour les projets agrivoltaïques.", de: "Geplante Erklärung, wie CO₂-Märkte funktionieren und was bei Agri-PV-Projekten zu beachten ist.", it: "Spiegazione prevista su come funzionano i mercati del carbonio e cosa considerare nei progetti agrivoltaici." },
    url: "" },
  { category: "blockchain", status: "forthcoming", year: null,
    title: { es: "Blockchain y trazabilidad en el campo: guía explicativa", en: "Blockchain and farm-to-fork traceability: an explainer", fr: "Blockchain et traçabilité agricole : guide explicatif", de: "Blockchain und Rückverfolgbarkeit in der Landwirtschaft: ein Erklärstück", it: "Blockchain e tracciabilità agricola: una guida" },
    source: "AMAYAD",
    desc: { es: "Explicador planeado sobre registros distribuidos, trazabilidad de alimentos y certificados de energía.", en: "Planned explainer on distributed ledgers, food traceability and energy certificates.", fr: "Explication prévue sur les registres distribués, la traçabilité alimentaire et les certificats d'énergie.", de: "Geplante Erklärung zu verteilten Registern, Lebensmittel-Rückverfolgbarkeit und Energiezertifikaten.", it: "Spiegazione prevista su registri distribuiti, tracciabilità alimentare e certificati energetici." },
    url: "" },
  { category: "map", status: "forthcoming", year: null,
    title: { es: "Mapa mundial de proyectos agrivoltaicos", en: "World map of agrivoltaic projects", fr: "Carte mondiale des projets agrivoltaïques", de: "Weltkarte der Agri-PV-Projekte", it: "Mappa mondiale dei progetti agrivoltaici" },
    source: "AMAYAD",
    desc: { es: "Mapa interactivo planeado con proyectos documentados públicamente, con fuente para cada punto.", en: "Planned interactive map of publicly documented projects, with a source for every point.", fr: "Carte interactive prévue des projets documentés publiquement, avec une source pour chaque point.", de: "Geplante interaktive Karte öffentlich dokumentierter Projekte, mit Quelle für jeden Punkt.", it: "Mappa interattiva prevista dei progetti documentati pubblicamente, con una fonte per ogni punto." },
    url: "" },
  { category: "magazine", status: "forthcoming", year: null,
    title: { es: "Archivo del boletín y revista AMAYAD", en: "AMAYAD newsletter & magazine archive", fr: "Archives de la lettre d'information et du magazine AMAYAD", de: "Archiv des AMAYAD-Newsletters und -Magazins", it: "Archivio della newsletter e della rivista AMAYAD" },
    source: "AMAYAD",
    desc: { es: "Aquí se archivarán los boletines semanales de beneficios y futuras ediciones de la revista.", en: "Weekly benefits newsletters and future magazine issues will be archived here.", fr: "Les lettres hebdomadaires et les futurs numéros du magazine seront archivés ici.", de: "Hier werden die wöchentlichen Newsletter und künftige Magazinausgaben archiviert.", it: "Qui saranno archiviate le newsletter settimanali e i futuri numeri della rivista." },
    url: "" },
  { category: "reports", status: "forthcoming", year: null,
    title: { es: "Informes anuales de AMAYAD", en: "AMAYAD annual reports", fr: "Rapports annuels d'AMAYAD", de: "AMAYAD-Jahresberichte", it: "Relazioni annuali di AMAYAD" },
    source: "AMAYAD",
    desc: { es: "Informes de actividades y transparencia, a partir del primer ejercicio completo.", en: "Activity and transparency reports, starting with the first full year of operation.", fr: "Rapports d'activité et de transparence, à partir du premier exercice complet.", de: "Tätigkeits- und Transparenzberichte, ab dem ersten vollen Geschäftsjahr.", it: "Relazioni di attività e trasparenza, a partire dal primo esercizio completo." },
    url: "" }
];

/* =====================================================================
   v2.1 ADDITIONS
   ===================================================================== */

/* ---------------------------------------------------------------------
   AMAYAD REGIONAL STRUCTURE (v2.2) — 6 macro-regions defined by Luis
   by two key factors: solar radiation (energy production) and farm
   business models (type of digital monitoring, capitalization level).
   To move a state, cut its code from one "states" list and paste it into
   another (each state exactly once). State codes:
   AGU BCN BCS CAM CHH CHP CMX COA COL DUR GRO GUA HID JAL MEX MIC MOR
   NAY NLE OAX PUE QUE ROO SIN SLP SON TAB TAM TLA VER YUC ZAC
   (CMX = Ciudad de México, MEX = Estado de México)
   Fields: color (map), name, pv (Perfil fotovoltaico), agri (Perfil
   agrícola), digital (Oportunidad agricultura digital), agripv
   (Oportunidad agrivoltaica), digitalFocus / agripvFocus (summary table),
   coordinator ("" = "Por definir"). Text fields take { es, en, fr, de, it }.
   --------------------------------------------------------------------- */
window.AMAYAD_REGIONS = [
  { id: "noroeste", color: "#f5a524", states: ["SIN", "SON", "BCN", "BCS"], coordinator: "",
    name: { es: "Noroeste", en: "Northwest", fr: "Nord-Ouest", de: "Nordwesten", it: "Nord-Ovest" },
    pv: { es: "Una de las irradiaciones más altas del mundo (GHI >6.0 kWh/m²/día): ideal para proyectos fotovoltaicos de gran escala.", en: "Among the highest irradiance in the world (GHI >6.0 kWh/m²/day): ideal for large-scale solar projects.", fr: "L'un des ensoleillements les plus élevés au monde (GHI >6,0 kWh/m²/jour) : idéal pour des projets photovoltaïques à grande échelle.", de: "Eine der höchsten Einstrahlungen der Welt (GHI >6,0 kWh/m²/Tag): ideal für großskalige PV-Projekte.", it: "Uno degli irraggiamenti più alti al mondo (GHI >6,0 kWh/m²/giorno): ideale per progetti fotovoltaici su larga scala." },
    agri: { es: "Agricultura de riego intensiva —a cielo abierto y bajo malla sombra— con alta tecnificación e hidroponía.", en: "Intensive irrigated agriculture — open field and under shade netting — with high technology and hydroponics.", fr: "Agriculture irriguée intensive — en plein champ et sous filet d'ombrage — très technicisée, avec hydroponie.", de: "Intensive Bewässerungslandwirtschaft – im Freiland und unter Schattiernetzen – hoch technisiert, mit Hydroponik.", it: "Agricoltura irrigua intensiva — in pieno campo e sotto rete ombreggiante — ad alta tecnologia, con idroponica." },
    digital: { es: "Telemetría avanzada del agua, índices NDVI con satélites y drones, y automatización de la fertirrigación.", en: "Advanced water telemetry, satellite and drone NDVI, and fertigation automation.", fr: "Télémétrie avancée de l'eau, NDVI par satellite et drone, et automatisation de la fertirrigation.", de: "Fortschrittliche Wassertelemetrie, NDVI per Satellit und Drohne sowie automatisierte Fertigation.", it: "Telemetria avanzata dell'acqua, NDVI da satellite e drone e automazione della fertirrigazione." },
    agripv: { es: "Sombra estratégica con seguidores solares para reducir el estrés térmico en tomate, pimiento y uva; además puede reducir la evapotranspiración y el consumo de agua. La energía puede alimentar el bombeo de agua subterránea, descarbonizar la operación y reducir costos operativos.", en: "Strategic shade from solar trackers to reduce heat stress in tomato, pepper and grape; it can also reduce evapotranspiration and water use. The energy can power groundwater pumping, decarbonise operations and lower operating costs.", fr: "Un ombrage stratégique grâce aux trackers pour réduire le stress thermique de la tomate, du poivron et de la vigne ; il peut aussi réduire l'évapotranspiration et la consommation d'eau. L'énergie peut alimenter le pompage des eaux souterraines, décarboner l'exploitation et réduire les coûts d'exploitation.", de: "Gezielte Verschattung mit Nachführsystemen senkt den Hitzestress bei Tomate, Paprika und Weinrebe und kann zudem Evapotranspiration und Wasserverbrauch verringern. Der Strom kann Grundwasserpumpen versorgen, den Betrieb dekarbonisieren und Betriebskosten senken.", it: "Ombra strategica con inseguitori solari per ridurre lo stress termico di pomodoro, peperone e vite; può inoltre ridurre l'evapotraspirazione e il consumo d'acqua. L'energia può alimentare il pompaggio delle acque sotterranee, decarbonizzare l'attività e ridurre i costi operativi." },
    digitalFocus: { es: "Automatización hídrica e IA en riego", en: "Water automation and AI for irrigation", fr: "Automatisation hydrique et IA pour l'irrigation", de: "Wasserautomatisierung und KI in der Bewässerung", it: "Automazione idrica e IA nell'irrigazione" },
    agripvFocus: { es: "Reducción de estrés térmico y evaporación", en: "Reducing heat stress and evaporation", fr: "Réduction du stress thermique et de l'évaporation", de: "Weniger Hitzestress und Verdunstung", it: "Riduzione dello stress termico e dell'evaporazione" } },
  { id: "norte", color: "#c0582a", states: ["CHH", "COA", "DUR", "ZAC"], coordinator: "",
    name: { es: "Norte Árido", en: "Arid North", fr: "Nord aride", de: "Trockener Norden", it: "Nord arido" },
    pv: { es: "Alta radiación durante todo el año y grandes extensiones de terreno plano.", en: "High radiation all year round and large expanses of flat land.", fr: "Fort ensoleillement toute l'année et de vastes terrains plats.", de: "Ganzjährig hohe Einstrahlung und große ebene Flächen.", it: "Irraggiamento elevato tutto l'anno e ampie estensioni di terreno pianeggiante." },
    agri: { es: "Forrajes (alfalfa, maíz para ensilaje), nogal pecanero, manzana y frijol, integrados con la ganadería lechera y de carne.", en: "Forage (alfalfa, corn silage), pecan, apple and beans, integrated with dairy and beef cattle.", fr: "Fourrages (luzerne, maïs ensilage), noix de pécan, pomme et haricot, intégrés à l'élevage laitier et allaitant.", de: "Futterbau (Luzerne, Silomais), Pekannuss, Apfel und Bohnen, verknüpft mit Milch- und Fleischrinderhaltung.", it: "Foraggi (erba medica, mais da insilato), noce pecan, mela e fagiolo, integrati con l'allevamento da latte e da carne." },
    digital: { es: "Sensores de humedad de suelo a profundidad, monitoreo del estrés hídrico en huertos perennes e IoT para la gestión de pivotes centrales.", en: "Deep soil-moisture sensors, water-stress monitoring in perennial orchards and IoT for centre-pivot management.", fr: "Capteurs d'humidité du sol en profondeur, suivi du stress hydrique des vergers pérennes et IoT pour la gestion des pivots centraux.", de: "Bodenfeuchtesensoren in der Tiefe, Überwachung des Wasserstresses in Dauerkulturen und IoT für die Steuerung von Kreisberegnungsanlagen.", it: "Sensori di umidità del suolo in profondità, monitoraggio dello stress idrico nei frutteti perenni e IoT per la gestione dei pivot centrali." },
    agripv: { es: "Estructuras más altas que sirven como protección física contra el granizo —frecuente en zonas frutícolas— y reducen las heladas nocturnas; forrajes y pasturas bajo paneles en zonas de escasez hídrica severa.", en: "Taller structures that act as physical protection against hail — common in fruit-growing areas — and reduce night frost; forage and pasture under panels in areas of severe water scarcity.", fr: "Des structures plus hautes servant de protection physique contre la grêle — fréquente dans les zones fruitières — et limitant les gelées nocturnes ; fourrages et pâturages sous panneaux dans les zones de pénurie d'eau sévère.", de: "Höhere Strukturen als physischer Schutz vor Hagel – in Obstbaugebieten häufig – und gegen Nachtfrost; Futter und Weide unter Modulen in Gebieten mit starkem Wassermangel.", it: "Strutture più alte che fungono da protezione fisica contro la grandine — frequente nelle zone frutticole — e riducono le gelate notturne; foraggi e pascoli sotto i pannelli nelle zone con grave scarsità d'acqua." },
    digitalFocus: { es: "Telemetría de suelo y gestión de pivotes", en: "Soil telemetry and pivot management", fr: "Télémétrie du sol et gestion des pivots", de: "Bodentelemetrie und Pivot-Steuerung", it: "Telemetria del suolo e gestione dei pivot" },
    agripvFocus: { es: "Protección física (granizo/heladas) y forrajes", en: "Physical protection (hail/frost) and forage", fr: "Protection physique (grêle/gel) et fourrages", de: "Physischer Schutz (Hagel/Frost) und Futterbau", it: "Protezione fisica (grandine/gelate) e foraggi" } },
  { id: "noreste", color: "#8e5ba8", states: ["NLE", "TAM", "SLP"], coordinator: "",
    name: { es: "Noreste", en: "Northeast", fr: "Nord-Est", de: "Nordosten", it: "Nord-Est" },
    pv: { es: "Buena radiación, con variaciones cerca del Golfo y en las zonas serranas.", en: "Good radiation, varying near the Gulf and in mountain areas.", fr: "Bon ensoleillement, variable près du Golfe et dans les zones montagneuses.", de: "Gute Einstrahlung, mit Schwankungen in Golfnähe und in den Bergen.", it: "Buon irraggiamento, variabile vicino al Golfo e nelle zone montuose." },
    agri: { es: "Sorgo, cítricos, caña de azúcar y ganadería extensiva; agricultura comercial tecnificada en valles y deltas.", en: "Sorghum, citrus, sugarcane and extensive livestock; technified commercial agriculture in valleys and deltas.", fr: "Sorgho, agrumes, canne à sucre et élevage extensif ; agriculture commerciale technicisée dans les vallées et les deltas.", de: "Sorghum, Zitrusfrüchte, Zuckerrohr und extensive Viehhaltung; technisierte kommerzielle Landwirtschaft in Tälern und Deltas.", it: "Sorgo, agrumi, canna da zucchero e allevamento estensivo; agricoltura commerciale tecnologica in valli e delta." },
    digital: { es: "Predicción meteorológica local para el control de plagas y enfermedades en cítricos, y trazabilidad digital para exportar a Estados Unidos.", en: "Local weather forecasting for citrus pest and disease control, and digital traceability for export to the United States.", fr: "Prévision météo locale pour lutter contre les ravageurs et maladies des agrumes, et traçabilité numérique pour l'export vers les États-Unis.", de: "Lokale Wettervorhersage zur Schädlings- und Krankheitsbekämpfung bei Zitrus sowie digitale Rückverfolgbarkeit für den Export in die USA.", it: "Previsioni meteo locali per il controllo di parassiti e malattie degli agrumi e tracciabilità digitale per l'export verso gli Stati Uniti." },
    agripv: { es: "Sistemas híbridos que abastecen empacadoras, cuartos fríos y plantas procesadoras de cítricos y jugos; agrivoltaica en potreros que da sombra al ganado —bienestar animal y menor consumo de agua— mientras genera energía de respaldo.", en: "Hybrid systems powering packhouses, cold rooms and citrus and juice processing plants; agrivoltaics on pastures that shade cattle — animal welfare and lower water use — while generating backup power.", fr: "Systèmes hybrides alimentant stations de conditionnement, chambres froides et usines de transformation d'agrumes et de jus ; agrivoltaïsme sur les pâturages qui ombrage le bétail — bien-être animal et moindre consommation d'eau — tout en produisant une énergie de secours.", de: "Hybridsysteme für Packhäuser, Kühlräume und Zitrus- und Saftverarbeitung; Agri-PV auf Weiden, die dem Vieh Schatten spendet – Tierwohl und weniger Wasserbedarf – und zugleich Notstrom erzeugt.", it: "Sistemi ibridi che alimentano magazzini di confezionamento, celle frigorifere e impianti di trasformazione di agrumi e succhi; agrivoltaico sui pascoli che fa ombra al bestiame — benessere animale e minor consumo d'acqua — generando energia di riserva." },
    digitalFocus: { es: "Predicción climática y trazabilidad", en: "Weather forecasting and traceability", fr: "Prévision climatique et traçabilité", de: "Wettervorhersage und Rückverfolgbarkeit", it: "Previsione climatica e tracciabilità" },
    agripvFocus: { es: "Electrificación de agroindustria y bienestar ganadero", en: "Agro-industry electrification and livestock welfare", fr: "Électrification de l'agro-industrie et bien-être animal", de: "Elektrifizierung der Agrarindustrie und Tierwohl", it: "Elettrificazione dell'agroindustria e benessere del bestiame" } },
  { id: "occidente", color: "#7a9a2e", states: ["JAL", "MIC", "GUA", "COL", "NAY", "QUE", "AGU"], coordinator: "",
    name: { es: "Occidente / Bajío", en: "West / Bajío", fr: "Ouest / Bajío", de: "Westen / Bajío", it: "Ovest / Bajío" },
    pv: { es: "Buena radiación: alta en la temporada seca, con nubosidad estacional en la temporada de lluvias.", en: "Good radiation: high in the dry season, with seasonal cloud cover in the rainy season.", fr: "Bon ensoleillement : élevé en saison sèche, avec une nébulosité saisonnière pendant la saison des pluies.", de: "Gute Einstrahlung: hoch in der Trockenzeit, saisonale Bewölkung in der Regenzeit.", it: "Buon irraggiamento: alto nella stagione secca, con nuvolosità stagionale nella stagione delle piogge." },
    agri: { es: "El motor agrícola de mayor valor de México: berries (fresa, arándano, frambuesa), aguacate, agave, hortalizas de invernadero y maíz.", en: "Mexico's highest-value agricultural engine: berries (strawberry, blueberry, raspberry), avocado, agave, greenhouse vegetables and maize.", fr: "Le moteur agricole à plus forte valeur du Mexique : petits fruits (fraise, myrtille, framboise), avocat, agave, légumes sous serre et maïs.", de: "Mexikos wertvollster Agrarmotor: Beeren (Erdbeere, Heidelbeere, Himbeere), Avocado, Agave, Gewächshausgemüse und Mais.", it: "Il motore agricolo di maggior valore del Messico: frutti di bosco (fragola, mirtillo, lampone), avocado, agave, ortaggi in serra e mais." },
    digital: { es: "Visión por computadora con IA para la detección temprana de enfermedades, IoT en invernaderos y macrotúneles, huella de carbono y trazabilidad con blockchain.", en: "AI computer vision for early disease detection, IoT for greenhouses and macro-tunnels, carbon footprint and blockchain traceability.", fr: "Vision par ordinateur et IA pour détecter tôt les maladies, IoT pour serres et grands tunnels, empreinte carbone et traçabilité par blockchain.", de: "KI-Bildverarbeitung zur frühen Krankheitserkennung, IoT für Gewächshäuser und Folientunnel, CO₂-Fußabdruck und Blockchain-Rückverfolgbarkeit.", it: "Visione artificiale con IA per la diagnosi precoce delle malattie, IoT per serre e macrotunnel, impronta di carbonio e tracciabilità con blockchain." },
    agripv: { es: "Sustituir los macrotúneles de plástico por módulos fotovoltaicos semitransparentes o muy espaciados sobre berries y hortalizas; generación distribuida para enfriamiento, empaque y empacadoras de exportación que operan 24/7.", en: "Replacing plastic macro-tunnels with semi-transparent or widely spaced PV modules over berries and vegetables; distributed generation for cooling, packing and export packhouses running 24/7.", fr: "Remplacer les grands tunnels plastiques par des modules PV semi-transparents ou très espacés au-dessus des petits fruits et légumes ; production décentralisée pour le refroidissement, le conditionnement et les stations d'export fonctionnant 24 h/24.", de: "Kunststoff-Folientunnel durch semitransparente oder weit auseinanderstehende PV-Module über Beeren und Gemüse ersetzen; dezentrale Erzeugung für Kühlung, Verpackung und Export-Packhäuser im 24/7-Betrieb.", it: "Sostituire i macrotunnel in plastica con moduli fotovoltaici semitrasparenti o molto distanziati su frutti di bosco e ortaggi; generazione distribuita per raffreddamento, confezionamento e magazzini per l'export attivi 24/7." },
    digitalFocus: { es: "IoT para macrotúneles y visión por computadora", en: "IoT for macro-tunnels and computer vision", fr: "IoT pour grands tunnels et vision par ordinateur", de: "IoT für Folientunnel und Bildverarbeitung", it: "IoT per macrotunnel e visione artificiale" },
    agripvFocus: { es: "Agrivoltaica de alto valor (berries) y autoconsumo", en: "High-value agrivoltaics (berries) and self-consumption", fr: "Agrivoltaïsme à haute valeur (petits fruits) et autoconsommation", de: "Hochwertige Agri-PV (Beeren) und Eigenverbrauch", it: "Agrivoltaico ad alto valore (frutti di bosco) e autoconsumo" } },
  { id: "centro", color: "#1d4e89", states: ["MEX", "PUE", "HID", "TLA", "MOR", "CMX"], coordinator: "",
    name: { es: "Centro / Valles Altos", en: "Centre / High Valleys", fr: "Centre / Hautes vallées", de: "Zentrum / Hochtäler", it: "Centro / Valli alte" },
    pv: { es: "Radiación moderada-alta, condicionada por la altitud y la nubosidad de montaña.", en: "Moderate-to-high radiation, shaped by altitude and mountain cloud cover.", fr: "Ensoleillement modéré à élevé, conditionné par l'altitude et la nébulosité de montagne.", de: "Mittlere bis hohe Einstrahlung, geprägt von Höhenlage und Bergbewölkung.", it: "Irraggiamento medio-alto, condizionato dall'altitudine e dalla nuvolosità di montagna." },
    agri: { es: "Minifundios fragmentados, granos básicos (maíz, cebada), hortalizas de clima frío, floricultura e invernaderos familiares.", en: "Fragmented smallholdings, staple grains (maize, barley), cool-climate vegetables, floriculture and family greenhouses.", fr: "Microfundios morcelés, céréales de base (maïs, orge), légumes de climat frais, floriculture et serres familiales.", de: "Zersplitterter Kleinstbesitz, Grundnahrungsgetreide (Mais, Gerste), Gemüse kühler Lagen, Blumenanbau und Familiengewächshäuser.", it: "Minifondi frammentati, cereali di base (mais, orzo), ortaggi di clima freddo, floricoltura e serre familiari." },
    digital: { es: "Soluciones desde el celular (apps de asesoría, alertas climáticas, mercados digitales directos) y mapeo de parcelas pequeñas.", en: "Mobile-phone solutions (advisory apps, weather alerts, direct digital markets) and small-plot mapping.", fr: "Solutions sur téléphone mobile (applis de conseil, alertes météo, marchés numériques directs) et cartographie des petites parcelles.", de: "Lösungen per Mobiltelefon (Beratungs-Apps, Wetterwarnungen, direkte digitale Märkte) und Kartierung kleiner Parzellen.", it: "Soluzioni da cellulare (app di consulenza, allerte meteo, mercati digitali diretti) e mappatura di piccoli appezzamenti." },
    agripv: { es: "Comunidades energéticas rurales y pequeños proyectos agrivoltaicos comunitarios de 100 kW a 1 MW, para bombeo o una red comunitaria mientras se cultiva debajo; invernaderos fotovoltaicos para flores y hortalizas en Puebla y Morelos. La región alberga los pilotos de AMAYAD: Dachimilco, en una chinampa de Xochimilco, y PASE, en Topilejo (en coordinación).", en: "Rural energy communities and small community agrivoltaic projects of 100 kW to 1 MW, for pumping or a community grid while farming underneath; PV greenhouses for flowers and vegetables in Puebla and Morelos. The region hosts AMAYAD's pilots: Dachimilco, on a chinampa in Xochimilco, and PASE, in Topilejo (in coordination).", fr: "Communautés énergétiques rurales et petits projets agrivoltaïques communautaires de 100 kW à 1 MW, pour le pompage ou un réseau communautaire tout en cultivant dessous ; serres photovoltaïques pour fleurs et légumes à Puebla et Morelos. La région accueille les pilotes d'AMAYAD : Dachimilco, sur une chinampa de Xochimilco, et PASE, à Topilejo (en coordination).", de: "Ländliche Energiegemeinschaften und kleine gemeinschaftliche Agri-PV-Projekte von 100 kW bis 1 MW, für Pumpen oder ein Gemeinschaftsnetz bei gleichzeitigem Anbau darunter; PV-Gewächshäuser für Blumen und Gemüse in Puebla und Morelos. In der Region liegen die AMAYAD-Piloten: Dachimilco auf einer Chinampa in Xochimilco und PASE in Topilejo (in Abstimmung).", it: "Comunità energetiche rurali e piccoli progetti agrivoltaici comunitari da 100 kW a 1 MW, per pompaggio o una rete comunitaria continuando a coltivare sotto; serre fotovoltaiche per fiori e ortaggi a Puebla e Morelos. La regione ospita i progetti pilota di AMAYAD: Dachimilco, su una chinampa a Xochimilco, e PASE, a Topilejo (in coordinamento)." },
    digitalFocus: { es: "Apps móviles y digitalización de minifundios", en: "Mobile apps and digitising smallholdings", fr: "Applis mobiles et numérisation des microfundios", de: "Mobile Apps und Digitalisierung von Kleinbetrieben", it: "App mobili e digitalizzazione dei minifondi" },
    agripvFocus: { es: "Comunidades energéticas e invernaderos solares", en: "Energy communities and solar greenhouses", fr: "Communautés énergétiques et serres solaires", de: "Energiegemeinschaften und Solargewächshäuser", it: "Comunità energetiche e serre solari" } },
  { id: "sur", color: "#1f7a3a", states: ["VER", "OAX", "CHP", "TAB", "CAM", "YUC", "ROO", "GRO"], coordinator: "",
    name: { es: "Sur - Golfo - Península", en: "South - Gulf - Peninsula", fr: "Sud - Golfe - Péninsule", de: "Süden - Golf - Halbinsel", it: "Sud - Golfo - Penisola" },
    pv: { es: "Radiación moderada-alta en la Península de Yucatán y el Istmo de Tehuantepec; más nubosidad y humedad en zonas de selva y costa.", en: "Moderate-to-high radiation in the Yucatán Peninsula and the Isthmus of Tehuantepec; more cloud and humidity in jungle and coastal areas.", fr: "Ensoleillement modéré à élevé dans la péninsule du Yucatán et l'isthme de Tehuantepec ; plus de nuages et d'humidité en forêt tropicale et sur la côte.", de: "Mittlere bis hohe Einstrahlung auf der Halbinsel Yucatán und am Isthmus von Tehuantepec; mehr Bewölkung und Feuchtigkeit in Regenwald- und Küstengebieten.", it: "Irraggiamento medio-alto nella penisola dello Yucatán e nell'istmo di Tehuantepec; più nuvolosità e umidità nelle zone di foresta e di costa." },
    agri: { es: "Trópico húmedo y subhúmedo: café, cacao, caña de azúcar, cítricos, plátano, piña, palma de aceite y miel; predominan la agricultura de temporal y los pequeños productores.", en: "Humid and sub-humid tropics: coffee, cacao, sugarcane, citrus, banana, pineapple, oil palm and honey; mostly rain-fed farming and smallholders.", fr: "Tropiques humides et subhumides : café, cacao, canne à sucre, agrumes, banane, ananas, palmier à huile et miel ; surtout de l'agriculture pluviale et de petits producteurs.", de: "Feuchte und wechselfeuchte Tropen: Kaffee, Kakao, Zuckerrohr, Zitrus, Banane, Ananas, Ölpalme und Honig; überwiegend Regenfeldbau und Kleinbauern.", it: "Tropici umidi e subumidi: caffè, cacao, canna da zucchero, agrumi, banana, ananas, palma da olio e miele; prevalgono l'agricoltura pluviale e i piccoli produttori." },
    digital: { es: "Mapeo de deforestación, monitoreo ambiental para certificaciones, trazabilidad de café y cacao de especialidad, y monitoreo de colmenas y del impacto climático.", en: "Deforestation mapping, environmental monitoring for certifications, specialty coffee and cacao traceability, and beehive and climate-impact monitoring.", fr: "Cartographie de la déforestation, suivi environnemental pour les certifications, traçabilité du café et du cacao de spécialité, et suivi des ruches et de l'impact climatique.", de: "Kartierung der Entwaldung, Umweltmonitoring für Zertifizierungen, Rückverfolgbarkeit von Spezialitätenkaffee und -kakao sowie Überwachung von Bienenstöcken und Klimafolgen.", it: "Mappatura della deforestazione, monitoraggio ambientale per le certificazioni, tracciabilità di caffè e cacao di specialità e monitoraggio di alveari e impatto climatico." },
    agripv: { es: "Microrredes aisladas (off-grid) para despulpadoras de café, secadoras de cacao y tanques de enfriamiento de leche; paneles elevados que dan sombra a cultivos que la necesitan, como café, cacao y vainilla.", en: "Off-grid microgrids for coffee pulpers, cacao dryers and milk-cooling tanks; elevated panels providing shade for shade-loving crops such as coffee, cacao and vanilla.", fr: "Micro-réseaux autonomes (hors réseau) pour dépulpeuses de café, séchoirs à cacao et tanks à lait réfrigérés ; panneaux surélevés offrant de l'ombre aux cultures qui en ont besoin, comme le café, le cacao et la vanille.", de: "Netzunabhängige Microgrids für Kaffee-Entpulper, Kakaotrockner und Milchkühltanks; aufgeständerte Module als Schatten für schattenliebende Kulturen wie Kaffee, Kakao und Vanille.", it: "Microreti off-grid per spolpatrici di caffè, essiccatoi di cacao e tank di refrigerazione del latte; pannelli sopraelevati che fanno ombra a colture che ne hanno bisogno, come caffè, cacao e vaniglia." },
    digitalFocus: { es: "Monitoreo ambiental y certificaciones", en: "Environmental monitoring and certifications", fr: "Suivi environnemental et certifications", de: "Umweltmonitoring und Zertifizierungen", it: "Monitoraggio ambientale e certificazioni" },
    agripvFocus: { es: "Microrredes off-grid y sombra para cultivos tropicales", en: "Off-grid microgrids and shade for tropical crops", fr: "Micro-réseaux hors réseau et ombrage des cultures tropicales", de: "Netzunabhängige Microgrids und Schatten für tropische Kulturen", it: "Microreti off-grid e ombra per colture tropicali" } }
];

/* ---------------------------------------------------------------------
   COURSES & WORKSHOPS — all "planned". No dates or prices until confirmed.
   Locations: add/edit sites here. status: "coordination" | "development" | "available"
   --------------------------------------------------------------------- */
window.AMAYAD_COURSE_LOCATIONS = [
  { id: "pase", region: "centro", status: "coordination",
    name: "PASE — Parcela Agrovoltaica Sostenible y Educacional",
    place: "CEPIPSA (FMVZ-UNAM), San Miguel Topilejo, Tlalpan, CDMX",
    hosts: "UNAM — Instituto de Energías Renovables (IER) y Facultad de Medicina Veterinaria y Zootecnia (FMVZ)",
    instructor: "Dr. Aarón Sánchez Juárez",
    sourceUrl: "https://www.ier.unam.mx/ParcelaAgrovoltaica.html",
    desc: { es: "Parcela demostrativa de la UNAM con cultivos bajo una cubierta fotovoltaica y captación de agua de lluvia (≈350 m², 72 paneles, tanque de 145 m³, según la Gaceta UNAM).",
            en: "UNAM demonstration plot with crops under a photovoltaic canopy and rainwater harvesting (≈350 m², 72 panels, 145 m³ tank, per Gaceta UNAM).",
            fr: "Parcelle de démonstration de l'UNAM avec cultures sous couverture photovoltaïque et récupération d'eau de pluie (≈350 m², 72 panneaux, réservoir de 145 m³, selon la Gaceta UNAM).",
            de: "Demonstrationsparzelle der UNAM mit Kulturen unter einem PV-Dach und Regenwassernutzung (≈350 m², 72 Module, 145-m³-Tank, laut Gaceta UNAM).",
            it: "Parcella dimostrativa dell'UNAM con colture sotto una copertura fotovoltaica e raccolta dell'acqua piovana (≈350 m², 72 pannelli, serbatoio da 145 m³, secondo la Gaceta UNAM)." } },
  { id: "dachimilco", region: "centro", status: "development",
    name: "Dachimilco",
    place: "Chinampa en Cuemanco, Xochimilco, CDMX",
    hosts: "", instructor: "", sourceUrl: "",
    desc: { es: "Piloto agrivoltaico en una chinampa de Xochimilco, concebido como laboratorio vivo y centro de formación.",
            en: "Agrivoltaic pilot on a chinampa in Xochimilco, conceived as a living lab and training centre.",
            fr: "Pilote agrivoltaïque sur une chinampa de Xochimilco, conçu comme laboratoire vivant et centre de formation.",
            de: "Agri-PV-Pilotprojekt auf einer Chinampa in Xochimilco, gedacht als lebendes Labor und Ausbildungszentrum.",
            it: "Pilota agrivoltaico su una chinampa di Xochimilco, pensato come laboratorio vivente e centro di formazione." } },
  { id: "online", region: "", status: "development",
    name: { es: "En línea", en: "Online", fr: "En ligne", de: "Online", it: "Online" },
    place: { es: "Sesiones virtuales", en: "Virtual sessions", fr: "Sessions virtuelles", de: "Virtuelle Sitzungen", it: "Sessioni virtuali" },
    hosts: "", instructor: "", sourceUrl: "",
    desc: { es: "Módulos teóricos para cualquier región del país y del extranjero.", en: "Theory modules for any region in Mexico or abroad.", fr: "Modules théoriques pour toutes les régions du Mexique et de l'étranger.", de: "Theoriemodule für alle Regionen Mexikos und das Ausland.", it: "Moduli teorici per qualsiasi regione del Messico e dall'estero." } }
];

/* formats:   field | hybrid | online
   audiences: farmers | solar | students | officials
   locations: ids from AMAYAD_COURSE_LOCATIONS
   status:    planned | open (only when dates are confirmed)
   optional (add only when confirmed): dates: "…" or {es,en,fr,de,it}, price: 1500 (number) or "Gratuito", currency: "MXN", registerUrl: "https://…" */
window.AMAYAD_COURSES = [
  { id: "intro", status: "planned", formats: ["hybrid", "online"], audiences: ["farmers", "solar", "students", "officials"], locations: ["pase", "dachimilco", "online"],
    title: { es: "Introducción a la agrivoltaica", en: "Introduction to agrivoltaics", fr: "Introduction à l'agrivoltaïsme", de: "Einführung in Agri-PV", it: "Introduzione all'agrivoltaico" },
    desc: { es: "Qué es, cómo funciona, beneficios y límites, y ejemplos en México y el mundo.", en: "What it is, how it works, benefits and limits, and examples in Mexico and worldwide.", fr: "Ce que c'est, comment ça marche, avantages et limites, exemples au Mexique et dans le monde.", de: "Was es ist, wie es funktioniert, Nutzen und Grenzen sowie Beispiele aus Mexiko und der Welt.", it: "Che cos'è, come funziona, benefici e limiti, esempi in Messico e nel mondo." } },
  { id: "design", status: "planned", formats: ["hybrid"], audiences: ["solar", "students"], locations: ["pase", "online"],
    title: { es: "Fundamentos de diseño y dimensionamiento", en: "Design and sizing basics", fr: "Bases de conception et de dimensionnement", de: "Grundlagen von Planung und Dimensionierung", it: "Fondamenti di progettazione e dimensionamento" },
    desc: { es: "Altura, separación e inclinación de módulos, sombra, estructuras, seguidores y producción energética.", en: "Module height, spacing and tilt, shading, structures, trackers and energy yield.", fr: "Hauteur, espacement et inclinaison des modules, ombrage, structures, trackers et production d'énergie.", de: "Modulhöhe, Abstand und Neigung, Verschattung, Unterkonstruktionen, Tracker und Energieertrag.", it: "Altezza, spaziatura e inclinazione dei moduli, ombreggiamento, strutture, inseguitori e resa energetica." } },
  { id: "crops", status: "planned", formats: ["field"], audiences: ["farmers", "students"], locations: ["pase", "dachimilco"],
    title: { es: "Cultivos bajo paneles", en: "Crops under panels", fr: "Cultures sous panneaux", de: "Kulturen unter Modulen", it: "Colture sotto i pannelli" },
    desc: { es: "Selección de cultivos, manejo agronómico con sombra parcial y comparación con parcelas testigo.", en: "Crop selection, agronomic management under partial shade and comparison with control plots.", fr: "Choix des cultures, conduite agronomique sous ombrage partiel et comparaison avec des parcelles témoins.", de: "Kulturwahl, Anbaumanagement unter Teilverschattung und Vergleich mit Kontrollparzellen.", it: "Scelta delle colture, gestione agronomica in ombra parziale e confronto con parcelle testimone." } },
  { id: "digital", status: "planned", formats: ["hybrid"], audiences: ["farmers", "solar", "students"], locations: ["dachimilco", "pase"],
    title: { es: "Agricultura digital: drones y sensores", en: "Digital agriculture: drones and sensors", fr: "Agriculture numérique : drones et capteurs", de: "Digitale Landwirtschaft: Drohnen und Sensoren", it: "Agricoltura digitale: droni e sensori" },
    desc: { es: "Sensores de suelo y clima, IoT, monitoreo con drones e imágenes satelitales, y riego automatizado.", en: "Soil and weather sensors, IoT, drone and satellite monitoring, and automated irrigation.", fr: "Capteurs de sol et météo, IoT, suivi par drones et satellites, irrigation automatisée.", de: "Boden- und Wettersensoren, IoT, Drohnen- und Satellitenmonitoring sowie automatisierte Bewässerung.", it: "Sensori di suolo e meteo, IoT, monitoraggio con droni e satelliti, irrigazione automatizzata." } },
  { id: "water", status: "planned", formats: ["field"], audiences: ["farmers", "students", "officials"], locations: ["dachimilco"],
    title: { es: "Agua y sistemas de chinampa", en: "Water and chinampa systems", fr: "Eau et systèmes de chinampas", de: "Wasser und Chinampa-Systeme", it: "Acqua e sistemi a chinampa" },
    desc: { es: "Captación pluvial desde los módulos, riego eficiente y cómo integrar la agrivoltaica en la chinampa tradicional.", en: "Rainwater harvesting from modules, efficient irrigation and how to integrate agrivoltaics into the traditional chinampa.", fr: "Récupération de l'eau de pluie sur les modules, irrigation efficace et intégration de l'agrivoltaïsme dans la chinampa traditionnelle.", de: "Regenwassernutzung von den Modulen, effiziente Bewässerung und Integration von Agri-PV in die traditionelle Chinampa.", it: "Raccolta dell'acqua piovana dai moduli, irrigazione efficiente e integrazione dell'agrivoltaico nella chinampa tradizionale." } },
  { id: "policy", status: "planned", formats: ["online"], audiences: ["officials", "solar", "farmers"], locations: ["online"],
    title: { es: "Política pública e incentivos", en: "Public policy and incentives", fr: "Politiques publiques et incitations", de: "Politik und Förderinstrumente", it: "Politiche pubbliche e incentivi" },
    desc: { es: "Marco regulatorio en México, experiencias internacionales e incentivos fiscales.", en: "Mexico's regulatory framework, international experience and tax incentives.", fr: "Cadre réglementaire mexicain, expériences internationales et incitations fiscales.", de: "Mexikos Rechtsrahmen, internationale Erfahrungen und steuerliche Anreize.", it: "Quadro normativo messicano, esperienze internazionali e incentivi fiscali." } },
  { id: "fieldday", status: "planned", formats: ["field"], audiences: ["farmers", "solar", "students", "officials"], locations: ["pase", "dachimilco"],
    title: { es: "Día de campo / visita guiada", en: "Field day / guided visit", fr: "Journée au champ / visite guidée", de: "Feldtag / Führung", it: "Giornata in campo / visita guidata" },
    desc: { es: "Recorrido por un sitio agrivoltaico para ver en persona cultivos, estructuras y sistemas de agua y energía.", en: "A tour of an agrivoltaic site to see crops, structures, water and energy systems in person.", fr: "Visite d'un site agrivoltaïque pour voir sur place cultures, structures et systèmes d'eau et d'énergie.", de: "Rundgang über eine Agri-PV-Anlage, um Kulturen, Strukturen, Wasser- und Energiesysteme vor Ort zu sehen.", it: "Visita a un sito agrivoltaico per vedere dal vivo colture, strutture e sistemi idrici ed energetici." } }
];

/* ---------------------------------------------------------------------
   DACHIMILCO PILOT PROJECT
   --------------------------------------------------------------------- */
window.AMAYAD_DACHIMILCO = {
  status: "development",
  /* [PLACEHOLDER] Dachimilco's own website (being built by another team). */
  websiteUrl: "",
  /* Estimated budget from the 2024 concept (MXN). Set show:false to hide. */
  budget: { show: true, year: 2024, currency: "MXN", base: 3199000, withAddons: 6178000 },
  /* [PLACEHOLDER] Crowdfunding rounds — leave [] until terms are confirmed
     and a compliant platform is chosen. The 2024 concept proposed
     "sponsor a plot" rounds (10-year contract) — example format:
     { name: "Ronda 1", pricePerPlot: 175000, currency: "MXN" }  (2024 concept: R1 175,000 · R2 199,000 · R3 225,000)
     No payments are processed on this site. */
  crowdfundingRounds: [],
  /* Optional external crowdfunding platform link once a campaign exists. */
  crowdfundingUrl: ""
};
