import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provincia } from '../modelos/provincias';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProvinciasApiService {

  private url = "https://apis.datos.gob.ar/georef/api/provincias"

  private _httpClient = inject(HttpClient)

  public obtenerProvincias(): Observable<Provincia[]> {
    return this._httpClient.get<{ provincias: Provincia[] }>(this.url).pipe(
      map(respuesta =>
        respuesta.provincias.sort((a, b) => a.nombre > b.nombre ? 1 : -1)
      )
    );
  }

  constructor() { }
}
