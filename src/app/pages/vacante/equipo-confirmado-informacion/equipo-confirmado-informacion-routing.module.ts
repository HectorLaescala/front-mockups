import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipoConfirmadoInformacionPage } from './equipo-confirmado-informacion.page';

const routes: Routes = [
  {
    path: '',
    component: EquipoConfirmadoInformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipoConfirmadoInformacionPageRoutingModule {}
