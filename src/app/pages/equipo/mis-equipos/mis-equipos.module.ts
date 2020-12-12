import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { MisEquiposPageRoutingModule } from './mis-equipos-routing.module';
import { MisEquiposPage } from './mis-equipos.page';
import { MisEquiposModalPageModule } from '../mis-equipos-modal/mis-equipos-modal.module';
import { MisEquiposModalPage } from '../mis-equipos-modal/mis-equipos-modal.page';

@NgModule({
  entryComponents: [ MisEquiposModalPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisEquiposPageRoutingModule,
    MisEquiposModalPageModule
  ],
  declarations: [MisEquiposPage]
})
export class MisEquiposPageModule {}
