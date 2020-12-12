import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';




import { ComponentsModule } from 'src/app/components/components.module';

import { ContactenosPage } from './contactenos.page';

const routes: Routes = [
  {
    path: '',
    component: ContactenosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule],
  exports: [RouterModule],
})
export class ContactenosPageRoutingModule {}
