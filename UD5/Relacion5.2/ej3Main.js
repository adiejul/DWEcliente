let muestra = false;

const fDesplega = event => {
    if (muestra){
        document.getElementById("oculto").style.display = "block";
        muestra = false;
        event.target.textContent = "Ocultar Artículo";
    }else{
        document.getElementById("oculto").style.display = "none";
        muestra = true;
        event.target.textContent = "Ver Artículo Completo";
    }
}

const fmostrar = ()=>{
    const boton = document.getElementById("btn");
    boton.addEventListener("click", fDesplega);
}


(function(){
    console.log("Texto de prueba");
    fmostrar();
})();