// Local storage cart management (works without authentication)
export interface CartItem {
  id: string;
  product_id: string;
  product_title: string;
  product_image: string;
  product_price: number;
  quantity: number;
}

const CART_STORAGE_KEY = 'daytools_cart';

export const cartStorage = {
  getCart: (): CartItem[] => {
    try {
      const cart = localStorage.getItem(CART_STORAGE_KEY);
      return cart ? JSON.parse(cart) : [];
    } catch {
      return [];
    }
  },

  addItem: (product: Omit<CartItem, 'id' | 'quantity'>): void => {
    const cart = cartStorage.getCart();
    const existingItemIndex = cart.findIndex(item => item.product_id === product.product_id);

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({
        ...product,
        id: `cart_${Date.now()}_${Math.random()}`,
        quantity: 1,
      });
    }

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  },

  updateQuantity: (productId: string, quantity: number): void => {
    const cart = cartStorage.getCart();
    const itemIndex = cart.findIndex(item => item.product_id === productId);

    if (itemIndex > -1) {
      if (quantity <= 0) {
        cart.splice(itemIndex, 1);
      } else {
        cart[itemIndex].quantity = quantity;
      }
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  },

  removeItem: (productId: string): void => {
    const cart = cartStorage.getCart().filter(item => item.product_id !== productId);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  },

  clearCart: (): void => {
    localStorage.removeItem(CART_STORAGE_KEY);
  },

  getItemCount: (): number => {
    return cartStorage.getCart().reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: (): number => {
    return cartStorage.getCart().reduce((total, item) => total + (item.product_price * item.quantity), 0);
  }
};
