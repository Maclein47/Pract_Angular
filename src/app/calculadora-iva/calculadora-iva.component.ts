import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-iva',
  templateUrl: './calculadora-iva.component.html',
  styleUrls: ['./calculadora-iva.component.css']
})
export class CalculadoraIVAComponent {
  precio: number;
  valor: number;
  resultado: string = '';

  constructor() {
    this.precio = 0;
    this.valor = 0;
    this.resultado = "0";
  }

  calcularIVA() {
    if (!isNaN(this.precio) && !isNaN(this.valor)) {
      this.resultado = ((this.precio * this.valor) / 100 + this.precio).toFixed(2) + ' €';
    } else {
      this.resultado = 'Introduce valores correctos.';
    }
  }
}
