import { Component } from '@angular/core';

@Component({
    selector: 'personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})


export class PersonasComponent {
    public nombre: string = '';
    public mensaje: string = '';
    public cpostal: number = 0;

// Constructor para inicializar las propiedades
    constructor() {
        this.nombre = this.nombre;
        this.mensaje = this.mensaje;
        this.cpostal = this.cpostal;
    }

    // miMetodoMostrar() {
    //     console.log('Usuario: ' + this.nombre + 'Nikname: ' + this.mensaje);
    // }

    onInput(): void {
        this.mostrarNombre();
    }

    mostrarNombre(): void {
        // Convierte this.cpostal a número utilizando parseInt
    const codigoPostal = parseInt(this.cpostal.toString());

        if (codigoPostal === 13002) {
            this.mensaje = 'Tu coloegio electoral es: PIO XII';
        } else {
            this.mensaje = 'Por favor, ingresa tu Codigo Postal:';
        }
    }

}

