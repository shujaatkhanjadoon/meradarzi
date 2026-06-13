import {
  Package, Users, CreditCard, Wifi,
  BarChart2, Smartphone, Zap,
  Clock, TrendingUp, Heart, MessageCircle, Globe, CheckCircle2,
  type LucideIcon,
} from 'lucide-react'

export interface FeatureItem {
  icon: LucideIcon
  title: string
  desc: string
  color: string
  bg: string
}

export const FEATURES: FeatureItem[] = [
  {
    icon:  Package,
    title: 'Digital Order Management',
    desc:  'Create & track all orders digitally. Har order safe, har order trackable — kabhi gum nahi.',
    color: 'text-blue-600', bg: 'bg-blue-50',
  },
  {
    icon:  Users,
    title: 'Customer Directory',
    desc:  'Full customer database with order history. Ek tap mein gahak ka sara record — name, phone, total orders.',
    color: 'text-green-600', bg: 'bg-green-50',
  },
  {
    icon:  CreditCard,
    title: 'Advance & Balance Tracking',
    desc: 'Cash, QR scan, Raast ID, Easypaisa, JazzCash — sab payments track karein. Baaki automatically calculate, kabhi confusion nahi.',
    color: 'text-amber-600', bg: 'bg-amber-50',
  },
  {
    icon:  Smartphone,
    title: 'Garment Measurements + Photos',
    desc:  'Salwar kameez, sherwani, kurti — har kapre ke alag nap fields. Photos store karein fabric aur design ki.',
    color: 'text-purple-600', bg: 'bg-purple-50',
  },
  {
    icon:  Wifi,
    title: 'Offline Mode',
    desc:  'Internet band ho to bhi kaam jari rahe. Data automatically sync jab internet aaye.',
    color: 'text-teal-600', bg: 'bg-teal-50',
  },
  {
    icon:  BarChart2,
    title: 'Reports & Analytics',
    desc:  'Monthly income, popular garments, best customers — sab ek jagah. Data se samjhein aur business grow karein.',
    color: 'text-red-600', bg: 'bg-red-50',
  },
  {
    icon:  MessageCircle,
    title: 'WhatsApp Notifications',
    desc:  'Order ready hone par customer ko WhatsApp message. Auto ya manual — aapki marzi.',
    color: 'text-green-600', bg: 'bg-green-50',
  },
  {
    icon:  Globe,
    title: 'Urdu / English Support',
    desc:  'Apni zaban mein kaam karein. Poori tarah English aur Urdu dono mein available.',
    color: 'text-slate-600', bg: 'bg-slate-50',
  },
  {
    icon:  CreditCard,
    title: 'Invoice Generator',
    desc:  'Professional PDF invoices. Gahak ko digital receipt dein — koi paper slip nahi.',
    color: 'text-indigo-600', bg: 'bg-indigo-50',
  },
  {
    icon:  Users,
    title: 'Team (Karigar) Management',
    desc:  'Karigars ko orders assign karein. Har karigar ka workload track karein. Salary reports banayein.',
    color: 'text-emerald-600', bg: 'bg-emerald-50',
  },
  {
    icon:  Package,
    title: 'Customer Tracking Link',
    desc:  'Har order ka unique QR code + link. Gahak khud scan kare aur bina login dekhe order ka status.',
    color: 'text-rose-600', bg: 'bg-rose-50',
  },
  {
    icon:  BarChart2,
    title: 'Bulk Orders',
    desc:  'Ek gahak ke liye ek saath kai orders. Family orders, school uniforms — sab ek jagah.',
    color: 'text-cyan-600', bg: 'bg-cyan-50',
  },
]

export interface USPItem {
  icon: string
  title: string
  desc: string
}

