import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadorAceptadoConvocatoriaPageRoutingModule } from './jugador-aceptado-convocatoria-routing.module';

import { JugadorAceptadoConvocatoriaPage } from './jugador-aceptado-convocatoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadorAceptadoConvocatoriaPageRoutingModule
  ],
  declarations: [JugadorAceptadoConvocatoriaPage]
})
export class JugadorAceptadoConvocatoriaPageModule {}
