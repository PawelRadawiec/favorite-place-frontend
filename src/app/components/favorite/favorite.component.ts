import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit, OnDestroy {
  width: string;
  height: string
  readonly maxWidth = '(max-width: 40rem)';
  private subscription = new Subscription();

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.subscription.add(
      this.breakpointObserver.observe([this.maxWidth]).subscribe(
        result => this.handleMaxWidthSubscribe(result?.matches)
      )
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private handleMaxWidthSubscribe(matches: boolean) {
    this.width = matches ? '300px' : '700px';
    this.height = matches ? '300px' : '500px';
  }

}
