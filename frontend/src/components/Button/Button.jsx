import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  animate: PropTypes.bool,
  onClick: PropTypes.func,
};

function Button(props) {
  const { backgroundColor, size, icon, animate, onClick, children } = props;
  const bg = backgroundColor ? "bg-" + props.backgroundColor : "bg-main";

  const sz = size ? "btn-" + props.size : "";

  const anmt = animate ? "btn-animate" : "";
  return (
    <button
      className={`btn ${bg} ${sz} ${anmt}`}
      onClick={onClick ? () => props.onClick() : null}
    >
      <span className="btn_txt">{children}</span>
      {icon ? (
        <span className="btn_icon">
          <i className={`${icon} bx-tada`}></i>
        </span>
      ) : null}
    </button>
  );
}

export default Button;
