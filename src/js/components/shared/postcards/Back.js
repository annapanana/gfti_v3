import React from "react";

export default class Back extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div class="postcard-back-wrap">
        <div class="col">
          <h3>{data.name}</h3>
          <p>{data.address.delivery_line_1}</p>
          <p>{data.address.last_line}</p>
        </div>
        {
          data.pc_back  &&
            <div class="col">
              <small>{data.pc_back.to},</small>
              <p>{data.pc_back.message}</p>
              <small>{data.pc_back.from}</small>
            </div>
        }
      </div>
    )
  }
}
