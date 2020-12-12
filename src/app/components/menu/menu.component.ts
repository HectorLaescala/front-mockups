import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { Routes, RouterModule } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  Nombre: string;
  Apellido: string;
  constructor(public navCtrl: NavController,
    private menuCtrl: MenuController,
     private storage: Storage) { }

  ngOnInit() {

    
    this.storage.get('Nombre').then((val) => {this.Nombre = val; console.log(val) });
    this.storage.get('ApellidoPaterno').then((val) => {this.Apellido = val;  });
  }


  Cerrar(){
    this.storage.clear();
    this.navCtrl.navigateRoot('/login');
  }


  togglemenu() {
    this.menuCtrl.toggle();
  }

}
