"use client";

import { useCartContext } from "~/contexts/CartContext";
import type { Product } from "~/types/Product";

interface AddToCartButtonProps {
  productId: Product["id"];
}

export function AddToCartButton({
  productId,
}: AddToCartButtonProps): JSX.Element | null {
  const { addToCart } = useCartContext();

  function handleAddToCart() {
    addToCart(productId);
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white transition-colors hover:bg-emerald-500"
    >
      Adicionar ao carrinho
    </button>
  );
}
