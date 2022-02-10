// Template String

const nombre = "Christian";
const apellido = "Hernández";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombreCompleto) {
  return "Hola " + nombreCompleto;
}
console.log(`Esto es un texto: ${getSaludo(nombreCompleto)}`);
