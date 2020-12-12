import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mis-equipos-modal',
  templateUrl: './mis-equipos-modal.page.html',
  styleUrls: ['./mis-equipos-modal.page.scss'],
})
export class MisEquiposModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModalAllTeam(){
    await this.modalController.dismiss();
  }


}
