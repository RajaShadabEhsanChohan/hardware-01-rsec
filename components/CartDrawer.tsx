"use client";

import { formatPrice } from "@/lib/data";
import { useCart } from "./CartProvider";

export default function CartDrawer() {
  const { items, total, count, open, setOpen, setQty, clear } = useCart();

  return (
    <>
      <div className={`overlay ${open ? "on" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? "on" : ""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <h3>Your Cart ({count})</h3>
          <button className="x" onClick={() => setOpen(false)} aria-label="Close cart">
            ✕
          </button>
        </div>
        <div className="drawer-body">
          {items.length === 0 ? (
            <div className="empty">
              <div>🧰</div>
              <p>Your toolbox is empty.</p>
            </div>
          ) : (
            items.map(({ product: p, qty }) => (
              <div className="line" key={p.id}>
                <div className={`th tone-${p.tone}`}>{p.emoji}</div>
                <div>
                  <b>{p.name}</b>
                  <small>{formatPrice(p.price)}</small>
                  <div className="qty">
                    <button onClick={() => setQty(p.id, qty - 1)} aria-label="Decrease">−</button>
                    <span>{qty}</span>
                    <button onClick={() => setQty(p.id, qty + 1)} aria-label="Increase">+</button>
                  </div>
                </div>
                <b>{formatPrice(p.price * qty)}</b>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="drawer-foot">
            <div className="total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button className="btn btn-primary" style={{ justifyContent: "center" }} onClick={() => { alert("Order placed! We will call to confirm delivery."); clear(); setOpen(false); }}>
              Checkout →
            </button>
            <button className="btn btn-dark" style={{ justifyContent: "center" }} onClick={clear}>
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
