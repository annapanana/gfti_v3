import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from 'react-router-dom';
import NextButton from "./NextButton";
import Step1Options from "./subfields/Step1Options";
import EnterAddress from "./subfields/EnterAddress";
import FindByZipcode from "./subfields/FindByZipcode";

export default class Step1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {match} = this.props;
    return (
      <div class="home-wrap">
        <h2>Step 1: Choose a Recipient</h2>
        <Router>
          <div>
            <Route exact path={`${match.url}/zipcode`} component={FindByZipcode}/>
            <Route exact path={`${match.url}/manual`} component={EnterAddress}/>
            <Route exact path={match.url} component={Step1Options}/>
          </div>
        </Router>
        <NextButton to={"/step-2"}/>
      </div>
    );
  }
}
