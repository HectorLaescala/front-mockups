import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  estadisticas: any;
  idSubCategoria:string ="0";



  IdUsuario:string;


  constructor(private menuCtrl: MenuController,
    private storage: Storage,
    private usuarioService: UsuarioService,
    private http: HttpClient,
    public navCtrl: NavController) { }

  ngOnInit() {
  
  
    this.storage.get('IdUsuario').then((val) => {   this.ListarEstadisticas(val);  });
 
  }



ListarEstadisticas(IdUsuario:string){

  return new Promise( resolve =>{

    return this.http.get(this.usuarioService.urlApi+'api/Estadisticas?IdUsuario='+IdUsuario + '&IdSubCategoria='+ this.idSubCategoria )
    .subscribe(respuesta => {
   
         
       
          this.estadisticas = respuesta;
       
          resolve(true);
          
        
    
      
      
    });


  });


}

}
