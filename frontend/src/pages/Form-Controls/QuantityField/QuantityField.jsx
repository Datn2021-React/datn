import React from "react";
import PropTypes from "prop-types";
import { Box, FormHelperText, IconButton, Typography } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { OutlinedInput, InputLabel, FormControl } from "@material-ui/core";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/styles";

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    maxWidth: "150px",
  },
}));

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label, disabled } = props;
  const { errors, setValue } = form;
  const hasError = errors[name];
  return (
    <div>
      <FormControl
        error={!!hasError}
        fullWidth
        variant="outlined"
        margin="normal"
        size="small"
      >
        {/* <InputLabel htmlFor={name}>{label}</InputLabel> */}
        <Typography>{label}</Typography>
        <Controller
          name={name}
          control={form.control}
          render={({ onChange, onBlur, value, name }) => (
            <Box className={classes.box}>
              <IconButton
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                  )
                }
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <OutlinedInput
                id={name}
                value={value}
                // type="number"
                disabled={disabled}
                onChange={onChange}
                onBlur={onBlur}
              />
              <IconButton
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                  )
                }
              >
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default QuantityField;
