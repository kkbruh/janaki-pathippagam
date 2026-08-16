/* ============================================================================
   EDIT THIS FILE TO UPDATE THE WEBSITE.
   You do NOT need to touch any other file. Everything a non-technical person
   would change — the name, contact details, and the list of books — lives here.
   After editing, just save the file and refresh the website.
   ============================================================================ */

/* ---------------------------------------------------------------------------
   1) SITE INFO  —  the name and tagline shown at the top of the page
   --------------------------------------------------------------------------- */
const SITE = {
  authorName: "Author Name",              // TODO: your uncle's name
  siteTitle: "Janaki Pathipagam",         // imprint name (edit spelling if needed)
  tagline: "Sacred Hindu texts, published with devotion.", // TODO: short line
  currency: "₹",                          // shown before every price

  // Contact used for the "Inquire" buttons in the cart.
  // WhatsApp must be full international format, digits only (no +, spaces, or dashes).
  // Example for India: 91 followed by the 10-digit number  ->  "919876543210"
  whatsappNumber: "919999999999",         // TODO: real WhatsApp number
  email: "orders@example.com",            // TODO: real order email
};

/* ---------------------------------------------------------------------------
   2) OPENING PICTURE  —  the deity image that greets visitors when the page
      opens, then gently fades away.
   Drop the image file into  assets/site/  and put its filename below.
   --------------------------------------------------------------------------- */
const SPLASH = {
  image: "assets/site/deity.jpg",         // TODO: add this image file
  blessing: "॥ श्री गणेशाय नमः ॥",          // TODO: any blessing / mantra (or "")
};

/* ---------------------------------------------------------------------------
   3) ABOUT SECTION  —  shown at the bottom of the page with the author's photo.
   --------------------------------------------------------------------------- */
const ABOUT = {
  photo: "assets/site/author.jpg",        // TODO: add the author's photo here
  heading: "About the Author",
  // Each string below becomes one paragraph. Add or remove lines freely.
  paragraphs: [
    "TODO: A short introduction to the author — background, spiritual journey, and what inspired these books.",
    "TODO: Mention how many books have been published and the tradition they belong to.",
  ],
};

/* ---------------------------------------------------------------------------
   4) THE BOOKS  —  one entry per book.
   Copy a block, paste it, and edit to add more books.
     cover : image filename inside  assets/books/  (leave "" for a placeholder)
     price : number only, no currency symbol
   --------------------------------------------------------------------------- */
const BOOKS = [
  {
    id: "book-1",
    title: "Book Title One",
    subtitle: "Sub-title or language, e.g. Tamil",
    price: 250,
    cover: "",                            // e.g. "assets/books/book1.jpg"
    description: "TODO: A couple of lines describing this book.",
  },
  {
    id: "book-2",
    title: "Book Title Two",
    subtitle: "",
    price: 300,
    cover: "",
    description: "TODO: A couple of lines describing this book.",
  },
  {
    id: "book-3",
    title: "Book Title Three",
    subtitle: "",
    price: 180,
    cover: "",
    description: "TODO: A couple of lines describing this book.",
  },
  {
    id: "book-4",
    title: "Book Title Four",
    subtitle: "",
    price: 350,
    cover: "",
    description: "TODO: A couple of lines describing this book.",
  },
  {
    id: "book-5",
    title: "Book Title Five",
    subtitle: "",
    price: 220,
    cover: "",
    description: "TODO: A couple of lines describing this book.",
  },
  {
    id: "book-6",
    title: "Book Title Six",
    subtitle: "",
    price: 400,
    cover: "",
    description: "TODO: A couple of lines describing this book.",
  },
];
