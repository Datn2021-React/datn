import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../Redux/actions/productAction";
import { Col, Row } from "antd";
import SelectPay from "../SelectPay";
import styled from "styled-components";

const ProductsItem = styled.div`
  .product-img {
    width: 100%;
    height: 500px;
    margin-top: 50px;
  }
`;

const ProductCart = ({ match }) => {
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <ProductsItem>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{
          background: "#fff",
          boxShadow: "0 0 2px 2px rgb(227 227 227)",
        }}
      >
        <Col className="gutter-row" span={10}>
          {product.images &&
            product.images.map((item, i) => (
              <img
                className=""
                key={item.url}
                src={item.url}
                alt={`${i} Slide`}
              ></img>
            ))}
        </Col>
        <Col className="gutter-row" span={14} style={{ paddingBottom: "20px" }}>
          <SelectPay product={product} />
          <h1>{product.price}</h1>
          <h1>{product.numOfRiview}</h1>
        </Col>
      </Row>
    </ProductsItem>
    // <Fragment>
    //   <div>
    //     {product.images &&
    //       product.images.map((item, i) => (
    //         <img
    //           className=""
    //           key={item.url}
    //           src={item.url}
    //           alt={`${i} Slide`}
    //         ></img>
    //       ))}
    //   </div>
    //   <div>
    //     <h2>{product.name}</h2>
    //     <p>Product # {product._id}</p>
    //   </div>
    // </Fragment>
  );
};

ProductCart.propTypes = {};

export default ProductCart;
