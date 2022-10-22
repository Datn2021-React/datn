import React, { useState, useEffect } from "react";
import { Affix, Button, Col, Row } from "antd";
import { category_product } from "../../assets/fake-data/category-product";
import styled from "styled-components";

const CatgorySelectStyled = styled.div`
  margin-bottom: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .category-select-title {
    height: 50px;
    display: flex;
    align-items: center;
    margin: 0 20px;
    font-size: 22px;
    color: #197468;
    i.fad.fa-lightbulb-on {
      margin-right: 15px;
      font-size: 30px;
      color: #e69707;
    }
  }
  .ant-col.ant-col-3.gutter-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
  .category-select-img {
    width: 30%;
    height: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
  }

  .category-select-card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    &:nth-child(8) {
      border-right: none;
    }
  }
`;

function CatgorySelect(props) {
  const [top, setTop] = useState(80);
  const [active, setActive] = useState(0);
  const { productsAll, handleImportProduct } = props;
  const [productState, setProductState] = useState([]);

  useEffect(() => {
    setProductState(productsAll);
  }, [productsAll]);

  const handleCategory = (name) => {
    console.log(productsAll);
    const productHandle = productsAll.filter(
      (item) => item.description[0].trademark === name
    );
    handleImportProduct(productHandle);
  };
  const handleProductAll = () => {
    handleImportProduct(productState);
  };

  const handleActiveCategory = (name, index) => {
    switch (name) {
      case "Dành cho bạn":
        handleProductAll();
        break;
      case "Sam Sung Thời Thượng":
        handleCategory("samsung");
        break;
      case "Xiaomi Giá Rẻ":
        handleCategory("Apple");
        break;
      case "Đập Hộp Vivo":
        handleCategory("Vivo");
        break;
      case "Siêu phẩm Oppo":
        handleCategory("LG");
        break;
      case "LG Hỗ Trợ":
        handleCategory("Microsoft");
        break;
      case "Nokia Cực Bền":
        handleCategory("Nokia");
        break;
      case "Cực Vip Apple":
        handleCategory("Apple");
        break;
      default:
        break;
    }
    setActive(index);
  };

  const renderCategoryProduct = () =>
    category_product.map((item, index) => (
      <Col className="gutter-row" span={3} style={{ padding: 0 }} key={index}>
        <div
          className={
            active === index
              ? "category-select-card active"
              : "category-select-card"
          }
          onClick={() => handleActiveCategory(item.title, index)}
        >
          <div className="category-select-img">
            <img alt="" src={item.image} />
          </div>
          <Button type="link">{item.title}</Button>
        </div>
      </Col>
    ));

  return (
    <Affix offsetTop={top}>
      <CatgorySelectStyled>
        <div className="category-select-title">
          <i className="far fa-lightbulb-on"></i>Gợi Ý Hôm Nay
        </div>
        <Row
          // onClick={() => setTop(top)}
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{
            margin: 0,
            borderTop: " 5px solid #f8f8f8",
            borderBottom: " 5px solid #f8f8f8",
            borderRadius: "5px",
          }}
        >
          {renderCategoryProduct()}
        </Row>
      </CatgorySelectStyled>
    </Affix>
  );
}

export default CatgorySelect;
