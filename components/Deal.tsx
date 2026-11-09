"use client";

import { useEffect, useState } from "react";

function nextSundayMidnight(): number {
  const d = new Date();
  const add = (7 - d.getDay()) % 7 || 7;
  const t = new Date(d.getFullYear(), d.getMonth(), d.getDate() + add, 23, 59, 59);
  return t.getTime();
}

export default function Deal() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const end = nextSundayMidnight();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const s = left === null ? 0 : Math.floor(left / 1000);
  const parts = [
    { v: Math.floor(s / 86400), l: "Days" },
    { v: Math.floor((s % 86400) / 3600), l: "Hours" },
    { v: Math.floor((s % 3600) / 60), l: "Mins" },
    { v: s % 60, l: "Secs" },
  ];

  return (
    <section className="section" id="deals" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="deal">
          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="eyebrow" style={{ color: "var(--ink)" }}>
              Weekend Mega Sale
            </span>
            <h2>
              Up to 30% off
              <br />
              power tools
            </h2>
            <p>Drills, grinders, saws and complete kits. Genuine brands with full warranty, while stock lasts.</p>
            <a href="#products" className="btn btn-dark">
              Grab the Deals →
            </a>
          </div>
          <div className="timer">
            {parts.map((p) => (
              <div className="tbox" key={p.l}>
                <b>{String(p.v).padStart(2, "0")}</b>
                <span>{p.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
