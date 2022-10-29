import React, { useEffect, useState } from "react";
import Sliderss from "react-slick";
import ReactImageMagnify from "react-image-magnify";
import { IMAGE_BASE_URL } from "../../constants/apiContant";
import { Col, Grid, Row } from "antd";
const baseImageUrl = IMAGE_BASE_URL;

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <img
      src="/images/left-arrow.png"
      alt="left arrow"
      className={className + " arr"}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <img
      src="/images/right-arrow.png"
      alt="left arrow"
      className={className + " arr"}
      onClick={onClick}
    />
  );
};

const DetailSlider = (props) => {
  let [curIndex, setCurIndex] = useState(0);
  let [currentImage, setCurrentImage] = useState(
    "https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"
  );

  useEffect(() => {
    if (props.data?.images) {
      setCurrentImage(props.data?.images[0].url);
    }
  }, [props.data?.images]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 4,
    draggable: true,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="det-slider">
      <div className="slider-images">
        <Row justify="center" align="top" style={{width: '100%'}}>
          <Col span={16}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Product image",
                  isFluidWidth: true,
                  src: currentImage,
                },
                imageClassName: "magnify-img",
                largeImage: {
                  src: currentImage,
                  width: 1000,
                  height: 1000,
                },
                lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                enlargedImagePortalId: "magnifyPortal",
                enlargedImageContainerDimensions: {
                  width: "120%",
                  height: "100%",
                },
              }}
            />
          </Col>
          <Col span={8} className="image-review">
            <div id="magnifyPortal" />
          </Col>
        </Row>
      </div>

      <div className="thumbnail">
        {props.data?.images?.length >= 4 ? (
          <Sliderss {...settings}>
            {props.data?.images?.map((image, j) => {
              return (
                <img
                  key={j}
                  alt=""
                  className={curIndex === j ? "active" : ""}
                  src={image.url}
                  onClick={() => {
                    setCurIndex(j);
                  }}
                />
              );
            })}
          </Sliderss>
        ) : (
          props.data?.images?.map((image, j) =>
            image._id === "1" ? (
              <img src={image.url} alt="img" />
            ) : (
              <img
                key={j}
                className={curIndex === j ? "active" : ""}
                src={image.url}
                alt=""
                onClick={() => {
                  setCurIndex(j);
                }}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default DetailSlider;
