export interface City {
  name: string
  slug: string
  province: string
  shops: string
  description: string
  keywords: string[]
}

export const CITIES: City[] = [
  {
    name: "Lahore",
    slug: "lahore",
    province: "Punjab",
    shops: "200+",
    description:
      "Mera Darzi is the best tailor management software in Lahore. Manage your darzi shop, boutique, or tailoring business digitally. Orders track karein, customers manage karein, karigars assign karein — sab ek app mein.",
    keywords: [
      "tailor management software Lahore",
      "darzi app Lahore",
      "boutique management software Lahore",
      "tailor shop software Lahore",
      "tailoring business software Lahore",
      "order management for tailors Lahore",
    ],
  },
  {
    name: "Karachi",
    slug: "karachi",
    province: "Sindh",
    shops: "300+",
    description:
      "Mera Darzi is Karachi's trusted tailor management app. From Saddar to Gulshan, tailors and boutiques manage orders, measurements, and payments digitally. Offline support — internet ke bina bhi kaam kare.",
    keywords: [
      "tailor management software Karachi",
      "darzi app Karachi",
      "boutique management software Karachi",
      "tailor shop software Karachi",
      "tailoring business software Karachi",
      "order management for tailors Karachi",
    ],
  },
  {
    name: "Islamabad",
    slug: "islamabad",
    province: "Islamabad Capital Territory",
    shops: "100+",
    description:
      "Mera Darzi is the leading tailor management software in Islamabad. Perfect for darzis, fashion boutiques, and garment shops in the capital city. QR-based order tracking, WhatsApp integration, and offline support.",
    keywords: [
      "tailor management software Islamabad",
      "darzi app Islamabad",
      "boutique management software Islamabad",
      "tailor shop software Islamabad",
      "tailoring business software Islamabad",
    ],
  },
  {
    name: "Rawalpindi",
    slug: "rawalpindi",
    province: "Punjab",
    shops: "100+",
    description:
      "Mera Darzi helps Rawalpindi tailors manage their shops digitally. Order tracking, customer measurements, karigar management, and payment tracking — sab ek app mein. Free plan available for small shops.",
    keywords: [
      "tailor management software Rawalpindi",
      "darzi app Rawalpindi",
      "tailor shop software Rawalpindi",
      "tailoring business software Rawalpindi",
      "boutique management Rawalpindi",
    ],
  },
  {
    name: "Faisalabad",
    slug: "faisalabad",
    province: "Punjab",
    shops: "150+",
    description:
      "Mera Darzi is the best tailor shop management system in Faisalabad. Manage stitching orders, customer measurements, payments, and karigar assignments digitally. Free trial available.",
    keywords: [
      "tailor management software Faisalabad",
      "darzi app Faisalabad",
      "boutique management software Faisalabad",
      "tailor shop software Faisalabad",
      "stitching order management Faisalabad",
    ],
  },
  {
    name: "Peshawar",
    slug: "peshawar",
    province: "Khyber Pakhtunkhwa",
    shops: "80+",
    description:
      "Mera Darzi is Peshawar's preferred tailor management solution. Manage your tailoring business digitally with our easy-to-use app. Offline support, QR tracking, and WhatsApp integration included.",
    keywords: [
      "tailor management software Peshawar",
      "darzi app Peshawar",
      "tailor shop software Peshawar",
      "tailoring business software Peshawar",
      "boutique management software Peshawar",
    ],
  },
  {
    name: "Multan",
    slug: "multan",
    province: "Punjab",
    shops: "70+",
    description:
      "Mera Darzi helps Multan tailors and boutiques go digital. Order management, customer measurement records, payment tracking, and karigar assignment — all in one app. Free plan available.",
    keywords: [
      "tailor management software Multan",
      "darzi app Multan",
      "boutique management software Multan",
      "tailor shop software Multan",
      "tailoring business software Multan",
    ],
  },
  {
    name: "Gujranwala",
    slug: "gujranwala",
    province: "Punjab",
    shops: "50+",
    description:
      "Mera Darzi is the leading tailor management app in Gujranwala. Perfect for darzis and boutique owners. Manage orders offline, track payments, and keep customers updated with QR tracking.",
    keywords: [
      "tailor management software Gujranwala",
      "darzi app Gujranwala",
      "tailor shop software Gujranwala",
      "boutique management Gujranwala",
    ],
  },
  {
    name: "Sialkot",
    slug: "sialkot",
    province: "Punjab",
    shops: "40+",
    description:
      "Mera Darzi serves Sialkot's tailoring community with a comprehensive digital management solution. Order tracking, customer management, and karigar coordination made simple.",
    keywords: [
      "tailor management software Sialkot",
      "darzi app Sialkot",
      "tailor shop software Sialkot",
      "boutique management Sialkot",
    ],
  },
  {
    name: "Quetta",
    slug: "quetta",
    province: "Balochistan",
    shops: "30+",
    description:
      "Mera Darzi brings digital tailor management to Quetta. Manage orders, customers, and payments offline-first. Works without internet and syncs when connected. Free plan available.",
    keywords: [
      "tailor management software Quetta",
      "darzi app Quetta",
      "tailor shop software Quetta",
      "tailoring business software Quetta",
    ],
  },
  {
    name: "Hyderabad",
    slug: "hyderabad-sindh",
    province: "Sindh",
    shops: "40+",
    description:
      "Mera Darzi helps Hyderabad tailors digitize their business. Order management, customer measurements, payment tracking, and karigar assignment in one easy app. Urdu and English support.",
    keywords: [
      "tailor management software Hyderabad",
      "darzi app Hyderabad Sindh",
      "boutique management software Hyderabad",
      "tailor shop software Hyderabad",
    ],
  },
  {
    name: "Bahawalpur",
    slug: "bahawalpur",
    province: "Punjab",
    shops: "30+",
    description:
      "Mera Darzi is the best tailor management app in Bahawalpur. Manage your tailoring shop, customer measurements, and stitching orders digitally. Free plan available for small businesses.",
    keywords: [
      "tailor management software Bahawalpur",
      "darzi app Bahawalpur",
      "tailor shop software Bahawalpur",
      "boutique management Bahawalpur",
    ],
  },
  {
    name: "Gujrat",
    slug: "gujrat",
    province: "Punjab",
    shops: "25+",
    description:
      "Mera Darzi helps Gujrat's tailors and boutiques go digital. Order management, customer records, payment tracking, and karigar assignment in one easy-to-use app. Offline support included.",
    keywords: [
      "tailor management software Gujrat",
      "darzi app Gujrat",
      "tailor shop software Gujrat",
      "boutique management Gujrat",
    ],
  },
  {
    name: "Sahiwal",
    slug: "sahiwal",
    province: "Punjab",
    shops: "20+",
    description:
      "Mera Darzi brings digital tailor management to Sahiwal. Manage orders, customer measurements, and payments with our offline-first app. Perfect for darzis and boutique owners.",
    keywords: [
      "tailor management software Sahiwal",
      "darzi app Sahiwal",
      "tailor shop software Sahiwal",
      "tailoring business software Sahiwal",
    ],
  },
  {
    name: "Sukkur",
    slug: "sukkur",
    province: "Sindh",
    shops: "20+",
    description:
      "Mera Darzi serves Sukkur's tailoring community with a comprehensive digital management solution. Manage stitching orders, customers, and karigars offline. Free trial available.",
    keywords: [
      "tailor management software Sukkur",
      "darzi app Sukkur",
      "tailor shop software Sukkur",
      "boutique management Sukkur",
    ],
  },
  {
    name: "Larkana",
    slug: "larkana",
    province: "Sindh",
    shops: "15+",
    description:
      "Mera Darzi helps Larkana tailors digitize their business. Customer management, order tracking, payment records — sab ek app mein. Works without internet, syncs when connected.",
    keywords: [
      "tailor management software Larkana",
      "darzi app Larkana",
      "tailor shop software Larkana",
      "tailoring business software Larkana",
    ],
  },
  {
    name: "Abbottabad",
    slug: "abbottabad",
    province: "Khyber Pakhtunkhwa",
    shops: "15+",
    description:
      "Mera Darzi is Abbottabad's go-to tailor management app. Manage your darzi shop with offline support, QR-based order tracking, and WhatsApp integration. Urdu aur English dono mein available.",
    keywords: [
      "tailor management software Abbottabad",
      "darzi app Abbottabad",
      "tailor shop software Abbottabad",
      "boutique management Abbottabad",
    ],
  },
  {
    name: "Mardan",
    slug: "mardan",
    province: "Khyber Pakhtunkhwa",
    shops: "15+",
    description:
      "Mera Darzi brings digital tailor management to Mardan. Manage orders, customer measurements, payments, and karigar assignments in one easy app. Free plan for small shops.",
    keywords: [
      "tailor management software Mardan",
      "darzi app Mardan",
      "tailor shop software Mardan",
      "tailoring business software Mardan",
    ],
  },
  {
    name: "Dera Ghazi Khan",
    slug: "dera-ghazi-khan",
    province: "Punjab",
    shops: "15+",
    description:
      "Mera Darzi helps Dera Ghazi Khan tailors manage their shops digitally. Stitching orders, customer measurements, payment tracking, and karigar assignment in one app. Free trial available.",
    keywords: [
      "tailor management software Dera Ghazi Khan",
      "darzi app Dera Ghazi Khan",
      "tailor shop software Dera Ghazi Khan",
      "tailoring business software Dera Ghazi Khan",
    ],
  },
  {
    name: "Rahim Yar Khan",
    slug: "rahim-yar-khan",
    province: "Punjab",
    shops: "15+",
    description:
      "Mera Darzi serves Rahim Yar Khan's tailoring community with a comprehensive digital solution. Order management, customer records, and payment tracking made simple. Offline support included.",
    keywords: [
      "tailor management software Rahim Yar Khan",
      "darzi app Rahim Yar Khan",
      "tailor shop software Rahim Yar Khan",
      "boutique management Rahim Yar Khan",
    ],
  },
  {
    name: "Swat",
    slug: "swat",
    province: "Khyber Pakhtunkhwa",
    shops: "10+",
    description:
      "Mera Darzi brings modern tailor management to Swat. Manage your tailoring business with offline-first technology. Customer measurements, order tracking, and payments — sab digital.",
    keywords: [
      "tailor management software Swat",
      "darzi app Swat",
      "tailor shop software Swat",
      "tailoring business Swat",
    ],
  },
  {
    name: "Kohat",
    slug: "kohat",
    province: "Khyber Pakhtunkhwa",
    shops: "10+",
    description:
      "Mera Darzi helps Kohat tailors go digital. Order management, customer measurement records, payment tracking, and karigar assignment — all in one app designed for Pakistani darzis.",
    keywords: [
      "tailor management software Kohat",
      "darzi app Kohat",
      "tailor shop software Kohat",
      "tailoring business software Kohat",
    ],
  },
  {
    name: "Mirpur Khas",
    slug: "mirpur-khas",
    province: "Sindh",
    shops: "10+",
    description:
      "Mera Darzi serves Mirpur Khas with a complete tailor management solution. Manage orders offline, track payments, and keep customers updated with QR tracking. Free plan available.",
    keywords: [
      "tailor management software Mirpur Khas",
      "darzi app Mirpur Khas",
      "tailor shop software Mirpur Khas",
      "boutique management Mirpur Khas",
    ],
  },
  {
    name: "Nawabshah",
    slug: "nawabshah",
    province: "Sindh",
    shops: "10+",
    description:
      "Mera Darzi helps Nawabshah's tailors and boutiques digitize their business. Customer management, order tracking, and payment records in one easy app. Urdu and English support.",
    keywords: [
      "tailor management software Nawabshah",
      "darzi app Nawabshah",
      "tailor shop software Nawabshah",
      "tailoring business software Nawabshah",
    ],
  },
  {
    name: "Okara",
    slug: "okara",
    province: "Punjab",
    shops: "10+",
    description:
      "Mera Darzi brings digital tailor management to Okara. Manage your darzi shop with offline support, order tracking, and customer management. Free plan available for small businesses.",
    keywords: [
      "tailor management software Okara",
      "darzi app Okara",
      "tailor shop software Okara",
      "boutique management Okara",
    ],
  },
  {
    name: "Sheikhupura",
    slug: "sheikhupura",
    province: "Punjab",
    shops: "10+",
    description:
      "Mera Darzi serves Sheikhupura's tailors with a comprehensive digital management solution. Order tracking, customer measurements, payment management — sab ek app mein. Start free today.",
    keywords: [
      "tailor management software Sheikhupura",
      "darzi app Sheikhupura",
      "tailor shop software Sheikhupura",
      "tailoring business software Sheikhupura",
    ],
  },
  {
    name: "Nowshera",
    slug: "nowshera",
    province: "Khyber Pakhtunkhwa",
    shops: "10+",
    description:
      "Mera Darzi helps Nowshera tailors manage their shops digitally. Order tracking, customer measurements, payment management, and karigar assignment in one app. Offline support included.",
    keywords: [
      "tailor management software Nowshera",
      "darzi app Nowshera",
      "tailor shop software Nowshera",
      "tailoring business software Nowshera",
    ],
  },
  {
    name: "Charsadda",
    slug: "charsadda",
    province: "Khyber Pakhtunkhwa",
    shops: "10+",
    description:
      "Mera Darzi brings digital tailor management to Charsadda. Manage orders, customer measurements, and payments with offline-first technology. Free plan available for small shops.",
    keywords: [
      "tailor management software Charsadda",
      "darzi app Charsadda",
      "tailor shop software Charsadda",
      "tailoring business software Charsadda",
    ],
  },
  {
    name: "Gwadar",
    slug: "gwadar",
    province: "Balochistan",
    shops: "10+",
    description:
      "Mera Darzi serves Gwadar's tailoring community with a complete digital management solution. Manage orders offline, track payments, and keep customers updated with QR tracking.",
    keywords: [
      "tailor management software Gwadar",
      "darzi app Gwadar",
      "tailor shop software Gwadar",
      "tailoring business software Gwadar",
    ],
  },
  {
    name: "Turbat",
    slug: "turbat",
    province: "Balochistan",
    shops: "5+",
    description:
      "Mera Darzi brings tailor management to Turbat. Manage your darzi shop with offline support, order tracking, and customer management. Urdu and English support included.",
    keywords: [
      "tailor management software Turbat",
      "darzi app Turbat",
      "tailor shop software Turbat",
      "tailoring business software Turbat",
    ],
  },
  {
    name: "Khairpur",
    slug: "khairpur",
    province: "Sindh",
    shops: "10+",
    description:
      "Mera Darzi helps Khairpur's tailors digitize their business. Customer management, order tracking, payment records — sab ek app mein. Works without internet and syncs when connected.",
    keywords: [
      "tailor management software Khairpur",
      "darzi app Khairpur",
      "tailor shop software Khairpur",
      "tailoring business software Khairpur",
    ],
  },
  {
    name: "Jhelum",
    slug: "jhelum",
    province: "Islamabad Capital Territory",
    shops: "10+",
    description:
      "Mera Darzi serves Jhelum's tailors with a comprehensive digital management solution. Order tracking, customer measurements, payment management, and karigar coordination made simple.",
    keywords: [
      "tailor management software Jhelum",
      "darzi app Jhelum",
      "tailor shop software Jhelum",
      "boutique management Jhelum",
    ],
  },
  {
    name: "Attock",
    slug: "attock",
    province: "Islamabad Capital Territory",
    shops: "5+",
    description:
      "Mera Darzi helps Attock tailors go digital. Order management, customer measurement records, payment tracking, and karigar assignment in one easy app. Free plan available.",
    keywords: [
      "tailor management software Attock",
      "darzi app Attock",
      "tailor shop software Attock",
      "tailoring business software Attock",
    ],
  },
  {
    name: "Taxila",
    slug: "taxila",
    province: "Islamabad Capital Territory",
    shops: "5+",
    description:
      "Mera Darzi serves Taxila's tailoring community with a complete digital management solution. Order tracking, customer measurements, and payment management made simple.",
    keywords: [
      "tailor management software Taxila",
      "darzi app Taxila",
      "tailor shop software Taxila",
      "tailoring business Taxila",
    ],
  },
  {
    name: "Wah Cantt",
    slug: "wah-cantt",
    province: "Islamabad Capital Territory",
    shops: "5+",
    description:
      "Mera Darzi helps Wah Cantt tailors digitize their business. Customer management, order tracking, payment records — sab ek app mein. Works without internet and syncs when connected.",
    keywords: [
      "tailor management software Wah Cantt",
      "darzi app Wah Cantt",
      "tailor shop software Wah Cantt",
      "tailoring business Wah Cantt",
    ],
  },
  {
    name: "Khanewal",
    slug: "khanewal",
    province: "Punjab",
    shops: "10+",
    description:
      "Mera Darzi helps Khanewal tailors manage their shops digitally. Order tracking, customer measurements, payment management, and karigar assignment in one easy app.",
    keywords: [
      "tailor management software Khanewal",
      "darzi app Khanewal",
      "tailor shop software Khanewal",
      "tailoring business software Khanewal",
    ],
  },
  {
    name: "Sargodha",
    slug: "sargodha",
    province: "Punjab",
    shops: "50+",
    description:
      "Mera Darzi serves Sargodha's tailoring community with digital management. Order tracking, customer measurements, payment records, and karigar coordination — sab ek app mein. Free plan available.",
    keywords: [
      "tailor management software Sargodha",
      "darzi app Sargodha",
      "tailor shop software Sargodha",
      "tailoring business software Sargodha",
    ],
  },
  {
    name: "Kasur",
    slug: "kasur",
    province: "Punjab",
    shops: "20+",
    description:
      "Mera Darzi helps Kasur tailors digitize their business. Customer management, order tracking, payment records — sab ek app mein. Works without internet and syncs when connected.",
    keywords: [
      "tailor management software Kasur",
      "darzi app Kasur",
      "tailor shop software Kasur",
      "tailoring business software Kasur",
    ],
  },
  {
    name: "Jhang",
    slug: "jhang",
    province: "Punjab",
    shops: "20+",
    description:
      "Mera Darzi brings digital tailor management to Jhang. Manage orders, customer measurements, payments, and karigar assignment with offline-first technology. Free plan available.",
    keywords: [
      "tailor management software Jhang",
      "darzi app Jhang",
      "tailor shop software Jhang",
      "tailoring business software Jhang",
    ],
  },
  {
    name: "Toba Tek Singh",
    slug: "toba-tek-singh",
    province: "Punjab",
    shops: "10+",
    description:
      "Mera Darzi serves Toba Tek Singh's tailors with a complete digital management solution. Order tracking, customer measurements, payment management, and karigar coordination made simple.",
    keywords: [
      "tailor management software Toba Tek Singh",
      "darzi app Toba Tek Singh",
      "tailor shop software Toba Tek Singh",
      "tailoring business software Toba Tek Singh",
    ],
  },
  {
    name: "Dera Ismail Khan",
    slug: "dera-ismail-khan",
    province: "Khyber Pakhtunkhwa",
    shops: "10+",
    description:
      "Mera Darzi brings digital tailor management to Dera Ismail Khan. Manage orders, customer measurements, and payments with offline-first technology. Free plan available.",
    keywords: [
      "tailor management software Dera Ismail Khan",
      "darzi app Dera Ismail Khan",
      "tailor shop software Dera Ismail Khan",
      "tailoring business software Dera Ismail Khan",
    ],
  },
  {
    name: "Mansehra",
    slug: "mansehra",
    province: "Khyber Pakhtunkhwa",
    shops: "10+",
    description:
      "Mera Darzi serves Mansehra's tailoring community with a complete digital management solution. Order tracking, customer management, and payment records made simple.",
    keywords: [
      "tailor management software Mansehra",
      "darzi app Mansehra",
      "tailor shop software Mansehra",
      "tailoring business software Mansehra",
    ],
  },
  {
    name: "Badin",
    slug: "badin",
    province: "Sindh",
    shops: "5+",
    description:
      "Mera Darzi helps Badin tailors digitize their business. Customer management, order tracking, payment records — sab ek app mein. Works without internet and syncs when connected.",
    keywords: [
      "tailor management software Badin",
      "darzi app Badin",
      "tailor shop software Badin",
      "tailoring business software Badin",
    ],
  },
  {
    name: "Jacobabad",
    slug: "jacobabad",
    province: "Sindh",
    shops: "5+",
    description:
      "Mera Darzi brings tailor management to Jacobabad. Manage your darzi shop with offline support, order tracking, and customer management. Free plan available.",
    keywords: [
      "tailor management software Jacobabad",
      "darzi app Jacobabad",
      "tailor shop software Jacobabad",
      "tailoring business software Jacobabad",
    ],
  },
]

export const CITIES_BY_PROVINCE = CITIES.reduce(
  (acc, city) => {
    acc[city.province] = acc[city.province] ?? []
    acc[city.province].push(city)
    return acc
  },
  {} as Record<string, City[]>,
)

export const PROVINCES = Object.keys(CITIES_BY_PROVINCE)
