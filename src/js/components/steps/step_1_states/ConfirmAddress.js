import React from "react";
import ProgressButton from "../ProgressButton";

export default class ConfirmAddress extends React.Component {
  render() {
    const {apiData, name} = this.props;
    return (
      <div>
        <div>
          <p>Send To:</p>
          <p>{name}</p>
          <p>{apiData.delivery_line_1}</p>
          {
            apiData.delivery_line_2 &&
              <p>{apiData.delivery_line_1}</p>
          }
          <p>{apiData.last_line}</p>
        </div>
        <ProgressButton to={"/step-2"} text={"Confirm & Continue"}/>
      </div>
    )
  }
}

// TODO save action should save address to ... cookies?
