import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import User from "../../pages/User/User";
import Dialogg from "../Dialog/Dialog";
import SearchComponent from "./Search/Search";
import Search from "./Search/Search";

const menuNav = [
  {
    title: "TRANG CHỦ",
    path: "/",
    showld: true,
  },
  {
    title: "SẢN PHẨM",
    path: "/category",
    showld: true,
  },
  {
    title: "TIN TỨC",
    path: "/news",
    showld: true,
  },
  {
    title: "LIÊN HỆ",
    path: "/contact",
    showld: true,
  },
];

const Header = (props) => {
  const { searchItem, insertSearchItemUser, removeSearchItem } = props;
  const { pathname } = useLocation();
  const activeNav = menuNav.findIndex((e) => e.path === pathname);
  const headerRef = useRef(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("shrink");
      } else {
        headerRef.current?.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuLeft = useRef(null);
  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div>
      <div className="header" ref={headerRef}>
        <div className="container">
          <div className="header_logo">
            <Link to="/">
              {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Logo_Apple.inc.gif/640px-Logo_Apple.inc.gif"
              alt=""
            /> */}
              <i className="fas fa-store"></i>
            </Link>
          </div>
          <div className="header_menu">
            <div className="header_menu_mobile-toggle" onClick={menuToggle}>
              <i className="fas fa-align-left"></i>
            </div>
            <div className="header_menu_left" ref={menuLeft}>
              <div className="header_menu_left_close" onClick={menuToggle}>
                <i className="fas fa-chevron-left"></i>
              </div>
              {menuNav.map((item, index) => (
                <div
                  className={`header_menu_item header_menu_left_item ${
                    index === activeNav ? "active" : ""
                  }`}
                  onClick={menuToggle}
                  key={index}
                >
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                  <div className="header_menu_hover_animation"></div>
                </div>
              ))}
            </div>
            <div className="header_menu_right">
              <div className="header_menu_item header_menu_rifht_item ">
                <SearchComponent
                  searchItem={searchItem}
                  insertSearchItemUser={insertSearchItemUser}
                  removeSearchItem={removeSearchItem}
                  // themeItem={themeItem}
                />
              </div>
              <div className="header_menu_item header_menu_rifht_item ">
                <Link to="/cart">
                  <i className="fal fa-shopping-cart"></i>
                </Link>
              </div>
              <div className="header_menu_item header_menu_rifht_item ">
                <Link to="/login">
                  {/* <i onClick={() => setOpen(true)} className="far fa-user"></i> */}
                  <i className="far fa-user"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && <Dialogg setOpen={setOpen} />}
    </div>
  );
};

export default Header;
