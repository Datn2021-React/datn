import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import policy from "../../assets/fake-data/policy";
import startSliderData from "../../assets/fake-data/Start-Slider";
import GenuineBrand from "../../components/GenuineBrand/GenuineBrand";
import Grid from "../../components/Grid/Grid";
import Helmet from "../../components/Helmet/Helmet";
import PolicyCart from "../../components/PolicyCart/PolicyCart";
import Product from "../../components/Product/Product";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../components/section/Section";
import StartSlider from "../../components/StartSlider/StartSlider";

import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../Redux/actions/productAction";
import CatgorySelect from "../../components/CatgorySelect/CatgorySelect";

import ScaleLoader from "react-spinners/ScaleLoader";

import { css } from "styled-components";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  transition: display 0.5s ease;
`;
export default function Home() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [mobile, setMobile] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [productsAll, setProductsAll] = useState([]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    const arr = [];
    products.filter((item) => {
      if (item.category === "laptop") {
        arr.push(item);
      }
      return 0;
    });
    setLaptop(arr);
  }, [products]);
  //
  useEffect(() => {
    const arr = [];
    products.filter((item) => {
      if (item.category === "mobile") {
        arr.push(item);
      }
      return 0;
    });
    setMobile(arr);
  }, [products]);
  // console.log({ mobile, laptop });

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

  const handleImportProduct = (products) => {
    setProductsAll(products);
  };

  useEffect(() => {
    if (productsAll.length === 0 && products.length > 0) {
      setProductsAll(products);
    }
  }, [products]);

  return (
    <Helmet title="Trang Chủ">
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
      {/* start slider */}
      <StartSlider
        data={startSliderData}
        control={true}
        auto={true}
        timeOut={5000}
      />
      {/* end slider */}

      {/* policy section */}

      <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
      <Section>
        <SectionBody>
          <Grid col={4} smCol={2} mdCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link to="/policy" key={index}>
                <PolicyCart
                  key={index}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}
      <GenuineBrand />
      {/* selling section */}
      <Section data-aos="fade-up">
        <SectionTitle icon="crown">MUA NHIỀU NHẤT</SectionTitle>
        <Divider
          orientation="center"
          style={{ transform: "translateY(30px)", color: "#c3c3c3" }}
        >
          <i className="fad fa-mobile"></i> IPHONE
        </Divider>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {products &&
              (4, mobile).map((item, index) => (
                <Product
                  key={index}
                  product={item}
                  height="400"
                  img_width="95%"
                  right="11px"
                />
              ))}
          </Grid>
        </SectionBody>
        <Divider
          orientation="center"
          style={{ transform: "translateY(30px)", color: "#c3c3c3" }}
        >
          <i className="fad fa-mobile"></i> LAPTOP
        </Divider>

        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {products &&
              laptop.map((item, index) => (
                <Product
                  key={index}
                  product={item}
                  height="400"
                  img_width="95%"
                  right="11px"
                />
              ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end selling section */}
      <CatgorySelect
        productsAll={products}
        handleImportProduct={handleImportProduct}
      />
      <SectionBody>
        <Grid col={4} mdCol={2} smCol={1} gap={20}>
          {products &&
            productsAll.map((item, index) => (
              <Product
                key={index}
                product={item}
                height="400"
                img_width="95%"
                right="11px"
              />
            ))}
        </Grid>
      </SectionBody>
    </Helmet>
  );
}
