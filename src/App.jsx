import Navbar from "./components/navbar/Navbar";
import './cursor.css';
import "./app.scss";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";

import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import StarsBackground from "./components/StarBackground/StarsBackground";





const App = () => {
  return (
    <div className='Bodyy'>
    <>
      <StarsBackground> 
         <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section>
          <Navbar />
          <ImageCarousel />
        </section>

        <section id="Services">
          <Navbar />
          <Parallax type="services" />
        </section>

        <section>
          <Navbar />
          <Services />
        </section>

        <section id="Portfolio">
          <Navbar />
          <Parallax type="portfolio" />
        </section>

        <Portfolio />

        <section id="Contact">
          <Contact />
      </section> 
       </StarsBackground>  
    </>
    </div>
  );
};

export default App;
