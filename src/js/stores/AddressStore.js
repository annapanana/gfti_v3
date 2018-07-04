import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class AddressStore extends EventEmitter {
  constructor() {
    super();
    this.address = {};
    this.error = {};
  }

  getAddress() {
    return this.address;
  }

  handleActions(action) {
    switch(action.type) {
      case "ADDRESS_SERVICE_START": {
        this.error = {};
        this.emit("address-service-start");
        break;
      }
      case "ADDRESS_LOADED": {
        this.error = {};
        this.address = action.data;
        this.emit("address-verified");
        break;
      }
      case "ADDRESS_SERVICE_ERROR": {
        this.error = {xhr: action.xhr, textStatus: action.textStatus, errorThrown: action.errorThrown};
        this.emit("address-serice-error");
        break;
      }
    }
  }
}

const addressStore = new AddressStore();
dispatcher.register(addressStore.handleActions.bind(addressStore));
export default addressStore;
