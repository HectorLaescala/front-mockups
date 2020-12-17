import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaDetalleJugadorThreeModalPage } from './agenda-detalle-jugador-three-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaDetalleJugadorThreeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaDetalleJugadorThreeModalPageRoutingModule {}
