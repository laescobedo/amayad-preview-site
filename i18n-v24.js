/* AMAYAD — i18n v2.4 additions: new MXN membership tiers (proposal), perks matrix, founding price,
   Discord community + Telegram bot (coming soon), "Alianzas académicas" (free) in Partnerships.
   Loaded AFTER i18n-v22.js and deep-merged. Arrays replace earlier arrays.
   Keep keys identical across es / en / fr / de / it (check: node tools/check_i18n.js). */
(function () {
  function isObj(x) { return x && typeof x === "object" && !Array.isArray(x); }
  function merge(a, b) { Object.keys(b).forEach(function (k) { if (isObj(a[k]) && isObj(b[k])) merge(a[k], b[k]); else a[k] = b[k]; }); return a; }
  var V = {};

/* ============================== ES ============================== */
V.es = {
  cta: { discord: `Únete a nuestra comunidad en Discord` },
  tiers: {
    community:      { kind: `Gratuito`, name: `Comunidad`, desc: `Para cualquier persona interesada en la agrivoltaica y la agricultura digital.` },
    student:        { kind: `Persona`, name: `Estudiante`, desc: `Para estudiantes de licenciatura o posgrado con credencial vigente.` },
    farmer:         { kind: `Persona`, name: `Agricultor / Productor`, desc: `Para agricultores, productores y propietarios de tierra a título individual.` },
    professional:   { kind: `Persona`, name: `Profesional del sector`, desc: `Para ingenieros, instaladores, consultores, agrónomos, investigadores y personal de gobierno, a título individual.` },
    company_micro:  { kind: `Empresa`, name: `Empresa Micro / Startup`, desc: `Empresas con ventas anuales de hasta 4 millones de pesos (MDP).` },
    company_pyme:   { kind: `Empresa`, name: `Empresa PyME`, desc: `Empresas con ventas anuales de 4 a 250 MDP.` },
    company_grande: { kind: `Empresa`, name: `Empresa Grande`, desc: `Empresas con ventas anuales mayores a 250 MDP.` },
    intl_individual:     { kind: `Internacional`, name: `Individual internacional`, desc: `Profesionales fuera de México. Beneficios equivalentes a Profesional del sector.` },
    intl_company_small:  { kind: `Internacional`, name: `Empresa internacional — pequeña`, desc: `Beneficios equivalentes a Empresa Micro / Startup.` },
    intl_company_medium: { kind: `Internacional`, name: `Empresa internacional — mediana`, desc: `Beneficios equivalentes a Empresa PyME.` },
    intl_company_large:  { kind: `Internacional`, name: `Empresa internacional — grande`, desc: `Beneficios equivalentes a Empresa Grande.` }
  },
  mem: {
    lead: `Siete niveles en pesos mexicanos —desde Comunidad (gratuito) hasta Empresa Grande— y niveles internacionales en USD. Cada nivel suma beneficios distintos.`,
    foundingTitle: `Precio de Miembro Fundador: 30 % de descuento, congelado 2 años.`,
    foundingText: `Para quienes se unan del 24 de noviembre de 2026 al 31 de marzo de 2027 (propuesta).`,
    priceNote: `Cuotas anuales en pesos mexicanos (MXN). Precios y beneficios son una propuesta sujeta a aprobación del Consejo Directivo; IVA por confirmar. Enviar el formulario es una solicitud: AMAYAD confirmará la admisión, la cuota vigente y la forma de pago.`,
    free: `Gratis`, foundingBadge: `Precio fundador`, joinFree: `Unirme gratis`,
    intlTitle: `Membresía internacional (USD)`,
    intlLead: `Para personas y empresas fuera de México. Los beneficios equivalen a los niveles mexicanos indicados.`,
    intlNote: `Cuotas anuales en USD (propuesta). Rangos de tamaño de empresa, descuento de fundador e impuestos aplicables por confirmar.`,
    academicNote: `¿Universidad o centro de investigación? No paga cuota: se integra como Alianza académica gratuita.`
  },
  mem2: {
    ideal: { community: `curiosos, estudiantes que inician y productores que quieren conocer AMAYAD.`, student: `estudiantes de agronomía, ingeniería, energía y afines.`, farmer: `productores, ejidatarios y propietarios que evalúan la agrivoltaica en su tierra.`, professional: `ingenieros, instaladores, consultores, agrónomos, investigadores y servidores públicos.`, company_micro: `startups, instaladores y despachos pequeños.`, company_pyme: `EPC, distribuidores, agroindustria y agtech en crecimiento.`, company_grande: `desarrolladores, fabricantes, empresas de alimentos y corporativos.` },
    short: { community: `Comunidad`, student: `Estudiante`, farmer: `Agricultor`, professional: `Profesional`, company_micro: `Micro / Startup`, company_pyme: `PyME`, company_grande: `Grande` },
    rowFee: `Cuota anual (regular)`, rowFoundingFee: `Precio fundador (−30 %, 2 años)`,
    tableTitle: `Comparativa de beneficios por nivel`,
    tableLead: `Cada nivel suma beneficios distintos. Las cuotas del bot de IA, los asientos, los descuentos y los pases son propuestas.`,
    tableNote: `Matriz de beneficios propuesta, sujeta a aprobación del Consejo Directivo y de implementación progresiva. La revista, las noticias diarias, el canal de miembros en Discord y el bot de Telegram están en preparación. El derecho a voto dependerá de los estatutos (por publicar). Precios en MXN; IVA por confirmar.`,
    faq: [
      { q: `¿Enviar el formulario me hace miembro?`, a: `Es una solicitud. AMAYAD confirmará tu admisión, la cuota vigente y la forma de pago.` },
      { q: `¿En qué moneda están las cuotas? ¿Incluyen IVA?`, a: `En pesos mexicanos (MXN) por año para México y en USD para miembros internacionales. Son una propuesta; el tratamiento del IVA está por confirmar.` },
      { q: `¿Qué es el precio de Miembro Fundador?`, a: `Un 30 % de descuento sobre la cuota regular, congelado durante 2 años, para quienes se unan entre el 24 de noviembre de 2026 y el 31 de marzo de 2027.` },
      { q: `¿Qué nivel me corresponde?`, a: `Las personas eligen Estudiante, Agricultor / Productor o Profesional del sector; las empresas, según sus ventas anuales (Micro hasta 4 MDP, PyME de 4 a 250 MDP, Grande más de 250 MDP). Si dudas, escríbenos.` },
      { q: `¿Y las universidades y centros de investigación?`, a: `No pagan cuota: se suman como Alianza académica gratuita. Encuentra el formulario en la sección Alianzas.` },
      { q: `¿Los beneficios ya están disponibles?`, a: `Se implementan de forma progresiva. La revista, las noticias diarias, el canal de miembros en Discord y el bot de Telegram están en preparación.` },
      { q: `¿Mi organización puede patrocinar sin ser miembro?`, a: `Sí. Usa el formulario de patrocinio y armamos una propuesta a la medida.` }
    ]
  },
  perks: {
    rows: { seats: `Asientos / representantes`, newsletter: `Boletín semanal`, daily: `Noticias diarias (resumen)`, magazine: `Revista AMAYAD (digital)`, discordPublic: `Discord: canales públicos`, discordMembers: `Discord: canal exclusivo para miembros`, bot: `Bot de IA en Telegram — preguntas (propuesta)`, library: `Biblioteca`, webinars: `Webinars`, committees: `Participar en un comité`, voting: `Derecho a voto (según estatutos)`, directory: `Directorio de miembros`, events: `Eventos AMAYAD`, founding: `Reconocimiento como miembro fundador` },
    v: { allSeats: `✓ todos los asientos`, public: `Pública`, full: `Completa`, open: `Abiertos`, allRec: `Todos + grabaciones`, observer: `Como oyente`, voice: `Voz, sin voto`, oneVote: `✓ 1 voto`, profile: `Perfil individual`, listing: `Ficha de empresa`, listingLogo: `Ficha + logo`, featured: `Ficha destacada + logo`, general: `Precio general`, disc50: `−50 %`, disc30: `−30 %`, disc20: `−20 %`, pass1: `1 pase + −20 %`, pass2: `2 pases + −20 %`, pass4: `4 pases + −20 %` },
    u: { perDay: `/día`, perSeatDay: `/día por asiento` }
  },
  community: {
    jump: `Comunidad`, eyebrow: `Comunidad`,
    title: `Comunidad en Discord y asistente de IA en Telegram`,
    lead: `Conversación abierta para todos y espacios exclusivos para miembros.`,
    discordTitle: `Únete a nuestra comunidad en Discord`,
    discordText: `Servidor «Agrivoltaics and Digital Agriculture»: preguntas, proyectos, eventos y oportunidades del sector.`,
    discordList: [`Canales públicos abiertos a todos (nivel Comunidad)`, `Canal exclusivo para miembros de niveles de pago (en preparación)`, `Roles por nivel de membresía, asignados por AMAYAD`],
    telegramTitle: `Bot de IA de AMAYAD en Telegram`,
    telegramText: `Un asistente de IA sobre agrivoltaica y agricultura digital, con un número de preguntas diarias según tu nivel.`,
    telegramList: [`Respuestas basadas en la biblioteca y los recursos de AMAYAD`, `Comunidad: 3 preguntas al día; más preguntas en los niveles de pago (propuesta)`, `Resumen diario de noticias para miembros`],
    telegramBtn: `Bot de Telegram`,
    note: `El enlace de Discord es una invitación pública. El bot de Telegram de AMAYAD aún no está publicado; anunciaremos su lanzamiento en el boletín.`,
    membersTitle: `Conecta con la comunidad`,
    membersText: `Mientras se abre el portal de miembros, la conversación ocurre en nuestro servidor de Discord.`
  },
  academic: {
    link: `Ver Alianzas académicas →`, tag: `Gratuito`,
    title: `Alianzas académicas`,
    text: `Las universidades y los centros de investigación no pagan membresía: se integran a AMAYAD como Alianza académica sin costo, para colaborar en investigación, formación y política pública.`,
    perks: [`Mención como aliado académico en este sitio (con su autorización)`, `Coorganización de seminarios, cursos y días de campo`, `Acceso de sus estudiantes a la comunidad AMAYAD (nivel Comunidad)`, `Colaboración en investigación, datos y en la iniciativa de política pública`],
    note: `Propuesta. Cada alianza se formaliza por escrito; su mención no implica aval mutuo hasta firmarse.`,
    cta: `Solicitar una Alianza académica`, cta2: `Escríbenos`
  }
};

/* ============================== EN ============================== */
V.en = {
  cta: { discord: `Join our Discord community` },
  tiers: {
    community:      { kind: `Free`, name: `Community`, desc: `For anyone interested in agrivoltaics and digital agriculture.` },
    student:        { kind: `Individual`, name: `Student`, desc: `For undergraduate or graduate students with a valid student ID.` },
    farmer:         { kind: `Individual`, name: `Farmer / Producer`, desc: `For individual farmers, producers and landowners.` },
    professional:   { kind: `Individual`, name: `Sector professional`, desc: `For individual engineers, installers, consultants, agronomists, researchers and government staff.` },
    company_micro:  { kind: `Company`, name: `Micro company / Startup`, desc: `Companies with annual sales up to MXN 4 million.` },
    company_pyme:   { kind: `Company`, name: `SME company`, desc: `Companies with annual sales of MXN 4–250 million.` },
    company_grande: { kind: `Company`, name: `Large company`, desc: `Companies with annual sales above MXN 250 million.` },
    intl_individual:     { kind: `International`, name: `International individual`, desc: `Professionals outside Mexico. Benefits equivalent to Sector professional.` },
    intl_company_small:  { kind: `International`, name: `International company — small`, desc: `Benefits equivalent to Micro company / Startup.` },
    intl_company_medium: { kind: `International`, name: `International company — medium`, desc: `Benefits equivalent to SME company.` },
    intl_company_large:  { kind: `International`, name: `International company — large`, desc: `Benefits equivalent to Large company.` }
  },
  mem: {
    lead: `Seven tiers in Mexican pesos — from Community (free) to Large company — plus international tiers in USD. Each tier adds different benefits.`,
    foundingTitle: `Founding-member price: 30% off, locked for 2 years.`,
    foundingText: `For those who join between 24 November 2026 and 31 March 2027 (proposal).`,
    priceNote: `Annual fees in Mexican pesos (MXN). Prices and benefits are a proposal pending Board approval; VAT (IVA) to be confirmed. Submitting the form is an application: AMAYAD will confirm admission, current fees and payment method.`,
    free: `Free`, foundingBadge: `Founding price`, joinFree: `Join for free`,
    intlTitle: `International membership (USD)`,
    intlLead: `For individuals and companies outside Mexico. Benefits match the Mexican tiers indicated.`,
    intlNote: `Annual fees in USD (proposal). Company size ranges, founding discount and applicable taxes to be confirmed.`,
    academicNote: `A university or research centre? No fee: it joins as a free Academic alliance.`
  },
  mem2: {
    ideal: { community: `curious minds, new students and farmers who want to get to know AMAYAD.`, student: `students of agronomy, engineering, energy and related fields.`, farmer: `farmers, ejido members and landowners assessing agrivoltaics on their land.`, professional: `engineers, installers, consultants, agronomists, researchers and public servants.`, company_micro: `startups, installers and small firms.`, company_pyme: `EPCs, distributors, agro-industry and growing agtech firms.`, company_grande: `developers, manufacturers, food companies and corporates.` },
    short: { community: `Community`, student: `Student`, farmer: `Farmer`, professional: `Professional`, company_micro: `Micro / Startup`, company_pyme: `SME`, company_grande: `Large` },
    rowFee: `Annual fee (regular)`, rowFoundingFee: `Founding price (−30%, 2 years)`,
    tableTitle: `Benefits by tier`,
    tableLead: `Each tier adds different benefits. AI-bot quotas, seats, discounts and passes are proposals.`,
    tableNote: `Proposed benefits matrix, pending Board approval and rolled out progressively. The magazine, daily news, members-only Discord channel and Telegram bot are in preparation. Voting rights will depend on the bylaws (to be published). Prices in MXN; VAT (IVA) to be confirmed.`,
    faq: [
      { q: `Does submitting the form make me a member?`, a: `It is an application. AMAYAD will confirm your admission, current fees and payment method.` },
      { q: `What currency are the fees in? Do they include VAT?`, a: `Mexican pesos (MXN) per year for Mexico and USD for international members. They are a proposal; VAT (IVA) treatment is to be confirmed.` },
      { q: `What is the founding-member price?`, a: `30% off the regular fee, locked for 2 years, for those who join between 24 November 2026 and 31 March 2027.` },
      { q: `Which tier is right for me?`, a: `Individuals choose Student, Farmer / Producer or Sector professional; companies choose by annual sales (Micro up to MXN 4M, SME MXN 4–250M, Large above MXN 250M). If in doubt, write to us.` },
      { q: `What about universities and research centres?`, a: `They pay no fee: they join as a free Academic alliance. You will find the form in the Partnerships section.` },
      { q: `Are the benefits already available?`, a: `They are rolled out progressively. The magazine, daily news, members-only Discord channel and Telegram bot are in preparation.` },
      { q: `Can my organisation sponsor without being a member?`, a: `Yes. Use the sponsorship form and we will put together a tailored proposal.` }
    ]
  },
  perks: {
    rows: { seats: `Seats / representatives`, newsletter: `Weekly newsletter`, daily: `Daily news digest`, magazine: `AMAYAD magazine (digital)`, discordPublic: `Discord: public channels`, discordMembers: `Discord: members-only channel`, bot: `Telegram AI bot — questions (proposal)`, library: `Library`, webinars: `Webinars`, committees: `Join a committee`, voting: `Voting rights (per bylaws)`, directory: `Member directory`, events: `AMAYAD events`, founding: `Founding-member recognition` },
    v: { allSeats: `✓ all seats`, public: `Public`, full: `Full`, open: `Open ones`, allRec: `All + recordings`, observer: `As observer`, voice: `Voice, no vote`, oneVote: `✓ 1 vote`, profile: `Individual profile`, listing: `Company listing`, listingLogo: `Listing + logo`, featured: `Featured listing + logo`, general: `Standard price`, disc50: `−50%`, disc30: `−30%`, disc20: `−20%`, pass1: `1 pass + −20%`, pass2: `2 passes + −20%`, pass4: `4 passes + −20%` },
    u: { perDay: `/day`, perSeatDay: `/day per seat` }
  },
  community: {
    jump: `Community`, eyebrow: `Community`,
    title: `Discord community and Telegram AI assistant`,
    lead: `Open conversation for everyone, plus members-only spaces.`,
    discordTitle: `Join our Discord community`,
    discordText: `The “Agrivoltaics and Digital Agriculture” server: questions, projects, events and opportunities in the sector.`,
    discordList: [`Public channels open to everyone (Community tier)`, `Members-only channel for paid tiers (in preparation)`, `Roles by membership tier, assigned by AMAYAD`],
    telegramTitle: `AMAYAD AI bot on Telegram`,
    telegramText: `An AI assistant on agrivoltaics and digital agriculture, with a daily number of questions based on your tier.`,
    telegramList: [`Answers based on AMAYAD's library and resources`, `Community: 3 questions a day; more questions on paid tiers (proposal)`, `Daily news digest for members`],
    telegramBtn: `Telegram bot`,
    note: `The Discord link is a public invitation. AMAYAD's Telegram bot is not published yet; we will announce its launch in the newsletter.`,
    membersTitle: `Connect with the community`,
    membersText: `While the member portal is being set up, the conversation happens on our Discord server.`
  },
  academic: {
    link: `See Academic alliances →`, tag: `Free`,
    title: `Academic alliances`,
    text: `Universities and research centres pay no membership fee: they join AMAYAD as a free Academic alliance to collaborate on research, training and public policy.`,
    perks: [`Listed as an academic partner on this site (with permission)`, `Co-organisation of seminars, courses and field days`, `Access for their students to the AMAYAD community (Community tier)`, `Collaboration on research, data and the public-policy initiative`],
    note: `Proposal. Each alliance is formalised in writing; being listed implies no mutual endorsement until signed.`,
    cta: `Request an Academic alliance`, cta2: `Write to us`
  }
};

/* ============================== FR ============================== */
V.fr = {
  cta: { discord: `Rejoignez notre communauté Discord` },
  tiers: {
    community:      { kind: `Gratuit`, name: `Communauté`, desc: `Pour toute personne intéressée par l'agrivoltaïsme et l'agriculture numérique.` },
    student:        { kind: `Particulier`, name: `Étudiant`, desc: `Pour les étudiants de licence ou de master/doctorat avec carte en cours de validité.` },
    farmer:         { kind: `Particulier`, name: `Agriculteur / Producteur`, desc: `Pour les agriculteurs, producteurs et propriétaires fonciers à titre individuel.` },
    professional:   { kind: `Particulier`, name: `Professionnel du secteur`, desc: `Pour ingénieurs, installateurs, consultants, agronomes, chercheurs et agents publics, à titre individuel.` },
    company_micro:  { kind: `Entreprise`, name: `Micro-entreprise / Startup`, desc: `Entreprises dont le chiffre d'affaires annuel atteint au plus 4 millions de MXN.` },
    company_pyme:   { kind: `Entreprise`, name: `PME`, desc: `Entreprises dont le chiffre d'affaires annuel est compris entre 4 et 250 millions de MXN.` },
    company_grande: { kind: `Entreprise`, name: `Grande entreprise`, desc: `Entreprises dont le chiffre d'affaires annuel dépasse 250 millions de MXN.` },
    intl_individual:     { kind: `International`, name: `Particulier international`, desc: `Professionnels hors du Mexique. Avantages équivalents à Professionnel du secteur.` },
    intl_company_small:  { kind: `International`, name: `Entreprise internationale — petite`, desc: `Avantages équivalents à Micro-entreprise / Startup.` },
    intl_company_medium: { kind: `International`, name: `Entreprise internationale — moyenne`, desc: `Avantages équivalents à PME.` },
    intl_company_large:  { kind: `International`, name: `Entreprise internationale — grande`, desc: `Avantages équivalents à Grande entreprise.` }
  },
  mem: {
    lead: `Sept niveaux en pesos mexicains — de Communauté (gratuit) à Grande entreprise — et des niveaux internationaux en USD. Chaque niveau apporte des avantages différents.`,
    foundingTitle: `Tarif membre fondateur : −30 %, bloqué pendant 2 ans.`,
    foundingText: `Pour les adhésions entre le 24 novembre 2026 et le 31 mars 2027 (proposition).`,
    priceNote: `Cotisations annuelles en pesos mexicains (MXN). Tarifs et avantages proposés, soumis à l'approbation du Conseil d'administration ; TVA (IVA) à confirmer. L'envoi du formulaire constitue une demande : AMAYAD confirmera l'admission, la cotisation en vigueur et le mode de paiement.`,
    free: `Gratuit`, foundingBadge: `Tarif fondateur`, joinFree: `Rejoindre gratuitement`,
    intlTitle: `Adhésion internationale (USD)`,
    intlLead: `Pour les personnes et entreprises hors du Mexique. Les avantages correspondent aux niveaux mexicains indiqués.`,
    intlNote: `Cotisations annuelles en USD (proposition). Tranches de taille d'entreprise, remise fondateur et taxes applicables à confirmer.`,
    academicNote: `Université ou centre de recherche ? Pas de cotisation : il rejoint AMAYAD comme Alliance académique gratuite.`
  },
  mem2: {
    ideal: { community: `curieux, étudiants débutants et agriculteurs qui veulent découvrir AMAYAD.`, student: `étudiants en agronomie, ingénierie, énergie et domaines voisins.`, farmer: `agriculteurs, ejidatarios et propriétaires qui évaluent l'agrivoltaïsme sur leurs terres.`, professional: `ingénieurs, installateurs, consultants, agronomes, chercheurs et agents publics.`, company_micro: `startups, installateurs et petits cabinets.`, company_pyme: `EPC, distributeurs, agro-industrie et agtech en croissance.`, company_grande: `développeurs, fabricants, entreprises agroalimentaires et grands groupes.` },
    short: { community: `Communauté`, student: `Étudiant`, farmer: `Agriculteur`, professional: `Professionnel`, company_micro: `Micro / Startup`, company_pyme: `PME`, company_grande: `Grande` },
    rowFee: `Cotisation annuelle (normale)`, rowFoundingFee: `Tarif fondateur (−30 %, 2 ans)`,
    tableTitle: `Avantages par niveau`,
    tableLead: `Chaque niveau apporte des avantages différents. Quotas du bot IA, sièges, remises et pass sont des propositions.`,
    tableNote: `Matrice d'avantages proposée, soumise à l'approbation du Conseil d'administration et mise en œuvre progressivement. La revue, les actualités quotidiennes, le canal Discord réservé aux membres et le bot Telegram sont en préparation. Le droit de vote dépendra des statuts (à publier). Prix en MXN ; TVA (IVA) à confirmer.`,
    faq: [
      { q: `L'envoi du formulaire fait-il de moi un membre ?`, a: `C'est une demande. AMAYAD confirmera votre admission, la cotisation en vigueur et le mode de paiement.` },
      { q: `En quelle devise sont les cotisations ? La TVA est-elle incluse ?`, a: `En pesos mexicains (MXN) par an pour le Mexique et en USD pour les membres internationaux. Il s'agit d'une proposition ; le traitement de la TVA (IVA) reste à confirmer.` },
      { q: `Qu'est-ce que le tarif membre fondateur ?`, a: `Une remise de 30 % sur la cotisation normale, bloquée pendant 2 ans, pour les adhésions entre le 24 novembre 2026 et le 31 mars 2027.` },
      { q: `Quel niveau me correspond ?`, a: `Les particuliers choisissent Étudiant, Agriculteur / Producteur ou Professionnel du secteur ; les entreprises selon leur chiffre d'affaires (Micro jusqu'à 4 M MXN, PME de 4 à 250 M MXN, Grande au-delà de 250 M MXN). En cas de doute, écrivez-nous.` },
      { q: `Et les universités et centres de recherche ?`, a: `Ils ne paient pas de cotisation : ils rejoignent AMAYAD comme Alliance académique gratuite. Le formulaire se trouve dans la section Partenariats.` },
      { q: `Les avantages sont-ils déjà disponibles ?`, a: `Ils sont mis en œuvre progressivement. La revue, les actualités quotidiennes, le canal Discord réservé aux membres et le bot Telegram sont en préparation.` },
      { q: `Mon organisation peut-elle être sponsor sans être membre ?`, a: `Oui. Utilisez le formulaire de sponsoring et nous préparerons une proposition sur mesure.` }
    ]
  },
  perks: {
    rows: { seats: `Sièges / représentants`, newsletter: `Newsletter hebdomadaire`, daily: `Actualités quotidiennes (résumé)`, magazine: `Revue AMAYAD (numérique)`, discordPublic: `Discord : canaux publics`, discordMembers: `Discord : canal réservé aux membres`, bot: `Bot IA sur Telegram — questions (proposition)`, library: `Bibliothèque`, webinars: `Webinaires`, committees: `Participer à un comité`, voting: `Droit de vote (selon les statuts)`, directory: `Annuaire des membres`, events: `Événements AMAYAD`, founding: `Reconnaissance de membre fondateur` },
    v: { allSeats: `✓ tous les sièges`, public: `Publique`, full: `Complète`, open: `Ouverts`, allRec: `Tous + enregistrements`, observer: `En observateur`, voice: `Voix consultative`, oneVote: `✓ 1 voix`, profile: `Profil individuel`, listing: `Fiche entreprise`, listingLogo: `Fiche + logo`, featured: `Fiche en vedette + logo`, general: `Tarif normal`, disc50: `−50 %`, disc30: `−30 %`, disc20: `−20 %`, pass1: `1 pass + −20 %`, pass2: `2 pass + −20 %`, pass4: `4 pass + −20 %` },
    u: { perDay: `/jour`, perSeatDay: `/jour par siège` }
  },
  community: {
    jump: `Communauté`, eyebrow: `Communauté`,
    title: `Communauté Discord et assistant IA sur Telegram`,
    lead: `Une conversation ouverte à tous et des espaces réservés aux membres.`,
    discordTitle: `Rejoignez notre communauté Discord`,
    discordText: `Le serveur « Agrivoltaics and Digital Agriculture » : questions, projets, événements et opportunités du secteur.`,
    discordList: [`Canaux publics ouverts à tous (niveau Communauté)`, `Canal réservé aux membres des niveaux payants (en préparation)`, `Rôles selon le niveau d'adhésion, attribués par AMAYAD`],
    telegramTitle: `Bot IA d'AMAYAD sur Telegram`,
    telegramText: `Un assistant IA sur l'agrivoltaïsme et l'agriculture numérique, avec un nombre de questions quotidiennes selon votre niveau.`,
    telegramList: [`Réponses fondées sur la bibliothèque et les ressources d'AMAYAD`, `Communauté : 3 questions par jour ; davantage avec les niveaux payants (proposition)`, `Résumé quotidien de l'actualité pour les membres`],
    telegramBtn: `Bot Telegram`,
    note: `Le lien Discord est une invitation publique. Le bot Telegram d'AMAYAD n'est pas encore publié ; nous annoncerons son lancement dans la newsletter.`,
    membersTitle: `Rejoignez la communauté`,
    membersText: `En attendant l'ouverture de l'espace membres, la conversation a lieu sur notre serveur Discord.`
  },
  academic: {
    link: `Voir les Alliances académiques →`, tag: `Gratuit`,
    title: `Alliances académiques`,
    text: `Les universités et centres de recherche ne paient pas de cotisation : ils rejoignent AMAYAD comme Alliance académique gratuite pour collaborer en recherche, formation et politiques publiques.`,
    perks: [`Mention comme partenaire académique sur ce site (avec autorisation)`, `Co-organisation de séminaires, cours et journées de terrain`, `Accès de leurs étudiants à la communauté AMAYAD (niveau Communauté)`, `Collaboration en recherche, données et sur l'initiative de politique publique`],
    note: `Proposition. Chaque alliance est formalisée par écrit ; sa mention n'implique aucun soutien mutuel avant signature.`,
    cta: `Demander une Alliance académique`, cta2: `Nous écrire`
  }
};

/* ============================== DE ============================== */
V.de = {
  cta: { discord: `Tritt unserer Discord-Community bei` },
  tiers: {
    community:      { kind: `Kostenlos`, name: `Community`, desc: `Für alle, die sich für Agri-PV und digitale Landwirtschaft interessieren.` },
    student:        { kind: `Person`, name: `Studierende`, desc: `Für Bachelor-, Master- und Promotionsstudierende mit gültigem Ausweis.` },
    farmer:         { kind: `Person`, name: `Landwirt / Erzeuger`, desc: `Für einzelne Landwirtinnen und Landwirte, Erzeuger und Landeigentümer.` },
    professional:   { kind: `Person`, name: `Branchenfachkraft`, desc: `Für einzelne Ingenieure, Installateure, Berater, Agronomen, Forschende und Behördenmitarbeitende.` },
    company_micro:  { kind: `Unternehmen`, name: `Kleinstunternehmen / Startup`, desc: `Unternehmen mit einem Jahresumsatz bis 4 Mio. MXN.` },
    company_pyme:   { kind: `Unternehmen`, name: `KMU`, desc: `Unternehmen mit einem Jahresumsatz von 4 bis 250 Mio. MXN.` },
    company_grande: { kind: `Unternehmen`, name: `Großunternehmen`, desc: `Unternehmen mit einem Jahresumsatz über 250 Mio. MXN.` },
    intl_individual:     { kind: `International`, name: `Einzelperson international`, desc: `Fachleute außerhalb Mexikos. Leistungen wie Branchenfachkraft.` },
    intl_company_small:  { kind: `International`, name: `Internationales Unternehmen — klein`, desc: `Leistungen wie Kleinstunternehmen / Startup.` },
    intl_company_medium: { kind: `International`, name: `Internationales Unternehmen — mittel`, desc: `Leistungen wie KMU.` },
    intl_company_large:  { kind: `International`, name: `Internationales Unternehmen — groß`, desc: `Leistungen wie Großunternehmen.` }
  },
  mem: {
    lead: `Sieben Stufen in mexikanischen Pesos – von Community (kostenlos) bis Großunternehmen – sowie internationale Stufen in USD. Jede Stufe bietet andere Leistungen.`,
    foundingTitle: `Gründungsmitglieds-Preis: 30 % Rabatt, 2 Jahre festgeschrieben.`,
    foundingText: `Für Beitritte vom 24. November 2026 bis 31. März 2027 (Vorschlag).`,
    priceNote: `Jahresbeiträge in mexikanischen Pesos (MXN). Preise und Leistungen sind ein Vorschlag vorbehaltlich der Zustimmung des Vorstands; MwSt. (IVA) noch zu bestätigen. Das Absenden des Formulars ist ein Antrag: AMAYAD bestätigt Aufnahme, aktuellen Beitrag und Zahlungsweise.`,
    free: `Kostenlos`, foundingBadge: `Gründerpreis`, joinFree: `Kostenlos beitreten`,
    intlTitle: `Internationale Mitgliedschaft (USD)`,
    intlLead: `Für Personen und Unternehmen außerhalb Mexikos. Die Leistungen entsprechen den angegebenen mexikanischen Stufen.`,
    intlNote: `Jahresbeiträge in USD (Vorschlag). Größenklassen, Gründerrabatt und anfallende Steuern noch zu bestätigen.`,
    academicNote: `Universität oder Forschungszentrum? Kein Beitrag: Beitritt als kostenlose Akademische Allianz.`
  },
  mem2: {
    ideal: { community: `Neugierige, Studienanfänger und Landwirte, die AMAYAD kennenlernen möchten.`, student: `Studierende der Agrarwissenschaft, Ingenieurwesen, Energie und verwandter Fächer.`, farmer: `Landwirte, Ejido-Mitglieder und Eigentümer, die Agri-PV auf ihrem Land prüfen.`, professional: `Ingenieure, Installateure, Berater, Agronomen, Forschende und Beschäftigte im öffentlichen Dienst.`, company_micro: `Startups, Installateure und kleine Büros.`, company_pyme: `EPCs, Händler, Agrarindustrie und wachsende Agtech-Firmen.`, company_grande: `Projektentwickler, Hersteller, Lebensmittelunternehmen und Konzerne.` },
    short: { community: `Community`, student: `Studierende`, farmer: `Landwirt`, professional: `Fachkraft`, company_micro: `Klein / Startup`, company_pyme: `KMU`, company_grande: `Groß` },
    rowFee: `Jahresbeitrag (regulär)`, rowFoundingFee: `Gründerpreis (−30 %, 2 Jahre)`,
    tableTitle: `Leistungen nach Stufe`,
    tableLead: `Jede Stufe bietet andere Leistungen. KI-Bot-Kontingente, Plätze, Rabatte und Pässe sind Vorschläge.`,
    tableNote: `Vorgeschlagene Leistungsmatrix, vorbehaltlich der Zustimmung des Vorstands und schrittweise umgesetzt. Magazin, tägliche News, der Discord-Kanal nur für Mitglieder und der Telegram-Bot sind in Vorbereitung. Das Stimmrecht richtet sich nach der Satzung (wird veröffentlicht). Preise in MXN; MwSt. (IVA) noch zu bestätigen.`,
    faq: [
      { q: `Bin ich mit dem Absenden des Formulars Mitglied?`, a: `Es ist ein Antrag. AMAYAD bestätigt Aufnahme, aktuellen Beitrag und Zahlungsweise.` },
      { q: `In welcher Währung sind die Beiträge? Ist die MwSt. enthalten?`, a: `In mexikanischen Pesos (MXN) pro Jahr für Mexiko und in USD für internationale Mitglieder. Es handelt sich um einen Vorschlag; die Behandlung der MwSt. (IVA) ist noch zu bestätigen.` },
      { q: `Was ist der Gründungsmitglieds-Preis?`, a: `30 % Rabatt auf den regulären Beitrag, 2 Jahre festgeschrieben, für Beitritte zwischen dem 24. November 2026 und dem 31. März 2027.` },
      { q: `Welche Stufe passt zu mir?`, a: `Einzelpersonen wählen Studierende, Landwirt / Erzeuger oder Branchenfachkraft; Unternehmen nach Jahresumsatz (Klein bis 4 Mio. MXN, KMU 4–250 Mio. MXN, Groß über 250 Mio. MXN). Im Zweifel schreiben Sie uns.` },
      { q: `Und Universitäten und Forschungszentren?`, a: `Sie zahlen keinen Beitrag: Sie treten als kostenlose Akademische Allianz bei. Das Formular finden Sie im Bereich Partnerschaften.` },
      { q: `Sind die Leistungen schon verfügbar?`, a: `Sie werden schrittweise eingeführt. Magazin, tägliche News, der Discord-Kanal nur für Mitglieder und der Telegram-Bot sind in Vorbereitung.` },
      { q: `Kann meine Organisation sponsern, ohne Mitglied zu sein?`, a: `Ja. Nutzen Sie das Sponsoring-Formular, und wir erstellen ein maßgeschneidertes Angebot.` }
    ]
  },
  perks: {
    rows: { seats: `Plätze / Vertreter`, newsletter: `Wöchentlicher Newsletter`, daily: `Tägliche News (Zusammenfassung)`, magazine: `AMAYAD-Magazin (digital)`, discordPublic: `Discord: öffentliche Kanäle`, discordMembers: `Discord: Kanal nur für Mitglieder`, bot: `KI-Bot auf Telegram — Fragen (Vorschlag)`, library: `Bibliothek`, webinars: `Webinare`, committees: `Mitarbeit in einem Komitee`, voting: `Stimmrecht (laut Satzung)`, directory: `Mitgliederverzeichnis`, events: `AMAYAD-Veranstaltungen`, founding: `Anerkennung als Gründungsmitglied` },
    v: { allSeats: `✓ alle Plätze`, public: `Öffentlich`, full: `Vollständig`, open: `Offene`, allRec: `Alle + Aufzeichnungen`, observer: `Als Gast`, voice: `Rederecht, kein Stimmrecht`, oneVote: `✓ 1 Stimme`, profile: `Einzelprofil`, listing: `Firmeneintrag`, listingLogo: `Eintrag + Logo`, featured: `Hervorgehobener Eintrag + Logo`, general: `Normalpreis`, disc50: `−50 %`, disc30: `−30 %`, disc20: `−20 %`, pass1: `1 Pass + −20 %`, pass2: `2 Pässe + −20 %`, pass4: `4 Pässe + −20 %` },
    u: { perDay: `/Tag`, perSeatDay: `/Tag pro Platz` }
  },
  community: {
    jump: `Community`, eyebrow: `Community`,
    title: `Discord-Community und KI-Assistent auf Telegram`,
    lead: `Offener Austausch für alle und exklusive Bereiche für Mitglieder.`,
    discordTitle: `Tritt unserer Discord-Community bei`,
    discordText: `Der Server „Agrivoltaics and Digital Agriculture“: Fragen, Projekte, Veranstaltungen und Chancen der Branche.`,
    discordList: [`Öffentliche Kanäle für alle (Stufe Community)`, `Kanal nur für Mitglieder bezahlter Stufen (in Vorbereitung)`, `Rollen nach Mitgliedsstufe, vergeben von AMAYAD`],
    telegramTitle: `KI-Bot von AMAYAD auf Telegram`,
    telegramText: `Ein KI-Assistent zu Agri-PV und digitaler Landwirtschaft, mit einer täglichen Anzahl an Fragen je nach Stufe.`,
    telegramList: [`Antworten auf Basis der Bibliothek und Ressourcen von AMAYAD`, `Community: 3 Fragen pro Tag; mehr Fragen in bezahlten Stufen (Vorschlag)`, `Tägliche News-Zusammenfassung für Mitglieder`],
    telegramBtn: `Telegram-Bot`,
    note: `Der Discord-Link ist eine öffentliche Einladung. Der Telegram-Bot von AMAYAD ist noch nicht veröffentlicht; wir kündigen den Start im Newsletter an.`,
    membersTitle: `Mit der Community vernetzen`,
    membersText: `Bis das Mitgliederportal öffnet, findet der Austausch auf unserem Discord-Server statt.`
  },
  academic: {
    link: `Akademische Allianzen ansehen →`, tag: `Kostenlos`,
    title: `Akademische Allianzen`,
    text: `Universitäten und Forschungszentren zahlen keinen Mitgliedsbeitrag: Sie treten AMAYAD als kostenlose Akademische Allianz bei, um in Forschung, Ausbildung und Politik zusammenzuarbeiten.`,
    perks: [`Nennung als akademischer Partner auf dieser Website (mit Zustimmung)`, `Gemeinsame Organisation von Seminaren, Kursen und Feldtagen`, `Zugang ihrer Studierenden zur AMAYAD-Community (Stufe Community)`, `Zusammenarbeit bei Forschung, Daten und der Politikinitiative`],
    note: `Vorschlag. Jede Allianz wird schriftlich vereinbart; die Nennung bedeutet bis zur Unterzeichnung keine gegenseitige Billigung.`,
    cta: `Akademische Allianz anfragen`, cta2: `Schreiben Sie uns`
  }
};

/* ============================== IT ============================== */
V.it = {
  cta: { discord: `Unisciti alla nostra community su Discord` },
  tiers: {
    community:      { kind: `Gratuito`, name: `Community`, desc: `Per chiunque sia interessato all'agrivoltaico e all'agricoltura digitale.` },
    student:        { kind: `Persona`, name: `Studente`, desc: `Per studenti universitari o post-laurea con tessera valida.` },
    farmer:         { kind: `Persona`, name: `Agricoltore / Produttore`, desc: `Per agricoltori, produttori e proprietari terrieri a titolo individuale.` },
    professional:   { kind: `Persona`, name: `Professionista del settore`, desc: `Per ingegneri, installatori, consulenti, agronomi, ricercatori e personale pubblico, a titolo individuale.` },
    company_micro:  { kind: `Azienda`, name: `Microimpresa / Startup`, desc: `Aziende con fatturato annuo fino a 4 milioni di MXN.` },
    company_pyme:   { kind: `Azienda`, name: `PMI`, desc: `Aziende con fatturato annuo tra 4 e 250 milioni di MXN.` },
    company_grande: { kind: `Azienda`, name: `Grande impresa`, desc: `Aziende con fatturato annuo superiore a 250 milioni di MXN.` },
    intl_individual:     { kind: `Internazionale`, name: `Individuale internazionale`, desc: `Professionisti fuori dal Messico. Vantaggi equivalenti a Professionista del settore.` },
    intl_company_small:  { kind: `Internazionale`, name: `Azienda internazionale — piccola`, desc: `Vantaggi equivalenti a Microimpresa / Startup.` },
    intl_company_medium: { kind: `Internazionale`, name: `Azienda internazionale — media`, desc: `Vantaggi equivalenti a PMI.` },
    intl_company_large:  { kind: `Internazionale`, name: `Azienda internazionale — grande`, desc: `Vantaggi equivalenti a Grande impresa.` }
  },
  mem: {
    lead: `Sette livelli in pesos messicani — da Community (gratuito) a Grande impresa — più livelli internazionali in USD. Ogni livello offre vantaggi diversi.`,
    foundingTitle: `Prezzo socio fondatore: 30% di sconto, bloccato per 2 anni.`,
    foundingText: `Per chi aderisce dal 24 novembre 2026 al 31 marzo 2027 (proposta).`,
    priceNote: `Quote annuali in pesos messicani (MXN). Prezzi e vantaggi sono una proposta soggetta all'approvazione del Consiglio direttivo; IVA da confermare. L'invio del modulo è una richiesta: AMAYAD confermerà l'ammissione, la quota in vigore e la modalità di pagamento.`,
    free: `Gratis`, foundingBadge: `Prezzo fondatore`, joinFree: `Iscriviti gratis`,
    intlTitle: `Adesione internazionale (USD)`,
    intlLead: `Per persone e aziende fuori dal Messico. I vantaggi corrispondono ai livelli messicani indicati.`,
    intlNote: `Quote annuali in USD (proposta). Fasce dimensionali, sconto fondatore e imposte applicabili da confermare.`,
    academicNote: `Università o centro di ricerca? Nessuna quota: aderisce come Alleanza accademica gratuita.`
  },
  mem2: {
    ideal: { community: `curiosi, studenti alle prime armi e agricoltori che vogliono conoscere AMAYAD.`, student: `studenti di agraria, ingegneria, energia e discipline affini.`, farmer: `agricoltori, ejidatarios e proprietari che valutano l'agrivoltaico sui propri terreni.`, professional: `ingegneri, installatori, consulenti, agronomi, ricercatori e funzionari pubblici.`, company_micro: `startup, installatori e piccoli studi.`, company_pyme: `EPC, distributori, agroindustria e agtech in crescita.`, company_grande: `sviluppatori, produttori, aziende alimentari e grandi gruppi.` },
    short: { community: `Community`, student: `Studente`, farmer: `Agricoltore`, professional: `Professionista`, company_micro: `Micro / Startup`, company_pyme: `PMI`, company_grande: `Grande` },
    rowFee: `Quota annuale (ordinaria)`, rowFoundingFee: `Prezzo fondatore (−30%, 2 anni)`,
    tableTitle: `Vantaggi per livello`,
    tableLead: `Ogni livello offre vantaggi diversi. Quote del bot IA, posti, sconti e pass sono proposte.`,
    tableNote: `Matrice dei vantaggi proposta, soggetta all'approvazione del Consiglio direttivo e attuata gradualmente. La rivista, le notizie quotidiane, il canale Discord riservato ai soci e il bot Telegram sono in preparazione. Il diritto di voto dipenderà dallo statuto (da pubblicare). Prezzi in MXN; IVA da confermare.`,
    faq: [
      { q: `Inviare il modulo mi rende socio?`, a: `È una richiesta. AMAYAD confermerà l'ammissione, la quota in vigore e la modalità di pagamento.` },
      { q: `In che valuta sono le quote? Includono l'IVA?`, a: `In pesos messicani (MXN) all'anno per il Messico e in USD per i soci internazionali. Sono una proposta; il trattamento dell'IVA è da confermare.` },
      { q: `Cos'è il prezzo socio fondatore?`, a: `Uno sconto del 30% sulla quota ordinaria, bloccato per 2 anni, per chi aderisce tra il 24 novembre 2026 e il 31 marzo 2027.` },
      { q: `Quale livello fa per me?`, a: `Le persone scelgono Studente, Agricoltore / Produttore o Professionista del settore; le aziende in base al fatturato annuo (Micro fino a 4 Mln MXN, PMI 4–250 Mln MXN, Grande oltre 250 Mln MXN). Nel dubbio, scrivici.` },
      { q: `E le università e i centri di ricerca?`, a: `Non pagano quota: aderiscono come Alleanza accademica gratuita. Il modulo è nella sezione Partnership.` },
      { q: `I vantaggi sono già disponibili?`, a: `Vengono attivati gradualmente. La rivista, le notizie quotidiane, il canale Discord riservato ai soci e il bot Telegram sono in preparazione.` },
      { q: `La mia organizzazione può sponsorizzare senza essere socia?`, a: `Sì. Usa il modulo di sponsorizzazione e prepareremo una proposta su misura.` }
    ]
  },
  perks: {
    rows: { seats: `Posti / rappresentanti`, newsletter: `Newsletter settimanale`, daily: `Notizie quotidiane (sintesi)`, magazine: `Rivista AMAYAD (digitale)`, discordPublic: `Discord: canali pubblici`, discordMembers: `Discord: canale riservato ai soci`, bot: `Bot IA su Telegram — domande (proposta)`, library: `Biblioteca`, webinars: `Webinar`, committees: `Partecipare a un comitato`, voting: `Diritto di voto (secondo lo statuto)`, directory: `Elenco dei soci`, events: `Eventi AMAYAD`, founding: `Riconoscimento come socio fondatore` },
    v: { allSeats: `✓ tutti i posti`, public: `Pubblica`, full: `Completa`, open: `Aperti`, allRec: `Tutti + registrazioni`, observer: `Come uditore`, voice: `Voce, senza voto`, oneVote: `✓ 1 voto`, profile: `Profilo individuale`, listing: `Scheda aziendale`, listingLogo: `Scheda + logo`, featured: `Scheda in evidenza + logo`, general: `Prezzo standard`, disc50: `−50%`, disc30: `−30%`, disc20: `−20%`, pass1: `1 pass + −20%`, pass2: `2 pass + −20%`, pass4: `4 pass + −20%` },
    u: { perDay: `/giorno`, perSeatDay: `/giorno per posto` }
  },
  community: {
    jump: `Community`, eyebrow: `Community`,
    title: `Community su Discord e assistente IA su Telegram`,
    lead: `Una conversazione aperta a tutti e spazi riservati ai soci.`,
    discordTitle: `Unisciti alla nostra community su Discord`,
    discordText: `Il server «Agrivoltaics and Digital Agriculture»: domande, progetti, eventi e opportunità del settore.`,
    discordList: [`Canali pubblici aperti a tutti (livello Community)`, `Canale riservato ai soci dei livelli a pagamento (in preparazione)`, `Ruoli in base al livello di adesione, assegnati da AMAYAD`],
    telegramTitle: `Bot IA di AMAYAD su Telegram`,
    telegramText: `Un assistente IA su agrivoltaico e agricoltura digitale, con un numero di domande giornaliere in base al tuo livello.`,
    telegramList: [`Risposte basate sulla biblioteca e sulle risorse di AMAYAD`, `Community: 3 domande al giorno; più domande nei livelli a pagamento (proposta)`, `Sintesi quotidiana delle notizie per i soci`],
    telegramBtn: `Bot Telegram`,
    note: `Il link Discord è un invito pubblico. Il bot Telegram di AMAYAD non è ancora pubblicato; ne annunceremo il lancio nella newsletter.`,
    membersTitle: `Entra in contatto con la community`,
    membersText: `In attesa del portale soci, la conversazione si svolge sul nostro server Discord.`
  },
  academic: {
    link: `Vedi le Alleanze accademiche →`, tag: `Gratuito`,
    title: `Alleanze accademiche`,
    text: `Università e centri di ricerca non pagano quota associativa: aderiscono ad AMAYAD come Alleanza accademica gratuita per collaborare su ricerca, formazione e politiche pubbliche.`,
    perks: [`Menzione come partner accademico su questo sito (con autorizzazione)`, `Co-organizzazione di seminari, corsi e giornate in campo`, `Accesso dei loro studenti alla community AMAYAD (livello Community)`, `Collaborazione su ricerca, dati e sull'iniziativa di politica pubblica`],
    note: `Proposta. Ogni alleanza è formalizzata per iscritto; la menzione non implica alcun avallo reciproco fino alla firma.`,
    cta: `Richiedi un'Alleanza accademica`, cta2: `Scrivici`
  }
};

  Object.keys(V).forEach(function (l) { window.AMAYAD_I18N[l] = merge(window.AMAYAD_I18N[l] || {}, V[l]); });
  /* home quick-link label for Membership ("5 tiers" -> new structure) */
  var QD = { es: `7 niveles en MXN, internacional y patrocinio`, en: `7 MXN tiers, international and sponsorship`, fr: `7 niveaux en MXN, international et parrainage`, de: `7 Stufen in MXN, international und Sponsoring`, it: `7 livelli in MXN, internazionale e sponsorizzazione` };
  Object.keys(QD).forEach(function (l) { var q = window.AMAYAD_I18N[l] && window.AMAYAD_I18N[l].home2 && window.AMAYAD_I18N[l].home2.quick; (q || []).forEach(function (x) { if (x.id === "membership") x.d = QD[l]; }); });
})();
