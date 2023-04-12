import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoSeguridadComponent } from './grupo-seguridad/grupo-seguridad.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'grupo-seguridad' },
  { path: 'grupo-seguridad', component: GrupoSeguridadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
