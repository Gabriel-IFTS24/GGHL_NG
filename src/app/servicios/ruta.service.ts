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

    // this.inicializarNuevoId()
    if( this.rutas.length == 0){
      this.nuevoId = 1;
    }else{
      const ultimaRuta = this.rutas[this.rutas.length - 1];
      
      if(ultimaRuta && ultimaRuta.id !== undefined) {
        this.nuevoId = ultimaRuta.id + 1;
        console.log("nueva ruta", ultimaRuta)
      } else {
        this.nuevoId = 1;
      }
    }

  }
  // private inicializarNuevoId(): void{
  //   const rutasExistentes = this.obtenerRutas();
  //   if(rutasExistentes.length > 0){
  //     this.nuevoId = Math.max(...rutasExistentes.map(r => r.id || 0)) + 1;
  //   } else{
  //     this.nuevoId = 1;
  //   }
  // }

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
      { id: 1, nombre: "Ruta Atlántica", origen: "Buenos Aires (CABA)", destino: "Mar del Plata", distanciaKm: 415, colectivo: "ABC 123 - González Martín" },
      { id: 2, nombre: "Ruta de los Lagos", origen: "Bariloche", destino: "San Martín de los Andes", distanciaKm: 190, colectivo: "XYZ 456 - Rodríguez Laura" },
      { id: 3, nombre: "Ruta Andina", origen: "Mendoza", destino: "Salta", distanciaKm: 1250, colectivo: "DEF 789 - Fernández Pablo" },
      { id: 4, nombre: "Ruta Patagónica", origen: "El Calafate", destino: "Ushuaia", distanciaKm: 860, colectivo: "GHI 012 - López Camila" },
      { id: 5, nombre: "Ruta del Norte", origen: "Salta", destino: "Puerto Iguazú", distanciaKm: 1480, colectivo: "JKL 345 - Martínez Javier" },
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
