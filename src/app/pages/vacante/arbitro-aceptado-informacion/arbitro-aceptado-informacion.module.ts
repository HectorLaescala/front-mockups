import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbitroAceptadoInformacionPageRoutingModule } from './arbitro-aceptado-informacion-routing.module';
import { ArbitroAceptadoInformacionPage } from './arbitro-aceptado-informacion.page';
import { PostulacionJugadorModalPageModule } from '../modals/postulacion-jugador-modal/postulacion-jugador-modal.module';
import { PostulacionJugadorModalPage } from '../modals/postulacion-jugador-modal/postulacion-jugador-modal.page';

@NgModule({
  entryComponents: [ PostulacionJugadorModalPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbitroAceptadoInformacionPageRoutingModule,
    PostulacionJugadorModalPageModule
  ],
  declarations: [ArbitroAceptadoInformacionPage]
})
export class ArbitroAceptadoInformacionPageModule {}
