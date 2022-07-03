let listaPersonas = [];
let listaMontos = [];
let gastoTotal = 0;

const nombre = document.getElementById('nombre').value;
const monto = document.getElementById('monto').value;
const listagastos = document.getElementById('listagastos')
const total =  document.getElementById('total');
const reparto = document.getElementById('reparto');


function cargar() {
  listaPersonas.push(nombre);
  listaMontos.push(parseInt(monto.value));
}

function capturar() {  
  cargar(nombre, parseInt(monto.value));
  console.log(parseInt(monto));  
}

function getTotal(monto) {
  gastoTotal += parseInt(monto);
  console.log(gastoTotal);
  
  total.textContent = "Total: " + gastoTotal;
}

function mostrar(nombre, monto) {
  let p = document.createElement('p');
  p.textContent = nombre + " debe " + monto;
  listagastos.append(p);
}

function promedio() {
  let numPersonas = listaPersonas.length;
  let promedio = (parseInt(gastoTotal/numPersonas)); 

  const reparto = document.getElementById('reparto');
  reparto.textContent = "Cada uno debe poner: " + promedio;  
}


function acomodar() {
  const nombre = document.getElementById('nombre').value;
  const monto = document.getElementById('monto').value;
  capturar();
  getTotal(monto); 
  mostrar(nombre, monto);
  promedio();
}