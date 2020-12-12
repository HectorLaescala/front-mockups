import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-crearequipo',
  templateUrl: './crearequipo.page.html',
  styleUrls: ['./crearequipo.page.scss'],
})
export class CrearequipoPage implements OnInit {

  Descripcion:string;
  categorias:any;
  IdCategorias: number[] = [];
  NombreCategorias: string[] = [];
  IdCategoria:string;
  IdSubCategoria:string;
  IdUsuario:string;
  Nombre:string;
  IdRelacion:string;
  Tipo:string;
  TipoOtro:boolean;
  TipoAmatur:boolean;
  TipoClub:boolean;
  IdEquipo:string;
  Recibe: boolean;
  promedio:string;
  IdGenero:string;
  descripcion:string;
  constructor(private menuCtrl: MenuController,
    private storage: Storage,
    private usuarioService: UsuarioService,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private router: Router,
    private http: HttpClient) { }
    Categorias:any;
    SubCategorias:any;
 
 
    ngOnInit() {
     this.TipoOtro= false;
     this.TipoAmatur= false;
     this.TipoClub= false;
     this.Recibe = false;
     this.Tipo  = "0";

    this.ListaCategorias();
    this.storage.get('IdUsuario').then((val) => {this.IdUsuario = val;});
 
  }


  AgregarDatos(){
    //this.IdCategorias.push(this.IdSubCategoria);
    this.BuscaNombreSubCategoria();
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


BuscaNombreSubCategoria(){
 
  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/categorias?IdSubCategoria='+this.IdSubCategoria)
    .subscribe(respuesta => {
     
      console.log(respuesta);

      this.NombreCategorias.push(respuesta['Descripcion'] );
    
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
CrearEquipo(){
 

 if (this.Tipo == "0"){ this.Tipo = "3";}

 console.log("aqui2: " + this.descripcion)
}

CrearEquipos(){

   
 if (this.TipoOtro == true){ this.Tipo = "1";}
 if (this.TipoAmatur == true){ this.Tipo = "2";}
 if (this.TipoClub == true){ this.Tipo = "3";}
 
  var header = { "headers": {"Content-Type": "application/json"} };
    
  var data = JSON.stringify({
    "IdUsuarioCreador": this.IdUsuario,
    "Nombre": this.Nombre,
    "TipoEquipo": this.Tipo,
    "EdadPromedio": this.promedio,
    "Genero": this.IdGenero,
    "Descripcion": this.descripcion,
    "RecibeMiembros": this.Recibe,
    "IdSubCategoria": this.IdSubCategoria
  });

  
  return new Promise((resolve, reject) => {
     
    this
     this.http.post(this.usuarioService.urlApi+'api/Equipo', data, header)
     .toPromise()
     .then((response) =>
     {
      
            if (response == "Ya existe Un Equipo"){
            
              this.presentAlert("Ya existe un equipo con el mismo nombre creado por ti","Error");
            }
            else
            {
              
              console.log(response);
              for(let _obj of this.IdCategorias)
              {
               
                this.IdEquipo = response.toString();    
              
                this.agregarDeporteeEquipo(_obj,this.IdEquipo)
                
              }
              
              this.presentAlert("El Equipo se ha Creado Correctamente","Felicidades");
              
              
              
              
            
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

async presentAlert(mensaje,titulo) {
  const alert = await this.alertCtrl.create({
    header: titulo,
    
    message: mensaje,
    buttons: ['OK']
  });

  await alert.present();
}


agregarDeporteeEquipo(IdSubCategoria, idEquipo){



  
  var header = { "headers": {"Content-Type": "application/json"} };
    
  var data = JSON.stringify({
    "IdEquipo": idEquipo,
    "IdSubCategoria": IdSubCategoria
  });

  
  return new Promise((resolve, reject) => {
     
    this
     this.http.post(this.usuarioService.urlApi+'api/DeporteEquipo', data, header)
     .toPromise()
     .then((response) =>
     {
      
            if (response == "Ya existe Un Equipo"){
            
              this.presentAlert("Ya existe un equipo con el mismo nombre creado por ti", "Error");
            }
            else
            {
              
              console.log(response);
            
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




}
