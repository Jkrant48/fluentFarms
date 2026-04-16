import Hero from "../components/Hero";
import Footer from "../components/footer";
import Card from "../components/card";
import Form from "../components/form";

function Home() {
  return (
    <>
      <Hero />
      <div className="packages">
        <h2 id="products">Our Packages</h2>
        <div className="cards">
          <Card
            title="Fresh Cat fish"
            description="Perfect for your family & restaurants."
            image="/images/fresh.png"
          />
          <Card
            title="Smoked Cat fish"
            description="Ideal for your home cooked meals."
            image="/images/smoked.png"
          />
        </div>
      </div>
      <div className="banner">
        <div className="banner-text">
          <h2>Experience the Future of Food with Fluent Farms</h2>
          <p>Discover the next generation of sustainable agriculture.</p>
        </div>
        <a href="#contact" className="banner-btn">
          Contact Us
        </a>
      </div>
      <section className="about">
        <h2 id="about-us">About Us</h2>
        <div className="about-content">
          <img src="/images/fishfarmer2.png" alt="Group of fish farmers" />
          <div>
            <p>
              Welcome to Fluent Farms! We are dedicated to revolutionizing
              sustainable agriculture. At our fish farm located in Maame
              Dede-Okyerekrom, just off the Adeiso-Naswam Road, we are committed
              to delivering high-quality catfish to meet the needs of homes,
              restaurants, and businesses. We specialize in both fresh and
              carefully processed smoked catfish, ensuring consistent taste,
              nutrition, and reliability for every customer.
            </p>
            <p>
              Our farm combines modern aquaculture practices with strict quality
              standards to produce healthy, well-grown fish in a clean and
              controlled environment. Whether you are buying for daily meals,
              commercial use, or bulk supply, we provide products you can trust.
            </p>
            <p>
              Beyond production, we are passionate about empowering others
              through fish farming. Our well-structured, hands-on internship
              programs are designed to equip individuals with practical skills
              and real-world experience in aquaculture. From pond management to
              harvesting and processing, trainees gain the knowledge needed to
              start and manage their own successful fish farming ventures.
            </p>
            <p>
              We are more than just a fish farm—we are a hub for quality,
              sustainability, and skill development in aquaculture.
            </p>
          </div>
        </div>
      </section>
      <section className="bottom-section">
        <div className="contact" id="contact">
          <div className="b-logo">
            <img src="images/fluent-logo.png" alt="Fluent Farms Logo" />
          </div>
          <div className="bottom-text">
            <p>
              <i className="fa-solid fa-phone"></i>
              (+233) 53 323 8004 / (+233) 20 873 4507
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>
              fluentfarmsgh@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-map-marker-alt"></i>
              Maame Dede-Okyerekrom, Ghana
              <br />
              (Off the Adeiso-Naswam Road)
            </p>
          </div>
        </div>
        <Form />
      </section>
      <Footer />
    </>
  );
}

export default Home;
