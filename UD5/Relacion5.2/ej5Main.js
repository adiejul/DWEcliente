
const fPulsaBoton = ()=>{
    const fichero = document.getElementById("fichero");

    const nuevoInput = document.createElement("input");

    nuevoInput.type="file";

    const br = document.createElement("br");

    fichero.appendChild(br);
  
    fichero.appendChild(nuevoInput);
    
    
}

const fnuevoFichero = ()=>{
    const boton = document.getElementById("otroFichero");
    boton.addEventListener("click", fPulsaBoton)
}


(function(){
    console.log("Texto de prueba");
    fnuevoFichero();
})();