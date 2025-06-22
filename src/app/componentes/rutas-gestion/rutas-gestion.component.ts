import { Component } from '@angular/core';
import { RutaService } from '../../servicios/ruta.service';

@Component({
  selector: 'app-rutas-gestion',
  imports: [],
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
}
