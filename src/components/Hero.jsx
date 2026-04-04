//this is the hero component that will be used in the home page
import { useState } from "react";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hero-wrapper">
      <nav className="nav">
        <div className="logo">
          <a href="index.html">
            <img src="/images/fluent-logo.png" alt="Fluent Farms Logo" />
          </a>
        </div>
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="index.html" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#products" onClick={() => setMenuOpen(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <img
            className="hero-img"
            src="/images/fishfarmer1.png"
            alt="Fish Farmer"
          />
          <div className="hero-overlay">
            <h1>Fluent Farms</h1>
            <p>We speak the language of food!</p>
            <a href="#" className="btn">
              ORDER NOW!
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Hero;
