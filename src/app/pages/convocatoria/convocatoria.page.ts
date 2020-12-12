import { Component, OnInit,Input } from '@angular/core';
import { ModalController, AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ConvocatoriaPageModule } from './convocatoria.module';
import { EstadoconvocatoriaComponent } from 'src/app/components/estadoconvocatoria/estadoconvocatoria.component';

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.page.html',
  styleUrls: ['./convocatoria.page.scss'],
})
export class ConvocatoriaPage implements OnInit {
  @Input() IdEvento;
  @Input() IdEquipo;
  constructor(private MotalCtrl: ModalController,
    private usuarioService: UsuarioService,
    private pop : PopoverController,
    private http: HttpClient,   
    private storage: Storage,
    public alertCtrl: AlertController,
    public loadingController: LoadingController) { }
    convocatorias:any;
    cupos:any;
    convocatoriasManual:any;
    EstadosConvocatoria:any;
    Agregar:number;
    NombreAsistente:string;

  ngOnInit() {
    this.Agregar = 0;
    this.ListarEstadoConvocatoria();
    this.ListarConvocatoriaManual();
    this.ListarConvocatoria();
    this.ListarCuposUtilizado();
  }


  AgregarAsistente(){
    console.log(this.Agregar )
    if (this.Agregar == 0){this.Agregar = 1}
    else{this.Agregar = 0}
  }


  AceptaAgregar(){



  
    var header = { "headers": {"Content-Type": "application/json"} };
    
    var data = JSON.stringify({
      "Evento": this.IdEvento,
      "IdEquipo": this.IdEquipo,
      "Nombre": this.NombreAsistente
    });
  
 
    return new Promise((resolve, reject) => {
     
      this
       this.http.post(this.usuarioService.urlApi+'api/ConvocatoriaManual', data, header)
       .toPromise()
       .then((response) =>
       {
        
        this.ListarConvocatoriaManual()
  
       })
       .catch((error) =>
       {
         console.error('API Error : ', error.status);
         console.error('API Error : ', JSON.stringify(error));
         reject(error.json());
       });
     });

  }




  ListarCuposUtilizado(){
    return new Promise( resolve =>{
  
      return this.http.get(this.usuarioService.urlApi+'api/Convocatoria?IdEventoCupos='+this.IdEvento)
      .subscribe(respuesta => {
       
        this.cupos = respuesta;
      
        return(respuesta)         
        
      });
  
    });
  }



  ListarConvocatoria(){
    return new Promise( resolve =>{
  
      return this.http.get(this.usuarioService.urlApi+'api/Convocatoria?IdEvento='+this.IdEvento)
      .subscribe(respuesta => {
       
        this.convocatorias = respuesta;
        this.Agregar = 0;
        return(respuesta)         
        
      });
  
    });
  }


  ListarConvocatoriaManual(){
    return new Promise( resolve =>{
  
      return this.http.get(this.usuarioService.urlApi+'api/Convocatoria?IdEvento2='+this.IdEvento)
      .subscribe(respuesta => {
       
        this.convocatoriasManual = respuesta;
        this.Agregar = 0;
        return(respuesta)         
        
      });
  
    });
  }

  async MostrarPostulacion(c,e){
      const convo = await this.pop.create({
      component:EstadoconvocatoriaComponent,
     // event:c,
      componentProps: {
        'IdConvocatoria': c,
        'estado': e
      }
      });

      await convo.present()
      
      this.ListarConvocatoria();
}


async MostrarPostulacionManual(c,e){
 // const convo = await this.pop.create({
 // component:EstadoconvocatoriaComponent,
 
 // componentProps: {
 //   'IdConvocatoria': c,
 //   'estado': e
  //}
 // });

  //await convo.present()
  
 
}



ListarEstadoConvocatoria(){
  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Convocatoria?i=1')
    .subscribe(respuesta => {
     
      this.EstadosConvocatoria = respuesta;
      return(respuesta)         
      
    });

  });
}


  async presentAlert(mensaje,header) {
    const alert = await this.alertCtrl.create({
      header: header,
      
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }


  Uno(u,c){
            this.cambiarGrupo(c,u,1)
  }

  Dos(u,c){
    
    this.cambiarGrupo(c,u,2)
  }


  UnoManual(u,c){
    this.cambiarGrupoManual(c,u,1)
}

  DosManual(u,c){

  this.cambiarGrupoManual(c,u,2)
  }




cambiarGrupo(combocatoria,usuario, numero){
  this.presentLoading()
  return new Promise( resolve =>{
  
    return this.http.get(this.usuarioService.urlApi+'api/Convocatoria?IdConvocatoria='+combocatoria+'&IdUsuario='+usuario +'&Numero='+numero)
    .subscribe(respuesta => {
     
      this.ListarConvocatoria()
             
      
    });

  });
}



cambiarGrupoManual(combocatoria,usuario, numero){
  this.presentLoading()
  return new Promise( resolve =>{
  
    return this.http.get(this.usuarioService.urlApi+'api/Convocatoria?IdConvocatoria='+combocatoria+'&nombre='+usuario +'&Numero='+numero)
    .subscribe(respuesta => {
     
      this.ListarConvocatoriaManual()
             
      
    });

  });
}




async presentLoading() {
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Actualizando...',
    duration: 10
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();

}


  Salir(){
    this.MotalCtrl.dismiss();
}

}
