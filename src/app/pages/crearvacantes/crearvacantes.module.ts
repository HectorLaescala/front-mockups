import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearvacantesPageRoutingModule } from './crearvacantes-routing.module';

import { CrearvacantesPage } from './crearvacantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearvacantesPageRoutingModule
  ],
  declarations: [CrearvacantesPage]
})
export class CrearvacantesPageModule {}
