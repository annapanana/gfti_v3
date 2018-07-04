import React from "react";
import * as PostcardActions from "actions/PostcardActions";
import ProgressButton from "../ProgressButton";

export default class ConfirmAddress extends React.Component {
  render() {
    const {verifiedAddress, name} = this.props;
    return (
      <div>
        <div>
          <p>{verifiedAddress.name}</p>
          <p>{verifiedAddress.primary_line}</p>
          {
            verifiedAddress.econdary_line &&
              <p>{verifiedAddress.secondary_line}</p>
          }
          <p>{verifiedAddress.last_line}</p>
        </div>
        <ProgressButton text={"Confirm & Continue"} saveAction={()=> {
            PostcardActions.updatePostcardData({address:verifiedAddress})
          }}/>
      </div>
    )
  }
}
