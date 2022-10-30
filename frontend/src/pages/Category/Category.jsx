import React, { useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../Redux/actions/productAction";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect } from "react";
import { css } from "styled-components";
import {
  Col,
  Divider,
  Row,
  Pagination,
  Slider,
  Typography,
  Button,
} from "antd";
import Grid from "../../components/Grid/Grid";
import Section, { SectionBody } from "../../components/section/Section";
import Product from "../../components/Product/Product";
import category from "../../assets/fake-data/category";
import CheckBox from "../../components/CheckBox/CheckBox";
import category_Capacity from "../../assets/fake-data/category-capacity";
import category_name, {
  category_price,
} from "../../assets/fake-data/category-name";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  transition: display 0.5s ease;
`;

export default function Category({ match }) {
  // const [categogy, setCategory] = useState("");
  const [price, setPrice] = useState([0, 20000000]);
  const [current, setCurrent] = useState(1);
  const keyword = match.params.keyword;
  // const [mobile, setMobile] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { products, error, productsCount, resultPerPage } = useSelector(
    (state) => state.products
  );
  const [productsAll, setProductsAll] = useState([]);

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const setCurrentPageNo = (e) => {
    setCurrent(e);
  };

  useEffect(() => {
    if (productsAll.length === 0 && products.length > 0) {
      setProductsAll(products);
    }
  }, [products]);

  useEffect(() => {
    dispatch(getProduct(keyword, current, price));
  }, [dispatch, keyword, current, price]);

  const initFilter = {
    category: [],
    category_name: [],
    category_Capacity: [],
  };
  //////
  // const productList = products.getProduct();
  // const [product, setproduct] = useState(productList);
  const [filter, setFilter] = useState(initFilter);
  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "CATEGORY_NAME":
          setFilter({
            ...filter,
            category_name: [...filter.category_name, item.name],
          });
          break;
        case "CATEGORY_CAPACITY":
          setFilter({
            ...filter,
            category: [...filter.category_Capacity, item.Capacity],
          });
          break;

        default:
          break;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "CATEGORY_NAME":
          const newCategory_name = filter.category_name.filter(
            (e) => e !== item.name
          );
          setFilter({ ...filter, category_name: newCategory_name });
          break;
        case "CATEGORY_CAPACITY":
          const newCategory_Capacity = filter.category_Capacity.filter(
            (e) => e !== item.Capacity
          );
          setFilter({ ...filter, category_Capacity: newCategory_Capacity });
          break;

        default:
          break;
      }
    }
  };

  // useEffect(() => {
  //   const arr = [];
  //   products.filter((item) => {
  //     if (item.category === "mobile") {
  //       arr.push(item);
  //     }
  //     return 0;
  //   });
  //   setMobile(arr);
  // }, [products]);

  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      if (products) {
        setLoading(false);
        document.body.style.overflow = "";
      }
    }, 600);
  }, [products]);
  return (
    <Helmet title="Sản phẩm">
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
      <Section>
        <Divider
          orientation="center"
          style={{ transform: "translateY(50px)", color: "#c3c3c3" }}
        >
          SẢN PHẨM
        </Divider>
        <div className="catalog">
          <div className="catalog_filter">
            <div className="catalog_filter_wedget">
              <div className="catalog_filter_wedget_title">
                Danh mục sản phẩm
              </div>

              <div className="catalog_filter_wedget_content">
                {category.map((item, index) => (
                  <div
                    key={index}
                    className="catalog_filter_wedget_content_item"
                    // onClick={() => setCategory(item)}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                  >
                    {/* <CheckBox lable={item.display} /> */}
                    {item.display}
                  </div>
                ))}
              </div>
            </div>

            <div className="catalog_filter_wedget">
              <div className="catalog_filter_wedget_title">Hãng</div>
              <div className="catalog_filter_wedget_content">
                {category_name.map((item, index) => (
                  <div
                    key={index}
                    className="catalog_filter_wedget_content_item"
                  >
                    <CheckBox
                      lable={item.display}
                      onChange={(input) =>
                        filterSelect("CATEGORY_NAME", input.checked, item)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="catalog_filter_wedget">
              <div className="catalog_filter_wedget_title">Dung lượng</div>
              <div className="catalog_filter_wedget_content">
                {category_Capacity.map((item, index) => (
                  <div
                    key={index}
                    className="catalog_filter_wedget_content_item"
                  >
                    <CheckBox
                      lable={item.display}
                      onChange={(input) =>
                        filterSelect("CATEGORY_CAPACITY", input.checked, item)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="catalog_filter_wedget">
              <div className="catalog_filter_wedget_title">Giá</div>
              <div>
                {category_price.map((item, index) => (
                  <div
                    key={index}
                    className="catalog_filter_wedget_content_item"
                  >
                    <Button>{item.display}</Button>
                  </div>
                ))}
              </div>
              {/* <div>
                <Slider
                  defaultValue={3}
                  value={price}
                  onChange={priceHandler}
                  min={0}
                  max={20000000}
                />
              </div> */}
            </div>
          </div>
          <div className="catalog_content">
            <Grid col={3} mdCol={2} smCol={1} gap={20}>
              {products &&
                products.map((item, index) => (
                  <Product
                    key={index._id}
                    product={item}
                    height="400"
                    img_width="95%"
                    right="11px"
                  />
                ))}
            </Grid>
          </div>
        </div>
        {/* <SectionBody>
          <Row>
            <Col span={18} push={6}>
              <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {products &&
                  (4, mobile).map((products) => (
                    <Product
                      key={products._id}
                      product={products}
                      height="400"
                      img_width="95%"
                      right="11px"
                    />
                  ))}
              </Grid>
            </Col>
            <Col span={6} pull={18}>
              <Typography>Price</Typography>
              <Slider
                defaultValue={30}
                value={price}
                onChange={priceHandler}
                min={0}
                max={20000000}
              />
            </Col>
          </Row>
        </SectionBody> */}

        {resultPerPage < productsCount && (
          <Pagination
            loading={loading}
            current={current}
            total={productsCount}
            onChange={setCurrentPageNo}
          />
        )}
      </Section>

      {/* <Row>
        <Col span={18} push={6}>
          col1
        </Col>
        <Col span={6} pull={18}>
          col2
        </Col>
      </Row> */}
    </Helmet>
  );
}
