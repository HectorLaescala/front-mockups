import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostulacionEvaluacionModalPage } from './postulacion-evaluacion-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PostulacionEvaluacionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostulacionEvaluacionModalPageRoutingModule {}
