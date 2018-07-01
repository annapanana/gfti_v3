import React from "react";
import SearchTextInput from "./SearchTextInput";
import Images from "./Images";

export default class ImageResource extends React.Component {
  render() {
    const {name, getResource, apiData, isLoading, loadingError} = this.props;
    return (
      <div>
        <SearchTextInput
          getResource={getResource}/>
        {
          apiData &&
          <Images
            apiData={apiData}
            isLoading={isLoading}
            loadingError={loadingError}/>
        }
      </div>
    )
  }
}
