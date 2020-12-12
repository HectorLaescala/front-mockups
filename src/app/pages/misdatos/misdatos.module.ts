import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisdatosPageRoutingModule } from './misdatos-routing.module';

import { MisdatosPage } from './misdatos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisdatosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MisdatosPage]
})
export class MisdatosPageModule {}
