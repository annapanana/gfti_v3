import React from "react";

export default class Images extends React.Component {

  getPhotos(photos) {
    return photos.map((elem, key) => {
      return (
        <div key={key}>
          <img src={elem.urls.thumb}/>
        </div>
      )
    })
  }

  render() {
    const {apiData, isLoading, loadingError} = this.props;
    return (
      <div class="images-wrap">
        {
          loadingError ?
            <div>{loadingError}</div>
          :
          isLoading ?
            <div>Loading</div>
          :
            apiData &&
              <div class="images">
                {this.getPhotos(apiData.results)}
              </div>
        }
      </div>
    )
  }
}
