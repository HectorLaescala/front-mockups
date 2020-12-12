import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-postulacion-jugador-modal',
  templateUrl: './postulacion-jugador-modal.page.html',
  styleUrls: ['./postulacion-jugador-modal.page.scss'],
})
export class PostulacionJugadorModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModalPlayerPostulation(){
    await this.modalController.dismiss();
  }


}
