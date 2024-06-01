import "./hero.scss";
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
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};
const handleClick = () => {
  const textToCopy = "JUPyiwrYJFskUPeFoSYbKedZNsDvCN";
  navigator.clipboard.writeText(textToCopy);
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>$PWIF</motion.h1>
          <motion.h2 variants={textVariants}>
            Just A Platypus wif a hat
          </motion.h2>
          <motion.h2
            variants={textVariants}
            className="custom-cursor-hover copy-text"
            onClick={handleClick}
          >
            Contact Address (Coming Soon)
          </motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              className="custom-cursor-hover"
              variants={textVariants}
            >
              Trade Now!
            </motion.button>
            <motion.button
              className="custom-cursor-hover scroll"
              variants={textVariants}
            >
              Join our Discord!
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          $PWIF
        </motion.div>
        <div className="imageContainer">
          <img src="PwerryInBusiness.png" className="photo" alt="Pwerry" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
