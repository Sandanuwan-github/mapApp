import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mapApp';

  map!: mapboxgl.Map;
  //style = 'mapbox://styles/mapbox/streets-v11';
  style = 'mapbox://styles/mapbox/streets-v12';
  lat = 10.746551;
  lng = 59.910742;
  mapStyle = 'naturalEarth';

  ngOnInit() {
    mapboxgl!.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      //zoom: 13,
      zoom: 8,
      center: [this.lat, this.lng],
    });

    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      'Hi sanda'
    )

    new mapboxgl.Marker().setLngLat([this.lat, this.lng]).addTo(this.map).setPopup(popup);

    this.map.setProjection('globe');
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
