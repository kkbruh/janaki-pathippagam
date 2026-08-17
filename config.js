/* ============================================================================
   EDIT THIS FILE TO UPDATE THE WEBSITE.
   You do NOT need to touch any other file.

   THIS SITE IS BILINGUAL — Tamil + English.
   Wherever you see  { en: "...", ta: "..." }  put the English text after `en`
   and the Tamil text after `ta`. If you leave one blank, the other is shown,
   so you can fill missing translations in later.

   After editing, just save the file and refresh the website.
   ============================================================================ */

/* ---------------------------------------------------------------------------
   1) SITE INFO
   --------------------------------------------------------------------------- */
const SITE = {
  authorName: { en: "Madurai S. Raghuraman", ta: "மதுரை சு. ரகுராமன்" },
  siteTitle:  { en: "Janaki Pathippagam", ta: "ஜானகி பதிப்பகம்" },
  tagline:    { en: "Sharing the wisdom and heritage of Sanatana Dharma.",
                ta: "சனாதன தர்மத்தின் ஞானத்தையும் பாரம்பரியத்தையும் பகிர்கிறோம்." },

  // Website logo (the Sri Rama emblem). Drop the file in images/ and name it here.
  logo: "images/logo.png",                // TODO: add images/logo.png

  currency: "₹",                          // shown before every price

  // Contact used for the "Order" buttons in the cart.
  // WhatsApp: full international format, digits only (no +, spaces, dashes).
  // Example for India: 91 + 10-digit number  ->  "919876543210"
  whatsappNumber: "919940349593",         // TODO: real WhatsApp number
  email: "janakipathipagam@gmail.com",            // TODO: real order email
};

/* ---------------------------------------------------------------------------
   2) OPENING PICTURE  —  the deity image at the temple door.
   --------------------------------------------------------------------------- */
const SPLASH = {
  image: "images/deity.jpg",              // TODO: add images/deity.jpg (homepage flash)
  blessing: { en: "", ta: "" },           // (blessing text removed)
};

/* Decorative images in the bottom-left and bottom-right corners of the page.
   Leave "" to show no corner image. */
const CORNERS = {
  left:  "images/corner-left.jpg",        // TODO: add images/corner-left.jpg
  right: "images/corner-right.jpg",       // TODO: add images/corner-right.jpg
};

/* ---------------------------------------------------------------------------
   3) ABOUT SECTION  —  bottom of the page, with the author's photo.
   --------------------------------------------------------------------------- */
