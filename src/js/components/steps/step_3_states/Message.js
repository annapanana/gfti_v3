import React from "react";
import ProgressButton from "../ProgressButton";
import * as PostcardActions from "actions/PostcardActions";

export default class Message extends React.Component {
  constructor() {
    super();
    this.saveMessage = this.saveMessage.bind(this);

    this.state = {
      to: "",
      message: "",
      from: ""
    }
  }

  onChangeHandler(field, e) {
    const state = this.state;
    state[field] = e.target.value;
    this.setState(state);
  }

  saveMessage() {
    PostcardActions.updatePostcardData({
      pc_back: this.state
    })
  }

  render() {
    const {to, message, from} = this.state;
    return (
      <div class="message-wrap">
        <form action="/action_page.php" id="usrform">
          <div class="input-row">
            <div class="form-group">
              <label for="to">To:</label>
              <input id="to" type="text" onChange={this.onChangeHandler.bind(this, "to")} value={to}/>
            </div>
            <div class="form-group">
              <label for="from">From:</label>
              <input id="from" type="text" onChange={this.onChangeHandler.bind(this, "from")} value={from}/>
            </div>
          </div>
          <div class="form-group message">
            <label for="message">Message:</label>
            <textarea name="message" form="usrform" onChange={this.onChangeHandler.bind(this, "message")} value={message}>
            </textarea>
          </div>
        </form>
        <ProgressButton to={"/step-4"} text={"Next"} saveAction={this.saveMessage.bind(this)}/>
      </div>
    )
  }
}
