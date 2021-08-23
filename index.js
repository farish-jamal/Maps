mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyaXNoMTIyMiIsImEiOiJja3M1amFxeTQyZ2kyMnFtcnB1bWxpbTF6In0.PHUtYjGv2zMBkuRk2a-zSA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
  console.log(position);
  setupMaps([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
   setupMaps([-2.24, 53.48])
}

function setupMaps(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center : center,
        zoom: 13
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1IjoiZmFyaXNoMTIyMiIsImEiOiJja3M1amFxeTQyZ2kyMnFtcnB1bWxpbTF6In0.PHUtYjGv2zMBkuRk2a-zSA',
        unit: 'metric',
        profile: 'mapbox/cycling'
      });
      map.addControl(directions, "top-left")
}