import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulacionArbitroPageRoutingModule } from './postulacion-arbitro-routing.module';
import { PostulacionArbitroPage } from './postulacion-arbitro.page';
import { PostulacionJugadorModalPageModule } from '../modals/postulacion-jugador-modal/postulacion-jugador-modal.module';
import { PostulacionJugadorModalPage } from '../modals/postulacion-jugador-modal/postulacion-jugador-modal.page';
import { PostulacionArbitroTarifaModalPageModule } from '../modals/postulacion-arbitro-tarifa-modal/postulacion-arbitro-tarifa-modal.module';
import { PostulacionArbitroTarifaModalPage } from '../modals/postulacion-arbitro-tarifa-modal/postulacion-arbitro-tarifa-modal.page';

@NgModule({
  entryComponents: [ PostulacionJugadorModalPage, PostulacionArbitroTarifaModalPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulacionArbitroPageRoutingModule,
    PostulacionJugadorModalPageModule,
    PostulacionArbitroTarifaModalPageModule
  ],
  declarations: [PostulacionArbitroPage]
})
export class PostulacionArbitroPageModule {}
