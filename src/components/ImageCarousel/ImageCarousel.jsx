import "bootstrap/dist/css/bootstrap.css";
import "./ImageCarousel.scss";

import React from "react";
import Carousel from "react-bootstrap/Carousel";

const images = [
  {
    id: 1,
    src: "photo1.png",
  },
  {
    id: 2,
    src: "photo2.png",
  },
  {
    id: 3,
    src: "photo3.png",
  },
  {
    id: 4,
    src: "photo4.png",
  },
  {
    id: 5,
    src: "photo5.png",
  },
];

export default function App() {
  return (
    <div className="app-container">
      <div className="carousel-container">
        <h4 className="carousel-title">Pwerry's Story </h4>
        <Carousel className="carousel">
          {images.map((image) => (
            <Carousel.Item
              key={image.id}
              interval={2000}
              className="carousel-item"
            >
              <img
                className="carousel-image"
                src={image.src}
                alt={`Image ${image.id}`}
              />
              {/* <Carousel.Caption className="carousel-caption">
              <h3>Label for slide {image.id}</h3>
              <p>Sample Text for Image {image.id}</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          ))}
          <Carousel.Item interval={600000} className="carousel-item">
            <a href="#" className="carousel-link">
              <img
                className="carousel-image"
                src="BuyPhoto.png"
                alt="Buy Now"
              />
            </a>
            {/* <Carousel.Caption className="carousel-caption">
              <h3>Buy Now</h3>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
