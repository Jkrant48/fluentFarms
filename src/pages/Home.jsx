import Hero from "../components/Hero";
import Footer from "../components/footer";
import Card from "../components/card";
import Form from "../components/form";

function Home() {
  return (
    <>
      <Hero />
      <div className="packages">
        <h2>Our Packages</h2>
        <div className="cards">
          <Card />
          <Card />
        </div>
      </div>
      <div className="banner">
        <div className="banner-text">
          <h2>Experience the Future of Food with Fluent Farms</h2>
          <p>Discover the next generation of sustainable agriculture.</p>
        </div>
        <a href="#" className="banner-btn">
          Contact Us
        </a>
      </div>
      <section className="about">
        <h2>About Us</h2>
        <div className="about-content">
          <img src="/images/fishfarmer2.png" alt="Group of fish farmers" />
          <p>
            Welcome to Fluent Farms! We are dedicated to revolutionizing
            sustainable agriculture.
          </p>
        </div>
      </section>
      <section className="bottom-section">
        <div className="contact">
          <div className="logo">
            <img src="images/fluent-logo.png" alt="Fluent Farms Logo" />
          </div>
          <div className="bottom-text">
            <p>Tel: (123) 456-7890</p>
            <p>Email: info@fluentfarms.com</p>
            <p>Address: 123 Farm Rd, Agriculture, CA 12345</p>
          </div>
        </div>
        <Form />
      </section>
      <Footer />
    </>
  );
}

export default Home;
