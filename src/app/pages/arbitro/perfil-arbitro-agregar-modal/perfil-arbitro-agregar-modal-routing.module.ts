import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilArbitroAgregarModalPage } from './perfil-arbitro-agregar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilArbitroAgregarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilArbitroAgregarModalPageRoutingModule {}
