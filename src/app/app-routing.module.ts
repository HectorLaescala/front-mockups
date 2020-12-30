import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'registro', loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule) },
  { path: 'principal', loadChildren: () => import('./pages/principal/principal.module').then(m => m.PrincipalPageModule) },
  { path: 'contactenos', loadChildren: () => import('./pages/contactenos/contactenos.module').then(m => m.ContactenosPageModule) },
  { path: 'recuperar-clave', loadChildren: () => import('./pages/recuperar-clave/recuperar-clave.module').then(m => m.RecuperarClavePageModule) },
  { path: 'valoracion/one', loadChildren: () => import('./pages/valoracion/one/one.module').then(m => m.OnePageModule) },
  { path: 'valoracion/two', loadChildren: () => import('./pages/valoracion/two/two.module').then(m => m.TwoPageModule) },
  { path: 'valoracion/three', loadChildren: () => import('./pages/valoracion/three/three.module').then(m => m.ThreePageModule) },
  { path: 'valoracion/four', loadChildren: () => import('./pages/valoracion/four/four.module').then(m => m.FourPageModule) },
  { path: 'valoracion/five', loadChildren: () => import('./pages/valoracion/five/five.module').then(m => m.FivePageModule) },
  { path: 'valoracion/six', loadChildren: () => import('./pages/valoracion/six/six.module').then(m => m.SixPageModule) },
  { path: 'vacante/home', loadChildren: () => import('./pages/vacante/home/home.module').then(m => m.HomePageModule) },
  { path: 'vacante/postulacion-jugador', loadChildren: () => import('./pages/vacante/postulacion-jugador/postulacion-jugador.module').then(m => m.PostulacionJugadorPageModule) },
  { path: 'vacante/postulacion-arbitro', loadChildren: () => import('./pages/vacante/postulacion-arbitro/postulacion-arbitro.module').then(m => m.PostulacionArbitroPageModule) },
  { path: 'vacante/postulacion-equipo', loadChildren: () => import('./pages/vacante/postulacion-equipo/postulacion-equipo.module').then(m => m.PostulacionEquipoPageModule) },
  { path: 'vacante/arbitro-aceptado-informacion', loadChildren: () => import('./pages/vacante/arbitro-aceptado-informacion/arbitro-aceptado-informacion.module').then(m => m.ArbitroAceptadoInformacionPageModule) },
  { path: 'vacante/jugador-aceptado-informacion', loadChildren: () => import('./pages/vacante/jugador-aceptado-informacion/jugador-aceptado-informacion.module').then(m => m.JugadorAceptadoInformacionPageModule) },
  { path: 'vacante/equipo-confirmado-informacion', loadChildren: () => import('./pages/vacante/equipo-confirmado-informacion/equipo-confirmado-informacion.module').then(m => m.EquipoConfirmadoInformacionPageModule) },
  { path: 'partido/agenda-informacion', loadChildren: () => import('./pages/partido/agenda-informacion/agenda-informacion.module').then(m => m.AgendaInformacionPageModule) },
  { path: 'partido/agenda-postulaciones', loadChildren: () => import('./pages/partido/agenda-postulaciones/agenda-postulaciones.module').then(m => m.AgendaPostulacionesPageModule) },
  { path: 'partido/crear-partido-personal', loadChildren: () => import('./pages/partido/crear-partido-personal/crear-partido-personal.module').then(m => m.CrearPartidoPersonalPageModule) },
  { path: 'equipo/buscador-equipos', loadChildren: () => import('./pages/equipo/buscador-equipos/buscador-equipos.module').then(m => m.BuscadorEquiposPageModule) },
  { path: 'equipo/mis-equipos', loadChildren: () => import('./pages/equipo/mis-equipos/mis-equipos.module').then(m => m.MisEquiposPageModule) },
  { path: 'equipo/administrar-equipos', loadChildren: () => import('./pages/equipo/administrar-equipos/administrar-equipos.module').then(m => m.AdministrarEquiposPageModule) },

  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./pages/alertas/alertas.module').then(m => m.AlertasPageModule)
  },
  {
    path: 'crearpartido',
    loadChildren: () => import('./pages/crearpartido/crearpartido.module').then(m => m.CrearpartidoPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then(m => m.CalendarioPageModule)
  },
  {
    path: 'buscarpartido',
    loadChildren: () => import('./pages/buscarpartido/buscarpartido.module').then(m => m.BuscarpartidoPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then(m => m.ConfiguracionPageModule)
  },
  {
    path: 'perfilequipo',
    loadChildren: () => import('./pages/perfilequipo/perfilequipo.module').then(m => m.PerfilequipoPageModule)
  },
  {
    path: 'confiequipo',
    loadChildren: () => import('./pages/confiequipo/confiequipo.module').then(m => m.ConfiequipoPageModule)
  },
  {
    path: 'adminmiembros',
    loadChildren: () => import('./pages/adminmiembros/adminmiembros.module').then(m => m.AdminmiembrosPageModule)
  },
  {
    path: 'mispartidos',
    loadChildren: () => import('./pages/mispartidos/mispartidos.module').then(m => m.MispartidosPageModule)
  },
  {
    path: 'crearequipo',
    loadChildren: () => import('./pages/crearequipo/crearequipo.module').then(m => m.CrearequipoPageModule)
  },
  {
    path: 'adminpartido',
    loadChildren: () => import('./pages/adminpartido/adminpartido.module').then(m => m.AdminpartidoPageModule)
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./pages/estadisticas/estadisticas.module').then(m => m.EstadisticasPageModule)
  },
  {
    path: 'misequipos',
    loadChildren: () => import('./pages/misequipos/misequipos.module').then(m => m.MisequiposPageModule)
  },
  {
    path: 'adminequipo',
    loadChildren: () => import('./pages/adminequipo/adminequipo.module').then(m => m.AdminequipoPageModule)
  },
  {
    path: 'convocatoria',
    loadChildren: () => import('./pages/convocatoria/convocatoria.module').then(m => m.ConvocatoriaPageModule)
  },
  {
    path: 'crearvacantes',
    loadChildren: () => import('./pages/crearvacantes/crearvacantes.module').then(m => m.CrearvacantesPageModule)
  },
  {
    path: 'postular',
    loadChildren: () => import('./pages/postular/postular.module').then(m => m.PostularPageModule)
  },
  {
    path: 'postulaciones',
    loadChildren: () => import('./pages/postulaciones/postulaciones.module').then(m => m.PostulacionesPageModule)
  },
  {
    path: 'creararbitro',
    loadChildren: () => import('./pages/creararbitro/creararbitro.module').then(m => m.CreararbitroPageModule)
  },
  {
    path: 'perfilarbitro',
    loadChildren: () => import('./pages/perfilarbitro/perfilarbitro.module').then(m => m.PerfilarbitroPageModule)
  },
  {
    path: 'recuperarclave',
    loadChildren: () => import('./pages/recuperarclave/recuperarclave.module').then(m => m.RecuperarclavePageModule)
  },
  {
    path: 'detallepostulacion',
    loadChildren: () => import('./pages/detallepostulacion/detallepostulacion.module').then(m => m.DetallepostulacionPageModule)
  },
  {
    path: 'todosequipos',
    loadChildren: () => import('./pages/todosequipos/todosequipos.module').then(m => m.TodosequiposPageModule)
  },
  {
    path: 'misdatos',
    loadChildren: () => import('./pages/misdatos/misdatos.module').then(m => m.MisdatosPageModule)
  },
  {
    path: 'valoracion/one',
    loadChildren: () => import('./pages/valoracion/one/one.module').then(m => m.OnePageModule)
  },
  {
    path: 'valoracion/two',
    loadChildren: () => import('./pages/valoracion/two/two.module').then(m => m.TwoPageModule)
  },
  {
    path: 'valoracion/three',
    loadChildren: () => import('./pages/valoracion/three/three.module').then(m => m.ThreePageModule)
  }, {
    path: 'valoracion/four',
    loadChildren: () => import('./pages/valoracion/four/four.module').then(m => m.FourPageModule)
  }, {
    path: 'valoracion/five',
    loadChildren: () => import('./pages/valoracion/five/five.module').then(m => m.FivePageModule)
  },
  {
    path: 'valoracion/six',
    loadChildren: () => import('./pages/valoracion/six/six.module').then(m => m.SixPageModule)
  },
  {
    path: 'vacante/home',
    loadChildren: () => import('./pages/vacante/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'vacante/postulacion-jugador',
    loadChildren: () => import('./pages/vacante/postulacion-jugador/postulacion-jugador.module').then( m => m.PostulacionJugadorPageModule)
  },
  {
    path: 'vacante/postulacion-arbitro',
    loadChildren: () => import('./pages/vacante/postulacion-arbitro/postulacion-arbitro.module').then( m => m.PostulacionArbitroPageModule)
  },
  {
    path: 'vacante/postulacion-equipo',
    loadChildren: () => import('./pages/vacante/postulacion-equipo/postulacion-equipo.module').then( m => m.PostulacionEquipoPageModule)
  },
  {
    path: 'vacante/arbitro-aceptado-informacion',
    loadChildren: () => import('./pages/vacante/arbitro-aceptado-informacion/arbitro-aceptado-informacion.module').then( m => m.ArbitroAceptadoInformacionPageModule)
  },
  {
    path: 'vacante/jugador-aceptado-informacion',
    loadChildren: () => import('./pages/vacante/jugador-aceptado-informacion/jugador-aceptado-informacion.module').then( m => m.JugadorAceptadoInformacionPageModule)
  },
  {
    path: 'vacante/equipo-confirmado-informacion',
    loadChildren: () => import('./pages/vacante/equipo-confirmado-informacion/equipo-confirmado-informacion.module').then( m => m.EquipoConfirmadoInformacionPageModule)
  },
  {
    path: 'partido/agenda-informacion',
    loadChildren: () => import('./pages/partido/agenda-informacion/agenda-informacion.module').then( m => m.AgendaInformacionPageModule)
  },
  {
    path: 'partido/agenda-postulaciones',
    loadChildren: () => import('./pages/partido/agenda-postulaciones/agenda-postulaciones.module').then( m => m.AgendaPostulacionesPageModule)
  },
  {
    path: 'equipo/buscador-equipos',
    loadChildren: () => import('./pages/equipo/buscador-equipos/buscador-equipos.module').then( m => m.BuscadorEquiposPageModule)
  },
  {
    path: 'postulacion-jugador-modal',
    loadChildren: () => import('./pages/vacante/modals/postulacion-jugador-modal/postulacion-jugador-modal.module').then( m => m.PostulacionJugadorModalPageModule)
  },
  {
    path: 'partido/crear-partido-personal',
    loadChildren: () => import('./pages/partido/crear-partido-personal/crear-partido-personal.module').then( m => m.CrearPartidoPersonalPageModule)
  },
  {
    path: 'equipo/mis-equipos',
    loadChildren: () => import('./pages/equipo/mis-equipos/mis-equipos.module').then( m => m.MisEquiposPageModule)
  },
  {
    path: 'agregar-recinto-modal',
    loadChildren: () => import('./pages/partido/agregar-recinto-modal/agregar-recinto-modal.module').then( m => m.AgregarRecintoModalPageModule)
  },
  {
    path: 'equipo/administrar-equipos',
    loadChildren: () => import('./pages/equipo/administrar-equipos/administrar-equipos.module').then( m => m.AdministrarEquiposPageModule)
  },
  {
    path: 'perfil-simple-modal',
    loadChildren: () => import('./pages/equipo/perfil-simple-modal/perfil-simple-modal.module').then( m => m.PerfilSimpleModalPageModule)
  },
  {
    path: 'invitar-jugadores-modal',
    loadChildren: () => import('./pages/equipo/invitar-jugadores-modal/invitar-jugadores-modal.module').then( m => m.InvitarJugadoresModalPageModule)
  },
  {
    path: 'administrar-equipos-modal',
    loadChildren: () => import('./pages/equipo/administrar-equipos-modal/administrar-equipos-modal.module').then( m => m.AdministrarEquiposModalPageModule)
  },
  {
    path: 'administrar-equipos-postulantes-modal',
    loadChildren: () => import('./pages/equipo/administrar-equipos-postulantes-modal/administrar-equipos-postulantes-modal.module').then( m => m.AdministrarEquiposPostulantesModalPageModule)
  },
  {
    path: 'equipo/edita-datos-equipo',
    loadChildren: () => import('./pages/equipo/edita-datos-equipo/edita-datos-equipo.module').then( m => m.EditaDatosEquipoPageModule)
  },
  {
    path: 'equipo/perfil-equipo',
    loadChildren: () => import('./pages/equipo/perfil-equipo/perfil-equipo.module').then( m => m.PerfilEquipoPageModule)
  },
  {
    path: 'agenda-detalle-jugador-modal',
    loadChildren: () => import('./pages/partido/agenda-detalle-jugador-modal/agenda-detalle-jugador-modal.module').then( m => m.AgendaDetalleJugadorModalPageModule)
  },
  {
    path: 'agenda-detalle-jugador-two-modal',
    loadChildren: () => import('./pages/partido/agenda-detalle-jugador-two-modal/agenda-detalle-jugador-two-modal.module').then( m => m.AgendaDetalleJugadorTwoModalPageModule)
  },
  {
    path: 'agenda-detalle-jugador-three-modal',
    loadChildren: () => import('./pages/partido/agenda-detalle-jugador-three-modal/agenda-detalle-jugador-three-modal.module').then( m => m.AgendaDetalleJugadorThreeModalPageModule)
  },
  {
    path: 'filtro-buscador-partido',
    loadChildren: () => import('./pages/equipo/filtro-buscador-partido/filtro-buscador-partido.module').then( m => m.FiltroBuscadorPartidoPageModule)
  },
  {
    path: 'vacante/equipo-confirmado-convocatoria',
    loadChildren: () => import('./pages/vacante/equipo-confirmado-convocatoria/equipo-confirmado-convocatoria.module').then( m => m.EquipoConfirmadoConvocatoriaPageModule)
  },
  {
    path: 'vacante/jugador-aceptado-convocatoria',
    loadChildren: () => import('./pages/vacante/jugador-aceptado-convocatoria/jugador-aceptado-convocatoria.module').then( m => m.JugadorAceptadoConvocatoriaPageModule)
  },
  {
    path: 'arbitro/perfil-arbitro',
    loadChildren: () => import('./pages/arbitro/perfil-arbitro/perfil-arbitro.module').then( m => m.PerfilArbitroPageModule)
  },
  {
    path: 'perfil-arbitro-agregar-modal',
    loadChildren: () => import('./pages/arbitro/perfil-arbitro-agregar-modal/perfil-arbitro-agregar-modal.module').then( m => m.PerfilArbitroAgregarModalPageModule)
  },
  {
    path: 'perfil-arbitro-guardar-modal',
    loadChildren: () => import('./pages/arbitro/perfil-arbitro-guardar-modal/perfil-arbitro-guardar-modal.module').then( m => m.PerfilArbitroGuardarModalPageModule)
  },
  {
    path: 'postulacion-arbitro-tarifa-modal',
    loadChildren: () => import('./pages/vacante/modals/postulacion-arbitro-tarifa-modal/postulacion-arbitro-tarifa-modal.module').then( m => m.PostulacionArbitroTarifaModalPageModule)
  },
  {
    path: 'partido/agenda-convocatoria-admin',
    loadChildren: () => import('./pages/partido/agenda-convocatoria-admin/agenda-convocatoria-admin.module').then( m => m.AgendaConvocatoriaAdminPageModule)
  },
  {
    path: 'agenda-jugador-manual-modal',
    loadChildren: () => import('./pages/partido/agenda-jugador-manual-modal/agenda-jugador-manual-modal.module').then( m => m.AgendaJugadorManualModalPageModule)
  },
  {
    path: 'partido/agenda-partido',
    loadChildren: () => import('./pages/partido/agenda-partido/agenda-partido.module').then( m => m.AgendaPartidoPageModule)
  },
  {
    path: 'agenda-modificar-modal',
    loadChildren: () => import('./pages/partido/agenda-modificar-modal/agenda-modificar-modal.module').then( m => m.AgendaModificarModalPageModule)
  },
  {
    path: 'agenda-calendario',
    loadChildren: () => import('./pages/partido/agenda-calendario/agenda-calendario.module').then( m => m.AgendaCalendarioPageModule)
  },
  {
    path: 'postulacion-evaluacion-modal',
    loadChildren: () => import('./pages/vacante/modals/postulacion-evaluacion-modal/postulacion-evaluacion-modal.module').then( m => m.PostulacionEvaluacionModalPageModule)
  },
  {
    path: 'postulacion-evaluacion-eliminar-modal',
    loadChildren: () => import('./pages/vacante/modals/postulacion-evaluacion-eliminar-modal/postulacion-evaluacion-eliminar-modal.module').then( m => m.PostulacionEvaluacionEliminarModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
