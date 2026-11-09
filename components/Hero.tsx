export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Karachi&apos;s Trusted Hardware Store</span>
            <h1>
              Build it <span className="o">strong.</span>
              <br />
              Build it <span className="y">right.</span>
            </h1>
            <p>
              From power tools to plumbing, paints to safety gear. Everything professionals and
              homeowners need, genuine brands, honest prices, same-day delivery.
            </p>
            <div className="hero-cta">
              <a href="#products" className="btn btn-primary">
                Shop Now →
              </a>
              <a href="#deals" className="btn btn-ghost">
                View Deals
              </a>
            </div>
            <div className="stats">
              <div className="stat">
                <b>15K+</b>
                <span>Products</span>
              </div>
              <div className="stat">
                <b>25+</b>
                <span>Years Trusted</span>
              </div>
              <div className="stat">
                <b>40K</b>
                <span>Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-disc" />
            <div className="hero-tool">🛠️</div>
            <div className="float-card fc1">
              ✅ <div>100% Genuine<small>Warranty on all tools</small></div>
            </div>
            <div className="float-card fc2">
              🚚 <div>Same-Day Delivery<small>Across the city</small></div>
            </div>
            <div className="float-card fc3">
              ⭐ <div>4.9 Rating<small>2,400+ reviews</small></div>
            </div>
          </div>
        </div>
      </section>
      <div className="hazard" />
      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div key={k} style={{ display: "flex", gap: 48 }}>
              {["Power Tools", "Plumbing", "Electrical", "Paints", "Fasteners", "Safety Gear", "Building Materials", "Hand Tools"].map(
                (t) => (
                  <span key={t + k}>{t}</span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
