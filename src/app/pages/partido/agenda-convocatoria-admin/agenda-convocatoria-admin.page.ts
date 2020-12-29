import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgendaJugadorManualModalPage } from '../agenda-jugador-manual-modal/agenda-jugador-manual-modal.page';

@Component({
  selector: 'app-agenda-convocatoria-admin',
  templateUrl: './agenda-convocatoria-admin.page.html',
  styleUrls: ['./agenda-convocatoria-admin.page.scss'],
})
export class AgendaConvocatoriaAdminPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalAddPlayerManual() {
    const modal = await this.modalController.create({
      component: AgendaJugadorManualModalPage,
      cssClass: 'custom-modal-team-all'
    });
    return await modal.present();
  }

}
