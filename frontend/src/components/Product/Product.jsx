import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import numberWithCommas from "../../utils/numberWithCommas";

const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 15 : 20,
    value: product.ratings,
    isHalf: true,
  };
  return (
    <div className="product-cart">
      <Link to={`/product/${product._id}`}>
        <div className="product-cart_image">
          <img src={product.images[0].url} alt={product.name} />
        </div>
        <p className="product-cart_name">{product.name}</p>
        <div className="product-cart-evaluate">
          <ReactStars {...options} />{" "}
          <span className="span">({product.numOfReviews} Reviews)</span>
        </div>
        <div className="product-cart_priceOld">
          {/* <li>
            <ul>{numberWithCommas(product.priceOld)}</ul> <sup>đ</sup>
          </li> */}
          <span>{numberWithCommas(product.priceOld)}</span> <sup>đ</sup>
        </div>
        <div className="product-cart_price">
          <span>{numberWithCommas(product.price)}</span> <sup>đ</sup>
        </div>
        {/* <div className="product-cart_price">
          <span>{numberWithCommas(product.description).re}</span> <sup>đ</sup>
        </div>
        <div className="product-cart_price">
          <span>{numberWithCommas(product.RAM)}</span> <sup>đ</sup>
        </div>
        <div className="product-cart_price">
          <span>{numberWithCommas(product.rear_camera)}</span> <sup>đ</sup>
        </div> */}
      </Link>
    </div>
  );
};

export default Product;
