import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Heart, Clock, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useCart } from "@/hooks/use-cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const { cartCount } = useCart();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--header-bg))] text-[hsl(var(--header-fg))] shadow-md">
      {/* Top Bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Customer Service</Link>
              <span className="text-muted-foreground">Buyer Protection</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-secondary font-semibold">New User, UP TO 90% Off</span>
              <span>USD / EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold">
              <span className="text-white">DH</span>
              <span className="text-secondary">gate</span>
              <span className="text-xs text-muted-foreground">.com</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products..."
                className="w-full h-11 pr-12 bg-white text-foreground"
              />
              <Button
                size="icon"
                className="absolute right-0 top-0 h-11 w-12 rounded-l-none bg-secondary hover:bg-secondary/90"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-6">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
                    <User className="h-6 w-6" />
                    <span className="text-xs">Account</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate("/account")}>
                    <User className="mr-2 h-4 w-4" />
                    My Account
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth" className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
                <User className="h-6 w-6" />
                <span className="text-xs">Sign In</span>
              </Link>
            )}
            <Link to="/account" className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
              <Clock className="h-6 w-6" />
              <span className="text-xs">Orders</span>
            </Link>
            <Link to="#" className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
              <Heart className="h-6 w-6" />
              <span className="text-xs">Wishlist</span>
            </Link>
            <Link to="/cart" className="relative flex flex-col items-center gap-1 hover:text-primary transition-colors" data-testid="link-cart">
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center" data-testid="text-cart-count">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[hsl(var(--header-bg))] border-t border-white/10">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-8 py-3 text-sm">
            <Link to="/categories" className="hover:text-primary transition-colors font-medium">
              ALL CATEGORIES
            </Link>
            <Link to="/flash-deals" className="hover:text-primary transition-colors">
              Flash Deals
            </Link>
            <Link to="/products" className="hover:text-primary transition-colors">
              Pet Oasis
            </Link>
            <Link to="/products" className="hover:text-primary transition-colors">
              Just For You
            </Link>
            <Link to="/products" className="hover:text-primary transition-colors">
              #musthave
            </Link>
            <Link to="/sellers" className="hover:text-primary transition-colors">
              Influencers' Picks
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;