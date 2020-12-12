import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  push: boolean;  
  MostrarNumero: boolean;
  IdCategorias: number[] = [];
  NombreCategorias: string[] = [];
  SubIdCategorias: number[] = [];

  Nombre: string;
  ApellidoPaterno: string;
  ApellidoMaterno: string;
  NombreUsuario: string;
  Email: string;
  IdGenero:number;
  Telefono:number;
  Password: string;
  IdComuna: string = "0";
  Idregion:string;
  IdNacionalidad:string;
  IdUsuario: string;
  Categorias:any;
  SubCategorias:any;
  IdCategoria:string;
  IdSubCategoria:number;
  partidosCreados:string;
  partidosCancelados:string;
  PartidoSuspendido:string;
  idSubCategoriaEstadistica:string ="0";
  estadisticas: any;
  
  Datos:number;
  Deportes:number;
  Estadisticas:number;

  constructor( private menuCtrl: MenuController,
    private storage: Storage,
    private usuarioService: UsuarioService,
    public navCtrl: NavController,
    private http: HttpClient,
    public alertCtrl: AlertController) { }
    Paises: any;
    SubCategoria: any;
  ngOnInit( ) {
    this.Datos = 1;
    this.Deportes = 0;
    this.Estadisticas = 0;
    this.storage.get('IdUsuario').then((val) => {   this.ListarEstadisticas(val);  });
    this.storage.get('Notificaciones').then((val) => {this.push = val;  });
    this.storage.get('MostrarNumero').then((val) => {this.MostrarNumero = val;  });
    this.storage.get('NombreUsuario').then((val) => {this.NombreUsuario = val;  });
    this.storage.get('Nombre').then((val) => {this.Nombre = val;  });
    this.storage.get('ApellidoPaterno').then((val) => {this.ApellidoPaterno = val;  });
    this.storage.get('ApellidoMaterno').then((val) => {this.ApellidoMaterno = val;  });
    this.storage.get('Email').then((val) => {this.Email = val;  });
    this.storage.get('Telefono').then((val) => {this.Telefono = val;  });
    this.storage.get('Password').then((val) => {this.Password = val;  });
    this.storage.get('IdRegion').then((val) => {this.Idregion = val.toString();  });
    this.storage.get('IdNacionalidad').then((val) => {this.IdNacionalidad = val.toString(); });
    this.storage.get('IdGenero').then((val) => {this.IdGenero = val.toString(); });
    this.ListaPaises()
    this.ListaCategorias();
    this.storage.get('IdUsuario').then((val) => {this.IdUsuario = val;  this.ListarDeportesUsuario(val);});
   




    }

    async  ListaPaises(){

 
      return new Promise( resolve =>{

        return this.http.get(this.usuarioService.urlApi+'api/pais')
        .subscribe(respuesta => {
          
          this.Paises = respuesta;
          return(respuesta)
             
        });


      });

}

CargaSub(){
  if (this.IdCategoria)
  {
  
        return new Promise( resolve =>{

          return this.http.get(this.usuarioService.urlApi+'api/categorias?IdCategoria='+this.IdCategoria)
          .subscribe(respuesta => {
          
          
            this.SubCategorias = respuesta;
            return(respuesta)         
            
          });

        });
  }

}

AgregarDatos(){
  if (this.IdSubCategoria)
  {

    console.log(this.IdCategorias)
      this.IdCategorias.push(this.IdSubCategoria);
      this.BuscaNombreSubCategoria(this.IdSubCategoria);
  }
}


BuscaNombreSubCategoria(IdSubCategoria){
  if (IdSubCategoria)
  {
console.log(IdSubCategoria)
      return new Promise( resolve =>{

        return this.http.get(this.usuarioService.urlApi+'api/categorias?IdSubCategoria='+IdSubCategoria)
        .subscribe(respuesta => {
        
          console.log(respuesta);

          this.NombreCategorias.push(respuesta['Descripcion'] );
         
          return(respuesta)         
          
        });

      });
    }

}

