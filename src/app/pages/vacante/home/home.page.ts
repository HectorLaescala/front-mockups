import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostulacionJugadorModalPage } from '../../vacante/modals/postulacion-jugador-modal/postulacion-jugador-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalVacantHome() {
    const modal = await this.modalController.create({
      component: PostulacionJugadorModalPage,
      cssClass: 'custom-modal-vacant-home-postulation'
    });
    return await modal.present();
  }

}
