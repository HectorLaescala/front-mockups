import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalPage } from './principal.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage,
    children: [
      {
        path:'Calendario',
        loadChildren: '../calendario/calendario.module#CalendarioPageModule'
    },
    {
      path:'Perfil',
      loadChildren: '../perfil/perfil.module#PerfilPageModule'      
    },
    {
      path:'',
      loadChildren: '../perfil/perfil.module#PerfilPageModule'
    },
    {
      path:'postular',
      loadChildren: '../postular/postular.module#PostularPageModule'
      
    },
    {
      path:'Partido',
      loadChildren: '../crearpartido/crearpartido.module#CrearpartidoPageModule'
    },
    {
      path:'CrearPartido',
      loadChildren: '../crearpartido/crearpartido.module#CrearpartidoPageModule'
    }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ComponentsModule],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
