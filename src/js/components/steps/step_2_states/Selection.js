import React from "react";
import {Link} from 'react-router-dom';

export default class Selection extends React.Component {
  render() {
    return (
      <div class="selection-wrap">
        <p class="description-text text-center">Select the tool you would like to use to find an image for your postcard design.</p>
        <div class="button-row">
          <Link to="/step-2/unsplash">
            <div class="logo-icon">
              <img src={"img/unsplash.png"}/>
            </div>
            <h4>Search Unsplash</h4>
          </Link>
          <Link to="/step-2/google">
            <div class="logo-icon">
              <img src={"img/google.png"}/>
            </div>
            <h4>Search Google Images</h4>
          </Link>
        </div>
      </div>
    )
  }
}
