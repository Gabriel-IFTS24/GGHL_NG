import { Component, inject, OnInit } from '@angular/core';
import { Conductor, listaConductores } from '../../modelos/conductor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conductores-detalle',
  imports: [],
  templateUrl: './conductores-detalle.component.html',
  styleUrl: './conductores-detalle.component.css'
})
export class ConductoresDetalleComponent  implements OnInit{
  conductor?: Conductor
  listadoDeConductores = listaConductores;
  
  private _route = inject(ActivatedRoute)

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.conductor = listaConductores.find(conductor => conductor.id == params['id'])
    })
  }
}
