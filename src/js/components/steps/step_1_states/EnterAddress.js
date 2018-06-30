import React from "react";
import ConfirmAddress from "./ConfirmAddress";
import AddressForm from "./AddressForm";

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
          "name": "Alabama",
          "abbreviation": "AL"
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
    this.props.getResource({
      resource: "validate-address",
      params: {
        address: this.state.address
      }
    })
  }

  render() {
    const {stateSelection, address} = this.state,
          {apiData} = this.props;

    return (
      <div class="manual-wrap">
        {
          apiData && apiData.length > 0 ?
            <ConfirmAddress
              apiData={apiData[0]}
              name={address.name}
              />
          :
            <AddressForm
              address={address}
              onChangeHandler={this.onChangeHandler}
              stateSelection={stateSelection}
              updateStateSelection={this.updateStateSelection}
              apiData={apiData}
              validateAddress={this.validateAddress}
              />
        }
      </div>
    )
  }
}
