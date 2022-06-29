let Personas = [];
let Montos = [];
let GastoT= 0;

function total() {
  GastoT += monto;
}

function cargar(nom, mon) {
  Personas.push(nom);
  Montos.push(mon);
}

function capturar() {
  const nombre = document.getElementById("nombre").value;
  const monto = document.getElementById("monto").value;
  cargar(nombre, monto);
}

function mostrar(nom, mon) {
  const lista = Montos
  let p = document.createElement("p");
  p.innerText = nom + " " + mon;
  lista.append(p);
}

function promedio(mon) {
  let numper = Personas.length;
  let prom = (mon/numper).toFixed(2);
  total.innerHTML = mon
  final.innerHTML = prom
}

const persona = document.getElementById("nombre").value;
const gasto = document.getElementById("monto").value;

function acomodar() {
  let nom = persona;
  let mon = toString(gasto);
  total();
  capturar();
  mostrar(nom, mon);
  promedio(mon);
}