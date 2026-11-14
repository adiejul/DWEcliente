


const pulsaBoton= () => {
    const divPrincipal =  document.getElementById("principal");

    divPrincipal.onclick = function(){
        alert("Has pulsado el boton");
    }
};

(function(){
    
    console.log("Texto inicial de prueba...");
    pulsaBoton();

})();