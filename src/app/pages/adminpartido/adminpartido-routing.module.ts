import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpartidoPage } from './adminpartido.page';

const routes: Routes = [
  {
    path: '',
    component: AdminpartidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpartidoPageRoutingModule {}
