import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostulacionEvaluacionConfirmarModalPage } from './postulacion-evaluacion-confirmar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PostulacionEvaluacionConfirmarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostulacionEvaluacionConfirmarModalPageRoutingModule {}
