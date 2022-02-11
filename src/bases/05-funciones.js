// Funciones en JS

//todo: elaboramos una funcion tradicional

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

//todo: creamos las misma función simplificada "llamada función de flecha" y es simplemete lo mismo.

const saludar2 = (nombre) => `Hola, ${nombre}`;

//todo: tambien tenemos esta forma de generar un funcion en flecha lamada anonima

const saludar3 = () => `Hola Mundo!`;

//*para realizar la misma operacion y generar un return explicito utilizamemos el signo "()" asi le estaremos indicando dentro de la función que  es un return asi  lo podra indentificar javascript. Ejemplo:

//! debes entender que este seria el caso cuando utilizamos las funciones de flecha (no olvidar esta sintaxis) y queramos retornar un objeto implicito

const getUser = () => ({
  uid: "jdfwebf",
  user: "papi_2348",
});

//tarea 2
//1.trasforme a una funcion de flecha.
//2.tiene que retornar un objeto explicito.
//3.prueba.

// function getUsuarioActivo(nombre) {
//   return {
//     uid: "94739",
//     username: nombre,
//   };
// }
// const usuarioActivo = getUsuarioActivo("Andres Elias");

const getUsuarioActivo = (nombre) => ({
  uid: "94739",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Andres Elias");

console.log(saludar("christian"));
console.log(saludar2("Nany"));

console.log(saludar3());

console.log(getUser());

console.log(usuarioActivo);
