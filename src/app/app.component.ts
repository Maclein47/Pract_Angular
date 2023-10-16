import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';
// import { TiposDeIVA } from './models/tipos_de_IVA';
import { tiposDeIVA } from './models/ivas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //propiedades:
  public title = 'principios de Angular';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string;
  public config;
  // public IVAs;
  public iva10: string;
  // public iva16: number;
  // public iva21: number;

  constructor() {
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.config = configuracion;
    // this.IVAs = TiposDeIVA.iva;
    this.iva10 = tiposDeIVA.iva10;
  }

  //metodo:
  ocultarVideojuegos(value: boolean) {
    this.mostrar_videojuegos = value;
  }
}
