import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminpartidoPageRoutingModule } from './adminpartido-routing.module';

import { AdminpartidoPage } from './adminpartido.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { EstadoconvocatoriaComponent } from 'src/app/components/estadoconvocatoria/estadoconvocatoria.component';
import { EstadopostulacionComponent } from 'src/app/components/estadopostulacion/estadopostulacion.component';
import { ConvocatoriaPageModule } from '../convocatoria/convocatoria.module';
import { ConvocatoriaPage } from '../convocatoria/convocatoria.page';
import { CrearvacantesPageModule } from '../crearvacantes/crearvacantes.module';
import { CrearvacantesPage } from '../crearvacantes/crearvacantes.page';
import { PostulacionesPage } from '../postulaciones/postulaciones.page';
import { PostulacionesPageModule } from '../postulaciones/postulaciones.module';

@NgModule({
  entryComponents:[
    EstadoconvocatoriaComponent,
    EstadopostulacionComponent,
    ConvocatoriaPage,
    CrearvacantesPage,
    PostulacionesPage
    
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminpartidoPageRoutingModule,
    ComponentsModule,
    ConvocatoriaPageModule,
    PostulacionesPageModule,
    CrearvacantesPageModule
  ],
  declarations: [AdminpartidoPage]
})
export class AdminpartidoPageModule {}
