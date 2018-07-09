import React from "react";
import {Link} from "react-router-dom";

export default class ToolbarHeader extends React.Component {
  render() {
    const {updateView, view} = this.props;
    return (
      <div class="tool-header">
        <Link class="btn" to={"image-Settings"}>Image Settings</Link>
        <Link class="btn" to={"frames"}>Frames</Link>
        <Link class="btn" to={"text-settings"}>Text</Link>
        <Link class="btn" to={"stickers"}>Stickers</Link>
      </div>
    )
  }
}
