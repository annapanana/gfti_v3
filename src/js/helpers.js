import Dispatcher from "./dispatcher";

export function restCall(url, method, data, startMsg, successMsg, errorMsg) {
  console.log(method);
  if (startMsg) {
    Dispatcher.dispatch( {type: startMsg} );
  }
  $.ajax({
    url: `http://localHost:8000/api/${url}`,
    method: method || 'GET',
    dataType: 'json',
    data: data || {}
  }).done(function(data) {
    Dispatcher.dispatch( {type: successMsg, data: data} );
  }).fail(function(xhr, textStatus, errorThrown) {
    console.log("error", errorThrown);
    Dispatcher.dispatch( {type: errorMsg, xhr, textStatus, errorThrown} );
  });
}
