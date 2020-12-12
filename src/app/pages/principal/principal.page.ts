import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage'
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  IdUsuario: string;
  Nombre: string;
  ApellidoPaterno: string;
  ApellidoMaterno: string;
  constructor( private menuCtrl: MenuController,
    private storage: Storage,
    public navCtrl: NavController) { }

  ngOnInit() {
   
    
  }

  togglemenu() {
    this.menuCtrl.toggle();
  }

}
