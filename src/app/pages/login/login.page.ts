import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  IdUsuario: string;

  constructor(private http: HttpClient, public alertCtrl: AlertController,
    public navCtrl: NavController,
    private router: Router,
    private usuarioService: UsuarioService,
    private storage: Storage
  ) { }

  ngOnInit() {
    //this.navCtrl.navigateRoot('/principal');
    //this.storage.get('IdUsuario').then((val) => {
      //if (val) {
       // this.IdUsuario = val;
        //this.navCtrl.navigateRoot('/equipo/administrar-equipos');
     // }
   // });


  }

  async login() {

    this.navCtrl.navigateRoot('/arbitro/perfil-arbitro');
   
   /* const valido = await this.usuarioService.login(this.email, this.password);

    if (valido) {

      this.navCtrl.navigateRoot('/principal');
    }
    else {
      this.presentAlert();
    }*/


  }

  getUsers() {
    return this.http.get(this.usuarioService.urlApi + '/api/Usuario?Email=' + this.email + '&password=' + this.password);

  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error',

      message: 'Error al ingresar Email o Password',
      buttons: ['OK']
    });

    await alert.present();
  }






}






