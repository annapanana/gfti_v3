import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import Cookies from 'js-cookie';

class PostcardStore extends EventEmitter {
  constructor() {
    super();
    this.postcard = Cookies.get('postcard') ? JSON.parse(Cookies.get('postcard')) : {};
  }

  updatePostcard(data) {
    console.log("DATA: ", data);
    const postcard = this.postcard;
    // FIELDS, bg_img, name, address
    for (let key in data) {
      postcard[key] = data[key]
    }
    Cookies.set('postcard', postcard, { expires: 100000 })
  }

  getPostcard() {
    return this.postcard;
  }

  handleActions(action) {
    switch(action.type) {
      case "UPDATE_POSTCARD_DATA": {
        this.updatePostcard(action.data);
        this.error = {};
        this.emit("postcard-saved");
        break;
      }
    }
  }
}

const postcardStore = new PostcardStore();
dispatcher.register(postcardStore.handleActions.bind(postcardStore));
export default postcardStore;
