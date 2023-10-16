// export function TiposDeIVA(precio, valor) {


//     // Nos traemos el div que usaremos de salida al DOM
//     var calcIVA = document.getElementById("Hiva");

//     // Nos traemos los dos inputs, el de precio y el de tipo de IVA
//     var inputIVA_Precio = document.getElementById("Hiva_Precio").addEventListener("change",
//         function () {
//             calculaIVA()
//         });

//     var inputIVA_valor = document.getElementById("Hiva_valor").addEventListener("change",
//         function () {
//             calculaIVA()
//         });

//     // 1º Funcion:
//     function iva(a, b) {
//         return ((a * b) / 100) + a + " €";
//     }
//     // 2º Funcion:
//     function calculaIVA() {
//         var precio = parseFloat(document.getElementById("Hiva_Precio").value);
//         var valor = parseFloat(document.getElementById("Hiva_valor").value);

//         if (!isNaN(precio) && !isNaN(valor)) {
//             calcIVA.innerHTML = iva(precio, valor);
//         } else {
//             calcIVA.innerHTML = "Instroduce valores correctos.";
//         }
//     }

// }