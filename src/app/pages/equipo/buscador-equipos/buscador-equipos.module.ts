import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscadorEquiposPageRoutingModule } from './buscador-equipos-routing.module';

import { BuscadorEquiposPage } from './buscador-equipos.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FiltroBuscadorPage } from '../filtro-buscador/filtro-buscador.page';
import { FiltroBuscadorPageModule } from '../filtro-buscador/filtro-buscador.module';

@NgModule({
  entryComponents: [ FiltroBuscadorPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscadorEquiposPageRoutingModule,
    ComponentsModule,
    FiltroBuscadorPageModule
  ],
  declarations: [BuscadorEquiposPage]
})
export class BuscadorEquiposPageModule {}
