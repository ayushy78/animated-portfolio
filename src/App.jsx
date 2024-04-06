import Navbar from "./components/navbar/Navbar";
import "./cursor.css";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import SlideText from "./components/SlideText/SlideText";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import StarsBackground from "./components/StarBackground/StarsBackground";
import "./app.scss";

const App = () => {
  return (
    <div className="Bodyy">
      <StarsBackground>
        <section id="Homepage">
          <Navbar className="navbar-fixed-top" />
          <Hero />
        </section>

        <section>
          <ImageCarousel />
        </section>

        <section id="Services">
          <Parallax type="services" />
        </section>

        <section>
          <Services />
        </section>

        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>

        <Portfolio />

        <section id="Contact">
          <Contact />
        </section>
      </StarsBackground>
    </div>
  );
};

export default App;
