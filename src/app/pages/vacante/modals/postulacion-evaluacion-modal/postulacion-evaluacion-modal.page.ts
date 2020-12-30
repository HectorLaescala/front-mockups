import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-postulacion-evaluacion-modal',
  templateUrl: './postulacion-evaluacion-modal.page.html',
  styleUrls: ['./postulacion-evaluacion-modal.page.scss'],
})
export class PostulacionEvaluacionModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModalPlayerPostulationDetail(){
    await this.modalController.dismiss();
  }


}
