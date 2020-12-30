import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadorAceptadoInformacionPageRoutingModule } from './jugador-aceptado-informacion-routing.module';
import { JugadorAceptadoInformacionPage } from './jugador-aceptado-informacion.page';
import { PostulacionEvaluacionModalPageModule } from '../modals/postulacion-evaluacion-modal/postulacion-evaluacion-modal.module';
import { PostulacionEvaluacionModalPage } from '../modals/postulacion-evaluacion-modal/postulacion-evaluacion-modal.page';
import { PostulacionEvaluacionEliminarModalPageModule } from '../modals/postulacion-evaluacion-eliminar-modal/postulacion-evaluacion-eliminar-modal.module';
import { PostulacionEvaluacionEliminarModalPage } from '../modals/postulacion-evaluacion-eliminar-modal/postulacion-evaluacion-eliminar-modal.page';

@NgModule({
  entryComponents: [ PostulacionEvaluacionModalPage, PostulacionEvaluacionEliminarModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadorAceptadoInformacionPageRoutingModule,
    PostulacionEvaluacionModalPageModule,
    PostulacionEvaluacionEliminarModalPageModule
  ],
  declarations: [JugadorAceptadoInformacionPage]
})
export class JugadorAceptadoInformacionPageModule {}
