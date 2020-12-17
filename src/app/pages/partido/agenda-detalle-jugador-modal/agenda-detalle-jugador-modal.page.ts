import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agenda-detalle-jugador-modal',
  templateUrl: './agenda-detalle-jugador-modal.page.html',
  styleUrls: ['./agenda-detalle-jugador-modal.page.scss'],
})
export class AgendaDetalleJugadorModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModalDeletePlayer(){
    await this.modalController.dismiss();
  }

}
