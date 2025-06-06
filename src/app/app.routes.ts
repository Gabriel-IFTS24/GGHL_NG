import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ConductoresAltaComponent } from './componentes/conductores-alta/conductores-alta.component';
import { ConductoresGestionComponent } from './componentes/conductores-gestion/conductores-gestion.component';
import { ConductoresReportesComponent } from './componentes/conductores-reportes/conductores-reportes.component';
import { ConductoresDetalleComponent } from './componentes/conductores-detalle/conductores-detalle.component';

export const routes: Routes = [
    {path:'', loadComponent: () => import('./componentes/home/home.component').then(m => HomeComponent)},
    {path:'conductores-alta', loadComponent: () => import('./componentes/conductores-alta/conductores-alta.component').then(m => ConductoresAltaComponent)},
    {path:'conductores-gestion', loadComponent: () => import('./componentes/conductores-gestion/conductores-gestion.component').then(m => ConductoresGestionComponent)},
    {path: 'conductores-detalle/:id', loadComponent: () => import('./componentes/conductores-detalle/conductores-detalle.component').then(m => ConductoresDetalleComponent)},
    {path:'conductores-reportes', loadComponent: () => import('./componentes/conductores-reportes/conductores-reportes.component').then(m => ConductoresReportesComponent)},
    {path:'**', redirectTo:''},
];
