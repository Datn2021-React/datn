import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import StartSliderItem from "./StartSliderItem/StartSliderItem";

StartSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

function StartSlider(props) {
  const data = props.data;

  const timeOut = props.timeOut ? props.timeOut : 3000;

  const [activeSlider, setActiveSlider] = useState(0);

  const nextSlider = useCallback(() => {
    const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1;
    setActiveSlider(index);
  }, [activeSlider, data]);
  const prevtSlider = () => {
    const index = activeSlider - 1 < 0 ? data.length - 1 : activeSlider - 1;
    setActiveSlider(index);
  };

  useEffect(() => {
    if (props.auto) {
      const sliderAuto = setInterval(() => {
        nextSlider();
      }, timeOut);
      return () => {
        clearInterval(sliderAuto);
      };
    }
  }, [nextSlider, timeOut, props]);

  return (
    <div className="start-slider">
      {data.map((item, index) => (
        <StartSliderItem
          key={index}
          item={item}
          active={index === activeSlider}
        />
      ))}
      {props.control ? (
        <div className="start-slider_control">
          <div className="start-slider_control_item" onClick={prevtSlider}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="start-slider_control_item">
            <div className="index">
              {activeSlider + 1}/{data.length}
            </div>
          </div>

          <div className="start-slider_control_item" onClick={nextSlider}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default StartSlider;
