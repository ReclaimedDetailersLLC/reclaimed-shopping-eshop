/* ============================================================
   RECLAIMED CO. — Phase 1 Product Catalog
   ============================================================ */

const PRODUCTS = [
  {
    id: 1,
    name: 'The Original Hoodie',
    variant: 'Black',
    subtitle: 'Premium Heavyweight 450GSM',
    collection: 'The Found Collection',
    category: 'Hoodies',
    price: 65.00,
    badge: 'New',
    badgeClass: 'badge-launch',
    desc: 'Our flagship piece. 450GSM heavyweight cotton fleece with an oversized fit, small embroidered "RECLAIMED." on the chest, and a bold back graphic with a Scripture reference. Built to last, built to mean something.',
    features: [
      '450GSM heavyweight cotton fleece',
      'Oversized, relaxed fit',
      'Small embroidered "RECLAIMED." chest logo',
      'Large back graphic — Scripture reference',
      'Ribbed cuffs and waistband',
      'Pre-washed for softness and minimal shrink',
      'Unisex sizing'
    ],
    bgColor: '#1C1A17',
    textColor: 'rgba(248,245,240,0.2)',
    swatches: ['#1C1A17', '#D4C4A0', '#5C6340', '#B0ADA8'],
    swatchNames: ['Black', 'Sand', 'Vintage Washed Olive', 'Heather Gray'],
    sku: 'RCL-HOOD-BLK',
    fit: 'Oversized',
    material: '100% Heavyweight Cotton Fleece',
    careNote: 'Machine wash cold, tumble dry low'
  },
  {
    id: 2,
    name: 'The Original Hoodie',
    variant: 'Sand',
    subtitle: 'Premium Heavyweight 450GSM',
    collection: 'The Found Collection',
    category: 'Hoodies',
    price: 65.00,
    badge: 'New',
    badgeClass: 'badge-launch',
    desc: 'The same heavyweight oversized hoodie you love — in warm, earthy Sand. Pre-washed to achieve that perfectly broken-in vintage feel from day one. Embroidered chest logo. Strong back graphic.',
    features: [
      '450GSM heavyweight cotton fleece',
      'Oversized, relaxed fit',
      'Small embroidered "RECLAIMED." chest logo',
      'Large back graphic — Scripture reference',
      'Pre-washed vintage feel',
      'Ribbed cuffs and waistband',
      'Unisex sizing'
    ],
    bgColor: '#D4C4A0',
    textColor: 'rgba(90,70,30,0.18)',
    swatches: ['#1C1A17', '#D4C4A0', '#5C6340', '#B0ADA8'],
    swatchNames: ['Black', 'Sand', 'Vintage Washed Olive', 'Heather Gray'],
    sku: 'RCL-HOOD-SND',
    fit: 'Oversized',
    material: '100% Heavyweight Cotton Fleece',
    careNote: 'Machine wash cold, tumble dry low'
  },
  {
    id: 3,
    name: 'The Original Hoodie',
    variant: 'Vintage Washed Olive',
    subtitle: 'Premium Heavyweight 450GSM',
    collection: 'The Found Collection',
    category: 'Hoodies',
    price: 65.00,
    badge: null,
    badgeClass: null,
    desc: 'The most requested colorway. Vintage washed olive gives this heavyweight hoodie an aged, lived-in look that tells a story before you even put it on. Limited seasonal run.',
    features: [
      '450GSM heavyweight cotton fleece',
      'Oversized, relaxed fit',
      'Small embroidered "RECLAIMED." chest logo',
      'Large back graphic — Scripture reference',
      'Vintage wash process — each piece unique',
      'Ribbed cuffs and waistband',
      'Unisex sizing'
    ],
    bgColor: '#5C6340',
    textColor: 'rgba(248,245,240,0.15)',
    swatches: ['#1C1A17', '#D4C4A0', '#5C6340', '#B0ADA8'],
    swatchNames: ['Black', 'Sand', 'Vintage Washed Olive', 'Heather Gray'],
    sku: 'RCL-HOOD-OLV',
    fit: 'Oversized',
    material: '100% Heavyweight Cotton Fleece',
    careNote: 'Machine wash cold, tumble dry low'
  },
  {
    id: 4,
    name: 'The Original Tee',
    variant: 'Black',
    subtitle: 'Heavyweight Oversized 260GSM',
    collection: 'The Redeemed Collection',
    category: 'Tees',
    price: 42.00,
    badge: 'New',
    badgeClass: 'badge-launch',
    desc: 'A heavyweight oversized tee that actually holds its shape. Minimal front logo. Strong back graphic. The kind of shirt you reach for every day — and the kind that starts conversations.',
    features: [
      '260GSM heavyweight cotton',
      'Oversized, boxy fit',
      'Minimal "RECLAIMED." front logo',
      'Bold back graphic with Scripture reference',
      'Drop shoulders for clean drape',
      'Reinforced double-stitched seams',
      'Unisex sizing'
    ],
    bgColor: '#1C1A17',
    textColor: 'rgba(248,245,240,0.2)',
    swatches: ['#1C1A17', '#F2EDE6'],
    swatchNames: ['Black', 'Cream'],
    sku: 'RCL-TEE-BLK',
    fit: 'Oversized / Boxy',
    material: '100% Heavyweight Cotton',
    careNote: 'Machine wash cold, tumble dry low'
  },
  {
    id: 5,
    name: 'The Original Tee',
    variant: 'Cream',
    subtitle: 'Heavyweight Oversized 260GSM',
    collection: 'The Redeemed Collection',
    category: 'Tees',
    price: 42.00,
    badge: null,
    badgeClass: null,
    desc: 'Clean, warm, and versatile — the Cream tee pairs with everything and carries the same heavyweight quality as our Black. Minimal front logo, strong back graphic. This one will be your most-worn.',
    features: [
      '260GSM heavyweight cotton',
      'Oversized, boxy fit',
      'Minimal "RECLAIMED." front logo',
      'Bold back graphic with Scripture reference',
      'Drop shoulders for clean drape',
      'Reinforced double-stitched seams',
      'Unisex sizing'
    ],
    bgColor: '#E8E3D8',
    textColor: 'rgba(90,70,30,0.15)',
    swatches: ['#1C1A17', '#F2EDE6'],
    swatchNames: ['Black', 'Cream'],
    sku: 'RCL-TEE-CRM',
    fit: 'Oversized / Boxy',
    material: '100% Heavyweight Cotton',
    careNote: 'Machine wash cold, tumble dry low'
  },
  {
    id: 6,
    name: 'The Dad Hat',
    variant: 'Black / Cream',
    subtitle: 'Structured 6-Panel Cap',
    collection: 'The Found Collection',
    category: 'Headwear',
    price: 32.00,
    badge: 'New',
    badgeClass: 'badge-launch',
    desc: 'Simple, structured, and clean. Embroidered "RECLAIMED" on the front. The kind of hat you wear everywhere — church, the gym, running errands. Available in Black, Cream, and Olive.',
    features: [
      'Structured 6-panel dad hat construction',
      'Embroidered "RECLAIMED" front logo',
      'Adjustable brass buckle strap',
      'Pre-curved brim',
      'Available in Black, Cream, and Olive',
      'One size fits most'
    ],
    bgColor: '#2A2720',
    textColor: 'rgba(248,245,240,0.2)',
    swatches: ['#2A2720', '#E8E3D8', '#5C6340'],
    swatchNames: ['Black', 'Cream', 'Olive'],
    sku: 'RCL-HAT-BLK',
    fit: 'One Size / Adjustable',
    material: '100% Cotton Twill',
    careNote: 'Spot clean only, air dry'
  },
  {
    id: 7,
    name: 'The Beanie',
    variant: 'Black',
    subtitle: 'Heavyweight Ribbed Knit — Seasonal',
    collection: 'The Found Collection',
    category: 'Headwear',
    price: 28.00,
    badge: 'Seasonal',
    badgeClass: 'badge-seasonal',
    desc: 'A heavyweight ribbed knit beanie with a small woven "RECLAIMED." label. Simple. Warm. A natural part of the collection. Available while supplies last each season.',
    features: [
      'Heavyweight ribbed knit construction',
      'Woven "RECLAIMED." label on cuff',
      'Deep, folded cuff style',
      'Stretch fit — one size',
      'Available in Black and Cream',
      'Seasonal release — limited quantities'
    ],
    bgColor: '#1C1A17',
    textColor: 'rgba(248,245,240,0.2)',
    swatches: ['#1C1A17', '#E8E3D8'],
    swatchNames: ['Black', 'Cream'],
    sku: 'RCL-BNI-BLK',
    fit: 'One Size / Stretch',
    material: '100% Acrylic Knit',
    careNote: 'Hand wash cold, lay flat to dry'
  },
  {
    id: 8,
    name: 'The Cross Necklace',
    variant: 'Silver',
    subtitle: 'Stainless Steel — Waterproof',
    collection: 'The Grace Collection',
    category: 'Jewelry',
    price: 38.00,
    badge: 'New',
    badgeClass: 'badge-launch',
    desc: 'A clean, minimal cross necklace in polished stainless steel. Waterproof, tarnish-resistant, and built to be worn every day — not just to church. This is faith you can carry with you.',
    features: [
      '316L surgical-grade stainless steel',
      'Polished silver finish',
      'Waterproof and tarnish-resistant',
      '18" + 2" adjustable chain',
      'Lobster claw clasp',
      'Hypoallergenic — safe for sensitive skin',
      'Arrives in branded gift box'
    ],
    bgColor: '#C8C4BC',
    textColor: 'rgba(30,27,23,0.15)',
    swatches: ['#C8C4BC', '#2A2720'],
    swatchNames: ['Silver', 'Matte Black'],
    sku: 'RCL-NECK-SLV',
    fit: 'Adjustable 18" + 2"',
    material: '316L Stainless Steel',
    careNote: 'Wipe clean with soft cloth'
  },
  {
    id: 9,
    name: 'The Cross Necklace',
    variant: 'Matte Black',
    subtitle: 'Stainless Steel — Waterproof',
    collection: 'The Grace Collection',
    category: 'Jewelry',
    price: 38.00,
    badge: null,
    badgeClass: null,
    desc: 'The same cross necklace — in matte black. Understated, bold, and clean. 316L stainless steel with a brushed matte finish that holds up through anything.',
    features: [
      '316L surgical-grade stainless steel',
      'Brushed matte black finish',
      'Waterproof and tarnish-resistant',
      '18" + 2" adjustable chain',
      'Lobster claw clasp',
      'Hypoallergenic — safe for sensitive skin',
      'Arrives in branded gift box'
    ],
    bgColor: '#2A2720',
    textColor: 'rgba(248,245,240,0.2)',
    swatches: ['#C8C4BC', '#2A2720'],
    swatchNames: ['Silver', 'Matte Black'],
    sku: 'RCL-NECK-BLK',
    fit: 'Adjustable 18" + 2"',
    material: '316L Stainless Steel',
    careNote: 'Wipe clean with soft cloth'
  },
  {
    id: 10,
    name: 'The Sticker Pack',
    variant: 'Vol. 1',
    subtitle: '5-Piece Faith & Brand Pack',
    collection: 'The Grace Collection',
    category: 'Accessories',
    price: 12.00,
    badge: null,
    badgeClass: null,
    desc: 'Five premium vinyl stickers — weather-resistant, UV-resistant, and made to last. A mix of brand logos and faith-based graphics. Put them on your car, water bottle, laptop, journal — wherever your story goes.',
    features: [
      '5 stickers per pack',
      'Premium weatherproof vinyl',
      'UV and scratch resistant',
      'Sizes range from 2" to 4"',
      'Water bottle and laptop safe',
      'Vol. 1 — new designs added each phase'
    ],
    bgColor: '#F2EDE6',
    textColor: 'rgba(90,70,30,0.18)',
    swatches: [],
    swatchNames: [],
    sku: 'RCL-STK-V1',
    fit: 'N/A',
    material: 'Premium Vinyl',
    careNote: 'Apply to clean, dry surface'
  }
];

