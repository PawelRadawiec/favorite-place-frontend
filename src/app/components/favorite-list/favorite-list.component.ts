import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  @Input() data: any[] = []
  @Input() columns: string[] = [];
  @Input() fieldsName: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  getFieldType(value: string) {
    let type = null;
    if (typeof value === 'number') {
      type = 'number'
    }
    if (typeof value === 'string') {
      type = 'string'
    }
    return type;
  }

}
