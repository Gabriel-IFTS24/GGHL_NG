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
