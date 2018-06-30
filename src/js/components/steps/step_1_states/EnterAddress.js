import React from "react";
import * as Constants from "js/constants"
import { MenuItem, DropdownButton } from 'react-bootstrap';
import ProgressButton from "../ProgressButton";

export default class EnterAddress extends React.Component {
  constructor() {
    super();
    this.validateAddress = this.validateAddress.bind(this);

    this.state = {
      address: {
        name: "",
        address1: "",
        address2: "",
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

  getStates() {
    return Constants.states.map((elem, key) => {
      return (
        <MenuItem key={key} eventKey={elem.abbreviation} onClick={this.updateStateSelection.bind(this, elem)}>
          {elem.name}
        </MenuItem>
      )
    })
  }

  onChangeHandler(field, e) {
    const address = this.state.address;
    address[field] = e.target.value;
    this.setState({address:address})
  }

  validateAddress() {
    // TODO api request to see if this is a valid address before progressing
    console.log(this.state.address);
  }

  render() {
    const {stateSelection, address} = this.state;

    return (
      <div class="manual-wrap">
        <form>
          <div>
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" type="text" required onChange={this.onChangeHandler.bind(this, "name")} value={address.name}/>
            </div>
            <div class="form-group">
              <label for="address-1">Address</label>
              <input id="address-1" type="text" required onChange={this.onChangeHandler.bind(this, "address1")} value={address.address1}/>
            </div>
            <div class="form-group">
              <label for="address-2">Address 2</label>
              <input id="address-2" type="text" onChange={this.onChangeHandler.bind(this, "address2")} value={address.address2}/>
            </div>
          </div>
          <div>
            <div class="form-group dropdown-select">
              <label for="state">State</label>
              <DropdownButton
                bsStyle={"default"}
                title={stateSelection.name}
                id="states">
                {this.getStates()}
              </DropdownButton>
            </div>
            <div class="form-group">
              <label for="zip">Zipcode</label>
              <input id="zip" type="text" required onChange={this.onChangeHandler.bind(this, "zip")} value={address.zip}/>
            </div>
          </div>
        </form>
        <ProgressButton to={"/step-2"} text={"Save & Continue"} saveAction={this.validateAddress}/>
      </div>
    )
  }
}
