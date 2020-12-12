import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalPage } from '../pages/principal/principal.page';
import { HeaderbackComponent } from './headerback/headerback.component';
import { EstadoconvocatoriaComponent } from './estadoconvocatoria/estadoconvocatoria.component';
import { EstadopostulacionComponent } from './estadopostulacion/estadopostulacion.component';


import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import {Http, Response, Headers}          from '@angular/http'; 

import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';





const routes: Routes = [
  {
    path: '',
    component: PrincipalPage
  }
];


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderbackComponent,
    MenuComponent,
    EstadoconvocatoriaComponent,
    EstadopostulacionComponent
  ],
  exports: [
    HeaderComponent,
    HeaderbackComponent,
    MenuComponent,
    EstadoconvocatoriaComponent,
    EstadopostulacionComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    
  ],
})
export class ComponentsModule { }
