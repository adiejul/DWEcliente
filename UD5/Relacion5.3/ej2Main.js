
const arFijo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
const arPiezas = [6, 9, 5, 14, 3, 1, 7, 15, 2, 10, 0, 12, 13, 4, 8, 11];


const dibujaTablero = (arPiezas) => {
    const tablero = document.getElementById("principal");
    tablero.innerHTML="";

    arPiezas.forEach(numero => {
        let casilla = document.createElement("div");
        casilla.textContent= numero;
        casilla.className= "casilla";
        tablero.appendChild(casilla);
    });
    return tablero;
}

const fMueveFicha = ()=>{


}



const fComprobar = (arFijo, arPiezas) =>{
    if(arFijo === arPiezas)
        return true;
    else return false;
}


const fPuzzle = (arFijo, arPiezas)=>{
    
    const tablero = dibujaTablero(arPiezas);

    const mueve = fMueveFicha();


    //if (fComprobar(arFijo, arPiezas))
        

    return tablero
}

(function (){
    console.log("texto de prueba")
    fPuzzle(arFijo, arPiezas);
})();