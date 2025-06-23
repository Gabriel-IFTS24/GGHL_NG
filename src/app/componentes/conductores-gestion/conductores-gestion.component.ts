import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConductorService } from '../../servicios/conductor.service';

@Component({
  selector: 'app-conductores-gestion',
  imports: [RouterLink],
  templateUrl: './conductores-gestion.component.html',
  styleUrl: './conductores-gestion.component.css'
})
export class ConductoresGestionComponent {
  
  conductores: any[] = [];

  // Inyecto el servicio en el constructor
  constructor(private conductorService: ConductorService) { }

  ngOnInit(): void {
    // Llamo a la función 'obtenerConductores' del servicio
    this.conductores = this.conductorService.obtenerConductores();
  }

    borrarConductor(id: number): void {
    if (confirm(`¿Está seguro que desea eliminar el conductor ${id}?`)) {
      this.conductorService.borrarConductor(id);
      this.conductores = this.conductorService.obtenerConductores();
      }
    }
}
