import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AdminequipoPage } from '../adminequipo/adminequipo.page';
import { ModalController } from '@ionic/angular';
import { AdminpartidoPage } from '../adminpartido/adminpartido.page';

@Component({
  selector: 'app-mispartidos',
  templateUrl: './mispartidos.page.html',
  styleUrls: ['./mispartidos.page.scss'],
})
export class MispartidosPage implements OnInit {

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private usuarioService: UsuarioService,
    private MotalCtrl: ModalController
    ) { }
    PartidosIndividual:any;
    PartidosAdmin:any;
  ngOnInit() {
    this.storage.get('IdUsuario').then((val) => {this.ListarPartidosadmin(val)  });
    this.storage.get('IdUsuario').then((val) => {this.ListarPartidos(val)  });
  }



  async  ListarPartidos(IdUsuario){

 
    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Equipo?IdUsuarioAdmininstrador='+IdUsuario)
      .subscribe(respuestas => {
     
        this.PartidosAdmin = respuestas;
        
        return(respuestas)         
        
      });

    });

}


async  ListarPartidosadmin(IdUsuario){

 
  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Equipo?IdUsuarioAdmin='+IdUsuario)
    .subscribe(respuesta => {
   
      this.PartidosIndividual = respuesta;
      
      return(respuesta)         
      
    });

  });

}




async VerEvento(IdEvento){
 
 
 
  const modal = await  this.MotalCtrl.create({

    component: AdminpartidoPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'IdEvento': IdEvento
    }

  })

  await modal.present();
}




}
