import { Injectable } from '@angular/core';
import { Conductor } from '../modelos/conductor';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  conductores: Conductor[];
  private nuevoId: number = 0;
  
  constructor() { 
    this.conductores = this.obtenerConductores() || [];

  this.guardarConductores(this.conductores)

    if(this.conductores.length == 0){
      this.nuevoId = 0
    }
    else{
      let ultConductor = this.conductores[this.conductores.length - 1];

      if(ultConductor && ultConductor.id !== undefined){
      this.nuevoId = ultConductor.id + 1;}

    }
    
  }
  
  

  public obtenerConductores(): Conductor[] {
    let localStorageConductores = localStorage.getItem('conductores');

    return localStorageConductores == null ? [
      { id: 1, apellido: "González", nombre: "Martín", DNI: 73621498, numeroRegistro: 123456, fechaNacimiento: "1985-12-04" },
      { id: 2, apellido: "Rodríguez", nombre: "Laura", DNI: 47283794, numeroRegistro: 123457, fechaNacimiento: "1990-05-01" },
      { id: 3, apellido: "Fernández", nombre: "Pablo", DNI: 92837461, numeroRegistro: 123458, fechaNacimiento: "1978-04-11" },
      { id: 4, apellido: "López", nombre: "Camila", DNI: 62938475, numeroRegistro: 123459, fechaNacimiento: "1992-09-04" },
      { id: 5, apellido: "Martínez", nombre: "Javier", DNI: 12837462, numeroRegistro: 123460, fechaNacimiento: "1987-10-02" },
      { id: 6, apellido: "Pérez", nombre: "Mariana", DNI: 79462738, numeroRegistro: 123461, fechaNacimiento: "1995-12-12" },
      { id: 7, apellido: "Sánchez", nombre: "Nicolás", DNI: 32874692, numeroRegistro: 123462, fechaNacimiento: "1983-08-03" },
      { id: 8, apellido: "Romero", nombre: "Julieta", DNI: 67102854, numeroRegistro: 123463, fechaNacimiento: "1989-03-05" },
      { id: 9, apellido: "Herrera", nombre: "Tomás", DNI: 58392016, numeroRegistro: 123464, fechaNacimiento: "1975-08-11" },
      { id: 10, apellido: "Castro", nombre: "Valentina", DNI: 49382076, numeroRegistro: 123465, fechaNacimiento: "1993-01-08" }
  ] : JSON.parse(localStorageConductores);
  }

  public guardarConductor(conductor: Conductor): void {
    let conductores = this.obtenerConductores();
  
    if (conductor.id != null && conductores.some(c => c.id === conductor.id)) {
      // Ya existe: actualizar
      conductores = conductores.map(c => c.id === conductor.id ? conductor : c);
    } else {
      // No existe: asignar nuevo ID y agregar
      conductor.id = this.nuevoId++;
      conductores.push(conductor);
    }
  
    this.guardarConductores(conductores);
  }
  

  public borrarConductor(id: number){
    let conductores = this.obtenerConductores();

    conductores = conductores.filter((conductor)=> conductor.id != id);

    this.guardarConductores(conductores);
  }

  public guardarConductores(conductores: Conductor[]): void {
    localStorage.setItem('conductores', JSON.stringify(conductores))
  }

}

