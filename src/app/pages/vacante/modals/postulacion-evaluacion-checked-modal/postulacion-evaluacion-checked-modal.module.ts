import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulacionEvaluacionCheckedModalPageRoutingModule } from './postulacion-evaluacion-checked-modal-routing.module';

import { PostulacionEvaluacionCheckedModalPage } from './postulacion-evaluacion-checked-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulacionEvaluacionCheckedModalPageRoutingModule
  ],
  declarations: [PostulacionEvaluacionCheckedModalPage]
})
export class PostulacionEvaluacionCheckedModalPageModule {}
