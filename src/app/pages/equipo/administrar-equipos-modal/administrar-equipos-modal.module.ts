import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarEquiposModalPageRoutingModule } from './administrar-equipos-modal-routing.module';

import { AdministrarEquiposModalPage } from './administrar-equipos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarEquiposModalPageRoutingModule
  ],
  declarations: [AdministrarEquiposModalPage]
})
export class AdministrarEquiposModalPageModule {}
