import dispatcher from "../dispatcher";
import * as Helpers from "../helpers";

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

export function publishPostcard(params) {
  Helpers.restCall(
    'cards',
    'POST',
    params,
    'RESOURCE_SERVICE_START',
    'RESOURCE_LOADED',
    'RESOURCE_SERVICE_ERROR'
  )
}
