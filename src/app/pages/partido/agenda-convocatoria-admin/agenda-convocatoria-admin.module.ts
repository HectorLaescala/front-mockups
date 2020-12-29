import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaConvocatoriaAdminPageRoutingModule } from './agenda-convocatoria-admin-routing.module';
import { AgendaConvocatoriaAdminPage } from './agenda-convocatoria-admin.page';
import { AgendaJugadorManualModalPageModule } from '../../partido/agenda-jugador-manual-modal/agenda-jugador-manual-modal.module';
import { AgendaJugadorManualModalPage } from '../../partido/agenda-jugador-manual-modal/agenda-jugador-manual-modal.page';

@NgModule({
  entryComponents: [ AgendaJugadorManualModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaConvocatoriaAdminPageRoutingModule,
    AgendaJugadorManualModalPageModule
  ],
  declarations: [AgendaConvocatoriaAdminPage]
})
export class AgendaConvocatoriaAdminPageModule {}
