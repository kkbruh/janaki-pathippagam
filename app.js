/* ============================================================================
   Devotional Books — app logic.
   Reads everything from config.js. You should not need to edit this file to
   change content. It renders the books, runs the cart (saved in the browser),
   and builds the WhatsApp / email order message.
   ============================================================================ */

(function () {
  "use strict";

  const CART_KEY = "devotional-books-cart";
  const money = (n) => `${SITE.currency}${Number(n).toLocaleString("en-IN")}`;
  const $ = (id) => document.getElementById(id);
  const byId = (id) => BOOKS.find((b) => b.id === id);

  /* ---- cart state (persisted in the browser) ---- */
  let cart = load();
  function load() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
    catch { return {}; }
  }
  function save() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
    catch { /* private mode / storage disabled — cart still works for this visit */ }
  }

  /* ---- static text from config ---- */
  function paintStaticText() {
    document.title = SITE.siteTitle;
    $("site-title").textContent = SITE.siteTitle;
    $("site-tagline").textContent = SITE.tagline;
    $("hero-heading").textContent = SITE.tagline;
    $("about-heading").textContent = ABOUT.heading;
    $("about-photo").src = ABOUT.photo;
    $("about-photo").alt = SITE.authorName;
    $("about-paragraphs").innerHTML = ABOUT.paragraphs
      .map((p) => `<p>${escapeHtml(p)}</p>`).join("");
    $("footer-line").textContent =
      `© ${new Date().getFullYear()} ${SITE.authorName}. All rights reserved.`;
  }

  /* ---- splash ---- */
  function runSplash() {
    const splash = $("splash");
    const img = $("splash-img");
    img.src = SPLASH.image;
    img.alt = "Blessing";
    $("splash-blessing").textContent = SPLASH.blessing || "";
    // Fade out on its own after a short pause — or let the visitor tap to skip.
    const dismiss = () => splash.classList.add("hide");
    setTimeout(dismiss, 2200);
    splash.addEventListener("click", dismiss);
  }

  /* ---- render book grid ---- */
  function renderBooks() {
    const grid = $("book-grid");
    grid.innerHTML = BOOKS.map((b) => {
      const cover = b.cover
        ? `<img class="book-cover" src="${b.cover}" alt="${escapeHtml(b.title)}" data-open="${b.id}" />`
        : `<div class="book-cover placeholder" data-open="${b.id}">${initials(b.title)}</div>`;
      return `
        <article class="book-card">
          ${cover}
          <div class="book-body">
            <h3 class="book-title" data-open="${b.id}">${escapeHtml(b.title)}</h3>
            <p class="book-subtitle">${escapeHtml(b.subtitle || "")}</p>
            <p class="book-price">${money(b.price)}</p>
            <button class="add-btn" data-add="${b.id}">Add to Order</button>
          </div>
        </article>`;
    }).join("");
  }

  /* ---- render cart ---- */
  function renderCart() {
    const wrap = $("cart-items");
    const ids = Object.keys(cart).filter((id) => cart[id] > 0 && byId(id));
    const count = ids.reduce((n, id) => n + cart[id], 0);
    $("cart-count").textContent = count;

    if (ids.length === 0) {
      wrap.innerHTML = `<p class="cart-empty">Your order is empty.<br>Add books from the collection.</p>`;
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
      return `
        <div class="cart-row">
          <div class="cart-row-main">
            <p class="cart-row-title">${escapeHtml(b.title)}</p>
            <p class="cart-row-price">${money(b.price)} each</p>
            <button class="cart-remove" data-remove="${id}">Remove</button>
          </div>
          <div class="qty">
            <button data-dec="${id}">−</button>
            <span>${qty}</span>
            <button data-inc="${id}">+</button>
          </div>
        </div>`;
    }).join("");
    $("cart-total").textContent = money(total);
  }

  /* ---- cart operations ---- */
  function addToCart(id) { cart[id] = (cart[id] || 0) + 1; save(); renderCart(); }
  function inc(id) { cart[id] = (cart[id] || 0) + 1; save(); renderCart(); }
  function dec(id) { cart[id] = (cart[id] || 0) - 1; if (cart[id] <= 0) delete cart[id]; save(); renderCart(); }
  function remove(id) { delete cart[id]; save(); renderCart(); }

  /* ---- build the order message shared to WhatsApp / email ---- */
  function orderLines() {
    const ids = Object.keys(cart).filter((id) => cart[id] > 0 && byId(id));
    let total = 0;
    const lines = ids.map((id) => {
      const b = byId(id), qty = cart[id], sub = b.price * qty;
      total += sub;
      return `• ${b.title} × ${qty} — ${money(sub)}`;
    });
    return { lines, total, count: ids.length };
  }
  function orderText() {
    const { lines, total } = orderLines();
    return [
      `Hello, I would like to order the following from ${SITE.siteTitle}:`,
      "",
      ...lines,
      "",
      `Total: ${money(total)}`,
      "",
      "My name: ",
      "Delivery address: ",
      "Phone: ",
    ].join("\n");
  }
  function inquireWhatsApp() {
    if (orderLines().count === 0) return;
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(orderText())}`;
    window.open(url, "_blank");
  }
  function inquireEmail() {
    if (orderLines().count === 0) return;
    const subject = `Book order — ${SITE.siteTitle}`;
    window.location.href =
      `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(orderText())}`;
  }

  /* ---- detail modal ---- */
  function openDetail(id) {
    const b = byId(id);
    if (!b) return;
    const cover = $("detail-cover");
    if (b.cover) { cover.src = b.cover; cover.style.display = "block"; }
    else { cover.removeAttribute("src"); cover.style.display = "none"; }
    $("detail-title").textContent = b.title;
    $("detail-subtitle").textContent = b.subtitle || "";
    $("detail-price").textContent = money(b.price);
    $("detail-desc").textContent = b.description || "";
    $("detail-add").dataset.add = b.id;
    $("detail-overlay").classList.add("open");
  }
  function closeDetail() { $("detail-overlay").classList.remove("open"); }

  /* ---- cart open/close ---- */
  function openCart() { $("cart-drawer").classList.add("open"); $("cart-overlay").classList.add("open"); }
  function closeCart() { $("cart-drawer").classList.remove("open"); $("cart-overlay").classList.remove("open"); }

  /* ---- helpers ---- */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function initials(title) {
    return String(title).trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase();
  }

  /* ---- wire up events (one delegated listener where possible) ---- */
  function bind() {
    document.addEventListener("click", (e) => {
      const t = e.target.closest("[data-add],[data-open],[data-inc],[data-dec],[data-remove]");
      if (!t) return;
      if (t.dataset.add) {
        addToCart(t.dataset.add);
        if (t.classList.contains("add-btn")) {
          const orig = t.textContent; t.textContent = "Added ✓"; t.classList.add("added");
          setTimeout(() => { t.textContent = orig; t.classList.remove("added"); }, 900);
        }
        openCart();
      } else if (t.dataset.open) { openDetail(t.dataset.open); }
      else if (t.dataset.inc) { inc(t.dataset.inc); }
      else if (t.dataset.dec) { dec(t.dataset.dec); }
      else if (t.dataset.remove) { remove(t.dataset.remove); }
    });

    $("cart-toggle").addEventListener("click", openCart);
    $("cart-close").addEventListener("click", closeCart);
    $("cart-overlay").addEventListener("click", closeCart);
    $("inquire-whatsapp").addEventListener("click", inquireWhatsApp);
    $("inquire-email").addEventListener("click", inquireEmail);
    $("detail-close").addEventListener("click", closeDetail);
    $("detail-overlay").addEventListener("click", (e) => { if (e.target.id === "detail-overlay") closeDetail(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeCart(); closeDetail(); } });
  }

  /* ---- start ---- */
  paintStaticText();
  runSplash();
  renderBooks();
  renderCart();
  bind();
})();
