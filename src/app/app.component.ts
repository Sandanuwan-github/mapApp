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
  // if remove this. map will not show in browser (free difined core style)
  style = 'mapbox://styles/mapbox/streets-v12';
  lat = 10.746551;
  lng = 59.910742;

  ngOnInit() {
    // get access token
    mapboxgl!.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      // where need to show map. inside the div we can pass this map as id
      container: 'map',
      style: this.style,
      zoom: 8,
      // map start point
      center: [this.lat, this.lng],
    });

    // add pop up
    const popup = new mapboxgl.Popup({ offset: 25 }).setText('Hi sanda');

    // add pin
    new mapboxgl.Marker({
      color: '#eb4034',
      scale: 1.1
    })
      .setLngLat([this.lat, this.lng])
      .addTo(this.map)
      .setPopup(popup);

    // set map looks
    this.map.setProjection('globe');

    // Add map controls - zoom option
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
