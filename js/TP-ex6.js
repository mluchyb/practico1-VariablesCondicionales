/*
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
input: 15 , 3          Output: El 15 es el número más grande
*/

let primerNumero = parseInt(prompt("Ingrese el primer número"));
let segundoNumero = parseInt(prompt("Ingrese el segundo número"));
if (primerNumero > segundoNumero) {
    document.write(" El " + primerNumero + " es el número más grande.")
} else {
    document.write(" El " + segundoNumero + " es el número más grande.");
}