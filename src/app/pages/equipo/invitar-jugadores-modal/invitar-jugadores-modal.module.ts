import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitarJugadoresModalPageRoutingModule } from './invitar-jugadores-modal-routing.module';

import { InvitarJugadoresModalPage } from './invitar-jugadores-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitarJugadoresModalPageRoutingModule
  ],
  declarations: [InvitarJugadoresModalPage]
})
export class InvitarJugadoresModalPageModule {}
