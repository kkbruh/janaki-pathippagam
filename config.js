/* ============================================================================
   EDIT THIS FILE TO UPDATE THE WEBSITE.
   You do NOT need to touch any other file.

   THIS SITE IS BILINGUAL — Tamil + English.
   Wherever you see  { en: "...", ta: "..." }  put the English text after `en`
   and the Tamil text after `ta`. Both are shown to the right visitor depending
   on the language they pick at the door. If you leave one blank, the other is
   shown instead, so you can fill Tamil in later.

   After editing, just save the file and refresh the website.
   ============================================================================ */

/* ---------------------------------------------------------------------------
   1) SITE INFO
   --------------------------------------------------------------------------- */
const SITE = {
  // The author's name (usually the same in both, but you can give a Tamil form).
  authorName: { en: "Author Name", ta: "நூலாசிரியர் பெயர்" },      // TODO
  // Imprint / brand name shown at the top of the page.
  siteTitle:  { en: "Janaki Pathipagam", ta: "ஜானகி பதிப்பகம்" },
  // Short line under the name.
  tagline:    { en: "Sacred Hindu texts, published with devotion.",
                ta: "பக்தியுடன் வெளியிடப்பட்ட புனித நூல்கள்." },     // TODO

  // Website logo (the Sri Rama emblem). Drop the file in images/ and name it here.
  logo: "images/logo.png",                // TODO: add images/logo.png

  currency: "₹",                          // shown before every price

  // Contact used for the "Order" buttons in the cart.
  // WhatsApp must be full international format, digits only (no +, spaces, dashes).
  // Example for India: 91 followed by the 10-digit number  ->  "919876543210"
  whatsappNumber: "919999999999",         // TODO: real WhatsApp number
  email: "orders@example.com",            // TODO: real order email
};

/* ---------------------------------------------------------------------------
   2) OPENING PICTURE  —  the deity image at the temple door.
   Drop the image into  assets/site/  and put its filename below.
   --------------------------------------------------------------------------- */
const SPLASH = {
  image: "images/deity.jpg",              // TODO: add images/deity.jpg (homepage flash)
  // A blessing shown under the deity (same for both languages, or give each).
  blessing: { en: "॥ श्री गणेशाय नमः ॥", ta: "॥ ஶ்ரீ கணேசாய நம: ॥" },  // TODO
};

/* Decorative images in the bottom-left and bottom-right corners of the page.
   Leave "" to show no corner image. Drop the files in images/. */
const CORNERS = {
  left:  "images/corner-left.jpg",        // TODO: add images/corner-left.jpg
  right: "images/corner-right.jpg",       // TODO: add images/corner-right.jpg
};

/* ---------------------------------------------------------------------------
   3) ABOUT SECTION  —  bottom of the page, with the author's photo.
   --------------------------------------------------------------------------- */
const ABOUT = {
  photo: "images/author.jpg",             // TODO: add images/author.jpg
  // Each entry in the list becomes one paragraph. Add or remove entries freely.
  paragraphs: [
    { en: "TODO: A short introduction to the author — background, spiritual journey, and what inspired these books.",
      ta: "TODO: நூலாசிரியர் பற்றிய சிறு அறிமுகம் — பின்னணி, ஆன்மீகப் பயணம், இந்நூல்களுக்கான உத்வேகம்." },
    { en: "TODO: Mention how many books have been published and the tradition they belong to.",
      ta: "TODO: எத்தனை நூல்கள் வெளியிடப்பட்டுள்ளன, எந்த மரபைச் சேர்ந்தவை என்பதைக் குறிப்பிடவும்." },
  ],
};

/* ---------------------------------------------------------------------------
   4) THE BOOKS  —  one block per book.
   Copy a block, paste it, and edit to add more books.
     cover : image filename inside  assets/books/  (leave "" for a placeholder)
     price : number only, no currency symbol (same price for both languages)
   --------------------------------------------------------------------------- */
const BOOKS = [
  {
    id: "book-1",
    title:       { en: "Book Title One", ta: "நூல் தலைப்பு ஒன்று" },
    subtitle:    { en: "Sub-title or note", ta: "துணைத் தலைப்பு" },
    price: 250,
    cover: "",                            // e.g. "assets/books/book1.jpg"
    description: { en: "TODO: A couple of lines describing this book.",
                   ta: "TODO: இந்நூலை விவரிக்கும் இரண்டு வரிகள்." },
  },
  {
    id: "book-2",
    title:       { en: "Book Title Two", ta: "நூல் தலைப்பு இரண்டு" },
    subtitle:    { en: "", ta: "" },
    price: 300,
    cover: "",
    description: { en: "TODO: A couple of lines describing this book.",
                   ta: "TODO: இந்நூலை விவரிக்கும் இரண்டு வரிகள்." },
  },
  {
    id: "book-3",
    title:       { en: "Book Title Three", ta: "நூல் தலைப்பு மூன்று" },
    subtitle:    { en: "", ta: "" },
    price: 180,
    cover: "",
    description: { en: "TODO: A couple of lines describing this book.",
                   ta: "TODO: இந்நூலை விவரிக்கும் இரண்டு வரிகள்." },
  },
  {
    id: "book-4",
    title:       { en: "Book Title Four", ta: "நூல் தலைப்பு நான்கு" },
    subtitle:    { en: "", ta: "" },
    price: 350,
    cover: "",
    description: { en: "TODO: A couple of lines describing this book.",
                   ta: "TODO: இந்நூலை விவரிக்கும் இரண்டு வரிகள்." },
  },
  {
    id: "book-5",
    title:       { en: "Book Title Five", ta: "நூல் தலைப்பு ஐந்து" },
    subtitle:    { en: "", ta: "" },
    price: 220,
    cover: "",
    description: { en: "TODO: A couple of lines describing this book.",
                   ta: "TODO: இந்நூலை விவரிக்கும் இரண்டு வரிகள்." },
  },
  {
    id: "book-6",
    title:       { en: "Book Title Six", ta: "நூல் தலைப்பு ஆறு" },
    subtitle:    { en: "", ta: "" },
    price: 400,
    cover: "",
    description: { en: "TODO: A couple of lines describing this book.",
                   ta: "TODO: இந்நூலை விவரிக்கும் இரண்டு வரிகள்." },
  },
];
