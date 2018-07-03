import React from "react";
import PostcardStore from "stores/PostcardStore";
import * as PostcardActions from "actions/PostcardActions";

export default class SaveButton extends React.Component {
  constructor() {
    super();
    this.postcard = PostcardStore.getPostcard();
    this.serviceStart = this.serviceStart.bind(this);
    this.serviceError = this.serviceError.bind(this);
    this.serviceComplete = this.serviceComplete.bind(this);
  }

  componentWillMount() {
    PostcardStore.on("postcard-service-start", this.serviceStart);
    PostcardStore.on("postcard-service-error", this.serviceError);
    PostcardStore.on("postcard-service-complete", this.serviceComplete);
  }

  componentWillUnmount() {
    PostcardStore.on("postcard-service-start", this.serviceStart);
    PostcardStore.on("postcard-service-error", this.serviceError);
    PostcardStore.on("postcard-complete", this.serviceComplete);
  }

  serviceStart() {
    this.setState({isLoading:true})
  }

  serviceError() {
    const error = PostcardStore.getError();
    this.setState({isLoading: false, loadingError: error});
  }

  serviceComplete() {
    console.log("PUSH USER TO CONFIRMATION SCREEM");
  }

  sendPostcard() {
    PostcardActions.publishPostcard(this.postcard);
  }

  render() {
    return (
      <div class="next-button-wrap">
        <div class="top-border">
          <button onClick={this.sendPostcard.bind(this)} class="btn">Save Postcard</button>
        </div>
      </div>
    )
  }
}
