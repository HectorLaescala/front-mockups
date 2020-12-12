import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

urlApi ="http://localhost:61322/";
Usuarios :any;

  constructor( private http: HttpClient,
    private storage: Storage) { }

    login(email: string, password: string){


        return new Promise( resolve =>{

          return this.http.get(this.urlApi+'api/Usuario?Email='+email+'&password='+password)
          .subscribe(respuesta => {
                
            if (respuesta== "1")
            {
              console.log("Error: Login Fallido");
              resolve(false);
            }else
            {
              if (respuesta== "2")
              {
                  console.log("No existe el Email en nuestros registros");
                  resolve(false);
              }
              else
              {
                this.storage.clear();
                this.storage.set('IdUsuario',respuesta['IdUsuario'] );
                this.storage.set('Nombre',respuesta['Nombre'] );
                this.storage.set('ApellidoPaterno',respuesta['ApellidoPaterno'] );
                this.storage.set('ApellidoMaterno',respuesta['ApellidoMaterno'] );
                this.storage.set('Rut',respuesta['Rut'] );
                this.storage.set('Email',respuesta['Email'] );
                this.storage.set('Telefono',respuesta['Telefono'] );
                this.storage.set('IdTipoUsuario',respuesta['IdTipoUsuario'] );
                this.storage.set('Password',respuesta['Contraseña'] );
                this.storage.set('FechaCreacion',respuesta['FechaCreacion'] );
                this.storage.set('FechaEliminacion',respuesta['FechaEliminacion'] );
                this.storage.set('IdMotivoEliminacion',respuesta['IdMotivoEliminacion'] );
                this.storage.set('Vigencia',respuesta['Vigencia'] );
                this.storage.set('NombreUsuario',respuesta['NombreUsuario'] );
                this.storage.set('IdRegion',respuesta['IdRegion'] );
                this.storage.set('IdNacionalidad',respuesta['IdNacionalidad'] );
                this.storage.set('IdGenero',respuesta['IdGenero'] );
                this.storage.set('Notificaciones',false);
                this.storage.set('MostrarNumero',false);
           
                resolve(true);
              }
              
              
            }
            
            
          });


        });
             
    }



    VerificaArbitro(IdUsuario: string)
    {

      return new Promise( resolve =>{

        return this.http.get(this.urlApi+'api/Usuario?IdUsuarioArbitro='+IdUsuario)
        .subscribe(respuesta => {
              
          if (respuesta== "1")
          {
       
            resolve(false);
          }else
          {
           this.Usuarios = respuesta;
            resolve(respuesta);
            
          }
          
          
        });


      });

    }

    

}
