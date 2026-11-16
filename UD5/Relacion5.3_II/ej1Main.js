let totalSegundos= 0;
let intervalo = null;

const fStart = () =>{
    if(intervalo===null){
        intervalo = setInterval(()=>{
            totalSegundos++;
            fPantalla();
        }, 1000);
    }
}

const fStop = () =>{
    clearInterval(intervalo);
    intervalo = null;
}

const fReset = () =>{
    fStop();
    totalSegundos = 0;
    fPantalla();
}

const fBotones= () =>{
    const btnStart = document.getElementById("start");
    btnStart.addEventListener("click", fStart);

    const btnStop = document.getElementById("stop");
    btnStop.addEventListener("click", fStop);

    const btnReset = document.getElementById("reset");
    btnReset.addEventListener("click", fReset);
}

const fPantalla = () => {
    const divPrincipal = document.getElementById("principal");

    let minutos = Math.floor(totalSegundos/60);
    let segundosSobrantes = totalSegundos % 60;

    divPrincipal.textContent = `${minutos}:${segundosSobrantes}`
}

const fCronometro = () => {
    
    fBotones();
    fPantalla();
}

(function(){
    console.log("Texto de prueba");
    fCronometro();
})();