import React from "react";
import Slider from "react-slick";
import SliderWrap from 'shared/SliderWrap';

export default class Frames extends React.Component {
  constructor() {
    super();
    this.updateOpacity = this.updateOpacity.bind(this);
  }
  getFrameOptions(frame, updatePostcard) {
    const root = "js/templates/thumbs";
    const options = [
      {key: "circle", thumb: "thumb_01.svg", frame: ""},
      {key: "heart", thumb: "thumb_02.svg", frame: ""},
      {key: "stars", thumb: "thumb_03.svg", frame: ""},
      {key: "flag", thumb: "thumb_04.svg", frame: ""},
      {key: "text-path", thumb: "thumb_05.svg", frame: ""}
    ];
    return options.map((elem, key) => {
      return (
        <div class={"widget-option" + (frame.key === elem.key ? " selected":"")} key={key} onClick={updatePostcard.bind(this, "frame", elem)}>
          <img class="frame" src={`/${root}/${elem.thumb}`}/>
        </div>
      )
    })
  }

  getColorOptions(color, updatePostcard) {
    const options = [
      {key: "red", color: "#eb4b2e"},
      {key: "yellow", color: "#fff02a"},
      {key: "blue", color: "#6dc4e2"},
      {key: "purple", color: "#926ee0"},
      {key: "green", color: "#9fdd6f"},
      {key: "white", color: "#fff"},
      {key: "black", color: "#000"}
]
    return options.map((elem, key) => {
      const style = {
        'backgroundColor':elem.color
      };
      return (
        <div class={"widget-option" + (color.key === elem.key ? " selected":"")} key={key} onClick={updatePostcard.bind(this, "color", elem)}>
          <div class="color" style={style}></div>
        </div>
      )
    })
  }

  updateOpacity(value) {
    this.props.updatePostcard("opacity", Math.round(value * 10) / 10);
  }

  render() {
    const {postcard, updatePostcard} = this.props;
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
        <h3>Frames:</h3>
        <Slider {...slickSettings} class="ui-widget white">
          {this.getFrameOptions(postcard.pc_front.frame, updatePostcard)}
        </Slider>
        <h3>Colors:</h3>
        <Slider {...slickSettings} class="ui-widget white">
          {this.getColorOptions(postcard.pc_front.color, updatePostcard)}
        </Slider>
        <h3>Opacity:</h3>
        <div class="ui-slider">
          <SliderWrap
            value={postcard.pc_front.opacity}
            min={0}
            step={.1}
            max={1}
            orientation="horizontal"
            onChange={this.updateOpacity}
          />
        </div>
      </div>
    )
  }
}
