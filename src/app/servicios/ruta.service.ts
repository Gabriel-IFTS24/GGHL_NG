import { Injectable } from '@angular/core';
import { Ruta } from '../modelos/ruta';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  rutas: Ruta[];
  private nuevoId: number = 0;

  constructor() { 
    this.rutas = this.obtenerRutas() || []


  }
  public obtenerRutas(): Ruta[] {
    let localStorageRutas = localStorage.getItem('rutas');

    return localStorageRutas == null ? [
      { id: 1, origen: "Buenos Aires", destino: "Córdoba", distanciaKm: 700 },
      { id: 2, origen: "Córdoba", destino: "Mendoza", distanciaKm: 500},
      { id: 3, origen: "Mendoza", destino: "Santiago", distanciaKm: 360},
      { id: 4, origen: "Buenos Aires", destino: "Rosario", distanciaKm: 300},
      { id: 5, origen: "Rosario", destino: "Santa Fe", distanciaKm: 170}
    ] : JSON.parse(localStorageRutas);
  }

  public guardarRuta( ruta: Ruta): void {
    let rutas = this.obtenerRutas();

    if (ruta.id != null && rutas.some( r => r.id === ruta.id)){
      // Ya existe: actualizar
      rutas = rutas.map(r => r.id === ruta.id ? ruta : r);
    }else{
      // No existe: asignar nuevo ID y agregar
      ruta.id = this.nuevoId++;
      rutas.push(ruta);
    }

    this.guardarTodasLasRutas(rutas);
  }

  public borrarRuta(id: number): void {
    let rutas = this.obtenerRutas();
    rutas = rutas.filter(ruta => ruta.id !== id);
    this.guardarTodasLasRutas(rutas);
  }

  public guardarTodasLasRutas(rutas: Ruta[]): void {
    localStorage.setItem('rutas', JSON.stringify(rutas))
  }

  
}
