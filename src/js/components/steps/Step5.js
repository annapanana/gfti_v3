import React from "react";
import ProgressButton from "./ProgressButton";
import Postcard from "shared/postcards/Postcard";

export default class Step5 extends React.Component {
  render() {
    return (
      <div class="step-5-wrap embedded-panel">
        <h2 class="text-center">Preview, Send & Pay</h2>
        <p class="text-center description-text">You can download a preview of you postcard before sending it. Each postcard is $1.50</p>
        <ProgressButton to={"/step-1"} text={"Start"}/>
        <Postcard />
      </div>
    )
  }
}
