import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FiltroBuscadorPartidoPageModule } from '../equipo/filtro-buscador-partido/filtro-buscador-partido.module';
import { FiltroBuscadorPartidoPage } from '../equipo/filtro-buscador-partido/filtro-buscador-partido.page';

@NgModule({
  entryComponents: [ FiltroBuscadorPartidoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    ComponentsModule,
    FiltroBuscadorPartidoPageModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
