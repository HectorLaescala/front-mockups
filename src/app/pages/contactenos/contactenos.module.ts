import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactenosPageRoutingModule } from './contactenos-routing.module';

import { ContactenosPage } from './contactenos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactenosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContactenosPage]
})
export class ContactenosPageModule {}
