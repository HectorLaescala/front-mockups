import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallepostulacionPage } from './detallepostulacion.page';

const routes: Routes = [
  {
    path: '',
    component: DetallepostulacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallepostulacionPageRoutingModule {}
