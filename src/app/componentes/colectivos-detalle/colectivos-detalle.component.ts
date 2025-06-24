import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Colectivo } from '../../modelos/colectivo';
import { ColectivoService } from '../../servicios/colectivo.service';
import { ConductorService } from '../../servicios/conductor.service';
import { Conductor } from '../../modelos/conductor';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-colectivos-detalle',
  imports: [ReactiveFormsModule],
  templateUrl: './colectivos-detalle.component.html',
  styleUrl: './colectivos-detalle.component.css'
})

export class ColectivosDetalleComponent {
  colectivo?: Colectivo
  @Input() public id?: number // Con el withComponentInputBinding no hay que hacer todo el lío para subscribir y obtener el param

  public colectivoForm!: FormGroup;

  constructor(
    private colectivoService: ColectivoService,
    private conductorService: ConductorService,
    private router: Router
  ) {}

    // Para el combobox del conductor
    conductores: Conductor[] = [];
    conductorSeleccionado: string = '';

    // Para el mensaje de la validación del año de fabricación
    currentYear: number = new Date().getFullYear();

  guardarColectivo(){
    const colectivoModificado: Colectivo ={
    id: this.colectivo?.id ?? 0,
    patente: this.colectivoForm.value.patente ?? '',
    modelo: this.colectivoForm.value.modelo ?? '',
    anioFabricacion: this.colectivoForm.value.anioFabricacion ?? 0,
    capacidadPasajeros: this.colectivoForm.value.capacidadPasajeros ?? 0,
    conductor: this.colectivoForm.value.conductor ?? '',
    };

    this.colectivoService.guardarColectivo(colectivoModificado);

    this.router.navigate(['colectivos-gestion']);
    
  };

  // seleccionarConductor(event: Event): void {
  //   const selectElement = event.target as HTMLSelectElement;
  //   this.conductorSeleccionado = selectElement.value;
  // }

  
  ngOnInit(): void {
    this.colectivo = this.colectivoService.obtenerColectivos().find(colectivo => colectivo.id == this.id);

    this.conductores = this.conductorService.obtenerConductores();
    
    this.colectivoForm = new FormGroup({
      id: new FormControl(this.colectivo?.id),
      patente: new FormControl(this.colectivo?.patente, Validators.required),
      modelo: new FormControl(this.colectivo?.modelo, Validators.required),
      anioFabricacion: new FormControl(this.colectivo?.anioFabricacion, [Validators.required, Validators.min(1950), Validators.max(new Date().getFullYear())]),
      capacidadPasajeros: new FormControl(this.colectivo?.capacidadPasajeros, [Validators.required, Validators.min(1)]),
      conductor: new FormControl(this.colectivo?.conductor, Validators.required),
    });
  }

}
