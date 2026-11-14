const arAyuda = [
    {campo:"name", mensaje:"Introduce tu nombre"},
    {campo:"correo", mensaje:"Introduce tu correo"},
    {campo:"comentario", mensaje:"Introduce el comentario"},
    {campo:"enviar", mensaje:"enviar formulario"},
    {campo:"reset", mensaje:"resetear formulario"},
]

const fAyuda = ()=>{
    const ayuda = document.getElementById("ayuda");

    arAyuda.forEach(item => {
        const elemento = document.getElementById(item.campo);
        elemento.addEventListener("focus", ()=> ayuda.textContent = item.mensaje);
        elemento.addEventListener("blur", ()=> ayuda.textContent = "");

    });
}

(function(){
    console.log("texto de prueba");
    fAyuda();
})();