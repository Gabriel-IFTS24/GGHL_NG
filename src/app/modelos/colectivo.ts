export class Colectivo {
  id?: number;
  patente: string;
  modelo: string;
  anioFabricacion: number;
  capacidadPasajeros: number;
  conductor?: string;

  constructor(
    patente: string,
    modelo: string,
    anioFabricacion: number,
    capacidadPasajeros: number,
    conductor?: string,
    id?: number

  ) {
    this.patente = patente;
    this.modelo = modelo;
    this.anioFabricacion = anioFabricacion;
    this.capacidadPasajeros = capacidadPasajeros;
    this.conductor = conductor;
    this.id = id;
  }
}

// export const listaColectivos: Colectivo[] = [
//   new Colectivo('ABC 123', 'Mercedes Benz Citaro', 2018, 50, 'González Martín', 1),
//   new Colectivo('XYZ 456', 'Scania K310', 2020, 45, 'Rodríguez Laura', 2),
//   new Colectivo('DEF 789', 'Volvo B8RLE', 2017, 60, 'Fernández Pablo', 3),
//   new Colectivo('GHI 012', 'Agrale MT 17.0 LE', 2019, 48, 'López Camila', 4),
//   new Colectivo('JKL 345', 'IVECO Bus Cityclass', 2021, 55, 'Martínez Javier', 5),
// ];