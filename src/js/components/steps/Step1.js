import React from "react";
import {
  Switch,
  Route,
} from 'react-router-dom';
import NextButton from "./NextButton";
import Selection from "./step_1_states/Selection";
import EnterAddress from "./step_1_states/EnterAddress";
import FindByZipcode from "./step_1_states/FindByZipcode";

export default class Step1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {match} = this.props;
    return (
      <div class="step-1-wrap embedded-panel">
        <h2 class="text-center">Step 1: Choose a Recipient</h2>
        <Switch>
          <Route path={`${match.url}/zipcode`} component={FindByZipcode}/>
          <Route path={`${match.url}/manual`} component={EnterAddress}/>
          <Route path={match.url} component={Selection}/>
        </Switch>
        <NextButton to={"/step-2"} text={"Next"}/>
      </div>
    );
  }
}
