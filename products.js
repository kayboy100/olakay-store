

const PRODUCTS = [
  {
    id: "p1",
    name: "HP EliteBook 840 G5 TOUCHSCREEN Core i7- 16GB RAM/ITB SSD/Backlit Keyboard/FP Reader WIN 11 Pro+BAG",
    brand: "HP",
    price: 670000,
    oldPrice: 750000,
    images: [
      "comHPCard.jpg",
      "comHPCard-1.jpg",
      "comHPCard-2.jpg",
      "comHPCard-3.jpg"
    ],
    rating: 4.2,
    reviews: 65,
    sponsored: false,
    discountPercent: 17,
    description: "Designed for comfort ー Easy to carry from meeting to meeting, the ultrathin and light 14-inch diagonal the  EliteBook 840 G7 with an high-percent screen-to-body ratio. It also includes a new keyboard and clickpad that are quiet and comfortable to work on. Security features from  work together to create an always-on, always-acting, resilient defense. From the BIOS to the browser, above and below the OS, these constantly evolving solutions help protect your PC from threats.",
    descList: [
      "HP EliteBook G5 laptop",
      " AC power adapter + power cord",
      " Quick Start Guide / documentation + warranty card",
      " Protective bag (as per bundle)"
    ],
    descLiNote: ""
  },
  {
    id: "p2",
    name: "Apple Macbook Air 15'' M3 Chip 8GB, 512GB - Starlight",
    brand: "Apple",
    price: 2899000,
    oldPrice: 3500000,
    images: [
      "eCmrceAppleLaptop.jpg",
      "eCmrceAppleLaptop1st.jpg",
      "eCmrceAppleLaptop2nd.jpg",
      "eCmrceAppleLaptop3rd.jpg"
    ],
    rating: 4.0,
    reviews: 5,
    sponsored: true,
    discountPercent: 31,
    description: "Sleek, thin, and powerful — the Apple MacBook Air 15″ with M3 chip delivers the perfect blend of performance and portability. Its large 15.3‑inch Liquid Retina display offers sharp, vibrant visuals ideal for productivity, creative work, streaming or browsing. The fanless design keeps it silent and lightweight, while macOS powers seamless multitasking. Whether for work, school, creative projects or everyday use, this MacBook Air balances portability with the power users need",
    descList: [
      "15‑inch MacBook Air (M3)",
      " 35W Dual USB‑C Power Adapter",
      " USB‑C to MagSafe 3 Cable (2 m)",
      " Documentation / Quick Start Guide"
    ],
    descLiNote: ""
  },
  {
    id: "p3",
    name: "Apple 11-Inch iPad Air Wi-Fi + Cellular 512GB - Space Grey - M2 Chip - 2025",
    brand: "Apple",
    price: 1860999,
    oldPrice: null,
    images: [
      "eCmrceIpad3rd.jpg",
      "eCmrceIpad1st.jpg",
      "eCmrceIpad2nd.jpg",
      "eCmrceIpad.jpg"
    ],
    rating: 3.8,
    reviews: 12,
    sponsored: false,
    discountPercent: 0,
    description: "A compact but powerful tablet that balances portability and high performance. The 11″ iPad Air with M2 chip and 512 GB storage is excellent for productivity, browsing, streaming, creative apps, and on-the-go use thanks to its Wi‑Fi + Cellular capability. Its light, slim design makes it perfect for students, professionals, or anyone needing a powerful tablet for everyday tasks.",
    descList: [
      "iPad Air (11″)",
      " USB‑C charging/data cable",
      " 20W USB‑C Power Adapter",
      " Documentation / Quick Start Guide"
    ],
    descLiNote: ""
  },
  {
    id: "p4",
    name: "Apple iPad Pro 11 M4 - Wi-Fi - 1TB ー Black - 2024",
    brand: "Apple",
    price: 2899999,
    oldPrice: null,
    images: [
      "eCmrceIpad11.jpg",
      "eCmrceIpad2nd.jpg",
      "eCmrceIpad1st.jpg"
    ],
    rating: 4.5,
    reviews: 21,
    sponsored: false,
    discountPercent: null,
    description: "A flagship-level tablet built for high performance — the iPad Pro 11″ with M4 chip and 1 TB storage is perfect for power users, creatives, professionals, or heavy media consumers. Its sleek design, powerful chip, and large storage make editing, multitasking, graphic design, video consumption, and creative workflows smooth and fluid. If you want top-tier tablet performance with maximum flexibility, this iPad Pro is a great choice",
    descList: [
      "iPad Pro 11″ (M4)",
      " USB‑C charging/data cable",
      " USB‑C charging/data cable",
      " 20W USB‑C Power Adapter"
    ],
    descLiNote: ""
  },
  {
    id: "p5",
    name: "Apple iPhone 15 Pro max 6.7'' 512GB Nano-SIM 5G - Natural Titanium",
    brand: "Apple",
    price: 1590000,
    oldPrice: null,
    images: [
      "eCmrceIphone15pro.jpg",
      "eCmrceIphone15pro1st.jpg",
      "eCmrceIphone15pro2nd (1).jpg"
    ],
    rating: 4.1,
    reviews: 8,
    sponsored: false,
    discountPercent: 0,
    description: "The iPhone 15 Pro Max is a flagship smartphone combining top-tier hardware with Apple’s refined design and software. With 512 GB storage, you get ample space for apps, photos, videos and files. Its large 6.7″ display and powerful internals make it excellent for gaming, streaming, productivity, photography and everyday use. Built for performance, convenience and premium feel — this is a phone ready for heavy use.",
    descList: [
      " iPhone 15 Pro Max device",
      " USB‑C charging/data cable",
    ],
    descLiNote: " Power adapter (charger brick) and earphones are not included"
  },
  {
    id: "p6",
    name: "Power Pod OR02IMO FREEPODS Bluetooth Earphones 5 3 Wireless Hearpod Ear Pod / Headphones 5 0 Hear Earpiece Cover Stereo Slide Earpods Airpods Earbududs Pod",
    brand: "Power Pod",
    price: 25000,
    oldPrice: null,
    images: [
      "eCmrceOraimo earpod.jpg"
    ],
    rating: 4.0,
    reviews: 46,
    sponsored: false,
    discountPercent: 0,
    description: "Lightweight and portable true-wireless earbuds ideal for music, calls, commuting, workouts or everyday use. The ORAIMO FreePods deliver wireless convenience and freedom — easy to carry, easy to pair, and easy to use. Great for people who like minimal, compact audio gear instead of bulky headphones.",
    descList: [
      " FreePods earbuds (pair or single earbud, depending on SKU)",
      " Charging / carry case (if applicable)",
      " USB‑C (or micro-USB) charging cable"
    ],
    descLiNote: ""
  },
  {
    id: "p7",
    name: "Jbl |12 Super Bass High Quality Headphone",
    brand: "Jbl",
    price: 15000,
    oldPrice: 40000,
    images: [
      "eCmrceJBLheadset.jpg",
      "eCmrceJblHeadset2nd.jpg"
    ],
    rating: 4.0,
    reviews: 30,
    sponsored: false,
    discountPercent: 62.5,
    description: "A budget-friendly headphone designed for those who enjoy rich bass, music on the go, or long listening sessions. The “Super Bass” branding suggests strong bass response, while the over‑ear or on‑ear design (depending on model) offers comfort for extended listening. Suitable for music lovers, gamers, or daily use — anything from casual listening to work.",
    descList: [
      "JBL |12 headphone unit",
      " USB charging cable (if wireless) or 3.5 mm audio cable (if wired)",
      " User manual / warranty card",
      " Carrying pouch or protective bag (if included by seller / bundle)"
    ],
    descLiNote: ""
  },
  {
    id: "p8",
    name: "Wireless Stereo Earphone Wireless Single Earbud Headphones Earpiece One Ear Earbods Bluetooth Earphones Earpods",
    brand: "Wireless Stereo Earphone",
    price: 7040,
    oldPrice: 11000,
    images: [
      "eCmrceStereoEarpod.jpg"
    ],
    rating: 4.6,
    reviews: 50,
    sponsored: true,
    discountPercent: 36,
    description: "A compact and minimalist solution for hands‑free calls, podcasts or light audio listening. This single‑earbud wireless earphone is great if you want something discreet, easy to carry, and always ready for quick calls or music without the bulk of a full pair. Good for commuters, drivers, or anyone needing simple one‑ear audio functionality.",
    descList: [
      "Single wireless earbud unit",
      " Charging case (if part of the model) or USB charging cable",
      " Extra ear tip(s) (where applicable)",
      " Quick Start Guide / warranty card"
    ],
    descLiNote: ""
  },
  {
    id: "p9",
    name: "Air Max 2 - Wireless Over-Ear Noise Cancellation Headphones With Bluetooth 5.3, TF Card Slot, Built-in Mic, USB-C Charging, Comfortable Cushioned Ear Cups, Gaming Headphone - Compatible With Smartphones & Computers, Modern Headset",
    brand: "Air Max",
    price: 20000,
    oldPrice: 50000,
    images: [
      "eCmrceHeadsets.jpg",
      "eCmrceHeadsets1st.jpg",
      "eCmrceHeadsets2nd.jpg",
      "eCmrceHeadsets3rd.jpg",
      "eCmrceHeadsets4th.jpg"
    ],
    rating: 3,
    reviews: 22,
    sponsored: true,
    discountPercent: 60,
    description: "A feature-packed headphone for those who want immersive sound, mobility, and versatility. With Bluetooth 5.3, over‑ear design, noise cancellation (if supported), and support for TF card (offline playback), the Air Max 2 is ideal for music lovers, travelers, students, or anyone who values flexibility — whether streaming from phone or listening offline. Great balance of convenience and high‑quality listening.",
    descList: [
      "Air Max 2 headphone unit",
      " USB‑C charging cable",
      " AUX (3.5 mm) audio cable (if model supports wired mode)",
      " User manual / warranty card"
    ],
    descLiNote: ""
  },
  {
    id: "p10",
    name: "Samsung Galaxy S22 Ultra 5G- 6.8'' - 256GB ROM, 12GB RAM - Single Sim - Black",
    brand: "Samsung",
    price: 901000,
    oldPrice: 1700000,
    images: [
      "eCmrceSamsungS23.jpg",
      "eCmrceSamsungS22-2nd.jpg"
    ],
    rating: 3.7,
    reviews: 28,
    sponsored: true,
    discountPercent: 60,
    description: "A high-end Android smartphone combining a large, vibrant display with powerful hardware and versatile functionality. With 256 GB storage and 12 GB RAM, it’s built to handle heavy apps, multitasking, photography, gaming, streaming, and productivity. Ideal for users who want a premium Android device with high performance and large storage in a flagship package.",
    descList: [
      "Samsung Galaxy S22 Ultra device",
      " USB‑C charging/data cable",
      " S Pen (if included for your region / SKU)",
      " SIM eject tool + documentation / warranty card"
    ],
    descLiNote: "> ⚠️ Charger adapter / earphones may not be included depending on the region / retail package"
  },
  {
    id: "p11",
    name: "Samsung Galaxy Z Fold 7 8.00' 12GB RAM/256GB ROM Android 16- Black+Free gift",
    brand: "Samsung",
    price: 2700000,
    oldPrice: null,
    images: [
      "eCmrceSamsung vfold.jpg",
      "eCmrceSamsung vfold2nd.jpg"
    ],
    rating: 4.1,
    reviews: 35,
    sponsored: false,
    description: "A premium foldable smartphone offering large, flexible screen real estate with powerful specs — perfect for productivity, multitasking, media consumption, or creative work. The foldable design makes it standout: you get the portability of a phone and the display size of a tablet in one device. With 12 GB RAM and 256 GB storage, it’s built for power users and multitaskers. The included “free gift” makes this bundle even more attractive at purchase.",
    descList: [
      "Galaxy Z Fold 7 device",
      " USB‑C charging/data cable",
      " Quick Start Guide / documentation / SIM eject tool",
      " Free gift (as per your store bundle"
    ],
    descLiNote: ""
  },
  {
    id: "p12",
    name: "HP ProBook 640 G2 Core i5 6th Gen 8GB RAM 500GB HDD",
    brand: "HP",
    price: 200000,
    oldPrice: 250000,
    images: [
      "eCmrceProbooklaptop.jpg",
      "eCmrceProbooklaptop1st.jpg",
      "eCmrceProbooklaptop2nd.jpg",
      "eCmrceProbooklaptop3rd.jpg"
    ],
    rating: 3,
    reviews: 12,
    sponsored: true,
    discountPercent: 20,
    description: "A solid, dependable laptop designed for everyday computing — office work, web browsing, document editing, and light multimedia. With a reliable Intel Core i5 processor, 8 GB RAM and 500 GB HDD, the HP ProBook 640 offers enough performance for typical tasks while remaining budget-friendly. Great for students, professionals on a budget, or anyone needing a functional work laptop.",
    descList: [
      "HP ProBook 640 laptop",
      " AC power adapter + power cord",
      " Quick Start Guide / documentation / warranty card"
    ],
    descLiNote: ""
  },
  // TO BE CONTINUED
  {
    id: 13,
    name: "Kingskartel Kings-Kartel Stylish Zip Up Hoodie & Joggers Pant (Brown And Black)",
    brand: "Kingskartel",
    price: "₦18,550",
    images: [
      "eCf&S cloothes.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 14,
    name: "Men's 2-in-1 Short Sleeved T-shirt And Pants Set - Black",
    brand: "",
    price: "₦9,000",
    images: [
      "ecF&S cloth2.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 15,
    name: "GALUIN 2 Piece Men's Round Neck Short Sleeve Shirt & Shorts -Black",
    brand: "GALUNI",
    price: "₦11,500",
    images: [
      "ecF&S cloth3.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 16,
    name: "Danami Pack Of 3 Plain Sleeveless Hooded T Shirt- Black White & Ash",
    brand: "Danami",
    price: "₦19,999",
    images: [
      "ecF&S coth4.jpg"
    ],
    // ecF&S cloth4.jpg
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 17,
    name: "Dou-color Dou Color Fabric Thick T-shirt Ptriotic Men's Nigerian Flag Printed T-shirt - Black",
    brand: "Dou-color",
    price: "₦4,200",
    images: [
      "ecF&S cloth5.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 18,
    name: "O'Carly Gluta Magic Ultra Whitens serum anti taches - Carrot Extract - 1 bottle",
    brand: "O'Carly",
    price: "₦7,000",
    images: [
      "ecF&S Gluta Magic.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 19,
    name: "kojic White kojic Gluta Papaya Whitening Soap (With Arbutin)x2",
    brand: "Kojic White",
    price: "₦6,555",
    images: [
      "ecF&S kojic sop.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 20,
    name: "Danami Pack Of 3 Plain Sleeveless Hooded T Shirt- Black White & Ash",
    brand: "Danami",
    price: "₦19,999",
    images: [
      "ecF&S cloth4.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 21,
    name: "Nivea Cherry Blossom & Jojoba Oil Infused Body Lotion transforms dry skin into radiant, soft skin with a lovely Cherry Blossom scent.",
    brand: "Nivea",
    price: "₦15,999",
    images: [
      "ecF&S niveaCream.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 22,
    name: "AlRehab Choco Musk Perfume 50ml.",
    brand: "AlRehab",
    price: "₦5,500",
    images: [
      "ecF&S perfume2.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 23,
    name: "MOUSUF- Hand and body lotion ー Approx 1.53 fl.oz",
    brand: "MOUSUF",
    price: "₦7,700",
    images: [
      "ecF&S perfume.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
    id: 24,
    name: "Copaci 24kunisex Perfume 30ml",
    brand: "Copaci",
    price: "₦3,050",
    images: [
      "ecF&S 24K perfume.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
  {
  id: 24,
    name: "Copaci 24kunisex Perfume 30ml",
    brand: "Copci",
    price: "₦3,050",
    images: [
      "ecF&S 24K perfume.jpg"
    ],
    description1: "Step into comfort and performance with ADIDAS WideWalk Sneakers. Designed for all-day wear.",
    description2: "Lightweight, durable, and built with superior grip for both style and function."
  },
];