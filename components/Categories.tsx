import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <section className="section" id="categories">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Browse Aisles</span>
            <h2 className="h2">Shop by category</h2>
            <p className="lead">Everything for the job site, the workshop and the home, organised so you find it fast.</p>
          </div>
          <a href="#products" className="btn btn-dark">
            See all products →
          </a>
        </div>
        <div className="cat-grid">
          {categories.map((c) => (
            <a href="#products" key={c.name} className="cat">
              <div className="cat-emoji">{c.emoji}</div>
              <h3>{c.name}</h3>
              <p>{c.blurb}</p>
              <span className="n">{c.count}+ items →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
