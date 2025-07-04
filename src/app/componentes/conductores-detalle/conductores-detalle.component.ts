import { Component, inject, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { Conductor } from '../../modelos/conductor';
import { ConductorService } from '../../servicios/conductor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductores-detalle',
  imports: [ReactiveFormsModule],
  templateUrl: './conductores-detalle.component.html',
  styleUrl: './conductores-detalle.component.css'
})
export class ConductoresDetalleComponent  implements OnInit{
  conductor?: Conductor
  @Input() public id?: number // Con el withComponentInputBinding no hay que hacer todo el lío para subscribir y obtener el param
  
  public conductorForm!: FormGroup;

  constructor(
    private conductorService: ConductorService,
    private router: Router
  ) {}

  guardarConductor(){
    const conductorModificado: Conductor ={
    id: this.conductor?.id ?? 0,
    apellido: this.conductorForm.value.apellido ?? '',
    nombre: this.conductorForm.value.nombre ?? '',
    DNI: this.conductorForm.value.DNI ?? 0,
    numeroRegistro: this.conductorForm.value.numeroRegistro ?? 0, 
    fechaNacimiento: this.conductorForm.value.fechaNacimiento ?? '',
    };

    this.conductorService.guardarConductor(conductorModificado);

    this.router.navigate(['conductores-gestion']);
    
  };
  
  ngOnInit(): void {
    this.conductor = this.conductorService.obtenerConductores().find(conductor => conductor.id == this.id);
    
    this.conductorForm = new FormGroup({
      id: new FormControl(this.conductor?.id),
      apellido: new FormControl(this.conductor?.apellido, Validators.required),
      nombre: new FormControl(this.conductor?.nombre, Validators.required),
      DNI: new FormControl(this.conductor?.DNI, [Validators.required, Validators.min(1000000)]),
      numeroRegistro: new FormControl(this.conductor?.numeroRegistro, [Validators.required, Validators.min(1)]),
      fechaNacimiento: new FormControl(this.conductor?.fechaNacimiento, Validators.required),
    });
    
  }
}
