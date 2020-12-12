import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostulacionJugadorModalPage } from '../../vacante/modals/postulacion-jugador-modal/postulacion-jugador-modal.page';

@Component({
  selector: 'app-postulacion-jugador',
  templateUrl: './postulacion-jugador.page.html',
  styleUrls: ['./postulacion-jugador.page.scss'],
})
export class PostulacionJugadorPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalPlayer() {
    const modal = await this.modalController.create({
      component: PostulacionJugadorModalPage,
      cssClass: 'custom-modal-player-postulation'
    });
    return await modal.present();
  }

}
