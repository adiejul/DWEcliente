const arColores = [
    { codigo: "#0000FF", nombre: "azul" },
    { codigo: "#FF0000", nombre: "rojo" },
    { codigo: "#00FF00", nombre: "verde" },
    { codigo: "#FFFF00", nombre: "amarillo" },
    { codigo: "#000000", nombre: "negro" },
    { codigo: "#FFFFFF", nombre: "blanco" },
    { codigo: "#FFA500", nombre: "naranja" },
    { codigo: "#800080", nombre: "morado" },
    { codigo: "#FFC0CB", nombre: "rosa" },
    { codigo: "#A52A2A", nombre: "marrón" },
    { codigo: "#808080", nombre: "gris" },
    { codigo: "#00FFFF", nombre: "cian" }
];

const fOver = (event)=>{
    event.target.style.backgroundColor= color;
}

const fOut = (event)=>{
    event.target.textContent = event.color.nombre;
}


const creaContenido = (arColores)=>{
    const tabla = document.createElement('table')

    arColores.forEach(color => {
        let fila = document.createElement('tr');
        let columnaCodigo = document.createElement('td');
        columnaCodigo.textContent= color.codigo;
        columnaCodigo.addEventListener("mouseover", ()=>{ columnaCodigo.style.backgroundColor = color.codigo});
        columnaCodigo.addEventListener("mouseout", ()=>{columnaCodigo.textContent= color.nombre});

        fila.appendChild(columnaCodigo);
        
        tabla.appendChild(fila);
    });
    
    return tabla;
}

const showTabla = (arColores)=>{
    const divPrincipal = document.getElementById("principal");

    divPrincipal.appendChild(creaContenido(arColores))
}

(function(){
    console.log("probando la pagina")
    window.addEventListener("load",showTabla(arColores));
})();