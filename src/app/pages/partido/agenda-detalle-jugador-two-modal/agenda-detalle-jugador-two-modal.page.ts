import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agenda-detalle-jugador-two-modal',
  templateUrl: './agenda-detalle-jugador-two-modal.page.html',
  styleUrls: ['./agenda-detalle-jugador-two-modal.page.scss'],
})
export class AgendaDetalleJugadorTwoModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModalReviewPlayer(){
    await this.modalController.dismiss();
  }

}
