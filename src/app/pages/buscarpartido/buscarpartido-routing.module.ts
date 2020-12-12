import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarpartidoPage } from './buscarpartido.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarpartidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarpartidoPageRoutingModule {}
