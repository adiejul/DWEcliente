let muestra = false;

const fDesplega = () => {
    if (muestra){
        document.getElementById("oculto").style.display = "block";
        muestra = false;
    }else{
        document.getElementById("oculto").style.display = "none";
        muestra = true;
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