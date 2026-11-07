import { arrClientes } from "./modulos/articulos.mjs";

const showClientes = (arClientes) => {
    let divPrincipal = document.getElementById("principal");

    arClientes.forEach(cliente => {
        divPrincipal.appendChild(showCliente(cliente))
        
    });
}

const showCliente = cliente => {

    let divPrincipal = document.createElement('div');
    let pCodigo = document.createElement("p");
    let pDNI = document.createElement("p");
    let pNombre = document.createElement("p");
    let pEdad = document.createElement("p");

    pCodigo.textContent = cliente.codigo;
    pDNI.textContent = cliente.dni;
    pNombre.textContent = cliente.Nombre;
    pEdad.textContent = cliente.edad;

    divPrincipal.appendChild(pCodigo);
    divPrincipal.appendChild(pDNI);
    divPrincipal.appendChild(pNombre);
    divPrincipal.appendChild(pEdad);

    return divPrincipal;
}


(function (){
    console.log("hola desde main")
    showClientes(arrClientes)

})();