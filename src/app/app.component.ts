import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: 'videoJuego/videojuego.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //propiedades:
  public title = 'principios de Angular';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string;

  constructor(){
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
  }

  //metodo:
  ocultarVideojuegos(value: boolean) {
    this.mostrar_videojuegos = value;
  }
}