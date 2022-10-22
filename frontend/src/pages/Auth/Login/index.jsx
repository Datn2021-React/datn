// import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
// import { login } from "../../userSlice";
// import { useDispatch } from "react-redux";
// import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import LoginForm from "../LoginForm";

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  // const dispatch = useDispatch();
  // const { enqueueSnackbar } = useSnackbar();
  // const handleSubmit = async (values) => {
  //   try {
  //     const action = login(values);
  //     const resultAction = await dispatch(action);
  //     unwrapResult(resultAction);
  //     const { closeDialog } = props;
  //     if (closeDialog) {
  //       closeDialog();
  //     }
  //   } catch (error) {
  //     console.log("failed to login:", error);
  //     enqueueSnackbar(error.message, { variant: "error" });
  //   }
  // };
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;
