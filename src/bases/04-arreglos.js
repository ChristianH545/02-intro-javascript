// Arreglos en JS

// const arreglo = new Array(100);

const arreglo = [1, 2, 3, 4];

// arreglo.push(6);
// arreglo.push(7);
// arreglo.push(8);
// arreglo.push(9);
// arreglo.push(10);
let arreglo2 = [...arreglo, 5];

//!¿Cómo se llaman los 3 puntos en JavaScript? Los tres puntos en JavaScript son operador spread / rest . La sintaxis de propagación permite que una expresión se expanda en lugares donde se esperan múltiples argumentos. La sintaxis del parámetro rest se usa para funciones con un número variable de argumentos.

// arreglo2.push(5);no se debe realizar este metodo

//! El método map() crea un nuevo arreglo con los resultados de la llamada a la función indicada aplicada a cada uno de sus elementos.
//* si deseas investigar más ve a la pagina: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//multiplicando
const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});

//dividiendo
const arreglo4 = arreglo3.map(function (numero) {
  return numero / 2;
});
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);

//*El método toFixed()formatea un número usando notación de punto fijo. El método toFixed()formatea un número usando notación de punto fijo.

//todo: si quieres investigar mas https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
