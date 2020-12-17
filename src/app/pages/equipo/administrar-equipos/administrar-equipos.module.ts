import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarEquiposPageRoutingModule } from './administrar-equipos-routing.module';
import { AdministrarEquiposPage } from './administrar-equipos.page';
import { AdministrarEquiposModalPageModule } from '../administrar-equipos-modal/administrar-equipos-modal.module';
import { AdministrarEquiposModalPage } from '../administrar-equipos-modal/administrar-equipos-modal.page';
import { AdministrarEquiposPostulantesModalPageModule } from '../administrar-equipos-postulantes-modal/administrar-equipos-postulantes-modal.module';
import { AdministrarEquiposPostulantesModalPage } from '../administrar-equipos-postulantes-modal/administrar-equipos-postulantes-modal.page';

@NgModule({
  entryComponents: [ AdministrarEquiposModalPage, AdministrarEquiposPostulantesModalPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarEquiposPageRoutingModule,
    AdministrarEquiposModalPageModule,
    AdministrarEquiposPostulantesModalPageModule
  ],
  declarations: [AdministrarEquiposPage]
})
export class AdministrarEquiposPageModule {}
