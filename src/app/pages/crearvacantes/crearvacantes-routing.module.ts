import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearvacantesPage } from './crearvacantes.page';

const routes: Routes = [
  {
    path: '',
    component: CrearvacantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearvacantesPageRoutingModule {}
