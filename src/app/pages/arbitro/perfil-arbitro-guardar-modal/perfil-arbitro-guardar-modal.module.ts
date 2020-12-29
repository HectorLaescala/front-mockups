import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilArbitroGuardarModalPageRoutingModule } from './perfil-arbitro-guardar-modal-routing.module';

import { PerfilArbitroGuardarModalPage } from './perfil-arbitro-guardar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilArbitroGuardarModalPageRoutingModule
  ],
  declarations: [PerfilArbitroGuardarModalPage]
})
export class PerfilArbitroGuardarModalPageModule {}