export const USPS: USPItem[] = [
  {
    icon: '🇵🇰',
    title: "Pakistan ka Pehla Tailor-Specific App",
    desc: "Designed for Pakistani tailors, not generic business software — har feature aapki zaroorat ke hisaab se.",
  },
  {
    icon: '🌙',
    title: "Full Urdu Support",
    desc: "Poori tarah Urdu mein istemal karein. Zaban ki rukawat nahi — jo chahein, jis zaban mein chahein.",
  },
  {
    icon: '📴',
    title: "Offline Mode",
    desc: "Pakistan mein network aata jaata rehta hai — MeraDarzi wahi kaam karta hai. Koi order rukta nahi, koi data nahi khota.",
  },
  {
    icon: '🎁',
    title: "Free to Start",
    desc: "Koi credit card nahi, koi commitment nahi. 30 orders/month free — bad mein decide karein.",
  },
  {
    icon: '🔗',
    title: "Customer Tracking Link",
    desc: "Gahak khud order ka status dekh sakta hai. Aapko phone nahi karna padta — woh khud check kare.",
  },
  {
    icon: '👔',
    title: "Garment-Specific Measurements",
    desc: "Kurti, sherwani, shalwar, lehenge — har kapre ke nap alag se set hain. tailor ko koi general form nahi bharna padta.",
  },
  {
    icon: '💰',
    title: "Baaki Payment Tracking",
    desc: "Kitna diya, kitna baaki — auto calculate. Kabhi confusion nahi, kabhi hisaab nahi bigra.",
  },
  {
    icon: '💳',
    title: "Easypaisa / JazzCash / Raast Payments",
    desc: "QR scan, Raast ID, Easypaisa, JazzCash — Pakistani payment methods. No international cards needed — jo aap roz use karte hain, wohi.",
  },
  {
    icon: '📱',
    title: "PWA — No App Store Needed",
    desc: "Browser se directly mobile par install karein. Play Store ki zaroorat nahi, storage bhi free.",
  },
]

export interface StepItem {
  num: string
  icon: LucideIcon
  title: string
  desc: string
  color: string
}

export const STEPS: StepItem[] = [
  {
    num:   '01',
    icon:  Smartphone,
    title: 'Free Account Banayein',
    desc:  'Phone number daalein, dukaan ka naam likhein. 2 minute mein ready. Koi credit card nahi chahiye.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    num:   '02',
    icon:  Package,
    title: 'Orders Add Karein',
    desc:  'Gahak ki nap, kapra details, delivery date, photos — sab ek form mein fill karein.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    num:   '03',
    icon:  Users,
    title: 'Karigar Ko Assign Karein',
    desc:  'Kaunsa karigar kya karega? Assign karein aur progress track karein.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    num:   '04',
    icon:  CheckCircle2,
    title: 'Delivery & Customer Tracking',
    desc:  'Customer ko QR/link dein. Woh khud status check karein. Payment ho, order complete.',
    color: 'from-green-500 to-green-600',
  },
]

export interface BenefitItem {
  icon: LucideIcon
  title: string
  desc: string
  color: string
  bg: string
}

export const BENEFITS: BenefitItem[] = [
  {
    icon:  Clock,
    title: 'Waqt Bachayein',
    desc:  'Diary aur register ki zaroorat nahi. Orders aur payments digital ho jayein. Koi paper slip gum nahi hogi.',
    color: 'text-blue-600', bg: 'bg-blue-100',
  },
  {
    icon:  TrendingUp,
    title: 'Business Grow Karein',
    desc:  'Data se samjhein kya popular hai, kaun best karigar hai, kab income zyada hoti hai. Reports se seekhein.',
    color: 'text-green-600', bg: 'bg-green-100',
  },
  {
    icon:  Heart,
    title: 'Customers Ko Khush Rakhein',
    desc:  'QR tracking link se customers khud order status check karein. Aap ko phone call nahi karna padega.',
    color: 'text-red-600', bg: 'bg-red-100',
  },
  {
    icon:  Zap,
    title: 'Mobile PWA — No App Store',
    desc:  'Browser se directly mobile par install karein. Play Store ki zaroorat nahi. Android, iPhone sab par chale.',
    color: 'text-amber-600', bg: 'bg-amber-100',
  },
]

export interface TestimonialItem {
  name: string
  role: string
  avatar: string
  color: string
  rating: number
  text: string
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name:   'Ahmed Raza',
    role:   'Owner, Ahmed Tailor House, Lahore',
    avatar: 'A',
    color:  'bg-blue-500',
    rating: 5,
    text:   'Pehle roz subah diary dhundta tha. Ab sab phone pe hai. Customers bhi khush hain — QR se khud status check karte hain.',
  },
  {
    name:   'Muhammad Rashid',
    role:   'Master Darzi, Karachi',
    avatar: 'R',
    color:  'bg-green-500',
    rating: 5,
    text:   'Meri dukaan mein 5 karigar hain. Pehle confusion hoti thi kaun kya kar raha hai. Ab sab clear hai. Highly recommended!',
  },
  {
    name:   'Asif Tailors',
    role:   'Boutique, Faisalabad',
    avatar: 'T',
    color:  'bg-purple-500',
    rating: 5,
    text:   'Reports dekhna shuru kiya to pata chala Sherwani sabse zyada order hoti hai. Business strategy change kar li. Mera Darzi ne meri dukaan badal di!',
  },
  {
    name:   'Khalid Bhai',
    role:   'Solo Tailor, Rawalpindi',
    avatar: 'K',
    color:  'bg-amber-500',
    rating: 5,
    text:   'Free plan hi mera kaam chal jata hai. 30 orders per month, sab track. Internet nahi hota to offline bhi kaam karta hai. Bohat acha hai!',
  },
]

