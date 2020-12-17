import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agenda-detalle-jugador-three-modal',
  templateUrl: './agenda-detalle-jugador-three-modal.page.html',
  styleUrls: ['./agenda-detalle-jugador-three-modal.page.scss'],
})
export class AgendaDetalleJugadorThreeModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModalAceptedPlayer(){
    await this.modalController.dismiss();
  }

}
