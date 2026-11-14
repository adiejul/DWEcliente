let tamano = 16;

const modificaTamano = (tipo)=>{
    if(tipo === "+")
        tamano += 1;
    else tamano -= 1;

    return tamano + "px"
}

const fBotones = () => {
    const parrafos = document.getElementById("parrafos");

    const arBoton = document.querySelectorAll(".btn");

    arBoton.forEach( boton => {
        boton.addEventListener("click", () => {

            switch (boton.id) {
                case "aumenta":
                    parrafos.style.fontSize = modificaTamano("+");
                    
                    break;
                
                case "disminuye":
                    parrafos.style.fontSize = modificaTamano("-");
                    
                    break;
                
                case "izquierda":
                    parrafos.style.textAlign = "left"
                    
                    break;
                
                case "justificar":
                    parrafos.style.textAlign = "justify"
                    
                    break;
            
                default:
                    break;
            }
        })
    });

}



(function(){
    console.log("texto de prueba");
    fBotones();
})();