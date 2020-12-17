import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarEquiposPostulantesModalPageRoutingModule } from './administrar-equipos-postulantes-modal-routing.module';

import { AdministrarEquiposPostulantesModalPage } from './administrar-equipos-postulantes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarEquiposPostulantesModalPageRoutingModule
  ],
  declarations: [AdministrarEquiposPostulantesModalPage]
})
export class AdministrarEquiposPostulantesModalPageModule {}
