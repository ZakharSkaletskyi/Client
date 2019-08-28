import {Component, OnInit} from '@angular/core';
import {LatLngBounds} from '@agm/core';
import {Marker} from '../../entity/marker';
import {PlaceServiceService} from '../../services/place-service.service';
import {MapsBoundsDto} from '../../entity/mapsBoundsDto';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  button = false;
  mapBoundsDto: MapsBoundsDto;
  searchText;
  lat = 49.841795;
  lng = 24.031706;
  zoom = 13;
  markers: Marker[] = [
    {
      name: 'aaaaa',
      lat: 49.840382,
      lng: 24.023712,
    },
    {
      name: 'bbbbb',
      lat: 49.840315,
      lng: 24.027729,

    },
    {
      name: 'ccccc',
      lat: 49.838312,
      lng: 24.031530,
    }
  ];

  constructor(private placeService: PlaceServiceService) {
  }

  zoomChange(event) {
    console.log('zoom is change ');
    console.log(event);
  }

  ngOnInit() {
    this.setCurrentLocation();
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 13;
      });
    }
  }


  boundsChange(latLngBounds: LatLngBounds) {
    if (this.markers.length !== 1) {
      console.log('here');
      console.log(latLngBounds.getNorthEast().lat());
      console.log(latLngBounds.getNorthEast().lng());
      console.log(latLngBounds.getSouthWest().lat());
      console.log(latLngBounds.getSouthWest().lng());
      this.mapBoundsDto.neLat = latLngBounds.getNorthEast().lat();
      this.mapBoundsDto.neLng = latLngBounds.getNorthEast().lng();
      this.mapBoundsDto.swLat = latLngBounds.getSouthWest().lat();
      this.mapBoundsDto.swLng = latLngBounds.getSouthWest().lng();
    }
    console.log('size 1');
  }

  setMarker(marker: any) {
    this.button = true;
    console.log(marker);
    this.markers = null;
    this.markers = [marker];
  }

  showAll() {
    console.log('theeeeeee');
    this.button = false;
    this.ngOnInit();
    this.markers = [
      {
        name: 'aaaaa',
        lat: 49.840382,
        lng: 24.023712,
      },
      {
        name: 'bbbbb',
        lat: 49.840315,
        lng: 24.027729,

      },
      {
        name: 'ccccc',
        lat: 49.838312,
        lng: 24.031530,
      }];
    this.searchText = null;
  }
}
