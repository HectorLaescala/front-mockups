import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-administrar-equipos-postulantes-modal',
  templateUrl: './administrar-equipos-postulantes-modal.page.html',
  styleUrls: ['./administrar-equipos-postulantes-modal.page.scss'],
})
export class AdministrarEquiposPostulantesModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModalPostulantTeam(){
    await this.modalController.dismiss();
  }

}
