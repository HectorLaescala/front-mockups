import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostulacionEvaluacionEliminarModalPage } from './postulacion-evaluacion-eliminar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PostulacionEvaluacionEliminarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostulacionEvaluacionEliminarModalPageRoutingModule {}
