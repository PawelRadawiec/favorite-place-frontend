export interface ButtonConfig {
  id: string;
  type: ButtonType;
  colorType?: ColorButtonType;
  label?: string;
  icon?: string;
}

export enum ButtonType {
  BUTTON = 'BUTTON',
  ICON = 'ICON',
}

export enum ColorButtonType {
  WARN = 'WARN',
  DANGER = 'DANGER',
  INFO = 'INFO',
}
