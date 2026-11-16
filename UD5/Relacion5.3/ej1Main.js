let contador = 0;

const fAumenta = () =>{
    const boton = document.getElementById("btn");
    boton.addEventListener("click", ()=>{
        const numero = document.getElementById("numero");
        numero.textContent = `Número ${contador}`;
        contador += 1;
    })
}


(function(){
    console.log("texto de prueba");
    fAumenta();
})();