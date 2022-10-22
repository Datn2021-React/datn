import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../Redux/actions/productAction";

const ProductCart = ({ match }) => {
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <Fragment>
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
      <div>
        <h2>{product.name}</h2>
        <p>Product # {product._id}</p>
      </div>
    </Fragment>
  );
};

ProductCart.propTypes = {};

export default ProductCart;
