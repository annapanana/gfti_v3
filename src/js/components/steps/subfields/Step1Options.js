import React from "react";
import {Link} from 'react-router-dom';

export default class Step1Options extends React.Component {
  render() {
    return (
      <div class="side-by-side">
        <Link to="step-1/zipcode" class="left">
          <p>Find the address information of your local representation by zip code</p>
        </Link>
        <h1>or</h1>
        <Link to="step-1/manual" class="right">
          <p>Enter address information manually</p>
        </Link>
      </div>
    )
  }
}
