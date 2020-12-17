import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-equipo',
  templateUrl: './perfil-equipo.page.html',
  styleUrls: ['./perfil-equipo.page.scss'],
})
export class PerfilEquipoPage implements OnInit {
  type: string;
  constructor() { }

  ngOnInit() {
    this.type = 'members';
  }

}
