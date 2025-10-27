import { useState, useMemo, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products, categories } from "@/data/products";

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("popular");

  // Auto-filter when price range changes
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes("All Categories")) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
      default:
        filtered.sort((a, b) => b.orders - a.orders);
        break;
    }

    return filtered;
  }, [priceRange, selectedCategories, sortBy]);

  const toggleCategory = (category: string) => {
    if (category === "All Categories") {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev, category]
      );
    }
  };

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
                  {categories.map((cat) => (
                    <div key={cat} className="flex items-center space-x-2">
                      <Checkbox
                        id={cat}
                        checked={cat === "All Categories" ? selectedCategories.length === 0 : selectedCategories.includes(cat)}
                        onCheckedChange={() => toggleCategory(cat)}
                      />
                      <label htmlFor={cat} className="text-sm cursor-pointer">
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-bold mb-4">Price Range (Auto Filter)</h3>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={150}
                  step={5}
                  className="mb-4"
                />
                <div className="flex items-center justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {filteredProducts.length} products found
                </p>
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

              <Button className="w-full" onClick={() => {
                setPriceRange([0, 150]);
                setSelectedCategories([]);
              }}>Reset Filters</Button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">All Products</h1>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} results
                </span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Best Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
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
