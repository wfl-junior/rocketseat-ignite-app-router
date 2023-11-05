"use client";

import { ShoppingBag } from "lucide-react";
import { useCartContext } from "~/contexts/CartContext";

interface CartWidgetProps {}

export function CartWidget({}: CartWidgetProps): JSX.Element | null {
  const { cartItems } = useCartContext();

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">Carrinho ({cartItems.length})</span>
    </div>
  );
}
