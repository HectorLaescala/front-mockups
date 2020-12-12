import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadorAceptadoInformacionPageRoutingModule } from './jugador-aceptado-informacion-routing.module';
import { JugadorAceptadoInformacionPage } from './jugador-aceptado-informacion.page';
import { PostulacionJugadorModalPageModule } from '../modals/postulacion-jugador-modal/postulacion-jugador-modal.module';
import { PostulacionJugadorModalPage } from '../modals/postulacion-jugador-modal/postulacion-jugador-modal.page';

@NgModule({
  entryComponents: [ PostulacionJugadorModalPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadorAceptadoInformacionPageRoutingModule,
    PostulacionJugadorModalPageModule
  ],
  declarations: [JugadorAceptadoInformacionPage]
})
export class JugadorAceptadoInformacionPageModule {}
