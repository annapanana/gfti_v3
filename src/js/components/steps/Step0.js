import React from "react"
import ProgressButton from "./ProgressButton";
import * as PostcardActions from "actions/PostcardActions";
import Representatives from "./step_0_animations/Representatives";

export default class Step0 extends React.Component {
  constructor() {
    super();
    PostcardActions.clearPostcard();
  }
  render() {
    return (
      <div class="home-page-wrap">
        <div class="header">
          <h1 >Greetings from the Internet</h1>
          <h3>What issues matter most to you? Express your values to political representatives with powerful imagery and a meaningful message by sending a postcard today.</h3>
          <button class="btn lg">Start Making</button>
        </div>
        <div class="home-body">
          <div class="home-tile blue">
            <div class="left">
              <Representatives />
            </div>
            <div class="right">
              <h1>1. Pick a Representative</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div class="home-tile red">
            <div class="left">
              <h1>2. Select an Image</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="right image-selection">
              <img src="img/image_selection.png"/>
            </div>
          </div>
          <div class="home-tile blue">
            <div class="left">
              <img src="img/design.svg"/>
            </div>
            <div class="right">
              <h1>3. Design Your Masterpiece</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div class="home-tile red">
            <div class="left">
              <h1>4. Compose Your Message</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="right">
              <img class="message" src="img/message.svg"/>
            </div>
          </div>
          <div class="home-tile blue">
            <div class="left send">
              <img src="img/airplane.svg"/>
            </div>
            <div class="right send">
              <h1>5. Send Your Message</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
