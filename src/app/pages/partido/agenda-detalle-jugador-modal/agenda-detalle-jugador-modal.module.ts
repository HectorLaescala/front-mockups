import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaDetalleJugadorModalPageRoutingModule } from './agenda-detalle-jugador-modal-routing.module';

import { AgendaDetalleJugadorModalPage } from './agenda-detalle-jugador-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaDetalleJugadorModalPageRoutingModule
  ],
  declarations: [AgendaDetalleJugadorModalPage]
})
export class AgendaDetalleJugadorModalPageModule {}
