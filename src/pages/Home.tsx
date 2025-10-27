import { Link } from "react-router-dom";
import { ArrowRight, Shield, Truck, Headphones, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => {
  const categories = [
    { name: "Pet Supplies", image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&q=80" },
    { name: "Shoes & Accessories", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&q=80" },
    { name: "Apparel", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80" },
    { name: "Bags & Fashion", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
    { name: "Home & Garden", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&q=80" },
    { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80" },
    { name: "Sports & Outdoors", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80" },
    { name: "Health & Beauty", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80" },
  ];

  const flashDeals = [
    { id: "1", title: "Wireless Earbuds Pro with Noise Cancellation", price: 27.97, originalPrice: 99.99, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80", orders: 1205 },
    { id: "2", title: "Designer Crossbody Bag Women's Fashion", price: 18.63, originalPrice: 62.10, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80", orders: 892 },
    { id: "3", title: "Smart Watch Fitness Tracker Heart Rate", price: 45.99, originalPrice: 129.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", orders: 2341 },
    { id: "4", title: "LED Ring Light for Photography Studio", price: 32.50, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&q=80", orders: 567 },
    { id: "5", title: "Portable Bluetooth Speaker Waterproof", price: 19.99, originalPrice: 59.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80", orders: 1678 },
    { id: "6", title: "Gaming Mouse RGB Programmable Buttons", price: 24.99, originalPrice: 69.99, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80", orders: 934 },
    { id: "7", title: "Phone Case with Card Holder Leather", price: 8.99, originalPrice: 24.99, image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80", orders: 3421 },
    { id: "8", title: "Yoga Mat Non-Slip Exercise Fitness", price: 15.99, originalPrice: 45.99, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&q=80", orders: 721 },
  ];

  const featuredProducts = [
    { id: "9", title: "Stainless Steel Water Bottle Insulated", price: 12.99, originalPrice: 35.99, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80", orders: 456 },
    { id: "10", title: "Wireless Charging Pad Fast Charger", price: 16.99, originalPrice: 44.99, image: "https://images.unsplash.com/photo-1591290619762-d2c9aab7e4d3?w=400&q=80", orders: 823 },
    { id: "11", title: "Sunglasses UV Protection Polarized", price: 9.99, originalPrice: 29.99, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80", orders: 1234 },
    { id: "12", title: "Backpack Travel Laptop Business Bag", price: 34.99, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80", orders: 678 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[500px] bg-gradient-to-r from-primary via-orange-500 to-secondary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <h1 className="text-6xl font-bold mb-6">
                Winter Warm-Up<br />
                <span className="text-secondary">Get Cozy Save Big</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Up to 90% OFF on selected items. New users get exclusive deals!
              </p>
              <Link to="/flash-deals">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="bg-white py-8 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center gap-4">
                <Shield className="h-12 w-12 text-primary" />
                <div>
                  <h3 className="font-semibold">Worry-Free Shopping</h3>
                  <p className="text-sm text-muted-foreground">Easy Refund & Return</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Truck className="h-12 w-12 text-primary" />
                <div>
                  <h3 className="font-semibold">Worldwide Delivery</h3>
                  <p className="text-sm text-muted-foreground">200+ Countries</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Headphones className="h-12 w-12 text-primary" />
                <div>
                  <h3 className="font-semibold">24/7 Service</h3>
                  <p className="text-sm text-muted-foreground">Expert Support</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CreditCard className="h-12 w-12 text-primary" />
                <div>
                  <h3 className="font-semibold">Secure Payment</h3>
                  <p className="text-sm text-muted-foreground">100M+ Shoppers Trust</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Shop by Category</h2>
            <Link to="/categories">
              <Button variant="ghost">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <Link to="/categories" key={category.name}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-medium">{category.name}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Flash Deals */}
        <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">⚡ Flash Deals</h2>
                <p className="text-muted-foreground">Save Up to $50! Limited time offers</p>
              </div>
              <Link to="/flash-deals">
                <Button variant="default">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {flashDeals.slice(0, 4).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Just For You</h2>
            <Link to="/products">
              <Button variant="ghost">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/categories">
              <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                  alt="Fashion Sale"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-2">Fashion Week</h3>
                    <p className="text-lg mb-4">Up to 70% OFF</p>
                    <Button variant="secondary">Shop Now</Button>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/categories">
              <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&q=80"
                  alt="Tech Gadgets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-2">Tech Deals</h3>
                    <p className="text-lg mb-4">Latest Gadgets</p>
                    <Button variant="secondary">Explore</Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
