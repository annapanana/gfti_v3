import dispatcher from "../dispatcher";

export function updatePostcardData(data) {
  console.log("poscard action");
  dispatcher.dispatch({
    type: "UPDATE_POSTCARD_DATA",
    data: data
  });
}
