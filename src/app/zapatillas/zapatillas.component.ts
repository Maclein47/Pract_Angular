//? Importo mi modulo, en este caso Component----------------
import { Component } from '@angular/core';

//? Defino Componente--------------------------------------------------------
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

//? Defino mi Clase--------------------------------------------------------
export class ZapatillasComponent{
    public titulo: string = "PRUEBA DIRECTA DE CLASE, Componete de zapatillas";
}

