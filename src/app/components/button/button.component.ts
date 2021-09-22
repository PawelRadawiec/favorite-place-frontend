import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabelButtonType } from 'src/app/models/table-button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() type: TabelButtonType;
  @Input() icon: string;
  @Output() onClick = new EventEmitter<any>();

  backgrund: string;
  isIcon: boolean;

  constructor() { }

  ngOnInit() {
    this.isIcon = (this.icon && this.icon.length > 0);
    if (!this.isIcon) {
      this.backgrund = this.getBackground();
    }
  }

  onClickEvent(event) {
    this.onClick.emit(event)
  }

  getBackground() {
    let background;
    switch (this.type) {
      case TabelButtonType.INFO:
        background = 'button-info';
        break;
      case TabelButtonType.WARN:
        background = 'button-warn';
        break;
      case TabelButtonType.DANGER:
        background = 'button-danger';
        break;
      default:
        background = 'button-info';
    }
    return background;
  }

}
