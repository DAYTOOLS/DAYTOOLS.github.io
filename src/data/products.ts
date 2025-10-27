// Product data with many variants and categories
export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  orders: number;
  category: string;
  discount?: number;
}

export const products: Product[] = [
  // Electronics
  { id: "1", title: "Wireless Bluetooth Earbuds Pro - HD Sound Quality with Noise Cancelling", price: 29.99, originalPrice: 79.99, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400", rating: 4.8, orders: 15234, category: "Electronics" },
  { id: "2", title: "Smart Watch Fitness Tracker with Heart Rate Monitor", price: 45.50, originalPrice: 129.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", rating: 4.7, orders: 12890, category: "Electronics" },
  { id: "3", title: "USB-C Fast Charging Cable 3-Pack 6ft", price: 12.99, originalPrice: 24.99, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400", rating: 4.5, orders: 23456, category: "Electronics" },
  { id: "4", title: "Portable Power Bank 20000mAh Quick Charge", price: 22.99, originalPrice: 49.99, image: "https://images.unsplash.com/photo-1609091839311-d7f7f7e60a5e?w=400", rating: 4.6, orders: 18765, category: "Electronics" },
  { id: "5", title: "Wireless Gaming Mouse RGB LED 6400 DPI", price: 19.99, originalPrice: 59.99, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400", rating: 4.9, orders: 9876, category: "Electronics" },
  
  // Fashion & Accessories
  { id: "6", title: "Men's Leather Wallet RFID Blocking Slim Bifold", price: 15.99, originalPrice: 39.99, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", rating: 4.7, orders: 14523, category: "Fashion" },
  { id: "7", title: "Women's Crossbody Bag Leather Shoulder Handbag", price: 28.99, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400", rating: 4.8, orders: 11234, category: "Fashion" },
  { id: "8", title: "Polarized Sunglasses UV400 Protection for Men/Women", price: 9.99, originalPrice: 29.99, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400", rating: 4.4, orders: 19876, category: "Fashion" },
  { id: "9", title: "Stainless Steel Watch Band Mesh Strap 20mm", price: 8.50, originalPrice: 19.99, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400", rating: 4.6, orders: 8765, category: "Fashion" },
  { id: "10", title: "Leather Belt Automatic Buckle for Men Business", price: 16.99, originalPrice: 45.99, image: "https://images.unsplash.com/photo-1624222247344-550fb60583c2?w=400", rating: 4.5, orders: 6543, category: "Fashion" },

  // Home & Garden
  { id: "11", title: "LED Strip Lights 50ft RGB Color Changing with Remote", price: 24.99, originalPrice: 69.99, image: "https://images.unsplash.com/photo-1603732551681-db155e93d2d5?w=400", rating: 4.7, orders: 21098, category: "Home" },
  { id: "12", title: "Kitchen Knife Set 15-Piece German Stainless Steel", price: 35.99, originalPrice: 129.99, image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400", rating: 4.9, orders: 7654, category: "Home" },
  { id: "13", title: "Memory Foam Pillow Set of 2 Cooling Gel", price: 29.99, originalPrice: 79.99, image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400", rating: 4.8, orders: 13456, category: "Home" },
  { id: "14", title: "Shower Curtain Set with Hooks Waterproof Fabric", price: 12.99, originalPrice: 32.99, image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400", rating: 4.3, orders: 9234, category: "Home" },
  { id: "15", title: "Artificial Plants Set of 6 Fake Succulents", price: 18.99, originalPrice: 44.99, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4baa?w=400", rating: 4.6, orders: 11876, category: "Home" },

  // Sports & Outdoors
  { id: "16", title: "Resistance Bands Set Exercise Workout Bands 5pcs", price: 14.99, originalPrice: 39.99, image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400", rating: 4.7, orders: 16789, category: "Sports" },
  { id: "17", title: "Yoga Mat Non-Slip Extra Thick 6mm with Carrying Strap", price: 19.99, originalPrice: 49.99, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400", rating: 4.8, orders: 14320, category: "Sports" },
  { id: "18", title: "Water Bottle 32oz with Time Marker BPA Free", price: 11.99, originalPrice: 24.99, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400", rating: 4.5, orders: 22456, category: "Sports" },
  { id: "19", title: "Jump Rope Speed Rope for Fitness Training", price: 8.99, originalPrice: 19.99, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400", rating: 4.4, orders: 8976, category: "Sports" },
  { id: "20", title: "Camping Tent 2-Person Waterproof with Carry Bag", price: 42.99, originalPrice: 119.99, image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400", rating: 4.6, orders: 5432, category: "Sports" },

  // Beauty & Health
  { id: "21", title: "Facial Cleansing Brush Silicone Waterproof", price: 13.99, originalPrice: 34.99, image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400", rating: 4.7, orders: 10987, category: "Beauty" },
  { id: "22", title: "Hair Straightener Brush Fast Heating Ceramic", price: 21.99, originalPrice: 59.99, image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400", rating: 4.8, orders: 9345, category: "Beauty" },
  { id: "23", title: "Essential Oils Set Aromatherapy 10 x 10ml", price: 16.99, originalPrice: 44.99, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400", rating: 4.6, orders: 12567, category: "Beauty" },
  { id: "24", title: "Makeup Brush Set Professional 12pcs with Case", price: 17.99, originalPrice: 49.99, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400", rating: 4.9, orders: 11234, category: "Beauty" },
  { id: "25", title: "Massage Gun Deep Tissue Muscle Massager", price: 45.99, originalPrice: 149.99, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400", rating: 4.8, orders: 8654, category: "Beauty" },

  // Toys & Games
  { id: "26", title: "Building Blocks Set 1000 Pieces Creative Kids Toy", price: 25.99, originalPrice: 69.99, image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400", rating: 4.9, orders: 17890, category: "Toys" },
  { id: "27", title: "Remote Control Car RC Monster Truck for Kids", price: 32.99, originalPrice: 79.99, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", rating: 4.7, orders: 9876, category: "Toys" },
  { id: "28", title: "Puzzle Set 1000 Pieces Jigsaw for Adults", price: 14.99, originalPrice: 34.99, image: "https://images.unsplash.com/photo-1587731556938-38755b11c6f6?w=400", rating: 4.6, orders: 6543, category: "Toys" },
  { id: "29", title: "Educational Learning Tablet for Kids Ages 3-7", price: 38.99, originalPrice: 99.99, image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400", rating: 4.8, orders: 7890, category: "Toys" },
  { id: "30", title: "Board Game Family Fun Night Strategy Game", price: 22.99, originalPrice: 54.99, image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400", rating: 4.7, orders: 5678, category: "Toys" },

  // Pet Supplies
  { id: "31", title: "Pet Bed Orthopedic Memory Foam Dog Bed Large", price: 34.99, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400", rating: 4.9, orders: 8765, category: "Pets" },
  { id: "32", title: "Cat Tree Tower with Scratching Posts 36 inch", price: 42.99, originalPrice: 119.99, image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400", rating: 4.8, orders: 6543, category: "Pets" },
  { id: "33", title: "Automatic Pet Feeder with Timer Programmable", price: 28.99, originalPrice: 69.99, image: "https://images.unsplash.com/photo-1591768575796-e3d2f59f8f31?w=400", rating: 4.7, orders: 10234, category: "Pets" },
  { id: "34", title: "Dog Leash Retractable 16ft with LED Light", price: 15.99, originalPrice: 34.99, image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400", rating: 4.6, orders: 12345, category: "Pets" },
  { id: "35", title: "Pet Water Fountain 2L Automatic Cat Dog Drinking", price: 24.99, originalPrice: 54.99, image: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=400", rating: 4.8, orders: 9876, category: "Pets" },

  // Automotive
  { id: "36", title: "Phone Holder for Car Dashboard Magnetic Mount", price: 11.99, originalPrice: 29.99, image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400", rating: 4.7, orders: 18765, category: "Auto" },
  { id: "37", title: "Car Vacuum Cleaner Cordless Handheld Powerful", price: 32.99, originalPrice: 79.99, image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400", rating: 4.8, orders: 7654, category: "Auto" },
  { id: "38", title: "Dash Cam 1080P Front and Rear Camera Night Vision", price: 48.99, originalPrice: 129.99, image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400", rating: 4.9, orders: 5432, category: "Auto" },
  { id: "39", title: "Car Air Purifier Ionizer with HEPA Filter", price: 26.99, originalPrice: 64.99, image: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=400", rating: 4.6, orders: 8765, category: "Auto" },
  { id: "40", title: "Tire Pressure Gauge Digital with LED Light", price: 9.99, originalPrice: 24.99, image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400", rating: 4.5, orders: 11234, category: "Auto" },

  // Office Supplies
  { id: "41", title: "Ergonomic Office Chair Lumbar Support Adjustable", price: 89.99, originalPrice: 249.99, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400", rating: 4.8, orders: 4567, category: "Office" },
  { id: "42", title: "Standing Desk Converter Height Adjustable 32 inch", price: 79.99, originalPrice: 199.99, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400", rating: 4.7, orders: 3456, category: "Office" },
  { id: "43", title: "Wireless Keyboard and Mouse Combo Full Size", price: 24.99, originalPrice: 59.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400", rating: 4.6, orders: 12345, category: "Office" },
  { id: "44", title: "Monitor Stand Riser with Storage Drawer", price: 21.99, originalPrice: 49.99, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400", rating: 4.5, orders: 9876, category: "Office" },
  { id: "45", title: "Desk Organizer Set 5 Pieces Mesh Metal Black", price: 18.99, originalPrice: 39.99, image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400", rating: 4.7, orders: 7654, category: "Office" },

  // Kitchen & Dining
  { id: "46", title: "Air Fryer 6QT Digital Touchscreen Oil-Less Cooker", price: 62.99, originalPrice: 149.99, image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400", rating: 4.9, orders: 11234, category: "Kitchen" },
  { id: "47", title: "Blender Smoothie Maker 1000W with 2 Travel Cups", price: 34.99, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400", rating: 4.8, orders: 9876, category: "Kitchen" },
  { id: "48", title: "Coffee Maker Programmable 12-Cup with Timer", price: 29.99, originalPrice: 69.99, image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400", rating: 4.7, orders: 8765, category: "Kitchen" },
  { id: "49", title: "Food Storage Containers Set 24 Pieces BPA Free", price: 19.99, originalPrice: 44.99, image: "https://images.unsplash.com/photo-1584910428346-12d582b37e10?w=400", rating: 4.6, orders: 14567, category: "Kitchen" },
  { id: "50", title: "Electric Kettle 1.7L Fast Boiling Stainless Steel", price: 22.99, originalPrice: 49.99, image: "https://images.unsplash.com/photo-1563822249548-9a72b6409f9f?w=400", rating: 4.8, orders: 10987, category: "Kitchen" },
];

export const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Home",
  "Sports",
  "Beauty",
  "Toys",
  "Pets",
  "Auto",
  "Office",
  "Kitchen",
];
