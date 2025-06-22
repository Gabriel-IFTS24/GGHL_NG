import { Component, OnInit } from '@angular/core'; // Agregamos OnInit
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Importamos todo lo necesario para formularios reactivos, incluidos Validators
import { Colectivo } from '../../modelos/colectivo'; // Importa la clase Colectivo
import { ColectivoService } from '../../servicios/colectivo.service'; // Importa ColectivoService
import { CommonModule } from '@angular/common'; // Importa CommonModule para directivas como *ngIf

@Component({
  selector: 'app-colectivos-alta',
  standalone: true, // Asegúrate de que tu componente sea standalone
  imports: [ReactiveFormsModule, CommonModule], // Añadimos CommonModule aquí
  templateUrl: './colectivos-alta.component.html',
  styleUrl: './colectivos-alta.component.css'
})
export class ColectivosAltaComponent implements OnInit { // Implementamos OnInit
  public colectivoForm = new FormGroup({
    patente: new FormControl<string>('', Validators.required), // Usamos genérico para tipo y añadimos Validators
    modelo: new FormControl<string>('', Validators.required),
    anioFabricacion: new FormControl<number | null>(null, [Validators.required, Validators.min(1950), Validators.max(new Date().getFullYear())]), // Puede ser null inicialmente
    capacidadPasajeros: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
  });

  constructor(private colectivoService: ColectivoService) { }

  ngOnInit(): void {
    // Si necesitas alguna inicialización al cargar el componente, la pondrías aquí.
    // Por ejemplo, cargar datos si fuera un formulario de edición. Para alta, no suele ser necesario.
  }

  agregarColectivo(): void { // Cambiado a void ya que no devuelve nada
    if (this.colectivoForm.valid) {
      // Usamos el FormBuilder para crear el FormGroup y sus controles
      // para manejar los tipos de dato, convertimos a number lo que se requiera
      const nuevoColectivo: Colectivo = {
        patente: this.colectivoForm.value.patente ?? '',
        modelo: this.colectivoForm.value.modelo ?? '',
        anioFabricacion: this.colectivoForm.value.anioFabricacion ?? 0, // Ajusta el valor por defecto si null
        capacidadPasajeros: this.colectivoForm.value.capacidadPasajeros ?? 0, // Ajusta el valor por defecto si null
      };

      // Aquí adaptamos la llamada al servicio para usar Observable y manejar éxito/error
      this.colectivoService.agregarColectivo(nuevoColectivo).subscribe({
        next: (response) => {
          console.log('Colectivo agregado con éxito:', response);
          alert('Colectivo agregado con éxito!'); // Notificación básica al usuario
          this.colectivoForm.reset(); // Limpiar el formulario después de un envío exitoso
        },
        error: (error) => {
          console.error('Error al agregar colectivo:', error);
          alert('Error al agregar colectivo. Por favor, intente de nuevo.'); // Notificación de error
        }
      });
    } else {
      // Opcional: Marcar todos los campos como "touched" para mostrar los mensajes de validación
      this.colectivoForm.markAllAsTouched();
      console.log('Formulario inválido. Revise los campos.');
    }
  }
}