import React from "react";
import FramePath from "./FramePath";
import DisplayText from "shared/postcards/DisplayText";
import Image from "shared/postcards/Image";
import Stickers from "shared/postcards/Stickers";

export default class Front extends React.Component {

  render() {
    const {data, updatePostcard} = this.props,
          pc_front = data.pc_front;

    return (
      <div class="postcard-front-wrap side edit-mode">
        <svg viewBox="0 0 400 300">
          <title>Image Test</title>
            <Image
              bg_img={data.bg_img}
              x_pos={pc_front.x_pos}
              y_pos={pc_front.y_pos}
              image_scale={pc_front.image_scale}
              image_rot={pc_front.image_rot}
              updatePostcard={updatePostcard}
              />
            <FramePath
              frame={pc_front.frame}
              color={pc_front.color}
              opacity={pc_front.opacity}
              font_size={pc_front.font_size}
              text={pc_front.text}/>
            {
              pc_front.frame.key !== "text-path" &&
                <DisplayText
                  color={pc_front.color.color}
                  size={pc_front.font_size}
                  text={pc_front.text}
                  text_x={pc_front.text_x}
                  text_y={pc_front.text_y}
                  font={pc_front.font.font}
                  text_opacity={pc_front.text_opacity}/>
            }
            <Stickers
              stickers={pc_front.stickers}
              updatePostcard={updatePostcard}/>
        </svg>
      </div>
    )
  }
}
