//this is the hero component that will be used in the home page

function Hero() {
  return (
    <header className="hero-wrapper">
      <nav className="nav">
        <div className="logo">
          <a href="#">
            <img src="/images/fluent-logo.png" alt="Fluent Farms Logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
