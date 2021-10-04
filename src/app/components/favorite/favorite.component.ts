import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { ButtonConfig, ButtonType, ColorButtonType } from 'src/app/models/button.config';
import { Store } from '@ngxs/store';
import { FavoriteActions } from 'src/app/state/favorite.actions';
import { Favorite } from 'src/app/models/favorite.model';
import { FavoriteSelectors } from 'src/app/state/favorite.selectors';
import * as _ from 'lodash';

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

  readonly columns: string[] = [
    'X', 'Y', 'Label', 'Title', 'Info'
  ];
  readonly fields: string[] = [
    'lat', 'lng', 'label', 'title', 'info'
  ]
  readonly rowButtons: ButtonConfig[] = [
    {
      id: 'INFO',
      type: ButtonType.ICON,
      icon: 'open_in_new'
    },
    {
      id: 'DELETE',
      type: ButtonType.ICON,
      icon: 'delete'
    }
  ]

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store
  ) { }

  ngOnInit() {
    this.setCenter();
    this.subscription.add(
      this.breakpointObserver.observe([this.maxWidth]).subscribe(
        result => this.handleMaxWidthSubscribe(result?.matches)
      )
    );
    this.subscription.add(
      this.store.select(FavoriteSelectors.favorites).subscribe(favorites => this.handleFavorites(favorites))
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
    const marker: Favorite = {
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
    }
    this.markers.push(marker);
    this.store.dispatch(new FavoriteActions.Create(marker));
  }

  // todo - add ngxs actions
  listButtonClicked(event) {
    const eventMarker = event.value;
    const markerId = this.markers.find(marker => marker.position.lat === eventMarker.lat && marker.position.lng === eventMarker.lng)?.id;
    switch (event.button.id) {
      case 'INFO':
        break;
      case 'DELETE':
        this.store.dispatch(new FavoriteActions.Delete(markerId));
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

  handleFavorites(favorites: Favorite[]) {
    this.markers = _.cloneDeep(favorites);
    this.markersWrapper = this.markers.map(marker => {
      return {
        lat: marker.position?.lat,
        lng: marker.position?.lng,
        label: marker.label?.text,
        title: marker.title,
        info: marker.info
      }
    })
  }

}
