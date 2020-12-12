import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostulacionJugadorModalPage } from '../../vacante/modals/postulacion-jugador-modal/postulacion-jugador-modal.page';

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
      component: PostulacionJugadorModalPage,
      cssClass: 'custom-modal-player-acepted'
    });
    return await modal.present();
  }

}
