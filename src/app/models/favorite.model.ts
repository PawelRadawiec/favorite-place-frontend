
export interface Favorite {
    id: string;
    position: Position;
    label: Label;
    title: string;
    info: string;
    options: FavoriteOptions;
}

export interface Position {
    lat: number;
    lng: number;
}

export interface Label {
    color: string;
    text: string;
}

export interface FavoriteOptions {
    animation: string;
}