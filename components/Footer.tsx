"use client";

export default function Footer() {
  return (
    <>
      <div className="hazard" />
      <footer className="footer">
        <div className="container">
          <div className="f-grid">
            <div>
              <div className="logo" style={{ color: "#fff", marginBottom: 14 }}>
                <div className="logo-mark">🔧</div>
                <div>
                  Iron<span className="hl">Hub</span>
                </div>
              </div>
              <p style={{ maxWidth: 300, fontSize: 14.5 }}>
                Quality tools and building supplies for professionals and homeowners since 1999.
              </p>
            </div>
            <div>
              <h4>Shop</h4>
              <ul>
                <li><a href="#products">Hand Tools</a></li>
                <li><a href="#products">Power Tools</a></li>
                <li><a href="#products">Plumbing</a></li>
                <li><a href="#products">Electrical</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#why">Why IronHub</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#deals">Deals</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Stay in the loop</h4>
              <p style={{ fontSize: 14.5 }}>Get weekly deals straight to your inbox.</p>
              <form className="news" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email" aria-label="Email" />
                <button className="btn btn-yellow" type="submit" style={{ padding: "12px 20px" }}>
                  Join
                </button>
              </form>
            </div>
          </div>
          <div className="copy">
            <span>© {new Date().getFullYear()} IronHub Hardware. All rights reserved.</span>
            <span>Built strong. Priced fair.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
