import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearequipoPage } from './crearequipo.page';

const routes: Routes = [
  {
    path: '',
    component: CrearequipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearequipoPageRoutingModule {}
