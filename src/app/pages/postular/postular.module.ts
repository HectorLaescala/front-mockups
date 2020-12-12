import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostularPageRoutingModule } from './postular-routing.module';

import { PostularPage } from './postular.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostularPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PostularPage]
})
export class PostularPageModule {}
