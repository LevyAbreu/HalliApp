import { useState } from 'react';
import { Product, CartItem } from '@/types';

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const updateQuantity = (product: Product, delta: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + delta;
        
        if (newQuantity <= 0) {
          return prev.filter((item) => item.id !== product.id);
        }

        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      }

      if (delta > 0) {
        return [
          ...prev,
          { id: product.id, name: product.name, price: product.price, quantity: 1 },
        ];
      }

      return prev;
    });
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return {
    cartItems,
    updateQuantity,
    clearCart,
    total,
  };
}