import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrar-equipos',
  templateUrl: './administrar-equipos.page.html',
  styleUrls: ['./administrar-equipos.page.scss'],
})
export class AdministrarEquiposPage implements OnInit {
  type: string;
  constructor() { }

  ngOnInit() {
    this.type = 'members';
  }

}
