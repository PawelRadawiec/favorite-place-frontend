import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonConfig, ButtonType, ColorButtonType } from 'src/app/models/button.config';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() config: ButtonConfig;
  @Output() onClick = new EventEmitter<any>();

  backgrund: string;
  isIcon: boolean;

  constructor() { }

  ngOnInit() {
    this.isIcon = (this.config.type === ButtonType.ICON);
    if (!this.isIcon) {
      this.backgrund = this.getBackground();
    }
  }

  onClickEvent(event) {
    this.onClick.emit(event)
  }

  getBackground() {
    let background;
    switch (this.config.colorType) {
      case ColorButtonType.INFO:
        background = 'button-info';
        break;
      case ColorButtonType.WARN:
        background = 'button-warn';
        break;
      case ColorButtonType.DANGER:
        background = 'button-danger';
        break;
      default:
        background = 'button-info';
    }
    return background;
  }

}
