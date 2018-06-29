import React from "react";
import {Link} from 'react-router-dom';

export default class Step3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="home-wrap">
        <h1>Step 3</h1>
        <Link to="/">Next</Link>
      </div>
    );
  }
}
