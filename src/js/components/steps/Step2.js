import React from "react";
import NextButton from "./NextButton";

export default class Step2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="home-wrap">
        <h1>Step 2</h1>
        <NextButton to={"/step-3"} text={"Next"}/>
      </div>
    );
  }
}
