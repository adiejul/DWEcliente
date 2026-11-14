


const obtenerPosicion = ()=> {
    const posicion = document.getElementById("posicion");

    document.addEventListener("mousemove", (evento) => {
        posicion.textContent = ` X: ${evento.clientX} - Y: ${evento.clientY}  `
    })
}

(function () {
    console.log("texto prueba...")
    obtenerPosicion();
})()