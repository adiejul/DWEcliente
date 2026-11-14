const muestraPantalla = (event)=>{

    if(event.ctrlKey){
        event.target.style.backgroundColor = "red";
    }else if(event.shiftKey){
        event.target.style.backgroundColor = "blue";
    }
    
} 

const creaCanvas = ()=>{
    let tabla = document.createElement('table');
    
    for (let i = 0; i < 100; i++) {

        let fila = document.createElement('tr');
            for (let x = 0; x < 100; x++) {
                let columna = document.createElement('td');
                columna.addEventListener("mouseover", muestraPantalla);                
                fila.appendChild(columna)
        }

        tabla.appendChild(fila);
    } 
    return tabla;
}

const showCanvas= ()=>{
    const divPrincipal = document.getElementById("principal");
    divPrincipal.appendChild(creaCanvas());
}


(function(){
    console.log("mensaje de prueba");
    window.addEventListener("load", showCanvas);
    
})();