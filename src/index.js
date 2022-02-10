// variables y Constantes

const nombre = "Christian";
const apellido = "Hernandez";
let valorDado = 5;

console.log(nombre, apellido, valorDado);
// ejemplo si declaramos una condicional veras de lo que hablamos
if (true) {
  let valorDado = 6;
  console.log(valorDado);
}

//ahora cuando visualizamo en nuestra consola veran  que al poner un console.log() buscando el valor global nos dara el que esta afuera del ambito de nuestra condicional

console.log(valorDado);

//!recordar que actulamente no se utiliza "var" bajo ningún concepto por si desea que tenga tanto un valor global como local utilizamos la palabra "let" si  en cambio. si deseas una variable con una caracterista unica que no va a cambiar se le coloca el nombre "const"

//* si deseas conocer más investiga "scope javascript" https://www.w3schools.com/js/js_scope.asp
