const form = document.getElementById("todo-form"); //Seleccionamos el formulario.

form.onsubmit = (e) => {
  e.preventDefault(); //Evita que se recargue la pagina.
  const todo = document.getElementById("todo"); //Selecciona el elemento por su id.
  const todoText = todo.value; //Guarda el valor del input en una variable.
  todo.value = ""; //Limpia el input.
  console.log(todoText);
  document.getElementById("todo-list").innerHTML += `<li>${todoText}</li>`; //Agrega el valor del input a la lista.
};
