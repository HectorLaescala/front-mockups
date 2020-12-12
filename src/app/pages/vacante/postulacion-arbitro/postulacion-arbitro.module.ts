import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulacionArbitroPageRoutingModule } from './postulacion-arbitro-routing.module';
import { PostulacionArbitroPage } from './postulacion-arbitro.page';
import { PostulacionJugadorModalPageModule } from '../modals/postulacion-jugador-modal/postulacion-jugador-modal.module';
import { PostulacionJugadorModalPage } from '../modals/postulacion-jugador-modal/postulacion-jugador-modal.page';

@NgModule({
  entryComponents: [ PostulacionJugadorModalPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulacionArbitroPageRoutingModule,
    PostulacionJugadorModalPageModule
  ],
  declarations: [PostulacionArbitroPage]
})
export class PostulacionArbitroPageModule {}
