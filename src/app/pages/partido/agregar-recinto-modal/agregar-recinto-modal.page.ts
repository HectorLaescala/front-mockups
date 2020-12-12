import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-agregar-recinto-modal',
  templateUrl: './agregar-recinto-modal.page.html',
  styleUrls: ['./agregar-recinto-modal.page.scss'],
})
export class AgregarRecintoModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModalEnclosure(){
    await this.modalController.dismiss();
  }

}
