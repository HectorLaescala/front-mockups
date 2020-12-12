import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilarbitroPage } from './perfilarbitro.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilarbitroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilarbitroPageRoutingModule {}
