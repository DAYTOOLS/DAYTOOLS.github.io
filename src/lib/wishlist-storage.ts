
// Local storage wishlist management
export interface WishlistItem {
  id: string;
  product_id: string;
  product_title: string;
  product_image: string;
  product_price: number;
  originalPrice?: number;
}

const WISHLIST_STORAGE_KEY = 'daytools_wishlist';

export const wishlistStorage = {
  getWishlist: (): WishlistItem[] => {
    try {
      const wishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return wishlist ? JSON.parse(wishlist) : [];
    } catch {
      return [];
    }
  },

  addItem: (product: Omit<WishlistItem, 'id'>): void => {
    const wishlist = wishlistStorage.getWishlist();
    const exists = wishlist.some(item => item.product_id === product.product_id);

    if (!exists) {
      wishlist.push({
        ...product,
        id: `wishlist_${Date.now()}_${Math.random()}`,
      });
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    }
  },

  removeItem: (productId: string): void => {
    const wishlist = wishlistStorage.getWishlist().filter(item => item.product_id !== productId);
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
  },

  isInWishlist: (productId: string): boolean => {
    return wishlistStorage.getWishlist().some(item => item.product_id === productId);
  },

  clearWishlist: (): void => {
    localStorage.removeItem(WISHLIST_STORAGE_KEY);
  },

  getItemCount: (): number => {
    return wishlistStorage.getWishlist().length;
  }
};
