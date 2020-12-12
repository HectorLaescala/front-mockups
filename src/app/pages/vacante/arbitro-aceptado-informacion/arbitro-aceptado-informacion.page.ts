import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostulacionJugadorModalPage } from '../../vacante/modals/postulacion-jugador-modal/postulacion-jugador-modal.page';

@Component({
  selector: 'app-arbitro-aceptado-informacion',
  templateUrl: './arbitro-aceptado-informacion.page.html',
  styleUrls: ['./arbitro-aceptado-informacion.page.scss'],
})
export class ArbitroAceptadoInformacionPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalRefereeAcepted() {
    const modal = await this.modalController.create({
      component: PostulacionJugadorModalPage,
      cssClass: 'custom-modal-referee-acepted'
    });
    return await modal.present();
  }

}
