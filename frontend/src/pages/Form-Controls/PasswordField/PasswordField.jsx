import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormHelperText } from "@material-ui/core";
import { Controller } from "react-hook-form";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@material-ui/core";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowpassword = () => {
    setShowPassword((x) => !x);
  };
  const { form, name, label, disabled } = props;
  const { errors } = form;
  const hasError = errors[name];
  return (
    <div>
      <FormControl
        error={!!hasError}
        fullWidth
        variant="outlined"
        margin="normal"
      >
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          as={OutlinedInput}
          id={name}
          label={label}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowpassword}
                edge="end"
              >
                {/* {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />} */}
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          }
          disabled={disabled}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default PasswordField;
