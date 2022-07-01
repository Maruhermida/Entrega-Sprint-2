let Lpersonas = [];
let Lmontos = [];
let GastoT = 0;




function cargar(nom, mon) {
  Lpersonas.push(nom);
  Lmontos.push(mon);
}

function capturar() {
  const nombre = document.getElementById('nombre').value;
  const monto = document.getElementById('monto');
  cargar(nombre, monto);
  console.log(monto.value)
  console.log(monto);
}

function total(mon) {
  GastoT += mon;
}

function mostrar(nom, mon) {
  listagastos = document.getElementById('listagastos')
  let p = document.createElement('p');
  p.textContent = nom + "debe" + mon;
  listagastos.append(p);
}

function promedio(mon) {
  let numper = Lpersonas.length;
  let prom = (mon/numper).toFixed(2);
  const total =  document.getElementById('total');
  const reparto = document.getElementById('reparto');
  
}


function acomodar() {
  capturar();
  total(monto); 
  mostrar(nombre, monto);
  promedio(monto);
}