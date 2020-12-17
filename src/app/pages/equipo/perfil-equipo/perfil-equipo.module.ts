import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilEquipoPageRoutingModule } from './perfil-equipo-routing.module';

import { PerfilEquipoPage } from './perfil-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEquipoPageRoutingModule
  ],
  declarations: [PerfilEquipoPage]
})
export class PerfilEquipoPageModule {}
