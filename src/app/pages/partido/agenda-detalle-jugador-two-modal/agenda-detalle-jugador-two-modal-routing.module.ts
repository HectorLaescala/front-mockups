import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaDetalleJugadorTwoModalPage } from './agenda-detalle-jugador-two-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaDetalleJugadorTwoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaDetalleJugadorTwoModalPageRoutingModule {}
