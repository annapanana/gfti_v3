import dispatcher from "../dispatcher";
import * as Helpers from "../helpers";

export function getPlotsPlants() {
  Helpers.restCall(
    'plants_plots',
    'GET',
    {},
    'PLOT_SERVICE_START',
    'RECEIVED_PLOTS_PLANTS',
    'PLOT_SERVICE_ERROR'
  )
}

export function addPlotPlant(data) {
  // Data: bed_id, plot_bed_id, plant_id
  Helpers.restCall(
    'plants_plots',
    'POST',
    data,
    'PLOT_SERVICE_START',
    'PLOT_PLANT_ADDED',
    'PLOT_SERVICE_ERROR'
  )
}

export function updatePlotPlant(data) {
  // Data: bed_id, plot_bed_id, plant_id
  Helpers.restCall(
    'plants_plots',
    'UPDATE',
    data,
    'PLOT_SERVICE_START',
    'PLOT_PLANT_UPDATED',
    'PLOT_SERVICE_ERROR'
  )
}

export function addPlotNote(data) {
  // Data: bed_id, plot_id, notes
  Helpers.restCall(
    'notes',
    'POST',
    data,
    'PLOT_SERVICE_START',
    'PLOT_NOTE_ADDED',
    'PLOT_SERVICE_ERROR'
  )
}

export function addPlotImage(data) {
  // Data: bed_id, plot_id, image_url, image_description
  Helpers.restCall(
    'images',
    'POST',
    data,
    'PLOT_SERVICE_START',
    'PLOT_IMAGE_ADDED',
    'PLOT_SERVICE_ERROR'
  )
}
