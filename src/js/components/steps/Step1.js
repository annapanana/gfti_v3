import React from "react";
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import Selection from "./step_1_states/Selection";
import EnterAddress from "./step_1_states/EnterAddress";
import FindByZipcode from "./step_1_states/FindByZipcode";
import PostcardStore from "stores/PostcardStore";

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.postcardSaved = this.postcardSaved.bind(this);
  }

  componentWillMount() {
    PostcardStore.on("postcard-saved", this.postcardSaved);
  }

  componentWillUnmount() {
    PostcardStore.removeListener("postcard-saved", this.postcardSaved);
  }

  postcardSaved() {
    this.props.history.push("/step-2");
  }

  render() {
    const {match, isLoading, loadingError, apiData, getResource, verifiedAddress} = this.props;
    return (
      <div class="step-1-wrap embedded-panel">
        <h2 class="text-center">Step 1: Choose a Recipient</h2>
        <Switch>
          <Route exact path={`${match.url}/zipcode`} render={({match}) =>
            <FindByZipcode
              getResource={getResource}
              apiData={apiData}
              isLoading={isLoading}
              loadingError={loadingError}
              verifiedAddress={verifiedAddress}
              />
          }/>
          <Route exact path={`${match.url}/manual`} render={({match}) =>
            <EnterAddress
              getResource={getResource}
              isLoading={isLoading}
              loadingError={loadingError}
              verifiedAddress={verifiedAddress}
              />
          }/>
          <Route path={match.url} component={Selection}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Step1);
