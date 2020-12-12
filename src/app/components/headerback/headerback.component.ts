import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-headerback',
  templateUrl: './headerback.component.html',
  styleUrls: ['./headerback.component.scss'],
})
export class HeaderbackComponent implements OnInit {
  @Input() titulo: string;
  constructor(private menuCtrl: MenuController) { }


  ngOnInit() {}




  togglemenu() {
    this.menuCtrl.toggle();
  }

}
