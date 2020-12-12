import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostulacionArbitroPage } from './postulacion-arbitro.page';

const routes: Routes = [
  {
    path: '',
    component: PostulacionArbitroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostulacionArbitroPageRoutingModule {}
