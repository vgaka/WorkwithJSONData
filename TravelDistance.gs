function TravelDistance(origin, destination, myapi_key) {
  map_Request_url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination + "&key="+ myapi_key ;
  
  var distance = 0;
  var response = UrlFetchApp.fetch(map_Request_url);//, {'muteHttpExceptions': true});
    //console.log(map_Request_url);
  var json = response.getContentText();
    
  var data = JSON.parse(json);
  try{
    //Logger.log(data["routes"][0]["legs"][0]["distance"]["value"]);
  data["routes"][0]["legs"].forEach(function(lg){
    distance = distance+ lg["distance"]["value"];
  });
  } catch (e) {
    // Logs an ERROR message.
    console.error('TravelDistance() found an error: ' + e);
  }
 return distance;
}