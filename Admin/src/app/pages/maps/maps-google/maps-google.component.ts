import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { GoogleMapsModule } from '@angular/google-maps';

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};

@Component({
  selector: 'app-maps-google',
  standalone: true,
  imports: [PageTitleComponent,GoogleMapsModule],
  templateUrl: './maps-google.component.html',
  styleUrl: './maps-google.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapsGoogleComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  longitude = 20.728218;
  latitude = 52.128973;
  zoom: number = 9;

  @Input() pitch: number = 10;
  @Input() scrollwheel: boolean = false;
  center: any;

  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Maps' },
      { label: 'Google Maps', active: true }
    ];
  }

  mapOptions: google.maps.MapOptions = {
    center: { lat: 48.8588548, lng: 2.347035 },
    zoom: 13,
  };

  markers: MarkerProperties[] = [
    { position: { lat: 48.8584, lng: 2.2945 } }, // Eiffel Tower
    { position: { lat: 48.8606, lng: 2.3376 } }, // Louvre Museum
    { position: { lat: 48.8530, lng: 2.3499 } }, // Cathédrale Notre-Dame de Paris
  ];

}

