import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisequiposPage } from './misequipos.page';

const routes: Routes = [
  {
    path: '',
    component: MisequiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisequiposPageRoutingModule {}
