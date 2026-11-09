"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "@/lib/data";

interface CartCtx {
  items: { product: Product; qty: number }[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);

  const add = useCallback((id: string) => {
    setLines((l) => ({ ...l, [id]: (l[id] ?? 0) + 1 }));
    setOpen(true);
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((l) => {
      const next = { ...l };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }, []);

  const clear = useCallback(() => setLines({}), []);

  const value = useMemo<CartCtx>(() => {
    const items = Object.entries(lines)
      .map(([id, qty]) => ({ product: products.find((p) => p.id === id)!, qty }))
      .filter((i) => i.product);
    return {
      items,
      count: items.reduce((s, i) => s + i.qty, 0),
      total: items.reduce((s, i) => s + i.qty * i.product.price, 0),
      open,
      setOpen,
      add,
      setQty,
      clear,
    };
  }, [lines, open, add, setQty, clear]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart(): CartCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
