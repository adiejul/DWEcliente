const arLista = [];

const fDibujaLista = () => {
    const ulPrincipal = document.getElementById("principal");
    ulPrincipal.innerHTML = "";
    arLista.forEach(item => {
        const producto = document.createElement("li");
        producto.textContent = item;
        ulPrincipal.appendChild(producto);
    });
}

const fincluyeProducto = () => {
    const producto = document.getElementById("producto");
    let texto = producto.value;
    texto = texto.trim();
    if (texto !== ""){
        arLista.push(texto);
    }
    producto.value="";
    fDibujaLista();
}

const fListaCompra = () => {

    const boton = document.getElementById("btn");
    boton.addEventListener("click", fincluyeProducto);

}


(function () {
    console.log("texto de prueba");
    fListaCompra();
})();