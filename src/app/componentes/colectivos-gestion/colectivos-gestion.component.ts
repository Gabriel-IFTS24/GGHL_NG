import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ColectivoService } from '../../servicios/colectivo.service';

@Component({
  selector: 'app-colectivos-gestion',
  imports: [RouterLink],
  templateUrl: './colectivos-gestion.component.html',
  styleUrl: './colectivos-gestion.component.css'
})
export class ColectivosGestionComponent {

  // Creo el array
  colectivos: any[] = [];

  // Inyecto el servicio en el constructor
  constructor(private ColectivoService: ColectivoService) { }

  ngOnInit(): void {
    // Llamo a la función 'obtenerConductores' del servicio
    this.colectivos = this.ColectivoService.obtenerColectivos();
  }

  borrarColectivo(id: number): void {
    if (confirm(`¿Está seguro que desea eliminar el colectivo ${id}?`)) {
      this.ColectivoService.borrarColectivo(id);
      this.colectivos = this.ColectivoService.obtenerColectivos();
      }
    }
}
