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
    const {image_url, image_scale, image_pos_x, image_pos_y, image_filter, frame, color, font_family, font_size, text_pos, greetings_text} = this.state,
          {data} = this.props,
          style = data ? {
            'backgroundImage': `url(${data.bg_img})`
          } : {};
    return (
      <div class="postcard-front-wrap">
        <div style={style}></div>
      </div>
    )
  }
}
