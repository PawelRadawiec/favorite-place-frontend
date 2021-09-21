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

  testColumns = [
    'X', 'Y', 'label', 'title', 'info'
  ];

  testFields = [
    'lat', 'lng', 'label', 'title', 'info'
  ]

  buttonsTest = [
    {
      type: TabelButtonType.INFO,
      label: 'Delete'
    },
    {
      type: TabelButtonType.INFO,
      label: 'Info'
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

  addMarker() {
    this.markersWrapper.push({
      lat: this.center.lat + ((Math.random() - 0.5) * 2) / 30,
      lng: this.center.lng + ((Math.random() - 0.5) * 2) / 30,
      label: 'Label test' + (this.markers.length + 1),
      title: 'Title test' + (this.markers.length + 1),
      info: 'Marker info test ' + (this.markers.length + 1),
    });
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 30,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 30,
      },
      label: {
        color: 'red',
        text: 'Label test' + (this.markers.length + 1),
      },
      title: 'Title test' + (this.markers.length + 1),
      info: 'Marker info test ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    })
  }

  // todo - delete
  click(event) {
    console.log('event: ', event);
  }

  // todo - delete
  listButtonClicked(event) {
    console.log('event: ', event);
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
