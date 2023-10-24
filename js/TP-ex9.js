/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo        Output: oauo
*/

let frase = prompt("Ingrese una frase");
let vocal = "";

for (let i = 0; i < frase.length; i++) {
    let letra = frase.substring(i, i + 1);
    if ("aeiou".includes(letra)) {
        vocal += letra;
    }
}

document.write(vocal);