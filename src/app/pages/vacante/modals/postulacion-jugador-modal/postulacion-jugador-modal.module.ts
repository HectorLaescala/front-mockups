import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulacionJugadorModalPageRoutingModule } from './postulacion-jugador-modal-routing.module';

import { PostulacionJugadorModalPage } from './postulacion-jugador-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulacionJugadorModalPageRoutingModule
  ],
  declarations: [PostulacionJugadorModalPage]
})
export class PostulacionJugadorModalPageModule {}
