import "./hero.scss"
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat:Infinity
    }

  }
};
const sliderVariants = {
  initial: {
    x: 0,
   
  },
  animate: {
    x: "-220%",
   
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
<<<<<<< Updated upstream
      duration: 20,
=======
      duration: 10,
>>>>>>> Stashed changes
     
    },
  },
};

 const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
      <motion.div className="textContainer"
       variants={textVariants} 
       initial="initial" 
      animate="animate">
        <motion.h2 variants={textVariants}>OSMAN GÖZÜKÜÇÜK</motion.h2>
        <motion.h1 variants={textVariants}>Frontend developer :D</motion.h1>
        <motion.div variants={textVariants} className="buttons">
<<<<<<< Updated upstream
          <motion.button variants={textVariants}>Son yapılan projeleri gör</motion.button>
          <motion.button variants={textVariants}>Bana ulaşmak için</motion.button>
        </motion.div>
        <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
      </motion.div>
=======
          <motion.button variants={textVariants}>Buy Now!</motion.button>
          <motion.button className="scroll" variants={textVariants}>Join our Discord!</motion.button>
        </motion.div>
>>>>>>> Stashed changes
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Ubn-Jr
      </motion.div>
        <div className="imageContainer">
            <img src="/hero.png" alt="" />
        </div>
    </div>
  );
};
export default Hero
