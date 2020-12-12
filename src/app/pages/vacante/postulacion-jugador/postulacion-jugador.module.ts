import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { PostulacionJugadorPageRoutingModule } from './postulacion-jugador-routing.module';
import { PostulacionJugadorPage } from './postulacion-jugador.page';

import { PostulacionJugadorModalPageModule } from '../modals/postulacion-jugador-modal/postulacion-jugador-modal.module';
import { PostulacionJugadorModalPage } from '../modals/postulacion-jugador-modal/postulacion-jugador-modal.page';

@NgModule({
  entryComponents: [ PostulacionJugadorModalPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PostulacionJugadorPageRoutingModule,
    PostulacionJugadorModalPageModule
  ],
  declarations: [PostulacionJugadorPage]
})
export class PostulacionJugadorPageModule {}
