let listaPersonas = [];
let listaMontos = [];
let gastoTotal = 0;

const nombre = document.getElementById('nombre').value;
const monto = document.getElementById('monto').value;
const listagastos = document.getElementById('listagastos')


function cargar() {
  listaPersonas.push(nombre);
  listaMontos.push(parseInt(monto));
  return persona = {nombre: nombre, monto: monto}
}

function capturar() {  
  cargar(nombre, parseInt(monto.value));
  console.log(parseInt(monto.value));
  
}

function total() {
  gastoTotal += parseInt(monto.value);
}

function mostrar(nombre, monto) {
  let p = document.createElement('p');
  p.textContent = nombre + "debe" + monto;
  listagastos.append(p);
}

function promedio() {
  let numPersonas = listaPersonas.length;
  let promedio = (parseInt(monto)/numPersonas).toFixed(2);
  const total =  document.getElementById('total');
  const reparto = document.getElementById('reparto');
  
}


function acomodar() {
  capturar();
  total(); 
  mostrar(persona);
  promedio();
}