import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostulacionJugadorModalPage } from './postulacion-jugador-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PostulacionJugadorModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostulacionJugadorModalPageRoutingModule {}
