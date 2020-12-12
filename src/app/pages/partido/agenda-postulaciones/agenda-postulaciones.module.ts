import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPostulacionesPageRoutingModule } from './agenda-postulaciones-routing.module';

import { AgendaPostulacionesPage } from './agenda-postulaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPostulacionesPageRoutingModule
  ],
  declarations: [AgendaPostulacionesPage]
})
export class AgendaPostulacionesPageModule {}
