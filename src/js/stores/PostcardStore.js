import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import Cookies from 'js-cookie';

class PostcardStore extends EventEmitter {
  constructor() {
    super();
    this.postcard = Cookies.get('postcard') ? JSON.parse(Cookies.get('postcard')) : {};
  }

  updatePostcard(data) {
    const postcard = this.postcard;

    if (data.address) {
      const address = this.updatePostcardAddress(data)
      data = {};
      data.address = address;
    }
    // FIELDS, bg_img, name, address
    for (let key in data) {
      postcard[key] = data[key]
    }
    Cookies.set('postcard', postcard, { expires: 100000 })
  }

  clearPostcard() {
    Cookies.set('postcard', {}, { expires: 100000 })
  }

  updatePostcardAddress(data) {
    switch (data.source) {
      case "zip":
        return {
          name: data.address.name,
          address_line1: data.address.send_to.line1,
          address_line2: data.address.send_to.line2,
          address_city: data.address.send_to.city,
          address_state: data.address.send_to.state,
          address_zip: data.address.send_to.zip
        }
        break;
      case "manual":
        return {
          name: data.address.name,
          ln_01: data.address.send_to.delivery_line_1,
          ln_02: data.address.send_to.delivery_line_2,
          last_line: data.address.send_to.last_line
        }
      default:
        console.error("Must provide source of address to parse it.")
    }
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
      case "CLEAR_POSTCARD_DATA": {
        this.clearPostcard();
        this.emit("postcard-cleared");
        break;
      }
    }
  }
}

const postcardStore = new PostcardStore();
dispatcher.register(postcardStore.handleActions.bind(postcardStore));
export default postcardStore;
