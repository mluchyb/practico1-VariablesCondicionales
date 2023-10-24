/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9          Output: El 15 es el número más grande
*/

let primerNumero = parseInt(prompt("Ingrese el primer número"));
let segundoNumero = parseInt(prompt("Ingrese el segundo número"));
let tercerNumero = parseInt(prompt("Ingrese el tercer número"));

if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    document.write(" El " + primerNumero + " es el número más grande.");
} else if (segundoNumero > primerNumero && segundoNumero >tercerNumero) { console
    document.write(" El " + segundoNumero + " es el número más grande.");
} else {
    document.write(" El " + tercerNumero + " es el número más grande.");
}