import dispatcher from "../dispatcher";
import * as Helpers from "../helpers";

export function validateAddress(params) {
  Helpers.restCall(
    'addresses',
    'POST',
    params,
    'ADDRESS_SERVICE_START',
    'ADDRESS_LOADED',
    'ADDRESS_SERVICE_ERROR'
  )
}
