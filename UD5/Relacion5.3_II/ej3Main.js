
const arNumeros = [1, 1, 2, 2, 3, 3];

const arMezclado = [...arNumeros].sort(() => Math.random() - 0.5);

let primeraCarta = null;
let segundaCarta = null;

const fComprueba = (event) => {
    let valor = event.target.dataset.valor;
    event.target.textContent = valor;
    if (primeraCarta === null) {
        primeraCarta = event.target;
    } else {
        segundaCarta = event.target;

        if (primeraCarta.dataset.valor === segundaCarta.dataset.valor) {
            primeraCarta = null;
            segundaCarta = null;
        } else {
            setTimeout(() => {
                primeraCarta.textContent = "?";
                segundaCarta.textContent = "?";

                primeraCarta = null;
                segundaCarta = null;
            }, 1000);

        }
    }

}


const fdibuja = () => {
    const divPrincipal = document.getElementById("principal");

    arMezclado.forEach(numero => {
        const divCarta = document.createElement("div");
        divCarta.dataset.valor = numero;
        divCarta.textContent = "?";
        divCarta.className = "carta";
        divCarta.addEventListener("click", fComprueba);
        divPrincipal.appendChild(divCarta);
    });
}




const fPrincipal = () => {
    fdibuja();
}


(function () {
    console.log("texto de prueba")
    fPrincipal();
})();