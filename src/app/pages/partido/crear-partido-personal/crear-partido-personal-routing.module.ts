import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPartidoPersonalPage } from './crear-partido-personal.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPartidoPersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPartidoPersonalPageRoutingModule {}
