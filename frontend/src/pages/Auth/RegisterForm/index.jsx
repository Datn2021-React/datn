import React from "react";
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

RegisterForm.propTypes = {
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
    fontSize: "30px",
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

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("please enter your full name")
      .test(
        "should has at least two words.",
        "please enter at least two words.",
        (value) => {
          console.log(value);
          return value.split(" ").length >= 2;
        }
      ),
    email: yup
      .string()
      .required("Please enter email.")
      .email("Please enter a valid email address."),
    password: yup
      .string()
      .required("please enter your password.")
      .min(6, "please enter at least 6 characters."),
    retypePassword: yup
      .string()
      .required("please enter retype password.")
      .oneOf([yup.ref("password")], "password does not match"),
  });

  const form = useForm({
    defaultValues: {
      title: "",
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    // console.log("Todo Form", values);
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
        Create Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
          disabled={isSubmitting}
        >
          SIGNUP
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
