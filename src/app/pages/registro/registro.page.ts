
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController, PickerController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
    
  Nombre: string;
  ApellidoPaterno: string;
  ApellidoMaterno: string;
  NombreUsuario: string;
  Email: string;
  IdGenero:number;
  Telefono:string;
  Telefono2:string;
  codigo:string;
  Password: string;
  IdCodigoPais:string;
  FechaNacimiento:string;


  gadgets: any[] = [
    [
      "Samsung Note 10",
      "OnePlus 7T",
      "Redmi Note8",
      "Oppo Reno3 Pro",
      "VIVO V11 Pro"
    ],
    [
      "ASUS ZenBook Pro",
      "Lenovo IdeaPad",
      "Acer Nitro",
      "Dell G3",
      "MSI Gamming GF75 Thin"
    ]
  ];

  numColumns:number = 2; 
  numOptions:number =5 

  constructor(
    private pickerCtrl: PickerController,
    private  http : HttpClient,public alertCtrl: AlertController,
    public navCtrl: NavController,
    private router: Router,
    private  UsuarioService: UsuarioService
    ) { }

  ngOnInit() {
    this.IdCodigoPais = "1".toString();
  }
  

 


  

  Crear() {

  
  
    if (!this.Nombre){this.Nombre = "S/N";}
    if (!this.ApellidoPaterno){this.ApellidoPaterno = "S/N";}
    if (!this.ApellidoMaterno){this.ApellidoMaterno = "S/N";}
    

    this.Telefono2 = this.codigo.replace("+","") + this.Telefono;
    this.setUsers();



  }
  setUsers() {
    var header = { "headers": {"Content-Type": "application/json"} };
  
    var data = JSON.stringify({
      "Nombre": this.Nombre,
      "ApellidoPaterno": this.ApellidoPaterno,
      "ApellidoMaterno": this.ApellidoMaterno,
      "Email": this.Email,
      "NombreUsuario": this.NombreUsuario,
      "Telefono":  this.Telefono2,
      "IdTipoUsuario": 1,
      "Contraseña": this.Password,
      "IdRegion": 0,
      "IdNacionalidad":0,
      "IdComuna": 0
    });
   
    return new Promise((resolve, reject) => {
     
     this
      this.http.post(this.UsuarioService.urlApi+'api/usuario', data, header)
      .toPromise()
      .then((response) =>
      {
        if (response == "Datos Guardados con exito")
        {
          this.presentAlert(response);
          this.router.navigate(['/login']);
        }
        else
        {
          this.presentAlert("El Correo ya se encuentra registrado");
          this.router.navigate(['/registro']);
        }
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
    
  }


  async presentAlert(mensaje) {
    const alert = await this.alertCtrl.create({
      header: 'Bienvenido',
      
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }



}
