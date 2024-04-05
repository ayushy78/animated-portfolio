import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

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

const phases = {
  phase1: {
    id: 1,
    style: {
      backgroundImage: "url('./Roadmap1.png')",
    },
    whileHover: { backgroundImage: "url('./Roadmap5.png')" },
    title: "Phase 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  },
  phase2: {
    id: 2,
    style: {
      backgroundImage: "url('./Roadmap2.png')",
    },
    whileHover: { backgroundImage: "url('./Roadmap5.png')" },
    title: "Phase 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  },
  phase3: {
    id: 3,
    style: {
      backgroundImage: "url('./Roadmap3.png')",
    },
    whileHover: { backgroundImage: "url('./Roadmap5.png')" },
    title: "Phase 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  },
  phase4: {
    id: 4,
    style: {
      backgroundImage: "url('./Roadmap4.png')",
    },
    whileHover: { backgroundImage: "url('./Roadmap5.png')" },
    title: "Phase 4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
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
          {/* <p>JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN</p> */}
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
          {Object.values(phases).map((phase) => (
            <motion.div
              key={phase.id}
              className="box"
              style={phase.style}
              whileHover={phase.whileHover}
            >
              <h2>{phase.title}</h2>
              <p>{phase.text}</p>
              <button>Go</button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
