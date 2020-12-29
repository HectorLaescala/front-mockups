import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilArbitroAgregarModalPageRoutingModule } from './perfil-arbitro-agregar-modal-routing.module';

import { PerfilArbitroAgregarModalPage } from './perfil-arbitro-agregar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilArbitroAgregarModalPageRoutingModule
  ],
  declarations: [PerfilArbitroAgregarModalPage]
})
export class PerfilArbitroAgregarModalPageModule {}
