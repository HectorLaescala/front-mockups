import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-recuperarclave',
  templateUrl: './recuperarclave.page.html',
  styleUrls: ['./recuperarclave.page.scss'],
})
export class RecuperarclavePage implements OnInit {

  constructor(
    private http: HttpClient,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public loadingController: LoadingController,
    private usuarioService: UsuarioService
    
  ) { }
  email:string;

  ngOnInit() {
  }

  async presentAlert(mensaje,header) {
    const alert = await this.alertCtrl.create({
      header: header,
      
      message: mensaje,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  

  async Recuperar(){



    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Enviando nueva clave a tu correo...',
      
    });


  loading.present();


    let clave = Math.random().toString(36).substring(7);
   
    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'/api/Email?to='+ this.email + '&clave=' +clave)
      .subscribe(respuesta => {
        loading.dismiss();   
        if (respuesta== "Email no registrado")
        {
         this.presentAlert(respuesta,"Error")
    
          
        }else
        {
          
          this.presentAlert("Se ha enviado una nueva clave de acceso al correo ingresado","Información")
          this.navCtrl.navigateRoot('/login');
        }
        
      });

    });

   
  }

}
