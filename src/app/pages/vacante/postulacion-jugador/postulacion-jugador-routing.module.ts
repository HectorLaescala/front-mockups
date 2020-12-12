import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostulacionJugadorPage } from './postulacion-jugador.page';

const routes: Routes = [
  {
    path: '',
    component: PostulacionJugadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostulacionJugadorPageRoutingModule {}
