import React from "react";
import Slider from 'react-rangeslider';

export default class SliderWrap extends React.Component {
  render() {
    const {value, min, step, max, onChange} = this.props;
    return (
      <Slider
        value={value}
        min={min}
        step={step}
        max={max}
        orientation="horizontal"
        onChange={onChange}
      />
    )
  }
}
