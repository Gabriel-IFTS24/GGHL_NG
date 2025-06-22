import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms'
import { Ruta } from '../../modelos/ruta';
import { RutaService } from '../../servicios/ruta.service';

@Component({
  selector: 'app-rutas-alta',
  imports: [ReactiveFormsModule],
  templateUrl: './rutas-alta.component.html',
  styleUrl: './rutas-alta.component.css'
})
export class RutasAltaComponent {

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
  })

  constructor(private rutaService: RutaService){ }

  agregarRuta(): void {
    if(this.rutaForm.valid){
      const nuevaRuta: Ruta ={
        id: 0,
        nombre: this.rutaForm.value.nombre ?? '',
        origen: this.rutaForm.value.origen ?? '',
        destino: this.rutaForm.value.destino ?? '',
        distanciaKm: this.rutaForm.value.distanciaKm ?? 0
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
