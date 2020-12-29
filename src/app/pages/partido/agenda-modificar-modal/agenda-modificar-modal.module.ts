import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaModificarModalPageRoutingModule } from './agenda-modificar-modal-routing.module';

import { AgendaModificarModalPage } from './agenda-modificar-modal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaModificarModalPageRoutingModule
  ],
  declarations: [AgendaModificarModalPage]
})
export class AgendaModificarModalPageModule {}
