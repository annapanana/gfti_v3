import React from "react";
import Back from "./Back";
import Front from "./Front";
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
    PostcardStore.on("postcard-saved", this.postcardSaved);
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
            <div class="side-by-side">
              <Front data={postcard}/>
              <Back data={postcard}/>
            </div>
        }
      </div>
    )
  }
}
