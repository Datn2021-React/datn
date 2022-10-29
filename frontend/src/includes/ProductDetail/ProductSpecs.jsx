import React, { Component, useState } from "react";
import { Input, Button, Popconfirm, Empty } from "antd";
import { connect } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import StarRatings from "react-star-ratings";
import _ from "lodash";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   TwitterIcon,
//   FacebookIcon,
// } from "react-share";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { HeartOutlined, SlidersOutlined } from "@ant-design/icons";

function ProductSpecs(props) {
  const [state, setState] = useState({
    pdQty: 1,
    showStatus: "More",
    disableBuyNow: false,
  });

  let {
    data: { product, loading },
  } = props;

  // let description = "";
  // let allDescription = "";
  // if (product?.description) {
  //   allDescription = product.description.split(" ");
  //   if (state.showStatus === "More" && allDescription.length > 100) {
  //     let newRemarks = [...allDescription];
  //     description = newRemarks.splice(0, 95).join(" ") + "...";
  //   } else {
  //     description = product.description;
  //   }
  // }
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 18, marginRight: 10 }} spin />
  );

  let checkSkeleton = product?.name === "" ? "product-detail-skeleton" : "";

  const changePdValue = (num) => {
    let newPdQty = parseInt(state.pdQty) + num;
    if (newPdQty >= 1) {
      setState({
        pdQty: newPdQty,
      });
    }
  };

  const changeViewStatus = () => {
    if (state.showStatus === "More") {
      setState({
        showStatus: "Less",
      });
    } else {
      setState({
        showStatus: "More",
      });
    }
  };

  const addToCart = (slug) => {
    props.addToCart(slug, {
      quantity: state.pdQty,
    });
  };

  return (
    <>
      <div id="magnifyPortal" className="magnifyPortal" />
      {product ? (
        <div className={"product-specs " + checkSkeleton}>
          <div className="price-specs">
            <div className="product-title">{product?.name}</div>
            <div className="ratings-reviews">
              <div className="ratings">
                {product && (
                  <StarRatings
                    rating={parseFloat(2)}
                    starDimension="18px"
                    starSpacing="1px"
                    starRatedColor="#f2c900"
                    starEmptyColor="#eee"
                  />
                )}
                {loading && (
                  <span>
                    {" "}
                    {product
                      ? parseFloat(product.ratings).toFixed(1)
                      : "No"}{" "}
                    stars ratings
                  </span>
                )}
              </div>
              <div className="reviews">
                {loading && (
                  <span>
                    {product?.totalRatingUsers} customer reviews |{" "}
                    {/* {props.products.productQA?.totalCount} FAQ answered */}
                  </span>
                )}
                {!checkSkeleton ? (
                  <div className="price-wish">
                    <div className="old-new-price">
                      <div className="old-price">
                        <span>{product.priceOld} đ</span>
                      </div>
                      <div className="new-price">
                        <span className="price">
                          <span>{product.price} đ</span>
                        </span>
                        {product?.discountRate > 0 && (
                          <span className="discount">
                            (Giảm được{" "}
                            {(product.price * product.priceOld) / 100} %)
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="wish-btn">
                      {loading ? (
                        !_.isEmpty(product.hasOnWishlist) ? (
                          <Popconfirm
                            title="Are you sure you want to remove this from wishlist?"
                            onConfirm={() =>
                              props.removeFromWishList(
                                product.hasOnWishlist._id
                              )
                            }
                            // onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                          >
                            <HeartOutlined />
                          </Popconfirm>
                        ) : (
                          <HeartOutlined
                            onClick={() => props.addWishListItems(product.slug)}
                          />
                        )
                      ) : (
                        <Link to={`/login`}>
                          <HeartOutlined
                            onClick={() => props.addWishListItems(product.slug)}
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="price-wish"></div>
                )}
              </div>
              <div className="specs">
                {loading ? (
                  <div
                    className="spec-details"
                    dangerouslySetInnerHTML={{ __html: product?.highlights }}
                  ></div>
                ) : (
                  <>
                    <div className="details1">topic 1</div>
                    <div className="details2">topic 2</div>
                    <div className="details3">topic 3</div>
                    <div className="details4">topic 4</div>
                  </>
                )}
              </div>
              <div className="qty-cart-btn">
                <div className="qty-cart">
                  {product?.Stock ? (
                    loading ? (
                      !product?.hasOnCart ? (
                        <>
                          <div className="qty">
                            <span className="qty-title">Qty:</span>
                            <span className="qty-inc-dcs">
                              <i
                                aria-hidden="true"
                                onClick={() => changePdValue(-1)}
                                className={
                                  "fa fa-minus " +
                                  (state.pdQty === 1 ? "disabled" : "")
                                }
                              />
                              <Input
                                defaultValue={state.pdQty}
                                value={state.pdQty}
                                onChange={(e) => {
                                  setState({ pdQty: e.target.value });
                                }}
                              />
                              <i
                                className="fa fa-plus"
                                aria-hidden="true"
                                onClick={() => changePdValue(1)}
                              />
                            </span>
                          </div>

                          <Button
                            disabled={
                              props.cart.loading ||
                              state.disableBuyNow ||
                              props.products.productDetailsLoading
                            }
                            className="primary"
                            onClick={() => addToCart(product.slug)}
                          >
                            {props.cart.loading && <Spin indicator={antIcon} />}{" "}
                            Add to Cart
                          </Button>
                          <Link to="/checkout">
                            <Button
                              className="buy-now secondary"
                              disabled={
                                props.cart.loading ||
                                state.disableBuyNow ||
                                props.products.productDetailsLoading
                              }
                              onClick={() => {
                                props.saveCheckoutItems({
                                  carts: [{ product }],
                                  totalCount: 1,
                                  totalAmount:
                                    (product?.price.$numberDecimal -
                                      (product?.price.$numberDecimal *
                                        product?.discountRate) /
                                        100) *
                                    state.pdQty,
                                  removeAddQty: true,
                                  totalQty: state.pdQty,
                                });
                                setState({
                                  disableBuyNow: true,
                                });
                              }}
                            >
                              Buy Now
                            </Button>
                          </Link>
                        </>
                      ) : (
                        <div className="delete-product">
                          <Popconfirm
                            title="Are you sure you want to remove this from cart?"
                            onConfirm={() =>
                              props.removeCart(product.hasOnCart._id)
                            }
                            // onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                          >
                            <a>
                              <Button
                                className="btn"
                                disabled={props.cart.loading}
                              >
                                <DeleteOutlined />
                                <span className="txt">
                                  {props.cart.loading && (
                                    <Spin indicator={antIcon} />
                                  )}{" "}
                                  REMOVE FROM CART
                                </span>
                              </Button>
                            </a>
                          </Popconfirm>
                        </div>
                      )
                    ) : (
                      <Link to={`/login`}>
                        <div className="qty">
                          <span className="qty-title">Qty:</span>
                          <span className="qty-inc-dcs">
                            <i
                              aria-hidden="true"
                              // onClick={() =>  changePdValue(-1)}
                              className={
                                "fa fa-minus " +
                                (state.pdQty === 1 ? "disabled" : "")
                              }
                            />
                            <Input
                              defaultValue={state.pdQty}
                              value={state.pdQty}
                              onChange={(e) => {
                                setState({ pdQty: e.target.value });
                              }}
                            />
                            <i
                              className="fa fa-plus"
                              aria-hidden="true"
                              // onClick={() =>  changePdValue(1)}
                            />
                          </span>
                        </div>

                        <Button className="primary">Add to Cart</Button>
                        <Button className="buy-now secondary">Buy Now</Button>
                      </Link>
                    )
                  ) : !checkSkeleton ? (
                    <b>No Stocks Available</b>
                  ) : (
                    ""
                  )}
                </div>
                <div className="wish-comp-btn">
                  <div className="comp-btn">
                    <SlidersOutlined />
                    <span>Add to Compare</span>
                  </div>
                </div>
                <div className="prod-cate-specs">
                  {product.tags?.length > 0 && (
                    <div className="tags">
                      {!checkSkeleton && <b>Tags:</b>}{" "}
                      {product.tags.map((tag, i) => {
                        return (
                          <span key={i}>
                            {tag}
                            {product.tags.length !== i + 1 && ","}
                          </span>
                        );
                      })}
                    </div>
                  )}
                  {loading ? (
                    <div className="share">
                      <b>Share this product:</b>
                      {/* <span>
                <FacebookShareButton
                  url={`http://157.245.106.101:3000/products/${product.slug}`}
                  quote={"Kindeem - explore the mall"}
                  hashtag="#kindeem"
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={`http://sthautsav.com.np/products/${product.slug}`}
                  quote={"Kindeem - explore the mall"}
                  hashtag="#kindeem"
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
              </span> */}
                    </div>
                  ) : (
                    <div className="share"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
}

export default ProductSpecs;
