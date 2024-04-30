import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';
import { tiposDeIVA } from './models/ivas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./assets.estilos_globales.css']
})

export class AppComponent {
  //propiedades:
  public title = 'principios de Angular';
  public mostrar_videojuegos: boolean = true;
  public mostrarVideojuegos01: boolean = true;
  public descripcion: string;
  public config;
  public iva10: string;

  constructor() {
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.config = configuracion;
    this.iva10 = tiposDeIVA.iva10;
  }

  //metodo:
  ocultarVideojuegos(value: boolean) {
    this.mostrar_videojuegos = value;
  }

  ocultarVideojuegos01(value: boolean){
    this.mostrarVideojuegos01 = value;
  }
}
