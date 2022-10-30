import React from "react";
import PropTypes from "prop-types";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice/ProductPrice";

SelectPay.propTypes = {};

function SelectPay(props) {
  const { product } = props;

  return (
    <div>
      <ProductName product={product} />
      {/* <ProductPrice ProductPrice={product.price} /> */}
    </div>
  );
}

export default SelectPay;
