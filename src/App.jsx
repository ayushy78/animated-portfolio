import Navbar from "./components/navbar/Navbar";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import Hero from "./components/hero/Hero";
import SlideText from "./components/SlideText/SlideText";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import StarsBackground from "./components/StarBackground/StarsBackground";
import "./app.scss";

import Slider from "./Slider";

const App = () => {
  return (
    <div className="Bodyy">
      <StarsBackground>
        <section id="Navbar">
          <Navbar />
        </section>

        <section id="Homepage">
          <SlideText />
          <Hero />
        </section>

        <section id="Story">
          
      <Slider/>
        </section>

        <section>
          <Parallax type="services" />
        </section>

        <section id="Roadmap">
          <Services />
        </section>

        <section id="Tokenomics"></section>
      </StarsBackground>
    </div>
  );
};

export default App;
