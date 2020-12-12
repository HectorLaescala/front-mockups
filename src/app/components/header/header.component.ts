import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 @Input() titulo: string;
  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {}



  togglemenu() {
    this.menuCtrl.toggle();
  }

}
