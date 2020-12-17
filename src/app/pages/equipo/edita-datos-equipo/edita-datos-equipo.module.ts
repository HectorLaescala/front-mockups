import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaDatosEquipoPageRoutingModule } from './edita-datos-equipo-routing.module';

import { EditaDatosEquipoPage } from './edita-datos-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaDatosEquipoPageRoutingModule
  ],
  declarations: [EditaDatosEquipoPage]
})
export class EditaDatosEquipoPageModule {}
