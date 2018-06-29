import React from "react";
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Header extends React.Component {
  constructor() {
    super();

    this.closeAddPlantModal = this.closeAddPlantModal.bind(this);
    this.openAddPlantModal = this.openAddPlantModal.bind(this);

    this.state = {
      showAddPlantModal: false
    }
  }

  openAddPlantModal() {
    this.setState({showAddPlantModal:true});
  }

  closeAddPlantModal() {
    this.setState({showAddPlantModal:false});
  }

  render() {
    return (
      <div class="header-wrap">
        <Button bsStyle="primary" onClick={this.openAddPlantModal.bind(this)}>Add Plant</Button>
        <Link to="/plants">View All Plants</Link>
        <AddPlantModal
          showModal={this.state.showAddPlantModal}
          close={this.closeAddPlantModal}/>
      </div>
    )
  }
}
