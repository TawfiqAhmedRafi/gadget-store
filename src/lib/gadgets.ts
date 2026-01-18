export interface Gadget {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  inStock: boolean;
  rating: number;
}

export const gadgets: Gadget[] = [
  {
    id: "1",
    name: "ProMax Wireless Earbuds",
    description: "Premium wireless earbuds with active noise cancellation, 32-hour battery life, and crystal-clear audio quality.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop",
    category: "Audio",
    features: ["Active Noise Cancellation", "32hr Battery", "Wireless Charging", "IPX5 Water Resistant"],
    inStock: true,
    rating: 4.8
  },
  {
    id: "2",
    name: "UltraSlim Laptop Stand",
    description: "Ergonomic aluminum laptop stand with adjustable height and angle for perfect posture.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop",
    category: "Accessories",
    features: ["Adjustable Height", "Aluminum Build", "Foldable Design", "Universal Fit"],
    inStock: true,
    rating: 4.6
  },
  {
    id: "3",
    name: "SmartWatch Pro X",
    description: "Advanced smartwatch with health monitoring, GPS tracking, and 7-day battery life.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    category: "Wearables",
    features: ["Heart Rate Monitor", "GPS Tracking", "7-Day Battery", "Water Resistant 50m"],
    inStock: true,
    rating: 4.9
  },
  {
    id: "4",
    name: "4K Webcam Ultra",
    description: "Professional 4K webcam with auto-focus, low-light correction, and built-in privacy shutter.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=600&h=600&fit=crop",
    category: "Cameras",
    features: ["4K Resolution", "Auto Focus", "Low Light Correction", "Privacy Shutter"],
    inStock: false,
    rating: 4.7
  },
  {
    id: "5",
    name: "Mechanical Gaming Keyboard",
    description: "RGB mechanical keyboard with hot-swappable switches and programmable macros.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&h=600&fit=crop",
    category: "Gaming",
    features: ["Hot-Swappable Switches", "RGB Lighting", "Macro Keys", "USB-C Connection"],
    inStock: true,
    rating: 4.8
  },
  {
    id: "6",
    name: "Portable Power Station",
    description: "High-capacity portable power station with solar charging capability and multiple outputs.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop",
    category: "Power",
    features: ["500Wh Capacity", "Solar Charging", "Multiple Outputs", "LCD Display"],
    inStock: true,
    rating: 4.5
  },
  {
    id: "7",
    name: "Noise-Canceling Headphones",
    description: "Over-ear headphones with premium sound quality and adaptive noise cancellation.",
    price: 279.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    category: "Audio",
    features: ["Adaptive ANC", "40hr Battery", "Premium Drivers", "Comfort Fit"],
    inStock: true,
    rating: 4.9
  },
  {
    id: "8",
    name: "Smart Home Hub",
    description: "Central hub for all your smart home devices with voice control and automation.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&h=600&fit=crop",
    category: "Smart Home",
    features: ["Voice Control", "Multi-Protocol", "Automation", "Energy Monitoring"],
    inStock: true,
    rating: 4.4
  },
  {
    id: "9",
    name: "Drone Pro 4K",
    description: "Professional drone with 4K camera, obstacle avoidance, and 45-minute flight time.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=600&fit=crop",
    category: "Cameras",
    features: ["4K Camera", "Obstacle Avoidance", "45min Flight", "GPS Return"],
    inStock: true,
    rating: 4.7
  },
  {
    id: "10",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=600&h=600&fit=crop",
    category: "Accessories",
    features: ["15W Fast Charging", "Universal Compatibility", "LED Indicator", "Slim Design"],
    inStock: true,
    rating: 4.3
  },
  {
    id: "11",
    name: "VR Headset Elite",
    description: "Immersive VR headset with high-resolution displays and precise motion tracking.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=600&fit=crop",
    category: "Gaming",
    features: ["4K Per Eye", "120Hz Refresh", "Inside-Out Tracking", "Wireless Mode"],
    inStock: true,
    rating: 4.6
  },
  {
    id: "12",
    name: "Smart Ring Tracker",
    description: "Discreet health and fitness tracker in an elegant ring form factor.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop",
    category: "Wearables",
    features: ["Sleep Tracking", "Heart Rate", "Activity Tracking", "7-Day Battery"],
    inStock: false,
    rating: 4.5
  }
];

export const categories = [
  { name: "Audio", icon: "🎧", count: 2 },
  { name: "Accessories", icon: "⌨️", count: 2 },
  { name: "Wearables", icon: "⌚", count: 2 },
  { name: "Cameras", icon: "📷", count: 2 },
  { name: "Gaming", icon: "🎮", count: 2 },
  { name: "Power", icon: "🔋", count: 1 },
  { name: "Smart Home", icon: "🏠", count: 1 },
];

export const getGadgetById = (id: string): Gadget | undefined => {
  return gadgets.find(g => g.id === id);
};

export const getGadgetsByCategory = (category: string): Gadget[] => {
  return gadgets.filter(g => g.category === category);
};

export const getFeaturedGadgets = (): Gadget[] => {
  return gadgets.filter(g => g.rating >= 4.7).slice(0, 4);
};

export const getNewArrivals = (): Gadget[] => {
  return gadgets.slice(-4);
};
