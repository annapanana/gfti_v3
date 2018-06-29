import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class GardenStore extends EventEmitter {
  constructor() {
    super();
    this.plots = [];
    this.plotNotes = [];
    this.plotImages = [];
    this.error = {};
  }

  getAllPlots() {
    return this.plants_plots;
  }

  getAllPlotsNotes() {
    return this.plotNotes;
  }

  getAllPlotsImages() {
    return this.plotImages;
  }

  getSinglePlot(bed_id, plot_id) {
    return this.plots.find((plot) => {
      return plot.bed_id === bed_id && plot.plot_bed_id === plot_id
    })
  }

  getSinglePlotNotes(bed_id, plot_id) {

  }

  getSinglePlotImages(bed_id, plot_id) {

  }


  handleActions(action) {
    switch(action.type) {
      case "PLOT_PLANT_ADDED": {
        this.error = {};
        this.plots = action.data;
        this.emit("plot_plant_added");
        break;
      }
      case "PLOT_PLANT_UPDATED": {
        this.error = {};
        this.plots = action.data;
        this.emit("plot_plant_updated");
        break;
      }
      case "PLOT_NOTE_ADDED": {
        this.error = {};
        this.plotNotes = action.data;
        this.emit("plot_note_added");
        break;
      }
      case "PLOT_IMAGE_ADDED": {
        this.error = {};
        this.plotImages = action.data;
        this.emit("plot_image_added");
        break;
      }
      case "RECEIVED_PLOTS_PLANTS": {
        this.error = {},
        this.plots = action.data;
        this.emit("plants_plots_loaded");
        break
      }
      case "PLOT_SERVICE_ERROR": {
        this.error = {xhr: action.xhr, textStatus: action.textStatus, errorThrown: action.errorThrown};
        this.emit("plot_serice_error");
        break;
      }
    }
  }
}

const gardenStore = new GardenStore();
dispatcher.register(gardenStore.handleActions.bind(gardenStore));
export default gardenStore;
