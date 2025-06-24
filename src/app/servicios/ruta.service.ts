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

    this.guardarTodasLasRutas(this.rutas)

    this.inicializarNuevoId()
    // if( this.rutas.length === 0){
    //   this.nuevoId = 1;
    // }else{
    //   const ultimaRuta = this.rutas[this.rutas.length - 1];
      
    //   if(ultimaRuta && ultimaRuta.id !== undefined) {
    //     this.nuevoId = ultimaRuta.id + 1;
    //     console.log("nueva ruta", ultimaRuta)
    //   } else {
    //     this.nuevoId = 1;
    //   }
    // }

  }
  private inicializarNuevoId(): void{
    const rutasExistentes = this.obtenerRutas();
    if(rutasExistentes.length > 0){
      this.nuevoId = Math.max(...rutasExistentes.map(r => r.id || 0)) + 1;
    } else{
      this.nuevoId = 1;
    }
  }

  public obtenerRutas(): Ruta[] {
    let localStorageRutas = localStorage.getItem('rutas');

    // return localStorageRutas == null ? [
    //   { id: 1, origen: "Buenos Aires", destino: "Córdoba", distanciaKm: 700 },
    //   { id: 2, origen: "Córdoba", destino: "Mendoza", distanciaKm: 500},
    //   { id: 3, origen: "Mendoza", destino: "Santiago", distanciaKm: 360},
    //   { id: 4, origen: "Buenos Aires", destino: "Rosario", distanciaKm: 300},
    //   { id: 5, origen: "Rosario", destino: "Santa Fe", distanciaKm: 170}
    // ] : JSON.parse(localStorageRutas);

    return localStorageRutas == null ? [
      { id: 1, nombre: "Ruta de la Costa", origen: "Mar del Plata", destino: "Villa Gesell", distanciaKm: 100, colectivo: "PQR 678 - Gómez Núñez" },
      { id: 2, nombre: "Ruta Andina", origen: "Córdoba", destino: "Mendoza", distanciaKm: 500, colectivo: "DEF 456 - Pérez Rodríguez" },
      { id: 3, nombre: "Paso de los Andes", origen: "Mendoza", destino: "Santiago", distanciaKm: 360, colectivo: "GHI 789 - Fernández López" },
      { id: 4, nombre: "Ruta Pampeana", origen: "Buenos Aires", destino: "Rosario", distanciaKm: 300, colectivo: "JKL 012 - García Sánchez" },
      { id: 5, nombre: "Litoral Express", origen: "Rosario", destino: "Santa Fe", distanciaKm: 170, colectivo: "MNO 345 - Díaz Martínez" }
    ] : JSON.parse(localStorageRutas);
  }

  public guardarRuta( ruta: Ruta): void {
    let rutas = this.obtenerRutas();
    
    if (ruta.id != null && rutas.some( r => r.id === ruta.id)){
      console.log('existe')
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
