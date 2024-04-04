import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

// jsobect to store the images in public folder
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <h4 style = {{textAlign: "center"}}>Story Of Pwerry The Platypus</h4>
        <Carousel>
          {images.map((image) => (
            <Carousel.Item key={image.id} interval={1500}>
              <img
                className="d-block w-100"
                src={image.src}
                alt={`Image ${image.id}`}
              />
              {/* <Carousel.Caption>
              <h3>Label for slide {image.id}</h3>
              <p>Sample Text for Image {image.id}</p>
            </Carousel.Caption> */}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
