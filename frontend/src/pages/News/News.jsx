import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const ProductsItem = styled.div`
  .product-img {
    width: 100%;
    height: 500px;
    margin-top: 50px;
  }
`;
function News() {
  return (
    <ProductsItem>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{
          background: "#fff",
          boxShadow: "0 0 2px 2px rgb(227 227 227)",
        }}
      >
        <Col className="gutter-row">Tuấn Mobile</Col>
        <Col className="gutter-row" span={10}>
          Tuấn Mobile
        </Col>
      </Row>
    </ProductsItem>
  );
}

export default News;
