let Lpersonas = [];
let Lmontos = [];
let GastoT= 0;


function total(mon) {
  GastoT += monto;
}

function cargar(nom, mon) {
  Lpersonas.push(nom);
  Lmontos.push(mon);
}

function capturar() {
  const nombre = document.getElementById("nombre").value;
  const monto = document.getElementById("monto").value;
  cargar(nombre, monto);
}

function mostrar(nom, mon) {
  const lista = Lmontos
  let p = document.createElement("p");
  p.innerText = nom + " " + mon;
  lista.append(p);
}

function promedio(mon) {
  let numper = Lpersonas.length;
  let prom = (mon/numper).toFixed(2);
  total.innerText = mon
  final.innerText = prom
}


function acomodar() {
  capturar();
  total(monto); 
  mostrar(nombre, monto);
  promedio(monto);
}