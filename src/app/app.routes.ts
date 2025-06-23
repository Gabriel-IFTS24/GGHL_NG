import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ConductoresAltaComponent } from './componentes/conductores-alta/conductores-alta.component';
import { ConductoresGestionComponent } from './componentes/conductores-gestion/conductores-gestion.component';
import { ConductoresReportesComponent } from './componentes/conductores-reportes/conductores-reportes.component';
import { ConductoresDetalleComponent } from './componentes/conductores-detalle/conductores-detalle.component';
import { ProvinciasGestionComponent } from './componentes/provincias-gestion/provincias-gestion.component';
// Agrego colectivos (Lu)
import { ColectivosAltaComponent } from './componentes/colectivos-alta/colectivos-alta.component';
import { ColectivosGestionComponent } from './componentes/colectivos-gestion/colectivos-gestion.component';
import { ColectivosReporteComponent } from './componentes/colectivos-reporte/colectivos-reporte.component';
import { ColectivosDetalleComponent } from './componentes/colectivos-detalle/colectivos-detalle.component';


export const routes: Routes = [
    {path:'', loadComponent: () => import('./componentes/home/home.component').then(m => HomeComponent)},
    {path:'conductores-alta', loadComponent: () => import('./componentes/conductores-alta/conductores-alta.component').then(m => ConductoresAltaComponent)},
    {path:'conductores-gestion', loadComponent: () => import('./componentes/conductores-gestion/conductores-gestion.component').then(m => ConductoresGestionComponent)},
    {path: 'conductores-detalle/:id', loadComponent: () => import('./componentes/conductores-detalle/conductores-detalle.component').then(m => ConductoresDetalleComponent)},
    {path:'conductores-reportes', loadComponent: () => import('./componentes/conductores-reportes/conductores-reportes.component').then(m => ConductoresReportesComponent)},
    {path:'provincias-gestion', loadComponent: () => import('./componentes/provincias-gestion/provincias-gestion.component').then(m => ProvinciasGestionComponent)},
    // Rutas de colectivos (Lu)
    {path:'colectivos-alta', loadComponent: () => import('./componentes/colectivos-alta/colectivos-alta.component').then(m => ColectivosAltaComponent)},
    {path:'colectivos-gestion', loadComponent: () => import('./componentes/colectivos-gestion/colectivos-gestion.component').then(m => ColectivosGestionComponent)},
    {path:'colectivos-detalle/:id', loadComponent: () => import('./componentes/colectivos-detalle/colectivos-detalle.component').then(m => ColectivosDetalleComponent)},
    {path:'colectivos-reporte', loadComponent: () => import('./componentes/colectivos-reporte/colectivos-reporte.component').then(m => ColectivosReporteComponent)},

    
    {path:'**', redirectTo:''},
];

