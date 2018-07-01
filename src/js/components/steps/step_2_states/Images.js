import React from "react";
import * as PostcardActions from "actions/PostcardActions";

export default class Images extends React.Component {

  selectPhoto(url) {
    PostcardActions.updatePostcardData({
      bg_img: url,
    })
  }

  getPhotos(photos) {
    return photos.map((elem, key) => {
      const style = {
        'backgroundImage': `url(${elem.urls.small})`
      }
      return (
        <div key={key} class="image" style={style} onClick={this.selectPhoto.bind(this, elem.urls.regular)}></div>
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
