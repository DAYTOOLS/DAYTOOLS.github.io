
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Heart, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { wishlistStorage, WishlistItem } from "@/lib/wishlist-storage";
import { cartStorage } from "@/lib/cart-storage";

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWishlistItems();
  }, []);

  const loadWishlistItems = () => {
    try {
      const items = wishlistStorage.getWishlist();
      setWishlistItems(items);
    } catch (error) {
      toast.error("Failed to load wishlist");
    }
    setLoading(false);
  };

  const removeItem = (productId: string) => {
    try {
      wishlistStorage.removeItem(productId);
      setWishlistItems(wishlistItems.filter(item => item.product_id !== productId));
      window.dispatchEvent(new Event('wishlist-updated'));
      toast.success("Item removed from wishlist");
    } catch (error) {
      toast.error("Failed to remove item");
    }
  };

  const moveToCart = (item: WishlistItem) => {
    try {
      cartStorage.addItem({
        product_id: item.product_id,
        product_title: item.product_title,
        product_image: item.product_image,
        product_price: item.product_price,
      });
      window.dispatchEvent(new Event('cart-updated'));
      toast.success("Added to cart!");
    } catch (error) {
      toast.error("Failed to add to cart");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12">
          <p className="text-center">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <Card className="p-12 text-center">
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">Save your favorite products for later!</p>
            <Button onClick={() => navigate("/products")}>Browse Products</Button>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div 
                  className="cursor-pointer"
                  onClick={() => navigate(`/product/${item.product_id}`)}
                >
                  <div className="relative aspect-square bg-muted">
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2 min-h-[48px]">{item.product_title}</h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-lg font-bold text-primary">${item.product_price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 flex gap-2">
                  <Button 
                    className="flex-1" 
                    size="sm"
                    onClick={() => moveToCart(item)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(item.product_id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
