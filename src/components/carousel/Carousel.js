import React, { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// const StyledSlide = withStyles(styles)(Slide);
const images = [
  "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_In_MenInBlackInternational/b0df7fb4-6f53-40e7-85b2-dde51df3a2bc._UR3000,600_SX3000_FMwebp_.jpg",
  "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_OnceUponatimeinHWOscar/b242cba9-70bb-4e0f-bf44-86cb35bd449d._UR3000,600_SX3000_FMwebp_.jpg"
];

const Carousel = () => {
  //   const [images, setImages] = useState([]);
  //   const [autoRotate, setAutoRotate] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselContainer = {
    height: "inherit",
    width: "1600px",
    position: "relative"
  };

  const buttonStyle = {
    height: "100%",
    top: "0",
    position: "absolute",
    margin: "0",
    background: "transparent",
    color: "inherit",
    border: "0",
    padding: "6px !important",
    zIndex: "10",
    outline: "none"
  };

  const liStyle = {
    height: "inherit"
  };

  const arrowStyle = {
    fontSize: "large"
  };

  const handleRight = index => {
    console.log(index);
    if (index === images.length - 1) {
      index = 0;
    } else {
      index = index + 1;
    }
    setCurrentIndex(index);
  };

  const handleLeft = index => {
    if (index === 0) {
      index = images.length - 1;
    } else {
      index = index - 1;
    }
    setCurrentIndex(index);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 320,
        margin: 0,
        background: "transparent"
      }}
    >
      {currentIndex !== 0 && (
        <button
          className="carousel-left-button"
          value="left"
          style={{ ...buttonStyle, left: 0 }}
          onClick={() => handleLeft(currentIndex)}
        >
          <ArrowBackIosIcon {...arrowStyle} />
        </button>
      )}

      <ul
        className="carousel-contatiner-content"
        style={{
          listStyle: "none",
          margin: "0 auto",
          padding: "0 40px"
        }}
      >
        {images.map((image, index) => {
          return (
            currentIndex === index && (
              <li key={index} style={liStyle}>
                <a href="/#">
                  <img
                    src={image}
                    alt=""
                    style={{
                      position: "relative",
                      height: "100%",
                      width: "100%",
                      transition: "width 2s",
                      zIndex: 0
                    }}
                  />
                </a>
              </li>
            )
          );
        })}
      </ul>

      <button
        className="carousel-right-button"
        value="right"
        style={{ ...buttonStyle, right: 0 }}
        onClick={() => handleRight(currentIndex)}
      >
        <ArrowForwardIosIcon {...arrowStyle} />
      </button>
    </div>
  );
};

export default Carousel;
