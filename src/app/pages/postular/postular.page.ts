import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-postular',
  templateUrl: './postular.page.html',
  styleUrls: ['./postular.page.scss'],
})


export class PostularPage implements OnInit {

  constructor( private menuCtrl: MenuController,
    private storage: Storage,
    private usuarioService: UsuarioService,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private router: Router,
    private http: HttpClient) { }
    Categorias:any;
    Region:any;
    Comuna:any;
    PostulacionesDisponibles:any;
    SubCategorias:any;
    IdCategoria:string;
    IdSubCategoria:string;
    IdUsuario: string;
    FechaEvento:string;
    IdComuna:string;
    Idregion:string;
    Mas: string;
    Opaciones:boolean;
  ngOnInit() {
    this.storage.get('IdUsuario').then((val) => {this.IdUsuario = val;  });
    this.ListaCategorias();
    this.Listarregion();
    this.Mas="NO"
    this.IdSubCategoria ="0";
    this.IdCategoria = "0";
    this.FechaEvento = '3020-01-01T23:16:39.368-04:00';
    this.IdComuna = "0";
    this.Idregion = "0";
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

Listarregion(){



 
  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Region')
    .subscribe(respuesta => {
     
     
      this.Region = respuesta;
      return(respuesta)         
      
    });

  });

}


SeleccionRegion(){

  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Comuna?IdRegion='+ this.Idregion)
    .subscribe(respuesta => {
     
     
      this.Comuna = respuesta;
      return(respuesta)         
      
    });

  });



}


MasOpciones(){
  if(this.Opaciones){
    this.Mas="SI"
  }else{
    this.Mas="NO"
  }
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




  async  Postula(idEvento,IdTipoPostulacion){

    this.PostulacionesDisponibles = [];
    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Postulacion?IdEvento='+idEvento+'&IdUsuario='+this.IdUsuario+'&IdTipoPostulacion='+IdTipoPostulacion)
      .subscribe(respuesta => {
       
       
       // this.PostulacionesDisponibles = respuesta;
       
        this.presentAlert(respuesta)
       
        this.Buscar()
       
        return(respuesta)      
        
        
        
      });

    });

}




async presentAlert(mensaje) {
  const alert = await this.alertCtrl.create({
    header: 'Postulacion',
    
    message: mensaje,
    buttons: ['OK']
  });

  await alert.present();
}

  async  Buscar(){

    this.PostulacionesDisponibles = [];
    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Postulacion?IdSubcategoria=' +this.IdSubCategoria+'&IdCategoria='+ this.IdCategoria+ '&Fecha='+this.FechaEvento+'&IdRegion='+ this.Idregion+ '&IdComuna='+ this.IdComuna)
      .subscribe(respuesta => {
       
       
        this.PostulacionesDisponibles = respuesta;
        return(respuesta)         
        
      });

    });

}




}
