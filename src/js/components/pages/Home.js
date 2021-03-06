import React from "react";
import {
  Switch,
  Route
} from 'react-router-dom'

import Step0 from "components/steps/Step0"
import Step1 from "components/steps/Step1"
import Step2 from "components/steps/Step2"
import Step3 from "components/steps/Step3"
import Step4 from "components/steps/Step4"
import Step5 from "components/steps/Step5"
import * as ResourceActions from "actions/ResourceActions"
import ResourceStore from "stores/ResourceStore"
import AddressStore from "stores/AddressStore";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.serviceStart = this.serviceStart.bind(this);
    this.serviceError = this.serviceError.bind(this);
    this.getData = this.getData.bind(this);
    this.getResource = this.getResource.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.state = {
      isLoading: false,
      loadingError: null,
      apiData: null,
      address: null
    }
  }

  componentWillMount() {
    ResourceStore.on("resource-service-start", this.serviceStart);
    ResourceStore.on("resource-service-error", this.serviceError);
    ResourceStore.on("resource-loaded", this.getData);
    AddressStore.on("address-verified", this.getAddress);
  }

  componentWillUnmount() {
    ResourceStore.removeListener("resource-service-start", this.serviceStart);
    ResourceStore.removeListener("resource-service-error", this.serviceError);
    ResourceStore.removeListener("resource-loaded", this.getData);
    AddressStore.removeListener("address-verified", this.getAddress);
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

  getAddress() {
    const address = AddressStore.getAddress();
    this.setState({
      isLoading: false,
      loadingError: null,
      address: address
    })
  }

  getResource(params) {
    ResourceActions.getExternalResource(params);
  }

  render() {
    const {apiData, isLoading, loadingError, address} = this.state;
    return (
      <div class="home-wrap">
        <Switch>
          <Route path="/step-1" render={({match}) =>
            <Step1
              match={match}
              getResource={this.getResource.bind(this)}
              apiData={apiData}
              isLoading={isLoading}
              loadingError={loadingError}
              verifiedAddress={address}
              />
          }/>
          <Route path="/step-2" render={({match}) =>
            <Step2
              match={match}
              getResource={this.getResource.bind(this)}
              apiData={apiData}
              isLoading={isLoading}
              loadingError={loadingError}
              />
          }/>
          <Route path="/step-3" component={Step3}/>
          <Route path="/step-4" component={Step4}/>
          <Route path="/step-5" component={Step5}/>
          <Route path="/" component={Step0}/>
        </Switch>
      </div>
    );
  }
}
