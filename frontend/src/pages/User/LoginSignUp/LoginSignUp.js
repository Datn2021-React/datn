import React, { Fragment, useRef, useState, useEffect } from "react";

import LockOpenIcon from "@material-ui/icons/LockOpen";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";
import "./LoginSignUp.css";
import { useDispatch, useSelector } from "react-redux";
import FaceIcon from "@material-ui/icons/Face";
import ScaleLoader from "react-spinners/ScaleLoader";
import {
  clearErrors,
  login,
  register,
} from "../../../Redux/actions/userAction";
import { notification } from "antd";
import AvatarDefault from "../../../assets/images/login/Profile.png";
import { css } from "styled-components";

const LoginSignUp = (history) => {
  const dispatch = useDispatch();
  // const openNotificationWithIcon = (type) => {
  //   notification[type]({
  //     message: "Notification",
  //     description: "OK",
  //   });
  // };

  // const notification = useNotification();
  const { error, isAuthenticated } = useSelector((state) => state.user);
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loading, setLoading] = useState(false);

  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(AvatarDefault);

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(LoginEmail, LoginPassword));
    // console.log("Login Form Submit");
  };
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    transition: display 0.5s ease;
  `;

  const registerDataChang = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  /// loading
  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      if (LoginSignUp) {
        setLoading(false);
        document.body.style.overflow = "";
      }
    }, 600);
  }, [LoginSignUp]);

  // const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      notification.error(error);
      dispatch(clearErrors());
    }
    // if (isAuthenticated) {
    //   history.push();
    // }
  }, [dispatch, error, notification, history, isAuthenticated]);

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
    // console.log("Register Form Submit");
  };
  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  return (
    <Fragment>
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
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, "register")}>RIGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={LoginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                value={LoginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <Link to="/password/forgot">Forget Password ? </Link>
            <input
              type="submit"
              value="Login"
              className="loginBtn"
              // onClick={() => openNotificationWithIcon("success")}
            />
          </form>
          <form
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              <FaceIcon />
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={registerDataChang}
              />
            </div>
            <div className="signUpEmail">
              <MailOutlineIcon />
              <input
                type="text"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={registerDataChang}
              />
            </div>
            <div className="signUpPassword">
              <LockOpenIcon />
              <input
                type="text"
                placeholder="Password"
                required
                name="password"
                value={[password]}
                onChange={registerDataChang}
              />
            </div>
            <div id="registerImage">
              <img src={avatarPreview} alt="Avata Priview" />
              <input
                type="file"
                name="avatar"
                accept="images/*"
                onChange={registerDataChang}
              />
            </div>
            <input
              type="submit"
              value="Register"
              className="signUpBtn"
              // disabled={loading ? true : false}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginSignUp;
