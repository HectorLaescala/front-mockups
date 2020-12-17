import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaDetalleJugadorThreeModalPageRoutingModule } from './agenda-detalle-jugador-three-modal-routing.module';

import { AgendaDetalleJugadorThreeModalPage } from './agenda-detalle-jugador-three-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaDetalleJugadorThreeModalPageRoutingModule
  ],
  declarations: [AgendaDetalleJugadorThreeModalPage]
})
export class AgendaDetalleJugadorThreeModalPageModule {}
