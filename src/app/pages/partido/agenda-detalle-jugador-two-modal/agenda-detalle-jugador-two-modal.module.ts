import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaDetalleJugadorTwoModalPageRoutingModule } from './agenda-detalle-jugador-two-modal-routing.module';

import { AgendaDetalleJugadorTwoModalPage } from './agenda-detalle-jugador-two-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaDetalleJugadorTwoModalPageRoutingModule
  ],
  declarations: [AgendaDetalleJugadorTwoModalPage]
})
export class AgendaDetalleJugadorTwoModalPageModule {}
