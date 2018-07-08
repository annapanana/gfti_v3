import React from "react";
import Slider from "react-slick";
// import Slider, { Range } from 'rc-slider';

export default class Frames extends React.Component {

  getFrameOptions() {
    const root = "js/templates/thumbs";
    const options = ["thumb_01.svg", "thumb_02.svg", "thumb_03.svg", "thumb_04.svg"];
    return options.map((elem, key) => {
      return (
        <div class="widget-option" key={key}>
          <img src={`/${root}/${elem}`}/>
        </div>
      )
    })
  }

  getColorOptions() {
    const options = ["#eb4b2e", "#fff02a", "#6dc4e2", "#926ee0", "#9fdd6f"];
    return options.map((elem, key) => {
      const style = {
        'backgroundColor':elem
      };
      return (
        <div class="widget-option" key={key}>
          <div class="color" style={style}></div>
        </div>
      )
    })
  }

  render() {
    const slickSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }
    return(
      <div class="panel">
        <h2>Frames and Designs</h2>
        <Slider {...slickSettings} class="ui-widget white">
          {this.getFrameOptions()}
        </Slider>
        <Slider {...slickSettings} class="ui-widget white">
          {this.getColorOptions()}
        </Slider>
      </div>
    )
  }
}
