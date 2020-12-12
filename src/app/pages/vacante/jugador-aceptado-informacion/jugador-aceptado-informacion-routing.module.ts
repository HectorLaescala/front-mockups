import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadorAceptadoInformacionPage } from './jugador-aceptado-informacion.page';

const routes: Routes = [
  {
    path: '',
    component: JugadorAceptadoInformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugadorAceptadoInformacionPageRoutingModule {}
