import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/cart-core.js";

export default function CartFab() {
  const { togglePanel, count } = useCart();
  return (
    <button
      onClick={togglePanel}
      className="fixed bottom-4 right-4 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition md:hidden cursor-pointer"
      aria-label="Abrir pedido"
    >
      <ShoppingCart />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}

