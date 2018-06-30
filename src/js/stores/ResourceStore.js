import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class ResourceStore extends EventEmitter {
  constructor() {
    super();
    this.resource = {};
    this.error = {};
  }

  getResource() {
    return this.resource;
  }

  handleActions(action) {
    switch(action.type) {
      case "RESOURCE_SERVICE_START": {
        this.error = {};
        this.emit("resource-service-start");
        break;
      }
      case "RESOURCE_LOADED": {
        this.error = {};
        this.resource = action.data;
        this.emit("resource-loaded");
        break;
      }
      case "RESOURCE_SERVICE_ERROR": {
        this.error = {xhr: action.xhr, textStatus: action.textStatus, errorThrown: action.errorThrown};
        this.emit("resource-serice-error");
        break;
      }
    }
  }
}

const resourceStore = new ResourceStore();
dispatcher.register(resourceStore.handleActions.bind(resourceStore));
export default resourceStore;
