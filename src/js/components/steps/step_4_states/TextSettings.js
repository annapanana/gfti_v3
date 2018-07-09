import React from "react";
import SliderWrap from "shared/SliderWrap";
import Slider from "react-slick";


export default class TextSettings extends React.Component {
  constructor() {
    super();
    this.updateText = this.updateText.bind(this);
  }

  getFontOptions(font, updatePostcard) {
    const root = "img/font_thumbs/";
    const options = [
      {key: "alegreya", thumb: "alegreya_thumb.svg", font: "alegreya-sans"},
      {key: "pacifico", thumb: "pacifico_thumb.svg", font: "pacifico"},
      {key: "proza_libre", thumb: "proza_libre_thumb.svg", font: "proza-libre"},
      {key: "quattrocento_sans", thumb: "quattrocento_sans_thumb.svg", font: "quattrocento-sans"},
      {key: "roboto", thumb: "roboto_thumb.svg", font: "roboto"},
      {key: "roboto_mono", thumb: "roboto_mono_thumb.svg", font: "roboto-mono"},
      {key: "shrikhand", thumb: "shrikhand_thumb.svg", font: "shrikhand"}
    ];
    return options.map((elem, key) => {
      return (
        <div class={"widget-option" + (font.key === elem.key ? " selected":"")} key={key} onClick={updatePostcard.bind(this, "font", elem)}>
          <img class="frame" src={`/${root}/${elem.thumb}`}/>
        </div>
      )
    })
  }

  updateText(e) {
    this.props.updatePostcard("text", e.target.value);
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
    return (
      <div class="panel">
        <h3>Text:</h3>
        <textarea value={postcard.pc_front.text} onChange={this.updateText.bind(this)}/>
        <h3>Font Size:</h3>
        <div class="ui-slider">
          <SliderWrap
            value={postcard.pc_front.font_size}
            min={10}
            step={2}
            max={100}
            orientation="horizontal"
            onChange={updatePostcard.bind(this, "font_size")}
          />
        </div>
        <h3>Font Family:</h3>
        <Slider {...slickSettings} class="ui-widget white">
          {this.getFontOptions(postcard.pc_front.font, updatePostcard)}
        </Slider>
        <h3>Text Opacity:</h3>
        <div class="ui-slider">
          <SliderWrap
            value={postcard.pc_front.text_opacity}
            min={0}
            step={.1}
            max={1}
            orientation="horizontal"
            onChange={updatePostcard.bind(this, "text_opacity")}
          />
        </div>
        <h3>Vertical Text Positioning:</h3>
        <div class="ui-slider">
          <SliderWrap
            value={postcard.pc_front.text_y}
            min={0}
            step={1}
            max={100}
            orientation="horizontal"
            onChange={updatePostcard.bind(this, "text_y")}
          />
        </div>
        <h3>Horizontal Text Positioning:</h3>
        <div class="ui-slider">
          <SliderWrap
            value={postcard.pc_front.text_x}
            min={0}
            step={1}
            max={100}
            orientation="horizontal"
            onChange={updatePostcard.bind(this, "text_x")}
          />
        </div>
      </div>
    )
  }
}
