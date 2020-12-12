import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarpartidoPageRoutingModule } from './buscarpartido-routing.module';

import { BuscarpartidoPage } from './buscarpartido.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { EstadoconvocatoriaComponent } from 'src/app/components/estadoconvocatoria/estadoconvocatoria.component';

@NgModule({

  entryComponents:[
    EstadoconvocatoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarpartidoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BuscarpartidoPage]
})
export class BuscarpartidoPageModule {}
