import { brands, testimonials } from "@/lib/data";

export default function Reviews() {
  return (
    <>
      <section className="section" id="brands" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span className="eyebrow">Brands We Stock</span>
            <h2 className="h2">Names you can rely on</h2>
          </div>
          <div className="brands">
            {brands.map((b) => (
              <div className="brand" key={b}>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Customer Love</span>
              <h2 className="h2">What builders say</h2>
            </div>
          </div>
          <div className="t-grid">
            {testimonials.map((t) => (
              <div className="t" key={t.name}>
                <div className="q">“</div>
                <div className="stars">{"★".repeat(t.rating)}</div>
                <p>{t.text}</p>
                <div className="who">
                  <div className="avatar">{t.name.charAt(0)}</div>
                  <div>
                    <b>{t.name}</b>
                    <small>{t.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
