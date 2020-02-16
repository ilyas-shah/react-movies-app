import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// const StyledSlide = withStyles(styles)(Slide);
const imageList = [
  "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_In_MenInBlackInternational/b0df7fb4-6f53-40e7-85b2-dde51df3a2bc._UR3000,600_SX3000_FMwebp_.jpg",
  "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_OnceUponatimeinHWOscar/b242cba9-70bb-4e0f-bf44-86cb35bd449d._UR3000,600_SX3000_FMwebp_.jpg",
  "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_In_MenInBlackInternational/b0df7fb4-6f53-40e7-85b2-dde51df3a2bc._UR3000,600_SX3000_FMwebp_.jpg",
  "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_OnceUponatimeinHWOscar/b242cba9-70bb-4e0f-bf44-86cb35bd449d._UR3000,600_SX3000_FMwebp_.jpg"
];

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(2);
  const [translateWidth, setTranslateWidth] = useState(0);
  const [showRight, setShowRight] = useState(true);
  const [showLeft, setShowLeft] = useState(false);
  //   const [autoRotate, setAutoRotate] = useState(false);
  // const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    // Fetch images from an API call later.
    console.log(nextIndex, prevIndex, currentIndex);
    setImages(imageList);
  }, []);

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
    height: "inherit",
    display: "inline"
  };

  const arrowStyle = {
    fontSize: "large"
  };

  const handleRight = () => {
    if (nextIndex === images.length) {
      setShowRight(false);

      console.log(nextIndex, prevIndex, currentIndex);
      setTranslateWidth(translateWidth - 100);
    } else {
      setTranslateWidth(translateWidth - 100);
      // console.log(nextIndex, prevIndex, currentIndex);
      setPrevIndex(currentIndex);
      setNextIndex(nextIndex + 1);
      setCurrentIndex(currentIndex + 1);

      setShowLeft(true);
      console.log(nextIndex, prevIndex, currentIndex);
    }
    // console.log(translateWidth);
  };

  const handleLeft = () => {
    if (prevIndex === 0 && currentIndex === 1) {
      setShowRight(true);
      setShowLeft(false);

      setTranslateWidth(translateWidth + 100);
    } else {
      setShowRight(true);

      setCurrentIndex(currentIndex - 1);
      setPrevIndex(prevIndex - 1);
      setNextIndex(nextIndex - 1);

      setTranslateWidth(translateWidth + 100);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1600px",
        height: "320px",
        margin: "0 auto",
        background: "transparent",
        overflow: "hidden"
      }}
    >
      {showLeft && (
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
          whiteSpace: "nowrap",
          height: "100%",
          transform: `translate(${translateWidth}%)`,
          paddingInlineStart: "0px",
          transition: "transform .5s ease"
        }}
      >
        {images.map((image, index) => {
          return (
            <li key={index} style={liStyle}>
              <a href="/#">
                <img
                  src={image}
                  alt={prevIndex + ", " + currentIndex + ", " + nextIndex}
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    transition: "width 2s",
                    zIndex: 0,
                    left: 0,
                    top: 0
                  }}
                />
              </a>
            </li>
          );
        })}
      </ul>

      {showRight && (
        <button
          className="carousel-right-button"
          value="right"
          style={{ ...buttonStyle, right: 0 }}
          onClick={() => handleRight(currentIndex)}
        >
          <ArrowForwardIosIcon {...arrowStyle} />
        </button>
      )}
    </div>
  );
};

export default Carousel;
