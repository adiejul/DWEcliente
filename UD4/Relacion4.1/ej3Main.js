
const tiempoTranscurrido = () => {

    const divPrincipal = document.getElementById("principal");

    const tiempoInicial = Date.now();

    setInterval(()=>{
        const segundos = Math.floor((Date.now() - tiempoInicial)/ 1000);
        
        divPrincipal.textContent= `Ha transcurrido ${segundos} segundos`;
    },1000);

}


(function(){

    console.log("Texto de prueba...")

    tiempoTranscurrido();

})();