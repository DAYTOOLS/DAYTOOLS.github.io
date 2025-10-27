
import { useState, useEffect } from 'react';
import { wishlistStorage, WishlistItem } from '@/lib/wishlist-storage';

export function useWishlist() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [wishlistCount, setWishlistCount] = useState(0);

  const loadWishlist = () => {
    const items = wishlistStorage.getWishlist();
    setWishlistItems(items);
    setWishlistCount(wishlistStorage.getItemCount());
  };

  useEffect(() => {
    loadWishlist();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'daytools_wishlist') {
        loadWishlist();
      }
    };

    const handleWishlistUpdate = () => {
      loadWishlist();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('wishlist-updated', handleWishlistUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('wishlist-updated', handleWishlistUpdate);
    };
  }, []);

  const refreshWishlist = () => {
    loadWishlist();
    window.dispatchEvent(new Event('wishlist-updated'));
  };

  return {
    wishlistItems,
    wishlistCount,
    refreshWishlist,
  };
}
