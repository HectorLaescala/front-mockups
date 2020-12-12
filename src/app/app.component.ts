import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { google } from 'google-maps';
import { OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public searchElementRef: ElementRef;
  public zoom: number;
  public latitude: number;
  public longtitude: number;
  public latlongs: any = [];
  public latlong: any = [];
  public searchControl: FormControl;
  

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
    ngOnInit(){
     
    }

  
}
