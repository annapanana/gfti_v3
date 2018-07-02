import React from "react";
import { withRouter } from 'react-router-dom';
import ProgressButton from "./ProgressButton";
import Postcard from "shared/postcards/Postcard";
import Selection from "./step_2_states/Selection";
import ImageResource from "./step_2_states/ImageResource";
import ResourceStore from "stores/ResourceStore";
import PostcardStore from "stores/PostcardStore";

class Step2 extends React.Component {
  constructor() {
    super();
    this.postcardSaved = this.postcardSaved.bind(this);
  }

  componentWillMount() {
    PostcardStore.on("postcard-saved", this.postcardSaved);
  }

  componentWillUnmount() {
    PostcardStore.on("postcard-saved", this.postcardSaved);
  }

  postcardSaved() {
    this.props.history.push("/step-3");
  }

  render() {
    const {match, isLoading, loadingError, apiData, getResource} = this.props;

    return (
      <div class="step-2-wrap embedded-panel">
        <h2 class="text-center">Step 2: Select Background Image</h2>
        <ImageResource
          getResource={getResource}
          apiData={apiData}
          isLoading={isLoading}
          loadingError={loadingError}
          name={"Unsplash"}/>
        <Postcard />
      </div>
    );
  }
}
export default withRouter(Step2);
