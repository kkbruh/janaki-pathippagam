# Devotional Books — website

A simple, static website to showcase and sell a collection of devotional Hindu
books. Visitors browse the books, add the ones they want, and send their order
over **WhatsApp** or **email**. There is no online payment — orders are confirmed
personally.

## How it works

- **Shop grid** — every book from `config.js` is shown as a card. Click a card
  to see its full details.
- **Cart** — "Add to Order" collects books into a cart (saved in the visitor's
  browser). The cart total is shown for reference.
- **Inquire** — the cart's WhatsApp / Email buttons open a pre-filled order
  message (the book list, quantities, total, and blanks for name/address/phone).
- **Opening picture** — a deity image greets visitors, then fades away.
- **About** — the author's photo and bio at the bottom of the page.

## Editing the site (no coding needed)

Everything you'd normally change lives in **`config.js`**:

| What to change            | Where in `config.js` |
| ------------------------- | -------------------- |
| Author name, brand, tagline | `SITE`             |
| WhatsApp number & email   | `SITE.whatsappNumber`, `SITE.email` |
| Opening deity picture     | `SPLASH.image`       |
| About text & author photo | `ABOUT`              |
| The books (title/price/…) | `BOOKS`              |

### Adding images

- Book covers → drop image files into `assets/books/`, then set each book's
  `cover` to e.g. `"assets/books/mybook.jpg"`. Books with no cover show a
  tasteful placeholder automatically.
- Deity picture → `assets/site/deity.jpg`
- Author photo → `assets/site/author.jpg`

> The `whatsappNumber` must be full international format, digits only — e.g.
> `919876543210` for the Indian number +91 98765 43210.

## Running / previewing locally

Just open `index.html` in a browser. (Some browsers restrict `file://` — if
anything looks off, run a tiny local server:)

```bash
cd devotional-books
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publishing

The site is plain HTML/CSS/JS, so it can be hosted free on **GitHub Pages**,
Netlify, or any static host. (Setup steps to be added once the repo is created.)

## Files

- `index.html` — page structure
- `styles.css` — appearance
- `config.js` — **all editable content** (books, contact, text, images)
- `app.js` — logic (cart, rendering, inquiry links) — no need to edit
