import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController, PickerController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crearpartido',
  templateUrl: './crearpartido.page.html',
  styleUrls: ['./crearpartido.page.scss'],
})
export class CrearpartidoPage implements OnInit {
  
  nroCancha:string;
  cantCupos:string;
  
  NuevoRecito:string;
  EsNuevoRecito:string;
  NuevoEvento:boolean;
  IdCategoria:string;
  IdSubCategoria:string
  
  NombreRecito: string;
  IdComuna:string;
  Direccion: string;
  IdTipoEvento:string;
  Observacion:string;
  ConEquipo:string;
  



  NombreEvento:string
  IdUsuario:string
  FechaEvento:Date
  Hora:string;
  IdRecinto:string
  IdEquipo:string;
  
  constructor( private menuCtrl: MenuController,
    private pickerCtrl: PickerController,
    private storage: Storage,
    private usuarioService: UsuarioService,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private router: Router,
    private http: HttpClient
    ) { }
    Categorias:any;
    SubCategorias:any;
    Comuna:any;
    Recintos:any;
    TiposEventos:any;
    IdRecintoCreado: string;
    DireccionRecinto:any;
    Equipos:any;
    Idregion:string;
    Cupos:string;
    IdEstadoRecerva:string = "2";
    Duracion:string;
  
  
    ngOnInit() {
      this.nroCancha = "0";
      this.cantCupos = "0";
    this.NuevoRecito="NO";
    this.ConEquipo = "NO";
    this.storage.get('IdUsuario').then((val) => {this.IdUsuario = val;  });
    this.storage.get('IdRegion').then((val) => {this.Idregion = val.toString(); this.ListaRecintosInicio(val); });
   this.ListaCategorias();
   this.ListarTipoeventos();
  
   
 
  }

  masCancha(){
    var Menro =  parseInt(this.nroCancha)
    Menro =  Menro +1;
    this.nroCancha = String(Menro);
  }
  menosCancha(){
    
    var Manro =  parseInt(this.nroCancha)
    Manro =  Manro -1;
    
    this.nroCancha = String(Manro);
  }



  masCupo(){
    var Menro =  parseInt(this.cantCupos)
    Menro =  Menro +1;
    this.cantCupos = String(Menro);
  }
  menosCupo(){
    
    var Manro =  parseInt(this.cantCupos)
    Manro =  Manro -1;
    
    this.cantCupos = String(Manro);
  }


  NuevoRecinto(){
  
    if(this.NuevoEvento){
      this.NuevoRecito="SI"
    }else{
      this.NuevoRecito="NO"
    }
  }






  CargarEquipos(event){
    if (event.detail.value == 1)
    {
      this.IdEquipo = "0";
      this.Equipos = [];
      this.ConEquipo ="NO";
    }else
    {
      this.storage.get('IdUsuario').then((val) => {this.ListarEquiposUsuarioAdmin(val);  }); 
      this.ConEquipo ="SI";
    }
  }



  async  ListarEquiposUsuarioAdmin(IdUsuario){

 
    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Equipo?UsuarioEquipo='+IdUsuario)
      .subscribe(respuesta => {
       
        this.Equipos = respuesta;
        
        return(respuesta)         
        
      });

    });

}

SelecionaRecinto(){
  
  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/recinto?IdRecinto='+this.IdRecinto)
    .subscribe(respuesta => {
   
     this.DireccionRecinto = respuesta
  
      
      return(respuesta)         
      
    });

  });


}


  async  ListaRecintos(){

 
    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/recinto?IdRegion='+this.Idregion)
      .subscribe(respuesta => {
       
        this.Recintos = respuesta;
        this.DireccionRecinto= [];
        return(respuesta)         
        
      });

    });

}

async  ListaRecintosInicio(IdRegion){

 
  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/recinto?IdRegion='+IdRegion)
    .subscribe(respuesta => {
     
      this.Recintos = respuesta;
      
      return(respuesta)         
      
    });

  });

}





async presentAlert(mensaje) {
  const alert = await this.alertCtrl.create({
    header: 'Evento Creado',
    
    message: mensaje,
    buttons: ['OK']
  });

  await alert.present();
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


CargaComuna(){
 
  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Comuna?IdRegion='+this.Idregion)
    .subscribe(respuesta => {
     
    
      this.Comuna = respuesta;
      return(respuesta)         
      
    });

  });


}


async  ListarTipoeventos(){

 
  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Eventos')
    .subscribe(respuesta => {
     
     
      this.TiposEventos = respuesta;
      return(respuesta)         
      
    });

  });

}



 crarEventoRecinto(){

  return new Promise( resolve =>{

    var header = { "headers": {"Content-Type": "application/json"} };
    var data = JSON.stringify({
      "IdUsuario": this.IdUsuario,
      "Nombre": this.NombreRecito,
      "Direccion": this.Direccion,
      "IdComuna": this.IdComuna
    });

     
   
       this.http.post(this.usuarioService.urlApi+'api/Recinto', data, header)
       .toPromise()
       .then((response) =>
       {
        this.IdRecintoCreado = response.toString()
        this.creaEvento();
       
        resolve(true);
       
       })
       .catch((error) =>
       {
         console.error('API Error : ', error.status);
         console.error('API Error : ', JSON.stringify(error));
        
       });


       resolve(true);
   
  


  });
    

}

async CrearEvento(){
  
  console.log("NombreEvento" + this.NombreEvento);
  console.log("IdUsuario" + this.IdUsuario);
  console.log("Observacion" + this.Observacion);
  console.log("Hora" + this.Hora);
  console.log("fecha" + this.FechaEvento);
  console.log("nroCancha" + this.nroCancha);
  console.log("cantCupos" + this.cantCupos);
  console.log("IdSubCategoria" + this.IdSubCategoria);
  console.log("IdRecinto" + this.IdRecinto);
  

  
 // if(this.NuevoEvento){
     
 //    this.EsNuevoRecito = "1";

 //     const eventoNuevoCreado = await this.crarEventoRecinto();
      
       
 //   }else
 //   {
 //     this.IdRecintoCreado = "0"
 //     this.EsNuevoRecito = "0";

 //     this.creaEvento();
 //   }


  



}


async creaEvento(){

  var header = { "headers": {"Content-Type": "application/json"} };
  
  var data = JSON.stringify({
    
    "NombreEvento": this.NombreEvento,
    "IdUsuarioCreador": this.IdUsuario,
    "FechaEvento": this.FechaEvento,
    "IdRecinto": this.IdRecinto,
    "Observacion": this.Observacion,
    "IdRecintoCreado": this.IdRecintoCreado,
    "IdEquipo": this.IdEquipo,
    "IdTipoEvento": this.IdTipoEvento,
    "IdEstadoEvento": 1,
    "IdSubCategoria": this.IdSubCategoria,
    "NuevoRecinto": this.EsNuevoRecito,
    "NombrenuevoRecinto": "S/N",
    "Hora":this.Hora,
    "Cupos" : this.Cupos,
    "IdEstadoRecerva": this.IdEstadoRecerva,
    "Duracion": this.Duracion
  
  });


  return new Promise((resolve, reject) => {
     
    this
     this.http.post(this.usuarioService.urlApi+'api/Eventos', data, header)
     .toPromise()
     .then((response) =>
     {
      this.presentAlert("Evento Creado Exitosamente");
      this.navCtrl.navigateRoot('/principal');
    
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
