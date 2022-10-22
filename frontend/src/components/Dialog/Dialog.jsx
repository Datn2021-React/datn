import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Register from "../../pages/Auth/Register";
import { Grid, IconButton, Link, makeStyles } from "@material-ui/core";
import Login from "../../pages/Auth/Login";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
// import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../Redux/actions/userAction";

// Tao hang so
const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};
const useStyles = makeStyles((theme) => ({
  icon: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    cursor: "pointer",
    zIndex: 1,
  },
}));

function Dialogg({ setOpen }) {
  const dispatch = useDispatch();
  // const loginSubmit = () => {
  //   dispatch(login(loginEmail, loginPassword));
  // }
  const classes = useStyles();
  const [mode, setMode] = useState(MODE.LOGIN);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={setOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
        disableEscapeKeyDown
      >
        <IconButton className={classes.icon}>
          <CancelPresentationIcon onClick={handleClose} />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    // href="#"
                    variant="body1"
                    onClick={() => setMode(MODE.LOGIN)}
                    style={{ textTransform: "inherit" }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    // href="#"
                    variant="body1"
                    onClick={() => setMode(MODE.REGISTER)}
                  >
                    Already have an account? Sign up
                  </Link>
                </Grid>
              </Grid>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Dialogg;
