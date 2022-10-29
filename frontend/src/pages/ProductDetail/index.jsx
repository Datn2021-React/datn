import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Helmet from "../../components/Helmet/Helmet";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, Col, Empty, Grid, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import DetailSlider from "../../includes/ProductDetail/DetailSlider";
import ProductSpecs from "../../includes/ProductDetail/ProductSpecs";
import OtherDetails from "../../includes/ProductDetail/OtherDetails";
import { getProductDetails } from "../../Redux/actions/productAction";
import ScaleLoader from "react-spinners/ScaleLoader";
import { override } from "../Home/Home";

function ProductDetail(props) {
  const { id, name } = useParams();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.productDetails);
  const { loading, product } = productState;

  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id]);

  return (
    <Helmet title={name}>
      {loading && (
        <div className="loading__container">
          <ScaleLoader
            color={"#2963B3"}
            loading={loading}
            css={override}
            size={200}
          />
        </div>
      )}
      <div className="wrapper">
        <section className="detail">
          {product ? (
            <div className="container">
              <Row className="breadcrumb-all">
                <Col lg={24}>
                  {product.name && (
                    <Breadcrumb>
                      <Breadcrumb.Item>
                        <Link to="/">Home</Link>
                      </Breadcrumb.Item>
                      {product.category && (
                        <Breadcrumb.Item>
                          <Link to={`/category/${product.category}`}>
                            {product.category}
                          </Link>
                        </Breadcrumb.Item>
                      )}
                    </Breadcrumb>
                  )}
                </Col>
              </Row>
              <Row>
                <Col lg={10} xs={24} md={24} style={{zIndex: 1}}>
                  <DetailSlider data={product} />
                </Col>
                <Col lg={14} xs={24} md={18}>
                  <ProductSpecs data={productState} />
                </Col>
              </Row>
              <Row>
                <Col lg={24}>
                  <OtherDetails data={productState} />
                </Col>
              </Row>
            </div>
          ) : (
            <Empty />
          )}
        </section>
      </div>
    </Helmet>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
