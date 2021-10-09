var map;

function initMap() {
  myCoordinates = {
    lat: 41.7167,
    lng: -87.7063
  };
  map = new google.maps.Map(document.getElementById('map'), {
    center: myCoordinates,
    zoom: 8,
    mapTypeId: 'satellite',
  });
}

// To add the marker to the map, call setMap();
window.addEventListener('load', initMap);
