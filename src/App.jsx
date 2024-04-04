
import "./app.scss";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";

import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import StarsBackground from "./components/StarBackground/StarsBackground";


const App = () => {
  return (
    <StarsBackground>
      {/* <Cursor /> */}
    
      <section id="Homepage">
      
        <Navbar />
        <Hero />
      </section>
      <section>
      <ImageCarousel/>
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
  );
};

export default App;
