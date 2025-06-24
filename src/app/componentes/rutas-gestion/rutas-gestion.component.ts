import { Component } from '@angular/core';
import { RutaService } from '../../servicios/ruta.service';
import { ConductorService } from '../../servicios/conductor.service';
import { Conductor } from '../../modelos/conductor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rutas-gestion',
  imports: [RouterLink],
  templateUrl: './rutas-gestion.component.html',
  styleUrl: './rutas-gestion.component.css'
})
export class RutasGestionComponent {

  rutas: any[] = [];

  // Inyectamos el servicio en el constructor
  constructor(private rutaService: RutaService){}

  ngOnInit(): void {
    // Llamamos a la función 'obtenerConductores' del servicio
    this.rutas = this.rutaService.obtenerRutas();
  }

  borrarRuta(id: number): void {
    if(confirm(`¿Está seguro que desea eliminar la ruta ${id} ?`)){
      this.rutaService.borrarRuta(id);
      this.rutas = this.rutaService.obtenerRutas();
    }
  }
}
