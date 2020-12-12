import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ModalController } from '@ionic/angular';
import { FiltroBuscadorPage } from '../filtro-buscador/filtro-buscador.page';

@Component({
  selector: 'app-buscador-equipos',
  templateUrl: './buscador-equipos.page.html',
  styleUrls: ['./buscador-equipos.page.scss'],
})
export class BuscadorEquiposPage implements OnInit {
  type: string;
  constructor(public keyboard: Keyboard, public modalController: ModalController) { }

  ngOnInit() {
    this.type = 'information';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  async presentModalFilter() {
    const modal = await this.modalController.create({
      component: FiltroBuscadorPage,
      cssClass: 'custom-modal-search-filter'
    });
    return await modal.present();
  }

}
