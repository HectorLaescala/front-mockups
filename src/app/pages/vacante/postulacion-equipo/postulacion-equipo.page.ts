import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostulacionJugadorModalPage } from '../../vacante/modals/postulacion-jugador-modal/postulacion-jugador-modal.page';

@Component({
  selector: 'app-postulacion-equipo',
  templateUrl: './postulacion-equipo.page.html',
  styleUrls: ['./postulacion-equipo.page.scss'],
})
export class PostulacionEquipoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalTeam() {
    const modal = await this.modalController.create({
      component: PostulacionJugadorModalPage,
      cssClass: 'custom-modal-team-postulation'
    });
    return await modal.present();
  }

}
