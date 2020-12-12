import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiequipoPage } from './confiequipo.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiequipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiequipoPageRoutingModule {}
