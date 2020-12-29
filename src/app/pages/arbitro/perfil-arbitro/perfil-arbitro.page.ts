import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilArbitroAgregarModalPage } from '../perfil-arbitro-agregar-modal/perfil-arbitro-agregar-modal.page';
import { PerfilArbitroGuardarModalPage } from '../perfil-arbitro-guardar-modal/perfil-arbitro-guardar-modal.page';

@Component({
  selector: 'app-perfil-arbitro',
  templateUrl: './perfil-arbitro.page.html',
  styleUrls: ['./perfil-arbitro.page.scss'],
})
export class PerfilArbitroPage implements OnInit {
  type: string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.type = 'price';
  }

  async presentModalRefereeAdd() {
    const modal = await this.modalController.create({
      component: PerfilArbitroAgregarModalPage,
      cssClass: 'custom-modal-team-all'
    });
    return await modal.present();
  }

  async presentModalRefereeEdit() {
    const modal = await this.modalController.create({
      component: PerfilArbitroGuardarModalPage,
      cssClass: 'custom-modal-team-all'
    });
    return await modal.present();
  }

}
