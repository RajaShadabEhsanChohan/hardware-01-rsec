"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export default function Header() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>🚚 Free delivery on orders above Rs. 15,000 in Karachi</span>
          <span>📞 Call us: +92 300 123 4567 · Mon–Sat 9am–9pm</span>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <a href="#top" className="logo">
            <div className="logo-mark">🔧</div>
            <div>
              Iron<span className="hl">Hub</span>
            </div>
          </a>
          <nav className={`nav ${menu ? "open" : ""}`} onClick={() => setMenu(false)}>
            <a href="#categories">Categories</a>
            <a href="#products">Shop</a>
            <a href="#deals">Deals</a>
            <a href="#why">Why Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <button className="cart-btn" onClick={() => setOpen(true)} aria-label="Open cart">
              🛒 <span className="cart-label">Cart</span>
              <span className="cart-count">{count}</span>
            </button>
            <button className="menu-btn" onClick={() => setMenu((m) => !m)} aria-label="Toggle menu">
              {menu ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
