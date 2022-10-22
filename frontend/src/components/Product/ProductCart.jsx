import React from "react";
import PropTypes from "prop-types";
import { Badge, Rate, Tag } from "antd";
import { Link } from "react-router-dom";

ProductCart.propTypes = {};

function ProductCart(props) {
  const {
    _id,
    name,
    price,
    status,
    ratings,
    category,
    images,
    height,
    img_width,
    right,
  } = props;
  return (
    <Badge>
      <div className="product-cart" style={{ height: height + "px" }}>
        <Link to={_id}>
          <div className="product-cart_image">
            {/* <img src={images} alt="" /> */}
          </div>
          <h3 className="product-cart_name">{name}</h3>
          <div className="product-cart-evaluate">
            <Rate
              disabled
              defaultValue={ratings ? +ratings : 0}
              style={{ marginTop: "12px" }}
            />
            <p className="product-cart-sold">đã bán 100+</p>
          </div>
          <div className="product-cart_price">
            {price[0]} <sup> đ</sup>
          </div>
        </Link>
      </div>
    </Badge>
  );
}

export default ProductCart;
