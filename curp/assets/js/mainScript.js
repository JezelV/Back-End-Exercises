
var nombre = prompt("Escribe tu nombre");
var apellidoP = prompt("Escribe tu apellido paterno");
var apellidoM = prompt("Escribe tu apellido materno");
var dia = prompt("Escribe el día de tu nacimiento (a 2 dígitos)");
var mes = prompt("Escribe el mes de tu nacimiento (a 2 dígitos)");
var anio = prompt("Escribe el año de tu nacimiento (a 2 dígitos)");
var sexo = prompt("Escribe tu sexo (H/M)");
var estado = prompt("Escribe tu estado (abreviado a 2 letras)");

//* Se crea el array "curp"
var curp = new Array();

//? Función que regrese la primer vocal de una palabra dada

function primerVocal(w) {

    var regex = /[^aeiou]/gi;
    var vowels = w.replace(regex, "");
  return vowels.charAt(0);
}

//? Función que regrese la primer consonante de una palabra dada

function primerCons(w) {
  let aux = w.split('');
  for (let i = 0; i < aux.length; i++) {
      if (!(aux[i] === 'A' || aux[i] === 'E' || aux[i] === 'I' || aux[i] === 'O' || aux[i] === 'U' || aux[i] === 'a' || aux[i] === 'e' || aux[i] === 'i' || aux[i] === 'o' || aux[i] === 'u')) {
          return aux[i];
      }
  }
}

//* elemento 0 = La inicial y la primer vocal del Apellido Paterno
curp[0] = apellidoP.substring(0, 1) + primerVocal(apellidoP);

//* elemento 1 = La inicial del Apellido Materno
curp[1] = apellidoM.substring(0, 1);

//* elemento 2 = La inicial del nombre principal
curp[2] = nombre.substring(0, 1);

//* elemento 3 = El año a 2 dígitos
curp[3] = anio;

//* elemento 4 = El mes a 2 dígitos
curp[4] = mes;

//* elemento 5 = El día a 2 dígitos
curp[5] = dia;

//* elemento 6 = El sexo (H/M)
curp[6] = sexo;

//* elemento 7 = (abreviatura a 2 letras)
curp[7] = estado;

//* elemento 8 = Primera consonante no inicial del Apellido Paterno (incompleto)
curp[8] = primerCons(apellidoP.substring(1,));

//* elemento 9 = Primera consonante no inicial del Apellido Materno (incompleto)
curp[9] = primerCons(apellidoM.substring(1,));

//* elemento 10 = Primera constante no inicial del nombre
curp[10] = primerCons(nombre.substring(1,));

//* elemento 11 = Homoclave (2 dígitos al azahar)
curp[11] = Math.random();
curp[11] = curp[11].toString();
curp[11] = curp[11].substring(3,5)

console.log(curp);

//* Convertir el array a un String
var curpFinal = curp.join("");
console.log(curpFinal);

//* Convertir el String a Mayúsculas
curpFinal = curpFinal.toUpperCase();
console.log(curpFinal);
alert(curpFinal);
