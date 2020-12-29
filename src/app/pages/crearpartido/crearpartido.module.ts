import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearpartidoPageRoutingModule } from './crearpartido-routing.module';

import { CrearpartidoPage } from './crearpartido.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearpartidoPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CrearpartidoPage]
})
export class CrearpartidoPageModule {}
