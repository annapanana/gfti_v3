import dispatcher from "../dispatcher";

export function updatePostcardData(data) {
  dispatcher.dispatch({
    type: "UPDATE_POSTCARD_DATA",
    data: data
  });
}

export function clearPostcard() {
  dispatcher.dispatch({
    type: "CLEAR_POSTCARD_DATA"
  })
}
