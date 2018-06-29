import React from "react";
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="header-wrap">
        <h3>
          <Link to="/">
            Greetings from the Internet
          </Link>
        </h3>
        <div>
          <Link to="about">About</Link>
          <Link to="contact">Contact Us</Link>
        </div>
      </div>
    )
  }
}
