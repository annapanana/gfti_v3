import React from "react";

export default class Front extends React.Component {
  constructor() {
    super();
    this.state = {
      image_url: "",
      image_scale: "",
      image_pos_x: "",
      image_pos_y: "",
      image_filter: "",
      frame: "",
      color: "",
      font_family: "",
      font_size: "",
      text_pos: "",
      greetings_text: ""
    }
  }
  render() {
    const {data} = this.props,
          pc_front = data.pc_front;
    return (
      <div class="postcard-front-wrap side">
        <svg viewBox="0 0 400 300">
          <title>Image Test</title>
          <image width="400" height="300" transform={`scale(${pc_front.image_scale})`} href={data.bg_img}/>
        </svg>
      </div>
    )
  }
}
