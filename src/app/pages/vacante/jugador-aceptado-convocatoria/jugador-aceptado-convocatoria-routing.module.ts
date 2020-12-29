import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadorAceptadoConvocatoriaPage } from './jugador-aceptado-convocatoria.page';

const routes: Routes = [
  {
    path: '',
    component: JugadorAceptadoConvocatoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugadorAceptadoConvocatoriaPageRoutingModule {}
