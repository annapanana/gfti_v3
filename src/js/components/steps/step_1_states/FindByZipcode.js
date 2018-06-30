import React from "react";
import ProgressButton from "../ProgressButton";
import Representatives from "./Representatives";

export default class FindByZipcode extends React.Component {
  constructor() {
    super();

    this.state = {
      address: {}
    }
  }

  findByZip(e) {
    const zip = $(e.target).find("input").val();
    e.preventDefault();
    this.props.getResource({
      resource: "rep-by-zip",
      params: {
        zip: zip
      }
    })
  }

  render() {
    const {apiData, isLoading, loadingError} = this.props,
          {address} = this.state;

    return (
      <div class="zip-wrap">
        <p class="text-center">Enter your zip code to receive a list of your local, state and federal representatives.</p>
        <form class="form-group" onSubmit={this.findByZip.bind(this)}>
          <label for="inputZip">Zip</label>
          <input type="text" pattern="^\d{5}([ \-]\d{4})?$" class="form-control" required />
          <button class="btn" type="submit">Search</button>
        </form>
        {
          loadingError ?
            <div>{loadingError}</div>
          :
            isLoading ?
              <div>LOADING GIF</div>
            :
              apiData &&
                <Representatives apiData={apiData}/>
        }
        { address.name && <ProgressButton to={"/step-2"} text={"Next"}/>}
      </div>
    )
  }
}
