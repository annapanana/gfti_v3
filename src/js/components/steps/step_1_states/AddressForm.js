import React from "react";
import * as Constants from "js/constants"
import { MenuItem, DropdownButton } from 'react-bootstrap';
import ProgressButton from "../ProgressButton";

export default class AddressForm extends React.Component {

  getStates(updateStateSelection) {
    return Constants.states.map((elem, key) => {
      return (
        <MenuItem key={key} eventKey={elem.abbreviation} onClick={updateStateSelection.bind(this, elem)}>
          {elem.name}
        </MenuItem>
      )
    })
  }

  render() {
    const {address, onChangeHandler, stateSelection, updateStateSelection, validateAddress} = this.props;
    return (
      <div>
        <form>
          <div>
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" type="text" required onChange={onChangeHandler.bind(this, "name")} value={address.name}/>
            </div>
            <div class="form-group">
              <label for="address-1">Address</label>
              <input id="address-1" type="text" required onChange={onChangeHandler.bind(this, "address1")} value={address.address1}/>
            </div>
            <div class="form-group">
              <label for="address-2">Address 2</label>
              <input id="address-2" type="text" onChange={onChangeHandler.bind(this, "address2")} value={address.address2}/>
            </div>
          </div>
          <div>
            <div class="form-group">
              <label for="city">City</label>
              <input id="city" type="text" onChange={onChangeHandler.bind(this, "city")} value={address.city}/>
            </div>
            <div class="form-group dropdown-select">
              <label for="state">State</label>
              <DropdownButton
                bsStyle={"default"}
                title={stateSelection.name}
                id="states">
                {this.getStates(updateStateSelection)}
              </DropdownButton>
            </div>
            <div class="form-group">
              <label for="zip">Zipcode</label>
              <input id="zip" type="text" required onChange={onChangeHandler.bind(this, "zip")} value={address.zip}/>
            </div>
          </div>
        </form>
        <ProgressButton text={"Try Address"} saveAction={validateAddress}/>
      </div>
    )
  }
}
