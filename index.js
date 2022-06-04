
//listas de nombres y montos
let listaNombres = []
let listaMontos =[]

//función cargar elementos a las listas

function cargar(nom, mon) {
    listaNombres.push(nom);
    listaMontos.push(mon);
}


// función para capturar datos del formulario 
function capturar() {
    const nombre = document.getElementById("nombreInput").value;
    const monto = document.getElementById("montoInput").value;
    cargar(nombre, monto);

}






