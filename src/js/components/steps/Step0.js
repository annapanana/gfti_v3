import React from "react"
import ProgressButton from "./ProgressButton";
import * as PostcardActions from "actions/PostcardActions";

export default class Step0 extends React.Component {
  constructor() {
    super();
    PostcardActions.clearPostcard();
  }
  render() {
    return (
      <div class="embedded-panel">
        <h2 class="text-center">Overview</h2>
        <p class="text-center description-text">This is a postcard making tool that will enable you to express your values and opinions to various political representatives on a local, state and federal level.</p>
        <ProgressButton to={"/step-1"} text={"Start"}/>
      </div>
    )
  }
}
