import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaConvocatoriaAdminPage } from './agenda-convocatoria-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaConvocatoriaAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaConvocatoriaAdminPageRoutingModule {}
