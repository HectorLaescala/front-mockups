import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarEquiposPageRoutingModule } from './administrar-equipos-routing.module';

import { AdministrarEquiposPage } from './administrar-equipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarEquiposPageRoutingModule
  ],
  declarations: [AdministrarEquiposPage]
})
export class AdministrarEquiposPageModule {}
