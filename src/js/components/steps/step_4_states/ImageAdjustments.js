import React from "react";
import Slider from 'react-rangeslider'

export default class ImageAdjustments extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      scale: 1
    }
  }

  handleOnChange(value) {
    this.setState({scale:value}, () => {
      this.props.updatePostcard("image_scale", this.state.scale);
    })
  }

  render() {
    const {scale} = this.state;
    return(
      <div class="panel">
        <h2>Image Adjustments</h2>
        <div class="ui-slider">
          <Slider
            value={scale}
            min={.25}
            step={.25}
            max={5}
            orientation="horizontal"
            onChange={this.handleOnChange}
          />
        </div>
      </div>
    )
  }
}
