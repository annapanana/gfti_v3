import React from "react";
import Postcard from "shared/postcards/Postcard";
import Message from "./step_3_states/Message";

export default class Step3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="step-3-wrap embedded-panel">
        <h2 class="text-center">Step 3</h2>
        <p class="description-text text-center">Fill out your message below.</p>
        <Message />
        <Postcard />
      </div>
    );
  }
}
