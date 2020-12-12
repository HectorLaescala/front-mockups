import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ComponentsModule } from './components/components.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import {Http, Response, Headers}   from '@angular/http'; 
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyARz9pedJajLTLUvlf8Re1ypWBQezhRzGg',
      libraries: ['places']
    }),
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    Keyboard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
