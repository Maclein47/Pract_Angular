import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


//?Decorador--------------------------------------------------------
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html',
})

//?Componente--------------------------------------------------------
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    //?Propiedades--------------------------------------------------------
    public titulo: string;
    public listado: string;

    //?Metodos--------------------------------------------------------
    constructor() {
        this.titulo = "TITULO - Componente de Videojugos";
        this.listado = "Listado de los mejores videojugos";

        console.log("el Constructor Se ha cargado correctamente");
    }

    ngOnInit() {
        console.log("El OnInit se ha cargado correctamente");
    }

    ngDoCheck(){
        console.log("El DoCheck se ha cargado correctamente");
    }

    ngOnDestroy(){
        // this.listado = "Se va a eliminar la instancia de Titulo";
        console.log("OnDestroy ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "TITULO - Nuevo dato de Videojeugo >> titulo";
    }
}