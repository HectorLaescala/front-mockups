import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvocatoriaPage } from './convocatoria.page';

const routes: Routes = [
  {
    path: '',
    component: ConvocatoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvocatoriaPageRoutingModule {}
