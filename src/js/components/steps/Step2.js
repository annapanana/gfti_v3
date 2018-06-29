import React from "react";
import {Link} from 'react-router-dom';

export default class Step2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="home-wrap">
        <h1>Step 2</h1>
        <Link to="/step-3">Next</Link>
      </div>
    );
  }
}
