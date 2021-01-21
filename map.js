let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {Lat: 43.0056, lng: -81.2760},
        zoom: 15,
    });
}