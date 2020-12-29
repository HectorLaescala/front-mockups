import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaJugadorManualModalPageRoutingModule } from './agenda-jugador-manual-modal-routing.module';

import { AgendaJugadorManualModalPage } from './agenda-jugador-manual-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaJugadorManualModalPageRoutingModule
  ],
  declarations: [AgendaJugadorManualModalPage]
})
export class AgendaJugadorManualModalPageModule {}
