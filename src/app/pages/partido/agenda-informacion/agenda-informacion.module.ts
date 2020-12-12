import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaInformacionPageRoutingModule } from './agenda-informacion-routing.module';

import { AgendaInformacionPage } from './agenda-informacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaInformacionPageRoutingModule
  ],
  declarations: [AgendaInformacionPage]
})
export class AgendaInformacionPageModule {}