const ABOUT = {
  photo: "images/author.jpg",             // TODO: add images/author.jpg
  paragraphs: [
    { en: "I am Madurai S. Raghuraman, a spiritual writer and author dedicated to sharing the timeless wisdom and values of Sanatana Dharma.",
      ta: "நான் மதுரை சு. ரகுராமன். சனாதன தர்மத்தின் காலத்தால் அழியாத ஞானத்தையும், உயர்ந்த நெறிகளையும் பகிர்ந்து கொள்ளும் நோக்கத்துடன் ஆன்மீக எழுத்தாளராகவும், ஆசிரியராகவும் செயல்பட்டு வருகிறேன்." },
    { en: "I have written over 500 spiritual articles for various publications and delivered more than 25 discourses, focusing on the lives, teachings, and contributions of the revered Gurus and Mahans of our tradition.",
      ta: "பல்வேறு ஆன்மீக நாளிதழ்கள் மற்றும் இதழ்களில் 500-க்கும் மேற்பட்ட ஆன்மீகக் கட்டுரைகளை எழுதியுள்ளதுடன், நமது ஆன்மீக மரபின் போற்றத்தக்க குருமகான்களின் வாழ்க்கை மற்றும் போதனைகள் குறித்து 25-க்கும் மேற்பட்ட ஆன்மீக சொற்பொழிவுகளையும் நிகழ்த்தியுள்ளேன்." },
    { en: "In honour of my mother, I founded Janaki Pathippagam, a spiritual publishing house through which I have authored and published 13 books to date.",
      ta: "எனது தாயாரின் பெயரில், அவரைப் போற்றும் வகையில் ஜானகி பதிப்பகம் என்ற ஆன்மீகப் பதிப்பகத்தை நிறுவியுள்ளேன். இதன் மூலம் இதுவரை 13 புத்தகங்களை எழுதி வெளியிட்டுள்ளேன்." },
    { en: "It is a privilege that my books have been recognised by respected Gurus and Mahans of the respective traditions and released by them with their blessings.",
      ta: "அந்தந்த பாரம்பரியத்தைச் சார்ந்த மரியாதைக்குரிய குருமகான்களால் எனது நூல்கள் அங்கீகரிக்கப்பட்டு, அவர்களின் திருக்கரங்களால் வெளியிடப்பட்டிருப்பது எனக்குக் கிடைத்த பெருமையும், அரிய பேறுமாகும்." },
    { en: "I have also served as the Honorary Editor of Agraharam, a spiritual magazine, and have received awards for my contributions to spiritual writing.",
      ta: "மேலும், ஆன்மீக இதழான ‘அக்ரஹாரம்’ இதழின் கௌரவ ஆசிரியராகவும் பணியாற்றுகிறேன். ஆன்மீக எழுத்துத் துறையில் எனது பங்களிப்பிற்காக பல்வேறு விருதுகளையும் பெற்றுள்ளேன்." },
    { en: "Through my writing and publishing, my aim is to share the knowledge, values, and spiritual heritage of Sanatana Dharma with a wider audience.",
      ta: "சனாதன தர்மத்தின் ஞானம், நற்பண்புகள் மற்றும் ஆன்மீகப் பாரம்பரியத்தைப் பரந்த அளவில் பகிர்ந்து கொள்வதே எனது எழுத்துப் பயணத்தின் நோக்கமாகும்." },
  ],
};

/* ---------------------------------------------------------------------------
   4) THE BOOKS
   Tamil titles are the author's own. English titles are transliterations —
   adjust freely. PRICES ARE PLACEHOLDERS (0 = shows "Price on request");
   set the real price for each book. Add cover images to images/books/.
   --------------------------------------------------------------------------- */
