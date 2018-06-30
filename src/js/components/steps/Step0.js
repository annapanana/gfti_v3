import React from "react"
import NextButton from "./NextButton";

export default class Step0 extends React.Component {
  render() {
    return (
      <div class="embedded-panel">
        <h2 class="text-center">Overview</h2>
        <p>This is a postcard making tool that will enable you to express your values and opinions to various political representatives on a local, state and federal level.</p>
        <NextButton to={"/step-1"} text={"Start"}/>
      </div>
    )
  }
}
