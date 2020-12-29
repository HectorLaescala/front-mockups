import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltroBuscadorPartidoPage } from './filtro-buscador-partido.page';

const routes: Routes = [
  {
    path: '',
    component: FiltroBuscadorPartidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltroBuscadorPartidoPageRoutingModule {}
