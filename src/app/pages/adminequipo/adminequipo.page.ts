import { Component, OnInit, Input } from '@angular/core';
import { ModalController, MenuController, NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminequipo',
  templateUrl: './adminequipo.page.html',
  styleUrls: ['./adminequipo.page.scss'],
})
export class AdminequipoPage implements OnInit {
@Input() IdEquipo;
@Input() IdRolJugadorEquipo;
Admin: string = 'No';
Equipo: any;
NombreEquipo: string;
SubCategoria: any;
Miembros: any;
Pendiente: any;
Postulaciones: any;
IdCategorias: number[] = [];
NombreCategorias: string[] = [];
SubIdCategorias: number[] = [];
Categorias:any;
SubCategorias:any;
Usuarios:any;
UsuariosBuscados:any;
IdSubCategoria:number;
IdCategoria:string;
IdUsuario:string;
  constructor(
    private MotalCtrl: ModalController,
    private menuCtrl: MenuController,
    private storage: Storage,
    private usuarioService: UsuarioService,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private router: Router,
    private http: HttpClient
  ) { }

  miembros:number;
  deportes:number;
  postulaciones:number;
  estadisticas:number;

  ngOnInit() {
    this.storage.get('IdUsuario').then((val2) => {this.IdUsuario = val2; });
    this.miembros = 1;
    this.deportes = 0;
    this.postulaciones=0;
    this.estadisticas=0;
    this.ListaCategorias();
      this.ListarDatosEquipo()
      this.ListarDeportesEquipo(this.IdEquipo);
      this.ListaUsuarioEquipo(this.Equipo);
      this.ListaUsuarioInvitado(this.Equipo);
      this.ListaUsuarioPostulados(this.Equipo);
      
    if (this.IdRolJugadorEquipo == 3 || this.IdRolJugadorEquipo == 1)
    {
      this.Admin ="SI"
    }
    
  }

