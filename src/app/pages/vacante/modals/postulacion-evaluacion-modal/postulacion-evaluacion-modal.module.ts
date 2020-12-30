import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulacionEvaluacionModalPageRoutingModule } from './postulacion-evaluacion-modal-routing.module';

import { PostulacionEvaluacionModalPage } from './postulacion-evaluacion-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulacionEvaluacionModalPageRoutingModule
  ],
  declarations: [PostulacionEvaluacionModalPage]
})
export class PostulacionEvaluacionModalPageModule {}
