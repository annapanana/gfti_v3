import React from "react";
import * as PostcardActions from "actions/PostcardActions";

export default class Representatives extends React.Component {

  selectRep(name, address) {
    PostcardActions.updatePostcardData({
      source: "zip",
      address: {
        name: name,
        address_line1: address[0].line1,
        address_line2: address[0].line2,
        address_city: address[0].city,
        address_state: address[0].state,
        address_zip: address[0].zip
      }
    })
  }

  showAddresses(officials) {
    // Filter out officials who don't have address data
    const filtered_officials = officials.filter(elem => {
      return elem.address
    })
    return filtered_officials.map((elem, key) => {
      return (
        <li key={key}>
          <div class="elem">
            {
              elem.urls ?
                <a href={elem.urls[0]} target="_blank">{elem.name}</a>
              :
                <p>{elem.name}</p>
            }
          </div>
          <div class="elem">
            {elem.party}
          </div>
          <div class="elem">
            <small>{elem.address[0].line1}</small>
            <small>{elem.address[0].city}</small>
            <small>{elem.address[0].state}</small>
            <small>{elem.address[0].zip}</small>
          </div>
          <div class="elem center">
            <button class="btn" onClick={this.selectRep.bind(this, elem.name, elem.address)}>Select This Rep</button>
          </div>
        </li>
      )
    })
  }

  render() {
    const {apiData} = this.props;
    return (
      <div class="representatives-wrap">
        <div class="table">
          <ul>
            <li class="table-header">
              <div class="elem">Name</div>
              <div class="elem">Party</div>
              <div class="elem">Address</div>
              <div class="elem"></div>
            </li>
            {this.showAddresses(apiData.officials.reverse())}
          </ul>
        </div>
      </div>
    )
  }
}
