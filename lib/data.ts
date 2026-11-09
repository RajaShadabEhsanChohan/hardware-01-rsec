export type Category =
  | "Hand Tools"
  | "Power Tools"
  | "Plumbing"
  | "Electrical"
  | "Paints"
  | "Fasteners"
  | "Safety Gear"
  | "Building";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge?: "Best Seller" | "Sale" | "New" | "Pro Pick";
  emoji: string;
  tone: "orange" | "yellow" | "blue" | "red" | "green" | "steel";
}

export interface CategoryCard {
  name: Category;
  emoji: string;
  count: number;
  blurb: string;
}

export const categories: CategoryCard[] = [
  { name: "Hand Tools", emoji: "🔨", count: 240, blurb: "Hammers, wrenches, pliers & more" },
  { name: "Power Tools", emoji: "⚡", count: 128, blurb: "Drills, grinders, saws & sanders" },
  { name: "Plumbing", emoji: "🚿", count: 190, blurb: "Pipes, fittings, taps & valves" },
  { name: "Electrical", emoji: "💡", count: 210, blurb: "Wires, switches, breakers & lights" },
  { name: "Paints", emoji: "🎨", count: 96, blurb: "Interior, exterior & wood finishes" },
  { name: "Fasteners", emoji: "🔩", count: 320, blurb: "Screws, bolts, nails & anchors" },
  { name: "Safety Gear", emoji: "🦺", count: 74, blurb: "Helmets, gloves, goggles & boots" },
  { name: "Building", emoji: "🧱", count: 85, blurb: "Cement, tiles, adhesives & sealants" },
];

export const products: Product[] = [
  { id: "p1", name: "Claw Hammer 16oz Fiberglass", brand: "ForgeMaster", category: "Hand Tools", price: 1450, oldPrice: 1800, rating: 4.8, reviews: 312, badge: "Best Seller", emoji: "🔨", tone: "orange" },
  { id: "p2", name: "Cordless Drill 20V Li-ion Kit", brand: "VoltPro", category: "Power Tools", price: 18900, oldPrice: 22500, rating: 4.9, reviews: 540, badge: "Pro Pick", emoji: "🪛", tone: "yellow" },
  { id: "p3", name: "Angle Grinder 850W 4.5\"", brand: "BoltEdge", category: "Power Tools", price: 7800, rating: 4.6, reviews: 198, emoji: "⚙️", tone: "steel" },
  { id: "p4", name: "PVC Pipe Fitting Set (24 pcs)", brand: "AquaFlow", category: "Plumbing", price: 2350, rating: 4.5, reviews: 87, badge: "New", emoji: "🔧", tone: "blue" },
  { id: "p5", name: "Heavy-Duty Extension Reel 25m", brand: "SparkSafe", category: "Electrical", price: 4900, oldPrice: 5800, rating: 4.7, reviews: 164, badge: "Sale", emoji: "🔌", tone: "red" },
  { id: "p6", name: "Weather-Shield Exterior Paint 4L", brand: "ColorCraft", category: "Paints", price: 5600, rating: 4.6, reviews: 221, emoji: "🎨", tone: "green" },
  { id: "p7", name: "Stainless Screw & Bolt Box (600 pcs)", brand: "GripFix", category: "Fasteners", price: 2990, rating: 4.8, reviews: 402, badge: "Best Seller", emoji: "🔩", tone: "steel" },
  { id: "p8", name: "Safety Helmet + Goggles Combo", brand: "ShieldOn", category: "Safety Gear", price: 1990, oldPrice: 2400, rating: 4.7, reviews: 143, badge: "Sale", emoji: "⛑️", tone: "yellow" },
  { id: "p9", name: "Premium Cement Grade 53 (50kg)", brand: "RockSolid", category: "Building", price: 1380, rating: 4.4, reviews: 76, emoji: "🧱", tone: "steel" },
  { id: "p10", name: "Socket Wrench Set 108 pcs", brand: "ForgeMaster", category: "Hand Tools", price: 9450, oldPrice: 11200, rating: 4.9, reviews: 288, badge: "Pro Pick", emoji: "🧰", tone: "orange" },
  { id: "p11", name: "LED Floodlight 100W Outdoor", brand: "BrightArc", category: "Electrical", price: 3250, rating: 4.5, reviews: 119, badge: "New", emoji: "🔦", tone: "blue" },
  { id: "p12", name: "Aluminium Ladder 8ft Folding", brand: "ClimbSure", category: "Building", price: 12500, rating: 4.6, reviews: 92, emoji: "🪜", tone: "red" },
];

export const brands = ["ForgeMaster", "VoltPro", "BoltEdge", "AquaFlow", "SparkSafe", "ColorCraft", "GripFix", "ShieldOn"];

export const testimonials = [
  { name: "Imran Qureshi", role: "Building Contractor", text: "Every bolt, every cable I need for a site is on the shelf and the prices are honest. IronHub saves me two trips a week.", rating: 5 },
  { name: "Ayesha Malik", role: "Interior Designer", text: "Their paint desk matched a tricky shade perfectly and delivered the same day. Genuinely helpful staff.", rating: 5 },
  { name: "Usman Tariq", role: "Home Renovator", text: "Bought a full drill kit and safety gear. Quality is the real deal, with a proper warranty card too.", rating: 5 },
];

export const formatPrice = (n: number) => "Rs. " + n.toLocaleString("en-PK");
