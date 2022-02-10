//objestos literales

const persona = {
  nombre: "Christian",
  apelido: "Hernández",
  edad: 35,
  direccion: {
    ciudad: "new york",
    zip: 59592382,
    lat: 33.3845,
    lng: 33.2454,
  },
};

//!tenemos un metodo "table()" que nos ayudara a visualizar nuestro objeto de una mejor manera. Elemplo:

//*console.table({ persona: persona });  colocando de esta manera con los signos "{}" quedara un objeto dentro de otro objeto

//todo: no hace falta se podria simplificar de la siguiente forma CONSOLE.TABLE({PERSONA})

//!para crear un nuevo objeto que tenga las misma caracteristicas una opcion agregada en ES16(ECMAScript16)  tuilizaremos "..." tres punto en el comienzo de nuestro objeto sseguido del objeto que queremos copiar Ejemplo

const persona2 = { ...persona };
persona2.nombre = "Adres Elias";

console.log(persona);
console.log(persona2);
