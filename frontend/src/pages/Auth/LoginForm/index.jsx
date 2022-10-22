import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Avatar,
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import InputField from "../../Form-Controls/InputField/InputField";
import PasswordField from "../../Form-Controls/PasswordField/PasswordField";

import { useDispatch, useSelector } from "react-redux";
import { cleaErrors, login } from "../../../Redux/actions/userAction";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    position: "relative",
    fontFamily: 'Montserrat", sans-serif',
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
  },
  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: "15px",
  },
  progress: {
    position: "absolute",
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

function LoginForm(props) {
  const dispatch = useDispatch();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const classes = useStyles();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter email.")
      .email("Please enter a valid email address."),
    password: yup
      .string()
      .required("please enter your password.")
      .min(6, "please enter at least 6 characters."),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    // console.log("Todo Form", values);
    dispatch(login(loginEmail, loginPassword));
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    // form.reset();
  };

  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockIcon />
      </Avatar>
      <Typography component="h3" variant="h5" className={classes.title}>
        Sign In
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
          disabled={isSubmitting}
        >
          SIGNIN
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
