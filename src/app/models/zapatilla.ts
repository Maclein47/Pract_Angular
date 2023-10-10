export class Zapatilla {

    //? Ejemplo tipico x defecto sin TypeScript:
    //? Definimos las propiedades
    // public nombre: string;
    // public marca: string;
    // public color: string;
    // public precio: number;
    // public stock: boolean;

    //? le pasamos las prop. como parametros
    // constructor(nombre, marca, color, precio, stock) {
        //? y definimos un valor
    //     this.nombre = nombre;
    //     this.marca = marca;
    //     this.color = color;
    //     this.precio = precio;
    //     this.stock = stock;
    // }


    //? Con typeScript
    constructor( 
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean
){}
}