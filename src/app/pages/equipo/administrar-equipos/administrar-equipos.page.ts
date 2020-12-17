import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdministrarEquiposModalPage } from '../administrar-equipos-modal/administrar-equipos-modal.page';
import { AdministrarEquiposPostulantesModalPage } from '../administrar-equipos-postulantes-modal/administrar-equipos-postulantes-modal.page';

@Component({
  selector: 'app-administrar-equipos',
  templateUrl: './administrar-equipos.page.html',
  styleUrls: ['./administrar-equipos.page.scss'],
})
export class AdministrarEquiposPage implements OnInit {
  type: string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.type = 'members';
  }

  async presentModalManageTeam() {
    const modal = await this.modalController.create({
      component: AdministrarEquiposModalPage,
      cssClass: 'custom-modal-team-all'
    });
    return await modal.present();
  }

  async presentModalpostulantTeam() {
    const modal = await this.modalController.create({
      component: AdministrarEquiposPostulantesModalPage,
      cssClass: 'custom-modal-team-all'
    });
    return await modal.present();
  }
}
