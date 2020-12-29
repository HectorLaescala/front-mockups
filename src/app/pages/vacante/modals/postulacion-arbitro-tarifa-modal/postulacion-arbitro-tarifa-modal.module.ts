import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostulacionArbitroTarifaModalPageRoutingModule } from './postulacion-arbitro-tarifa-modal-routing.module';

import { PostulacionArbitroTarifaModalPage } from './postulacion-arbitro-tarifa-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostulacionArbitroTarifaModalPageRoutingModule
  ],
  declarations: [PostulacionArbitroTarifaModalPage]
})
export class PostulacionArbitroTarifaModalPageModule {}
