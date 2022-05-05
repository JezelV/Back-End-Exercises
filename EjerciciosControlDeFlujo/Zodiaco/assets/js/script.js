
function signoZodical() {
    let dia = parseInt(prompt(" Introduce tu dia de nacimiento")); //Pides el dato de dia de nacimiento al usuario
    let mes = parseInt(prompt("Introduce tu mes de nacimiento en numero")); //Pides el dato de mes de nacimiento del usuario
    if (dia > 0 && mes > 0 && dia <= 31 && mes <= 12) {//Aqui hacemos validacion de datos bien ingresados y evitar errores
      //Aqui empezamos a ver que signo es el correcto
      if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)) alert("Acuario");
      if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) alert("Piscis");
      if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) alert("Aries");
      if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) alert("Tauro");
      if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) alert("Géminis");
      if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7)) alert("Cáncer");
      if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)) alert("Leo");
      if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) alert("Virgo");
      if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) alert("Libra");
      if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11)) alert("Escorpión");
      if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) alert("Sagitario");
      if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) alert("Capricornio");
    } else {
      alert("Dato mal ingresado"); //Esto es para mandar a decir que un dato fue mal ingresado
    }
  }
  signoZodical();