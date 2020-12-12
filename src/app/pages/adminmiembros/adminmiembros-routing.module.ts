import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminmiembrosPage } from './adminmiembros.page';

const routes: Routes = [
  {
    path: '',
    component: AdminmiembrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminmiembrosPageRoutingModule {}
