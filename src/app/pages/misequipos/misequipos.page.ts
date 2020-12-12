import { Component, OnInit, ɵConsole } from '@angular/core';
import { MenuController, NavController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { AdminequipoPage } from '../adminequipo/adminequipo.page';

@Component({
  selector: 'app-misequipos',
  templateUrl: './misequipos.page.html',
  styleUrls: ['./misequipos.page.scss'],
})
export class MisequiposPage implements OnInit {
  MisEquipos:any;
  Pertenezco: any;
  Postulando: any;
  Invitaciones: any;

  Equipos: number;
  Miembro:number;
  Postulaciones: number;

  constructor(
    private menuCtrl: MenuController,
    private storage: Storage,
    private usuarioService: UsuarioService,
    public navCtrl: NavController,
    private http: HttpClient,
    private MotalCtrl: ModalController
  ) { }
  IdUsuario: string;
  ngOnInit() {

    this.Equipos= 1;
    this.Miembro= 0;
    this.Postulaciones = 0;

    this.storage.get('IdUsuario').then((val) => { this.ListarMisEquipos(val); });
    this.storage.get('IdUsuario').then((val) => { this.ListarPertenezco(val); });
  }



  MuestraEquipos(){
    this.Equipos= 1;
    this.Miembro= 0;
    this.Postulaciones = 0;
  }
  MuestraMiembro(){
    this.Equipos= 0;
    this.Miembro= 1;
    this.Postulaciones = 0;
  }
  MuestraPostulaciones(){
    this.Equipos= 0;
    this.Miembro= 0;
    this.Postulaciones = 1;
  }


  async  ListarMisEquipos(IdUsuario){

 console.log(IdUsuario)
    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Equipo?IdUsuario='+IdUsuario)
      .subscribe(respuesta => {
        if(respuesta != "No"){
          this.MisEquipos = respuesta;
   
        }
         
        
      });


    });


}



ListarPertenezco(IdUsuario){
  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Equipo?IdUsuarioPertenezco='+IdUsuario)
    .subscribe(respuesta => {
      if(respuesta != "No"){
        this.Pertenezco = respuesta;
      
      }  
        
   
  
    });


  });

}


async Navegar(IdEquipo,IdRolJugadorEquipo){
const modal = await  this.MotalCtrl.create({

    component: AdminequipoPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'IdEquipo': IdEquipo,
     'IdRolJugadorEquipo': IdRolJugadorEquipo
    }

  })

  await modal.present();
}




}
