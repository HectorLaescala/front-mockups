import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EstadoconvocatoriaComponent } from 'src/app/components/estadoconvocatoria/estadoconvocatoria.component';

@Component({
  selector: 'app-buscarpartido',
  templateUrl: './buscarpartido.page.html',
  styleUrls: ['./buscarpartido.page.scss'],
})
export class BuscarpartidoPage implements OnInit {

  constructor( private usuarioService: UsuarioService,
    private http: HttpClient,
    private estadoconvocatoria : PopoverController,
    private storage: Storage,
    private pop : PopoverController) { }
  convocatorias:any;
  Estados:any;
  estd:string;
  ngOnInit() {
    this.estd ="1";
   
    this.storage.get('IdUsuario').then((val) => { this.ListarConvocatorias(val); });
  }




  async MostrarPostulacion(c,e){
    console.log(c + '   '  + e)
    const convo = await this.pop.create({
      component:EstadoconvocatoriaComponent,
      event:c,
      componentProps: {
        'IdConvocatoria': c,
        'estado': e
      }
      });
    
      await convo.present()
    
   
}




  ListarConvocatorias(IdUsuario){
    
    return new Promise( resolve =>{

      return this.http.get(this.usuarioService.urlApi+'api/Convocatoria?idUsuarioConvocatoria='+IdUsuario)
      .subscribe(respuesta => {
            
        if (respuesta== "1")
        {
         
          resolve(false);
        }else
        {
        
          this.convocatorias = respuesta;  
     
          
        }
        
      });
  
    });
  }

}
