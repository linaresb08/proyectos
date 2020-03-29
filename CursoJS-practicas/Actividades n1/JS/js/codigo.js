var puntos; // Es una variable global en js
var telefono;
var betzabeth_linares = 1;
var resultado = 'Me' * 2;

function como_tu_nombre() {
  let variable_local;
  variable_local = null;
  telefono = 424;
  dni = '25B';
}

alert(resultado); //  Primer alert

if (true) {
  let edad = 24;
  let tres_aficiones = [edad, 'Betzabeth', 'Leer', 'Tejer', 'Dormir'];
  let mensaje = `Tu nombre es \"${tres_aficiones[1]}\"
y
tu edad es \"${edad}\"`;
  alert(mensaje); //  Segundo alert
  let mensaje2 = `Hola ${tres_aficiones[1]}, tu primera afición es ${tres_aficiones[2]} y la última es ${tres_aficiones[4]}`;
  console.log(mensaje2);

  tipos_de_datos = `El valor de la variable \'EDAD\' es de tipo ${typeof(edad)}`;
  console.log(tipos_de_datos);
}

const NUMERO_DE_OREJAS = 2;