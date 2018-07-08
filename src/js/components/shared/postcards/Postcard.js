import React from "react";
import Back from "./Back";
import FrontPlaceholder from "./FrontPlaceholder";
import PostcardStore from "stores/PostcardStore";

export default class Postcard extends React.Component {
  constructor() {
    super();
    this.postcardSaved = this.postcardSaved.bind(this);
    this.state = {
      postcard: PostcardStore.getPostcard()
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

  render() {
    const {postcard} = this.state;
    return (
      <div class="postcard-wrap">
        Postcard Preview
        {
          postcard.address &&
            <div class="sides">
              <FrontPlaceholder data={postcard}/>
              <Back data={postcard}/>
            </div>
        }
      </div>
    )
  }
}
