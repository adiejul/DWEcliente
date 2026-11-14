

const fReemplaza = () => {
    
    const campo = document.getElementById("texto");

    campo.addEventListener("blur", () => {
        campo.value = campo.value.replaceAll("&", "and");
        
    });
};

(function () {
    console.log("texto de prueba");
    fReemplaza();
})();