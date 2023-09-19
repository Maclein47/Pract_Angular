import { Component } from '@angular/core';


//?Decorador--------------------------------------------------------
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
    // templateUrl: '../app.component.html'
    // template:`
    //     <h2>Componente de Videojuego</h2>
    //     <ul> 
    //         <li> GTA </li>
    //         <li> Assetto Corsa </li>
    //         <li> WRC </li>
    //         <li> Battlefield Hardline </li>
    //     </ul>
    // `
})

//?Componente--------------------------------------------------------
export class VideojuegoComponent {
    public titulo: string;
    // public listado: string;

    constructor() {
        this.titulo = "Componente de Videojugos";
        // this.listado = "Listado de los mejores videojugos";

        console.log("el componente Se ha cargado correctamente");
    }
}