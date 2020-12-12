import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-perfilarbitro',
  templateUrl: './perfilarbitro.page.html',
  styleUrls: ['./perfilarbitro.page.scss'],
})
export class PerfilarbitroPage implements OnInit {

  constructor(
    private storage: Storage,
    private usuarioService: UsuarioService,
    public navCtrl: NavController,
    private http: HttpClient,
    public alertCtrl: AlertController) { }
arbitro:any;
IdUsuario:string;
IdCategoria:string;
IdSubCategoria:string;

IdCategoriaEst:string;
IdSubCategoriaEst:string;

Observacion:string;
Valor:string;
Categorias:any;
SubCategorias:any;
estadisticas:any;

DeportesMostrar:number=1;
EstadisticasMostrar:number=0;
  ngOnInit() {
    this.ListaCategorias();
    this.storage.get('IdUsuario').then((val) => {this.IdUsuario = val; this.ListarPrecios(val) });
    this.storage.get('IdUsuario').then((val) => {this.IdUsuario = val; this.ListarEstadisticas(val) });
    
  }

  MuestraDeportes(){
          this.DeportesMostrar = 1;
          this.EstadisticasMostrar = 0;
    }
    
    MuestraEstadisticas(){
          this.DeportesMostrar = 0;
          this.EstadisticasMostrar = 1;
    }

  ListarPrecios(IdUsuario){


    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Arbitros?IdUsuario='+IdUsuario)
      .subscribe(respuesta => {
            
        this.arbitro = [];
          this.arbitro = respuesta;  
         
         
      
        
      });
  
    });

  }


  ListarEstadisticas(IdUsuario){


    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/EstadisticasArbitro?IdUsuario='+IdUsuario+'&IdSubCategoria=0')
      .subscribe(respuesta => {
            
        this.estadisticas = [];
          this.estadisticas = respuesta;  
         
         
      
        
      });
  
    });

  }


  ListaEstadisticasSub(){


    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/EstadisticasArbitro?IdUsuario='+this.IdUsuario+'&IdSubCategoria='+this.IdSubCategoria)
      .subscribe(respuesta => {
            
        this.estadisticas = [];
          this.estadisticas = respuesta;  
         
         
      
        
      });
  
    });

  }
  

  dejar(){

    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Arbitros?IdUsuarioDejar='+this.IdUsuario)
      .subscribe(respuesta => {
            
        this.presentAlert(respuesta);
        this.navCtrl.navigateRoot('/login');
                 
      });
  
    });

   
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
              this.ListarPrecios(this.IdUsuario); 
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

  

  async presentAlert(Mensaje) {
    const alert = await this.alertCtrl.create({
          
      message: Mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }



  Actualizar(IdArbitro,Valor,Observacion){

    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Arbitros?IdArbitro='+IdArbitro +'&Valor='+Valor+'&Observacion='+Observacion)
      .subscribe(respuesta => {
            
        this.presentAlert(respuesta);
        this.ListarPrecios(this.IdUsuario); 
                 
      });
  
    });

  }


  Eliminar(IdArbitro){

    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Arbitros?IdArbitro='+IdArbitro)
      .subscribe(respuesta => {
            
        this.presentAlert(respuesta);
        this.ListarPrecios(this.IdUsuario); 
                 
      });
  
    });



  }




  CargaSubEst(){
 
    return new Promise( resolve =>{
  
      return this.http.get(this.usuarioService.urlApi+'api/categorias?IdCategoria='+this.IdCategoria)
      .subscribe(respuesta => {
       
       
        this.SubCategorias = respuesta;
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
