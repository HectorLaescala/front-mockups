import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-postulacion-evaluacion-confirmar-modal',
  templateUrl: './postulacion-evaluacion-confirmar-modal.page.html',
  styleUrls: ['./postulacion-evaluacion-confirmar-modal.page.scss'],
})
export class PostulacionEvaluacionConfirmarModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModalConfirmedPlayer(){
    await this.modalController.dismiss();
  }
}
