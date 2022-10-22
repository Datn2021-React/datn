import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";

StartSliderItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function StartSliderItem(props) {
  const { item, active } = props;
  return (
    <div className={`start-slider_item ${active ? "active" : ""}`}>
      <div className="start-slider_item_info">
        <div className={`start-slider_item_info_title color-${item.color}`}>
          <span>{item.title}</span>
        </div>
        <div className="start-slider_item_info_description">
          <span>{item.description}</span>
        </div>
        <div className="start-slider_item_info_btn">
          <Link to={item.path}>
            <Button
              backgroundColor={item.color}
              animate={true}
              icon="fal fa-shopping-cart"
              size="sm"
            >
              Xem chi tiết
            </Button>
          </Link>
        </div>
      </div>
      <div className="start-slider_item_image">
        <div className={`shape bg-${item.color}`}></div>
        <img src={item.img} alt="" />
      </div>
    </div>
  );
}

export default StartSliderItem;
