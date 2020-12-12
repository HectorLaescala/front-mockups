
import { Component, OnInit,Input } from '@angular/core';
import { ModalController, PopoverController, AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postulaciones',
  templateUrl: './postulaciones.page.html',
  styleUrls: ['./postulaciones.page.scss'],
})
export class PostulacionesPage implements OnInit {
  @Input() IdEvento;
  constructor(private MotalCtrl: ModalController,
    private usuarioService: UsuarioService,
    private http: HttpClient,
    private estadoconvocatoria : PopoverController,
    public alertCtrl: AlertController) { }
    Postulaciones:any;

  ngOnInit() {
    this.ListarPostulaciones();
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


}

