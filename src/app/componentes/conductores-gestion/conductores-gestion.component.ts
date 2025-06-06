import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-conductores-gestion',
  imports: [RouterLink],
  templateUrl: './conductores-gestion.component.html',
  styleUrl: './conductores-gestion.component.css'
})
export class ConductoresGestionComponent {

  conductores =  [
    { id: 1, apellido: "González", nombre: "Martín", DNI: 73621498, numeroRegistro: "123456", fechaNacimiento: "1985-12-04" },
    { id: 2, apellido: "Rodríguez", nombre: "Laura", DNI: 47283794, numeroRegistro: "123457", fechaNacimiento: "1990-05-01" },
    { id: 3, apellido: "Fernández", nombre: "Pablo", DNI: 92837461, numeroRegistro: "123458", fechaNacimiento: "1978-04-11" },
    { id: 4, apellido: "López", nombre: "Camila", DNI: 62938475, numeroRegistro: "123459", fechaNacimiento: "1992-09-04" },
    { id: 5, apellido: "Martínez", nombre: "Javier", DNI: 12837462, numeroRegistro: "123460", fechaNacimiento: "1987-10-02" },
    { id: 6, apellido: "Pérez", nombre: "Mariana", DNI: 79462738, numeroRegistro: "123461", fechaNacimiento: "1995-12-12" },
    { id: 7, apellido: "Sánchez", nombre: "Nicolás", DNI: 32874692, numeroRegistro: "123462", fechaNacimiento: "1983-08-03" },
    { id: 8, apellido: "Romero", nombre: "Julieta", DNI: 67102854, numeroRegistro: "123463", fechaNacimiento: "1989-03-05" },
    { id: 9, apellido: "Herrera", nombre: "Tomás", DNI: 58392016, numeroRegistro: "123464", fechaNacimiento: "1975-08-11" },
    { id: 10, apellido: "Castro", nombre: "Valentina", DNI: 49382076, numeroRegistro: "123465", fechaNacimiento: "1993-01-08" }
];
  
}
