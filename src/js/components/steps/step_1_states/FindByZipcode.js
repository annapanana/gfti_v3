import React from "react";

export default class FindByZipcode extends React.Component {
  render() {
    return (
      <div class="form-group col-md-4">
        <label for="inputZip" class="control-label required">Zip</label>
        <input type="text" pattern="^\d{5}([ \-]\d{4})?$" class="form-control" ref="zip1" id="inputZip" data-error="Zip is required" required />
        <div class="help-block with-errors"></div>
      </div>
    )
  }
}
