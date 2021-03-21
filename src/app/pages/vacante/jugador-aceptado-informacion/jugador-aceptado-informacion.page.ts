import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostulacionEvaluacionModalPage } from '../../vacante/modals/postulacion-evaluacion-modal/postulacion-evaluacion-modal.page';
import { PostulacionEvaluacionEliminarModalPage } from '../../vacante/modals/postulacion-evaluacion-eliminar-modal/postulacion-evaluacion-eliminar-modal.page';
import { PostulacionEvaluacionConfirmarModalPage } from '../../vacante/modals/postulacion-evaluacion-confirmar-modal/postulacion-evaluacion-confirmar-modal.page';
import { PostulacionEvaluacionCheckedModalPage } from '../../vacante/modals/postulacion-evaluacion-checked-modal/postulacion-evaluacion-checked-modal.page';


@Component({
  selector: 'app-jugador-aceptado-informacion',
  templateUrl: './jugador-aceptado-informacion.page.html',
  styleUrls: ['./jugador-aceptado-informacion.page.scss'],
})
export class JugadorAceptadoInformacionPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalPlayerAcepted() {
    const modal = await this.modalController.create({
      component: PostulacionEvaluacionModalPage,
      cssClass: 'custom-modal-player-acepted'
    });
    return await modal.present();
  }

  async presentModalPlayerDeleted() {
    const modal = await this.modalController.create({
      component: PostulacionEvaluacionEliminarModalPage,
      cssClass: 'custom-modal-player-acepted'
    });
    return await modal.present();
  }

  async presentModalPlayerConfirmed() {
    const modal = await this.modalController.create({
      component: PostulacionEvaluacionConfirmarModalPage,
      cssClass: 'custom-modal-player-acepted'
    });
    return await modal.present();
  }

  async presentModalPlayerChecked() {
    const modal = await this.modalController.create({
      component: PostulacionEvaluacionCheckedModalPage,
      cssClass: 'custom-modal-player-acepted'
    });
    return await modal.present();
  }

}