const COLLECTIONS = [
  {
    id: 'found',
    name: 'The Found Collection',
    desc: 'Hoodies and headwear for those who know where they came from.',
    bg: 'linear-gradient(160deg, #2A2520 0%, #1C1A17 100%)',
    accent: '#C4A46A',
    phase: 1
  },
  {
    id: 'redeemed',
    name: 'The Redeemed Collection',
    desc: 'Heavyweight tees built for everyday wear and everyday faith.',
    bg: 'linear-gradient(160deg, #4A4030 0%, #2E2820 100%)',
    accent: '#A09060',
    phase: 1
  },
  {
    id: 'grace',
    name: 'The Grace Collection',
    desc: 'Jewelry and accessories you carry with you everywhere.',
    bg: 'linear-gradient(160deg, #5C5248 0%, #3A3228 100%)',
    accent: '#C4A46A',
    phase: 1
  },
  {
    id: 'restore',
    name: 'The Restore Collection',
    desc: 'Premium crewnecks, quarter-zips, and elevated essentials.',
    bg: 'linear-gradient(160deg, #3A3C30 0%, #252820 100%)',
    accent: '#8A9462',
    phase: 2
  },
  {
    id: 'built',
    name: 'Built Different',
    desc: 'Premium denim, flannels, leather goods, and watches.',
    bg: 'linear-gradient(160deg, #2A2830 0%, #1C1A20 100%)',
    accent: '#8A9090',
    phase: 3
  }
];

const CATEGORIES = ['All', 'Hoodies', 'Tees', 'Headwear', 'Jewelry', 'Accessories'];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function getProductsByCategory(category) {
  if (!category || category === 'All') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

function getFeaturedProducts(count = 6) {
  return PRODUCTS.slice(0, count);
}
