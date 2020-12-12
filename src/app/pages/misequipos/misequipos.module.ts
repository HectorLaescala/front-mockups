import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisequiposPageRoutingModule } from './misequipos-routing.module';

import { MisequiposPage } from './misequipos.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { AdminequipoPage } from '../adminequipo/adminequipo.page';
import { AdminequipoPageModule } from '../adminequipo/adminequipo.module';

@NgModule({
  entryComponents:[
    AdminequipoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisequiposPageRoutingModule,
    ComponentsModule,
    AdminequipoPageModule
  ],
  declarations: [MisequiposPage]
})
export class MisequiposPageModule {}
