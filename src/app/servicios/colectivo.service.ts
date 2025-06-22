import { Injectable } from '@angular/core';
import { Colectivo } from '../modelos/colectivo'; 

@Injectable({
  providedIn: 'root'
})
export class ColectivoService {

  colectivos: Colectivo[];
  private nuevoId: number = 0;

  constructor() {
    this.colectivos = this.obtenerColectivos() || []; // Carga inicial de colectivos

    if (this.colectivos.length === 0) {
      this.nuevoId = 1; 
    } else {
      let maxId = 0;
      this.colectivos.forEach(colectivo => {
        if (colectivo.id && colectivo.id > maxId) {
          maxId = colectivo.id;
        }
      });
      this.nuevoId = maxId + 1;
    }
  }

  public obtenerColectivos(): Colectivo[] {
    let localStorageColectivos = localStorage.getItem('colectivos');


    return localStorageColectivos == null ? [
      new Colectivo('ABC 123', 'Mercedes Benz Citaro', 2018, 50, 1),
      new Colectivo('XYZ 456', 'Scania K310', 2020, 45, 2),
      new Colectivo('DEF 789', 'Volvo B8RLE', 2017, 60, 3),
      new Colectivo('GHI 012', 'Agrale MT 17.0 LE', 2019, 48, 4),
      new Colectivo('JKL 345', 'IVECO Bus Cityclass', 2021, 55, 5),
    ] : JSON.parse(localStorageColectivos).map((item: any) =>
      new Colectivo(item.patente, item.modelo, item.anioFabricacion, item.capacidadPasajeros, item.id)
    );
  }

  public guardarColectivo(colectivo: Colectivo): void {
    let colectivosActuales = this.obtenerColectivos(); 

    if (colectivo.id != null && colectivosActuales.some(c => c.id === colectivo.id)) {
    
      colectivosActuales = colectivosActuales.map(c => c.id === colectivo.id ? colectivo : c);
    } else {
    
      colectivo.id = this.nuevoId++;
      colectivosActuales.push(colectivo);
    }

    this.guardarColectivosEnLocalStorage(colectivosActuales); 
  }

  public borrarColectivo(id: number): void {
    let colectivosActuales = this.obtenerColectivos();
    colectivosActuales = colectivosActuales.filter((c) => c.id !== id); 
    this.guardarColectivosEnLocalStorage(colectivosActuales); 
  }

  private guardarColectivosEnLocalStorage(colectivos: Colectivo[]): void {
    localStorage.setItem('colectivos', JSON.stringify(colectivos));
    this.colectivos = colectivos;
  }
}