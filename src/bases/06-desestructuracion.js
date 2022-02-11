//Desestructuración o asignación Destructurante

//*para saber más buscar en:https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
  nombre: "tony",
  edad: 45,
  clave: "Ironman",
}; //todo: este seria nuestro objeto literal.

// console.log(persona.edad);
// console.log(persona.clave);

//!de esta manera sera tedioso el estar escribiendo persona.algo aqui es donde entra en el juego la Desestructuración. Ejemplo:

// const { nombre } = persona; //* si en una dado caso tenemos una variable con ese nombre podremos realizarlo de esta manera Ejemplo: const {nombre: nombre2} = persona y le asignamos a nuestro console.log(nombre2)

// console.log(nombre);

//todo: creamos nuestra function para extraer la informacion
// const retornaPersona = (usuario) => {
//   console.log(usuario);
// };
// retornaPersona(persona);

//todo: pero, si qusieramos una informacion en este caso de nombre y edad de las propiedades del objeto "Persona""podemos utilizar la desestructuracion de la siguiente forma observe que donde indica el parametro de la funcion de fecha lleva dentro de los parentesis "{}"

// const retornaPersona = ({ nombre, edad }) => {
//   console.log(nombre, edad);
// };
// retornaPersona(persona);

//todo: tambien podemos añadir elementos al objeto de la siguiente manera Ejemplo: le estamos añadiendo "el rango" pero, si le añadimos el rango dentro de nuestro objeto a pesar de que lo añada no se tomara el valor sino el que tiene por defecto el objeto.

// const retornaPersona = ({ nombre, edad, rango = "Capitan" }) => {
//   console.log(nombre, edad, rango);
// };
// retornaPersona(persona);

//todo:utilizando la funcion de fecha creamos un objeto nuevo para y realizamos un return

// const retornaPersona = ({ clave, nombre, edad, rango = "Capitan" }) => {
//   // console.log(nombre, edad, rango);
//   return {
//     nombreClave: clave,
//     anios: edad,
//   };
// };

// const avenger = retornaPersona(persona);

// console.log(avenger);

//todo: aqui cambiaremos los nombres de nuestra funcion.

const userContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 13.3434,
      lng: -12.3485,
    },
  };
};
//!supongamos que queremos algo mas especifico lat y lng como lo hariamos. facil!. {latlng:{lat,lng}} como ya veremos acontinuacion
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = userContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);

//!averiguar porque no me funciono el cambio de nombre de la function useContex no me funciono

//*Ese error es debido a la nueva versión de React (17). Ahora las palabras "use" y "set" al principio estan reservadas y solo se pueden usar en lugares específicos.

//*La solución es cambiar el nombre a cualquier otro que no tenga "use" o "set" al principio.
