import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostulacionEvaluacionCheckedModalPage } from './postulacion-evaluacion-checked-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PostulacionEvaluacionCheckedModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostulacionEvaluacionCheckedModalPageRoutingModule {}
