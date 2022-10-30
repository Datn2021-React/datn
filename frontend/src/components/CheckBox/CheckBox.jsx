import React from "react";
import PropTypes from "prop-types";

const CheckBox = (props) => {
  const inputRef = React.useRef(null);

  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={onChange}
        checked={props.checked}
      />
      <span className="custom-checkbox_checkmark">
        <i className="bx bx-check"></i>
      </span>
      {props.lable}
    </label>
  );
};

CheckBox.propTypes = {
  lable: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default CheckBox;
