import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvocatoriaPageRoutingModule } from './convocatoria-routing.module';

import { ConvocatoriaPage } from './convocatoria.page';
import { EstadoconvocatoriaComponent } from 'src/app/components/estadoconvocatoria/estadoconvocatoria.component';
import { EstadopostulacionComponent } from 'src/app/components/estadopostulacion/estadopostulacion.component';
import { CrearvacantesPage } from '../crearvacantes/crearvacantes.page';

@NgModule({
  entryComponents:[
    EstadoconvocatoriaComponent,
    EstadopostulacionComponent,
    ConvocatoriaPage,
    CrearvacantesPage
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvocatoriaPageRoutingModule
  ],
  declarations: [ConvocatoriaPage]
})
export class ConvocatoriaPageModule {}
