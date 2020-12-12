import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminequipoPageRoutingModule } from './adminequipo-routing.module';

import { AdminequipoPage } from './adminequipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminequipoPageRoutingModule
  ],
  declarations: [AdminequipoPage]
})
export class AdminequipoPageModule {}
