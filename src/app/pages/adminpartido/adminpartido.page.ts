import { Component, OnInit ,Input} from '@angular/core';
import { ModalController, PopoverController, AlertController, LoadingController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { EstadoconvocatoriaComponent } from 'src/app/components/estadoconvocatoria/estadoconvocatoria.component';
import { EstadopostulacionComponent } from 'src/app/components/estadopostulacion/estadopostulacion.component';
import { Storage } from '@ionic/storage';
import { ConvocatoriaPage } from '../convocatoria/convocatoria.page';
import { CrearvacantesPageModule } from '../crearvacantes/crearvacantes.module';
import { CrearvacantesPage } from '../crearvacantes/crearvacantes.page';
import { PostulacionesPage } from '../postulaciones/postulaciones.page';



@Component({
  selector: 'app-adminpartido',
  templateUrl: './adminpartido.page.html',
  styleUrls: ['./adminpartido.page.scss'],
})
export class AdminpartidoPage implements OnInit {
  @Input() IdEvento;
  
  constructor(private MotalCtrl: ModalController,
    private usuarioService: UsuarioService,
    private http: HttpClient,
    private estadoconvocatoria : PopoverController,
    private storage: Storage,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    private pop : PopoverController) { }
eventos:any;
Recintos:any;
EstadoReserva:any;
TiposEventos:any;
Estados:any;
IdEstadoEvento:string;
FechaEvento:string;
Observacion:string;
NombreEvento:string;
Hora:string;
DiaEvento:string;
Idregion:string;
IdRecinto:string;
IdTipoEvento:string;
convocatoria:string ="NO";
IdSubCategoria: string;
IdCategoria:string;
IdEquipo:string; 
Cupos:string;
IdEstadoRecerva:string = "2";
Duracion:string = "0";
SubCategoria:string;
Equipos:any;
CuposExtras:number;
diaEvento:string;
mesEvento:string;
anoEvento:string;
horaEvento:string;
minutoEvento:string;
Postulaciones:any;
Info:number = 1;
Vac:number = 0;
Post:number = 0;
Conv:number = 0;
Tipos:any;
IdTipo:string;
//Cupos:string;
CantidadArbitro:string = "0";
CantidadRival:string = "0";
CantidadJugador:string = "0";
Asistente:string="0";
convocatorias:any;
cupos:any;
convocatoriasManual:any;
EstadosConvocatoria:any;
Agregar:number;
NombreAsistente:string;
Arbitro:boolean= false
ConAsistente:boolean= false;



MuestraCuposExtras:number;
  ngOnInit() {
    this.MuestraCuposExtras = 0;
   
    this.ListaEvento(this.IdEvento)
    this.ListaTipos();
    this.ListaCantidadArbitro();
    this.ListaCantidadRival();
    this.ListaCantidadjugador();
    this.ListarPostulaciones();

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


 
  Eliminar(t){
    
    return new Promise( resolve =>{
  
      return this.http.get(this.usuarioService.urlApi + 'api/Postulacion?IdPostulacion='+t)
      .subscribe(respuesta => {
      
        this.Postulaciones = [];
        this.ListarPostulaciones()
        this.presentAlert("Se Cencelo correctamente la postulacion","Cancelado");
       
      });
  
  
    });
  }

  Aceptar(t){
    
    return new Promise( resolve =>{
  
      return this.http.get(this.usuarioService.urlApi + 'api/Postulacion?IdPostulacionAcepta='+t)
      .subscribe(respuesta => {
      
        this.Postulaciones = [];
        this.ListarPostulaciones()
        this.presentAlert("Se Acepto correctamente la postulacion","Aceptado");
       
      });
  
  
    });
  }

  ListarPostulaciones(){
    return new Promise( resolve =>{
  
      return this.http.get(this.usuarioService.urlApi+'api/Postulacion?IdEvento='+this.IdEvento)
      .subscribe(respuesta => {
       
        this.Postulaciones = respuesta;
       
        return(respuesta)         
        
      });
  
    });
  }


  async CrearVacantes(evento){
    
     this.Info = 0;
     this.Post = 0;
     this.Conv = 0;
     this.Vac = 1

  

   // const modal = await  this.MotalCtrl.create({

   //   component: CrearvacantesPage,
   //   cssClass: 'my-custom-class',
   //   componentProps: {
   //     'IdEvento': this.IdEvento
   //   }

   // })

   // await modal.present();

}
MuestraInfo(){
  this.Info = 1;
  this.Vac = 0;
  this.Post = 0;
  this.Conv = 0;


}


async Mostrarconvocatoria(evento){
  
  
  this.Info = 0;
  this.Vac = 0;
  this.Post = 0;
  this.Conv = 1;

  //const modal = await  this.MotalCtrl.create({

 //   component: ConvocatoriaPage,
 //   cssClass: 'my-custom-class',
 //   componentProps: {
 //     'IdEvento': this.IdEvento,
 //     'IdEquipo': this.IdEquipo
 //   }

 // })

  //await modal.present();

}




async MostrarPost(evento){
  
  
  this.Info = 0;
  this.Vac = 0;
  this.Post = 1;
  this.Conv = 0;

//  const modal = await  this.MotalCtrl.create({

//    component: PostulacionesPage,
//    cssClass: 'my-custom-class',
//    componentProps: {
//      'IdEvento': this.IdEvento
    
//    }

//  })

 // await modal.present();

}

  


  ActualizaCupos(){
    this.presentLoading()
    return new Promise( resolve =>{
    
      return this.http.get(this.usuarioService.urlApi+'api/Convocatoria?IdEvento='+this.IdEvento+'&Numero='+ this.CuposExtras)
      .subscribe(respuesta => {
       
        this.ListaEvento(this.IdEvento)
        this.presentAlert('Se agregaron los cupos','Actualización')
        this.MuestraCuposExtras = 0
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
  


  Cuposextras(){

    console.log(this.CuposExtras )

    if (this.MuestraCuposExtras == 0){
  
      this.MuestraCuposExtras = 1
    }else
    {
     
      this.MuestraCuposExtras = 0
    }

  }












CargarEquipos(event){
  if (event.detail.value == 1)
  {
   
    this.IdEquipo = "0";
    this.Equipos = [];
  }else
  {
    this.storage.get('IdUsuario').then((val) => {this.ListarEquiposUsuarioAdmin(val);  }); 
  }
}



CargarEquiposInicio(Tipo){

  if (Tipo == 1)
  {
   
    this.IdEquipo = "0";
    this.Equipos = [];
  }else
  {
    this.storage.get('IdUsuario').then((val) => {this.ListarEquiposUsuarioAdmin(val);  }); 
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


  async  ListaRecintosInicio(IdRegion){

 
    return new Promise( resolve =>{
  
      return this.http.get(this.usuarioService.urlApi+'api/recinto?IdRegion='+IdRegion)
      .subscribe(respuesta => {
       
        this.Recintos = respuesta;
        
        return(respuesta)         
        
      });
  
    });
  
  }
  
     ListaRecintos(){

    
    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/recinto?IdRegion='+this.Idregion )
      .subscribe(respuesta => {
        this.Recintos= [];
       this.IdRecinto = '0';
        this.Recintos = respuesta;
        
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

async  ListarEstadoReserva(){

 
  return new Promise( resolve =>{

    
    return this.http.get(this.usuarioService.urlApi+'api/Eventos?es=a')
    .subscribe(respuesta => {
     
     
      this.EstadoReserva   = respuesta;
      return(respuesta)         
      
    });

  });

}




async  ListarEstadoEvento(){

 
  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Eventos?a=a')
    .subscribe(respuesta => {
     
     
      this.Estados = respuesta;
      return(respuesta)         
      
    });

  });

}




async  DevuelveDiaEvento(fecha){


  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Eventos?fecha=' + fecha)
    .subscribe(respuesta => {
     
     
      this.DiaEvento = respuesta.toString();
    
      return(respuesta)         
      
    });

  });

}


  async ListaEvento(IdEvento){


     return new Promise( resolve =>{
   
       return this.http.get(this.usuarioService.urlApi+'api/Eventos?IdEvento='+IdEvento)
       .subscribe(respuesta => {
        this.eventos = respuesta

        

        for(let i of this.eventos)
        {
         
         
          this.NombreEvento = i.NombreEvento;
          this.FechaEvento = i.fechaCreacion;  
          this.Hora = i.Hora;
          this.Cupos = i.Cupos;
          
          this.ListaRecintosInicio(i.IdRegion)
          this.IdRecinto = i.IdRecinto.toString();
         
          this.DevuelveDiaEvento(this.FechaEvento)
          this.Idregion = i.Idregion; 
          this.IdTipoEvento = i.IdTipoEvento.toString();
          this.IdEquipo = i.IdEquipo.toString();
          this.Observacion = i.Observacion;
          this.SubCategoria = i.SubCategoria;
          this.CargarEquiposInicio(i.IdTipoEvento);
          this.ListarTipoeventos();          
          this.IdEstadoRecerva = i.IdEstadoRecerva.toString();
          this.ListarEstadoReserva();
          this.IdEstadoEvento = i.IdEstadoEvento.toString();
          this.ListarEstadoEvento();
          this.diaEvento= i.diaEvento;
          this.horaEvento = i.horaEvento;
          this.minutoEvento = i.minutoEvento;

         
          this.obtieneNombreMes(i.mesEvento)



          this.anoEvento= i.anoEvento;
            if(i.IdTipoEvento.toString()== "1")
            {
              this.convocatoria = "NO";
            }else
            {
              this.convocatoria = "SI";
            }



        }


   
         
       });
   
     });
 
   }

  

obtieneNombreMes(mesEvento){

  if (mesEvento == "1"){this.mesEvento = "Enero"};
  if (mesEvento == "2"){this.mesEvento = "Febrero"};
  if (mesEvento == "3"){this.mesEvento = "Marzo"};
  if (mesEvento == "4"){this.mesEvento = "Abril"};
  if (mesEvento == "5"){this.mesEvento = "Mayo"};
  if (mesEvento == "6"){this.mesEvento = "Junio"};
  if (mesEvento == "7"){this.mesEvento = "Julio"};
  if (mesEvento == "8"){this.mesEvento = "Agosto"};
  if (mesEvento == "9"){this.mesEvento = "Septiembre"};
  if (mesEvento == "10"){this.mesEvento = "Octubre"};
  if (mesEvento == "11"){this.mesEvento = "Noviembre"};
  if (mesEvento == "12"){this.mesEvento = "Diciembre"};  
}


   CambiarTipo(){
    if(this.IdTipoEvento.toString()== "1")
    {
      this.convocatoria = "NO";
    }else
    {
      this.convocatoria = "SI";
    }
   }

   actualiza(){
    var header = { "headers": {"Content-Type": "application/json"} };
    
    var data = JSON.stringify({
      "IdEvento": this.IdEvento,
      "NombreEvento": this.NombreEvento,
      "FechaEvento": this.FechaEvento,
      "IdRecinto": this.IdRecinto,
      "IdEquipo": this.IdEquipo,
      "IdTipoEvento": this.IdTipoEvento,
      "IdEstadoEvento": this.IdEstadoEvento,
      "IdSubCategoria": this.IdSubCategoria,
      "Hora": this.Hora,
      "IdEstadoRecerva": this.IdEstadoRecerva,
      "Duracion": this.Duracion
    });
  
  
    return new Promise((resolve, reject) => {
      this.http.put(this.usuarioService.urlApi +'/api/Eventos', data, header)
      .toPromise()
      .then((response) =>
      {
        if (response == "Datos Guardados con exito")
        {
          
          this.ListaEvento(this.IdEvento)
          
          this.presentAlert("Se actualizo correctamente el evento","Actualizacion");
  
         
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


   async presentAlert(mensaje,header) {
    const alert = await this.alertCtrl.create({
      header: header,
      
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }


  Salir(){
    this.MotalCtrl.dismiss();
}





ListaTipos(){
    
  return new Promise( resolve =>{
  
    return this.http.get(this.usuarioService.urlApi+'api/Postulacion?i=1')
    .subscribe(respuesta => {
     
     
      this.Tipos = respuesta;
    });

  });
}


ListaCantidadArbitro(){
  
  return new Promise( resolve =>{
  
    return this.http.get(this.usuarioService.urlApi+'api/Postulacion?IdEvento='+this.IdEvento+'&IdTipoPostulacion=3')
    .subscribe(respuesta => {
     
     
      this.CantidadArbitro =   respuesta.toString();
      this.ListaCantidadAsistente();
      if (this.CantidadArbitro == "1")
      {
        this.Arbitro = true;
      }
      
      this.ConAsistente = false;


    });

  });
}



ListaCantidadAsistente(){
  
  return new Promise( resolve =>{
  
    return this.http.get(this.usuarioService.urlApi+'api/Postulacion?IdEvento='+this.IdEvento)
    .subscribe(respuesta => {
     
     
      
      if (respuesta.toString() == "1")
      {
        this.ConAsistente = true;
      }
      
      this.ConAsistente = false;


    });

  });
}



ListaCantidadRival(){
  
  return new Promise( resolve =>{
    return this.http.get(this.usuarioService.urlApi+'api/Postulacion?IdEvento='+this.IdEvento+'&IdTipoPostulacion=2')
     .subscribe(respuesta => {
     
     
      this.CantidadRival =   respuesta.toString();
    });

  });
}
ListaCantidadjugador(){
  
  return new Promise( resolve =>{
    return this.http.get(this.usuarioService.urlApi+'api/Postulacion?IdEvento='+this.IdEvento+'&IdTipoPostulacion=1')   
   
    .subscribe(respuesta => {
     
     
      this.CantidadJugador =   respuesta.toString();
    });

  });
}


Guardar(){
  this.GuardarDatos(1,this.CantidadJugador); //JUGADOR
  this.GuardarDatos(2,this.CantidadRival); //RIVAL
  this.GuardarDatos(3,this.CantidadArbitro); //ARBITRO

  this.presentAlert('Datos Guardados con exito','Informacion')

}


GuardarDatos(IdTipo,cantidad){

  return new Promise( resolve =>{

    var header = { "headers": {"Content-Type": "application/json"} };
    var data = JSON.stringify({
      "IdCreaPostulacion": 1,
      "IdEvento": this.IdEvento,
      "IdTipoPostulacion": IdTipo,
      "Cupos": cantidad,
      "Asistente":this.Asistente
    });

     
   
       this.http.post(this.usuarioService.urlApi+'api/Postulacion', data, header)
       .toPromise()
       .then((response) =>
       {
      
       
        this.ListaCantidadArbitro();
        this.ListaCantidadRival();
        this.ListaCantidadjugador();
       
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

cambioArbitro(event){
    if(event.detail.checked){
      this.CantidadArbitro = "1";
    }else{
      this.CantidadArbitro = "0";
    }
    console.log(this.CantidadArbitro)
  
}



cambioAsistente(event){
  if(event.detail.checked){
    this.Asistente = "1";
  }else{
    this.Asistente = "0";
  }
  console.log(this.Asistente)

}




}
