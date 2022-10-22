import React from "react";
import { Link } from "react-router-dom";
import Grid from "../Grid/Grid";
import Appstore from "../../assets/images/footer/Appstore.png";
import playstore from "../../assets/images/footer/playstore.png";

const footerAbout = [
  {
    title: "Giới thiệu",
    path: "/about",
  },
  {
    title: "Liên hệ",
    path: "/about",
  },
  {
    title: "Tuyển dụng",
    path: "/about",
  },
  {
    title: "Tin tức",
    path: "/about",
  },
  {
    title: "Hệ thống cửa hàng",
    path: "/about",
  },
];
const footerCustomer = [
  {
    title: "Hệ thống cửa hàng",
    path: "/about",
  },
  {
    title: "Chính sách đổi trả",
    path: "/about",
  },
  {
    title: "chính sách bảo hàng",
    path: "/about",
  },
  {
    title: "chính sách hoàn tiền",
    path: "/about",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer_title">Tổng dài hỗ trợ</div>
            <div className="footer_content">
              <p>
                Liên hệ đặt hàng <strong>0935278930</strong>
              </p>
              <p>
                Thắc mắc đơn hàng <strong>0935278930</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>0935278930</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer_title">Về Smartphone</div>
            <div className="footer_content">
              {footerAbout.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer_title">Chăm sóc khách hàng</div>
            <div className="footer_content">
              {footerCustomer.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer_about">
            <p>
              <Link to="/">
                {/* <i className="fas fa-store"></i> */}
                <img
                  src="https://www.gameartguppy.com/wp-content/uploads/2017/06/logo-apple.png"
                  alt=""
                  className="footer_logo"
                />
              </Link>
            </p>
            <p>
              Hướng đến mục tiêu là tạo nên 1 thị trường điện tử lớn nhất Việt
              Nam, shop Iphone cung cấp những chiếc Iphone đời mới nhất, với
              những tiện ích mà hiếm có hãng điện thoại nào sánh được. Hãy cùng
              Iphone hướng đến 1 cuộc sống đầy đủ tiện nghi hơn.
            </p>
            <p>
              <Link to="/">
                <img
                  src={playstore}
                  alt="playstore"
                  className="footer_logo_playstore"
                />
              </Link>
            </p>
            <p>
              <Link to="/">
                <img
                  src={Appstore}
                  alt="Appstore"
                  className="footer_logo_Appstore"
                />
              </Link>
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
