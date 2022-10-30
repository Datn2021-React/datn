import React from "react";
import PropTypes from "prop-types";
import { Row, Tag } from "antd";

ProductName.propTypes = {};

function ProductName(props) {
  const { product } = props;
  const statusProduct = product.status ? "con hang" : "het hang";
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <p className="product-name">
          <Tag color="#f50" style={{ transform: "translateY(-4px)" }}>
            {statusProduct}
          </Tag>
          {product.name}
        </p>
      </Row>
    </div>
  );
}

export default ProductName;
