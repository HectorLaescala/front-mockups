import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filtro-buscador',
  templateUrl: './filtro-buscador.page.html',
  styleUrls: ['./filtro-buscador.page.scss'],
})
export class FiltroBuscadorPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModalFilter(){
    await this.modalController.dismiss();
  }

}
