import React from "react";
import PropTypes from "prop-types";

const PolicyCart = (props) => {
  const { icon, description, name } = props;
  return (
    <div className="policy-cart">
      <div className="policy-cart_icon">
        <i className={icon}></i>
      </div>
      <div className="policy-cart_info">
        <div className="policy-cart_info_name">{name}</div>
        <div className="policy-cart_info_description">{description}</div>
      </div>
    </div>
  );
};

PolicyCart.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PolicyCart;
