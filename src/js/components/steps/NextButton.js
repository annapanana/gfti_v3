import React from "react";
import {Link} from 'react-router-dom';

export default class NextButton extends React.Component {
  render() {
    const {to} = this.props;
    return (
      <div class="next-button-wrap">
        <Link to={to} class="btn">Next</Link>
      </div>
    )
  }
}
