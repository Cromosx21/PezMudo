import React, { useMemo, useState } from "react";
import { DISHES_DETAILS, TOP_DISHES } from "../data/index.js";
import { CartContext } from "./cart-core.js";

const allDishes = [
  ...TOP_DISHES,
  ...Object.values(DISHES_DETAILS).flat(),
];

const dishById = new Map(allDishes.map((d) => [d.id, d]));

export default function CartProvider({ children }) {
  const [items, setItems] = useState({});
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const add = (dishId, qty = 1) => {
    setItems((prev) => ({ ...prev, [dishId]: (prev[dishId] || 0) + qty }));
  };

  const remove = (dishId, qty = 1) => {
    setItems((prev) => {
      const next = { ...prev };
      if (!next[dishId]) return next;
      next[dishId] = Math.max(0, next[dishId] - qty);
      if (next[dishId] === 0) delete next[dishId];
      return next;
    });
  };

  const clear = () => setItems({});

  const count = useMemo(() => Object.values(items).reduce((a, b) => a + b, 0), [items]);

  const lines = useMemo(() => {
    return Object.entries(items).map(([id, qty]) => {
      const dish = dishById.get(Number(id));
      return {
        id: Number(id),
        name: dish?.name ?? "Plato",
        price: dish?.price ?? 0,
        qty,
        total: (dish?.price ?? 0) * qty,
        img: dish?.img,
      };
    });
  }, [items]);

  const total = useMemo(() => lines.reduce((sum, l) => sum + l.total, 0), [lines]);

  const value = {
    items,
    add,
    remove,
    clear,
    count,
    lines,
    total,
    isPanelOpen,
    openPanel: () => setIsPanelOpen(true),
    closePanel: () => setIsPanelOpen(false),
    togglePanel: () => setIsPanelOpen((v) => !v),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
