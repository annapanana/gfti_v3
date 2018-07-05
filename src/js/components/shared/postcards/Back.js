import React from "react";

export default class Back extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div class="postcard-back-wrap">
        <div class="col">
          <h3>{data.address.name}</h3>
          <p>{data.address.address_line1}</p>
          {
            data.address.address_line2 &&
            <p>{data.address.address_line2}</p>
          }
          <p>{`${data.address.address_city} ${data.address.address_state} ${data.address.address_zip}`}</p>
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
