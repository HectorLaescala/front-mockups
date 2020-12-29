import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostulacionArbitroTarifaModalPage } from './postulacion-arbitro-tarifa-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PostulacionArbitroTarifaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostulacionArbitroTarifaModalPageRoutingModule {}
