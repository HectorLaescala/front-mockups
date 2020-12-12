import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarRecintoModalPage } from '../agregar-recinto-modal/agregar-recinto-modal.page';

@Component({
  selector: 'app-crear-partido-personal',
  templateUrl: './crear-partido-personal.page.html',
  styleUrls: ['./crear-partido-personal.page.scss'],
})
export class CrearPartidoPersonalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalAddEnclosure() {
    const modal = await this.modalController.create({
      component: AgregarRecintoModalPage,
      cssClass: 'custom-modal-add-enclosure'
    });
    return await modal.present();
  }


}
