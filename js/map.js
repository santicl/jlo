const token = 'pk.eyJ1Ijoic2FudHlkZXZjdGciLCJhIjoiY2xxMmY5NGd5MDBvdjJqcHF2YWlpZjV4dSJ9.5uEf7MqVwiU0x3l0po9WBg';

mapboxgl.accessToken = token;

const LONGITUD = -75.536554;
const LATITUD = 10.411883;

const containerMap = document.getElementById('map-container');
console.log(containerMap, mapboxgl.accessToken)

var map = new mapboxgl.Map({
  container: containerMap,
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [LONGITUD, LATITUD],
  zoom: 15
});

var marker = new mapboxgl.Marker()
  .setLngLat([LONGITUD, LATITUD])
  .addTo(map);
