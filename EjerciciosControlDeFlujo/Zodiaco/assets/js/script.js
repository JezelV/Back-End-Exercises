
function signoZodical() {
    
  //? Pedir el día de nacimiento

    let dia = parseInt(prompt(" Introduce tu dia de nacimiento"));
    
    //? Pedir el mes de nacimiento

    let mes = parseInt(prompt("Introduce tu mes de nacimiento en numero"));

    if (dia > 0 && mes > 0 && dia <= 31 && mes <= 12) {//Aqui hacemos validacion de datos bien ingresados y evitar errores

      //? Calcular cuál signo es el correcto:

      if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)) alert("Eres Acuario");
      if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) alert("Eres Piscis");
      if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) alert("Gran Aries. Hijo de los Dioses Zeus y Hera. Eres el gran Dios olímpico de la guerra.");
      if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) alert("Eres Tauro");
      if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) alert("Eres Géminis");
      if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7)) alert("Eres Cáncer");
      if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)) alert("Eres Leo");
      if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) alert("Eres Virgo");
      if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) alert("Eres Libra");
      if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11)) alert("Eres Escorpión");
      if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) alert("Eres Sagitario");
      if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) alert("Eres Capricornio");
    } else {
      
      //? Mensaje de error

      alert("¡Error! :( \n\nSolución: Ella no te ama.");

    }

  }

  //* Manda a llamar o ejecuta la función que calcula el signo zodiacal.

  signoZodical();
