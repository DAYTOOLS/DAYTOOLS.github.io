import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const product = {
    id: id || "1",
    title: "Wireless Earbuds Pro with Active Noise Cancellation",
    price: 27.97,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 1205,
    orders: 3421,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80",
      "https://images.unsplash.com/photo-1598965675045-f2c18dbfefe7?w=800&q=80",
    ],
    description: "Experience premium sound quality with our Wireless Earbuds Pro featuring advanced active noise cancellation technology. Perfect for music lovers, commuters, and professionals.",
    features: [
      "Active Noise Cancellation (ANC) technology",
      "30 hours battery life with charging case",
      "IPX7 waterproof rating",
      "Bluetooth 5.3 connectivity",
      "Touch controls for music and calls",
      "Premium sound with deep bass",
    ],
    specifications: {
      "Brand": "TechAudio",
      "Model": "TA-PRO-2024",
      "Battery Life": "30 hours",
      "Charging Time": "1.5 hours",
      "Bluetooth Version": "5.3",
      "Driver Size": "13mm",
      "Weight": "4.5g per earbud",
    }
  };

  const relatedProducts = [
    { id: "2", title: "Portable Bluetooth Speaker Waterproof", price: 19.99, originalPrice: 59.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80", orders: 1678 },
    { id: "3", title: "Gaming Mouse RGB Programmable Buttons", price: 24.99, originalPrice: 69.99, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80", orders: 934 },
    { id: "4", title: "Wireless Charging Pad Fast Charger", price: 16.99, originalPrice: 44.99, image: "https://images.unsplash.com/photo-1591290619762-d2c9aab7e4d3?w=400&q=80", orders: 823 },
    { id: "5", title: "Phone Case with Card Holder Leather", price: 8.99, originalPrice: 24.99, image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80", orders: 3421 },
  ];

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please login to add items to cart");
      navigate("/auth");
      return;
    }

    setLoading(true);

    const { data: existingItem } = await supabase
      .from("cart_items")
      .select("*")
      .eq("user_id", user.id)
      .eq("product_id", id || "1")
      .single();

    if (existingItem) {
      const { error } = await supabase
        .from("cart_items")
        .update({ quantity: existingItem.quantity + quantity })
        .eq("id", existingItem.id);

      if (error) {
        toast.error("Failed to update cart");
      } else {
        toast.success("Cart updated!");
      }
    } else {
      const { error } = await supabase
        .from("cart_items")
        .insert({
          user_id: user.id,
          product_id: id || "1",
          product_title: product.title,
          product_image: product.images[0],
          product_price: product.price,
          quantity: quantity
        });

      if (error) {
        toast.error("Failed to add to cart");
      } else {
        toast.success("Added to cart!");
      }
    }

    setLoading(false);
  };

  const handleBuyNow = async () => {
    if (!user) {
      toast.error("Please login to make a purchase");
      navigate("/auth");
      return;
    }
    
    await handleAddToCart();
    navigate("/cart");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/products" className="text-muted-foreground hover:text-primary">Products</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">{product.title}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden bg-muted aspect-square">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full aspect-square object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? 'fill-secondary text-secondary' : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
              <span className="text-muted-foreground">• {product.orders} orders</span>
            </div>

            {/* Price */}
            <Card className="p-6 mb-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-4xl font-bold text-primary">${product.price}</span>
                <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                <span className="bg-[hsl(var(--sale-badge))] text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{discount}% OFF
                </span>
              </div>
              <p className="text-sm text-muted-foreground">You save ${(product.originalPrice - product.price).toFixed(2)}</p>
            </Card>

            {/* Quantity & Actions */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="px-6 py-2 font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.orders} pieces available
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1" size="lg" onClick={handleAddToCart} disabled={loading}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {loading ? "Adding..." : "Add to Cart"}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Button variant="secondary" className="w-full" size="lg" onClick={handleBuyNow}>
                Buy Now
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs font-medium">Free Shipping</p>
              </Card>
              <Card className="p-4 text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs font-medium">Buyer Protection</p>
              </Card>
              <Card className="p-4 text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs font-medium">Easy Returns</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-12">
          <Tabs defaultValue="description" className="p-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <h3 className="font-bold text-xl mb-4">Product Description</h3>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              <h4 className="font-semibold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <h3 className="font-bold text-xl mb-4">Technical Specifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-medium">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <h3 className="font-bold text-xl mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                {[...Array(3)].map((_, idx) => (
                  <Card key={idx} className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <span className="font-medium">John Doe</span>
                      <span className="text-sm text-muted-foreground">• 2 days ago</span>
                    </div>
                    <p className="text-muted-foreground">
                      Great product! Sound quality is amazing and the battery lasts all day. Highly recommended!
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
