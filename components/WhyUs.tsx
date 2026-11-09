const reasons = [
  { ic: "🛡️", t: "Genuine & Warranted", d: "Authorised dealer for top brands with proper warranty cards on every tool." },
  { ic: "🚚", t: "Same-Day Delivery", d: "Order before 3pm and your materials reach the site the same day." },
  { ic: "💰", t: "Contractor Pricing", d: "Bulk discounts and trade accounts for builders, plumbers and electricians." },
  { ic: "🧑‍🔧", t: "Expert Advice", d: "Our team has decades of hands-on experience. Ask us before you buy." },
];

export default function WhyUs() {
  return (
    <section className="section dark" id="why">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Why IronHub</span>
            <h2 className="h2">Built on trust.<br />Backed by experience.</h2>
            <p className="lead">For over 25 years we have equipped Karachi&apos;s builders, workshops and homes.</p>
          </div>
        </div>
        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why" key={r.t}>
              <div className="ic">{r.ic}</div>
              <h3>{r.t}</h3>
              <p>{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
