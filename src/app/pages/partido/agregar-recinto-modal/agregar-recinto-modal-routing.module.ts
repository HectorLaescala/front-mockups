import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarRecintoModalPage } from './agregar-recinto-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarRecintoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarRecintoModalPageRoutingModule {}
