import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilArbitroPageRoutingModule } from './perfil-arbitro-routing.module';
import { PerfilArbitroPage } from './perfil-arbitro.page';
import { PerfilArbitroAgregarModalPageModule } from '../perfil-arbitro-agregar-modal/perfil-arbitro-agregar-modal.module';
import { PerfilArbitroAgregarModalPage } from '../perfil-arbitro-agregar-modal/perfil-arbitro-agregar-modal.page';
import { PerfilArbitroGuardarModalPageModule } from '../perfil-arbitro-guardar-modal/perfil-arbitro-guardar-modal.module';
import { PerfilArbitroGuardarModalPage } from '../perfil-arbitro-guardar-modal/perfil-arbitro-guardar-modal.page';

@NgModule({
  entryComponents: [ PerfilArbitroAgregarModalPage, PerfilArbitroGuardarModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilArbitroPageRoutingModule,
    PerfilArbitroAgregarModalPageModule,
    PerfilArbitroGuardarModalPageModule
  ],
  declarations: [PerfilArbitroPage]
})
export class PerfilArbitroPageModule {}
