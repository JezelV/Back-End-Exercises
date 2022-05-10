/*
* Elementos del DOM

Cuando hablamos del DOM, hablamos de dos representaciones basicas:
- Representacion del codigo fuente (estructura del HTML)
- Representacion del navegador (estructura del DOM o como se ve ese HTML). //!ESTO ES LO QUE NOSOTROS TRABAJAREMOS


?Node (nodo)

Es una unidad basica, que puede ser un elemento o un nodo de texto. El texto dentro de un nodo elemento, se considera un nuevo nodo hijo de un tipo texto.

Tenemos distintos tipos de nodos:

    ?Document: Es el nodo raiz del documento, a apartir del cual se derivan los demas nodos. Este objeto es el que nos permite accder a todos los elementos del DOM.

    ?Element: Son nodos definidos por etiquetas HTML (div, h1, p, etc).

    ?Text: El texto dentro de un nodo element (el texto dentro de un H1, por ejemplo) se considera un nuevo nodo hijo de tipo texto.

   ?Attribute: Los atributos de las etiquetas tambien definen nodos (en JS no los vamos a ver como nodos, si no como informacion asociada al nodo de ese tipo elemento). No son nodos adicionales, son atributos de un nodo elemento.

   ?Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype, son considerados nodos adicionales.
*/

/*
*Ejemplo de los nodos
<html>
<h1 style: color: red> Hola Generation!!! </h1>
</html>

nodo document: documento (html)
nodo element: h1
nodo text: Hola Generation!!!
nodo atributo: style
*/

/*
!Con JavaScript podemos cambiar:

- Todos los elementos HTML de la pagina web.
- Todos los atributos de la pagina web.
- Todos los estilos CSS de la pagina web.
- Eliminar elementos y atributos HTML existentes.
- Agregar nuevos elementos y atributos HTML.
- Reaccionar a todos los eventos HTML existentes en la pagina.
- Crear nuevos eventos HTML en la pagina.


!Cuando hablamos de metodos, hablamos de acciones que se pueden realizar en elementos HTML para poder modificar los valores de los atributos, estilos, etc,

*/
/*
*Metodos para seleccionar elementos

Estos metodos nos van a permitir seleccionar uno o varios elementos o grupos de elementos del DOM. Estos metodos se utilizan en el document, por eso se agrega element antes del get.
*/

//? document.getElementById(id): Selecciona un elemento por su id.
const titulo = document.getElementById("TituloBienvenida");
//document.write(titulo);

//? document.getElementsByTagName(tag): Selecciona uno o varios elementos por su etiqueta.
const etiqueta = document.getElementsByTagName("h1");
//document.write(etiqueta);

//? document.getElementsByClassName(class): Selecciona uno o varios elementos por su clase.
const clase = document.getElementsByClassName("titulos");

//? document.querySelector(selector):Devuelve el primer elemento que coincida con el selector.
//Esta es otra forma de llamar elementos por su nombre de clase
const parrafo = document.querySelector(".parrafito");
console.log(parrafo);

//? document.querySelectorAll(selector) :Devuelve todos los elementos que coincidan con el selector.
const parrafo2 = document.querySelectorAll(".parrafito");
console.log(parrafo2);

/*
*Metodos para definir, obtener y eliminar atributos

*/
//? setAttribute(atributo, valor): Define un atributo de un elemento.
const rango = document.querySelector(".rango");
rango.setAttribute("type", "number");

//? getAttribute(atributo): Obtiene el valor de un atributo de un elemento.
//document.write(rango.getAttribute("type"));

//? removeAttribute(atributo): Elimina un atributo de un elemento.
rango.removeAttribute("type");

/*
*Propiedades para modificar textos

Son propiedades que nos permiten modificar el texto de un elemento.
*/

// ? .innerHTML: Nos va a permitir sobreescribir un nuevo texto a un elemento determinado.
document.querySelector(".parrafito").innerHTML =
  "Esto ya no es un HOLA A TODXS, si no es un TENGO HAMBRE";

document.getElementById("TituloMasTarde").innerHTML = "YA VAMONOS A COMER";

//? document write: Nos permite escribir un texto en la pagina.
//document.write("Hola a todos, esta es la hora actual: " + Date());

/*
*Modificacion de estilos

Gracias al DOM, podemos modificar los estilos de un elemento de forma mucho mas facil.

Sintaxis bsica de la propiedad .style.propiedad = valor;

*/

//! Como anidar varios estilos en una sola linea
//! Como agregar una animacion del mundito de GitHub
//! onmousedown => Sirve para realizar una acción al
//! onmouseenter => Sirve para realizar una acción al ...
//! onmouseleave => Sirve para realizar una acción al ...
//! onmousemove => Sirve para realizar una acción al ...
//! onmouseout => Sirve para realizar una acción al ...
//! onmouseover => Sirve para realizar una acción al ...
//! onmouseup => Sirve para realizar una acción al ...

document.getElementById("parrafo1").style.color = "black";
document.getElementById("parrafo1").style.fontSize = "30px";
document.getElementById("parrafo1").style.fontFamily = "Arial";
document.getElementById("parrafo1").style.fontWeight = "bold";
document.getElementById("parrafo1").style.textDecoration = "underline";
document.getElementById("parrafo1").style.textTransform = "uppercase";
document.getElementById("parrafo1").style.textAlign = "center";
document.getElementById("parrafo1").style.backgroundColor = "yellow";
document.getElementById("parrafo1").style.padding = "20px";
document.getElementById("parrafo1").style.border = "2px solid blue";
document.getElementById("parrafo1").style.borderRadius = "20px";
document.getElementById("parrafo1").style.boxShadow = "10px 10px 10px #000";

/*
*Uso de eventos

Una forma mas facil de modificar el contenido de un elemento es usando eventos. Los eventos son acciones que se pueden realizar en un elemento, para modificar los valores de los atributos, estilos, etc,

Algunos de los eventos mas comunes son:

- Cuando un usuario hace clic con el raton
- Cuando se ha cargado la pagina
- Cuando se ha cargado una imagen
- Cuando el raton se mueve sobre un elemento
- Cuando el usuario presiona una tecla
*/

//? Evento click (<elemento onclick = "funcionAEjecutar()"></elemento>) Se activa cuando un usuario hace clic en un elemento.

//Creo una constante con la informacion recuperada al usuar el querySelector
const textoAModificar = document.querySelector(".Header1");

//Creo una constante para cambiar el color de esa informacion recopilada
function cambiarColor(color) {
  //Recibo como parametro el color a cambiar, y este parametro lo voy a obtener del HTML
  textoAModificar.style.color = color; //Cambio el color del texto
}

//Mostrar u ocultar informacion
const articulo = document.querySelector("#contenido"); //Seleccionamos el elemento que queremos que se ejecute por su clase.

//Esta es la funcion para mostar informacion. Sientente libre de modificarla como quieras.
function mostrarMas() {
  if (articulo.className === "abierto") {
    //leer menos
    articulo.className = "";
    button.textContent = "Mostrar más";
  } else {
    //leer más
    articulo.className = "abierto";
    button.textContent = "Mostrar menos";
  }
}
