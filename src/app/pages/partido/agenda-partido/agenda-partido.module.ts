import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPartidoPageRoutingModule } from './agenda-partido-routing.module';

import { AgendaPartidoPage } from './agenda-partido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPartidoPageRoutingModule
  ],
  declarations: [AgendaPartidoPage]
})
export class AgendaPartidoPageModule {}
