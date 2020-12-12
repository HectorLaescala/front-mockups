import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostulacionEquipoPage } from './postulacion-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: PostulacionEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostulacionEquipoPageRoutingModule {}
