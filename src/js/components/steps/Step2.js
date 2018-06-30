import React from "react";
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import ProgressButton from "./ProgressButton";
import Postcard from "shared/Postcard";
import Selection from "./step_2_states/Selection";
import ImageResource from "./step_2_states/ImageResource";

export default class Step2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {match} = this.props;

    return (
      <div class="step-2-wrap embedded-panel">
        <h2 class="text-center">Step 2: Select Background Image</h2>
        <Switch>
          <Route exact path={`${match.url}/unsplash`} render={({match}) =>
            <ImageResource name={"Unsplash"}/>
          }/>
          <Route exact path={`${match.url}/google`} render={({match}) =>
            <ImageResource name={"Google"}/>
          }/>
          <Route path={match.url} component={Selection}/>
        </Switch>
        <Postcard />
      </div>
    );
  }
}
// <ProgressButton to={"/step-3"} text={"Next"}/>
