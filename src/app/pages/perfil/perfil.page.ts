import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
NombreUsuario: string;
Arbitro: number;
Postulaciones:any;
Equipos:any;
Categorias:any;
SubCategorias:any;
IdSubCategoria: string = '0';
IdCategoria: string;


TodosLosEquipos:any;
Invitaciones: any;

slideOptsFirst = {
  spaceBetween: 14,
  slidesPerView: 2
}

slideOptsMiddle = {
  spaceBetween: -7,
  slidesPerView: 2
}

slideOptsFinal = {
  spaceBetween: -25,
  slidesPerView: 1.05
}

  constructor( private menuCtrl: MenuController,
    private storage: Storage,
    private usuarioService: UsuarioService,
    public navCtrl: NavController,
    private http: HttpClient,
    public alertCtrl: AlertController) { }
    IdUsuario: string;
  ngOnInit() {


    /*this.storage.get('IdUsuario').then((val) => {
      if (val == null)
      {
       this.navCtrl.navigateRoot('/login');
      }else{

        this.storage.get('NombreUsuario').then((val) => {this.NombreUsuario = val;  });
        this.storage.get('IdUsuario').then((val2) => {this.IdUsuario = val2; this.ValidaArbitro(val2) });
        this.storage.get('IdUsuario').then((val) => { this.ListarEquipos(val); });
        this.storage.get('IdUsuario').then((val) => { this.ListarInvitaciones(val); });
        this.storage.get('IdUsuario').then((val) => { this.ListaEquipoPostulados(val); });
        this.ListaCategorias();
     
      }
   

   });*/

   
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



CargaSub(){
 
  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/categorias?IdCategoria='+this.IdCategoria)
    .subscribe(respuesta => {
     
     
      this.SubCategorias = respuesta;
      return(respuesta)         
      
    });

  });

}

  Aceptar(t){
    return new Promise((resolve, reject) => {
      return this.http.get(this.usuarioService.urlApi + 'api/InvitacionEquipo?IdInvitacionEquipo='+t)
      .toPromise()
      .then((response) =>
      {
       
        if (response == "OK"){
            
          this.presentAlert("Se acepto al Usuario");
         
          this.Invitaciones = [];
          this.storage.get('IdUsuario').then((val) => { this.ListarInvitaciones(val); });
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



  ListarEquipos(IdUsuario){


    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Equipo?UsuarioEquipo='+IdUsuario)
      .subscribe(respuesta => {
            
        if (respuesta== "1")
        {
         
          resolve(false);
        }else
        {
          
          this.Equipos = respuesta;  
       
          
        }
        
      });
  
    });


  }

  ListaEquipoPostulados(IdUsuario){


    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Equipo?IdUsuarioPostulante='+IdUsuario)
      .subscribe(respuesta => {
            
        if (respuesta== "1")
        {
         
          resolve(false);
        }else
        {
          
          this.Postulaciones = respuesta;  
       
          
        }
        
      });
  
    });

  }




  ListarInvitaciones(IdUsuario){


    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Usuario?IdUsuarioInvitado='+IdUsuario)
      .subscribe(respuesta => {
            
        if (respuesta== "1")
        {
          console.log("Error: Login Fallido");
          resolve(false);
        }else
        {
          this.Invitaciones = respuesta;  
         
          
        }
        
      });
  
    });

  }






  async ValidaArbitro(IdUsuario){
    this.Arbitro = 0;
    const valido = await this.usuarioService.VerificaArbitro(IdUsuario);
    if (valido)
    {
      this.Arbitro = 1;      
    }else{
      this.Arbitro = 0;
    }
  
  }



  BuscaEquipo(ev:any){
      
    this.ListaTodosLosEquipos(ev.detail.value);
      
  }

  async ListaTodosLosEquipos(filtro){


    this.TodosLosEquipos = [] 
     return new Promise( resolve =>{
   
       return this.http.get(this.usuarioService.urlApi+'api/Equipo?filtro='+filtro + '&IdSubCategoria=' +this.IdSubCategoria + '&Idusuario=' + this.IdUsuario)
       .subscribe(respuesta => {
     
         this.TodosLosEquipos = respuesta;
         return(respuesta)         
         
       });
   
     });
 
   }


   Postular(t){

       
  var header = { "headers": {"Content-Type": "application/json"} };
    
  var data = JSON.stringify({
    "IdUsuario": this.IdUsuario,
    "IdEquipo": t
  });

  
  
  return new Promise((resolve, reject) => {
     
    this
     this.http.post(this.usuarioService.urlApi+'api/PostularEquipo', data, header)
     .toPromise()
     .then((response) =>
     {
      
            if (response == "OK"){
            
              this.presentAlert("Postulacion realizada exitosamente");
              this.Postulaciones = []
              this.storage.get('IdUsuario').then((val) => { this.ListaEquipoPostulados(val); });

            }
            else
            {
              
              this.presentAlert(response);
            
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


   EliminarPostulacion(t){
   
  
    return new Promise((resolve, reject) => {
      return this.http.get(this.usuarioService.urlApi + 'api/Equipo?IdPostulacionEquipo='+t)
      .toPromise()
      .then((response) =>
      {
       
          
          this.presentAlert('Se elimino la Postulacion al equipo');
          this.Postulaciones = [];
          this.storage.get('IdUsuario').then((val) => { this.ListaEquipoPostulados(val); });
        
         
       
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }



   EliminarPendiente(t){
   
  
    return new Promise((resolve, reject) => {
      return this.http.get(this.usuarioService.urlApi + 'api/Equipo?IdInvitacionEquipo='+t)
      .toPromise()
      .then((response) =>
      {
       
          
          this.presentAlert('Se elimino la invitacion al equipo');
          this.Invitaciones = [];
          this.storage.get('IdUsuario').then((val) => { this.ListarInvitaciones(val); });
        
         
       
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
      header: 'Exito',
      
      message: mensaje,
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
