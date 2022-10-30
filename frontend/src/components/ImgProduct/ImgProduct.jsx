import React from "react";

function ImgProduct(props) {
  let { productImg, imageArr } = props;
  const { product } = props;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: productImg
      ? productImg[0].length > 4
        ? 4
        : productImg[0].length
      : "",
    slidesToScroll: 1,
  };
  return (
    <div>
      {product.images &&
        product.images.map((item, i) => (
          <img
            className=""
            key={item.url}
            src={item.url}
            alt={`${i} Slide`}
          ></img>
        ))}
    </div>
  );
}

export default ImgProduct;
