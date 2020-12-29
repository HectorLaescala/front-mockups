import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgendaDetalleJugadorModalPage } from '../agenda-detalle-jugador-modal/agenda-detalle-jugador-modal.page';
import { AgendaDetalleJugadorTwoModalPage } from '../agenda-detalle-jugador-two-modal/agenda-detalle-jugador-two-modal.page';
import { AgendaDetalleJugadorThreeModalPage } from '../agenda-detalle-jugador-three-modal/agenda-detalle-jugador-three-modal.page';
import { AgendaModificarModalPage } from '../agenda-modificar-modal/agenda-modificar-modal.page';

@Component({
  selector: 'app-agenda-postulaciones',
  templateUrl: './agenda-postulaciones.page.html',
  styleUrls: ['./agenda-postulaciones.page.scss'],
})
export class AgendaPostulacionesPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalDeletePlayer () {
    const modal = await this.modalController.create({
      component: AgendaDetalleJugadorModalPage,
      cssClass: 'custom-modal-team-postulation'
    });
    return await modal.present();
  }

  async presentModalReviewPlayer () {
    const modal = await this.modalController.create({
      component: AgendaDetalleJugadorTwoModalPage,
      cssClass: 'custom-modal-team-postulation'
    });
    return await modal.present();
  }

  async presentModalAceptedPlayer () {
    const modal = await this.modalController.create({
      component: AgendaDetalleJugadorThreeModalPage,
      cssClass: 'custom-modal-team-postulation'
    });
    return await modal.present();
  }

  async presentModalEditPlayer () {
    const modal = await this.modalController.create({
      component: AgendaModificarModalPage,
      cssClass: 'custom-modal-team-postulation'
    });
    return await modal.present();
  }

}
