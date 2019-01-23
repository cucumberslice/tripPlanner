const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken =
  "pk.eyJ1Ijoid2FuZ2R6aSIsImEiOiJjanI4a3F0dmMwN3B1NDRydnE5N2Fscm84In0.9Tdv4bYU0qFnuzGacVaknQ";




const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
});


module.exports = {map}