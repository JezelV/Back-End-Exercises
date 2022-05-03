
/*
Aquí se van a inicializar todas las variables que se van a utilizar a lo largo del programa

*/


var figura = prompt("Ingresa la figura deseada (Ejemplo: cu=Cuadrado, t=Triángulo, ci=Círculo, r=Rectángulo):");

var calc = prompt("Elige qué quieres calcular (Ejemplo: a=área, p=perímetro): ");

switch (figura){

    case "cu":
        var lado1 = parseInt(prompt("¿Cuánto mide cualquier lado del cuadrado?"));
        alert(lado1);
        alert(typeof(lado1));
        if (calc="a"){
            //Calcular área del Cuadrado:
            var areaCuadrado = lado1**2;
            //Imprimir resultado:
            alert("Área = " + areaCuadrado);
        } else {
            //Calcular el perímetro del Cuadrado:
            var perimetroCuadrado = lado1 * 4;
            //Imprimir resultado:
            alert("Perímetro = " + perimetroCuadrado);
        }
        //* Comando que no funcionó (porque todavía no sé hacer funciones flecha):
        //(calc=="a") ? "El área es " + areaCuadrado : "El perímetro es: " + perimetroCuadrado;
        
        break;

    case "t":
        var lado1 = parseInt(prompt("¿Cuánto mide cualquier lado del triángulo?"));
        alert(lado1);
        alert(typeof(lado1));
        if (calc="a"){
            //Calcular área del Triángulo:
            var areaTriangulo = lado1**2;
            //Imprimir resultado:
            alert("Área = " + areaTriangulo);
        } else {
            //Calcular el perímetro del Triángulo:
            var perimetroTriangulo = lado1 * 4;
            //Imprimir resultado:
            alert("Perímetro = " + perimetroTriangulo);
        }
        break;

    case "ci":
        var lado1 = parseInt(prompt("¿Cuánto mide cualquier lado del triángulo?"));
        alert(lado1);
        alert(typeof(lado1));
        if (calc="a"){
            //Calcular área del Triángulo:
            var areaTriangulo = lado1**2;
            //Imprimir resultado:
            alert("Área = " + areaTriangulo);
        } else {
            //Calcular el perímetro del Triángulo:
            var perimetroTriangulo = lado1 * 4;
            //Imprimir resultado:
            alert("Perímetro = " + perimetroTriangulo);
        }
        break;

    case "r":
        var lado1 = parseInt(prompt("¿Cuánto mide cualquier lado del triángulo?"));
        alert(lado1);
        alert(typeof(lado1));
        if (calc="a"){
            //Calcular área del Triángulo:
            var areaTriangulo = lado1**2;
            //Imprimir resultado:
            alert("Área = " + areaTriangulo);
        } else {
            //Calcular el perímetro del Triángulo:
            var perimetroTriangulo = lado1 * 4;
            //Imprimir resultado:
            alert("Perímetro = " + perimetroTriangulo);
        }
        break;

}

//* sort(): Ordenar los elementos del arreglo