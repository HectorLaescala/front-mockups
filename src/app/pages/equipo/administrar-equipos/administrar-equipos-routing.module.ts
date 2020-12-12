import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarEquiposPage } from './administrar-equipos.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarEquiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarEquiposPageRoutingModule {}
