let nombre = 'Betza';
const  CANAL = 'BLC';
let fecha = new Date();
let numero = 3;
let euros = 100;

let mensaje = `Mi nombre es ${nombre}, mi canal es ${CANAL} y estamos en el año ${fecha.getFullYear()}, después del número ${numero} viene el número ${++numero} y el valor de ${euros}€ equivalen a ${convertir(euros)} pesos mexicanos`;
alert(mensaje);

function convertir(a) {
  let resultado = a * 22.23;
  return resultado;
}