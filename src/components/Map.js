import "leaflet/dist/leaflet.css";
import L from "leaflet/dist/leaflet.js";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.js";
import "@fortawesome/fontawesome-free/css/all.css";
import { MAP_KEY } from "../keys/keys.js";

class Map {
  constructor() {
    this.map = null;
  }

  // create map from mapbox documentation and code examples
  // from https://docs.mapbox.com/mapbox-gl-js/api/

  createMap(lat, lng, zoom) {
    if (this.map !== null) {
      this.map.remove();
    }

    

    let map = L.map("map").setView([lat, lng], zoom);
    this.map = map;

    

    
    // found from stack overflow on custom map styling
    // https://stackoverflow.com/questions/34072237/how-can-i-use-a-custom-created-mapbox-style-along-with-leaflet

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 16,
        id: "mapbox/streets-v10",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: MAP_KEY,
      }
    ).addTo(map);

    

    

    // Creates a red marker with the coffee icon
    const typeOfPlace = L.AwesomeMarkers.icon({
      icon: "thumbtack",
      prefix: "fa",
      markerColor: "blue",
    });
    const marker = L.marker([lat, lng], { icon: typeOfPlace }).addTo(map);
    marker.bindPopup("Current Location: Charlottesville, VA");
    L.circle([lat, lng], {
      className: "pulse",
      color: "lightblue",
      fillColor: "#00f",
      fillOpacity: 0.05,
      radius: 3000,
    }).addTo(map);
  };

  



  
  setMarkers(options) {
    // changing the marker logo to the proper type depending on the type of place
    for (let i = 0; i < options.length; i++) {
      let type = "";
      for (let j = 0; j < options[i].types.length; j++) {
        // base case
        if (type === "") {
          type = "utensils";
        }
        if (options[i].types[j] == "cafe") {
          type = "coffee";
          
        } else if (options[i].types[j] == "restaurant") {
          type = "utensils";
        } else if (options[i].types[j] == "bar") {
          type = "beer";
          
        }
        if (type !== "") {
          j = options[i].types.length;
        }
      }

      // a valiant attempt at trying to replace "undefined" in the marker information
      // with a more informative way of telling the user the info is not available
      let priceLevel = "";
      for (let k = 0; k < options[i].length; k++) {
        if (options[i].price_level[k] == "") priceLevel = "$NA";
      }
      const typeOfPlace = L.AwesomeMarkers.icon({
        icon: type,
        prefix: "fa",
        markerColor: "red",
      });
      const mapMarker = L.marker(
        [options[i].geometry.location.lat, options[i].geometry.location.lng],
        { icon: typeOfPlace }
      ).addTo(this.map);
      mapMarker.bindPopup(
        options[i].name +
          " | " +
          options[i].rating +
          " stars | " +
          options[i].price_level
      );
    }
  }
}

export default Map;