  async ListaTodosLosUsuarios(filtro){


   this.Usuarios = [] 
    return new Promise( resolve =>{
  
      return this.http.get(this.usuarioService.urlApi+'api/Usuario?filtro='+filtro)
      .subscribe(respuesta => {
      console.log('aqui')
        this.Usuarios = respuesta;
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
  BuscaUsuario(ev:any){
      

    this.ListaTodosLosUsuarios(ev.detail.value);
      
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
  
        this.IdCategorias.push(this.IdSubCategoria);
        this.BuscaNombreSubCategoria(this.IdSubCategoria);
    }
  }
  
  MuestraMiembros(){
    this.miembros = 1;
    this.deportes = 0;
    this.postulaciones=0;
    this.estadisticas = 0;
  }
  MuestraDeportes(){
    this.miembros = 0;
    this.deportes = 1;
    this.postulaciones=0;
    this.estadisticas = 0;
  }
  
  MuestraPostulaciones(){
    this.miembros = 0;
    this.deportes = 0;
    this.estadisticas = 0;
    this.postulaciones=1;
  }
  MuestraEstadisticas(){
    this.miembros = 0;
    this.deportes = 0;
    this.postulaciones=0;
    this.estadisticas = 1;
  }
  
  
  ListarDatosEquipo(){
    return new Promise((resolve, reject) => {
     
      this
       this.http.get(this.usuarioService.urlApi+'api/Equipo?IdEquipo=' + this.IdEquipo)
       .toPromise()
       .then((response) =>
       {
        this.Equipo = response;


        for(let _obj of this.Equipo)
        {
         
         
        this.NombreEquipo = _obj.Descripcion
          
          
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


  ListarDeportesEquipo(IdEquipo){


    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Equipo?IdEquipoDeporte='+IdEquipo)
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


  ListaUsuarioEquipo(IdEquipo){


    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Equipo?IdDeporteMiembros='+this.IdEquipo)
      .subscribe(respuesta => {
            
        if (respuesta== "1")
        {
          console.log("Error: Login Fallido");
          resolve(false);
        }else
        {
          this.Miembros = respuesta;  
         
          
        }
        
      });
  
    });

  }

  ListaUsuarioInvitado(IdEquipo){


    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Equipo?IdEquipoAceptar='+this.IdEquipo)
      .subscribe(respuesta => {
            
        if (respuesta== "1")
        {
          console.log("Error: Login Fallido");
          resolve(false);
        }else
        {
          this.Pendiente = respuesta;  
         
          
        }
        
      });
  
    });

  }



  ListaUsuarioPostulados(IdEquipo){


    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Equipo?IdEquipoPostular='+this.IdEquipo)
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
  


  BuscaNombreSubCategoria(IdSubCategoria){
    if (IdSubCategoria)
    {
  
        return new Promise( resolve =>{
  
          return this.http.get(this.usuarioService.urlApi+'api/categorias?IdSubCategoria='+IdSubCategoria)
          .subscribe(respuesta => {
          
            this.NombreCategorias.push(respuesta['Descripcion'] );
           
            return(respuesta)         
            
          });
  
        });
      }
  
  }



  EliminarCategoriaEquipo(t){
     
     
    return new Promise( resolve =>{
  
      return this.http.delete(this.usuarioService.urlApi + 'api/Equipo?SubCategoria='+t+'&IdEquipo='+this.IdEquipo)
      .subscribe(respuesta => {
      
        this.NombreCategorias = [];
        this.ListarDeportesEquipo(this.IdEquipo)
       
      });
  
  
    });
  }



  EliminarMiembro(t){
    return new Promise( resolve =>{
  
      return this.http.delete(this.usuarioService.urlApi + 'api/Equipo?IdUsuarioEquipo='+t+'&IdEquipo=' + this.IdEquipo)
      .subscribe(respuesta => {
      
        this.NombreCategorias = [];
        this.ListarDeportesEquipo(this.IdEquipo)
        this.Miembros = [];
        this.ListaUsuarioEquipo(this.Equipo);
      });
  
  
    });
  }



  AgregaMiembro(t){

   
    
  var header = { "headers": {"Content-Type": "application/json"} };
    
  var data = JSON.stringify({
    "IdUsuario": t,
    "IdEquipo": this.IdEquipo
  });

  
  return new Promise((resolve, reject) => {
     
    this
     this.http.post(this.usuarioService.urlApi+'api/InvitacionEquipo', data, header)
     .toPromise()
     .then((response) =>
     {
      
            if (response == "OK"){
            
              this.presentAlert("Invitacion enviada con exito");
              this.Pendiente = [];
              this.ListaUsuarioInvitado(this.Equipo);
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




  ActualizaMiembro(t){
   
    var header = { "headers": {"Content-Type": "application/json"} };
    
    var data = JSON.stringify({
      "IdUsuarioEquipo": t,
      "IdEquipo": this.IdEquipo,
      
    });
  
  
    return new Promise((resolve, reject) => {
      this.http.put(this.usuarioService.urlApi +'api/Equipo', data, header)
      .toPromise()
      .then((response) =>
      {
        if (response == "Datos Guardados con exito")
        {
          
          this.presentAlert('El usuario ahora es administrador');
          this.ListaUsuarioEquipo(this.Equipo);
        
         
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


  QuitarAdmin(t){
   
  
    return new Promise((resolve, reject) => {
      return this.http.get(this.usuarioService.urlApi + 'api/Equipo?IdUsuarioQuita='+t+'&IdEquipo=' + this.IdEquipo)
      .toPromise()
      .then((response) =>
      {
        if (response == "Datos Guardados con exito")
        {
          
          this.presentAlert('El usuario ya no es administrador');
          this.ListaUsuarioEquipo(this.Equipo);
        
         
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
          this.ListaUsuarioPostulados(this.Equipo);
        
         
       
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }


  AbandonarEquipo(){
    return new Promise((resolve, reject) => {
      return this.http.get(this.usuarioService.urlApi + 'api/Equipo?IdUsuarioAbandonar='+this.IdUsuario+'&IdEquipo=' + this.IdEquipo)
      .toPromise()
      .then((response) =>
      {
       
          
          this.presentAlert('Abandonaste el equipo con exito');
          this.MotalCtrl.dismiss();
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

  Aceptar(t){
    return new Promise((resolve, reject) => {
      return this.http.get(this.usuarioService.urlApi + 'api/PostularEquipo?idPostulacion='+t)
      .toPromise()
      .then((response) =>
      {
       
        if (response == "OK"){
            
          this.presentAlert("Se acepto al Usuario");
          this.Miembros = [];
          this.ListaUsuarioEquipo(this.Equipo);
          this.Postulaciones = [];
          this.ListaUsuarioPostulados(this.Equipo)
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

  EliminarPendiente(t){
   
  
    return new Promise((resolve, reject) => {
      return this.http.get(this.usuarioService.urlApi + 'api/Equipo?IdInvitacionEquipo='+t)
      .toPromise()
      .then((response) =>
      {
       
          
          this.presentAlert('Se elimino la invitacion al equipo');
          this.Pendiente = [];
          this.ListaUsuarioInvitado(this.Equipo);
        
         
       
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
  

  ActualizaEquipo(){
    

    for(let _obj of this.IdCategorias)
    {
    
        this.agregarDeporteeEquipo(_obj,this.IdEquipo)
     
    
    }
this.presentAlert('Se realizo la actualizacion')

  }



  agregarDeporteeEquipo(IdSubCategoria, idEquipo){



    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi + 'api/Equipo?IdEquipo='+idEquipo+'&IdSubCategoria='+IdSubCategoria)
      .subscribe(respuesta => {
     
      });
  
  
    });
  
  
  
  
  
  }



  Salir(){
      this.MotalCtrl.dismiss();
  }

}
