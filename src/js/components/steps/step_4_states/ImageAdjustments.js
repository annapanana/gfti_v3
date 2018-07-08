import React from "react";
import Slider from 'react-rangeslider'

export default class ImageAdjustments extends React.Component {
  constructor(props) {
    super(props);
    this.scaleImage = this.scaleImage.bind(this);
    this.rotateImage = this.rotateImage.bind(this);
    this.state = {
      scale: 1,
      rot: 0
    }
  }

  scaleImage(value) {
    this.setState({scale:value}, () => {
      this.props.updatePostcard("image_scale", this.state.scale);
    })
  }

  rotateImage(value) {
    this.setState({rot:value}, () => {
      this.props.updatePostcard("image_rot", this.state.rot);
    })
  }

  render() {
    const {scale, rot} = this.state;
    return(
      <div class="panel">
        <h2>Image Adjustments</h2>
        <h3>Scale:</h3>
        <div class="ui-slider">
          <Slider
            value={scale}
            min={.25}
            step={.25}
            max={5}
            orientation="horizontal"
            onChange={this.scaleImage}
          />
        </div>
        <h3>Drag image to reposiiton</h3>
      </div>
    )
  }
}

// <h3>Rotation: </h3>
// <div class="ui-slider">
//   <Slider
//     value={rot}
//     min={-360}
//     step={5}
//     max={360}
//     orientation="horizontal"
//     onChange={this.rotateImage}
//   />
// </div>
