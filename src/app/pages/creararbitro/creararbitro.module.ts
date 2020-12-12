import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreararbitroPageRoutingModule } from './creararbitro-routing.module';

import { CreararbitroPage } from './creararbitro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreararbitroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreararbitroPage]
})
export class CreararbitroPageModule {}
