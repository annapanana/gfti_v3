import React from "react";
import NextButton from "./NextButton";

export default class Step3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="home-wrap">
        <h1>Step 3</h1>
        <NextButton to={"/"} text={"Next"}/>
      </div>
    );
  }
}
