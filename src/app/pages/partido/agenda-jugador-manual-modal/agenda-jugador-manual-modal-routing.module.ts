import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaJugadorManualModalPage } from './agenda-jugador-manual-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaJugadorManualModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaJugadorManualModalPageRoutingModule {}
