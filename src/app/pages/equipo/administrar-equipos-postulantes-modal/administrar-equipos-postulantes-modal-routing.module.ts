import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarEquiposPostulantesModalPage } from './administrar-equipos-postulantes-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarEquiposPostulantesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarEquiposPostulantesModalPageRoutingModule {}
