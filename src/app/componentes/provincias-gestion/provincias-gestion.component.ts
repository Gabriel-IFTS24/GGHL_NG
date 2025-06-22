import { Component, OnInit } from '@angular/core';
import { Provincia } from '../../modelos/provincias';
import { ProvinciasApiService } from '../../servicios/provincias-api.service';

@Component({
  selector: 'app-provincias-gestion',
  imports: [],
  templateUrl: './provincias-gestion.component.html',
  styleUrl: './provincias-gestion.component.css'
})
export class ProvinciasGestionComponent implements OnInit{

  provincias: Provincia[] =[];
  errorApi: string | null = null;

  constructor(private _provinciasApi: ProvinciasApiService){}

  ngOnInit(): void {
    this.obtenerProvincias();
  }

  obtenerProvincias(){
    this._provinciasApi.obtenerProvincias().subscribe({
      next: data => {
        this.provincias = data
      }, error: error => {
        console.log('Error al obtener las provincias: ', error)
        this.errorApi = error
      }
    })
  }
}
