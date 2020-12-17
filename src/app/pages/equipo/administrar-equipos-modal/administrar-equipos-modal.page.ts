import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-administrar-equipos-modal',
  templateUrl: './administrar-equipos-modal.page.html',
  styleUrls: ['./administrar-equipos-modal.page.scss'],
})
export class AdministrarEquiposModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

   async closeModalManageTeam(){
    await this.modalController.dismiss();
  }

}
