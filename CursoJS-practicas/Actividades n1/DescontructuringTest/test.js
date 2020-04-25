let object = {
  name: 'Soy el nombre',
  viewprint: [
    { text: 'soy el código a imprimir'},
    { text: 'soy el código a imprimir'},
    { text: 'soy el código a imprimir'},
    { text: 'soy el código a imprimir'},
    { text: 'soy el código a imprimir'},
    { text: [
      { text: 'soy el código a imprimir'},
      { text: 'soy el código a imprimir'},
    ]},
  ],
};

const {name, viewprint} = object;
console.log(name);
console.log(viewprint);