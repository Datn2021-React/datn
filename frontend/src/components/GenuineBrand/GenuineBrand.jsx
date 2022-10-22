import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import Slider from "react-slick";
import { slide_price_shock } from "../../assets/fake-data/Start-Slider";

// GenuineBrand.propTypes = {};

const GenuineBrandComp = styled.div`
  font-family: "M PLUS Rounded 1c", sans-serif;
  margin-bottom: 30px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  button.slick-arrow.slick-prev {
    background: #3333331f;
    position: absolute;
    left: 0%;
    width: 3%;
    height: 100px;
    z-index: 1;
  }
  button.slick-arrow.slick-next {
    background: #3333331f;
    position: absolute;
    right: 0%;
    width: 3%;
    height: 100px;
    z-index: 0;
  }
  .genuine-brand-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
  }
  p {
    margin: 10px 10px;
    color: #a2a2a2;
    font-size: 23px;
  }
  i.fad.fa-donate {
    font-size: 23px;
    color: #326ebc;
  }
  .ant-col.ant-col-4.gutter-row {
    position: relative;
  }
  .genuine-brand-btn {
    position: absolute;
    bottom: 10px;
    left: 30%;
  }
  .ant-image {
    padding: 20px;
    margin-bottom: 40px;
  }
`;

function GenuineBrand(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <GenuineBrandComp>
      <div className="genuine-brand-title">
        <i className="fad fa-donate"></i>
        <p>Thương Hiệu Chính Hãng</p>
      </div>
      <Slider {...settings}>
        {slide_price_shock.map((item, index) => (
          <div className="product-slide-item" key={index}>
            <img alt="" style={{ width: "100%" }} src={item} />
          </div>
        ))}
      </Slider>
    </GenuineBrandComp>
  );
}

export default GenuineBrand;
