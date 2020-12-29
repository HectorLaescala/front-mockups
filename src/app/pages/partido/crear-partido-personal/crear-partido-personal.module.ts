import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { CrearPartidoPersonalPageRoutingModule } from './crear-partido-personal-routing.module';
import { CrearPartidoPersonalPage } from './crear-partido-personal.page';
import { AgregarRecintoModalPageModule } from '../agregar-recinto-modal/agregar-recinto-modal.module';
import { AgregarRecintoModalPage } from '../agregar-recinto-modal/agregar-recinto-modal.page';
import { AgendaCalendarioPageModule } from '../agenda-calendario/agenda-calendario.module';
import { AgendaCalendarioPage } from '../agenda-calendario/agenda-calendario.page';

@NgModule({
  entryComponents: [AgregarRecintoModalPage, AgendaCalendarioPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPartidoPersonalPageRoutingModule,
    AgendaCalendarioPageModule,
    AgregarRecintoModalPageModule
  ],
  declarations: [CrearPartidoPersonalPage]
})
export class CrearPartidoPersonalPageModule { }
