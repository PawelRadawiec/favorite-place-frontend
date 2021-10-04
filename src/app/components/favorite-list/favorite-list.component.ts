import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonConfig } from 'src/app/models/button.config';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  @Input() buttons: ButtonConfig[] = [];
  @Input() columns: string[] = [];
  @Input() data: any[] = []
  @Input() fieldsName: string[] = [];
  @Output() buttonClicked = new EventEmitter<{ button: ButtonConfig, value: any }>();

  constructor() { }

  ngOnInit() {
  }

  buttonClick(button: ButtonConfig, value: any) {
    this.buttonClicked.emit({ button, value });
  }

}
