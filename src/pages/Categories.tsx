import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  const mainCategories = [
    {
      name: "Pet Supplies",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80",
      subcategories: ["Dog Supplies", "Cat Supplies", "Pet Toys", "Pet Food", "Grooming"],
      productCount: 15234
    },
    {
      name: "Shoes & Accessories",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80",
      subcategories: ["Men's Shoes", "Women's Shoes", "Sports Shoes", "Sandals", "Boots"],
      productCount: 23456
    },
    {
      name: "Apparel",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
      subcategories: ["Men's Clothing", "Women's Clothing", "Kids Clothing", "Activewear", "Outerwear"],
      productCount: 34567
    },
    {
      name: "Bags & Fashion Accessories",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      subcategories: ["Handbags", "Backpacks", "Wallets", "Belts", "Jewelry"],
      productCount: 18765
    },
    {
      name: "Home & Garden",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80",
      subcategories: ["Furniture", "Kitchen", "Bedding", "Decor", "Garden Tools"],
      productCount: 29876
    },
    {
      name: "Cell Phones & Surveillance",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
      subcategories: ["Smartphones", "Cases", "Accessories", "Security Cameras", "Smart Home"],
      productCount: 21345
    },
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80",
      subcategories: ["Laptops", "Headphones", "Speakers", "Cameras", "Gaming"],
      productCount: 26789
    },
    {
      name: "Sports & Outdoors",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
      subcategories: ["Fitness Equipment", "Outdoor Gear", "Sports Wear", "Camping", "Cycling"],
      productCount: 17654
    },
    {
      name: "Health & Beauty",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
      subcategories: ["Skincare", "Makeup", "Hair Care", "Wellness", "Fragrances"],
      productCount: 19876
    },
    {
      name: "Toys & Gifts",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&q=80",
      subcategories: ["Action Figures", "Dolls", "Educational Toys", "Board Games", "Baby Toys"],
      productCount: 14532
    },
    {
      name: "Jewelry & Watches",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
      subcategories: ["Rings", "Necklaces", "Watches", "Bracelets", "Earrings"],
      productCount: 22345
    },
    {
      name: "Computers & Games",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80",
      subcategories: ["PC Components", "Gaming Consoles", "Video Games", "Accessories", "Software"],
      productCount: 16789
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Browse All Categories</h1>
            <p className="text-xl opacity-90">Explore millions of products across all categories</p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainCategories.map((category) => (
              <Link to="/products" key={category.name}>
                <Card className="overflow-hidden hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-2xl font-bold mb-1">{category.name}</h3>
                      <p className="text-white/80 text-sm">{category.productCount.toLocaleString()} products</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {category.subcategories.slice(0, 4).map((sub) => (
                        <span
                          key={sub}
                          className="text-xs bg-muted px-2 py-1 rounded-full hover:bg-primary hover:text-white transition-colors"
                        >
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 4 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{category.subcategories.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-medium">Shop Now</span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Searches */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Popular Searches</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "iPhone Cases", "Smart Watch", "Bluetooth Speaker", "LED Lights",
                "Yoga Mat", "Running Shoes", "Backpack", "Wireless Earbuds",
                "Gaming Mouse", "Phone Holder", "Water Bottle", "Sunglasses",
                "Makeup Brush", "Hair Dryer", "Laptop Stand", "Power Bank"
              ].map((term) => (
                <Link
                  key={term}
                  to="/products"
                  className="px-4 py-2 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
