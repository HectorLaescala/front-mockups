import { Component, OnInit,Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';


import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-estadoconvocatoria',
  templateUrl: './estadoconvocatoria.component.html',
  styleUrls: ['./estadoconvocatoria.component.scss'],
})
export class EstadoconvocatoriaComponent implements OnInit {
  @Input() IdConvocatoria;
  @Input() estado;
  constructor(private MotalCtrl: ModalController,
    private usuarioService: UsuarioService,
    private http: HttpClient,
    private estadoconvocatoria : PopoverController) { }
  
  EstadosConvocatoria:any;
  
  ngOnInit() {
       // console.log(this.IdConvocatoria)
       // console.log(this.estado)
    this.ListarEstadoConvocatoria()
      
  }


  Seleccion(est){
      
    
    console.log(est)

    return new Promise( resolve =>{
    
      return this.http.get(this.usuarioService.urlApi+'api/Convocatoria?IdConvocatoria='+this.IdConvocatoria+'&IdEstadoConvocatoria='+ est)
      .subscribe(respuesta => {
       //cerrar
      });
  
    });



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

}
