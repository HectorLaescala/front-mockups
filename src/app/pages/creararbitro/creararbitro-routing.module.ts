import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreararbitroPage } from './creararbitro.page';

const routes: Routes = [
  {
    path: '',
    component: CreararbitroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreararbitroPageRoutingModule {}
