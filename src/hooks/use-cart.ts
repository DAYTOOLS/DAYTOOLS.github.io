import { useState, useEffect } from 'react';
import { cartStorage, CartItem } from '@/lib/cart-storage';

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const loadCart = () => {
    const items = cartStorage.getCart();
    setCartItems(items);
    setCartCount(cartStorage.getItemCount());
  };

  useEffect(() => {
    loadCart();

    // Listen for cart updates from other tabs/windows
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'daytools_cart') {
        loadCart();
      }
    };

    // Listen for custom cart update events
    const handleCartUpdate = () => {
      loadCart();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cart-updated', handleCartUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cart-updated', handleCartUpdate);
    };
  }, []);

  const refreshCart = () => {
    loadCart();
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('cart-updated'));
  };

  return {
    cartItems,
    cartCount,
    refreshCart,
  };
}
