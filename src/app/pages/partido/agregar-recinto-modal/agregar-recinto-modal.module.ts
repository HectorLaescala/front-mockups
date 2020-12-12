import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarRecintoModalPageRoutingModule } from './agregar-recinto-modal-routing.module';

import { AgregarRecintoModalPage } from './agregar-recinto-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarRecintoModalPageRoutingModule
  ],
  declarations: [AgregarRecintoModalPage]
})
export class AgregarRecintoModalPageModule {}
