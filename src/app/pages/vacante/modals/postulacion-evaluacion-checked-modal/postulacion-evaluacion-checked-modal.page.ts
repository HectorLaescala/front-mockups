import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-postulacion-evaluacion-checked-modal',
  templateUrl: './postulacion-evaluacion-checked-modal.page.html',
  styleUrls: ['./postulacion-evaluacion-checked-modal.page.scss'],
})
export class PostulacionEvaluacionCheckedModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModalConfirmedChecked(){
    await this.modalController.dismiss();
  }

}
