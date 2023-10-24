/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20           Output: El 20 es divisible por 2 y por 5.
input: 210          Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/

let numero = parseInt(prompt("Ingrese un número"));
let respuesta = "El " + numero + " es divisible por ";

if (numero % 2 === 0) {
    respuesta += "2";
}

if (numero % 3 === 0) {
    if (respuesta !== "El " + numero + " es divisible por ") {
        respuesta += " y por 3";
    } else {
        respuesta += "3";
    }
}

if (numero % 5 === 0) {
    if (respuesta !== "El " + numero + " es divisible por ") {
        respuesta += " y por 5";
    } else {
        respuesta += "5";
    }
}

if (numero % 7 === 0) {
    if (respuesta !== "El " + numero + " es divisible por ") {
        respuesta += " y por 7";
    } else {
        respuesta += "7";
    }
}

document.write(respuesta + ".");