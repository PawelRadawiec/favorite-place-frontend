import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { TabelButtonType } from 'src/app/models/table-button.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit, OnDestroy {
  markers = [];
  markersWrapper = [];
  width: string;
  height: string
  readonly maxWidth = '(max-width: 40rem)';
  center: google.maps.LatLngLiteral
  private subscription = new Subscription();

  columns = [
    'X', 'Y', 'Label', 'Title', 'Info'
  ];

  fields = [
    'lat', 'lng', 'label', 'title', 'info'
  ]

  rowButtons = [
    {
      code: 'INFO',
      type: TabelButtonType.INFO,
      label: 'Info',
      icon: 'open_in_new'
    },
    {
      code: 'DELETE',
      type: TabelButtonType.DANGER,
      label: 'Delete',
      icon: 'delete'
    }
  ]

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.setCenter();
    this.subscription.add(
      this.breakpointObserver.observe([this.maxWidth]).subscribe(
        result => this.handleMaxWidthSubscribe(result?.matches)
      )
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  click(event: google.maps.MapMouseEvent) {
    const lat = event?.latLng?.lat();
    const lng = event?.latLng?.lng();
    const label = 'Label test' + (this.markers.length + 1);
    const title = 'Title test' + (this.markers.length + 1);
    const info = 'Marker info test ' + (this.markers.length + 1);
    this.markersWrapper.push({ lat, lng, label, title, info });
    this.markers.push({
      position: { lat, lng },
      label: {
        color: 'red',
        text: label,
      },
      title,
      info,
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    })
  }

  // todo - add ngxs actions
  listButtonClicked(event) {
    switch (event.button.code) {
      case 'INFO':
        break;
      case 'DELETE':
        this.markers = this.markers.filter(marker => marker.position.lat !== event.value.lat && marker.position.lng !== event.value.lng);
        this.markersWrapper = this.markersWrapper.filter(marker => marker !== event.value);
        break;
    }
  }

  setCenter() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  private handleMaxWidthSubscribe(matches: boolean) {
    this.width = matches ? '300px' : '900px';
    this.height = matches ? '300px' : '500px';
  }

}
