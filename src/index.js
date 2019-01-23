const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken =
  "pk.eyJ1Ijoid2FuZ2R6aSIsImEiOiJjamdvNTB4YjkxZDQyMndybWhyenZxcXVuIn0.wCNqcCBSTcUiti67qxmzdw";

const map = new mapboxgl.Map({
    container: 'map',
    center: [-74.0009, 40.705], //Fullstack NY coordinates;
    zoom: 12, //starting zoom
    style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available
})