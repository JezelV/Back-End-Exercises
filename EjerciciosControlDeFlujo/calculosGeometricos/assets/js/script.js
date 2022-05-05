
var menu = prompt("Ingresa el numero de la figura que deseas calcular su area y perimetro:\n 1. Cuadrado \n 2. Rectangulo \n 3. Circulo \n 4. Triangulo");

    //* Primer menú de selección

switch (menu) {
    case "1":
        let lado = prompt("Ingresa el valor de un lado del cuadrado");
        let perimetro = lado*4;
        let area = lado*lado;
        alert("El perimetro del cuadrado de lado " + lado + " es de " + perimetro + " unidades aprox.");
        alert("El area del cuadrado de lado " + lado + " es de " + area + " unidades cuadradas aprox.");
        break;

        //* Fin del caso 1

    case "2":
        let largo = prompt("Ingresa el valor del lado largo (base) del rectángulo");
        let ancho = prompt("Ingresa el valor del lado ancho (altura) del rectángulo");
        let perimetroRec = (largo*2) + (ancho*2);
        let areaRec = largo*ancho;
        alert("El perimetro del rectángulo de base = " + largo + " y altura= " + ancho + " es de " + perimetroRec + " unidades aprox.");
        alert("El area del rectángulo de base = " + largo + " y altura= " + ancho + " es de " + areaRec + " unidades cuadradas aprox.");
        break;

        //* Fin del caso 2

    case "3":
        const pi = 3.1416;
        let radio = prompt("Ingrese el valor del radio del círculo");
        let perimetroCi = 2*pi*radio;
        let areaCi = pi*radio*radio;
        alert("El perimetro del circulo de radio " + radio + " es de aproximadamente " + perimetroCi + " unidades aprox.");
        alert("El area del circulo de radio es de aproximadamente " + radio + " es de: " + areaCi + " unidades cuadradas aprox.");
        break;

        //* Fin del caso 3

    case "4":
        let tipoTriangulo = prompt("Elige el tipo de triángulo: \n1. Equilátero (todos sus lados iguales)\n2. Escaleno (todos sus lados diferentes)\n3. Isósceles (base diferente a los lados)");

        //* Segundo menú de selección
        //* Calcular área y perímetro en base al tipo

        switch (tipoTriangulo) {
            case "1":

                //* Pedir datos del triángulo Equilátero
                
                var base = prompt("Ingrese el valor de algún lado del triángulo");
                base = Number(base);
                var areaTri = Math.sqrt(3)*(base**2)/4;
                var perimetroTri = base*3;
                break;

                //? Sale del primer Switch

            case "2":

                //* Pedir datos del triángulo Escaleno

                var base = prompt("Ingrese el valor de la base del triángulo");
                base = Number(base);
                var altura = prompt("Ingrese el valor de la altura del triángulo");
                var lado1 = prompt("Ingrese el valor de uno de los lados del triángulo diferente de la base");
                lado1 = Number(lado1);
                var lado2 = prompt("Ingrese el valor del otro lado del triángulo diferente de la base");
                lado2 = Number(lado2);
                var perimetroTri = lado1 + lado2 + base;
                var areaTri = (base*altura)/2;
                break;

                //? Sale del primer Switch
                
            case "3":

                //* Pedir datos del triángulo Isósceles
                
                var base = prompt("Ingrese el valor de la base del triángulo");
                base = Number(base);
                var altura = prompt("Ingrese el valor de la altura del triángulo");
                var ladoT = prompt("Ingrese el valor de uno de los lados del triángulo");
                base = parseFloat(base);
                altura = parseFloat(altura);
                ladoT = parseFloat(ladoT);
                var areaTri = base*altura/2;
                var perimetroTri = base+ladoT*2;
                break;

                //? Sale del primer Switch
                
            default:
                alert("¡Error! :( \n\nSolución: Ella no te ama");
                break;

                //? Sale del primer Switch
                
        //? Fin del caso 4

        }

        //*En caso de haber elegido un triángulo correctamente, imprime el área y perímetro elegido.

        if (tipoTriangulo=="1" || tipoTriangulo=="2" || tipoTriangulo=="3") {
            alert("\t\t\t\t\t\t\t\t\t\t\t\t\t ¡PAUM! \t\t\t\t\t\t\t\t\t\t\t\t\t\nÁrea = " + areaTri + " unidades cuadradas aprox.\nPerímetro = " + perimetroTri + " unidades aprox.");
        }
        break;

        //?Sale del primer Switch

    default:
        alert("¡Error! :( \n\nSolución: Ella no te ama");
    break;

    //?Sale del segundo Switch

}

//? Fin del programa
