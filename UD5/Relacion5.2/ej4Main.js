

const fMas = () => {
    const ul = document.getElementById("lista");

    const li = document.createElement("li");

    let cont = ul.querySelectorAll("li").length;


    li.textContent= `Elemento ${cont + 1}`;


    ul.appendChild(li)
}


const fNuevoElemento = ()=>{
    const boton = document.getElementById("btn");
    boton.addEventListener("click", fMas)
}



(function(){
    console.log("Texto de prueba");
    fNuevoElemento();
})();