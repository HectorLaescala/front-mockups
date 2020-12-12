import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-creararbitro',
  templateUrl: './creararbitro.page.html',
  styleUrls: ['./creararbitro.page.scss'],
})
export class CreararbitroPage implements OnInit {
 
  constructor(
    private storage: Storage,
    private usuarioService: UsuarioService,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private router: Router,
    private http: HttpClient
  ) { }
  IdCategoria:string;
  IdSubCategoria:string;
  Observacion:string;
  IdUsuario:string;
  Valor:string;
  Categorias:any;
  SubCategorias:any;
  ngOnInit() {
    this.storage.get('IdUsuario').then((val) => {this.IdUsuario = val;  });
    
   this.ListaCategorias();

  }


  Guardar(){

    var header = { "headers": {"Content-Type": "application/json"} };
    
  var data = JSON.stringify({
    "IdArbitro": 1,
    "IdUsuario": this.IdUsuario,
    "IdSubCategoria": this.IdSubCategoria,
    "Valor": this.Valor,
    "Vigencia": 1,
    "Observacion": this.Observacion
  });

  
  return new Promise((resolve, reject) => {
     
    this
     this.http.post(this.usuarioService.urlApi+'api/Arbitros', data, header)
     .toPromise()
     .then((response) =>
     {
            console.log(response)
              this.presentAlert(response);
           
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
     
      
      message: mensaje,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  

  finalizar(){
  
      this.navCtrl.navigateRoot('/login');
    }
    

  CargaSub(){
 
    return new Promise( resolve =>{
  
      return this.http.get(this.usuarioService.urlApi+'api/categorias?IdCategoria='+this.IdCategoria)
      .subscribe(respuesta => {
       
       
        this.SubCategorias = respuesta;
        return(respuesta)         
        
      });
  
    });
  
  }


    async  ListaCategorias(){
  
   
      return new Promise( resolve =>{
  
        return this.http.get(this.usuarioService.urlApi+'api/categorias')
        .subscribe(respuesta => {
         
         
          this.Categorias = respuesta;
          return(respuesta)         
          
        });
  
      });
  
  }

}
