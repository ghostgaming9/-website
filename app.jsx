import React, { useState, useEffect } from 'react';
import { Search, Menu, Gamepad2, Plus, Minus, CheckCircle, ChevronLeft, Sparkles, Zap, ShieldCheck, Globe, Home, Crosshair, Eye, Settings, Youtube, ExternalLink, Copy, Send, MapPin } from 'lucide-react';

// --- ICONS DEFINITIONS ---

const DiscordIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/></svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

const TelegramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.293-.605.293l.214-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.962-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.942z"/></svg>
);

const AndroidIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.6 11.48 L 19.44 8.3a0.63 0.63 0 0 0-1.09-0.63l-1.87 3.23C14.96 10.22 13.06 9.88 11.02 9.88s-3.94 0.34-5.46 1.02L3.69 7.67a0.63 0.63 0 0 0-1.09 0.63L4.44 11.48c-2.7 1.98-4.44 5.16-4.44 8.76h22.04c0-3.6-1.74-6.78-4.44-8.76z M7.52 17.52a1.26 1.26 0 1 1 1.26-1.26 1.26 1.26 0 0 1-1.26 1.26z m7.02 0a1.26 1.26 0 1 1 1.26-1.26 1.26 1.26 0 0 1-1.26 1.26z"/></svg>
);
const AppleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 384 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
);
const FeatureCheckIcon = ({ className }) => (
  <div className={`relative flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-b from-[#86efac] to-[#4ade80] animate-flash ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" stroke="#064e3b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
);

// --- Default Cheat Features ---
const DEFAULT_CHEAT_FEATURES = {
  aimbot: [
    "Aim On/Off", "Customizable Aimbot Key", "FOV Slider", "Aim Bone Selector",
    "Multiple Aim Bones", "Aimbot Speed", "Silent Aimbot (Magic Bullet)",
    "Visibility Check", "No Recoil", "No Sway"
  ],
  esp: [
    "Enemy Box ESP", "Enemy Line", "Enemy Distance", "Enemy Health Bar",
    "Enemy Name", "Team ESP", "Skeleton ESP", "Charms", "Item ESP",
    "Item Filters", "Loot ESP", "Knocked Out Text"
  ],
  misc: [
    "Fast Reload", "Rapid Fire", "Super Jump", "Speed Hack", "Anti-Ban", "Stream Proof"
  ]
};

// --- Updated Product Data ---
const GAMES_DATA = [
  {
    id: 1,
    title: "BLOOD STRIKE",
    category: "Action",
    gameName: "BLOOD STRIKE",
    status: "UNDETECTED",
    rating: 4.9,
    image: "https://i.imgur.com/L32cKb7.jpeg",
    gallery: ["https://i.imgur.com/8OHT8qd.jpeg", "https://i.imgur.com/eLBVrKg.jpeg", "https://i.imgur.com/IuqHfUG.jpeg"],
    description: "Dominate the battlefield with our premium Blood Strike cheats. Aimbot, ESP, and more.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 15.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 35.00, inStock: true },
      { id: '2months', name: '2 MONTHS', price: 60.00, inStock: true }
    ]
  },
  {
    id: 2,
    title: "PUBG MOBILE",
    category: "Battle Royale",
    gameName: "PUBG M",
    status: "UNDETECTED",
    rating: 4.8,
    image: "https://i.imgur.com/sMoFydW.jpeg",
    gallery: ["https://placehold.co/800x600/1e293b/fbbf24?text=Chicken+Dinner", "https://placehold.co/800x600/0f172a/f59e0b?text=ESP", "https://placehold.co/800x600/0f172a/d97706?text=Aimbot", "https://placehold.co/800x600/1e293b/fbbf24?text=Vehicles", "https://placehold.co/800x600/0f172a/fcd34d?text=Loot"],
    description: "Get that Chicken Dinner easily. Safe and secure PUBG Mobile hacks for Android & iOS.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 20.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 45.00, inStock: true },
      { id: '2months', name: '2 MONTHS', price: 70.00, inStock: true }
    ]
  },
  {
    id: 3,
    title: "VALORANT MOBILE",
    category: "Action",
    gameName: "VALORANT",
    status: "BETA",
    rating: 4.7,
    image: "https://i.imgur.com/22ciArz.jpeg", 
    gallery: ["https://i.imgur.com/xIH4Uj3.jpeg", "https://i.imgur.com/RC664LV.jpeg", "https://i.imgur.com/TKdGTDl.jpeg"],
    description: "Be the MVP in every match. Early access cheats for Valorant Mobile.",
    features: DEFAULT_CHEAT_FEATURES,
    video: "ULYT7iXpC-w", 
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 25.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 50.00, inStock: true },
    ]
  },
  {
    id: 4,
    title: "FARLIGHT 84",
    category: "Battle Royale",
    gameName: "FARLIGHT",
    status: "UNDETECTED",
    rating: 4.6,
    image: "https://i.imgur.com/T7jOTcN.jpeg",
    gallery: ["https://placehold.co/800x600/111827/22d3ee?text=Jetpack", "https://placehold.co/800x600/083344/06b6d4?text=Hero", "https://placehold.co/800x600/164e63/67e8f9?text=Skills", "https://placehold.co/800x600/0e7490/cffafe?text=Map", "https://placehold.co/800x600/155e75/a5f3fc?text=Victory"],
    description: "Futuristic battle royale hacks. Fly high and shoot straight.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 18.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 40.00, inStock: true },
    ]
  },
  {
    id: 5,
    title: "DELTA FORCE",
    category: "Action",
    gameName: "DELTA",
    status: "NEW",
    rating: 4.9,
    image: "https://i.imgur.com/fSzodaN.jpeg",
    gallery: ["https://i.imgur.com/myE2jB5.jpeg", "https://i.imgur.com/rQdiFCh.jpeg", "https://i.imgur.com/BzAcaSi.jpeg"],
    description: "Tactical shooter advantages. See enemies through walls and aim assist.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 22.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 48.00, inStock: true },
    ]
  },
  {
    id: 6,
    title: "FORTNITE MOBILE",
    category: "Battle Royale",
    gameName: "FORTNITE",
    status: "UNDETECTED",
    image: "https://i.imgur.com/fe1h511.jpeg",
    gallery: [
      "https://i.imgur.com/2Qcm5HF.jpeg",
      "https://i.imgur.com/IabJTx4.jpeg",
      "https://i.imgur.com/SSIiyY1.jpeg"
    ],
    rating: 4.8,
    description: "Build and shoot with precision. Undetected cheats for Fortnite on mobile devices.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 20.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 45.00, inStock: true },
      { id: '2months', name: '2 MONTHS', price: 70.00, inStock: true }
    ]
  },
  {
    id: 7,
    title: "CALL OF DUTY MOBILE",
    category: "Action",
    gameName: "COD M",
    status: "UNDETECTED",
    rating: 4.9,
    image: "https://i.imgur.com/586bNam.jpeg",
    gallery: ["https://i.imgur.com/te5paZp.jpeg", "https://i.imgur.com/51IJFFY.jpeg", "https://i.imgur.com/te5paZp.jpeg"],
    description: "Dominate MP and BR modes with our COD Mobile hacks.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 18.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 42.00, inStock: true },
      { id: '2months', name: '2 MONTHS', price: 75.00, inStock: true }
    ]
  },
  {
    id: 8,
    title: "ARENA BREAKOUT",
    category: "Strategy",
    gameName: "BREAKOUT",
    status: "UNDETECTED",
    rating: 4.7,
    image: "https://i.imgur.com/5qFeQnz.jpeg",
    gallery: [
      "https://i.imgur.com/0E3kOp8.jpeg",
      "https://i.imgur.com/EdvOWXT.jpeg",
      "https://i.imgur.com/nLVrL9l.jpeg"
    ],
    description: "Extraction shooter cheats. Extract with the best loot safely.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 25.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 55.00, inStock: true },
    ]
  },
  {
    id: 9,
    title: "MOBILE LEGENDS",
    category: "MOBA",
    gameName: "MLBB",
    status: "UNDETECTED",
    rating: 4.8,
    image: "https://i.imgur.com/2QxGHEP.jpeg",
    gallery: [
      "https://i.imgur.com/2QxGHEP.jpeg",
      "https://i.imgur.com/T4hMYlJ.jpeg",
      "https://i.imgur.com/vDhwpWO.jpeg",
      "https://i.imgur.com/NTi9btl.jpeg"
    ],
    description: "Map hack, drone view, and skin unlockers for MLBB.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 12.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 30.00, inStock: true },
    ]
  },
  {
    id: 10,
    title: "HONOR OF KINGS",
    category: "MOBA",
    gameName: "HOK",
    status: "UNDETECTED",
    rating: 4.6,
    image: "https://placehold.co/800x600/312e81/fbbf24?text=Honor+of+Kings",
    gallery: ["https://placehold.co/800x600/312e81/fbbf24?text=Ranked", "https://placehold.co/800x600/172554/fcd34d?text=Clash", "https://placehold.co/800x600/1e3a8a/fde68a?text=Heroes", "https://placehold.co/800x600/1e40af/fef3c7?text=Skins", "https://placehold.co/800x600/1d4ed8/fffbeb?text=Victory"],
    description: "Rank up fast with our Honor of Kings tools.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 15.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 35.00, inStock: true },
    ]
  },
  {
    id: 11,
    title: "CRITICAL OPS",
    category: "Action",
    gameName: "C-OPS",
    status: "UNDETECTED",
    rating: 4.5,
    image: "https://placehold.co/800x600/111827/34d399?text=Critical+Ops",
    gallery: ["https://placehold.co/800x600/111827/34d399?text=Headshot", "https://placehold.co/800x600/022c22/6ee7b7?text=Defuse", "https://placehold.co/800x600/064e3b/a7f3d0?text=Ranked", "https://placehold.co/800x600/065f46/d1fae5?text=Skins", "https://placehold.co/800x600/14532d/ecfdf5?text=Clan"],
    description: "Precision aimbot and radar for Critical Ops.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 10.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 25.00, inStock: true },
    ]
  },
  {
    id: 12,
    title: "FREE FIRE",
    category: "Battle Royale",
    gameName: "FF",
    status: "UNDETECTED",
    rating: 4.8,
    image: "https://i.imgur.com/UJgwREi.jpeg",
    gallery: [
      "https://i.imgur.com/4geb3jL.jpeg",
      "https://i.imgur.com/UJgwREi.jpeg",
      "https://i.imgur.com/X3EAKCS.jpeg"
    ],
    description: "Auto headshot and location hacks for Free Fire.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 12.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 30.00, inStock: true },
    ]
  },
  {
    id: 13,
    title: "8 BALL POOL",
    category: "Sports",
    gameName: "8BP",
    status: "UNDETECTED",
    rating: 4.7,
    image: "https://i.imgur.com/ufNdhQr.jpeg",
    gallery: [
      "https://i.imgur.com/ufNdhQr.jpeg",
      "https://i.imgur.com/BIq5MsU.jpeg",
      "https://i.imgur.com/7dVlzsr.jpeg"
    ],
    description: "Extended guidelines and auto-play for 8 Ball Pool.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 8.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 20.00, inStock: true },
    ]
  },
  {
    id: 14,
    title: "ARENA OF VALOR",
    category: "MOBA",
    gameName: "AOV",
    status: "UNDETECTED",
    rating: 4.5,
    image: "https://placehold.co/800x600/4c1d95/c084fc?text=Arena+of+Valor",
    gallery: ["https://placehold.co/800x600/4c1d95/c084fc?text=5v5", "https://placehold.co/800x600/2e1065/d8b4fe?text=Ranked", "https://placehold.co/800x600/3b0764/e9d5ff?text=Heroes", "https://placehold.co/800x600/581c87/f3e8ff?text=Skins", "https://placehold.co/800x600/6b21a8/fae8ff?text=Victory"],
    description: "Map hack and cooldown reduction for Arena of Valor.",
    features: DEFAULT_CHEAT_FEATURES,
    subscriptions: [
      { id: '7days', name: '7 DAYS', price: 12.00, inStock: true },
      { id: '1month', name: '1 MONTH', price: 30.00, inStock: true },
    ]
  },
];

const CATEGORIES = ["All", "Action", "Sports", "RPG", "Racing", "Strategy", "Horror", "Simulation"];

// --- Product Details Component ---
function ProductDetails({ product, onBack }) {
  const [selectedSubscription, setSelectedSubscription] = useState(product.subscriptions[0]);
  const [selectedPlatform, setSelectedPlatform] = useState('android');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);

  useEffect(() => {
    setActiveImage(product.image);
  }, [product]);

  const handleBuyNow = () => {
    const total = (selectedSubscription.price * quantity).toFixed(2);
    const message = `
Hello ZYRO HAX, I would like to purchase:
--------------------------------
🎮 Game: ${product.title}
📦 Plan: ${selectedSubscription.name}
📱 Platform: ${selectedPlatform === 'android' ? 'Android' : 'iOS'}
💵 Price: $${total}
🔢 Quantity: ${quantity}
--------------------------------
Please provide payment details.
`.trim();
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/zyrohaxx?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-4 md:py-8 text-gray-100 animate-fade-in-up">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors font-medium text-sm md:text-base">
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" /> Back to Store
      </button>

      <div className="grid lg:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-12">
        {/* Left Column: Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-3 md:gap-4">
          <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 md:border-2 md:border-cyan-500/30 shadow-lg bg-gray-900 group">
             <img 
               src={activeImage} 
               alt={product.title} 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none"></div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-3">
            {[product.image, ...(product.gallery || [])].slice(0, 4).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`relative aspect-video rounded-lg overflow-hidden border transition-all w-full ${
                  activeImage === img ? 'border-cyan-400 shadow-md ring-1 ring-cyan-400/50' : 'border-gray-800 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Info */}
        <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
          <div>
            <h1 className="text-2xl md:text-5xl font-black text-white mb-2 md:mb-4 leading-tight">{product.title}</h1>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="flex items-center gap-1.5 bg-gray-800 text-blue-400 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold border border-blue-500/20">
                <Globe className="w-3 h-3 md:w-3.5 md:h-3.5" />
                {product.gameName}
              </span>
              <span className="flex items-center gap-1.5 bg-gray-800 text-blue-400 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold border border-blue-500/20">
                <Zap className="w-3 h-3 md:w-3.5 md:h-3.5" />
                INSTANT
              </span>
              <span className={`flex items-center gap-1.5 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold border ${
                product.status.includes('UNDETECTED') 
                  ? 'bg-green-900/30 text-green-400 border-green-500/30' 
                  : 'bg-yellow-900/30 text-yellow-400 border-yellow-500/30'
              }`}>
                <ShieldCheck className="w-3 h-3 md:w-3.5 md:h-3.5" />
                {product.status}
              </span>
            </div>
          </div>

          {/* Platform Selector - Enhanced Design & Compact Size */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Select Platform</label>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedPlatform('android')}
                className={`flex-1 py-3 rounded-lg border-2 transition-all duration-300 flex flex-row items-center justify-center gap-2 group relative overflow-hidden ${
                  selectedPlatform === 'android' 
                    ? 'border-[#3DDC84] text-[#3DDC84] shadow-[0_0_15px_rgba(61,220,132,0.15)]' 
                    : 'border-gray-800 bg-gray-900/50 text-gray-500 hover:border-gray-600 hover:bg-gray-800'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-t from-[#3DDC84]/10 to-transparent opacity-0 transition-opacity duration-300 ${selectedPlatform === 'android' ? 'opacity-100' : 'group-hover:opacity-50'}`}></div>
                <AndroidIcon className={`w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 ${selectedPlatform === 'android' ? 'scale-110 drop-shadow-[0_0_5px_rgba(61,220,132,0.5)]' : 'group-hover:scale-105'}`} />
                <span className="font-bold text-sm relative z-10">Android</span>
                {selectedPlatform === 'android' && (
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#3DDC84] rounded-full shadow-[0_0_5px_#3DDC84] animate-pulse"></div>
                )}
              </button>

              <button
                onClick={() => setSelectedPlatform('ios')}
                className={`flex-1 py-3 rounded-lg border-2 transition-all duration-300 flex flex-row items-center justify-center gap-2 group relative overflow-hidden ${
                  selectedPlatform === 'ios' 
                    ? 'border-white bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.15)]' 
                    : 'border-gray-800 bg-gray-900/50 text-gray-500 hover:border-gray-600 hover:bg-gray-800'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 transition-opacity duration-300 ${selectedPlatform === 'ios' ? 'opacity-100' : 'group-hover:opacity-50'}`}></div>
                <AppleIcon className={`w-5 h-5 md:w-7 md:h-7 transition-transform duration-300 ${selectedPlatform === 'ios' ? 'scale-110 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]' : 'group-hover:scale-105'}`} />
                <span className="font-bold text-sm relative z-10">iOS</span>
                {selectedPlatform === 'ios' && (
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_white] animate-pulse"></div>
                )}
              </button>
            </div>
          </div>

          {/* Price & Quantity */}
          <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-xl border border-gray-800/50 mt-1">
            <div className="flex flex-col">
              <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Total Price</span>
              <div className="flex items-end gap-1">
                <span className="text-3xl md:text-4xl font-black text-white leading-none">
                  ${(selectedSubscription?.price || product.basePrice || 0).toFixed(0)}
                </span>
                <span className="text-cyan-500 font-bold text-sm mb-1">USD</span>
              </div>
            </div>

            <div className="flex items-center bg-gray-800 rounded-lg border border-gray-700 p-1 shadow-inner">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded hover:bg-gray-600 text-gray-300 transition-colors active:scale-95"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input 
                type="text" 
                value={quantity} 
                readOnly
                className="w-10 text-center bg-transparent text-white font-bold text-lg focus:outline-none" 
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center bg-cyan-600 rounded hover:bg-cyan-500 text-white transition-colors shadow-lg shadow-cyan-900/30 active:scale-95"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Subscriptions Grid */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Choose Plan</label>
            {product.subscriptions?.map(sub => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubscription(sub)}
                className={`relative flex items-center justify-between p-2 md:p-3 rounded-lg border-2 text-left transition-all duration-200 group ${
                  selectedSubscription?.id === sub.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-400 border-transparent shadow-lg shadow-blue-900/20 transform scale-[1.01] z-10' 
                    : 'bg-gray-900 border-gray-800 hover:border-gray-600 hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedSubscription?.id === sub.id ? 'border-white' : 'border-gray-600'}`}>
                    {selectedSubscription?.id === sub.id && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-sm font-bold ${selectedSubscription?.id === sub.id ? 'text-white' : 'text-gray-400'}`}>
                      {sub.name}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                   <span className={`text-base font-black ${selectedSubscription?.id === sub.id ? 'text-white' : 'text-white'}`}>
                      ${sub.price}
                   </span>
                   {sub.inStock && (
                     <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                        selectedSubscription?.id === sub.id ? 'text-white bg-white/20' : 'text-green-400'
                     }`}>
                       In Stock
                     </span>
                   )}
                </div>
              </button>
            ))}
          </div>

          {/* Buy Now via Telegram Button */}
          <div className="flex flex-col mt-4">
             <button
                onClick={handleBuyNow}
                className="w-full bg-[#229ED9] hover:bg-[#1c86b8] text-white font-bold text-lg py-3.5 rounded-xl shadow-xl shadow-blue-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-wide animate-wiggle"
            >
                <TelegramIcon className="w-6 h-6" />
                Buy Now via Telegram
            </button>
          </div>

          {/* Features Section - Moved to Full Width */}
          <div className="mt-8 border-t border-gray-800 pt-8">
            <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-cyan-500" />
              CHEAT FEATURES
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Aimbot Column */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/30 transition-colors group">
                <h4 className="font-bold text-cyan-400 mb-3 flex items-center gap-2 group-hover:text-cyan-300">
                  <Crosshair className="w-4 h-4" /> AIMBOT
                </h4>
                <ul className="space-y-2">
                  {product.features?.aimbot.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-400">
                      <FeatureCheckIcon className="shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ESP Column */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-purple-500/30 transition-colors group">
                <h4 className="font-bold text-purple-400 mb-3 flex items-center gap-2 group-hover:text-purple-300">
                  <Eye className="w-4 h-4" /> ESP VISUALS
                </h4>
                <ul className="space-y-2">
                  {product.features?.esp.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-400">
                      <FeatureCheckIcon className="shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Misc Column */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-yellow-500/30 transition-colors group">
                <h4 className="font-bold text-yellow-400 mb-3 flex items-center gap-2 group-hover:text-yellow-300">
                  <Sparkles className="w-4 h-4" /> MISC
                </h4>
                <ul className="space-y-2">
                  {product.features?.misc.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-400">
                      <FeatureCheckIcon className="shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Video Showcase Section */}
          {product.video && (
            <div className="mt-8 border-t border-gray-800 pt-8">
              <h3 className="text-xl font-black text-center text-teal-400 mb-6 flex items-center justify-center gap-2 uppercase tracking-wide">
                VIDEO SHOWCASE
              </h3>
              <div className="relative w-full rounded-2xl overflow-hidden border-2 border-teal-500/30 shadow-[0_0_30px_rgba(20,184,166,0.15)] bg-gray-900 max-w-4xl mx-auto">
                <div className="pt-[56.25%] relative">
                  <iframe 
                    src={`https://www.youtube.com/embed/${product.video}?autoplay=0&rel=0&modestbranding=1&playsinline=1`}
                    title="Product Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// --- Main App Component ---
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredGames = GAMES_DATA.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-cyan-500/30" dir="ltr">
      
      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800 shadow-2xl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center relative">
            
            {/* Logo Container */}
            <div className="flex items-center gap-3 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                {/* Logo */}
                <div 
                    className="flex items-center gap-2 cursor-pointer group" 
                    onClick={() => setSelectedProduct(null)}
                >
                    <Gamepad2 className="w-8 h-8 text-cyan-500 group-hover:rotate-12 transition-transform" />
                    <span className="text-2xl font-black italic tracking-tighter text-white">
                    ZYRO<span className="text-cyan-500">HAX</span>
                    </span>
                </div>
            </div>

            {/* Search (Desktop) */}
            {!selectedProduct && (
              <div className="hidden md:flex flex-1 max-w-md mx-8 relative group ml-auto md:ml-12">
                <input
                  type="text"
                  placeholder="Search games..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-600 text-gray-300 group-hover:bg-gray-800"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
              </div>
            )}

            {/* Right Buttons (Mobile Menu Only) */}
            <div className="flex items-center gap-4 ml-auto md:ml-0">
              {!selectedProduct && (
                <button 
                  className="md:hidden p-2 hover:bg-gray-800 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>

          {/* Search (Mobile) */}
          {!selectedProduct && (
            <div className={`md:hidden mt-4 pb-2 space-y-3 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
               <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-cyan-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setIsMobileMenuOpen(false); }}
                    className={`text-xs px-3 py-1.5 rounded-md font-bold uppercase tracking-wide ${selectedCategory === cat ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-400'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-20">
        {selectedProduct ? (
          <ProductDetails 
            product={selectedProduct} 
            onBack={() => setSelectedProduct(null)} 
          />
        ) : (
          <>
            <header className="relative h-[40vh] md:h-[45vh] flex items-center justify-center overflow-hidden mb-8 md:mb-12">
              <div className="absolute inset-0 z-0">
                 <img 
                   src="https://placehold.co/1920x1080/020617/1e293b?text=" 
                   alt="Background" 
                   className="w-full h-full object-cover opacity-60"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
              </div>

              <div className="relative z-10 text-center p-8 animate-fade-in-up">
                <div className="mb-4 md:mb-6 inline-block relative">
                    <img src="image_0.png" alt="ZYRO HAX" className="w-40 md:w-72 mx-auto drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]" />
                </div>
                <h1 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-2 md:mb-4">
                  UNDETECTED. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">UNSTOPPABLE.</span>
                </h1>
                <p className="text-gray-400 text-base md:text-xl max-w-xl mx-auto font-light">
                  Professional cheats for the games you love. Secure, instant, and undetected.
                </p>
              </div>
            </header>

            <main className="container mx-auto px-4 pb-24 md:pb-16">
              
              <div className="hidden md:flex gap-2 overflow-x-auto pb-6 scrollbar-hide mb-8 justify-center">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40 translate-y-[-2px]'
                        : 'bg-gray-900 text-gray-500 hover:bg-gray-800 hover:text-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                  {filteredGames.map(game => (
                    <div key={game.id} onClick={() => setSelectedProduct(game)} className="group bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300 cursor-pointer flex flex-col h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={game.image} 
                          alt={game.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 flex justify-between items-end">
                             <span className="text-white font-black text-xs md:text-lg drop-shadow-md truncate">{game.title}</span>
                        </div>
                        <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-gray-950/80 backdrop-blur text-[8px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded text-cyan-400 border border-gray-700 uppercase">
                          {game.gameName || game.category}
                        </div>
                      </div>

                      <div className="p-3 md:p-4 flex flex-col flex-1">
                        <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                           <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${game.status.includes('UNDETECTED') ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-yellow-500'}`}></span>
                           <span className="text-[10px] md:text-xs text-gray-400 font-medium truncate">{game.status}</span>
                        </div>
                        
                        <div className="flex items-center justify-between mt-auto pt-2 md:pt-3 border-t border-gray-800">
                           <div className="flex flex-col">
                             <span className="text-[8px] md:text-[10px] text-gray-500 uppercase font-bold">Starting at</span>
                             <span className="text-base md:text-xl font-black text-white">${game.subscriptions?.[0]?.price || 0}</span>
                           </div>
                           <button className="bg-gray-800 hover:bg-cyan-600 hover:text-white text-gray-400 p-1.5 md:p-2 rounded-lg transition-colors">
                              <div className="w-4 h-4 md:w-5 md:h-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                              </div>
                           </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-gray-600">
                  <Gamepad2 className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>No games found matching your search.</p>
                </div>
              )}
            </main>
          </>
        )}
      </div>

      <footer className="bg-gray-950 border-t border-gray-900 py-12 text-center pb-24 md:pb-12">
         <p className="text-gray-600 text-sm">© 2025 ZYRO HAX. All rights reserved.</p>
      </footer>

      {/* --- Mobile Bottom Navigation --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950/95 backdrop-blur-md border-t border-gray-800 p-2 z-50 md:hidden flex justify-around items-center h-16 safe-area-pb">
        <button 
          onClick={() => setSelectedProduct(null)} 
          className="flex flex-col items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors p-2"
        >
          <Home className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        
        <a href="#" className="flex flex-col items-center justify-center text-[#5865F2] hover:scale-110 transition-transform p-2">
          <DiscordIcon className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Discord</span>
        </a>

        <a href="#" className="flex flex-col items-center justify-center text-[#25D366] hover:scale-110 transition-transform p-2">
          <WhatsAppIcon className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>

        <a href="#" className="flex flex-col items-center justify-center text-[#0088cc] hover:scale-110 transition-transform p-2">
          <TelegramIcon className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Telegram</span>
        </a>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes shake-subtle {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }
        .animate-shake-subtle {
          animation: shake-subtle 2s infinite;
        }
        @keyframes flash {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.9); }
        }
        .animate-fade-in-up {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out forwards;
        }
        .animate-flash {
          animation: flash 1.5s infinite ease-in-out;
        }
        .animate-wiggle {
          animation: shake-subtle 2s infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
