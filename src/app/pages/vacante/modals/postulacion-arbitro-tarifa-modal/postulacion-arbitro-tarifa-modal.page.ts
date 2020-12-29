import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-postulacion-arbitro-tarifa-modal',
  templateUrl: './postulacion-arbitro-tarifa-modal.page.html',
  styleUrls: ['./postulacion-arbitro-tarifa-modal.page.scss'],
})
export class PostulacionArbitroTarifaModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModallRefereeRate(){
    await this.modalController.dismiss();
  }
}
