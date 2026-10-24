/* AMAYAD — app logic v2: i18n, language detection, tabs/subtabs, rendering,
   generic forms, newsletter, search, events (.ics), member-login modal. */
(function () {
  "use strict";
  var CFG = window.AMAYAD_CONFIG, I18N = window.AMAYAD_I18N;
  var LINKS = window.AMAYAD_PROGRAM_LINKS || {};
  var LS_KEY = "amayad_lang";
  var lang = CFG.DEFAULT_LANG;

  /* ---------------- helpers ---------------- */
  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }
  function t(key) {
    var v = get(I18N[lang], key);
    if (v === undefined) { (window.AMAYAD_MISSING_I18N = window.AMAYAD_MISSING_I18N || []).push(lang + ":" + key); v = get(I18N.en, key); }
    if (v === undefined) v = get(I18N.es, key);
    return v === undefined ? key : v;
  }
  function loc(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] || v.en || v.es || "";
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&" + "amp;", "<": "&" + "lt;", ">": "&" + "gt;", '"': "&" + "quot;", "'": "&" + "#39;" }[c];
    });
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function fmtPrice(n, cur) {
    try { return new Intl.NumberFormat(t("ui.locale"), { style: "currency", currency: cur, currencyDisplay: "narrowSymbol", maximumFractionDigits: 0 }).format(n); }
    catch (e) { return "$" + n + " " + cur; }
  }
  function parseDate(s) { if (!s) return null; var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function fmtDate(s, opts) {
    var d = parseDate(s); if (!d) return "";
    try { return new Intl.DateTimeFormat(t("ui.locale"), opts || { day: "numeric", month: "long", year: "numeric" }).format(d); }
    catch (e) { return s; }
  }
  function todayISO() { var d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function norm(s) { return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
  var toastTimer;
  function toast(msg) {
    var el = $("#toast"); el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.hidden = true; }, 4200);
  }

  /* ---------------- language detection ---------------- */
  var LATAM_ES = ["MX","ES","AR","BO","CL","CO","CR","CU","DO","EC","SV","GT","HN","NI","PA","PY","PE","PR","UY","VE","GQ"];
  function langFromCountry(cc, region, navLang) {
    if (!cc) return null;
    cc = String(cc).toUpperCase();
    if (LATAM_ES.indexOf(cc) > -1) return "es";
    if (cc === "FR" || cc === "BE" || cc === "LU" || cc === "MC") return "fr";
    if (cc === "CA") return (String(region || "").toUpperCase() === "QC" || /quebec|québec/i.test(region || "")) ? "fr" : "en";
    if (cc === "CH") { var n = (navLang || "").slice(0, 2); return (n === "fr" || n === "it") ? n : "de"; }
    if (cc === "DE" || cc === "AT" || cc === "LI") return "de";
    if (cc === "IT" || cc === "SM" || cc === "VA") return "it";
    return "en";
  }
  function fetchTimeout(url, ms) {
    return new Promise(function (resolve, reject) {
      var ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
      var timer = setTimeout(function () { if (ctrl) ctrl.abort(); reject(new Error("timeout")); }, ms);
      fetch(url, { signal: ctrl ? ctrl.signal : undefined, cache: "no-store" })
        .then(function (r) { if (!r.ok) throw new Error("http " + r.status); return r.json(); })
        .then(function (j) { clearTimeout(timer); resolve(j); })
        .catch(function (e) { clearTimeout(timer); reject(e); });
    });
  }
  function detectByGeo(i) {
    i = i || 0;
    if (i >= CFG.GEO_ENDPOINTS.length) return Promise.resolve(null);
    return fetchTimeout(CFG.GEO_ENDPOINTS[i], CFG.GEO_TIMEOUT_MS).then(function (j) {
      var cc = j.country_code || j.country || null;
      var region = j.region_code || j.region || "";
      if (!cc) throw new Error("no country");
      return langFromCountry(cc, region, navigator.language);
    }).catch(function () { return detectByGeo(i + 1); });
  }
  function langFromNavigator() {
    var list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < list.length; i++) {
      var c = String(list[i]).slice(0, 2).toLowerCase();
      if (CFG.SUPPORTED_LANGS.indexOf(c) > -1) return c;
    }
    return null;
  }
  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && CFG.SUPPORTED_LANGS.indexOf(q) > -1) return Promise.resolve({ lang: q, src: "url" });
    var saved = null;
    try { saved = localStorage.getItem(LS_KEY); } catch (e) {}
    if (saved && CFG.SUPPORTED_LANGS.indexOf(saved) > -1) return Promise.resolve({ lang: saved, src: "saved" });
    return detectByGeo().then(function (g) {
      if (g) return { lang: g, src: "geo" };
      var n = langFromNavigator();
      if (n) return { lang: n, src: "navigator" };
      return { lang: CFG.DEFAULT_LANG, src: "default" };
    });
  }

  /* ---------------- generic static translation ---------------- */
  function cardHTML(c, cls, tagKey) {
    return '<article class="' + (cls || "card") + '">' +
      (c.i ? '<div class="ic" aria-hidden="true">' + c.i + "</div>" : "") +
      (tagKey ? '<span class="tag">' + esc(t(tagKey)) + "</span>" : (c.tag ? '<span class="tag">' + c.tag + "</span>" : "")) +
      "<h3>" + c.t + "</h3>" + (c.d ? "<p>" + c.d + "</p>" : "") +
      (Array.isArray(c.list) ? '<ul class="ticks">' + c.list.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" : "") +
      "</article>";
  }
  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    var md = $('meta[name="description"]'); if (md) md.setAttribute("content", t("meta.desc"));
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    $$("[data-i18n-list]").forEach(function (el) {
      var arr = t(el.getAttribute("data-i18n-list"));
      el.innerHTML = Array.isArray(arr) ? arr.map(function (x) { return "<li>" + x + "</li>"; }).join("") : "";
    });
    $$("[data-i18n-cards]").forEach(function (el) {
      var arr = t(el.getAttribute("data-i18n-cards"));
      el.innerHTML = Array.isArray(arr) ? arr.map(function (c) { return cardHTML(c, el.getAttribute("data-card-class"), el.getAttribute("data-card-tag")); }).join("") : "";
    });
    $$("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":"); el.setAttribute(p[0], t(p[1]));
      });
    });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
  }

  /* ---------------- HOME ---------------- */
  function renderHome() {
    $("#keyBenefits").innerHTML = t("home2.benefits").map(function (b) {
      return '<div class="kb"><span class="kb-ic" aria-hidden="true">' + b.i + '</span><div><strong>' + b.t + "</strong><span>" + b.d + "</span></div></div>";
    }).join("");
    $("#quickLinks").innerHTML = t("home2.quick").map(function (q) {
      return '<a class="ql" href="#' + q.id + '" data-tab-link="' + q.id + '"><span class="ql-ic" aria-hidden="true">' + q.i + '</span><span class="ql-t">' + q.t + '</span><span class="ql-d">' + q.d + '</span><span class="ql-go" aria-hidden="true">→</span></a>';
    }).join("");
    // next event
    var ev = upcomingEvents()[0] || plannedEvents()[0];
    $("#homeNextEvent").innerHTML = ev ? eventMini(ev) : '<div class="res soon-card"><p>' + esc(t("ev.none")) + "</p></div>";
    // news
    var N = window.AMAYAD_NEWS || [];
    if (N.length) {
      $("#homeNews").innerHTML = N.slice(0, 3).map(function (n) {
        var inner = '<span class="news-date">' + esc(fmtDate(n.date)) + "</span><h3>" + esc(loc(n.title)) + "</h3><p>" + esc(loc(n.text)) + "</p>";
        return n.url ? '<a class="news" href="' + esc(n.url) + '" target="_blank" rel="noopener">' + inner + "</a>" : '<article class="news">' + inner + "</article>";
      }).join("");
    } else {
      var g = "";
      for (var i = 0; i < 2; i++) g += '<article class="news news-soon"><span class="tag st-forth">' + esc(t("lib.status.forthcoming")) + "</span><h3>" + esc(t("home2.newsSoon")) + "</h3><p>" + esc(t("home2.newsSoonText")) + "</p></article>";
      $("#homeNews").innerHTML = g;
    }
    $$("[data-discord]").forEach(function (a) {
      var lbl = $("[data-discord-label]", a);
      if (CFG.DISCORD_URL) { a.href = CFG.DISCORD_URL; a.target = "_blank"; a.rel = "noopener"; lbl.textContent = t("cta.discord"); a.removeAttribute("data-soon"); }
      else { a.href = "#"; a.removeAttribute("target"); lbl.textContent = t("cta.discord") + " · " + t("ui.comingSoon"); a.setAttribute("data-soon", "discord"); }
    });
  }

  /* ---------------- ABOUT ---------------- */
  function renderAbout() {
    $("#objectivesList").innerHTML = t("home.objectives").map(function (o) {
      return "<li><strong>" + o.t + "</strong><span>" + o.d + "</span></li>";
    }).join("");
    $("#historyList").innerHTML = t("about.history").map(function (h) {
      return '<li class="tl ' + (h.planned ? "tl-planned" : "") + '"><span class="tl-y">' + h.y + '</span><div><h3>' + h.t + "</h3><p>" + h.d + "</p></div></li>";
    }).join("");
    $("#foundersList").innerHTML = t("about.founders").map(function (f) {
      var ini = f.name.split(" ").filter(function (w) { return /^[A-ZÁÉÍÓÚ]/.test(w); }).slice(0, 2).map(function (w) { return w[0]; }).join("");
      return '<article class="founder"><div class="avatar" aria-hidden="true">' + esc(ini) + '</div><div><h3>' + esc(f.name) + '</h3><p class="frole">' + f.role + "</p><p>" + f.d + "</p></div></article>";
    }).join("");
  }

  var currentTopic = "concept";
  function renderAgri() {
    var topics = t("agri.topics");
    $("#agriTabs").innerHTML = topics.map(function (tp) {
      var sel = tp.id === currentTopic;
      return '<button type="button" role="tab" id="st-' + tp.id + '" aria-controls="sp-' + tp.id + '" aria-selected="' + sel + '" tabindex="' + (sel ? 0 : -1) + '" data-topic="' + tp.id + '">' + esc(tp.tab) + "</button>";
    }).join("");
    $("#agriPanels").innerHTML = topics.map(function (tp) {
      return '<div class="topic" role="tabpanel" id="sp-' + tp.id + '" aria-labelledby="st-' + tp.id + '"' + (tp.id === currentTopic ? "" : " hidden") + ">" +
        "<div><h2>" + tp.title + "</h2>" + tp.body + "</div>" + '<aside class="side">' + tp.side + "</aside></div>";
    }).join("");
  }
  function selectTopic(id, focus) {
    currentTopic = id;
    $$("#agriTabs [role=tab]").forEach(function (b) {
      var s = b.getAttribute("data-topic") === id;
      b.setAttribute("aria-selected", String(s)); b.tabIndex = s ? 0 : -1;
      if (s && focus) b.focus();
    });
    $$("#agriPanels [role=tabpanel]").forEach(function (p) { p.hidden = p.id !== "sp-" + id; });
  }

  /* ---------------- MEMBERSHIP ---------------- */
  function renderTiers() {
    var ALL = window.AMAYAD_TIERS, MX = ALL.filter(function (x) { return x.group !== "intl"; }), INTL = ALL.filter(function (x) { return x.group === "intl"; });
    var F = window.AMAYAD_FOUNDING || {};
    function priceHTML(tr) {
      if (!tr.price) return '<div class="price">' + esc(t("mem.free")) + "</div>";
      var h = '<div class="price">' + esc(fmtPrice(tr.price, tr.currency)) + ' <small>' + esc(tr.currency) + " / " + esc(t("mem.perYear")) + "</small></div>";
      if (tr.founding) h += '<div class="price-founding"><span class="badge-founding">' + esc(t("mem.foundingBadge")) + "</span> <b>" + esc(fmtPrice(tr.founding, tr.currency)) + "</b> <small>" + esc(tr.currency) + "</small></div>";
      return h;
    }
    $("#tiersGrid").innerHTML = MX.map(function (tr) {
      var tx = t("tiers." + tr.id);
      return '<article class="tier' + (tr.featured ? " tier-featured" : "") + (tr.price ? "" : " tier-free") + '">' +
        '<span class="tier-kind">' + esc(tx.kind) + "</span>" +
        "<h3>" + esc(tx.name) + "</h3>" + priceHTML(tr) +
        '<p>' + esc(tx.desc) + "</p>" +
        '<p class="ideal"><b>' + esc(t("mem2.idealFor")) + "</b> " + esc(t("mem2.ideal." + tr.id)) + "</p>" +
        '<button type="button" class="btn ' + (tr.featured ? "btn-sun" : "btn-blue") + '" data-open-register="' + tr.id + '">' + esc(tr.price ? t("mem.registerTier") : t("mem.joinFree")) + "</button>" +
        "</article>";
    }).join("");
    var ig = $("#intlGrid");
    if (ig) ig.innerHTML = INTL.map(function (tr) {
      var tx = t("tiers." + tr.id);
      return '<article class="intl-tier"><span class="tier-kind">' + esc(tx.kind) + "</span><h4>" + esc(tx.name) + "</h4>" +
        '<div class="price">' + esc(fmtPrice(tr.price, tr.currency)) + " <small>" + esc(tr.currency) + " / " + esc(t("mem.perYear")) + "</small></div>" +
        '<p class="small">' + esc(tx.desc) + "</p>" +
        '<button type="button" class="btn btn-sm btn-ghost-dark" data-open-register="' + tr.id + '">' + esc(t("mem2.join")) + "</button></article>";
    }).join("");
    // perks comparison table (v2.4 proposal)
    function cell(v) {
      if (v === "y") return '<td class="yes" aria-label="✓">✓</td>';
      if (v === "n") return '<td class="no" aria-label="—">—</td>';
      if (typeof v === "number") return "<td><b>" + v + "</b></td>";
      if (Array.isArray(v)) return "<td><b>" + v[0] + "</b> <small>" + esc(t("perks.u." + v[1])) + "</small></td>";
      if (typeof v === "string" && v.indexOf("k:") === 0) return '<td class="txt">' + esc(t("perks.v." + v.slice(2))) + "</td>";
      return "<td>" + esc(String(v)) + "</td>";
    }
    var head = "<thead><tr><th scope=\"col\">" + esc(t("mem2.colBenefit")) + "</th>" + MX.map(function (tr) {
      var tx = t("tiers." + tr.id); return '<th scope="col"><span class="th-kind">' + esc(tx.kind) + "</span>" + esc(t("mem2.short." + tr.id)) + "</th>";
    }).join("") + "</tr></thead>";
    var rows = '<tr class="row-fee"><th scope="row">' + esc(t("mem2.rowFee")) + "</th>" + MX.map(function (tr) { return "<td><b>" + esc(tr.price ? fmtPrice(tr.price, tr.currency) : t("mem.free")) + "</b>" + (tr.price ? " <small>" + tr.currency + "</small>" : "") + "</td>"; }).join("") + "</tr>";
    rows += '<tr class="row-fee row-founding"><th scope="row">' + esc(t("mem2.rowFoundingFee")) + "</th>" + MX.map(function (tr) { return "<td>" + (tr.founding ? "<b>" + esc(fmtPrice(tr.founding, tr.currency)) + "</b> <small>" + tr.currency + "</small>" : "—") + "</td>"; }).join("") + "</tr>";
    rows += (window.AMAYAD_PERKS || []).map(function (r) {
      return '<tr><th scope="row">' + esc(t("perks.rows." + r.id)) + "</th>" + r.v.map(cell).join("") + "</tr>";
    }).join("");
    rows += '<tr class="row-cta"><th scope="row"></th>' + MX.map(function (tr) { return '<td><button type="button" class="btn btn-sm btn-blue" data-open-register="' + tr.id + '">' + esc(t("mem2.join")) + "</button></td>"; }).join("") + "</tr>";
    $("#compareTable").innerHTML = "<caption class=\"sr-only\">" + esc(t("mem2.tableTitle")) + "</caption>" + head + "<tbody>" + rows + "</tbody>";
    // community: Telegram bot (coming soon unless a confirmed AMAYAD bot URL is set)
    $$("[data-telegram]").forEach(function (a) {
      if (CFG.TELEGRAM_BOT_URL) { a.href = CFG.TELEGRAM_BOT_URL; a.target = "_blank"; a.rel = "noopener"; a.textContent = t("community.telegramBtn"); a.classList.remove("is-soon"); }
      else { a.removeAttribute("href"); a.textContent = t("community.telegramBtn") + " · " + t("ui.comingSoon"); a.classList.add("is-soon"); a.setAttribute("aria-disabled", "true"); }
    });
    // testimonials placeholder
    var g = "";
    for (var i = 0; i < 3; i++) g += '<article class="card testi"><div class="quote" aria-hidden="true">“</div><p>' + esc(t("mem2.testiSoon")) + '</p><span class="tag st-forth">' + esc(t("ui.comingSoon")) + "</span></article>";
    $("#testimonials").innerHTML = g;
    $("#memFaq").innerHTML = t("mem2.faq").map(function (f) { return "<details><summary>" + f.q + "</summary><p>" + f.a + "</p></details>"; }).join("");
    $$("[data-pdf-link]").forEach(function (a) {
      var u = LINKS[a.getAttribute("data-pdf-link")];
      a.hidden = !u; if (u) { a.href = u; a.textContent = t("lib.open") + " (PDF) ↗"; }
    });
    var br = $("#brochureRow"); br.hidden = !LINKS.membershipBrochurePdf; if (LINKS.membershipBrochurePdf) $("#brochureLink").href = LINKS.membershipBrochurePdf;
  }

  /* ---------------- PROGRAMS ---------------- */
  function committeesAll() { return t("home.committees").concat([t("prog.women")]); }
  function renderCommittees() {
    $("#committeesList").innerHTML = committeesAll().map(function (c, i) {
      var isNew = i === committeesAll().length - 1;
      return '<article class="card committee' + (isNew ? " committee-new" : "") + '"><span class="tag">' + esc(isNew ? t("prog.newCommittee") : t("home.committeeTag")) + "</span><h3>" + c.t + "</h3><p>" + c.d + "</p>" +
        '<button type="button" class="link small" data-open-form="committee" data-form-preset="' + i + '">' + esc(t("prog.joinThis")) + " →</button></article>";
    }).join("");
  }
  function selectSub(id) {
    var btn = $('[data-sub="' + id + '"]'); if (!btn) return;
    var group = btn.closest("[data-subtabs]");
    $$("[data-sub]", group).forEach(function (b) { b.setAttribute("aria-selected", String(b === btn)); });
    var prefix = group.getAttribute("data-subtabs") + "-";
    $$('[data-subpanel^="' + prefix + '"]').forEach(function (p) { p.hidden = p.getAttribute("data-subpanel") !== id; });
  }

  /* ---------------- EVENTS ---------------- */
  function allEvents() { return (window.AMAYAD_EVENTS || []).slice(); }
  function upcomingEvents() {
    var td = todayISO();
    return allEvents().filter(function (e) { return e.date && e.date >= td && e.status !== "planned"; }).sort(function (a, b) { return a.date < b.date ? -1 : 1; });
  }
  function plannedEvents() { return allEvents().filter(function (e) { return !e.date || e.status === "planned"; }); }
  function pastEvents() { var td = todayISO(); return allEvents().filter(function (e) { return e.date && e.date < td && e.status !== "planned"; }).sort(function (a, b) { return a.date > b.date ? -1 : 1; }); }
  function dateBlock(e) {
    if (!e.date) return '<div class="datebox datebox-tbd"><span class="db-m">' + esc(t("ev.dateShort")) + '</span><span class="db-d">?</span><span class="db-y">TBD</span></div>';
    return '<div class="datebox"><span class="db-m">' + esc(fmtDate(e.date, { month: "short" })) + '</span><span class="db-d">' + esc(fmtDate(e.date, { day: "numeric" })) + '</span><span class="db-y">' + e.date.slice(0, 4) + "</span></div>";
  }
  function eventMini(e) {
    return '<article class="ev-mini">' + dateBlock(e) + '<div><span class="tag">' + esc(t("ev.types." + e.type)) + "</span><h3>" + esc(loc(e.title)) + '</h3><p class="ev-meta">' +
      esc(e.date ? fmtDate(e.date) : t("ev.dateTBD")) + " · " + esc(e.venue ? loc(e.venue) : t("ev.venueTBD")) + '</p><a class="link-arrow" href="#events" data-tab-link="events">' + esc(t("ev.details")) + "</a></div></article>";
  }
  function eventCard(e, past) {
    var id = e.id;
    var tabs = ["overview", "agenda", "speakers", "sponsors"];
    var agenda = (e.agenda && e.agenda.length)
      ? '<ol class="agenda">' + e.agenda.map(function (a) { return '<li><span class="ag-time">' + esc(a.time || t("ev.timeTBD")) + "</span><span>" + esc(loc(a.title)) + "</span></li>"; }).join("") + '</ol><p class="fine">' + esc(t("ev.agendaNote")) + "</p>"
      : '<p class="muted">' + esc(t("ev.agendaTBA")) + "</p>";
    var speakers = (e.speakers && e.speakers.length)
      ? '<div class="speakers">' + e.speakers.map(function (s) {
          var ini = s.name.split(" ").filter(function (w) { return /^[A-ZÁÉÍÓÚ]/.test(w); }).slice(0, 2).map(function (w) { return w[0]; }).join("");
          return '<div class="speaker"><div class="avatar avatar-sm" aria-hidden="true">' + esc(ini) + "</div><div><b>" + esc(s.name) + "</b><span>" + esc(loc(s.role)) + "</span></div></div>";
        }).join("") + '<div class="speaker speaker-tba"><div class="avatar avatar-sm avatar-ghost" aria-hidden="true">+</div><div><b>' + esc(t("ev.moreSpeakers")) + "</b><span>" + esc(t("ev.tba")) + "</span></div></div></div>"
      : '<p class="muted">' + esc(t("ev.speakersTBA")) + "</p>";
    var sponsors = (e.sponsors && e.sponsors.length)
      ? '<div class="badges">' + e.sponsors.map(function (s) { return '<div class="badge"><span class="bname">' + esc(s.name) + "</span></div>"; }).join("") + "</div>"
      : '<p class="muted">' + esc(t("ev.sponsorsNone")) + '</p><button type="button" class="btn btn-sm btn-ghost-dark" data-open-form="sponsor">' + esc(t("ev.sponsorCta")) + "</button>";
    var panels = {
      overview: "<p>" + esc(loc(e.summary)) + '</p><dl class="ev-dl"><dt>' + esc(t("ev.when")) + "</dt><dd>" + esc(e.date ? fmtDate(e.date) + (e.time ? " · " + e.time : " · " + t("ev.timeTBD")) : t("ev.dateTBD")) + "</dd><dt>" + esc(t("ev.where")) + "</dt><dd>" + esc(e.venue ? loc(e.venue) + (e.city ? ", " + e.city : "") : t("ev.venueTBD")) + "</dd></dl>",
      agenda: agenda, speakers: speakers, sponsors: sponsors
    };
    var statusTxt = t("ev.status." + (past ? "past" : e.status));
    var actions = past ? "" :
      (e.registerUrl ? '<a class="btn btn-sun" href="' + esc(e.registerUrl) + '" target="_blank" rel="noopener">' + esc(t("cta.register")) + "</a>"
                     : '<button type="button" class="btn btn-sun" data-open-form="event" data-form-preset="' + esc(id) + '">' + esc(t("cta.registerInterest")) + "</button>") +
      (e.date ? '<button type="button" class="btn btn-ghost-dark" data-ics="' + esc(id) + '">' + esc(t("cta.addCal")) + "</button>" : "");
    return '<article class="event' + (e.status === "planned" ? " event-planned" : "") + '" id="ev-' + esc(id) + '">' +
      '<div class="ev-top">' + dateBlock(e) + '<div class="ev-head"><div class="ev-tags"><span class="tag">' + esc(t("ev.types." + e.type)) + '</span><span class="tag ' + (e.status === "planned" ? "st-forth" : "st-avail") + '">' + esc(statusTxt) + "</span></div><h3>" + esc(loc(e.title)) + "</h3></div></div>" +
      '<div class="ev-tabs" role="tablist">' + tabs.map(function (tb, i) { return '<button type="button" role="tab" aria-selected="' + (i === 0) + '" data-evtab="' + esc(id) + ":" + tb + '">' + esc(t("ev.tabs." + tb)) + "</button>"; }).join("") + "</div>" +
      tabs.map(function (tb, i) { return '<div class="ev-panel" role="tabpanel" data-evpanel="' + esc(id) + ":" + tb + '"' + (i ? " hidden" : "") + ">" + panels[tb] + "</div>"; }).join("") +
      (actions ? '<div class="ev-actions">' + actions + "</div>" : "") + "</article>";
  }
  function renderEvents() {
    var up = upcomingEvents(), pl = plannedEvents(), pa = pastEvents();
    $("#eventsUpcoming").innerHTML = up.length ? up.map(function (e) { return eventCard(e); }).join("") : '<div class="res soon-card"><p>' + esc(t("ev.none")) + "</p></div>";
    $("#eventsPlanned").innerHTML = pl.length ? pl.map(function (e) { return eventCard(e); }).join("") : '<div class="res soon-card"><p>' + esc(t("ev.none")) + "</p></div>";
    $("#eventsPast").innerHTML = pa.length ? pa.map(function (e) { return eventCard(e, true); }).join("") : '<div class="res soon-card"><p>' + esc(t("ev.pastNone")) + "</p></div>";
  }
  function downloadICS(id) {
    var e = allEvents().filter(function (x) { return x.id === id; })[0]; if (!e || !e.date) return;
    var d = e.date.replace(/-/g, ""), dt;
    if (e.time) { var tm = e.time.replace(":", "") + "00"; dt = "DTSTART:" + d + "T" + tm + "\r\nDURATION:PT2H"; }
    else { var nd = parseDate(e.date); nd.setDate(nd.getDate() + 1); dt = "DTSTART;VALUE=DATE:" + d + "\r\nDTEND;VALUE=DATE:" + nd.getFullYear() + String(nd.getMonth() + 1).padStart(2, "0") + String(nd.getDate()).padStart(2, "0"); }
    function icsEsc(s) { return String(s).replace(/([,;\\])/g, "\\$1").replace(/\n/g, "\\n"); }
    var ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//AMAYAD//Events//" + lang.toUpperCase(), "BEGIN:VEVENT", "UID:" + id + "@amayad", "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z", dt,
      "SUMMARY:" + icsEsc(loc(e.title)), "DESCRIPTION:" + icsEsc(loc(e.summary)), "LOCATION:" + icsEsc(e.venue ? loc(e.venue) : t("ev.venueTBD")), "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" })); a.download = "AMAYAD-" + id + ".ics";
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* ---------------- PARTNERSHIPS ---------------- */
  function partnerCard(p) {
    var inner = '<span class="status status-' + p.status + '">' + esc(t("partners.status." + p.status)) + "</span>" +
      '<span class="bname">' + esc(p.name) + "</span>" +
      (p.fullName ? '<span class="bfull">' + esc(loc(p.fullName)) + "</span>" : "") +
      (p.note && loc(p.note) ? '<span class="bfull">' + esc(loc(p.note)) + "</span>" : "");
    if (p.url) return '<a class="badge" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + inner + "</a>";
    return '<div class="badge">' + inner + "</div>";
  }
  function renderPartners() {
    var P = window.AMAYAD_PARTNERS || [];
    var conf = P.filter(function (p) { return p.status === "partner"; });
    var pot = P.filter(function (p) { return p.status === "conversation"; });
    $("#partnersConfirmed").innerHTML = conf.length ? conf.map(partnerCard).join("") : '<p class="sub">' + esc(t("partners.noneYet")) + "</p>";
    $("#partnersPotential").innerHTML = pot.length ? pot.map(partnerCard).join("") : '<p class="sub">' + esc(t("partners.noneYet")) + "</p>";
    var slots = "";
    for (var i = 0; i < (window.AMAYAD_PARTNER_SLOTS || 0); i++) {
      slots += '<button type="button" class="badge badge-slot" data-open-form="partner"><span class="status status-conversation">' +
        esc(t("partners.soon")) + '</span><span class="bname">' + esc(t("partners.slot")) + '</span><span class="bfull">' + esc(t("partners.slotCta")) + "</span></button>";
    }
    $("#partnersSlots").innerHTML = slots;
    // ecosystem map
    var eco = t("part2.eco");
    $("#ecoMap").innerHTML = '<div class="eco-hub" aria-hidden="true"><span>AMAYAD</span><small>' + esc(t("part2.hub")) + "</small></div>" +
      eco.map(function (g) {
        return '<section class="eco-group eco-' + g.id + '"><h3><span class="eco-ic" aria-hidden="true">' + g.i + "</span>" + g.t + "</h3><p>" + g.d + '</p><ul class="eco-items">' +
          g.items.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul></section>";
      }).join("");
  }

  /* ---------------- LEGISLATIVE ---------------- */
  function renderIntl() {
    $("#intlList").innerHTML = t("leg.intl").map(function (c) {
      return '<article class="intl-card"><div class="intl-head"><span class="flag" aria-hidden="true">' + c.flag + "</span><div><h3>" + c.c + '</h3><p class="inst">' + c.inst + '</p></div></div><ul class="ticks">' +
        c.facts.map(function (f) { return "<li>" + f + "</li>"; }).join("") + "</ul></article>";
    }).join("");
  }

  /* ---------------- MEMBERS ---------------- */
  var memberFilter = "all";
  var SECTORS = ["solar", "agriculture", "digital", "research", "government", "investor", "other"];
  function renderMembers() {
    var M = window.AMAYAD_MEMBERS || [];
    var f = $("#memberFilters"), grid = $("#membersGrid");
    if (!M.length) {
      f.innerHTML = "";
      var ghosts = "";
      for (var i = 0; i < 4; i++) ghosts += '<div class="ghost">' + esc(t("members.ghost")) + "</div>";
      grid.className = "";
      grid.innerHTML = '<div class="empty"><h2>' + esc(t("members.emptyTitle")) + "</h2><p>" + esc(t("members.emptyText")) + "</p>" +
        '<button type="button" class="btn btn-sun btn-lg" data-open-register>' + esc(t("cta.request")) + "</button></div>" +
        '<div class="ghosts" aria-hidden="true">' + ghosts + "</div>" + '<p class="fine">' + esc(t("members.consentNote")) + "</p>";
      return;
    }
    f.innerHTML = ["all"].concat(SECTORS).map(function (s) {
      return '<button type="button" data-mfilter="' + s + '" aria-pressed="' + (s === memberFilter) + '">' + esc(s === "all" ? t("lib.cats.all") : t("form.sectors." + s)) + "</button>";
    }).join("");
    var list = M.filter(function (m) { return memberFilter === "all" || m.sector === memberFilter; });
    grid.className = "members";
    grid.innerHTML = list.map(function (m) {
      var tier = m.tier ? t("tiers." + m.tier).name : "";
      var body = '<span class="tag">' + esc(t("form.sectors." + m.sector)) + "</span>" + (m.founding ? ' <span class="tag">' + esc(t("members.founding")) + "</span>" : "") +
        "<h3>" + esc(m.name) + "</h3><p>" + esc([m.city, tier].filter(Boolean).join(" · ")) + "</p>";
      return m.url ? '<a class="card" href="' + esc(m.url) + '" target="_blank" rel="noopener" style="text-decoration:none">' + body + "</a>" : '<div class="card">' + body + "</div>";
    }).join("");
  }

  /* ---------------- LIBRARY ---------------- */
  var libFilter = "all";
  var LIBCATS = ["all", "guides", "research", "regulation", "tax", "cases", "amayad", "handbook", "carbon", "blockchain", "map", "magazine", "reports"];
  function renderLibrary() {
    $("#libFilters").innerHTML = LIBCATS.map(function (c) {
      return '<button type="button" data-lfilter="' + c + '" aria-pressed="' + (c === libFilter) + '">' + esc(t("lib.cats." + c)) + "</button>";
    }).join("");
    var L = (window.AMAYAD_LIBRARY || []).filter(function (r) { return libFilter === "all" || r.category === libFilter; });
    var html = L.map(function (r) {
      var forth = r.status === "forthcoming";
      return '<article class="res' + (forth ? " res-forth" : "") + (r.category === "map" ? " res-map" : "") + '"><div class="res-top"><span class="tag">' + esc(t("lib.cats." + r.category)) + '</span><span class="tag ' + (forth ? "st-forth" : "st-avail") + '">' + esc(t("lib.status." + r.status)) + "</span></div>" +
        (r.category === "map" ? '<div class="map-ph" aria-hidden="true"></div>' : "") +
        "<h3>" + esc(loc(r.title)) + "</h3>" +
        '<div class="src">' + esc(r.source || "") + (r.year ? " · " + r.year : "") + "</div>" +
        "<p>" + esc(loc(r.desc)) + "</p>" +
        (r.url && !forth ? '<a class="btn btn-ghost-dark btn-sm" href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(t("lib.open")) + " ↗</a>" : "") +
        (forth ? '<button type="button" class="link small" data-open-form="notify" data-form-preset="library">' + esc(t("cta.notify")) + "</button>" : "") +
        "</article>";
    });
    var cats = libFilter === "all" ? LIBCATS.slice(1) : [libFilter];
    cats.forEach(function (c) {
      var has = (window.AMAYAD_LIBRARY || []).some(function (r) { return r.category === c; });
      if (!has) html.push('<article class="res soon-card"><div class="res-top"><span class="tag">' + esc(t("lib.cats." + c)) + '</span><span class="tag st-forth">' + esc(t("lib.status.forthcoming")) + "</span></div><h3>" + esc(t("lib.soonTitle")) + "</h3><p>" + esc(t("lib.soonText")) + "</p></article>");
    });
    $("#libGrid").innerHTML = html.join("");
  }

  /* ---------------- socials ---------------- */
  var SOCIAL_ICONS = {
    linkedin: '<path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4V9.5Z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>',
    facebook: '<path fill="currentColor" d="M14 8h3V4h-3c-2.8 0-4.5 1.7-4.5 4.6V11H7v4h2.5v7h4v-7h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8Z"/>',
    youtube: '<path fill="currentColor" d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.4-1.2.4-3.8.4-3.8s0-2.6-.4-3.8ZM10 15V9l5.2 3L10 15Z"/>',
    x: '<path fill="currentColor" d="M17.8 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.4L5.3 21H2.2l7.3-8.3L1.8 3h6.4l4.4 5.9L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z"/>',
    whatsapp: '<path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z"/>',
    discord: '<path fill="currentColor" d="M20 5.3A17 17 0 0 0 15.8 4l-.5 1a15.7 15.7 0 0 0-6.6 0L8.2 4A17 17 0 0 0 4 5.3C1.4 9.2.7 13 1 16.7a17 17 0 0 0 5.2 2.6l1.1-1.8c-.6-.2-1.2-.5-1.7-.9l.4-.3a12 12 0 0 0 12 0l.4.3c-.5.4-1.1.7-1.7.9l1.1 1.8a17 17 0 0 0 5.2-2.6c.4-4.3-.7-8-3-11.4ZM8.7 14.5c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z"/>'
  };
  var SOCIAL_NAMES = { linkedin: "LinkedIn AMAYAD", instagram: "Instagram", facebook: "Facebook", youtube: "YouTube", x: "X", whatsapp: "WhatsApp", discord: "Discord" };
  function renderSocials() {
    var S = Object.assign({}, CFG.SOCIAL || {}, { discord: CFG.DISCORD_URL || "" });
    var html = Object.keys(SOCIAL_ICONS).map(function (k) {
      var url = S[k] || "", name = SOCIAL_NAMES[k];
      var svg = '<svg viewBox="0 0 24 24" aria-hidden="true">' + SOCIAL_ICONS[k] + "</svg>";
      if (url) return '<a class="soc" href="' + esc(url) + '" target="_blank" rel="noopener" aria-label="' + esc(name) + '" title="' + esc(name) + '">' + svg + "</a>";
      var lbl = name + " — " + t("ui.comingSoon");
      return '<button type="button" class="soc soc-off" data-soon="social" aria-label="' + esc(lbl) + '" title="' + esc(lbl) + '">' + svg + "</button>";
    }).join("");
    $$("[data-socials]").forEach(function (el) { el.innerHTML = html; });
  }

  /* ================= v2.1: REGIONS / COURSES / DACHIMILCO ================= */
  var REGIONS = window.AMAYAD_REGIONS || [];
  var MXMAP = window.AMAYAD_MX_MAP || { viewBox: "0 0 1000 620", states: {} };
  var COURSES = window.AMAYAD_COURSES || [];
  var CLOCS = window.AMAYAD_COURSE_LOCATIONS || [];
  var DACHI = window.AMAYAD_DACHIMILCO || {};
  function regionOf(code) { for (var i = 0; i < REGIONS.length; i++) if (REGIONS[i].states.indexOf(code) > -1) return REGIONS[i]; return null; }
  function regionById(id) { return REGIONS.filter(function (r) { return r.id === id; })[0]; }
  function stateName(code) { return (MXMAP.states[code] || {}).name || code; }
  function regionOpts() { var o = {}; REGIONS.forEach(function (r) { o[r.id] = loc(r.name); }); o.unsure = t("reg2.optUnsure"); o.abroad = t("reg2.optAbroad"); return o; }
  function locById(id) { return CLOCS.filter(function (l) { return l.id === id; })[0]; }
  function courseOpts() { var o = {}; COURSES.forEach(function (c) { o[c.id] = loc(c.title); }); o.any = t("courses.anyCourse"); return o; }
  function locOpts() { var o = {}; CLOCS.forEach(function (l) { o[l.id] = loc(l.name); }); o.any = t("courses.anyLocation"); return o; }

  function mapSVG(interactive, selected) {
    var paths = Object.keys(MXMAP.states).map(function (code) {
      var r = regionOf(code), st = MXMAP.states[code];
      var cls = selected && (!r || r.id !== selected) ? ' class="dim"' : "";
      return '<path d="' + st.d + '" fill="' + (r ? r.color : "#cfd8e3") + '" data-state="' + code + '"' + (r ? ' data-region="' + r.id + '"' : "") + cls + ">" +
        (interactive ? "<title>" + esc(st.name + (r ? " — " + loc(r.name) : "")) + "</title>" : "") + "</path>";
    }).join("");
    var mk = "";
    if (interactive && MXMAP.marker) {
      mk = '<g class="map-marker" transform="translate(' + MXMAP.marker[0] + " " + MXMAP.marker[1] + ')"><circle r="9"/><circle r="3.5" class="mk-in"/><title>' + esc(t("reg2.markerTitle")) + "</title></g>";
    }
    return '<svg viewBox="' + MXMAP.viewBox + '" role="img" aria-label="' + esc(t("reg2.mapAlt")) + '">' + paths + mk + "</svg>";
  }
  var currentRegion = null;
  function renderRegions() {
    $("#mxMap").innerHTML = mapSVG(true, currentRegion);
    $("#homeMiniMap").innerHTML = mapSVG(false, null);
    $("#regionLegend").innerHTML = REGIONS.map(function (r) {
      return '<button type="button" data-region="' + r.id + '" aria-pressed="' + (r.id === currentRegion) + '"><span class="sw" style="background:' + r.color + '"></span>' + esc(loc(r.name)) + "</button>";
    }).join("");
    var d = $("#regionDetail"), r = regionById(currentRegion);
    if (!r) {
      d.innerHTML = '<div class="rd-empty"><div class="rd-ic" aria-hidden="true">🗺️</div><h3>' + esc(t("reg2.pickTitle")) + "</h3><p>" + esc(t("reg2.pickText")) + "</p></div>";
    } else {
      d.innerHTML = regionBody(r, true);
    }
    renderRegionTable();
    $("#regionCards").innerHTML = REGIONS.map(function (x) { return '<article class="region-card" style="--rc:' + x.color + '">' + regionBody(x, false) + "</article>"; }).join("");
  }
  function regionBody(r, detail) {
    var states = r.states.map(stateName).sort(function (a, b) { return a.localeCompare(b); });
    var blocks = [["pv", "☀️"], ["agri", "🌾"], ["digital", "📡"], ["agripv", "🔆"]];
    return '<span class="rc-bar" style="background:' + r.color + '"></span><h3>' + esc(loc(r.name)) + '</h3><p class="rc-states"><b>' + esc(t("reg2.states")) + " (" + states.length + "):</b> " + esc(states.join(", ")) + "</p>" +
      '<dl class="rc-dl">' + blocks.map(function (b) { return "<dt>" + b[1] + " " + esc(t("reg2." + b[0])) + "</dt><dd>" + esc(loc(r[b[0]])) + "</dd>"; }).join("") + "</dl>" +
      '<p class="rc-coord"><b>' + esc(t("reg2.coordinator")) + ":</b> " + esc(r.coordinator ? (typeof r.coordinator === "string" ? r.coordinator : loc(r.coordinator)) : t("reg2.tbd")) + "</p>" +
      (detail ? '<button type="button" class="btn btn-sun btn-sm" data-open-register>' + esc(t("cta.request")) + '</button> <button type="button" class="link small" data-region="">' + esc(t("reg2.clear")) + "</button>"
              : '<button type="button" class="link small" data-region="' + r.id + '">' + esc(t("reg2.showOnMap")) + " →</button>");
  }
  function renderRegionTable() {
    var tb = $("#regionTable"); if (!tb) return;
    tb.innerHTML = "<thead><tr><th>" + esc(t("reg2.thRegion")) + "</th><th>" + esc(t("reg2.thDigital")) + "</th><th>" + esc(t("reg2.thAgripv")) + "</th></tr></thead><tbody>" +
      REGIONS.map(function (r, i) {
        return '<tr' + (r.id === currentRegion ? ' class="is-sel"' : "") + '><th scope="row"><button type="button" class="rt-name" data-region="' + r.id + '"><span class="sw" style="background:' + r.color + '"></span>' + (i + 1) + ". " + esc(loc(r.name)) + "</button></th><td>" + esc(loc(r.digitalFocus)) + "</td><td>" + esc(loc(r.agripvFocus)) + "</td></tr>";
      }).join("") + "</tbody>";
  }
  function selectRegion(id) {
    currentRegion = id || null; renderRegions();
    if (id && window.innerWidth < 960) scrollToEl($("#regionDetail"));
  }

  var courseLoc = "all", courseAud = "all";
  function statusTag(st) { var cls = st === "available" || st === "open" ? "st-avail" : "st-forth"; return '<span class="tag ' + cls + '">' + esc(t("courses.status." + st)) + "</span>"; }
  function renderCourses() {
    $("#courseSites").innerHTML = CLOCS.map(function (l) {
      var r = regionById(l.region);
      var n = COURSES.filter(function (c) { return c.locations.indexOf(l.id) > -1; }).length;
      return '<article class="site site-' + l.id + '">' + statusTag(l.status) + "<h3>" + esc(loc(l.name)) + '</h3><p class="src">📍 ' + esc(loc(l.place)) + "</p><p>" + esc(loc(l.desc)) + "</p>" +
        '<dl class="ev-dl">' + (l.hosts ? "<dt>" + esc(t("courses.hosts")) + "</dt><dd>" + esc(loc(l.hosts)) + "</dd>" : "") +
        (l.instructor ? "<dt>" + esc(t("courses.instructor")) + "</dt><dd>" + esc(l.instructor) + " · <i>" + esc(t("courses.status.coordination")) + "</i></dd>" : "") +
        (r ? "<dt>" + esc(t("reg2.region")) + "</dt><dd>" + esc(loc(r.name)) + "</dd>" : "") + "</dl>" +
        '<div class="site-actions"><button type="button" class="btn btn-sm btn-blue" data-cfilter="' + l.id + '">' + esc(t("courses.coursesHere")) + " (" + n + ")</button>" +
        (l.id === "dachimilco" ? '<a class="btn btn-sm btn-ghost-dark" href="#dachimilco" data-tab-link="dachimilco">' + esc(t("dachi.homeCta")) + "</a>" : "") +
        (l.sourceUrl ? '<a class="link small" href="' + esc(l.sourceUrl) + '" target="_blank" rel="noopener">' + esc(t("courses.source")) + " ↗</a>" : "") + "</div></article>";
    }).join("");
    $("#courseLocFilters").innerHTML = '<span class="flabel">' + esc(t("courses.fLocation")) + "</span>" + ["all"].concat(CLOCS.map(function (l) { return l.id; })).map(function (id) {
      var lbl = id === "all" ? t("lib.cats.all") : (id === "pase" ? "PASE" : loc(locById(id).name));
      return '<button type="button" data-cfilter="' + id + '" aria-pressed="' + (id === courseLoc) + '">' + esc(lbl) + "</button>";
    }).join("");
    var auds = ["all", "farmers", "solar", "students", "officials"];
    $("#courseAudFilters").innerHTML = '<span class="flabel">' + esc(t("courses.fAudience")) + "</span>" + auds.map(function (a) {
      return '<button type="button" data-afilter="' + a + '" aria-pressed="' + (a === courseAud) + '">' + esc(a === "all" ? t("lib.cats.all") : t("courses.aud." + a)) + "</button>";
    }).join("");
    var list = COURSES.filter(function (c) { return (courseLoc === "all" || c.locations.indexOf(courseLoc) > -1) && (courseAud === "all" || c.audiences.indexOf(courseAud) > -1); });
    $("#courseGrid").innerHTML = list.length ? list.map(courseCard).join("") : '<div class="res soon-card"><p>' + esc(t("courses.none")) + "</p></div>";
  }
  function courseCard(c) {
    return '<article class="course"><div class="course-top">' + statusTag(c.status) + c.formats.map(function (f) { return '<span class="tag fmt fmt-' + f + '">' + esc(t("courses.fmt." + f)) + "</span>"; }).join("") + "</div>" +
      "<h3>" + esc(loc(c.title)) + "</h3><p>" + esc(loc(c.desc)) + "</p>" +
      '<dl class="course-meta"><dt>' + esc(t("courses.audience")) + "</dt><dd>" + c.audiences.map(function (a) { return esc(t("courses.aud." + a)); }).join(" · ") + "</dd>" +
      "<dt>" + esc(t("courses.where")) + "</dt><dd>" + c.locations.map(function (l) { var x = locById(l); return x ? esc(l === "pase" ? "PASE (Topilejo)" : loc(x.name)) : ""; }).join(" · ") + "</dd>" +
      (c.dates ? "<dt>📅</dt><dd>" + esc(typeof c.dates === "string" ? c.dates : loc(c.dates)) + "</dd>" : "") +
      (c.price != null && c.price !== "" ? "<dt>💲</dt><dd>" + esc(typeof c.price === "number" ? fmtPrice(c.price, c.currency || "MXN") + " " + (c.currency || "MXN") : String(c.price)) + "</dd>" : "") + "</dl>" +
      (c.registerUrl ? '<a class="btn btn-sun btn-sm" href="' + esc(c.registerUrl) + '" target="_blank" rel="noopener">' + esc(t("cta.register")) + "</a> " : "") +
      '<button type="button" class="btn ' + (c.registerUrl ? "btn-ghost" : "btn-sun") + ' btn-sm" data-open-form="course" data-form-preset="' + c.id + (courseLoc !== "all" ? "|" + courseLoc : "") + '">' + esc(t("courses.interested")) + "</button></article>";
  }

  function renderDachimilco() {
    $("#dachiFacts").innerHTML = t("dachi.facts").map(function (f) { return "<dt>" + f.k + "</dt><dd>" + f.v + "</dd>"; }).join("");
    $("#dachiRoadmap").innerHTML = t("dachi.roadmap").map(function (h) {
      return '<li class="tl ' + (h.planned ? "tl-planned" : "") + '"><span class="tl-y">' + h.y + "</span><div><h3>" + h.t + "</h3><p>" + h.d + "</p></div></li>";
    }).join("");
    var b = DACHI.budget;
    $("#dachiBudget").innerHTML = b && b.show ? '<div class="budget"><div><span class="tag st-forth">' + esc(t("dachi.budgetTag")) + " " + b.year + "</span><h3>" + esc(t("dachi.budgetTitle")) + '</h3><p class="fine">' + esc(t("dachi.budgetNote")) + '</p></div><div class="budget-nums"><div><span class="bn">' + esc(fmtPrice(b.base, b.currency)) + " <small>" + b.currency + "</small></span><span>" + esc(t("dachi.budgetBase")) + '</span></div><div><span class="bn">' + esc(fmtPrice(b.withAddons, b.currency)) + " <small>" + b.currency + "</small></span><span>" + esc(t("dachi.budgetAddons")) + "</span></div></div></div>" : "";
    var ws = $("#dachiWebsite");
    if (DACHI.websiteUrl) { ws.href = DACHI.websiteUrl; ws.target = "_blank"; ws.textContent = t("dachi.websiteCta") + " ↗"; ws.removeAttribute("data-soon"); }
    else { ws.href = "#"; ws.removeAttribute("target"); ws.textContent = t("dachi.websiteCta") + " · " + t("ui.comingSoon"); ws.setAttribute("data-soon", "dachi"); }
    var cl = $("#dachiCrowdLink"); cl.hidden = !DACHI.crowdfundingUrl; if (DACHI.crowdfundingUrl) cl.href = DACHI.crowdfundingUrl;
    var dc = COURSES.filter(function (c) { return c.locations.indexOf("dachimilco") > -1; });
    $("#dachiCourses").innerHTML = '<ul class="dc-list">' + dc.map(function (c) {
      return '<li><button type="button" data-open-form="course" data-form-preset="' + c.id + '|dachimilco"><b>' + esc(loc(c.title)) + "</b><span>" + c.formats.map(function (f) { return esc(t("courses.fmt." + f)); }).join(" · ") + " · " + esc(t("courses.status.planned")) + "</span></button></li>";
    }).join("") + "</ul>";
  }

  /* ---------------- forms (static: register + contact) ---------------- */
  function renderForms() {
    var tierSel = $("#r_tier"), cur = tierSel.value;
    tierSel.innerHTML = '<option value="">' + esc(t("form.choose")) + "</option>" + window.AMAYAD_TIERS.map(function (tr) {
      return '<option value="' + tr.id + '">' + esc(t("tiers." + tr.id).name + " — " + (tr.price ? fmtPrice(tr.price, tr.currency) + " " + tr.currency + "/" + t("mem.perYear") + (tr.founding ? " (" + t("mem.foundingBadge") + ": " + fmtPrice(tr.founding, tr.currency) + ")" : "") : t("mem.free"))) + "</option>";
    }).join("");
    tierSel.value = cur;
    var secSel = $("#r_sector"), curS = secSel.value;
    secSel.innerHTML = '<option value="">' + esc(t("form.choose")) + "</option>" + SECTORS.map(function (s) { return '<option value="' + s + '">' + esc(t("form.sectors." + s)) + "</option>"; }).join("");
    secSel.value = curS;
    var checked = $$("#r_interests input:checked").map(function (i) { return i.value; });
    var ints = t("form.interestOptions");
    $("#r_interests").innerHTML = Object.keys(ints).map(function (k) {
      return '<label><input type="checkbox" name="interests" value="' + k + '"' + (checked.indexOf(k) > -1 ? " checked" : "") + "> " + esc(ints[k]) + "</label>";
    }).join("");
    var subj = $("#c_subject"), curC = subj.value || "general";
    var subs = t("contact.subjects");
    subj.innerHTML = Object.keys(subs).map(function (k) { return '<option value="' + k + '">' + esc(subs[k]) + "</option>"; }).join("");
    subj.value = subs[curC] ? curC : "general";
    var ro = regionOpts();
    $$("[data-region-select]").forEach(function (sel) {
      var cur = sel.value;
      sel.innerHTML = '<option value="">' + esc(t("form.choose")) + "</option>" + Object.keys(ro).map(function (k) { return '<option value="' + k + '">' + esc(ro[k]) + "</option>"; }).join("");
      sel.value = cur;
    });
    $$(".contact-email").forEach(function (a) { a.textContent = CFG.CONTACT_EMAIL; a.href = "mailto:" + CFG.CONTACT_EMAIL; });
    $("#privacyBody").innerHTML = (t("privacy.body") + t("privacy.extra")).replace(/\{email\}/g, esc(CFG.CONTACT_EMAIL));
  }

  /* ---------------- generic forms ---------------- */
  /* field: [name, type, required, optionsKeyOrFn, extra] */
  function sectorOpts() { var o = {}; SECTORS.forEach(function (s) { o[s] = t("form.sectors." + s); }); return o; }
  function committeeOpts() { var o = {}; committeesAll().forEach(function (c, i) { o[String(i)] = c.t.replace(/<[^>]+>/g, ""); }); return o; }
  function eventOpts() { var o = {}; allEvents().forEach(function (e) { o[e.id] = loc(e.title); }); return o; }
  var FORMS = {
    sponsor:      [["sponsorType","select",true,"f.opts.sponsorType"],["organization","text",true],["name","text",true],["role","text",false],["email","email",true],["phone","tel",false],["country","text",false],["region","select",false,regionOpts],["message","textarea",true]],
    ambassador:   [["mode","radio",true,"f.opts.ambMode"],["name","text",true],["email","email",true],["phone","tel",false],["location","text",true],["organization","text",false],["region","select",false,regionOpts],["sector","select",true,sectorOpts],["roles","checks",true,"f.opts.ambRoles"],["nomineeName","text",false,null,{showIf:["mode","nominate"]}],["nomineeEmail","email",false,null,{showIf:["mode","nominate"]}],["message","textarea",true]],
    youngfarmers: [["name","text",true],["email","email",true],["phone","tel",false],["age","number",true,null,{min:18,max:35}],["location","text",true],["region","select",false,regionOpts],["background","select",true,"f.opts.yfnBackground"],["yfnRole","select",true,"f.opts.yfnRole"],["yfnInterests","checks",false,"f.opts.yfnInterests"],["message","textarea",false]],
    partner:      [["organization","text",true],["orgType","select",true,"f.opts.orgType"],["name","text",true],["role","text",false],["email","email",true],["phone","tel",false],["country","text",false],["region","select",false,regionOpts],["message","textarea",true]],
    policy:       [["name","text",true],["email","email",true],["organization","text",false],["location","text",false],["region","select",false,regionOpts],["profile","select",true,"f.opts.profile"],["message","textarea",false]],
    committee:    [["committee","select",true,committeeOpts],["name","text",true],["email","email",true],["organization","text",false],["region","select",false,regionOpts],["sector","select",false,sectorOpts],["message","textarea",false]],
    access:       [["name","text",true],["email","email",true],["organization","text",false],["memberStatus","select",true,"f.opts.memberStatus"],["message","textarea",false]],
    notify:       [["topic","select",true,"f.opts.topic"],["name","text",true],["email","email",true],["organization","text",false],["message","textarea",false]],
    course:       [["course","select",true,courseOpts],["site","select",true,locOpts],["format","select",false,"f.opts.format"],["audience","select",true,"f.opts.audience"],["name","text",true],["email","email",true],["phone","tel",false],["organization","text",false],["region","select",false,regionOpts],["message","textarea",false]],
    dachimilco:   [["dachiInterest","checks",true,"f.opts.dachiInterest"],["name","text",true],["email","email",true],["phone","tel",false],["organization","text",false],["region","select",false,regionOpts],["message","textarea",false]],
    event:        [["eventId","select",true,eventOpts],["attendance","select",true,"f.opts.attendance"],["name","text",true],["email","email",true],["organization","text",false],["message","textarea",false]]
  };
  var currentForm = null;
  function optsOf(spec) { var o = spec[3]; if (!o) return {}; return typeof o === "function" ? o() : t(o); }
  function labelOf(name) { return t("f.labels." + name); }
  function buildGenForm(kind, preset) {
    currentForm = kind;
    var f = $("#genForm"); f.setAttribute("data-form", kind);
    $("#genTitle").textContent = t("f.titles." + kind);
    $("#genIntro").innerHTML = '<p class="sub">' + t("f.intros." + kind) + "</p>";
    $("#genSubmit").textContent = t("f.submits." + kind);
    var html = FORMS[kind].map(function (s) {
      var name = s[0], type = s[1], req = s[2], extra = s[4] || {}, id = "g_" + name;
      var lbl = esc(labelOf(name)) + (req ? " *" : "");
      var show = extra.showIf ? ' data-show-if="' + extra.showIf[0] + ":" + extra.showIf[1] + '" hidden' : "";
      if (type === "select") {
        var o = optsOf(s);
        return '<div class="field"' + show + '><label for="' + id + '">' + lbl + '</label><select id="' + id + '" name="' + name + '"' + (req ? " required" : "") + '><option value="">' + esc(t("form.choose")) + "</option>" +
          Object.keys(o).map(function (k) { return '<option value="' + esc(k) + '">' + esc(o[k]) + "</option>"; }).join("") + "</select></div>";
      }
      if (type === "radio") {
        var r = optsOf(s);
        return '<fieldset class="field"' + show + '><legend>' + lbl + '</legend><div class="radios">' + Object.keys(r).map(function (k, i) {
          return '<label><input type="radio" name="' + name + '" value="' + esc(k) + '"' + (i === 0 ? " checked" : "") + "> " + esc(r[k]) + "</label>";
        }).join("") + "</div></fieldset>";
      }
      if (type === "checks") {
        var c = optsOf(s);
        return '<fieldset class="field"' + show + (req ? ' data-required-group="' + name + '"' : "") + '><legend>' + lbl + '</legend><div class="checks">' + Object.keys(c).map(function (k) {
          return '<label><input type="checkbox" name="' + name + '" value="' + esc(k) + '"> ' + esc(c[k]) + "</label>";
        }).join("") + "</div></fieldset>";
      }
      if (type === "textarea") return '<div class="field"' + show + '><label for="' + id + '">' + lbl + '</label><textarea id="' + id + '" name="' + name + '" rows="3"' + (req ? " required" : "") + "></textarea></div>";
      var attrs = type === "number" ? ' inputmode="numeric" min="' + extra.min + '" max="' + extra.max + '"' : "";
      var ac = { name: "name", email: "email", phone: "tel", organization: "organization", country: "country-name", role: "organization-title" }[name];
      return '<div class="field"' + show + '><label for="' + id + '">' + lbl + '</label><input id="' + id + '" name="' + name + '" type="' + type + '"' + attrs + (ac ? ' autocomplete="' + ac + '"' : "") + (req ? " required" : "") + "></div>";
    }).join("");
    $("#genFields").innerHTML = html;
    resetFormUI(f); $("#g_consent").checked = false;
    // presets
    if (preset != null) {
      if (kind === "ambassador") { var rb = $('input[name="mode"][value="' + preset + '"]', f); if (rb) rb.checked = true; }
      if (kind === "committee") $("#g_committee").value = String(preset);
      if (kind === "notify") $("#g_topic").value = preset;
      if (kind === "event") $("#g_eventId").value = preset;
      if (kind === "course") { var pp = String(preset).split("|"); if (pp[0]) $("#g_course").value = pp[0]; if (pp[1]) $("#g_site").value = pp[1]; }
      if (kind === "partner") { var ot = $("#g_orgType"); if (ot) ot.value = String(preset); }
      if (kind === "dachimilco") { var cb = $('input[name="dachiInterest"][value="' + preset + '"]', f); if (cb) cb.checked = true; }
    }
    if (kind === "event") { var at = $("#g_attendance"); if (at) at.value = "attend"; }
    updateShowIf(f);
  }
  function updateShowIf(f) {
    $$("[data-show-if]", f).forEach(function (el) {
      var p = el.getAttribute("data-show-if").split(":");
      var ch = $('input[name="' + p[0] + '"]:checked', f);
      el.hidden = !(ch && ch.value === p[1]);
    });
  }
  var EXTERNAL_FORM = { ambassador: "ambassadorsForm", youngfarmers: "youngFarmersForm" };
  function openForm(kind, preset) {
    if (!FORMS[kind]) return;
    if (EXTERNAL_FORM[kind] && LINKS[EXTERNAL_FORM[kind]]) { window.open(LINKS[EXTERNAL_FORM[kind]], "_blank", "noopener"); return; }
    buildGenForm(kind, preset);
    openDialog($("#formDialog"));
    setTimeout(function () { var first = $("#genFields input:not([type=radio]):not([type=checkbox]), #genFields select", $("#genForm")); if (first) first.focus(); }, 40);
  }
  function openLogin() {
    if (CFG.MEMBER_PORTAL_URL) { window.open(CFG.MEMBER_PORTAL_URL, "_blank", "noopener"); return; }
    openForm("access");
  }

  /* ---------------- dialogs / routing ---------------- */
  function openDialog(d) { if (d.open) return; if (d.showModal) d.showModal(); else d.setAttribute("open", ""); }
  function closeDialog(d) { if (!d) return; if (d.close) d.close(); else d.removeAttribute("open"); }
  function openRegister(tier) {
    var f = $("#registerForm"); resetFormUI(f);
    if (tier) $("#r_tier").value = tier;
    openDialog($("#registerDialog"));
    setTimeout(function () { (tier ? $("#r_name") : $("#r_tier")).focus(); }, 30);
  }
  function openPrivacy() { openDialog($("#privacyDialog")); }
  function goContact(subject) {
    $$("dialog[open]").forEach(closeDialog);
    history.pushState(null, "", "#contact"); showPanel("contact");
    var s = $("#c_subject"); s.value = subject || "general"; if (!s.value) s.value = "general";
    resetFormUI($("#contactForm"));
    setTimeout(function () { $("#c_name").focus(); }, 50);
  }

  var PANELS = ["home", "about", "membership", "programs", "courses", "dachimilco", "regions", "events", "partnerships", "legislative", "library", "members", "contact"];
  var ALIASES = { agrivoltaics: ["about", "about-agri"], partners: ["partnerships"], ecosystem: ["partnerships", "ecosystem"], policy: ["legislative"], cursos: ["courses"], talleres: ["courses"], regiones: ["regions"], piloto: ["dachimilco"], pilot: ["dachimilco"], academic: ["partnerships", "academic"], alianzas: ["partnerships", "academic"], community: ["membership", "mem-community"], comunidad: ["membership", "mem-community"] };
  function showPanel(id, scroll) {
    if (PANELS.indexOf(id) < 0) id = "home";
    $$("[data-panel]").forEach(function (p) { p.hidden = p.getAttribute("data-panel") !== id; });
    $$("#mainTabs [data-tab-link]").forEach(function (a) {
      var s = a.getAttribute("data-tab-link") === id;
      if (s) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
      if (s && a.scrollIntoView && window.innerWidth < 960) a.scrollIntoView({ block: "nearest", inline: "center" });
    });
    if (scroll !== false) window.scrollTo(0, 0);
  }
  function scrollToEl(el) {
    if (!el) return;
    setTimeout(function () { el.scrollIntoView({ block: "start" }); }, 30);
  }
  function route() {
    var h = decodeURIComponent((location.hash || "#home").slice(1));
    if (h === "privacy") { openPrivacy(); return; }
    $$("dialog[open]").forEach(closeDialog);
    var parts = h.split("/"), pid = parts[0], sub = parts[1];
    if (ALIASES[pid]) { var a = ALIASES[pid]; showPanel(a[0]); if (a[1]) scrollToEl(document.getElementById(a[1])); return; }
    showPanel(pid);
    if (sub) { if ($('[data-sub="' + sub + '"]')) selectSub(sub); else scrollToEl(document.getElementById(sub)); }
  }

  /* ---------------- validation / submission ---------------- */
  function resetFormUI(f) {
    var s = $(".form-success", f), e = $(".form-error", f);
    s.hidden = true; s.innerHTML = ""; e.hidden = true;
    $$("[aria-invalid]", f).forEach(function (x) { x.removeAttribute("aria-invalid"); });
    $$("input,select,textarea,button[type=submit]", f).forEach(function (x) { x.disabled = false; });
  }
  function isVisible(el) { return !el.closest("[hidden]"); }
  function validate(f) {
    var first = null, msg = null;
    $$("[required]", f).forEach(function (el) {
      if (!isVisible(el)) return;
      var bad = el.type === "checkbox" ? !el.checked : !String(el.value).trim();
      if (!bad && el.type === "email") bad = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value.trim());
      if (!bad && el.type === "number") { var n = +el.value; bad = isNaN(n) || n < +el.min || n > +el.max; if (bad && !msg && !first) msg = t("f.errAge"); }
      if (bad) { el.setAttribute("aria-invalid", "true"); if (!first) { first = el; if (el.type === "checkbox") msg = t("form.errConsent"); else if (el.type === "email" && el.value.trim()) msg = t("form.errEmail"); } }
      else el.removeAttribute("aria-invalid");
    });
    $$("[data-required-group]", f).forEach(function (g) {
      if (!isVisible(g)) return;
      if (!$("input:checked", g)) { g.setAttribute("aria-invalid", "true"); if (!first) { first = $("input", g); msg = t("f.errGroup"); } }
      else g.removeAttribute("aria-invalid");
    });
    if (first) { first.focus(); return [msg || t("form.errRequired")]; }
    return [];
  }
  function collect(f) {
    var data = { form: f.getAttribute("data-form"), language: lang, submittedAt: new Date().toISOString() };
    $$("input,select,textarea", f).forEach(function (el) {
      if (!el.name || el.name === "_gotcha" || !isVisible(el)) return;
      if (el.type === "radio") { if (el.checked) data[el.name] = el.value; return; }
      if (el.type === "checkbox" && el.name !== "consent") { (data[el.name] = data[el.name] || []); if (el.checked) data[el.name].push(el.value); return; }
      if (el.type === "checkbox") { data[el.name] = el.checked; return; }
      data[el.name] = el.value.trim();
    });
    return data;
  }
  function humanSummary(d) {
    var L = [];
    if (d.form === "membership") {
      var tr = window.AMAYAD_TIERS.filter(function (x) { return x.id === d.tier; })[0];
      L.push(t("form.tier") + ": " + (tr ? t("tiers." + tr.id).name + " (" + (tr.price ? tr.price + " " + tr.currency + (tr.founding ? "; " + t("mem.foundingBadge") + " " + tr.founding + " " + tr.currency : "") : t("mem.free")) + ")" : d.tier));
      [["name","form.name"],["organization","form.org"],["role","form.role"],["email","form.email"],["phone","form.phone"],["country","form.country"]].forEach(function (p) { if (d[p[0]]) L.push(t(p[1]) + ": " + d[p[0]]); });
      if (d.sector) L.push(t("form.sector") + ": " + t("form.sectors." + d.sector));
      if (d.region) L.push(t("f.labels.region") + ": " + (regionOpts()[d.region] || d.region));
      if (d.interests && d.interests.length) L.push(t("form.interests") + ": " + d.interests.map(function (k) { return t("form.interestOptions")[k]; }).join(", "));
      if (d.message) L.push("", d.message);
    } else if (d.form === "contact") {
      L.push(t("form.subject") + ": " + (t("contact.subjects")[d.subject] || d.subject));
      [["name","form.name"],["organization","form.org"],["email","form.email"],["phone","form.phone"]].forEach(function (p) { if (d[p[0]]) L.push(t(p[1]) + ": " + d[p[0]]); });
      if (d.region) L.push(t("f.labels.region") + ": " + (regionOpts()[d.region] || d.region));
      if (d.message) L.push("", d.message);
    } else if (d.form === "newsletter") {
      L.push(t("form.email") + ": " + d.email);
    } else if (FORMS[d.form]) {
      FORMS[d.form].forEach(function (s) {
        var v = d[s[0]]; if (v == null || v === "" || (Array.isArray(v) && !v.length)) return;
        var o = s[3] ? optsOf(s) : null;
        var txt = Array.isArray(v) ? v.map(function (k) { return o ? o[k] : k; }).join(", ") : (o && o[v] ? o[v] : v);
        if (s[0] === "message") L.push("", txt); else L.push(labelOf(s[0]) + ": " + txt);
      });
    }
    L.push("", "— " + t("form.consentShort") + " · " + d.language.toUpperCase());
    return L.join("\n");
  }
  function mailSubject(d) {
    if (d.form === "membership") return "AMAYAD — " + t("reg.mailSubject") + ": " + (t("tiers." + d.tier).name || d.tier) + " — " + d.name;
    if (d.form === "contact") return "AMAYAD — " + (t("contact.subjects")[d.subject] || "") + " — " + d.name;
    if (d.form === "newsletter") return "AMAYAD — " + t("home2.newsletterTitle");
    return "AMAYAD — " + t("f.titles." + d.form) + (d.name ? " — " + d.name : "");
  }
  function mailtoFor(d) { return "mailto:" + CFG.CONTACT_EMAIL + "?subject=" + encodeURIComponent(mailSubject(d)) + "&body=" + encodeURIComponent(humanSummary(d)); }
  function postJSON(url, d) {
    return fetch(url, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(d) }).then(function (r) { return r.ok; }).catch(function () { return false; });
  }
  function onSubmit(ev) {
    ev.preventDefault();
    var f = ev.target, errBox = $(".form-error", f), ok = $(".form-success", f);
    if ($('[name="_gotcha"]', f).value) return;
    var errs = validate(f);
    if (errs.length) { errBox.textContent = errs[0]; errBox.hidden = false; return; }
    errBox.hidden = true;
    var d = collect(f);
    var isNl = f.hasAttribute("data-nl"); if (isNl) d.form = "newsletter";
    var btn = $("button[type=submit]", f); btn.disabled = true;
    function done(sent) {
      var href = mailtoFor(d);
      var okText = isNl ? (sent ? t("home2.nlOk") : t("home2.nlMailto")) : (sent ? t("form.okSent") : t("form.okMailto"));
      ok.innerHTML = "<h3>" + esc(t("form.okTitle")) + "</h3><p>" + esc(okText) + "</p>" +
        (sent ? "" : '<a class="btn btn-leaf btn-sm" href="' + esc(href) + '">' + esc(t("form.mailtoBtn")) + "</a>") +
        (isNl ? "" : '<p class="fine">' + esc(t("form.okNote")) + "</p>");
      ok.hidden = false;
      $$("input,select,textarea", f).forEach(function (x) { x.disabled = true; });
      ok.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    var url = isNl ? (CFG.NEWSLETTER_ENDPOINT || CFG.FORM_ENDPOINT) : CFG.FORM_ENDPOINT;
    if (url) postJSON(url, d).then(done); else done(false);
  }

  /* ---------------- search ---------------- */
  var searchIndex = null, searchSel = -1, searchHits = [];
  function panelLabel(id) { return t("nav." + id); }
  function buildIndex() {
    searchIndex = [];
    $$("[data-panel]").forEach(function (p) {
      var pid = p.getAttribute("data-panel");
      $$("h1,h2,h3,h4,p,li,th,summary,dt,dd,.bname,.stat-n,.ql-t,.kb strong", p).forEach(function (el) {
        if (el.closest(".tabs-scroll,.jump,.hp,.sr-only,form")) return;
        var txt = el.textContent.replace(/\s+/g, " ").trim();
        if (txt.length < 3) return;
        var isH = /^H[1-4]$/.test(el.tagName) || el.tagName === "SUMMARY";
        searchIndex.push({ panel: pid, el: el, text: txt, n: norm(txt), h: isH });
      });
    });
  }
  function contextFor(el) {
    var box = el.closest("article,section.eco-group,.subpanel,.topic,details,[id]");
    var h = box && box.querySelector("h1,h2,h3,summary");
    return h && h !== el ? h.textContent.replace(/\s+/g, " ").trim() : "";
  }
  function highlight(txt, terms) {
    var out = esc(txt.length > 180 ? txt.slice(0, 177) + "…" : txt);
    terms.forEach(function (tm) {
      if (!tm) return;
      var re = new RegExp("(" + tm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
      out = out.replace(re, "<mark>$1</mark>");
    });
    return out;
  }
  function doSearch(q) {
    if (!searchIndex) buildIndex();
    var terms = norm(q).split(/\s+/).filter(function (x) { return x.length > 1; });
    var res = $("#searchResults"), hint = $("#searchHint");
    searchSel = -1;
    if (!terms.length) { res.innerHTML = ""; hint.textContent = t("ui.searchHint"); searchHits = []; return; }
    var hits = searchIndex.filter(function (it) { return terms.every(function (tm) { return it.n.indexOf(tm) > -1; }); });
    hits.sort(function (a, b) { return (b.h - a.h) || (a.text.length - b.text.length); });
    var seen = {}; hits = hits.filter(function (h) { var k = h.panel + "|" + h.text; if (seen[k]) return false; seen[k] = 1; return true; }).slice(0, 14);
    searchHits = hits;
    hint.textContent = hits.length ? t("ui.searchCount").replace("{n}", hits.length) : t("ui.searchNone");
    var rawTerms = q.trim().split(/\s+/).filter(function (x) { return x.length > 1; });
    res.innerHTML = hits.map(function (h, i) {
      var ctx = contextFor(h.el);
      return '<li role="option" id="sr-' + i + '"><button type="button" data-sr="' + i + '"><span class="sr-panel">' + esc(panelLabel(h.panel)) + (ctx ? " › " + esc(ctx.slice(0, 60)) : "") + '</span><span class="sr-text">' + highlight(h.text, rawTerms) + "</span></button></li>";
    }).join("");
  }
  function revealAndGo(it) {
    closeDialog($("#searchDialog"));
    history.pushState(null, "", "#" + it.panel); showPanel(it.panel, false);
    var sp = it.el.closest("[data-subpanel]"); if (sp && sp.hidden) selectSub(sp.getAttribute("data-subpanel"));
    var tp = it.el.closest("#agriPanels [role=tabpanel]"); if (tp && tp.hidden) selectTopic(tp.id.replace("sp-", ""));
    var ep = it.el.closest("[data-evpanel]"); if (ep && ep.hidden) selectEvTab(ep.getAttribute("data-evpanel"));
    var dt = it.el.closest("details"); if (dt) dt.open = true;
    setTimeout(function () {
      it.el.scrollIntoView({ block: "center" });
      it.el.classList.add("flash"); setTimeout(function () { it.el.classList.remove("flash"); }, 1800);
    }, 60);
  }
  function openSearch() {
    var d = $("#searchDialog"); buildIndex(); openDialog(d);
    var i = $("#searchInput"); setTimeout(function () { i.focus(); i.select(); }, 20); doSearch(i.value);
  }
  function selectEvTab(key) {
    var id = key.split(":")[0];
    $$('[data-evtab^="' + id + ':"]').forEach(function (b) { b.setAttribute("aria-selected", String(b.getAttribute("data-evtab") === key)); });
    $$('[data-evpanel^="' + id + ':"]').forEach(function (p) { p.hidden = p.getAttribute("data-evpanel") !== key; });
  }

  /* ---------------- render all ---------------- */
  function renderAll() {
    applyStatic(); renderHome(); renderAbout(); renderAgri(); renderTiers(); renderCommittees(); renderEvents();
    renderPartners(); renderIntl(); renderMembers(); renderLibrary(); renderSocials(); renderRegions(); renderCourses(); renderDachimilco(); renderForms();
    if (currentForm && $("#formDialog").open) { /* keep open form as is */ }
    searchIndex = null;
  }
  function setLang(l, persist) {
    if (CFG.SUPPORTED_LANGS.indexOf(l) < 0) l = CFG.DEFAULT_LANG;
    lang = l;
    if (persist) { try { localStorage.setItem(LS_KEY, l); } catch (e) {} }
    var sel = $('[data-subtabs] [aria-selected="true"]'); var keepSub = sel ? sel.getAttribute("data-sub") : "prog-amb";
    renderAll(); selectSub(keepSub);
  }

  /* ---------------- events ---------------- */
  document.addEventListener("click", function (e) {
    var el = e.target && e.target.closest ? e.target : null; if (!el) return;
    var lb = el.closest(".lang button"); if (lb) { setLang(lb.getAttribute("data-lang"), true); return; }
    var reg = el.closest("[data-open-register]"); if (reg) { e.preventDefault(); $$("dialog[open]").forEach(closeDialog); openRegister(reg.getAttribute("data-open-register")); return; }
    var of = el.closest("[data-open-form]"); if (of) { e.preventDefault(); $$("dialog[open]").forEach(closeDialog); openForm(of.getAttribute("data-open-form"), of.getAttribute("data-form-preset")); return; }
    var lg = el.closest("[data-open-login]"); if (lg) { e.preventDefault(); openLogin(); return; }
    var os = el.closest("[data-open-search]"); if (os) { e.preventDefault(); openSearch(); return; }
    var sr = el.closest("[data-sr]"); if (sr) { revealAndGo(searchHits[+sr.getAttribute("data-sr")]); return; }
    var cs = el.closest("[data-contact-subject]"); if (cs) { e.preventDefault(); goContact(cs.getAttribute("data-contact-subject")); return; }
    var pv = el.closest("[data-open-privacy]"); if (pv) { e.preventDefault(); openPrivacy(); return; }
    var cl = el.closest("[data-close]"); if (cl) { closeDialog(cl.closest("dialog")); return; }
    var soon = el.closest("[data-soon]"); if (soon) { e.preventDefault(); var sk = soon.getAttribute("data-soon"); toast(sk === "discord" ? t("home2.discordSoon") : sk === "dachi" ? t("dachi.websiteSoon") : t("ui.socialSoon")); return; }
    var ics = el.closest("[data-ics]"); if (ics) { downloadICS(ics.getAttribute("data-ics")); return; }
    var evt = el.closest("[data-evtab]"); if (evt) { selectEvTab(evt.getAttribute("data-evtab")); return; }
    var jp = el.closest("[data-jump]"); if (jp) { e.preventDefault(); scrollToEl(document.getElementById(jp.getAttribute("href").slice(1))); return; }
    var tl = el.closest("[data-tab-link]"); if (tl) {
      e.preventDefault(); var id = tl.getAttribute("data-tab-link"); history.pushState(null, "", "#" + id); showPanel(id);
      var st = tl.getAttribute("data-sub-target"); if (st) selectSub(st); return;
    }
    var sb = el.closest("[data-sub]"); if (sb) { selectSub(sb.getAttribute("data-sub")); return; }
    var tp = el.closest("#agriTabs [data-topic]"); if (tp) { selectTopic(tp.getAttribute("data-topic")); return; }
    var mf = el.closest("[data-mfilter]"); if (mf) { memberFilter = mf.getAttribute("data-mfilter"); renderMembers(); return; }
    var rg = el.closest("[data-region]"); if (rg && !el.closest("#homeMiniMap")) { selectRegion(rg.getAttribute("data-region")); return; }
    var cf = el.closest("[data-cfilter]"); if (cf) { courseLoc = cf.getAttribute("data-cfilter"); renderCourses(); if (cf.closest("#courseSites")) scrollToEl($("#courses-catalog")); return; }
    var af = el.closest("[data-afilter]"); if (af) { courseAud = af.getAttribute("data-afilter"); renderCourses(); return; }
    var lf = el.closest("[data-lfilter]"); if (lf) { libFilter = lf.getAttribute("data-lfilter"); renderLibrary(); return; }
  });
  document.addEventListener("change", function (e) { var f = e.target.closest && e.target.closest("#genForm"); if (f && e.target.type === "radio") updateShowIf(f); });
  document.addEventListener("keydown", function (e) {
    var typing = /INPUT|TEXTAREA|SELECT/.test((e.target && e.target.tagName) || "");
    if (!typing && (e.key === "/" || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"))) { e.preventDefault(); openSearch(); return; }
    if (e.target && e.target.id === "searchInput") {
      var btns = $$("#searchResults [data-sr]");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault(); if (!btns.length) return;
        searchSel = (searchSel + (e.key === "ArrowDown" ? 1 : -1) + btns.length) % btns.length;
        btns.forEach(function (b, i) { b.classList.toggle("active", i === searchSel); });
        btns[searchSel].scrollIntoView({ block: "nearest" });
      }
      if (e.key === "Enter" && searchHits.length) { e.preventDefault(); revealAndGo(searchHits[Math.max(0, searchSel)]); }
      return;
    }
    var b = e.target.closest && e.target.closest("#agriTabs [role=tab]"); if (!b) return;
    var all = $$("#agriTabs [role=tab]"), i = all.indexOf(b);
    if (e.key === "ArrowRight") { e.preventDefault(); selectTopic(all[(i + 1) % all.length].getAttribute("data-topic"), true); }
    if (e.key === "ArrowLeft") { e.preventDefault(); selectTopic(all[(i - 1 + all.length) % all.length].getAttribute("data-topic"), true); }
  });
  $("#mxMap").addEventListener("mousemove", function (e) {
    var p = e.target.closest && e.target.closest("[data-state]"), tip = $("#mapTip");
    if (!p) { tip.hidden = true; return; }
    var r = regionOf(p.getAttribute("data-state")), box = $(".map-card").getBoundingClientRect();
    tip.innerHTML = "<b>" + esc(stateName(p.getAttribute("data-state"))) + "</b>" + (r ? '<span><i style="background:' + r.color + '"></i>' + esc(loc(r.name)) + "</span>" : "");
    tip.style.left = (e.clientX - box.left + 14) + "px"; tip.style.top = (e.clientY - box.top + 14) + "px"; tip.hidden = false;
  });
  $("#mxMap").addEventListener("mouseleave", function () { $("#mapTip").hidden = true; });
  $("#searchInput").addEventListener("input", function (e) { doSearch(e.target.value); });
  $$("dialog").forEach(function (d) { d.addEventListener("click", function (e) { if (e.target === d) closeDialog(d); }); });
  $("#registerForm").addEventListener("submit", onSubmit);
  $("#contactForm").addEventListener("submit", onSubmit);
  $("#genForm").addEventListener("submit", onSubmit);
  $$("[data-nl]").forEach(function (f) { f.addEventListener("submit", onSubmit); });
  window.addEventListener("popstate", route);
  window.addEventListener("hashchange", route);
  $("#year").textContent = new Date().getFullYear();

  /* ---------------- boot ---------------- */
  var quick = new URLSearchParams(location.search).get("lang");
  try { quick = quick || localStorage.getItem(LS_KEY); } catch (e) {}
  setLang(quick && CFG.SUPPORTED_LANGS.indexOf(quick) > -1 ? quick : (langFromNavigator() || CFG.DEFAULT_LANG), false);
  selectSub("prog-amb");
  route();
  initialLang().then(function (r) {
    document.documentElement.setAttribute("data-lang-source", r.src);
    if (r.lang !== lang) setLang(r.lang, false);
  });
  window.AMAYAD_APP = { setLang: setLang, openForm: openForm, openSearch: openSearch, doSearch: doSearch, keys: function () { return lang; } };
})();
