import React from "react";

export default class ToolbarHeader extends React.Component {
  render() {
    const {updateView, view} = this.props;
    return (
      <div class="tool-header">
        <button class="btn" onClick={updateView.bind(this,  "image-adjustments")}>Image Adjustments</button>
        <button class="btn" onClick={updateView.bind(this,  "frames")}>Frames</button>
        <button class="btn" onClick={updateView.bind(this,  "text-settings")}>Text</button>
      </div>
    )
  }
}
