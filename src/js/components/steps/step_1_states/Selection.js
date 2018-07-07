import React from "react";
import {Link} from 'react-router-dom';

export default class Selection extends React.Component {
  render() {
    return (
      <div>
        <div class="side-by-side">
          <Link to="/step-1/zipcode" class="col left">
            <p>Find the address information of your local representation by zip code</p>
          </Link>
          <h2>or</h2>
          <Link to="/step-1/manual" class="col right">
            <p>Enter address information manually</p>
          </Link>
        </div>
      </div>
    )
  }
}
