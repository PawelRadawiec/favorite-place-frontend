import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClickEvent(event) {
    this.onClick.emit(event)
  }

}
