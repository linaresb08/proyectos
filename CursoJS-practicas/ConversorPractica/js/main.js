function convertir(a, b) {
  let resultado = a * b;
  return resultado;
}

var dinero = 10;
var cambio = 125;

function iniciar_conversion() {
  let cambio = document.getElementById('cambio').value;
  let dinero = document.getElementById('dinero').value;
  dinero = dinero > 0 ? dinero : 1;
  let recibo = convertir(dinero, cambio);
  document.getElementById('conversiones').innerHTML += `${dinero} son ${recibo} yenes <br>`;
  document.getElementById('dinero').value = '';
  document.getElementById('dinero').focus();

}

window.onload = inicio;

function inicio() {
  document.getElementById('dinero').onkeydown = teclado;
  document.getElementById('cambio').value = cambio;
  document.getElementById('boton').onclick = iniciar_conversion;
}

function teclado(e) {
  let codigo_tecla = e.keyCode;

  if (codigo_tecla == 13) {
    iniciar_conversion();
  }
}