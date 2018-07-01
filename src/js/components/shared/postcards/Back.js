import React from "react";

export default class Back extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div class="postcard-back-wrap">
        <h3>{data.name}</h3>
        <p>{data.address.delivery_line_1}</p>
        <p>{data.address.last_line}</p>
      </div>
    )
  }
}
