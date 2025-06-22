export interface Provincia {
    centroide: Centroide;
    id:        string;
    nombre:    string;
}

export interface Centroide {
    lat: number;
    lon: number;
}