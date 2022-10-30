import axios from "axios";

import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../../constants/productConstants";

export const getProduct =
  (keyword = "", current = 1, price = [0, 20000000], category) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      console.log(keyword);
      // let link = `/api/v1/products`;
      let link = `/api/v1/products?page=${current}&keyword=${keyword}`;
      // let link = `/api/v1/products?keyword=${keyword}&page=${current}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

      // if (category) {
      //   link = `/api/v1/products?keyword=${keyword}&page=${current}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
      // }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
//Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/product/${id}`);
    console.log(data);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
