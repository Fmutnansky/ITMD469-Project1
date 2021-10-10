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

function openNav() {
  document.getElementById("mySidebar").style.width = "33%";
  document.getElementById("main").style.marginLeft = "35%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

const $self = {
  constraints: { audio: false, video: true }
};

requestUserMedia($self.constraints);

async function requestUserMedia(constraints) {
  const video = document.querySelector('#self');
  $self.stream = await navigator.mediaDevices
    .getUserMedia(constraints);
  video.srcObject = $self.stream;
}
