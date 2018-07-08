import React from "react";

export default class FrontPlaceholder extends React.Component {
  render() {
    const {data} = this.props,
          style = data ? {
            'backgroundImage': `url(${data.bg_img})`
          } : {};
          console.log(style);
    return (
      <div class="postcard-front-wrap side">
        <div class="image" style={style}></div>
      </div>
    )
  }
}
