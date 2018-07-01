import React from "react";

export default class Images extends React.Component {

  getPhotos(photos) {
    return photos.map((elem, key) => {
      const style = {
        'backgroundImage': `url(${elem.urls.small})`
      }
      return (
        <div key={key} class="image" style={style}></div>
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
            apiData && apiData.results &&
              <div class="images">
                {this.getPhotos(apiData.results)}
              </div>
        }
      </div>
    )
  }
}
