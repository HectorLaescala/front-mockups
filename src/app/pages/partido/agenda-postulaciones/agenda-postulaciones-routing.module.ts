import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaPostulacionesPage } from './agenda-postulaciones.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaPostulacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaPostulacionesPageRoutingModule {}
