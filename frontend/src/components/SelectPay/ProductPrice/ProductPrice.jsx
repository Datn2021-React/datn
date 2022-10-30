import { Row, Skeleton, Tag } from "antd";
import React from "react";
import numberWithCommas from "../../../utils/numberWithCommas";

function ProductPrice(props) {
  const { productPrice, productPriceOld, productObj, product } = props;
  const url_price = productPrice ? productPrice.slice() : "";
  const url_price_old = productPriceOld ? productPriceOld.slice() : "";
  return (
    <div>
      <Skeleton.Button
        active={true}
        size="large"
        shape="default"
        block={false}
        style={{ width: "100%", marginTop: 10 }}
      />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="product-price">
        <p className="product-text" style={{ fontWeight: 600 }}>
          {!productObj.price
            ? numberWithCommas(url_price[0] ? url_price[0] : "")
            : numberWithCommas(productObj.price)}
          <sup> đ</sup>
        </p>
        <p className="product-text-old">
          <i>
            <del>
              {!productObj.priceOld
                ? numberWithCommas(url_price_old[0] ? url_price_old[0] : "")
                : numberWithCommas(productObj.priceOld)}
              đ
            </del>
          </i>
        </p>
        <Tag
          color="#f50"
          style={{
            transform: "translateY(-5px)",
            backgroundColor: "red",
            fontSize: "17px",
          }}
        >
          -
          {productObj.priceOld && productObj.price
            ? Math.round(
                ((productObj.priceOld - productObj.price) /
                  productObj.priceOld) *
                  100
              )
            : Object.keys(product).length
            ? Math.round(
                ((product.priceOld[0] - product.price[0]) /
                  product.priceOld[0]) *
                  100
              )
            : ""}
          %
        </Tag>
      </Row>
    </div>
  );
}

export default ProductPrice;
