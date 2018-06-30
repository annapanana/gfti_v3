import * as Helpers from "../helpers";

export function getExternalResource(params) {
  Helpers.restCall(
    'external-resources',
    'POST',
    params,
    'RESOURCE_SERVICE_START',
    'RESOURCE_LOADED',
    'RESOURCE_SERVICE_ERROR'
  )
}
