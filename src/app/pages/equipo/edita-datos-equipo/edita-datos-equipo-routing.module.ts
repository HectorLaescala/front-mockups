import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaDatosEquipoPage } from './edita-datos-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: EditaDatosEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaDatosEquipoPageRoutingModule {}
