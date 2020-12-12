import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulacionEquipoPageRoutingModule } from './postulacion-equipo-routing.module';
import { PostulacionEquipoPage } from './postulacion-equipo.page';
import { PostulacionJugadorModalPageModule } from '../modals/postulacion-jugador-modal/postulacion-jugador-modal.module';
import { PostulacionJugadorModalPage } from '../modals/postulacion-jugador-modal/postulacion-jugador-modal.page';

@NgModule({
  entryComponents: [ PostulacionJugadorModalPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulacionEquipoPageRoutingModule,
    PostulacionJugadorModalPageModule
  ],
  declarations: [PostulacionEquipoPage]
})
export class PostulacionEquipoPageModule {}
