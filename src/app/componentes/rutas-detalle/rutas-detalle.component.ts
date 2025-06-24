import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ruta } from '../../modelos/ruta';
import { RutaService } from '../../servicios/ruta.service';
import { Router } from '@angular/router';
import { ColectivoService } from '../../servicios/colectivo.service';
import { Colectivo } from '../../modelos/colectivo';

@Component({
  selector: 'app-rutas-detalle',
  imports: [ReactiveFormsModule],
  templateUrl: './rutas-detalle.component.html',
  styleUrl: './rutas-detalle.component.css'
})
export class RutasDetalleComponent implements OnInit{

ruta?: Ruta
@Input() public id?: number // Con el withComponentInputBinding no hay que hacer todo el lío para subscribir y obtener el param

public rutaForm!: FormGroup;

// Para el combobox de colectivo
colectivos: Colectivo[] = [];
colectivoSeleccionado: string = '';

// Lista para el desplegable de origen destino
lista = [
  'Buenos Aires (CABA)',
  'Mar del Plata',
  'Puerto Iguazú',
  'Bariloche',
  'Mendoza',
  'Salta',
  'El Calafate',
  'Villa Carlos Paz',
  'San Martín de los Andes',
  'Ushuaia'
];

constructor(
  private rutaService: RutaService,
  private colectivoService: ColectivoService,
  private router: Router
) {}

ngOnInit(): void {
  this.ruta = this.rutaService.obtenerRutas().find(ruta => ruta.id == this.id);

  this.colectivos = this.colectivoService.obtenerColectivos();
  
  this.rutaForm = new FormGroup({
    id: new FormControl(this.ruta?.id),
    nombre: new FormControl(this.ruta?.nombre, Validators.required),
    origen: new FormControl(this.ruta?.origen, Validators.required),
    destino: new FormControl(this.ruta?.destino, Validators.required),
    distanciaKm: new FormControl(this.ruta?.distanciaKm, [Validators.required, Validators.min(1)]),
    colectivo: new FormControl(this.ruta?.colectivo, Validators.required)
  })
}

agregarRuta(): void {
  if(this.rutaForm.valid){
    const nuevaRuta: Ruta ={
      id: this.ruta?.id ?? 0,
      nombre: this.rutaForm.value.nombre ?? '',
      origen: this.rutaForm.value.origen ?? '',
      destino: this.rutaForm.value.destino ?? '',
      distanciaKm: this.rutaForm.value.distanciaKm ?? 0,
      colectivo: this.rutaForm.value.colectivo ?? '',
    }

    this.rutaService.guardarRuta(nuevaRuta);

    console.log(this.rutaForm.value)
    
    this.router.navigate(['rutas-gestion']);
    
  } else {
    alert('Por favor, complete todos los campos correctamente.');
    this.rutaForm.markAllAsTouched();
  }
}

}
