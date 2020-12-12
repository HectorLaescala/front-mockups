import { Component, OnInit,Input } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-crearvacantes',
  templateUrl: './crearvacantes.page.html',
  styleUrls: ['./crearvacantes.page.scss'],
})
export class CrearvacantesPage implements OnInit {
  @Input() IdEvento;
  constructor(private MotalCtrl: ModalController,
    private usuarioService: UsuarioService,
    private http: HttpClient,   
    private storage: Storage,
    public alertCtrl: AlertController,
    public loadingController: LoadingController) { }
    Tipos:any;
    IdTipo:string;
    Cupos:string;
    CantidadArbitro:string = "0";
    CantidadRival:string = "0";
    CantidadJugador:string = "0";
    Asistente:string="0";

    Arbitro:boolean= false
    ConAsistente:boolean= false;
  ngOnInit() {

    this.ListaTipos();
    this.ListaCantidadArbitro();
    this.ListaCantidadRival();
    this.ListaCantidadjugador();
   

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

}
