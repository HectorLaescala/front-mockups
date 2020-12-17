import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaDetalleJugadorModalPage } from './agenda-detalle-jugador-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaDetalleJugadorModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaDetalleJugadorModalPageRoutingModule {}
