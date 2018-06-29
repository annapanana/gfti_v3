import React from "react";
import {Link} from 'react-router-dom';

export default class Step1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="home-wrap">
        <h1>Step 1</h1>
        <Link to="/step-2">Next</Link>
      </div>
    );
  }
}
