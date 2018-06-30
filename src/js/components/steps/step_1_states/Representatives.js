import React from "react";

export default class Representatives extends React.Component {

  showAddresses(officials) {
    return officials.map((elem, key) => {
      return (
        <li key={key}>
          <div class="elem">
            <a href={elem.urls[0]} target="_blank">{elem.name}</a>
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
            <button class="btn">Select This Rep</button>
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
