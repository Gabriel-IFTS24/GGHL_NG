export class Colectivo {
  id?: number;
  patente: string;
  modelo: string;
  anioFabricacion: number;
  capacidadPasajeros: number;

  constructor(
    patente: string,
    modelo: string,
    anioFabricacion: number,
    capacidadPasajeros: number,
    id?: number
  ) {
    this.patente = patente;
    this.modelo = modelo;
    this.anioFabricacion = anioFabricacion;
    this.capacidadPasajeros = capacidadPasajeros;
    this.id = id;
  }
}
export const listaColectivos: Colectivo[] = [
  new Colectivo('ABC 123', 'Mercedes Benz Citaro', 2018, 50, 1),
  new Colectivo('XYZ 456', 'Scania K310', 2020, 45, 2),
  new Colectivo('DEF 789', 'Volvo B8RLE', 2017, 60, 3),
  new Colectivo('GHI 012', 'Agrale MT 17.0 LE', 2019, 48, 4),
  new Colectivo('JKL 345', 'IVECO Bus Cityclass', 2021, 55, 5),
];