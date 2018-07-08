import React from "react";
import SliderWrap from "shared/SliderWrap";
import Slider from "react-slick";


export default class TextSettings extends React.Component {
  constructor() {
    super();
    this.updateFontSize = this.updateFontSize.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  updateFontSize(value) {
    this.props.updatePostcard("font_size", value);
  }

  updateText(e) {
    this.props.updatePostcard("text", e.target.value);
  }

  render() {
    const {postcard, updatePostcard} = this.props;
    
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
            onChange={this.updateFontSize}
          />
        </div>
        <h3>Font Family:</h3>
      </div>
    )
  }
}
