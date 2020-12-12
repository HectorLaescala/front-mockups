import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbitroAceptadoInformacionPage } from './arbitro-aceptado-informacion.page';

const routes: Routes = [
  {
    path: '',
    component: ArbitroAceptadoInformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbitroAceptadoInformacionPageRoutingModule {}
