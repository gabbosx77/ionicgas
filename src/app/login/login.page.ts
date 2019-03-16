import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ionViewDidEnter() {

    /*Initializing Map*/
   mapboxgl.accessToken = 'pk.eyJ1IjoidmluejE5OTJhIiwiYSI6ImNqbTVnNWwyNDB6djMza24ybG91bTdydnEifQ.N-Y2oTV2cJg6W5iTCE5RfA';
   var map = new mapboxgl.Map({
   style: 'mapbox://styles/vinz1992a/cjsr2xt3o5f9b1fpot6n6bixe',
   center: [-103.349609, 20.659698], //guadalajara coordinates
   zoom: 16,
   pitch: 80,
   minZoom: 7.5, //restrict map zoom - buildings not visible beyond 13
   maxZoom: 17,
   container: 'map'
 });
 //codigo mapa 3d
 map.on('load', function() {
  map.addLayer({
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': {
              'type': 'identity',
              'property': 'height'
          },
          'fill-extrusion-base': {
              'type': 'identity',
              'property': 'min_height'
          },
          'fill-extrusion-opacity': .6
      }
  });
  
}); 
 //fin codigo mapa 3d
// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  trackUserLocation: true
  }));
}


  ngOnInit() {
  }

}
