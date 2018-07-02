import React from "react";
import ProgressButton from "./ProgressButton";
import Postcard from "shared/postcards/Postcard";

export default class Step4 extends React.Component {
  render() {
    return (
      <div class="step-4-wrap embedded-panel">
        <h2 class="text-center">Design</h2>
        <p class="text-center description-text">Customize your design by adjusting the image, adding a border, header text and stickers.</p>
        <ProgressButton to={"/step-1"} text={"Next"}/>
        <Postcard />
      </div>
    )
  }
}
