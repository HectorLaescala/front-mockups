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
import { PostulacionEvaluacionConfirmarModalPageModule } from '../modals/postulacion-evaluacion-confirmar-modal/postulacion-evaluacion-confirmar-modal.module';
import { PostulacionEvaluacionConfirmarModalPage } from '../modals/postulacion-evaluacion-confirmar-modal/postulacion-evaluacion-confirmar-modal.page';
import { PostulacionEvaluacionCheckedModalPageModule } from '../modals/postulacion-evaluacion-checked-modal/postulacion-evaluacion-checked-modal.module';
import { PostulacionEvaluacionCheckedModalPage } from '../modals/postulacion-evaluacion-checked-modal/postulacion-evaluacion-checked-modal.page';

@NgModule({
  entryComponents: [ PostulacionEvaluacionModalPage, PostulacionEvaluacionEliminarModalPage, PostulacionEvaluacionConfirmarModalPage, PostulacionEvaluacionCheckedModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadorAceptadoInformacionPageRoutingModule,
    PostulacionEvaluacionModalPageModule,
    PostulacionEvaluacionEliminarModalPageModule,
    PostulacionEvaluacionConfirmarModalPageModule,
    PostulacionEvaluacionCheckedModalPageModule
  ],
  declarations: [JugadorAceptadoInformacionPage]
})
export class JugadorAceptadoInformacionPageModule {}
