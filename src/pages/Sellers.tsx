import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Store } from "lucide-react";

const Sellers = () => {
  const topSellers = [
    {
      id: 1,
      name: "TechHub Electronics",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      rating: 4.9,
      followers: 125000,
      products: 1234,
      responseRate: "99%",
      description: "Leading supplier of electronics and gadgets worldwide",
      banner: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80"
    },
    {
      id: 2,
      name: "Fashion Forward",
      logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&q=80",
      rating: 4.8,
      followers: 98000,
      products: 892,
      responseRate: "98%",
      description: "Trendy fashion and accessories for modern lifestyle",
      banner: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80"
    },
    {
      id: 3,
      name: "Home & Living Co",
      logo: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=200&q=80",
      rating: 4.9,
      followers: 87000,
      products: 567,
      responseRate: "97%",
      description: "Quality home decor and living essentials",
      banner: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80"
    },
    {
      id: 4,
      name: "Sports & Fitness Pro",
      logo: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&q=80",
      rating: 4.7,
      followers: 76000,
      products: 445,
      responseRate: "96%",
      description: "Professional sports equipment and fitness gear",
      banner: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
    },
    {
      id: 5,
      name: "Beauty & Wellness",
      logo: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&q=80",
      rating: 4.8,
      followers: 112000,
      products: 678,
      responseRate: "99%",
      description: "Premium beauty and skincare products",
      banner: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80"
    },
    {
      id: 6,
      name: "Pet Paradise",
      logo: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=200&q=80",
      rating: 4.9,
      followers: 65000,
      products: 321,
      responseRate: "98%",
      description: "Everything your pets need for a happy life",
      banner: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Top Sellers & Brands</h1>
            <p className="text-xl opacity-90">
              Discover trusted sellers with millions of satisfied customers
            </p>
          </div>
        </section>

        {/* Top Sellers Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            {topSellers.map((seller) => (
              <Card key={seller.id} className="overflow-hidden hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
                {/* Banner */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={seller.banner}
                    alt={seller.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Seller Info */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo */}
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white -mt-10 relative z-10 flex-shrink-0">
                      <img
                        src={seller.logo}
                        alt={seller.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 mt-2">
                      <h3 className="text-xl font-bold mb-1">{seller.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {seller.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-secondary text-secondary" />
                          <span className="font-semibold">{seller.rating}</span>
                        </div>
                        <span className="text-muted-foreground">
                          {seller.followers.toLocaleString()} followers
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-muted rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {seller.products}
                      </div>
                      <div className="text-xs text-muted-foreground">Products</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {seller.rating}
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {seller.responseRate}
                      </div>
                      <div className="text-xs text-muted-foreground">Response</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link to="/products" className="flex-1">
                      <Button className="w-full">
                        <Store className="mr-2 h-4 w-4" />
                        Visit Store
                      </Button>
                    </Link>
                    <Button variant="outline">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Become a Seller CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Start Selling on DHgate</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of successful sellers and reach millions of buyers worldwide
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary">
                Register as Seller
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sellers;
