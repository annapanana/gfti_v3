import React from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import ProgressButton from "./ProgressButton";
import SaveButton from "./SaveButton";
import Front from "shared/postcards/Front";
import PostcardStore from "stores/PostcardStore";
import ToolbarHeader from "./step_4_states/ToolbarHeader";
import ImageAdjustments from "./step_4_states/ImageAdjustments";
import Frames from "./step_4_states/Frames";
import * as PostcardActions from "actions/PostcardActions";

class Step4 extends React.Component {
  constructor() {
    super();
    this.postcardSaved = this.postcardSaved.bind(this);
    this.updateView = this.updateView.bind(this);
    this.updatePostcard = this.updatePostcard.bind(this);

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
    PostcardStore.removeListener("postcard-saved", this.postcardSaved);
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
        image_rot_: 0,
        frame: {key: "heart", thumb: "thumb_02.svg", frame: ""},
        color: {key: "yellow", color: "#fff02a"},
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
    console.log(val);
    const postcard = this.state.postcard;
    if (!postcard.pc_front) {
      postcard.pc_front = {};
    }
    postcard.pc_front[field] = val;
    this.setState({poscard: postcard}, ()=> {
      PostcardActions.updatePostcardData(postcard)
    });
  }

  render() {
    const {match} = this.props,
          {postcard, view} = this.state;
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
          <Switch>
            <Route exact path={`${match.url}/frames`} render={({match}) =>
              <Frames updatePostcard={this.updatePostcard} postcard={this.state.postcard}/>
            }/>
            <Route exact path={`${match.url}/image-settings`} render={({match}) =>
              <ImageAdjustments
                updatePostcard={this.updatePostcard}
                poscard={this.state.postcard}/>
            }/>
            <Redirect to={`${match.url}/frames`}/>
          </Switch>
        </div>
        <SaveButton/>
      </div>
    )
  }
}

export default withRouter(Step4);

// <ProgressButton to={"/step-1"} text={"Next"}/>
