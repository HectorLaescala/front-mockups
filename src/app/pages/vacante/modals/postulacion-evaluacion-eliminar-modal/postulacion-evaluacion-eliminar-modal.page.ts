import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-postulacion-evaluacion-eliminar-modal',
  templateUrl: './postulacion-evaluacion-eliminar-modal.page.html',
  styleUrls: ['./postulacion-evaluacion-eliminar-modal.page.scss'],
})
export class PostulacionEvaluacionEliminarModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  
  async closeModalDeletePlayer(){
    await this.modalController.dismiss();
  }
}
