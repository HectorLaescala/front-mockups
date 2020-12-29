import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agenda-calendario',
  templateUrl: './agenda-calendario.page.html',
  styleUrls: ['./agenda-calendario.page.scss'],
})
export class AgendaCalendarioPage implements OnInit {
  date: string;
  type: 'string'; 
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }

  async closeModalCalendar(){
    await this.modalController.dismiss();
  }

}
