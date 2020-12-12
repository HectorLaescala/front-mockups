import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodosequiposPageRoutingModule } from './todosequipos-routing.module';

import { TodosequiposPage } from './todosequipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodosequiposPageRoutingModule
  ],
  declarations: [TodosequiposPage]
})
export class TodosequiposPageModule {}
