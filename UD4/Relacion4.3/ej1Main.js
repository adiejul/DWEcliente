

const arColores = [ "#0000FF", "#FF0000", "#00FF00",
                    "#FFFF00", "#000000", "#FFFFFF"
                ]

const fCuadro = (arColores) =>{
    const contenedor = document.createElement('div');
    arColores.forEach(color => {
        const cuadro = document.createElement('div');
        cuadro.style.backgroundColor = color;
        cuadro.addEventListener("click", () => { 
            const colorAdivinar = document.getElementById("colorAdivinar");
            colorAdivinar.textContent = color})
        contenedor.appendChild(cuadro);
        
        
    });
    return contenedor;

}

const fColores = (arColores) =>{

    const divPrincipal = document.getElementById("cuadrosColores");
    divPrincipal.appendChild(fCuadro(arColores))
    

}




(function(){
    console.log("prueba de funcionamiento");
    fColores(arColores);
})()