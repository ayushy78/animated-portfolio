import React, { useEffect } from "react";
import "./SlideText.scss";

const SliderText = () => {
  useEffect(() => {
    const animateText = () => {
      const textContainer = document.querySelector(".text");
      if (textContainer) {
        const containerWidth = textContainer.offsetWidth;
        const animationDuration = containerWidth / 200; // Adjust speed based on container width
        textContainer.style.animationDuration = `${animationDuration}s`;
      }
    };

    animateText(); // Initial animation

    const intervalId = setInterval(animateText, 0); // Adjust interval to match animation duration

    return () => {
      clearInterval(intervalId); // Clear interval on component unmount
    };
  }, []);

  return (
    <div className="infinite-linear-slide-text">
      <div className="text">
        |RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR|  $PWIF, a Platypus wif a hat. Just A Platypus with a hat. A hat and a Platypus. Hat. Platypus. Moon. Hat. Platypus. Moon. Money. Go.  |BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
         $PWIF, a Platypus wif a hat. Just A Platypus with a hat. A hat and a Platypus. Hat. Platypus. Moon. Hat. Platypus. Moon. Money. Go.  |BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR|
         $PWIF, a Platypus wif a hat. Just A Platypus with a hat. A hat and a Platypus. Hat. Platypus. Moon. Hat. Platypus. Moon. Money. Go.  |BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR|
      </div>
    </div>
  );
};

export default SliderText;
