import React from "react";
import {Link} from 'react-router-dom';

export default class ProgressButton extends React.Component {

  render() {
    const {to, text, saveAction} = this.props;
    return (
      <div class="next-button-wrap">
        {
          to ?
            <Link to={to} class="btn" onClick={()=> {
                if (saveAction) { saveAction() }
              }}>{text}</Link>
          :
            <a class="btn" onClick={()=> {
                if (saveAction) { saveAction() }
              }}>{text}</a>
        }
      </div>
    )
  }
}
