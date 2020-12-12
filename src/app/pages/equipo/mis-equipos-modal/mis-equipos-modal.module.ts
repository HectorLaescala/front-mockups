import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisEquiposModalPageRoutingModule } from './mis-equipos-modal-routing.module';

import { MisEquiposModalPage } from './mis-equipos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisEquiposModalPageRoutingModule
  ],
  declarations: [MisEquiposModalPage]
})
export class MisEquiposModalPageModule {}
