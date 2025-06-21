import { Component, inject, OnInit, Input } from '@angular/core';
import { Conductor, listaConductores } from '../../modelos/conductor';

@Component({
  selector: 'app-conductores-detalle',
  imports: [],
  templateUrl: './conductores-detalle.component.html',
  styleUrl: './conductores-detalle.component.css'
})
export class ConductoresDetalleComponent  implements OnInit{
  conductor?: Conductor
  @Input() public id?: number // Con el withComponentInputBinding no hay que hacer todo el lío para subscribir y obtener el param
  
  ngOnInit(): void {
    this.conductor = listaConductores.find(conductor => conductor.id == this.id);
  }
}
