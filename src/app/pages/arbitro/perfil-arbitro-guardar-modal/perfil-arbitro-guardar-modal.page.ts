import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-arbitro-guardar-modal',
  templateUrl: './perfil-arbitro-guardar-modal.page.html',
  styleUrls: ['./perfil-arbitro-guardar-modal.page.scss'],
})
export class PerfilArbitroGuardarModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModallRefereeEdit(){
    await this.modalController.dismiss();
  }
}
