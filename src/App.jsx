import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Contact from "./components/contact/Contact";







=======
>>>>>>> Stashed changes

=======
import StarsBackground from './StarsBackground';

>>>>>>> Stashed changes
const App = () => {
  return <div>
     <section id="Homepage">
      <Navbar/>
      <Hero/>
      </section>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
    
    </div>;
=======
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
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
>>>>>>> Stashed changes
=======
      
      <section id="Services"><Parallax type="services"/></section>
      <section><Services/></section>
      <section id="Portfolio"><Parallax type="portfolio"/></section>
      <StarsBackground />
      <Portfolio/>
      <section id="Contact"><Contact/></section>
    </div>
  );
>>>>>>> Stashed changes
};

export default App