import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MisEquiposModalPage } from '../mis-equipos-modal/mis-equipos-modal.page';

@Component({
  selector: 'app-mis-equipos',
  templateUrl: './mis-equipos.page.html',
  styleUrls: ['./mis-equipos.page.scss'],
})
export class MisEquiposPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalOptions() {
    const modal = await this.modalController.create({
      component: MisEquiposModalPage,
      cssClass: 'custom-modal-team-all'
    });
    return await modal.present();
  }

}
