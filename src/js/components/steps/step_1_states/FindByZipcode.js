import React from "react";

export default class FindByZipcode extends React.Component {
  findByZip(e) {
    const zip = $(e.target).find("input").val();
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p class="text-center">Enter your zip code to receive a list of your local, state and federal representatives.</p>
        <form class="form-group" onSubmit={this.findByZip.bind(this)}>
          <label for="inputZip">Zip</label>
          <input type="text" pattern="^\d{5}([ \-]\d{4})?$" class="form-control" required />
          <button class="btn" type="submit">Search</button>
        </form>
      </div>
    )
  }
}
