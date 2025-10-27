import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const allProducts = [
    { id: "1", title: "Wireless Earbuds Pro with Noise Cancellation", price: 27.97, originalPrice: 99.99, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80", orders: 1205 },
    { id: "2", title: "Designer Crossbody Bag Women's Fashion", price: 18.63, originalPrice: 62.10, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80", orders: 892 },
    { id: "3", title: "Smart Watch Fitness Tracker Heart Rate", price: 45.99, originalPrice: 129.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", orders: 2341 },
    { id: "4", title: "LED Ring Light for Photography Studio", price: 32.50, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&q=80", orders: 567 },
    { id: "5", title: "Portable Bluetooth Speaker Waterproof", price: 19.99, originalPrice: 59.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80", orders: 1678 },
    { id: "6", title: "Gaming Mouse RGB Programmable Buttons", price: 24.99, originalPrice: 69.99, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80", orders: 934 },
    { id: "7", title: "Phone Case with Card Holder Leather", price: 8.99, originalPrice: 24.99, image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80", orders: 3421 },
    { id: "8", title: "Yoga Mat Non-Slip Exercise Fitness", price: 15.99, originalPrice: 45.99, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&q=80", orders: 721 },
    { id: "9", title: "Stainless Steel Water Bottle Insulated", price: 12.99, originalPrice: 35.99, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80", orders: 456 },
    { id: "10", title: "Wireless Charging Pad Fast Charger", price: 16.99, originalPrice: 44.99, image: "https://images.unsplash.com/photo-1591290619762-d2c9aab7e4d3?w=400&q=80", orders: 823 },
    { id: "11", title: "Sunglasses UV Protection Polarized", price: 9.99, originalPrice: 29.99, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80", orders: 1234 },
    { id: "12", title: "Backpack Travel Laptop Business Bag", price: 34.99, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80", orders: 678 },
    { id: "13", title: "Running Shoes Breathable Sneakers", price: 39.99, originalPrice: 99.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", orders: 1567 },
    { id: "14", title: "Laptop Stand Aluminum Adjustable", price: 22.99, originalPrice: 54.99, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80", orders: 432 },
    { id: "15", title: "Electric Toothbrush Rechargeable", price: 29.99, originalPrice: 79.99, image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&q=80", orders: 891 },
    { id: "16", title: "Camera Tripod Professional Adjustable", price: 35.99, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1567634287079-f00c75cbc50d?w=400&q=80", orders: 234 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {["Electronics", "Fashion", "Home & Garden", "Sports", "Beauty", "Toys"].map((cat) => (
                    <div key={cat} className="flex items-center space-x-2">
                      <Checkbox id={cat} />
                      <label htmlFor={cat} className="text-sm cursor-pointer">
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-bold mb-4">Price Range</h3>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1000}
                  step={10}
                  className="mb-4"
                />
                <div className="flex items-center justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="font-bold mb-4">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating}`} />
                      <label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center">
                        {"⭐".repeat(rating)} & Up
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping */}
              <div>
                <h3 className="font-bold mb-4">Shipping</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="free-shipping" />
                    <label htmlFor="free-shipping" className="text-sm cursor-pointer">
                      Free Shipping
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fast-delivery" />
                    <label htmlFor="fast-delivery" className="text-sm cursor-pointer">
                      Fast Delivery
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">All Products</h1>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Showing {allProducts.length} results
                </span>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Best Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
