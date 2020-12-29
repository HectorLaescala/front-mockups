import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaPartidoPage } from './agenda-partido.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaPartidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaPartidoPageRoutingModule {}
