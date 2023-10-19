/*
Ejercicio 1: Variables y Operaciones Matemáticas

Crea dos variables, numero1 y numero2, y asígnales valores numéricos. Luego, realiza las siguientes operaciones y muestra los resultados en la consola:

Suma de numero1 y numero2.
Resta de numero1 y numero2.
Multiplicación de numero1 y numero2.
División de numero1 entre numero2.
*/

// definir variables
let numero1 = 23;
let numero2 = 17;

//suma
console.log("Suma")
console.log(numero1+numero2)
console.log("Suma de numero1 y numero2: " + (numero1 + numero2));
console.log("Suma de " + numero1 + " y " + numero2 + ": " + (numero1 + numero2));

//resta
console.log("Resta")
console.log(numero1-numero2);
console.log("Resta de numero1 y numero2: " + (numero1 - numero2));
console.log("Resta de " + numero1 + " y " + numero2 + ": " + (numero1 - numero2));

//multiplicación
console.log("Multiplicación")
console.log(numero1*numero2);
console.log("Multiplicación de numero1 y numero2: " + (numero1 * numero2));
console.log("Multiplicación de " + numero1 + " y " + numero2 + ": " + (numero1 * numero2));


//división
console.log("División")
console.log(numero1/numero2);
console.log("División de numero1 y numero2: " + (numero1 / numero2));
console.log("División de " + numero1 + " y " + numero2 + ": " + (numero1 / numero2));

/*
Ejercicio 2: Concatenación de Cadenas
Crea dos variables, nombre y apellido, y asígnales valores de tu elección. Luego, crea una tercera variable llamada nombreCompleto que contenga la concatenación de nombre y apellido. Muestra nombreCompleto en la consola.
*/

// definir variables
let nombre = "Janis";
let apellido = "Joplin";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);
console.log("Nombre Completo: " + nombreCompleto);

/*
Ejercicio 3: Conversión de Grados Celsius a Fahrenheit

Crea una variable llamada gradosCelsius y asígnale un valor en grados Celsius. Luego, utiliza la fórmula de conversión para calcular los grados Fahrenheit y almacénalos en una variable llamada gradosFahrenheit. Muestra ambos valores en la consola.
*/

// definir variables
let gradosCelsius = 87;
let gradosFahrenheit = (gradosCelsius * 9/5 + 32)

console.log(gradosCelsius);
console.log("Grados Celsius: " + gradosCelsius);
console.log(gradosFahrenheit);
console.log("Grados Fahrenheit: " + gradosFahrenheit);
