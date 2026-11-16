const palabrasAhorcado = [
    "jirafa", "elefante", "delfin", "canguro", "hipopotamo", "cocodrilo", "mariposa", "murcielago", "camaleon", "rinoceronte",
    "flamenco", "medusa", "tortuga", "leopardo", "ardilla", "pinguino", "avestruz", "hamster", "buho", "cebra",
    "tigre", "zorro", "lobo", "aguila", "oso", "ordenador", "telefono", "bicicleta", "paraguas", "microscopio",
    "espejo", "mochila", "antena", "brujula", "reloj", "candado", "tijeras", "violin", "pincel", "trompeta",
    "almohada", "horno", "lampara", "libro", "silla", "llave", "gafas", "cojin", "sarten", "zapato",
    "aguacate", "zanahoria", "chocolate", "fresa", "mandarina", "espagueti", "toronja", "almendra", "cascada", "volcan",
    "huracan", "desierto", "relampago", "montana", "arrecife", "bosque", "oceano", "glaciar", "brisa", "neblina",
    "galaxia", "planeta", "cometa", "eclipse", "estrellas", "gravedad", "sueno", "musica", "libertad", "silencio",
    "misterio", "aventura", "victoria", "energia", "inteligencia", "sonrisa", "magia", "tiempo", "universo", "equilibrio",
    "hospital", "biblioteca", "aeropuerto", "piramide", "castillo", "tesoro", "esfuerzo", "armonia", "destino", "felicidad"
];

const arAbece = "abcdefghijklmnopqrstuvwxyz".split("");

const letraDescubierta = [];

let palabraSeleccionada = " ";

let intentos = 10;

const fSeleccionaPalabra = () => {
    let indice = Math.floor(Math.random() * palabrasAhorcado.length);
    return palabrasAhorcado[indice]
}

const fPintaPalabra = () => {
    const divPalabra = document.getElementById("palabra");

    let rayas = "";

    for (const letra of palabraSeleccionada) {
        if (letraDescubierta.includes(letra)) {
            rayas += letra
        } else {
            rayas += " _ "
        }
    }

    divPalabra.textContent = rayas;
}

const fFinJuego = ()=> {
   const botones =  document.querySelectorAll(".letra");
   botones.forEach(boton=>{
        boton.disabled = true;
        boton.style.backgroundColor= "red";
   })
   
}

const fIntentos = () => {
    const divIntentos = document.getElementById("intento");

    if (intentos === 0) {
        divIntentos.textContent = "Has perdido!!!"
        fFinJuego();
    } else {
        divIntentos.textContent = `Te quedan ${intentos} intentos`;
    }
}

const fComprobarVictoria= () => {

    const ganar = document.getElementById("ganar");

    for (const letra of palabraSeleccionada) {
        if(!letraDescubierta.includes(letra)){
            return false;
        }
    }
    ganar.textContent= "HAS GANADO!!!!!"
    return true;
}

const fCompruebaLetra = (event) => {

    if (!palabraSeleccionada.includes(event.target.textContent)) {
        intentos--;
        fIntentos();
        event.target.disabled = true;
        event.target.style.backgroundColor = "red";
    } else {
        letraDescubierta.push(event.target.textContent);
        event.target.disabled = true;
        event.target.style.backgroundColor = "green";
        fPintaPalabra();
        fComprobarVictoria()
    }
}

const fLetras = () => {
    const abc = document.getElementById("letras");
    arAbece.forEach(letra => {
        const btnLetra = document.createElement("button");
        btnLetra.className = "letra";
        btnLetra.textContent = letra;
        btnLetra.addEventListener("click", fCompruebaLetra);
        abc.appendChild(btnLetra);
    });
}



const fPrincipal = () => {

    palabraSeleccionada = fSeleccionaPalabra();

    fLetras();

    fPintaPalabra();

    fIntentos();

}


(function () {
    console.log("texto de prueba");

    fPrincipal();
})();