export interface FAQItem {
  q: string
  a: string
}

export const FAQS: FAQItem[] = [
  {
    q: 'MeraDarzi kya hai?',
    a: 'MeraDarzi Pakistan ka tailor management app hai jo tailor shops, boutiques aur darzi ki dukano ko digital banata hai. Orders, gahak, payments aur karigar — sab ek app mein manage karein.',
  },
  {
    q: 'Kya yeh app bilkul free hai?',
    a: 'Haan! 🌱 Starter plan hamesha free hai — 30 orders/month, 50 customers, measurements aur payments track karein. Zyada orders aur features ke liye ⭐ Professional ya 👑 Business plan lein.',
  },
  {
    q: 'Agar internet nahi ho to kya hoga?',
    a: 'App offline bhi kaam karta hai. Sab data locally save hota hai. Jab internet aaye, automatically sync ho jata hai.',
  },
  {
    q: 'Customers order kaise track karte hain?',
    a: 'Har order ka unique QR code hota hai. Customer QR scan kare ya tracking link khole — real-time status dikhe ga without any login. Aap ko phone call nahi karna padega.',
  },
  {
    q: 'Kya yeh mobile app hai? Play Store pe milega?',
    a: 'MeraDarzi ek Progressive Web App (PWA) hai. Aap browser se directly mobile phone par install kar sakte hain — Play Store ki zaroorat nahi. Android aur iPhone dono pe kaam karta hai.',
  },
  {
    q: 'Kya yeh Urdu mein chal sakta hai?',
    a: 'Jee haan! MeraDarzi poori tarah English aur Urdu dono mein available hai. Aap apni pasand ki zaban choose kar sakte hain.',
  },
  {
    q: 'Kya ek se zyada device pe use kar sakte hain?',
    a: 'Ek shop account ek hi phone par chalta hai. Agar device change karna hai to naye phone par PIN se login karein, purana apne aap logout ho jayega — data safe aur sync rahega.',
  },
  {
    q: 'Data safe hai? Koi aur dekh to nahi sakta?',
    a: 'Bilkul safe. Aapka data sirf aapka hai. Supabase cloud server par encrypted store hota hai. Hum kabhi data share nahi karte.',
  },
  {
    q: 'Pakistan mein payment kaise karein?',
    a: 'QR scan, Raast ID, Easypaisa aur JazzCash — sab available hain. Raast ID se zero transaction fee. Payment screenshot submit karein ya QR scan karein, admin verify kare ga aur subscription active ho jayegi. Professional Rs. 499/month ya Rs. 4,999/year. Business Rs. 999/month ya Rs. 9,999/year. Yearly plan mein 2 months free — sirf 10 months ki payment!',
  },
  {
    q: 'Kya mobile number ke bina chal sakta hai?',
    a: 'Nahi, shop registration ke liye Pakistani mobile number zaroori hai. Yeh security aur account recovery ke liye hai.',
  },
  {
    q: 'Kaise login karein?',
    a: 'Apna mobile number enter karein, OTP verify karein, aur apna 6-digit PIN set karein. Har baar login PIN se hoga.',
  },
  {
    q: 'Kya data export kar sakte hain?',
    a: 'Haan! Aap apne orders aur customers ka data CSV format mein export kar sakte hain. Orders ke PDF invoices bhi bana sakte hain.',
  },
  {
    q: 'Plan upgrade kaise karein?',
    a: 'Settings > Billing mein ja kar upgrade button se koi bhi plan choose kar sakte hain. Difference amount ka prorata calculate ho ga.',
  },
  {
    q: 'Cancel kaise karein?',
    a: 'Settings > Billing > Cancel Subscription se cancel kar sakte hain. Aap current billing period ke end tak services use kar sakte hain.',
  },
]
