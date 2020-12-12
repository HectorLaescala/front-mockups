import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminmiembrosPageRoutingModule } from './adminmiembros-routing.module';

import { AdminmiembrosPage } from './adminmiembros.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminmiembrosPageRoutingModule ,
    ComponentsModule
  ],
  declarations: [AdminmiembrosPage]
})
export class AdminmiembrosPageModule {}
