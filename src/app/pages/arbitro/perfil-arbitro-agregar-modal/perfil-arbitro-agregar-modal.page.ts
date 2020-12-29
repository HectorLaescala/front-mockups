import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-arbitro-agregar-modal',
  templateUrl: './perfil-arbitro-agregar-modal.page.html',
  styleUrls: ['./perfil-arbitro-agregar-modal.page.scss'],
})
export class PerfilArbitroAgregarModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModallRefereeAdd(){
    await this.modalController.dismiss();
  }

}
