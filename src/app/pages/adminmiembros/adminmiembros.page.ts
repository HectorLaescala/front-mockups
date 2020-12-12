import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-adminmiembros',
  templateUrl: './adminmiembros.page.html',
  styleUrls: ['./adminmiembros.page.scss'],
})
export class AdminmiembrosPage implements OnInit {
//@ViewChild(IonSegment) segment: IonSegment;

  constructor() { }

  ngOnInit() {
  //  this.segment.value ='Miembros';
  }


  segmentChanged(event){
    console.log(event.detail.value);
  }


}