const BOOKS = [
  {
    id: "book-1",
    title: { en: "Uyya Ore Vazhi Udaiyavar Thiruvadi — Sri Yathiraja Vijayam",
             ta: "உய்ய ஒரே வழி உடையவர் திருவடி — ஸ்ரீ யதிராஜ விஜயம்" },
    subtitle: { en: "", ta: "" }, price: 550, cover: "images/books/book-1.jpg", back: "images/books/book-1-back.jpg",
    description: { en: "", ta: "" },
  },
  {
    id: "book-2",
    title: { en: "Bhagavan Nama Sri Bodhendra Saraswathi Swamigal Divya Maha Sat Charitham & Bhagavan Nama Mahimai",
             ta: "பகவன் நாம ஸ்ரீ போதேந்திர ஸரஸ்வதி ஸ்வாமிகள் திவ்ய மஹா ஸத்சரிதம் மற்றும் பகவன் நாம மஹிமை" },
    subtitle: { en: "", ta: "" }, price: 160, cover: "images/books/book-2.jpg",
    description: { en: "", ta: "" },
  },
  {
    id: "book-3",
    title: { en: "Gopala Priya Gomatha", ta: "கோபால ப்ரிய கோமாதா" },
    subtitle: { en: "", ta: "" }, price: 130, cover: "images/books/book-3.jpg", back: "images/books/book-3-back.jpg",
    description: { en: "", ta: "" },
  },
  {
    id: "book-4",
    title: { en: "Sri Karimaran — Sri Nammazhwar Sat Charitham",
             ta: "ஸ்ரீ காரிமாறன் — ஸ்ரீ நம்மாழ்வார் ஸத் சரிதம்" },
    subtitle: { en: "", ta: "" }, price: 250, cover: "images/books/book-4.jpg", back: "images/books/book-4-back.jpg",
    description: { en: "", ta: "" },
  },
  {
    id: "book-5",
    title: { en: "Sri Bhavi Sameera Sri Vadiraja Theertha Guru Sarvabhauma Punya Maha Sat Charitham",
             ta: "ஸ்ரீ பாவி ஸமீர ஸ்ரீ வாதிராஜ தீர்த்த குரு ஸார்வ பௌம புண்ணிய மஹா ஸத்சரிதம்" },
    subtitle: { en: "", ta: "" }, price: 275, cover: "images/books/book-5.jpg", back: "images/books/book-5-back.jpg",
    description: { en: "", ta: "" },
  },
  {
    id: "book-6",
    title: { en: "Apoorva Slokangalum Arputhamana Palangalum",
             ta: "அபூர்வ ஸ்லோகங்களும் அற்புதமான பலன்களும்" },
    subtitle: { en: "", ta: "" }, price: 250, cover: "images/books/book-6.jpg", back: "images/books/book-6-back.jpg",
    description: { en: "", ta: "" },
  },
  {
    id: "book-7",
    title: { en: "Marudanallur Sri Sadguru Swamigal Punya Maha Sat Charitham",
             ta: "மருதாநல்லூர் ஸ்ரீ ஸத்குரு ஸ்வாமிகள் புண்ணிய மஹா ஸத்சரிதம்" },
    subtitle: { en: "", ta: "" }, price: 275, cover: "images/books/book-7.jpg", back: "images/books/book-7-back.jpg",
    description: { en: "", ta: "" },
  },
  {
    id: "book-8",
    title: { en: "Suthanthira Porattathil Veera Brahmanargal",
             ta: "சுதந்திர போராட்டத்தில் வீர பிராமணர்கள்" },
    subtitle: { en: "", ta: "" }, price: 150, cover: "images/books/book-8.jpg", back: "images/books/book-8-back.jpg",
    description: { en: "", ta: "" },
  },
  {
    id: "book-9",
    title: { en: "Vande Guru Parampara — Illustrious Gurus of our Sanatana Dharma",
             ta: "வந்தே குரு பரம்பரா — நமது ஸநாதன தர்மத்தின் கீர்த்திமிக்க குரு மஹநீயர்கள்" },
    subtitle: { en: "", ta: "" }, price: 750, cover: "images/books/book-9.jpg", back: "images/books/book-9-back.jpg",
    description: { en: "", ta: "" },
  },
  {
    id: "book-10",
    title: { en: "Sri Senai Mudalvar Vaibhavam", ta: "ஸ்ரீ சேனை முதல்வர் வைபவம்" },
    subtitle: { en: "", ta: "" }, price: 300, cover: "images/books/book-10.jpg", back: "images/books/book-10-back.jpg",
    description: { en: "", ta: "" },
  },
  {
    id: "book-11",
    title: { en: "Dharma Swaroopan Sri Dharma Sastha", ta: "தர்மஸ்வரூபன் ஸ்ரீ தர்ம சாஸ்தா" },
    subtitle: { en: "", ta: "" }, price: 1000, cover: "images/books/book-11.jpg", back: "images/books/book-11-back.jpg",
    description: { en: "", ta: "" },
  },
  {
    id: "book-12",
    title: { en: "Sri Vedarupi Paramatma (Marai Meetta Maraiporul)",
             ta: "ஸ்ரீ வேதரூபி பரமாத்மா (மறைமீட்ட மறைபொருள்)" },
    subtitle: { en: "", ta: "" }, price: 250, cover: "images/books/book-12.jpg", back: "images/books/book-12-back.jpg",
    description: { en: "", ta: "" },
  },
  {
    id: "book-13",
    title: { en: "Vedha Mudalvan (Siva Nama Mahimai)", ta: "வேத முதல்வன் (சிவநாம மஹிமை)" },
    subtitle: { en: "", ta: "" }, price: 800, cover: "images/books/book-13.jpg", back: "images/books/book-13-back.jpg",
    description: { en: "", ta: "" },
  },
];
