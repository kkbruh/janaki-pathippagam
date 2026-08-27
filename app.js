/* ============================================================================
   Janaki Pathipagam — app logic (bilingual: Tamil + English).
   Reads content from config.js. The interface words live in STRINGS below.
   You should not need to edit this file to change content — use config.js.
   ============================================================================ */

(function () {
  "use strict";

  // Always open at the top on load/refresh — ignore a stale #hash or restored scroll.
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  window.scrollTo(0, 0);
  window.addEventListener("load", () => window.scrollTo(0, 0));

  const CART_KEY = "janaki-cart";
  const LANG_KEY = "janaki-lang";

  /* Interface words in both languages. (Book/author content is in config.js.) */
  const STRINGS = {
    navBooks:    { en: "Books", ta: "நூல்கள்" },
    navAbout:    { en: "About the Author", ta: "நூலாசிரியர்" },
    aboutHeading:{ en: "About the Author", ta: "நூலாசிரியர் பற்றி" },
    heroAbout:   { en: "About the Author  ↓", ta: "நூலாசிரியர் பற்றி  ↓" },
    blessTitle:  { en: "Blessings & Endorsements", ta: "ஆசீர்வாதங்களும் மங்களாசாசனங்களும்" },
    blessIntro:  { en: "Every title has been blessed and formally released by revered Mutts, Acharyas and Jeeyar Swamigal. Tap any letter to read it in full.", ta: "ஒவ்வொரு நூலும் மரியாதைக்குரிய மடங்கள், ஆச்சார்யர்கள் மற்றும் ஜீயர் ஸ்வாமிகளால் ஆசீர்வதிக்கப்பட்டு வெளியிடப்பட்டுள்ளது. முழு மடலையும் படிக்க அதைத் தொடவும்." },
    blessInPopup:{ en: "Blessings (Mangalasasanam)", ta: "ஆசீர்வாதம் (மங்களாசாசனம்)" },
    tabDesc:     { en: "Description", ta: "நூல் விவரம்" },
    tabCert:     { en: "Mangalasasanam", ta: "மங்களாசாசனம்" },
    heroSub:     { en: "Browse the collection below. Add the books you want, then send your order over WhatsApp or email.",
                   ta: "கீழே உள்ள தொகுப்பைப் பாருங்கள். வேண்டிய நூல்களைச் சேர்த்து, உங்கள் ஆர்டரை வாட்ஸ்ஆப் அல்லது மின்னஞ்சல் மூலம் அனுப்புங்கள்." },
    heroCta:     { en: "View the collection", ta: "தொகுப்பைப் பார்க்க" },
    collection:  { en: "The Collection", ta: "நூல் தொகுப்பு" },
    addToOrder:  { en: "Add to Order", ta: "ஆர்டரில் சேர்க்க" },
    added:       { en: "Added ✓", ta: "சேர்க்கப்பட்டது ✓" },
    cartTitle:   { en: "Your Order", ta: "உங்கள் ஆர்டர்" },
    cartEmpty:   { en: "Your order is empty. Add books from the collection.",
                   ta: "உங்கள் ஆர்டர் காலியாக உள்ளது. தொகுப்பிலிருந்து நூல்களைச் சேர்க்கவும்." },
    total:       { en: "Total", ta: "மொத்தம்" },
    cartNote:    { en: "No payment online. Send your order and we'll confirm availability and delivery.",
                   ta: "இணையத்தில் பணம் செலுத்த வேண்டாம். உங்கள் ஆர்டரை அனுப்புங்கள்; கிடைப்பையும் டெலிவரியையும் நாங்கள் உறுதி செய்வோம்." },
    remove:      { en: "Remove", ta: "நீக்கு" },
    each:        { en: "each", ta: "ஒன்று" },
    inquireWa:   { en: "Order on WhatsApp", ta: "வாட்ஸ்ஆப்பில் ஆர்டர்" },
    inquireEmail:{ en: "Order by Email", ta: "மின்னஞ்சலில் ஆர்டர்" },
    rights:      { en: "All rights reserved.", ta: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." },
    emailSubject:{ en: "Book order", ta: "நூல் ஆர்டர்" },
    orderName:   { en: "My name:", ta: "என் பெயர்:" },
    orderAddr:   { en: "Delivery address:", ta: "டெலிவரி முகவரி:" },
    orderPhone:  { en: "Phone:", ta: "தொலைபேசி:" },
    priceAsk:    { en: "Price on request", ta: "விலை கேட்டு அறியவும்" },
    howtoTitle:  { en: "How to order", ta: "ஆர்டர் செய்வது எப்படி" },
    howto1:      { en: "Add the books you want", ta: "வேண்டிய நூல்களைச் சேர்க்கவும்" },
    howto2:      { en: "Tap “Order on WhatsApp” or Email", ta: "‘வாட்ஸ்ஆப்பில் ஆர்டர்’ அல்லது மின்னஞ்சலை அழுத்தவும்" },
    howto3:      { en: "We confirm the price & deliver", ta: "நாங்கள் விலையை உறுதி செய்து அனுப்புகிறோம்" },
    waFloatMsg:  { en: "Vanakkam! I would like to know about your books.",
                   ta: "வணக்கம்! உங்கள் நூல்கள் குறித்து அறிய விரும்புகிறேன்." },
  };

  /* ---- language state (persisted) ---- */
  let LANG = "ta"; // always greet in Tamil on load; English is a per-visit toggle

  // Return the right string for the current language.
  // Accepts a { en, ta } object OR a plain string (used as-is, e.g. names/prices).
  function t(val) {
    if (val == null) return "";
    if (typeof val === "string") return val;
    return val[LANG] || val.en || val.ta || "";
  }

  const money = (n) => `${SITE.currency}${Number(n).toLocaleString("en-IN")}`;
  // Price for display: real price, or "Price on request" when not set (0/blank).
  const priceText = (n) => (n ? money(n) : t(STRINGS.priceAsk));
  const $ = (id) => document.getElementById(id);
  const byId = (id) => BOOKS.find((b) => b.id === id);

  /* ---- cart state (persisted) ---- */
  let cart = loadCart();
  function loadCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
    catch { return {}; }
  }
  function saveCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
    catch { /* private mode / storage disabled — cart still works this visit */ }
  }

  /* ---- text driven by language ---- */
  function paintText() {
    document.documentElement.lang = LANG;
    document.title = t(SITE.siteTitle);
    $("site-title").textContent = t(SITE.siteTitle);
    $("site-tagline").textContent = t(SITE.tagline);
    $("hero-heading").textContent = t(SITE.tagline);
    $("hero-sub").textContent = t(STRINGS.heroSub);
    $("hero-cta").textContent = t(STRINGS.heroCta);
    $("hero-about").textContent = t(STRINGS.heroAbout);
    $("nav-books").textContent = t(STRINGS.navBooks);
    $("nav-about").textContent = t(STRINGS.navAbout);
    $("collection-title").textContent = t(STRINGS.collection);
    $("cart-title").textContent = t(STRINGS.cartTitle);
    $("cart-note").textContent = t(SITE.deliveryNote);

    // Floating WhatsApp contact link
    $("wa-float").href =
      `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(t(STRINGS.waFloatMsg))}`;
    $("inquire-whatsapp").textContent = t(STRINGS.inquireWa);
    $("inquire-email").textContent = t(STRINGS.inquireEmail);

    $("about-heading").textContent = t(STRINGS.aboutHeading);
    $("about-photo").src = ABOUT.photo;
    $("about-photo").alt = t(ABOUT.name);
    $("about-name").textContent = t(ABOUT.name);
    $("about-role").textContent = t(ABOUT.role);
    $("about-bless").textContent = t(ABOUT.blessing);
    $("about-paragraphs").innerHTML = ABOUT.paragraphs
      .map((p) => `<p>${escapeHtml(t(p))}</p>`).join("");

    $("footer-line").textContent =
      `© ${new Date().getFullYear()} ${t(SITE.authorName)}. ${t(STRINGS.rights)}`;

    // header toggle active state
    document.querySelectorAll("[data-setlang]").forEach((b) =>
      b.classList.toggle("active", b.dataset.setlang === LANG));
  }

  /* ---- images: set src, and hide the element cleanly if the file is missing ---- */
  function setImg(el, src) {
    if (!el) return;
    if (!src) { el.style.display = "none"; return; }
    el.onerror = () => { el.style.display = "none"; };
    el.style.display = "";
    el.src = src;
  }
  function paintImages() {
    setImg($("brand-logo"), SITE.logo);
    setImg($("corner-left"), typeof CORNERS !== "undefined" && CORNERS.left);
    setImg($("corner-right"), typeof CORNERS !== "undefined" && CORNERS.right);
  }

  /* ---- divine intro: god image fades in & out, then reveals the door ---- */
  function runIntro() {
    const intro = $("intro"), img = $("intro-img");
    if (!SPLASH.image) { intro.classList.add("hide"); return; }
    img.onerror = () => intro.classList.add("hide");
    img.src = SPLASH.image;
    setTimeout(() => intro.classList.add("hide"), 3800); // after the fade completes
    intro.addEventListener("click", () => intro.classList.add("hide")); // tap to skip
  }

  /* ---- book grid ---- */
  function renderBooks() {
    const grid = $("book-grid");
    // Books with a cover first, empty ones last (stable — keeps original order within each group)
    const ordered = [...BOOKS].sort((a, b) => (a.cover ? 0 : 1) - (b.cover ? 0 : 1));
    grid.innerHTML = ordered.map((b) => {
      const title = t(b.title);
      const cover = b.cover
        ? `<img class="book-cover" src="${b.cover}" alt="${escapeHtml(title)}" data-open="${b.id}" loading="lazy" decoding="async" />`
        : `<div class="book-cover placeholder" data-open="${b.id}">${initials(title)}</div>`;
      return `
        <article class="book-card">
          ${cover}
          <div class="book-body">
            <h3 class="book-title" data-open="${b.id}">${escapeHtml(title)}</h3>
            <p class="book-subtitle">${escapeHtml(t(b.subtitle) || "")}</p>
            <p class="book-price">${escapeHtml(priceText(b.price))}</p>
            <button class="add-btn btn btn--primary" data-add="${b.id}">${t(STRINGS.addToOrder)}</button>
          </div>
        </article>`;
    }).join("");
  }

  /* ---- cart ---- */
  function renderCart() {
    const wrap = $("cart-items");
    const ids = Object.keys(cart).filter((id) => cart[id] > 0 && byId(id));
    const count = ids.reduce((n, id) => n + cart[id], 0);
    $("cart-count").textContent = count;
    $("cart-total-label").textContent = t(STRINGS.total);

    if (ids.length === 0) {
      wrap.innerHTML = `<p class="cart-empty">${escapeHtml(t(STRINGS.cartEmpty))}</p>`;
      $("cart-total").textContent = money(0);
      $("inquire-whatsapp").disabled = true;
      $("inquire-email").disabled = true;
      return;
    }
    $("inquire-whatsapp").disabled = false;
    $("inquire-email").disabled = false;

    let total = 0;
    wrap.innerHTML = ids.map((id) => {
      const b = byId(id), qty = cart[id];
      total += b.price * qty;
      const thumb = b.cover ? `<img class="cart-thumb" src="${b.cover}" alt="" loading="lazy" />` : "";
      return `
        <div class="cart-row">
          ${thumb}
          <div class="cart-row-main">
            <p class="cart-row-title">${escapeHtml(t(b.title))}</p>
            <div class="cart-row-ctrls">
              <div class="qty">
                <button data-dec="${id}" aria-label="−">−</button>
                <span>${qty}</span>
                <button data-inc="${id}" aria-label="+">+</button>
              </div>
              <span class="cart-row-price">${escapeHtml(b.price ? money(b.price * qty) : t(STRINGS.priceAsk))}</span>
            </div>
            <button class="cart-remove" data-remove="${id}">${t(STRINGS.remove)}</button>
          </div>
        </div>`;
    }).join("");
    $("cart-total").textContent = money(total);
  }

  function addToCart(id) { cart[id] = (cart[id] || 0) + 1; saveCart(); renderCart(); }
  function inc(id) { cart[id] = (cart[id] || 0) + 1; saveCart(); renderCart(); }
  function dec(id) { cart[id] = (cart[id] || 0) - 1; if (cart[id] <= 0) delete cart[id]; saveCart(); renderCart(); }
  function remove(id) { delete cart[id]; saveCart(); renderCart(); }

  /* ---- order message (in the chosen language) ---- */
  function orderCount() {
    return Object.keys(cart).filter((id) => cart[id] > 0 && byId(id)).length;
  }
  function orderText() {
    const ids = Object.keys(cart).filter((id) => cart[id] > 0 && byId(id));
    let total = 0;
    const lines = ids.map((id) => {
      const b = byId(id), qty = cart[id], sub = b.price * qty;
      total += sub;
      return `• ${t(b.title)} × ${qty} — ${b.price ? money(sub) : t(STRINGS.priceAsk)}`;
    });
    const site = t(SITE.siteTitle);
    const intro = LANG === "ta"
      ? `வணக்கம், ${site} இல் இருந்து பின்வரும் நூல்களை ஆர்டர் செய்ய விரும்புகிறேன்:`
      : `Hello, I would like to order the following from ${site}:`;
    return [
      intro, "",
      ...lines, "",
      `${t(STRINGS.total)}: ${money(total)}`, "",
      t(STRINGS.orderName), t(STRINGS.orderAddr), t(STRINGS.orderPhone),
    ].join("\n");
  }
  function inquireWhatsApp() {
    if (orderCount() === 0) return;
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(orderText())}`, "_blank");
  }
  function inquireEmail() {
    if (orderCount() === 0) return;
    const subject = `${t(STRINGS.emailSubject)} — ${t(SITE.siteTitle)}`;
    window.location.href =
      `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(orderText())}`;
  }

  /* ---- detail modal: front/back slider + click-to-zoom ---- */
  let openDetailId = null, detailMedia = [], detailIndex = 0;
  function showDetailImg() {
    const img = $("detail-img"), stage = $("detail-stage");
    img.classList.remove("zoomed"); stage.classList.remove("zoomed");
    if (!detailMedia.length) { img.style.visibility = "hidden"; img.removeAttribute("src"); }
    else { img.style.visibility = "visible"; img.src = detailMedia[detailIndex]; }
    const multi = detailMedia.length > 1;
    $("detail-prev").style.display = multi ? "" : "none";
    $("detail-next").style.display = multi ? "" : "none";
    $("detail-dots").innerHTML = multi
      ? detailMedia.map((_, i) => `<span class="ddot${i === detailIndex ? " on" : ""}"></span>`).join("")
      : "";
  }
  function openDetail(id) {
    const b = byId(id);
    if (!b) return;
    openDetailId = id;
    detailMedia = [b.cover, b.back].filter(Boolean);
    detailIndex = 0;
    $("detail-title").textContent = t(b.title);
    $("detail-price").textContent = priceText(b.price);
    const desc = t(b.description);
    $("detail-desc").innerHTML = formatDesc(desc);
    $("detail-add").dataset.add = b.id;
    $("detail-add").textContent = t(STRINGS.addToOrder);
    // Description / Certificates tabs
    const bl = blessingsFor(b.id);
    $("detail-blessings").innerHTML = bl.length
      ? `<div class="bless-strip" data-bbook="${b.id}">${blessThumbsHtml(bl)}</div>` : "";
    const tabs = $("detail-tabs");
    if (bl.length) {
      tabs.style.display = "";
      tabs.innerHTML =
        `<button class="dtab" data-pane="desc">${escapeHtml(t(STRINGS.tabDesc))}</button>` +
        `<button class="dtab" data-pane="cert">${escapeHtml(t(STRINGS.tabCert))} (${bl.length})</button>`;
    } else {
      tabs.style.display = "none";
      tabs.innerHTML = "";
    }
    setDetailTab("desc");
    showDetailImg();
    $("detail-overlay").classList.add("open");
  }
  function setDetailTab(pane) {
    $("detail-desc").classList.toggle("active", pane === "desc");
    $("detail-blessings").classList.toggle("active", pane === "cert");
    document.querySelectorAll("#detail-tabs .dtab").forEach((b) =>
      b.classList.toggle("active", b.dataset.pane === pane));
    const info = document.querySelector(".detail-info");
    if (info) info.scrollTop = 0;
  }
  function detailNav(dir) {
    if (detailMedia.length < 2) return;
    detailIndex = (detailIndex + dir + detailMedia.length) % detailMedia.length;
    showDetailImg();
  }
  function toggleZoom() {
    $("detail-img").classList.toggle("zoomed");
    $("detail-stage").classList.toggle("zoomed");
  }
  function closeDetail() {
    openDetailId = null;
    $("detail-overlay").classList.remove("open");
    $("detail-img").classList.remove("zoomed");
    $("detail-stage").classList.remove("zoomed");
  }

  /* ---- cart open/close ---- */
  function openCart() { $("cart-drawer").classList.add("open"); $("cart-overlay").classList.add("open"); }
  function closeCart() { $("cart-drawer").classList.remove("open"); $("cart-overlay").classList.remove("open"); }

  /* ---- switch language: repaint everything currently on screen ---- */
  function setLang(lang) {
    LANG = lang === "en" ? "en" : "ta";
    try { localStorage.setItem(LANG_KEY, LANG); } catch { /* ignore */ }
    paintText();
    renderBooks();
    renderCart();
    if (openDetailId) openDetail(openDetailId);
  }

  /* ---- helpers ---- */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // Turn a raw synopsis (lines separated by \n) into clean, readable HTML:
  // headings (lines ending with :), bulleted lists, numbered lists, paragraphs.
  function formatDesc(text) {
    if (!text) return "";
    const lines = String(text).split("\n").map((l) => l.trim()).filter(Boolean);
    let html = "", mode = null; // null | "ul" | "ol"
    const close = () => { if (mode) { html += mode === "ul" ? "</ul>" : "</ol>"; mode = null; } };
    for (const line of lines) {
      const isBullet = /^[•▪◦*\-–]\s+/.test(line);
      const numM = line.match(/^\(?(\d{1,3})[\).\-]\s+(.*)$/);
      const isHead = /[:：]\s*$/.test(line) && line.length < 60;
      if (isBullet) {
        if (mode !== "ul") { close(); html += '<ul class="desc-bullets">'; mode = "ul"; }
        html += `<li>${escapeHtml(line.replace(/^[•▪◦*\-–]\s+/, ""))}</li>`;
      } else if (numM) {
        if (mode !== "ol") { close(); html += '<ol class="desc-num">'; mode = "ol"; }
        html += `<li>${escapeHtml(numM[2])}</li>`;
      } else if (isHead) {
        close(); html += `<p class="desc-head">${escapeHtml(line)}</p>`;
      } else {
        close(); html += `<p>${escapeHtml(line)}</p>`;
      }
    }
    close();
    return html;
  }
  function initials(title) {
    return String(title).trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("");
  }

  /* ---- events ---- */
  function bind() {
    document.addEventListener("click", (e) => {
      const t2 = e.target.closest("[data-add],[data-open],[data-inc],[data-dec],[data-remove],[data-lang],[data-setlang]");
      if (!t2) return;
      if (t2.dataset.setlang) { setLang(t2.dataset.setlang); return; }           // header toggle
      if (t2.dataset.add) {
        addToCart(t2.dataset.add);
        if (t2.classList.contains("add-btn")) {
          const orig = t2.textContent; t2.textContent = t(STRINGS.added); t2.classList.add("added");
          setTimeout(() => { t2.textContent = orig; t2.classList.remove("added"); }, 900);
        }
        openCart();
      } else if (t2.dataset.open) { openDetail(t2.dataset.open); }
      else if (t2.dataset.inc) { inc(t2.dataset.inc); }
      else if (t2.dataset.dec) { dec(t2.dataset.dec); }
      else if (t2.dataset.remove) { remove(t2.dataset.remove); }
    });

    $("cart-toggle").addEventListener("click", openCart);
    $("cart-close").addEventListener("click", closeCart);
    $("cart-overlay").addEventListener("click", closeCart);
    $("inquire-whatsapp").addEventListener("click", inquireWhatsApp);
    $("inquire-email").addEventListener("click", inquireEmail);
    $("detail-close").addEventListener("click", closeDetail);
    $("detail-tabs").addEventListener("click", (e) => {
      const tab = e.target.closest(".dtab");
      if (tab) setDetailTab(tab.dataset.pane);
    });
    $("detail-overlay").addEventListener("click", (e) => { if (e.target.id === "detail-overlay") closeDetail(); });
    $("detail-prev").addEventListener("click", (e) => { e.stopPropagation(); detailNav(-1); });
    $("detail-next").addEventListener("click", (e) => { e.stopPropagation(); detailNav(1); });
    $("detail-img").addEventListener("click", (e) => { e.stopPropagation(); toggleZoom(); });
    // Blessing thumbnails → open lightbox (works in popup and home showcase)
    document.addEventListener("click", (e) => {
      const th = e.target.closest(".bless-thumb");
      if (!th) return;
      const strip = th.closest(".bless-strip");
      const set = blessingsFor(strip && strip.dataset.bbook);
      if (set.length) openLightbox(set, +th.dataset.bidx || 0);
    });
    $("lb-close").addEventListener("click", closeLightbox);
    $("lb-prev").addEventListener("click", (e) => { e.stopPropagation(); lbNav(-1); });
    $("lb-next").addEventListener("click", (e) => { e.stopPropagation(); lbNav(1); });
    $("lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox" || e.target.classList.contains("lb-stage")) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if ($("lightbox").classList.contains("open")) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") lbNav(-1);
        if (e.key === "ArrowRight") lbNav(1);
        return;
      }
      if (e.key === "Escape") { closeCart(); closeDetail(); }
      if ($("detail-overlay").classList.contains("open")) {
        if (e.key === "ArrowLeft") detailNav(-1);
        if (e.key === "ArrowRight") detailNav(1);
      }
    });
  }

  /* ---- Blessings (Srimukham / Mangalasasanam) + lightbox ---- */
  function blessingsFor(id) {
    return (typeof BLESSINGS !== "undefined" && BLESSINGS[id]) ? BLESSINGS[id] : [];
  }
  function blessThumbsHtml(list) {
    return list.map((e, i) =>
      `<button class="bless-thumb" type="button" data-bidx="${i}">
         <img src="${e.img}" alt="" loading="lazy" />
         <span class="bless-by">${escapeHtml(t(e.by))}</span>
       </button>`).join("");
  }
  let lbSet = [], lbIdx = 0;
  function openLightbox(set, idx) { lbSet = set; lbIdx = idx; paintLightbox(); $("lightbox").classList.add("open"); }
  function paintLightbox() {
    const it = lbSet[lbIdx]; if (!it) return;
    $("lb-img").src = it.img;
    $("lb-caption").textContent = t(it.by);
    const multi = lbSet.length > 1;
    $("lb-prev").style.display = multi ? "" : "none";
    $("lb-next").style.display = multi ? "" : "none";
  }
  function lbNav(dir) { if (lbSet.length < 2) return; lbIdx = (lbIdx + dir + lbSet.length) % lbSet.length; paintLightbox(); }
  function closeLightbox() { $("lightbox").classList.remove("open"); $("lb-img").src = ""; }

  // Gentle fade-up when the About card scrolls into view (progressive enhancement).
  function revealAbout() {
    const card = document.querySelector(".about-frame");
    if (!card || !("IntersectionObserver" in window)) return;
    card.classList.add("reveal");
    const show = () => card.classList.add("in");
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { show(); io.disconnect(); }
    }, { threshold: 0, rootMargin: "0px 0px -10% 0px" });
    io.observe(card);
    // Safety net: never leave the bio hidden if the observer doesn't fire.
    setTimeout(show, 1600);
  }

  /* ---- start ---- */
  paintText();
  paintImages();
  runIntro();
  renderBooks();
  renderCart();
  bind();
  revealAbout();

  // Optional deep-link: ?lang=ta|en enters directly in that language (skips the door).
  const _qs = new URLSearchParams(location.search);
  const _l = _qs.get("lang");
  if (_l === "en" || _l === "ta") { setLang(_l); document.getElementById("intro").classList.add("hide"); }
  // Optional deep-link: ?book=book-3 opens straight to that book's details.
  const _b = _qs.get("book");
  if (_b && byId(_b)) { $("intro").classList.add("hide"); openDetail(_b); }
})();
