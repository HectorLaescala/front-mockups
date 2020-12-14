import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilSimpleModalPage } from './perfil-simple-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilSimpleModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilSimpleModalPageRoutingModule {}
