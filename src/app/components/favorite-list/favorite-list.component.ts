import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableButton, TableButtonEmit } from 'src/app/models/table-button.model';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  @Input() buttons: TableButton[] = [];
  @Input() columns: string[] = [];
  @Input() data: any[] = []
  @Input() fieldsName: string[] = [];
  @Output() buttonClicked = new EventEmitter<TableButtonEmit>();

  constructor() { }

  ngOnInit() {
  }

  buttonClick(button: TableButton, value: any) {
    this.buttonClicked.emit({ button, value });
  }

  getFieldType(value: any) {
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
