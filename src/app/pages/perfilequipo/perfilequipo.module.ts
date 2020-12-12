import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilequipoPageRoutingModule } from './perfilequipo-routing.module';

import { PerfilequipoPage } from './perfilequipo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilequipoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PerfilequipoPage]
})
export class PerfilequipoPageModule {}
