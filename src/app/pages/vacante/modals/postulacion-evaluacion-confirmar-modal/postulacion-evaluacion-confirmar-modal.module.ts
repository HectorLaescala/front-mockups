import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulacionEvaluacionConfirmarModalPageRoutingModule } from './postulacion-evaluacion-confirmar-modal-routing.module';

import { PostulacionEvaluacionConfirmarModalPage } from './postulacion-evaluacion-confirmar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulacionEvaluacionConfirmarModalPageRoutingModule
  ],
  declarations: [PostulacionEvaluacionConfirmarModalPage]
})
export class PostulacionEvaluacionConfirmarModalPageModule {}
