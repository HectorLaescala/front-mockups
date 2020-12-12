import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilequipoPage } from './perfilequipo.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilequipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilequipoPageRoutingModule {}
