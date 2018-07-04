import React from "react";
import ConfirmAddress from "./ConfirmAddress";
import AddressForm from "./AddressForm";
import * as AddressActions from "actions/AddressActions"

export default class EnterAddress extends React.Component {
  constructor() {
    super();
    this.validateAddress = this.validateAddress.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.updateStateSelection = this.updateStateSelection.bind(this);

    this.state = {
      address: {
        name: "",
        address1: "",
        address2: "",
        city: "",
        state: "AL",
        zip: ""
      },
      stateSelection: {
          "name": "Colorado",
          "abbreviation": "CO"
      }
    }
  }

  updateStateSelection(selection) {
    const {address} = this.state;
    address.state = selection.abbreviation;
    this.setState({
      stateSelection: selection,
      address: address
    })
  }

  onChangeHandler(field, e) {
    const address = this.state.address;
    address[field] = e.target.value;
    this.setState({address:address})
  }

  validateAddress() {
    AddressActions.validateAddress(this.state.address)
    // TODO after the user selects a rep, use lob in the API only to validate
  }

  render() {
    const {stateSelection, address} = this.state,
          {verifiedAddress} = this.props;

    return (
      <div class="manual-wrap">
        {
          verifiedAddress ?
            <ConfirmAddress
              verifiedAddress={verifiedAddress}
              name={address.name}
              />
          :
            <AddressForm
              address={address}
              onChangeHandler={this.onChangeHandler}
              stateSelection={stateSelection}
              updateStateSelection={this.updateStateSelection}
              validateAddress={this.validateAddress}
              />
        }
      </div>
    )
  }
}
