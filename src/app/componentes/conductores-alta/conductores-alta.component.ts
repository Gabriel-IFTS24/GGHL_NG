import { Component } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { Conductor } from '../../modelos/conductor';
import { ConductorService } from '../../servicios/conductor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductores-alta',
  imports: [ReactiveFormsModule],
  templateUrl: './conductores-alta.component.html',
  styleUrl: './conductores-alta.component.css'
})
export class ConductoresAltaComponent {

  constructor(private conductorService: ConductorService,
     private router: Router) { }
     
  public conductorForm = new FormGroup({
    apellido: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    DNI: new FormControl(0, [Validators.required, Validators.min(1000000)]),
    numeroRegistro: new FormControl(0, [Validators.required, Validators.min(1)]),
    fechaNacimiento: new FormControl('', Validators.required),
  })

  agregarConductor(){
    const nuevoConductor: Conductor ={
    id: 0,
    apellido: this.conductorForm.value.apellido ?? '',
    nombre: this.conductorForm.value.nombre ?? '',
    DNI: this.conductorForm.value.DNI ?? 0,
    numeroRegistro: this.conductorForm.value.numeroRegistro ?? 0, 
    fechaNacimiento: this.conductorForm.value.fechaNacimiento ?? '',
    };

    this.conductorService.guardarConductor(nuevoConductor);
    
    this.router.navigate(['conductores-gestion']);
    
  };
}
