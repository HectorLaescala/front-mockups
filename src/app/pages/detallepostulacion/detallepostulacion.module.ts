import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallepostulacionPageRoutingModule } from './detallepostulacion-routing.module';

import { DetallepostulacionPage } from './detallepostulacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallepostulacionPageRoutingModule
  ],
  declarations: [DetallepostulacionPage]
})
export class DetallepostulacionPageModule {}
