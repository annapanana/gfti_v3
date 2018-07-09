import React from "react";

export default class DisplayText extends React.Component {
  render() {
    const {color, size, text, text_x, text_y, font, text_opacity} = this.props;
    const style = {
      fill: color,
      fontSize: size,
      opacity: text_opacity
    }
    return (
      <text x={`${text_x}%`} y={`${text_y}%`} class={`greetings-text ${font}`} textAnchor="middle" style={style}>
        {text}
      </text>
    )
  }
}
