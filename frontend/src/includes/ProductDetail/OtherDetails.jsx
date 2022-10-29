import React, { useEffect, useState } from "react";
import { Button, Descriptions, Empty, Tabs } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";
// import QA from "./Includes/Q&A";
// import Reviews from "./Includes/Reviews";
// import ReviewsForm from "./Includes/ReviewForm";
// import ProductVideo from "./Includes/ProductVideo";
// import { IMAGE_BASE_URL } from "../../../utils/constants";
// import { productDetailSkeleton } from "../../../utils/skeletons";
import AdditionalInformation from "./AdditionalInformation";

const { TabPane } = Tabs;

const OtherDetails = (props) => {
  let [openVideo, setOpenVideo] = useState(false);
  let [productDetail, setProductDetail] = useState(null);
  const [display, setDisplay] = useState(false);

  const handleShowDescriptionProduct = () => {
    setDisplay(!display);
  };

  const openCloseVideoModal = () => {
    setOpenVideo(!openVideo);
  };

  const callback = (key) => {};

  useEffect(() => {
    if (props.data) {
      setProductDetail(props.data?.product);
    }
  }, [props.data?.product]);

  let addInfo = {
    weight: productDetail?.weight,
    color: productDetail?.color,
    size: productDetail?.size,
    warranty: productDetail?.warranty,
  };

  console.log(productDetail);

  return (
    <div className="other-details">
      <Tabs defaultActiveKey="1" onChange={callback}>
        {productDetail ? (
          <>
            <TabPane tab="Description" key="1">
              <div className="desc-tab">
                <div className="title">Description</div>
                <>
                  <Descriptions
                    title="CHI TIẾT SẢN PHẨM"
                    bordered
                    column={{
                      xxl: 4,
                      xl: 3,
                      lg: 3,
                      md: 3,
                      sm: 2,
                      xs: 1,
                    }}
                  >
                    {productDetail.description && (
                      <>
                        <Descriptions.Item label="Danh Mục">
                          {productDetail ? productDetail.category : ""}
                        </Descriptions.Item>
                        <Descriptions.Item label="Thương Hiệu">
                          {productDetail.description[0].trademark}
                        </Descriptions.Item>
                        <Descriptions.Item label="Nguồn Gốc Sản Xuất">
                          {productDetail.description[0].origin_trademark}
                        </Descriptions.Item>
                        <Descriptions.Item label="Kho hàng">
                          {productDetail.amount}
                        </Descriptions.Item>
                        <Descriptions.Item label="Gửi từ">
                          {productDetail.shop ? productDetail.shop.address : ""}
                        </Descriptions.Item>
                        <Descriptions.Item label="Bảo Hành">
                          {productDetail.description[0].insurance} Tháng
                        </Descriptions.Item>
                        <Descriptions.Item label="Config Info">
                          {productDetail.description
                            ? Object.keys(productDetail.description[0]).map(
                                (keyName, i) => {
                                  if (keyName !== "details") {
                                    return (
                                      <li
                                        className="travelcompany-input"
                                        key={i}
                                        style={{ listStyleType: "none" }}
                                      >
                                        <span className="input-label">
                                          {keyName}:{" "}
                                          {
                                            productDetail.description[0][
                                              keyName
                                            ]
                                          }
                                        </span>
                                      </li>
                                    );
                                  }
                                }
                              )
                            : ""}
                        </Descriptions.Item>
                      </>
                    )}
                  </Descriptions>
                  <div
                    className="product-desc-info"
                    style={{
                      marginTop: "50px",
                      height: display ? "auto" : 230,
                      overflow: "hidden",
                      transition: "0.5s ease-in-out",
                      position: "relative",
                    }}
                  >
                    <h1>MÔ TẢ SẢN PHẨM</h1>
                    {productDetail.description && productDetail.description[0].details}
                    <div
                      className="opacity"
                      style={{
                        position: "absolute",
                        height: 150,
                        width: "100%",
                        top: "44%",
                        background:
                          "linear-gradient(rgb(255 255 255 / 0%), rgb(255, 255, 255)) rgb(255 255 255 / 31%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        visibility: display ? "hidden" : "",
                      }}
                    ></div>
                  </div>
                  <Button
                    type="link"
                    onClick={handleShowDescriptionProduct}
                    style={{ marginTop: 30, marginLeft: "45%" }}
                  >
                    {display ? "Thu Gọn" : "Xem Thêm"}
                  </Button>
                </>
              </div>
            </TabPane>
            <TabPane tab="Additional Information" key="2">
              <AdditionalInformation data={addInfo} />
            </TabPane>
            <TabPane tab="Video" key="3">
              Video
            </TabPane>
            <TabPane tab="Q & A" key="4">
              QA
              {/* <QA /> */}
            </TabPane>
            <TabPane tab={`Reviews (${productDetail.numOfReviews})`} key="5">
              Review
              {/* <Reviews data={productDetail} /> */}
              {/* {!productDetail.hasReviewed && productDetail.hasBought && <ReviewsForm />} */}
            </TabPane>
          </>
        ) : (
          <Empty />
        )}
      </Tabs>
    </div>
  );
};

export default OtherDetails;
