import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostulacionJugadorModalPage } from '../../vacante/modals/postulacion-jugador-modal/postulacion-jugador-modal.page';

@Component({
  selector: 'app-postulacion-arbitro',
  templateUrl: './postulacion-arbitro.page.html',
  styleUrls: ['./postulacion-arbitro.page.scss'],
})
export class PostulacionArbitroPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalReferee() {
    const modal = await this.modalController.create({
      component: PostulacionJugadorModalPage,
      cssClass: 'custom-modal-referee-postulation'
    });
    return await modal.present();
  }

}
