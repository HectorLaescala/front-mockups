import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulacionEvaluacionEliminarModalPageRoutingModule } from './postulacion-evaluacion-eliminar-modal-routing.module';

import { PostulacionEvaluacionEliminarModalPage } from './postulacion-evaluacion-eliminar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulacionEvaluacionEliminarModalPageRoutingModule
  ],
  declarations: [PostulacionEvaluacionEliminarModalPage]
})
export class PostulacionEvaluacionEliminarModalPageModule {}
