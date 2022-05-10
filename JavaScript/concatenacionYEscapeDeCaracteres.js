/* 

*Concatenacion

?- Definicion y ejemplos

La concatenacion es la union de dos o mas cadenas de texto. Es un operador de asignacion que se utiliza para unir dos o mas cadenas de texto. Tenemos varias formade de hacer estas concatenaciones.

?- Con el signo +
Podemos concatenar cadenas de texto con el signo +. La desventaja de usar este operador, es que si concantenamos algo distinto a texto, el operador tomara su lugar de "suma" y sumara los valores (si son numericos).

    ? Concatenacion de 2 cadenas de texto con el operador +
    saludo = "Hola Felipe";
    pregunta = " ¿Como estas?";
    saludocompleto = saludo + pregunta;
    console.log(saludocompleto);

    ? Concatenacion de 2 valores numericos con el operador +
    numero1 = 10;
    numero2 = 2;
    resultado = numero1 + numero2;
    console.log(resultado);

?- Forzando strings con "" (" " + numero)
Si queremos concatenar valores numericos, pero queremos evitar que al usar el operador +, podemos forzarlo usando las comillas dobles (" " + numero). Esto le diria a la computadora que el operando es un texto.(De aqui parte que JavaScript tenga un tipado dinamico).

numero1 = 10;
numero2 = 2;
frase = "" + numero1 + numero2; //Cuando se detecta texto, se convierte en una cadena de texto.
console.log(frase); // Obtenemos como resultado"102"

?- Con concat()
Concat() es un metodo de la clase String que nos permite concatenar cadenas de texto. Lo utilizamos para concatenar cadenas de texto sin usar el operador +.

numero1 = "10";
numero2 = 2;
frase = numero1.concat(numero2); //Para poder usar concat si o si tiene que haber una cadena de texto entre los valores a concatenar.
console.log(frase); // Obtenemos como resultado"102"

?- con backticks `` y la variable entre ${}
Para concatenar tenemos otra opcion, la cual es usar el operador backticks `` y la variable entre ${}, esto nos permite concatenar una cadena de texto con una variable sin necesidad de usar el operador +.

nombre= "Felipe";
actividad = " y estoy programando en JavaScript";
edad = 18;
console.log(`Soy ${nombre} y ${actividad}` + ` y tengo ${edad} años`);


* Escapar caracteres

?- Definicion

Escapar caracteres significa que le daremos un tratamiengo a nuestros caracteres, de tal forma que seran reconocidos com texto y no como parte del codigo. Esto nos va a ayudar a evitar errores en nuestro codigo en caso de que queramos resaltar alguna palabra, o utilizar / para separar palabras.


?- Escape con comillas simples y dobles

Si queremos resaltar una palabra dentro de una cadena de texto, podemos apoyarnos de las comillas. Es importante saber que si queremos resaltar nuestra palabra con comillas simples, debemos cerrar la frase con comillas dobles. Si queremos resaltar nuestra palabra con comillas dobles, debemos cerrar la frase con comillas simples.

console.log('Felipe de Jesus 'El amante numero uno de los chilaquiles' Maqueda'); //Si quiero resaltar mi apodo, nos arroja un error.

console.log('Felipe de Jesus \'El fan numero 1 de los chilaquiles\' Maqueda'); //Aqui ya no arroja error, por que usamos la barra invertida para resaltar la palabra Maqueda.

console.log("Felipe de Jesus \"El fan numero 1 de los chilaquiles\" Maqueda"); //Aqui ya no arroja error, por que usamos la barra invertida para resaltar la palabra Maqueda.

console.log('Felipe de Jesus "El fan numero 1 de los chilaquiles" Maqueda'); //Aqui utilizamos las comillas dobles para resaltar el apodo, cerrando la oracion con las comillas simples.

console.log ("Felipe de Jesus 'El fan numero 1 de los chilaquiles' Maqueda"); //Aqui utilizamos las comillas simples para resaltar el apodo, cerrando la oracion con las comillas dobles.

? Salto de linea
Usamos el salto de linea si queremos mostrar nuestra frase en dos lineas. Para ello, usamos el operador \n.

console.log ("Mi nombre es Felipe de Jesus Maqueda \ny me apodan el 'fan numero 1 de los chilaquiles'");

?Doble barra
Es util para cuando trabajamos con rutas de archivos, carpetas, etc. Con e operador doble barra, podemos escapar el caracter \ y poder usarlo en nuestras rutas.

console.log ("La ruta donde guardo mis imagenes de perrito es: \\Users\\felipe\\Desktop\\Imagenes\\Perritos\\");

?Espacio con \r
Podemos utilizar el operador \r para que el salto de linea se ejecute en la misma linea.

console.log("MinombreesFelipe");
console.log('Mi\rnombre\res\rFelipe')

?Espacio con tabulacion (\t)
Podemos utilizar el operador \t para darle un tabulacion a nuestra frase.

console.log("MinombreesFelipe");
console.log('Mi\tnombre\tes\tFelipe')

*/
