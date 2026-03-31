const products = [
  {
    id: 1, name: "Obsidian Wool Coat",
    category: "Women", price: 89000, originalPrice: 120000,
    rating: 4.8, reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?w=600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80"
    ],
    sizes: ["XS","S","M","L","XL"],
    colors: ["#1a1a1a","#5a4a3a","#2d3a2d"],
    badge: "sale", description: "A luxurious double-faced wool coat with clean lines and a contemporary silhouette. Crafted from Italian merino wool with satin-lined interior.",
    featured: true, newest: false, bestseller: true
  },
  {
    id: 2, name: "Silk Reverie Blouse",
    category: "Women", price: 34000, originalPrice: null,
    rating: 4.9, reviews: 87,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"
    ],
    sizes: ["XS","S","M","L"],
    colors: ["#f5f0e8","#c9a84c","#2d3a2d"],
    badge: "new", description: "Pure mulberry silk charmeuse blouse with a relaxed drape. Features mother-of-pearl buttons and French seam detailing.",
    featured: true, newest: true, bestseller: false
  },
  {
    id: 3, name: "Noir Tailored Blazer",
    category: "Men", price: 72000, originalPrice: 96000,
    rating: 4.7, reviews: 56,
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80"
    ],
    sizes: ["S","M","L","XL","XXL"],
    colors: ["#1a1a1a","#2a2a3a","#4a3a2a"],
    badge: "sale", description: "A perfectly tailored single-breasted blazer in fine Italian wool. Half-canvas construction ensures a flawless drape.",
    featured: true, newest: false, bestseller: true
  },
  {
    id: 4, name: "Margaux Leather Tote",
    category: "Accessories", price: 58000, originalPrice: null,
    rating: 5.0, reviews: 212,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80"
    ],
    sizes: ["One Size"],
    colors: ["#1a1a1a","#8b6914","#5a3a2a"],
    badge: "bestseller", description: "Full-grain vegetable-tanned leather tote. Features a suede-lined interior, three inside pockets, and brass hardware.",
    featured: true, newest: false, bestseller: true
  },
  {
    id: 5, name: "Cashmere Turtleneck",
    category: "Men", price: 42000, originalPrice: null,
    rating: 4.6, reviews: 43,
    images: [
      "https://images.unsplash.com/photo-1520975913239-0e95f3f7b31a?w=600&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=600&q=80"
    ],
    sizes: ["S","M","L","XL"],
    colors: ["#f5f0e8","#1a1a1a","#5a3a2a"],
    badge: "new", description: "Grade-A Mongolian cashmere turtleneck with ribbed cuffs and hem. Timeless layering essential.",
    featured: false, newest: true, bestseller: false
  },
  {
    id: 6, name: "Serpentine Belt",
    category: "Accessories", price: 18500, originalPrice: 25000,
    rating: 4.5, reviews: 31,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80"
    ],
    sizes: ["70cm","75cm","80cm","85cm","90cm"],
    colors: ["#1a1a1a","#8b6914"],
    badge: "sale", description: "Supple calfskin leather belt with antique gold serpentine buckle. Made in Florence.",
    featured: false, newest: false, bestseller: false
  },
  {
    id: 7, name: "Evening Crepe Dress",
    category: "Women", price: 64000, originalPrice: null,
    rating: 4.9, reviews: 77,
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"
    ],
    sizes: ["XS","S","M","L","XL"],
    colors: ["#1a1a1a","#2d3a2d","#2a2a3a"],
    badge: "new", description: "Floor-length dress in matte crepe with a subtle flutter sleeve. Built-in camisole lining for comfort.",
    featured: true, newest: true, bestseller: false
  },
  {
    id: 8, name: "Oxford Derby Shoes",
    category: "Men", price: 49000, originalPrice: null,
    rating: 4.8, reviews: 64,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80",
      "https://images.unsplash.com/photo-1518894781321-630e638d0742?w=600&q=80"
    ],
    sizes: ["40","41","42","43","44","45"],
    colors: ["#1a1a1a","#8b6914","#5a3a2a"],
    badge: null, description: "Goodyear-welted Oxford derbies in burnished calfskin. Double leather sole with brass eye details.",
    featured: false, newest: false, bestseller: true
  },
  {
    id: 9, name: "Gold Chain Necklace",
    category: "Accessories", price: 28000, originalPrice: 38000,
    rating: 4.7, reviews: 92,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
    ],
    sizes: ["40cm","45cm","50cm"],
    colors: ["#c9a84c","#c0c0c0"],
    badge: "sale", description: "18k gold-plated sterling silver Byzantine chain. Polished finish with lobster claw clasp.",
    featured: false, newest: false, bestseller: false
  },
  {
    id: 10, name: "Linen Shirt",
    category: "Men", price: 19500, originalPrice: null,
    rating: 4.5, reviews: 38,
    images: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80",
      "https://images.unsplash.com/photo-1520975913239-0e95f3f7b31a?w=600&q=80",
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=600&q=80"
    ],
    sizes: ["S","M","L","XL","XXL"],
    colors: ["#f5f0e8","#c9a84c","#2d3a5a"],
    badge: null, description: "Relaxed-fit linen shirt in premium stone-washed Belgian linen. Mother-of-pearl buttons.",
    featured: false, newest: true, bestseller: false
  },
  {
    id: 11, name: "Velvet Evening Bag",
    category: "Accessories", price: 32000, originalPrice: null,
    rating: 4.9, reviews: 55,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80"
    ],
    sizes: ["One Size"],
    colors: ["#1a1a1a","#2d3a5a","#5a2d3a"],
    badge: "new", description: "Midnight velvet structured clutch with gold chain strap and art deco clasp closure.",
    featured: true, newest: true, bestseller: false
  },
  {
    id: 12, name: "Wide Leg Trousers",
    category: "Women", price: 39000, originalPrice: 48000,
    rating: 4.6, reviews: 49,
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    ],
    sizes: ["XS","S","M","L","XL"],
    colors: ["#1a1a1a","#f5f0e8","#5a4a3a"],
    badge: "sale", description: "High-waisted palazzo trousers in stretch crepe. Features a wide waistband and clean pressed pleats.",
    featured: false, newest: false, bestseller: false
  },
  {
    id: 13, name: "Merino Crew Jumper",
    category: "Men", price: 28500, originalPrice: null,
    rating: 4.7, reviews: 73,
    images: [
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=600&q=80",
      "https://images.unsplash.com/photo-1520975913239-0e95f3f7b31a?w=600&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80"
    ],
    sizes: ["S","M","L","XL"],
    colors: ["#c9a84c","#1a1a1a","#f5f0e8"],
    badge: null, description: "Extra-fine merino wool crew-neck sweater. Garment-dyed for a lived-in, rich depth of colour.",
    featured: false, newest: false, bestseller: true
  },
  {
    id: 14, name: "Sunstone Earrings",
    category: "Accessories", price: 14500, originalPrice: null,
    rating: 4.8, reviews: 28,
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80"
    ],
    sizes: ["One Size"],
    colors: ["#c9a84c"],
    badge: "new", description: "Drop earrings featuring natural sunstone cabochons set in vermeil gold. Secure butterfly fastening.",
    featured: false, newest: true, bestseller: false
  },
  {
    id: 15, name: "Ruched Midi Skirt",
    category: "Women", price: 26500, originalPrice: null,
    rating: 4.5, reviews: 40,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80"
    ],
    sizes: ["XS","S","M","L","XL"],
    colors: ["#1a1a1a","#5a2d3a","#2d3a5a"],
    badge: null, description: "Pull-on midi skirt with a gathered ruched side-seam detail. Stretch fabric for all-day comfort.",
    featured: false, newest: false, bestseller: false
  },
  {
    id: 16, name: "Slim Fit Chinos",
    category: "Sale", price: 12000, originalPrice: 22000,
    rating: 4.3, reviews: 19,
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80"
    ],
    sizes: ["28","30","32","34","36"],
    colors: ["#f5f0e8","#5a4a3a","#2d3a2d"],
    badge: "sale", description: "Slim-cut chinos in garment-dyed stretch cotton. Five-pocket styling with a clean taper.",
    featured: false, newest: false, bestseller: false
  },
  {
    id: 17, name: "Cashmere Wrap Dress",
    category: "Sale", price: 31000, originalPrice: 58000,
    rating: 4.8, reviews: 61,
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"
    ],
    sizes: ["XS","S","M","L"],
    colors: ["#5a4a3a","#1a1a1a","#f5f0e8"],
    badge: "sale", description: "Wrap dress in fine cashmere jersey. Features a self-tie waist and V-neckline. Limited sizes remaining.",
    featured: false, newest: false, bestseller: false
  },
  {
    id: 18, name: "Suede Chelsea Boots",
    category: "Sale", price: 22000, originalPrice: 44000,
    rating: 4.6, reviews: 33,
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      "https://images.unsplash.com/photo-1518894781321-630e638d0742?w=600&q=80"
    ],
    sizes: ["36","37","38","39","40","41"],
    colors: ["#5a4a3a","#1a1a1a"],
    badge: "sale", description: "Italian suede Chelsea boots with a stacked heel and elasticated side gusset. Leather-lined footbed.",
    featured: false, newest: false, bestseller: false
  },
  {
    id: 19, name: "Structured Tuxedo",
    category: "Men", price: 120000, originalPrice: null,
    rating: 4.9, reviews: 18,
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80"
    ],
    sizes: ["S","M","L","XL","XXL"],
    colors: ["#1a1a1a","#2a2a3a"],
    badge: "limited", description: "Peak-lapel tuxedo in Italian Canclini wool. Satin facings on lapels, buttons, and pocket trim.",
    featured: true, newest: false, bestseller: false
  },
  {
    id: 20, name: "Silk Satin Slip Dress",
    category: "Women", price: 48000, originalPrice: null,
    rating: 4.8, reviews: 95,
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    ],
    sizes: ["XS","S","M","L","XL"],
    colors: ["#f5f0e8","#c9a84c","#1a1a1a"],
    badge: "bestseller", description: "Bias-cut pure silk satin slip dress with adjustable spaghetti straps and lace trim.",
    featured: true, newest: false, bestseller: true
  },
  {
    id: 21, name: "Statement Sunglasses",
    category: "Accessories", price: 21000, originalPrice: null,
    rating: 4.6, reviews: 47,
    images: [
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&q=80",
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80"
    ],
    sizes: ["One Size"],
    colors: ["#1a1a1a","#5a4a3a","#c9a84c"],
    badge: null, description: "Oversized square frames in hand-polished acetate with mineral glass lenses. UV400 protection.",
    featured: false, newest: true, bestseller: false
  },
  {
    id: 22, name: "Wool Blazer Dress",
    category: "Sale", price: 19500, originalPrice: 42000,
    rating: 4.4, reviews: 22,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"
    ],
    sizes: ["XS","S","M","L"],
    colors: ["#1a1a1a","#5a4a3a"],
    badge: "sale", description: "Relaxed blazer-dress hybrid in boiled wool. Features a notched lapel, welt pockets, and a self-belt.",
    featured: false, newest: false, bestseller: false
  }
];

const categories = [
  { name: "Women", count: 7, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80" },
  { name: "Men", count: 7, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
  { name: "Accessories", count: 7, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80" },
  { name: "Sale", count: 5, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80" }
];