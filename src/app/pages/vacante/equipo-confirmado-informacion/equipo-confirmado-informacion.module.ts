import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipoConfirmadoInformacionPageRoutingModule } from './equipo-confirmado-informacion-routing.module';

import { EquipoConfirmadoInformacionPage } from './equipo-confirmado-informacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipoConfirmadoInformacionPageRoutingModule
  ],
  declarations: [EquipoConfirmadoInformacionPage]
})
export class EquipoConfirmadoInformacionPageModule {}
