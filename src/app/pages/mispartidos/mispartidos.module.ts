import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MispartidosPageRoutingModule } from './mispartidos-routing.module';

import { MispartidosPage } from './mispartidos.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { AdminpartidoPageModule } from '../adminpartido/adminpartido.module';
import { AdminpartidoPage } from '../adminpartido/adminpartido.page';

@NgModule({
  entryComponents:[
    AdminpartidoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MispartidosPageRoutingModule,
    ComponentsModule,
    AdminpartidoPageModule
  ],
  declarations: [MispartidosPage]
})
export class MispartidosPageModule {}
