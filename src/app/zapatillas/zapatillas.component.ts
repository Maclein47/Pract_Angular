//? Importo mi modulo, en este caso Component----------------
import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

//? Defino Componente Decorador--------------------------------------------------------
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

//? Defino mi Clase--------------------------------------------------------
export class ZapatillasComponent implements OnInit {
    //? Propiedades------
    public titulo: string = "PRUEBA DIRECTA DE CLASE, Componete de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor() {
        this.color = 'orange';
        this.mi_marca = '';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('rebook Clasic', 'Reebook', 'Roja', 80, true),
            new Zapatilla('Nike Runner', 'nike', 'azules', 100, true),
            new Zapatilla('Nike Basica', 'nike', 'azules', 70, true),
            new Zapatilla('Adidas Crazy', 'Adidas', 'Roja', 90, false)
        ];
    }
//#region METODOS ----------------------------------------------------------------
    //? METODOS ------------------------------------------------------------------
    ngOnInit() {
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);
            }
            console.log(index);
        });

        console.log(this.marcas);
    }
 
    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(indice: number){
        // delete this.marcas[indice];
        this.marcas.splice(indice, 1);
    }

    onBlur(){
        console.log("Has salido del input");
        console.log(this.marcas);
    }

    mostrarPalabra(){
        alert(this.mi_marca);
    }
    //#endregion
}
