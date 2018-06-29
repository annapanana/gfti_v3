import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Step1 from "components/steps/Step1"
import Step2 from "components/steps/Step2"
import Step3 from "components/steps/Step3"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="home-wrap">
        <h1>Create Your Postcard</h1>
        <Router>
          <div>
            <Route exact path="/step-1" component={Step1}/>
            <Route exact path="/step-2" component={Step2}/>
            <Route exact path="/step-3" component={Step3}/>
          </div>
        </Router>
      </div>
    );
  }
}
