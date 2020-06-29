export const map = function initMap() {
  let element = document.getElementById("map");
  let options = {
    zoom: 5,
    center: { lat: 49.06802, lng: 33.42041 },
  };
};
let myMap = new google.maps.Map(element, options);
