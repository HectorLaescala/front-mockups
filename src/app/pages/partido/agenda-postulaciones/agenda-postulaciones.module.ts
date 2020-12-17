import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPostulacionesPageRoutingModule } from './agenda-postulaciones-routing.module';
import { AgendaPostulacionesPage } from './agenda-postulaciones.page';
import { AgendaDetalleJugadorModalPageModule } from '../agenda-detalle-jugador-modal/agenda-detalle-jugador-modal.module';
import { AgendaDetalleJugadorModalPage } from '../agenda-detalle-jugador-modal/agenda-detalle-jugador-modal.page';
import { AgendaDetalleJugadorTwoModalPageModule } from '../agenda-detalle-jugador-two-modal/agenda-detalle-jugador-two-modal.module';
import { AgendaDetalleJugadorTwoModalPage } from '../agenda-detalle-jugador-two-modal/agenda-detalle-jugador-two-modal.page';
import { AgendaDetalleJugadorThreeModalPageModule } from '../agenda-detalle-jugador-three-modal/agenda-detalle-jugador-three-modal.module';
import { AgendaDetalleJugadorThreeModalPage } from '../agenda-detalle-jugador-three-modal/agenda-detalle-jugador-three-modal.page';

@NgModule({
  entryComponents: [ AgendaDetalleJugadorModalPage, AgendaDetalleJugadorTwoModalPage, AgendaDetalleJugadorThreeModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPostulacionesPageRoutingModule,
    AgendaDetalleJugadorModalPageModule,
    AgendaDetalleJugadorTwoModalPageModule,
    AgendaDetalleJugadorThreeModalPageModule
  ],
  declarations: [AgendaPostulacionesPage]
})
export class AgendaPostulacionesPageModule {}
