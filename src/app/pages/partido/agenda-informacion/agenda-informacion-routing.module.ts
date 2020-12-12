import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaInformacionPage } from './agenda-informacion.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaInformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaInformacionPageRoutingModule {}
