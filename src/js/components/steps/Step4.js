import React from "react";
import ProgressButton from "./ProgressButton";
import SaveButton from "./SaveButton";
import Front from "shared/postcards/Front";
import PostcardStore from "stores/PostcardStore";
import ToolbarHeader from "./step_4_states/ToolbarHeader";
import ImageAdjustments from "./step_4_states/ImageAdjustments";
import * as PostcardActions from "actions/PostcardActions";

export default class Step4 extends React.Component {
  constructor() {
    super();
    this.postcardSaved = this.postcardSaved.bind(this);
    this.updateView = this.updateView.bind(this);
    this.updatePostcard = this.updatePostcard.bind(this);
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
        ]
      }
    ]
    const postcard = PostcardStore.getPostcard();
    this.initDefaultVals(postcard);
    this.state = {
      postcard: PostcardStore.getPostcard(),
      view: "image-adjustments"
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

  initDefaultVals(postcard) {
    if (!postcard.pc_front) {
      postcard.pc_front = {
        image_scale: 1,
        image_pos_x: 0,
        image_pos_y: 0,
        frame: "",
        color: "",
        font_family: "",
        font_size: "",
        text_pos: "",
        greetings_text: ""
      }
      PostcardActions.updatePostcardData(postcard)
    }
  }

  updateView(view) {
    this.setState({view:view})
  }

  updatePostcard(field, val) {
    console.log(field);
    const postcard = this.state.postcard;
    if (!postcard.pc_front) {
      postcard.pc_front = {};
    }
    postcard.pc_front[field] = val;
    this.setState({poscard: postcard}, ()=> {
      PostcardActions.updatePostcardData(postcard)
    });
  }

  getView(view) {
    switch (view) {
      case "image-adjustments":
        return <ImageAdjustments
          updatePostcard={this.updatePostcard}
          poscard={this.state.postcard}/>
      case "text-settings":
        return (<div class="panel">Text Settings</div>)
      case "frames":
        return (<div class="panel">Frames</div>)
      default:
        return (<div class="panel">Image Adjustments</div>)
    }
  }

  render() {
    const {postcard, view} = this.state;
    return (
      <div class="step-4-wrap embedded-panel">
        <h2 class="text-center">Design</h2>
        <p class="text-center description-text">Customize your design by adjusting the image, adding a border, header text and stickers.</p>
        <ToolbarHeader
          updateView={this.updateView.bind(this)}
          view={view}
          />
        <div class="tool-panel">
          <div class="postcard-wrap">
            <Front
              data={postcard}
              updatePostcard={this.updatePostcard}/>
          </div>
          {this.getView(view)}
        </div>
        <SaveButton/>
      </div>
    )
  }
}

// <ProgressButton to={"/step-1"} text={"Next"}/>
