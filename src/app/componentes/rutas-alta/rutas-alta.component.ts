import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms'
import { Ruta } from '../../modelos/ruta';
import { RutaService } from '../../servicios/ruta.service';

// Esto hay que cambiarlo a colectivos
// import { ConductorService } from '../../servicios/conductor.service';
// import { Conductor } from '../../modelos/conductor';

// prueba de colectivo
import { ColectivoService } from '../../servicios/colectivo.service';
import { Colectivo } from '../../modelos/colectivo';
@Component({
  selector: 'app-rutas-alta',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './rutas-alta.component.html',
  styleUrl: './rutas-alta.component.css'
})
export class RutasAltaComponent implements OnInit{

  lista = [
    'Buenos Aires (CABA)',
    'La Plata',
    'Mar del Plata',
    'Bahía Blanca',
    'Tandil',
    'Olavarría',
    'Junín',
    'Pergamino',
    'San Nicolás de los Arroyos',
    'Luján',
    'Necochea',
    'Zárate',
    'Campana',
    'Pinamar',
    'Villa Gesell',
    'Chivilcoy',
    'Mercedes',
    'Azul',
    'Tres Arroyos',
    'Balcarce',
    'Morón',
    'Avellaneda',
    'Lanús',
    'Quilmes',
    'San Isidro',
    'Tigre',
    'San Fernando',
    'Lomas de Zamora',
    'Florencio Varela',
    'Berazategui',
    'La Matanza'
  ];

  public rutaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    origen: new FormControl('', Validators.required),
    destino: new FormControl('', Validators.required),
    distanciaKm: new FormControl(0, [Validators.required, Validators.min(1)]),
    colectivo: new FormControl('', Validators.required)
  })

  // Esto hay que cambiarlo a colectivos
  // constructor(private rutaService: RutaService,  private conductorService: ConductorService){ }
  constructor(private rutaService: RutaService,  private colectivoService: ColectivoService){ }

  // Esto hay que cambiarlo a colectivos
  // conductores: Conductor[] = [];
  // conductorSeleccionado: string = '';
  colectivos: Colectivo[] = [];
  colectivoSeleccionado: string = '';

  // Esto hay que cambiarlo a colectivos
  ngOnInit(): void {
    // this.conductores = this.conductorService.obtenerConductores();
    this.colectivos = this.colectivoService.obtenerColectivos();
  }

    // Esto hay que cambiarlo a colectivos
    // seleccionarConductor(event: Event): void {
    //   const selectElement = event.target as HTMLSelectElement;
    //   this.conductorSeleccionado = selectElement.value;
      
    // }
    seleccionarColectivo(event: Event): void {
      const selectElement = event.target as HTMLSelectElement;
      this.colectivoSeleccionado = selectElement.value;
      
    }

  agregarRuta(): void {
    if(this.rutaForm.valid){
      const nuevaRuta: Ruta ={
        id: 0,
        nombre: this.rutaForm.value.nombre ?? '',
        origen: this.rutaForm.value.origen ?? '',
        destino: this.rutaForm.value.destino ?? '',
        distanciaKm: this.rutaForm.value.distanciaKm ?? 0,
        colectivo: this.rutaForm.value.colectivo ?? '',
      }

      this.rutaService.guardarRuta(nuevaRuta);

      console.log(this.rutaForm.value)
      
      this.rutaForm.reset();
      alert('Ruta agregada con exito!');
      
    } else {
      alert('Por favor, complete todos los campos correctamente.');
      this.rutaForm.markAllAsTouched();
    }
  }
}
