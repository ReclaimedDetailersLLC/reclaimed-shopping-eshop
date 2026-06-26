/* ============================================================
   RECLAIMED GROUP — Product Catalog
   ============================================================ */

const PRODUCTS = [
  {
    id: 1,
    name: 'Ceramic Shield Pro',
    subtitle: '9H Ceramic Coating Kit',
    category: 'Protection',
    price: 89.99,
    badge: 'Best Seller',
    badgeType: 'popular',
    desc: 'Professional-grade 9H ceramic coating that delivers up to 5 years of hydrophobic protection. Creates an ultra-hard barrier against UV rays, oxidation, road chemicals, and minor scratches — all in one kit.',
    features: [
      'True 9H surface hardness',
      'Up to 5 years of protection',
      'Extreme water and mud repellency',
      'UV and oxidation shield',
      'Chemical and scratch resistant',
      'Full professional application kit included'
    ],
    gradient: 'linear-gradient(135deg, #0a0a2e 0%, #1a1a5e 60%, rgba(200,151,59,.1) 100%)',
    icon: '🛡️',
    tags: ['protection', 'coating', 'premium']
  },
  {
    id: 2,
    name: 'Iron Remover Pro',
    subtitle: 'Paint Decontamination Formula',
    category: 'Decontamination',
    price: 24.99,
    badge: 'New',
    badgeType: 'new',
    desc: 'Advanced iron particle remover that chemically dissolves embedded ferrous contaminants on contact. Watch it turn vivid purple as it works — safely lifting iron deposits from paint and wheels without any abrasion.',
    features: [
      'pH-balanced, paint-safe formula',
      'Vivid color-change technology',
      'Works on all paint types and clear coats',
      'Effective on wheels and body panels',
      'No scrubbing or agitation needed',
      '32oz ready-to-spray bottle'
    ],
    gradient: 'linear-gradient(135deg, #2a0a0a 0%, #5a1818 60%, rgba(200,151,59,.08) 100%)',
    icon: '🔬',
    tags: ['decontamination', 'iron', 'paint']
  },
  {
    id: 3,
    name: 'Ultra Microfiber Set',
    subtitle: '12-Pack Professional Bundle',
    category: 'Tools',
    price: 34.99,
    badge: null,
    badgeType: null,
    desc: 'Premium 800 GSM microfiber towels engineered for streak-free, scratch-free results. Ideal for polishing, buffing, and final wipe-downs. Machine washable and reusable hundreds of times.',
    features: [
      '800 GSM ultra-plush pile',
      'Zero-scratch weave technology',
      'Lint-free and streak-free finish',
      'Machine washable up to 300 cycles',
      'Size: 16" x 24" per towel',
      '12 towels included'
    ],
    gradient: 'linear-gradient(135deg, #181818 0%, #303030 60%, rgba(200,151,59,.12) 100%)',
    icon: '🧤',
    tags: ['tools', 'microfiber', 'accessories']
  },
  {
    id: 4,
    name: 'Interior Restore Kit',
    subtitle: 'Complete 4-Product Interior System',
    category: 'Interior',
    price: 59.99,
    badge: null,
    badgeType: null,
    desc: 'Everything needed to restore your interior to showroom condition. Includes a fabric upholstery cleaner, plastic and vinyl restorer, leather conditioner, and automotive glass cleaner.',
    features: [
      '4-product complete system',
      'Cleans every interior surface',
      'Built-in UV protectant',
      'Permanently neutralizes odors',
      'Safe for leather, fabric, plastic, glass',
      'Professional-strength formula'
    ],
    gradient: 'linear-gradient(135deg, #0a180a 0%, #1a3218 60%, rgba(200,151,59,.08) 100%)',
    icon: '🚗',
    tags: ['interior', 'kit', 'bundle']
  },
  {
    id: 5,
    name: 'Wheel & Brake Kit',
    subtitle: 'Complete Wheel Care System',
    category: 'Wheels',
    price: 44.99,
    badge: null,
    badgeType: null,
    desc: 'Professional wheel care system that dissolves brake dust, iron fallout, and road grime on contact. Includes iron-reactive wheel cleaner, tire dressing gel, and a detailing brush.',
    features: [
      'Acid-free, alloy-safe formula',
      'Reactive iron-dissolving technology',
      'Safe on all wheel finishes',
      'Tire dressing gel included',
      'Full-width barrel brush included',
      'UV tire protection formula'
    ],
    gradient: 'linear-gradient(135deg, #1e0e0a 0%, #382010 60%, rgba(200,151,59,.1) 100%)',
    icon: '⚙️',
    tags: ['wheels', 'tires', 'kit']
  },
  {
    id: 6,
    name: 'Pro Foam Cannon',
    subtitle: 'Pressure Washer Snow Foam Attachment',
    category: 'Washing',
    price: 39.99,
    badge: 'New',
    badgeType: 'new',
    desc: 'Heavy-duty foam cannon that generates thick, clinging snow foam to lift dirt safely before contact washing. Dual adjustable knobs control foam density and fan width.',
    features: [
      '1/4" universal quick-connect',
      'Adjustable fan spray and foam dial',
      'Stainless steel mixing chamber',
      'Compatible with any pressure washer',
      '32oz BPA-free soap canister',
      'Multiple spray pattern modes'
    ],
    gradient: 'linear-gradient(135deg, #0c0c20 0%, #1a1a3a 60%, rgba(200,151,59,.1) 100%)',
    icon: '💦',
    tags: ['washing', 'foam', 'accessories']
  },
  {
    id: 7,
    name: 'Clay Bar System',
    subtitle: 'Professional Paint Surface Prep Kit',
    category: 'Prep',
    price: 29.99,
    badge: null,
    badgeType: null,
    desc: 'Fine-grade professional clay bar that safely removes bonded surface contaminants including overspray, tree sap, industrial fallout, and water-spot minerals — without scratching paint.',
    features: [
      '200g professional-grade clay bar',
      'High-lubricity spray lubricant included',
      'Fine grade — safe on all clear coats',
      'Removes overspray and tar deposits',
      'Essential prep step before coating',
      'Fast, simple 30-minute process'
    ],
    gradient: 'linear-gradient(135deg, #181808 0%, #302e10 60%, rgba(200,151,59,.1) 100%)',
    icon: '✨',
    tags: ['prep', 'clay', 'decontamination']
  },
  {
    id: 8,
    name: 'Swirl Eraser Pro',
    subtitle: 'Two-Stage Compound + Polish System',
    category: 'Paint Correction',
    price: 49.99,
    badge: 'Best Seller',
    badgeType: 'popular',
    desc: 'Two-stage paint correction system for removing swirl marks, light scratches, and water etching. Stage 1 compound cuts defects; Stage 2 polish refines to a mirror-gloss finish.',
    features: [
      'Stage 1: Heavy-cut compound (8oz)',
      'Stage 2: Finishing polish (8oz)',
      'Works by machine or by hand',
      'Silicone-free, no-filler formula',
      'Clear coat and single-stage safe',
      'Produces true mirror reflection'
    ],
    gradient: 'linear-gradient(135deg, #1a0a1e 0%, #321832 60%, rgba(200,151,59,.1) 100%)',
    icon: '🌟',
    tags: ['paint correction', 'polish', 'compound']
  },
  {
    id: 9,
    name: 'Crystal Glass Kit',
    subtitle: 'Cleaner & Rain-Repellent Sealant',
    category: 'Glass',
    price: 19.99,
    badge: null,
    badgeType: null,
    desc: 'Professional glass cleaner + sealant duo. The cleaner strips road film, haze, and streaks with zero residue. The sealant bonds to glass creating a 6-month hydrophobic barrier that dramatically improves wet-weather visibility.',
    features: [
      'Ammonia-free, streak-free cleaner',
      'SiO2 glass sealant for 6+ months',
      'Dramatically improves rain visibility',
      'Works on windshields, mirrors, and glass',
      'Safe for tinted and solar windows',
      'Two-product kit'
    ],
    gradient: 'linear-gradient(135deg, #0a1620 0%, #183050 60%, rgba(200,151,59,.08) 100%)',
    icon: '🪟',
    tags: ['glass', 'visibility', 'kit']
  },
  {
    id: 10,
    name: 'Engine Bay Detailer',
    subtitle: 'Professional Water-Based Degreaser',
    category: 'Engine',
    price: 22.99,
    badge: null,
    badgeType: null,
    desc: 'Concentrated, biodegradable engine degreaser that cuts through grease, oil residue, and built-up grime. Water-based formula rinses clean and leaves no oily residue on plastic or rubber.',
    features: [
      'Water-based and biodegradable',
      'Safe for all plastic and rubber',
      'Dilutable 4:1 to 20:1 ratio',
      'Safe to use on warm or cool engines',
      'Zero-residue rinse formula',
      '32oz concentrate'
    ],
    gradient: 'linear-gradient(135deg, #0e0e0a 0%, #222210 60%, rgba(200,151,59,.12) 100%)',
    icon: '🔧',
    tags: ['engine', 'degreaser', 'cleaning']
  },
  {
    id: 11,
    name: 'Leather Care Pro',
    subtitle: 'Cleaner & Conditioner Duo',
    category: 'Interior',
    price: 38.99,
    badge: null,
    badgeType: null,
    desc: 'pH-balanced leather cleaner paired with a rich conditioning cream infused with natural oils and vitamin E. Cleans deeply, restores softness, and shields leather from cracking, fading, and UV degradation.',
    features: [
      'pH-balanced deep-cleaning formula',
      'Natural oil conditioning cream',
      'UV and heat protection',
      'Prevents cracking, fading, drying',
      'Safe for perforated and dyed leather',
      'Non-greasy, matte finish'
    ],
    gradient: 'linear-gradient(135deg, #281808 0%, #4a2e10 60%, rgba(200,151,59,.15) 100%)',
    icon: '🪑',
    tags: ['interior', 'leather', 'conditioning']
  },
  {
    id: 12,
    name: 'Odor Annihilator',
    subtitle: 'Professional Bomb-Style Treatment',
    category: 'Interior',
    price: 16.99,
    badge: null,
    badgeType: null,
    desc: 'Professional-grade chlorine dioxide odor eliminator that penetrates every surface — carpet, fabric, headliner, and HVAC — to permanently neutralize odors from smoke, pets, mold, and food.',
    features: [
      'Permanent odor neutralization',
      'Reaches inside HVAC and ducts',
      'Chlorine dioxide active formula',
      'Eliminates smoke, pet, and mold odors',
      '30-minute treatment cycle',
      'Single-use per vehicle application'
    ],
    gradient: 'linear-gradient(135deg, #0a160a 0%, #183018 60%, rgba(200,151,59,.07) 100%)',
    icon: '💨',
    tags: ['interior', 'odor', 'treatment']
  },
  {
    id: 13,
    name: 'Bug & Tar Blaster',
    subtitle: 'Industrial-Strength Citrus Remover',
    category: 'Prep',
    price: 18.99,
    badge: null,
    badgeType: null,
    desc: 'Citrus-powered solvent formula that dissolves bug splatter, road tar, tree sap, adhesive residue, and pitch on contact — without scratching paint or clear coat.',
    features: [
      'Citrus-based solvent formula',
      'Dissolves on contact — no scrubbing',
      'Clear coat and paint-film safe',
      'Works on tar, bugs, and adhesive',
      'Spray, dwell, and wipe application',
      '16oz trigger spray bottle'
    ],
    gradient: 'linear-gradient(135deg, #222008 0%, #403c10 60%, rgba(200,151,59,.12) 100%)',
    icon: '🐛',
    tags: ['prep', 'bug removal', 'tar']
  },
  {
    id: 14,
    name: 'Speed Detailer',
    subtitle: 'Quick Spray & Wipe Detailer',
    category: 'Maintenance',
    price: 21.99,
    badge: null,
    badgeType: null,
    desc: 'Quick-detailing spray that lifts light dust, fingerprints, and water spots in seconds while leaving a slick hydrophobic layer. Perfect for maintaining between washes or freshening up for a show.',
    features: [
      'Ready-to-use, no dilution needed',
      'Adds a fresh hydrophobic layer',
      'Anti-static dust repellent formula',
      'UV protectant built in',
      'Show-ready gloss in minutes',
      '32oz spray bottle'
    ],
    gradient: 'linear-gradient(135deg, #10102a 0%, #202040 60%, rgba(200,151,59,.1) 100%)',
    icon: '⚡',
    tags: ['maintenance', 'quick detail', 'spray']
  },
  {
    id: 15,
    name: 'Tire Shine Supreme',
    subtitle: 'Wet-Look Long-Lasting Gel',
    category: 'Wheels',
    price: 17.99,
    badge: null,
    badgeType: null,
    desc: 'Water-based tire dressing gel that delivers a deep, lasting wet-look shine without slinging onto paint. UV and ozone inhibitors prevent rubber from browning, cracking, and drying.',
    features: [
      'Water-based — no paint sling',
      'Deep, consistent wet-look gloss',
      'UV and ozone inhibitor formula',
      'Prevents sidewall browning',
      'Long-lasting gel formula',
      'Foam applicator included'
    ],
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1c1c1a 60%, rgba(200,151,59,.2) 100%)',
    icon: '🔘',
    tags: ['wheels', 'tires', 'dressing']
  },
  {
    id: 16,
    name: 'Headlight Rescue',
    subtitle: '3-Step Complete Restoration Kit',
    category: 'Restoration',
    price: 27.99,
    badge: null,
    badgeType: null,
    desc: 'Three-step headlight restoration system that removes years of yellowing, cloudiness, and oxidation from polycarbonate lenses — then seals them with UV-barrier coating to prevent future degradation.',
    features: [
      '3-step sanding and polishing process',
      'Removes deep oxidation and yellowing',
      'UV-blocking sealant coat',
      'Up to 2 years of UV protection',
      'Works on all plastic headlights',
      'Full kit with pads and applicators'
    ],
    gradient: 'linear-gradient(135deg, #181808 0%, #303010 60%, rgba(200,151,59,.18) 100%)',
    icon: '💡',
    tags: ['restoration', 'headlights', 'clarity']
  },
  {
    id: 17,
    name: 'Pro Brush Collection',
    subtitle: '8-Piece Professional Detailing Set',
    category: 'Tools',
    price: 31.99,
    badge: null,
    badgeType: null,
    desc: 'Complete detailing brush set for every nook and surface. Includes a wheel barrel brush, lug nut brush, vent and dash brush, door jamb brush, interior trim brush, and soft boar-hair finish brush.',
    features: [
      '8 professional brushes included',
      'Soft boar-hair bristles for delicate surfaces',
      'Chemical-resistant synthetic handles',
      'Large barrel wheel brush',
      'Flexible vent and dash brush',
      'Zipped carry roll bag'
    ],
    gradient: 'linear-gradient(135deg, #160a0a 0%, #2a1414 60%, rgba(200,151,59,.1) 100%)',
    icon: '🖌️',
    tags: ['tools', 'brushes', 'accessories']
  },
  {
    id: 18,
    name: 'Foam Wash Soap',
    subtitle: 'High-Lubricity Concentrate 32oz',
    category: 'Washing',
    price: 15.99,
    badge: null,
    badgeType: null,
    desc: 'Ultra-concentrated car wash soap with extreme lubricity to prevent wash-induced swirls and marring. Produces thick, clinging suds with just 1–2oz per bucket. pH-neutral and safe on all coatings.',
    features: [
      'Ultra-concentrate — up to 40 washes per bottle',
      'pH-neutral, coating-safe formula',
      'High-lubricity scratch prevention',
      'Thick, clinging foam production',
      'Fresh cherry blossom fragrance',
      'Works with bucket wash and foam cannon'
    ],
    gradient: 'linear-gradient(135deg, #0a1818 0%, #183030 60%, rgba(200,151,59,.08) 100%)',
    icon: '🫧',
    tags: ['washing', 'soap', 'foam']
  },
  {
    id: 19,
    name: 'Paint Sealant Wax',
    subtitle: '12-Month SiO2 Protection',
    category: 'Protection',
    price: 52.99,
    badge: null,
    badgeType: null,
    desc: 'Synthetic polymer sealant infused with SiO2 that bonds to paint at the molecular level, delivering up to 12 months of protection with a deep, wet-gloss shine and excellent water and dirt beading.',
    features: [
      'Up to 12 months of surface protection',
      'SiO2-enhanced molecular bonding',
      'Deep, water-wet gloss enhancement',
      'Extreme water and dirt repellency',
      'Works on paint, glass, and trim',
      '8oz jar with foam applicator'
    ],
    gradient: 'linear-gradient(135deg, #160a1e 0%, #2a1436 60%, rgba(200,151,59,.12) 100%)',
    icon: '🔮',
    tags: ['protection', 'wax', 'sealant']
  },
  {
    id: 20,
    name: 'Signature Detail Bundle',
    subtitle: 'The Complete Reclaimed Package',
    category: 'Bundles',
    price: 199.99,
    badge: 'Bundle',
    badgeType: 'bundle',
    desc: 'The ultimate all-in-one detailing kit assembled by the Reclaimed team — hand-curated from our best-performing products. Covers every step: wash, decontaminate, correct, protect, and maintain. Includes a free branded item.',
    features: [
      'Ceramic Shield Pro coating kit',
      'Pro Foam Cannon + Foam Wash Soap',
      'Ultra Microfiber Set (12-pack)',
      'Clay Bar System for full decontamination',
      'Swirl Eraser Pro two-stage polish',
      'Free Reclaimed branded merchandise item'
    ],
    gradient: 'linear-gradient(135deg, #1a1200 0%, #362800 60%, rgba(200,151,59,.35) 100%)',
    icon: '👑',
    tags: ['bundles', 'complete', 'premium']
  }
];

const CATEGORIES = ['All', 'Protection', 'Decontamination', 'Washing', 'Interior', 'Wheels', 'Glass', 'Engine', 'Prep', 'Paint Correction', 'Maintenance', 'Restoration', 'Tools', 'Bundles'];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function getProductsByCategory(category) {
  if (!category || category === 'All') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

function getFeaturedProducts(count = 8) {
  return PRODUCTS.filter(p => p.badge || p.id <= 8).slice(0, count);
}
