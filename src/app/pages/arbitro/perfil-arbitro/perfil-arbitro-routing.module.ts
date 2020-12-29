import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilArbitroPage } from './perfil-arbitro.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilArbitroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilArbitroPageRoutingModule {}
