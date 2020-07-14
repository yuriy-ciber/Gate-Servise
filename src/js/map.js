//pk.eyJ1IjoieXVyaXlsb2IiLCJhIjoiY2tjZzhtcG0yMHBvazJ4bTJqM3FoMWFyZyJ9.BkTzkYehQ8CdmA8sPSDduA

export const useMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoieXVyaXlsb2IiLCJhIjoiY2tjZzhtcG0yMHBvazJ4bTJqM3FoMWFyZyJ9.BkTzkYehQ8CdmA8sPSDduA";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
    center: [33.435362, 49.101218], // starting position [lng, lat]
    zoom: 15, // starting zoom
  });

  var marker = new mapboxgl.Marker()
    .setLngLat([33.435362, 49.101218])
    .addTo(map);
  var nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "top-left");
};
