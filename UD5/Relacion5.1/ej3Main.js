import { arrArticulos } from "./modulos/articulos.mjs";

const fArticulos = (arrArticulos) =>{

    let divPrincipal = document.getElementById("principal")

    arrArticulos.forEach(articulo => {
        divPrincipal.appendChild(fArticulo(articulo))
    });
}

const fArticulo = (articulo) =>{

    let divArticulo = document.createElement("div");

    divArticulo.classList.add("tarjeta-articulo")

    
    let pId = document.createElement("p");
    let pTitle = document.createElement("p");
    let pPrice = document.createElement("p");
    let pDescription= document.createElement("p");
    let pCategory = document.createElement("p");

    pId.textContent = articulo.id;
    pTitle.textContent = articulo.title;
    pPrice.textContent = articulo.price;
    pDescription.textContent = articulo.description;
    pCategory.textContent = articulo.category;
    
    divArticulo.appendChild(pId);
    divArticulo.appendChild(pTitle);
    divArticulo.appendChild(pPrice);
    divArticulo.appendChild(pDescription);
    divArticulo.appendChild(pCategory);
    
    return divArticulo;
}


(function(){
    console.log("muestro por pantalla- prueba")
    fArticulos(arrArticulos);
})()