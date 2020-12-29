import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipoConfirmadoConvocatoriaPage } from './equipo-confirmado-convocatoria.page';

const routes: Routes = [
  {
    path: '',
    component: EquipoConfirmadoConvocatoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipoConfirmadoConvocatoriaPageRoutingModule {}
