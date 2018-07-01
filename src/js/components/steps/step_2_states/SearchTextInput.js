import React from "react";

export default class SearchTextInput extends React.Component {
  constructor() {
    super();
    this.onChangeHandler = this.onChangeHandler.bind(this);

    this.state = {
      searchText: ""
    }
  }

  onChangeHandler(field, e) {
    const state = this.state;
    state[field] = e.target.value;
    this.setState(state);
  }

  triggerSearch(e) {
    e.preventDefault();
    this.props.getResource({
      resource: "unsplash-photos",
      params: {
        search_text: this.state.searchText
      }
    })
  }

  render() {
    const {searchText} = this.state;
    return (
      <div class="search-text-wrap">
        <p class="description-text text-center">
          You can search for images to express your message. Enter your search terms below.
        </p>
        <form onSubmit={this.triggerSearch.bind(this)}>
          <div class="form-group">
            <label for="search-terms">Enter Search Terms:</label>
            <input id="search-terms" type="text" onChange={this.onChangeHandler.bind(this, "searchText")} value={searchText}/>
            <button class="btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