MuestraDatos(){
  this.Datos = 1;
  this.Deportes = 0;
  this.Estadisticas = 0;
  }
  
  MuestraDeportes(){
    this.Datos = 0;
    this.Deportes = 1;
    this.Estadisticas = 0;
  }

  MuestraEstadisticas(){
    this.Datos = 0;
    this.Deportes = 0;
    this.Estadisticas = 1;
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


ListarEstadisticas(IdUsuario:string){

  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Estadisticas?IdUsuario='+IdUsuario + '&IdSubCategoria='+ this.idSubCategoriaEstadistica )
    .subscribe(respuesta => {
          
   
      this.estadisticas = respuesta;
       
      resolve(true);
      
      
    });


  });


}



ListaEstadisticasSub(){

  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Estadisticas?IdUsuario='+this.IdUsuario + '&IdSubCategoria='+ this.IdSubCategoria )
    .subscribe(respuesta => {
          
   
      this.estadisticas = respuesta;
       
      resolve(true);
      
      
    });


  });


}





    updatepush(){

      if(this.push){
        this.storage.set('Notificaciones',true);
      }else{
        this.storage.set('Notificaciones',false);
      }

    }
    updateMostrarContacto(){

      if(this.MostrarNumero){
        this.storage.set('MostrarNumero',true);
      }else{
        this.storage.set('MostrarNumero',false);
      }


    }
    
ActualizaPerfil(){


  var header = { "headers": {"Content-Type": "application/json"} };
    
  var data = JSON.stringify({
    "Nombre": this.Nombre,
    "ApellidoPaterno": this.ApellidoPaterno,
    "ApellidoMaterno": this.ApellidoMaterno,
    "IdUsuario": this.IdUsuario,
    "Email": this.Email,
    "Telefono": this.Telefono,
    "IdTipoUsuario": 1,
    "Password": this.Password,
    "IdComuna": this.IdComuna,
    "Contraseña": this.Password,
    "IdRegion": this.Idregion,
    "IdGenero": this.IdGenero
  });


  return new Promise((resolve, reject) => {
    this.http.put(this.usuarioService.urlApi +'/api/usuario', data, header)
    .toPromise()
    .then((response) =>
    {
      if (response == "Datos Guardados con exito")
      {
        
          for(let _obj of this.IdCategorias)
          {
          
            this.storage.get('IdUsuario').then((val) => {
                      this.agregarDeportePerfil(val,_obj)
            }); 
          
          }
        
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





async presentAlert(mensaje) {
  const alert = await this.alertCtrl.create({
    header: 'Actualización exitosa',
    
    message: mensaje,
    buttons: ['OK']
  });

  await alert.present();
}





agregarDeportePerfil(IdUsuario, idUbCategoria){


  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi + 'api/Usuario?IdUsuario='+IdUsuario+'&IdSubCategoria='+idUbCategoria)
    .subscribe(respuesta => {
            
    });


  });

    
}


ListarDeportesUsuario(IdUsuario){


  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Usuario?UsuarioDeporte='+IdUsuario)
    .subscribe(respuesta => {
          
      if (respuesta== "1")
      {
        console.log("Error: Login Fallido");
        resolve(false);
      }else
      {
       
        this.SubCategoria = respuesta;  
        
        
        for(let _obj of this.SubCategoria)
        {
      
          this.IdCategorias.push(_obj.IdSubCategoria.toString());
         
           this.BuscaNombreSubCategoria(_obj.IdSubCategoria);
        
        }
        
        
      }
      
      
    });


  });

}

EliminarCategoriaUsuario(t){
     
     
  return new Promise( resolve =>{

    return this.http.delete(this.usuarioService.urlApi + 'api/Usuario?SubCategoria='+t+'&IdUsuario='+this.IdUsuario)
    .subscribe(respuesta => {
         
   
      this.presentAlert("Eliminacion Existosa");
      this.NombreCategorias = [];
      this.storage.get('IdUsuario').then((val) => {this.IdUsuario = val;  this.ListarDeportesUsuario(val);});
     
    });


  });
}





}
