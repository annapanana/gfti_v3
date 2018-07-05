import React from "react";
import * as PostcardActions from "actions/PostcardActions";
import ProgressButton from "../ProgressButton";

export default class ConfirmAddress extends React.Component {
  render() {
    const {verifiedAddress} = this.props;
    console.log(verifiedAddress);
    return (
      <div>
        <div>
          <h3>{verifiedAddress.name}</h3>
          <p>{verifiedAddress.address_line1}</p>
          {
            verifiedAddress.address_line2 &&
            <p>{verifiedAddress.address_line2}</p>
          }
          <p>{`${verifiedAddress.address_city} ${verifiedAddress.address_state} ${verifiedAddress.address_zip}`}</p>
        </div>
        <ProgressButton text={"Confirm & Continue"} saveAction={()=> {
            PostcardActions.updatePostcardData({address:verifiedAddress})
          }}/>
      </div>
    )
  }
}
