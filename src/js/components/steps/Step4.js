import React from "react";
import ProgressButton from "./ProgressButton";
import SaveButton from "./SaveButton";
import Front from "shared/postcards/Front";

export default class Step4 extends React.Component {
  constructor() {
    super();
    this.postcardSaved = this.postcardSaved.bind(this);
    this.stencils = [
      {
        stencils: [
          {source:"template_stencil_01.svg"},
          {source:"template_stencil_02.svg"},
          {source:"template_stencil_03.svg"},
          {source:"template_stencil_04.svg"}
        ],
        text: [
          {source:"template_text_01.svg"},
          {source:"template_text_02.svg"},
          {source:"template_text_03.svg"},
          {source:"template_text_04.svg"},
          {source:"template_text_05.svg"}
        ],
        frame: [
          {source:"template_frame_01.svg"},
          {source:"template_frame_02.svg"},
          {source:"template_frame_03.svg"}
        ],
      }
    ]
    this.state = {
      postcard: PostcardStore.getPostcard()
    }
  }

  componentWillMount() {
    PostcardStore.on("postcard-saved", this.postcardSaved);
  }

  componentWillUnmount() {
    PostcardStore.on("postcard-saved", this.postcardSaved);
  }

  postcardSaved() {
    this.setState({postcard: PostcardStore.getPostcard()})
  }

  getStencils() {

  }

  render() {
    return (
      <div class="step-4-wrap embedded-panel">
        <h2 class="text-center">Design</h2>
        <p class="text-center description-text">Customize your design by adjusting the image, adding a border, header text and stickers.</p>
        <div>List out Stencils</div>
        <SaveButton/>
        <Front/>
      </div>
    )
  }
}

// <ProgressButton to={"/step-1"} text={"Next"}/>
