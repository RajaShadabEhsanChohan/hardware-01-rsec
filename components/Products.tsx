"use client";

import { useState } from "react";
import { categories, formatPrice, products, type Category } from "@/lib/data";
import { useCart } from "./CartProvider";

export default function Products() {
  const [active, setActive] = useState<Category | "All">("All");
  const { add } = useCart();
  const list = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section className="section" id="products" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Top Picks</span>
            <h2 className="h2">Featured products</h2>
            <p className="lead">Hand-picked, contractor-approved gear with warranty on every purchase.</p>
          </div>
        </div>

        <div className="filters">
          {(["All", ...categories.map((c) => c.name)] as (Category | "All")[]).map((c) => (
            <button key={c} className={`chip ${active === c ? "on" : ""}`} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="prod-grid">
          {list.map((p) => (
            <article className="prod" key={p.id}>
              <div className={`prod-img tone-${p.tone}`}>
                {p.badge && <div className="badge">{p.badge}</div>}
                <span>{p.emoji}</span>
              </div>
              <div className="prod-body">
                <div className="prod-brand">{p.brand}</div>
                <div className="prod-name">{p.name}</div>
                <div className="rating">
                  <b>★</b> {p.rating} · {p.reviews} reviews
                </div>
                <div className="price-row">
                  <div className="price">
                    {p.oldPrice && <span className="old">{formatPrice(p.oldPrice)}</span>}
                    {formatPrice(p.price)}
                  </div>
                  <button className="add" onClick={() => add(p.id)} aria-label={`Add ${p.name} to cart`}>
                    +
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
