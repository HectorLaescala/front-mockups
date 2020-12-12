import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminequipoPage } from './adminequipo.page';

const routes: Routes = [
  {
    path: '',
    component: AdminequipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminequipoPageRoutingModule {}
