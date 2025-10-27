import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { cartStorage } from "@/lib/cart-storage";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  orders?: number;
  discount?: number;
}

const ProductCard = ({
  id,
  image,
  title,
  price,
  originalPrice,
  rating = 4.5,
  orders = 0,
  discount,
}: ProductCardProps) => {
  const [loading, setLoading] = useState(false);
  const discountPercent = discount || (originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setLoading(true);

    try {
      cartStorage.addItem({
        product_id: id,
        product_title: title,
        product_image: image,
        product_price: price,
      });
      
      toast.success("Added to cart!");
    } catch (error) {
      toast.error("Failed to add to cart");
    }

    setLoading(false);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] cursor-pointer">
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden bg-muted aspect-square">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {discountPercent > 0 && (
            <div className="absolute top-2 left-2 bg-[hsl(var(--sale-badge))] text-white px-2 py-1 rounded text-xs font-bold">
              -{discountPercent}%
            </div>
          )}
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="h-4 w-4" />
          </button>
        </div>

        <div className="p-3">
          <h3 className="text-sm line-clamp-2 mb-2 min-h-[40px]">{title}</h3>

          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-secondary text-secondary" />
              <span className="text-xs text-muted-foreground">{rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{orders} orders</span>
          </div>

          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button 
            className="w-full" 
            size="sm" 
            onClick={handleAddToCart} 
            disabled={loading}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {loading ? "Adding..." : "Add to Cart"}
          </Button>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;