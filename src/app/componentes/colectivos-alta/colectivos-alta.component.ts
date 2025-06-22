import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Colectivo } from '../../modelos/colectivo';
import { ColectivoService } from '../../servicios/colectivo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colectivos-alta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './colectivos-alta.component.html',
  styleUrl: './colectivos-alta.component.css',
})
export class ColectivosAltaComponent implements OnInit {
  public colectivoForm = new FormGroup({
    patente: new FormControl<string>('', Validators.required),
    modelo: new FormControl<string>('', Validators.required),
    anioFabricacion: new FormControl<number | null>(null, [Validators.required, Validators.min(1950), Validators.max(new Date().getFullYear())]),
    capacidadPasajeros: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
  });

  currentYear: number = new Date().getFullYear();

  constructor(private colectivoService: ColectivoService) { }

  ngOnInit(): void {
  
  }

  agregarColectivo(): void {
    if (this.colectivoForm.valid) {
    
      const nuevoColectivo: Colectivo = new Colectivo(
        this.colectivoForm.value.patente ?? '',
        this.colectivoForm.value.modelo ?? '',
        Number(this.colectivoForm.value.anioFabricacion), 
        Number(this.colectivoForm.value.capacidadPasajeros) 
      );

     
      this.colectivoService.guardarColectivo(nuevoColectivo); 

      console.log('Colectivo agregado con éxito:', nuevoColectivo);
      alert('Colectivo agregado con éxito!'); 
      this.colectivoForm.reset(); 
      
      Object.keys(this.colectivoForm.controls).forEach(key => {
        this.colectivoForm.get(key)?.markAsUntouched();
        this.colectivoForm.get(key)?.markAsPristine();
      });

    } else {
      this.colectivoForm.markAllAsTouched();
      console.log('Formulario inválido. Revise los campos.');
    }
  }
}