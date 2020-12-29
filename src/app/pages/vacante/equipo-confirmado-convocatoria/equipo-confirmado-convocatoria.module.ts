import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipoConfirmadoConvocatoriaPageRoutingModule } from './equipo-confirmado-convocatoria-routing.module';

import { EquipoConfirmadoConvocatoriaPage } from './equipo-confirmado-convocatoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipoConfirmadoConvocatoriaPageRoutingModule
  ],
  declarations: [EquipoConfirmadoConvocatoriaPage]
})
export class EquipoConfirmadoConvocatoriaPageModule {}
