// Declaración de la clase Persona
class Persona {
    // Propiedades (variables de la clase)
    nombre: string;
    edad: number;

    // Constructor para inicializar las propiedades
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para mostrar información de la persona
    mostrarInformación(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad} años`);
    }
}

// Creación de un objeto (instancia) de la clase Persona
let persona1: Persona = new Persona("Juan", 25);

// Accediendo a propiedades y métodos del objeto
console.log(persona1.nombre); // Output: Juan
console.log(persona1.edad);   // Output: 25
persona1.mostrarInformación(); // Output: Nombre: Juan, Edad: 25 años
