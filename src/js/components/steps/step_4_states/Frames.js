import React from "react";
import Slider from "react-slick";
// import Slider, { Range } from 'rc-slider';

export default class Frames extends React.Component {

  getOptions() {
    const options = [.5, 1, 2, 3, 4]
    return options.map((elem, key) => {
      return (
        <div class="widget-option" key={key}>{elem}</div>
      )
    })
  }

  render() {
    // style="opacity:.85" dots="false" infinite="true" speed="300" slides-to-show="3" touch-move="false" slides-to-scroll="1"
    const slickSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    }
    return(
      <div class="panel">
        <h2>Image Adjustments</h2>
        <Slider {...slickSettings} class="ui-widget white">
          {this.getOptions()}
        </Slider>
      </div>
    )
  }
}
