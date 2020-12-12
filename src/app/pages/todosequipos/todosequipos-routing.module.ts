import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosequiposPage } from './todosequipos.page';

const routes: Routes = [
  {
    path: '',
    component: TodosequiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosequiposPageRoutingModule {}
