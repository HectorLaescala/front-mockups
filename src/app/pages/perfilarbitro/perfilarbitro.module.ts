import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilarbitroPageRoutingModule } from './perfilarbitro-routing.module';

import { PerfilarbitroPage } from './perfilarbitro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilarbitroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PerfilarbitroPage]
})
export class PerfilarbitroPageModule {}
