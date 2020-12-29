import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaCalendarioPageRoutingModule } from './agenda-calendario-routing.module';

import { AgendaCalendarioPage } from './agenda-calendario.page';
import { CalendarModule } from "ion2-calendar";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    AgendaCalendarioPageRoutingModule
  ],
  declarations: [AgendaCalendarioPage]
})
export class AgendaCalendarioPageModule {}
