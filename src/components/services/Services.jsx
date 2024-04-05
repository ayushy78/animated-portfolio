import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import photo2 from './photo2.png';


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  phase1: {
    id: 1,  
    style: {
      backgroundImage: "url('./photo5.png')",
      "&::before": {
        content: "",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('./photo4.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0,
        transition: "opacity 1s",
        zIndex: 1,
      },
      "&:hover::before": {
        opacity: 0,
      },
    },
    whileHover: { backgroundImage: "url('./photo3.png')" }, 
    title: "Branding",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  },
  phase2: {
    id: 2,
    style: {
      backgroundImage: "url('./photo5.png')", 
      "&::before": {
        content: "",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('./photo4.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0,
        transition: "opacity 1s",
        zIndex: 1,
      },
      "&:hover::before": {
        opacity: 0,
      },
    },
    whileHover: { backgroundImage: "url('./photo3.png')" }, 
    title: "Branding",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  },
  phase3: {
    id: 3,
    style: {
      backgroundImage: "url('./photo5.png')", 
      "&::before": {
        content: "",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('./photo4.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0,
        transition: "opacity 1s",
        zIndex: 1,
      },
      "&:hover::before": {
        opacity: 0,
      },
    },
    whileHover: { backgroundImage: "url('./photo3.png')" },
    title: "Branding",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  },
  phase4: {
    id: 4,
    style: {
      backgroundImage: "url('./photo5.png')", 
      "&::before": {
        content: "",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('./photo4.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0,
        transition: "opacity 1s",
        zIndex: 1,
      },
      "&:hover::before": {
        opacity: 0,
      },
    },
    whileHover: { backgroundImage: "url('./photo3.png')" },
    title: "Branding",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div>
      <motion.div
        className="services"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={"animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN</p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "white" }}>Roadmap</motion.b>
            </h1>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            style={item.phase1.style}
            whileHover={item.phase1.whileHover}

          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              libero enim nisi aliquam consectetur expedita magni eius ex
              corrupti animi! Ad nam pariatur assumenda quae mollitia libero
              repellat explicabo maiores?
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ backgroundImage: `url(${photo2})` }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              libero enim nisi aliquam consectetur expedita magni eius ex
              corrupti animi! Ad nam pariatur assumenda quae mollitia libero
              repellat explicabo maiores?
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ backgroundImage: `url(${photo2})` }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              libero enim nisi aliquam consectetur expedita magni eius ex
              corrupti animi! Ad nam pariatur assumenda quae mollitia libero
              repellat explicabo maiores?
            </p>
            <button>Go</button>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ backgroundImage: `url(${photo2})` }}
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              libero enim nisi aliquam consectetur expedita magni eius ex
              corrupti animi! Ad nam pariatur assumenda quae mollitia libero
              repellat explicabo maiores?
            </p>
            <button>Go</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;