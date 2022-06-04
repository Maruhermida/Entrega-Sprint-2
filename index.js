
//listas de nombres y montos
let listaNombres = []
let listaMontos =[]
let listaFinal = []

//función cargar elementos a las listas

function cargar(nom, mon) {
    listaNombres.push(nom);
    listaMontos.push(mon);
    listaFinal.push(nom + mon)
}


// función para capturar datos del formulario 
function capturar() {
    const nombre = document.getElementById("nombreInput").value;
    const monto = document.getElementById("montoInput").value;
    cargar(nombre, monto);

}


//funcion calculo listaMontos
function calcularTotal(listaMontos) {
    var total = 0
    for (let monto of listaMontos) {
        total += monto
    }
}

// función para el cálculo del monto total
 function Total() {
     const montoTotal = document.getElementById(total)
     resultado.innertext = calcularTotal(listaMontos)
 }



 

