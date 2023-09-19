import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    // templateUrl: './videojuego.component.html',
    template: `
        <h2>Componente de Videojuego</h2>
        <ul> 
            <li> GTA </li>
            <li> Assetto Corsa </li>
            <li> WRC </li>
            <li> Battlefield Hardline </li>
        </ul>
    `
})

export class VideojuegoComponent {

    constructor() {
        console.log("el componente Se ha cargado correctamente");
    }
}