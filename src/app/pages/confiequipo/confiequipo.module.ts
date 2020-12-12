import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiequipoPageRoutingModule } from './confiequipo-routing.module';

import { ConfiequipoPage } from './confiequipo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiequipoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConfiequipoPage]
})
export class ConfiequipoPageModule {}
