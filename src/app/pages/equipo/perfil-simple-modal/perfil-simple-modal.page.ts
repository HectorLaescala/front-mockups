import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-simple-modal',
  templateUrl: './perfil-simple-modal.page.html',
  styleUrls: ['./perfil-simple-modal.page.scss'],
})
export class PerfilSimpleModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closePresentModalSimple(){
    await this.modalController.dismiss();
  }

}
