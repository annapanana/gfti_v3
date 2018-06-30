import React from "react";
import {
  Switch,
  Route,
} from 'react-router-dom';
import Selection from "./step_1_states/Selection";
import EnterAddress from "./step_1_states/EnterAddress";
import FindByZipcode from "./step_1_states/FindByZipcode";
import * as ResourceActions from "actions/ResourceActions";
import ResourceStore from "stores/ResourceStore";

export default class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.serviceStart = this.serviceStart.bind(this);
    this.serviceError = this.serviceError.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {
      isLoading: false,
      loadingError: null,
      apiData: null
    }
  }

  componentWillMount() {
    ResourceStore.on("resource-service-start", this.serviceStart);
    ResourceStore.on("resource-service-error", this.serviceError);
    ResourceStore.on("resource-loaded", this.getData);
  }

  componentWillUnmount() {
    ResourceStore.removeListener("resource-service-start", this.serviceStart);
    ResourceStore.removeListener("resource-service-error", this.serviceError);
    ResourceStore.removeListener("resource-loaded", this.getData);
  }

  serviceStart() {
    this.setState({isLoading:true})
  }

  serviceError() {
    const error = ResourceStore.getError();
    this.setState({isLoading: false, loadingError: error});
  }

  getData() {
    const data = ResourceStore.getResource();
    this.setState({
      isLoading: false,
      loadingError: null,
      apiData: data
    })
  }

  getResource(params) {
    ResourceActions.getExternalResource(params);
  }

  render() {
    const {match} = this.props,
          {isLoading, loadingError, apiData} = this.state;

    return (
      <div class="step-1-wrap embedded-panel">
        <h2 class="text-center">Step 1: Choose a Recipient</h2>
        <Switch>
          <Route exact path={`${match.url}/zipcode`} render={({match}) =>
            <FindByZipcode
              getResource={this.getResource.bind(this)}
              apiData={apiData}
              isLoading={isLoading}
              loadingError={loadingError}
              />
          }/>
          <Route exact path={`${match.url}/manual`} render={({match}) => <EnterAddress getResource={this.getResource.bind(this)}/>}/>
          <Route path={match.url} component={Selection}/>
        </Switch>
      </div>
    );
  }
}
