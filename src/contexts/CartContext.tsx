"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { Product } from "~/types/Product";

interface CartItem {
  productId: Product["id"];
  quantity: number;
}

interface CartContextData {
  cartItems: CartItem[];
  addToCart: (productId: CartItem["productId"]) => void;
}

const CartContext = createContext({} as CartContextData);

export const useCartContext = () => useContext(CartContext);

interface CartContextProviderProps {
  children: React.ReactNode;
}

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart: CartContextData["addToCart"] = useCallback(productId => {
    setCartItems(currentCartItems => {
      const existsInCart = currentCartItems.some(
        item => item.productId === productId,
      );

      if (existsInCart) {
        return currentCartItems.map(item => {
          if (item.productId === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
      }

      return currentCartItems.concat({ productId, quantity: 1 });
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
