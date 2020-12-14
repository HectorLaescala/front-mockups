import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilSimpleModalPageRoutingModule } from './perfil-simple-modal-routing.module';

import { PerfilSimpleModalPage } from './perfil-simple-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilSimpleModalPageRoutingModule
  ],
  declarations: [PerfilSimpleModalPage]
})
export class PerfilSimpleModalPageModule {}
