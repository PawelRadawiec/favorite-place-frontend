export enum TabelButtonType {
    WARN = 'WARN',
    DANGER = 'DANGER',
    INFO = 'INFO'
}

export interface TableButton {
    label: string;
    type: TabelButtonType;
}

export interface TableButtonEmit {
    button: TableButton;
    value: any;
}
