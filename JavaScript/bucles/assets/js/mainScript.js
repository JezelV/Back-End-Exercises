//? Solución del ejercicio 1: Escribir una función que pida un número entero, y verificar si es un número primo.

function esPrimo(numeroUsuario){
    var numeroIncognito = numeroUsuario;
    // Verificar si es primo e imprimirlo

    // Casos especiales
	if (numeroUsuario == 0 || numeroUsuario == 1 || numeroUsuario == 4){
        return false;
    } else {
        for (let x = 2; x < numeroUsuario / 2; x++) {
            if (numeroUsuario % x == 0){

                // Si se puede dividir entre éstos números, entonces no es un número primo
                return false;
            }
        }

        // Si no se pudo dividir entre ninguno de los números generados en el for, entonces sí es un número primo
        return true;
    }
    // Fin del if
}
// Fin de la función esPrimo

//? Solución del ejercicio 2: Escribe un programa que calcule el valor aproximado de PI.

// Función para truncar números
function trunc (x, posiciones = 0) {
    let s = x.toString()
    let l = s.length
    let decimalLength = s.indexOf('.') + 1
    let numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
}

// Función para calcular los dígitos de PI deseados:

function calcularPI(digitosDePI){

    // Inicialización de las variables locales utilizadas dentro de la función
    let limite = parseInt(digitosDePI);
    let denominador = 3;
    let numeroDePi = 3.141592653589793;
    let calculoDePi = 4;
    let aux = 1;
    let x = trunc(calculoDePi, limite);
    let y = trunc(numeroDePi, limite);
    let ultimoDA = null;
    let ultimoDP = null;
    y = parseFloat(y);
    x = parseFloat(x);

    // Imprimir info relevante
    console.log("Al principio, PI vale: ", calculoDePi);
    console.log("El Cálculo de Pi es: ");
    console.log(x);
    console.log("El número de Pi a "+limite+" dígitos es: ");
    console.log(y);

    // Mientras X sea diferente de Y, hacer:
    //? En una futura actualización, mientras el último dígito actual sea diferente al último dígito pasado (ultimoDA !== ultimoDP)
    do { //&& aux<=5000

        // Dependiendo de, si cada iteración es par/impar, hacer:
        if (aux%2!=0){

            // Iteraciones impares
            console.log("Paso "+aux+", se le resta a PI = PI - 4/" + denominador);

            //* Restar una fracción a PI
            calculoDePi = calculoDePi - 4/denominador;
            x = calculoDePi.toFixed(limite);
            x = parseFloat(x);
            console.log("El valor de PI ahora es: ", x);
            console.log("¿Es "+x+" diferente de "+y+"? - ", x!==y);
        } else {

            // Iteraciones pares
            console.log("Paso "+aux+", se le suma a PI = PI + 4/" + denominador);

            //* Sumar una fracción a PI
            calculoDePi = calculoDePi + 4/denominador;
            x = calculoDePi.toFixed(limite);
            x = parseFloat(x);
            console.log("El valor de PI ahora es: ", x);
            console.log("¿Es "+x+" diferente de "+y+"? - ", x!==y);
        }

        // Se aumenta n+2 y aux+1
        denominador+=2;
        aux++;

    } while (x!==y) // Fin del bucle while
    return x;
} // Fin de la función calcularPi

// Ejercicio 3: Dada una secuencia de números terminada en cero, elaborar un algoritmo para calcular el porcentaje y la suma de los números impares, el porcentaje y la suma de los números pares, y la suma de todos los números, y cuántos números fueron ingresados.

//? Ejecución del Ejercicio #1

// Pedir un número entero al usuario y verificar si es un número primo mediante la función esPrimo()
var numeroIngresado = prompt("Ejercicio #1: \nIngresa un número para saber si es un número primo: ");
var seraPrimo = esPrimo(numeroIngresado);
if (seraPrimo) {
    alert(numeroIngresado + " ¡Es un número primo!");
    console.log(numeroIngresado + " ¡Es un número primo!");
} else {
    alert(numeroIngresado + " ¡No es un número primo!");
    console.log(numeroIngresado + " ¡No es un número primo!");
}

//? Ejecución del Ejercicio #2

// Pedir al usuario el número de dígitos de PI a calcular, y utiliar la función calcularPI() para hacerlo

var limite = prompt("Ejercicio #2: \nIngresa cuántos dígitos de PI quieres calcular: ");
var t0 = performance.now(); //? Calcular tiempo de ejecución de la función
var prueba = calcularPI(limite);
alert("A "+limite+" dígitos, PI vale: " + prueba);
console.log("A "+limite+" dígitos, PI vale: " + prueba);
var t1 = performance.now(); //? Calcular tiempo de ejecución de la función
var totalMS=t1-t0; //? tiempo de ejecución en milisegundos
var totalS=totalMS/1000; //? tiempo de ejecución en segundos

totalS = trunc(totalS, 4);

alert('Tiempo de ejecución del cálculo: '+totalS +' segundos');

// Ejecución del Ejercicio #3

