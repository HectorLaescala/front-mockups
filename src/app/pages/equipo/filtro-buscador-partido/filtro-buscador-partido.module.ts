import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltroBuscadorPartidoPageRoutingModule } from './filtro-buscador-partido-routing.module';

import { FiltroBuscadorPartidoPage } from './filtro-buscador-partido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltroBuscadorPartidoPageRoutingModule
  ],
  declarations: [FiltroBuscadorPartidoPage]
})
export class FiltroBuscadorPartidoPageModule {}
