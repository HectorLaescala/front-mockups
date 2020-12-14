import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitarJugadoresModalPage } from './invitar-jugadores-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InvitarJugadoresModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitarJugadoresModalPageRoutingModule {}
