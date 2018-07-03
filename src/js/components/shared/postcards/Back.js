import React from "react";

export default class Back extends React.Component {
  render() {
    const {data} = this.props;
    console.log(data.address);
    return (
      <div class="postcard-back-wrap">
        <div class="col">
          <h3>{data.address.name}</h3>
          <p>{data.address.ln_01}</p>
          {
            data.address.ln_02 &&
            <p>{data.address.ln_02}</p>
          }
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
