let minimalista = false;


const fvista = () =>{
    const temaNormal = document.getElementById("temaNormal");
    temaNormal.addEventListener("click", ()=>{ 
        minimalista = false;
        console.log("normal")
        const link = document.getElementById("normal");
        link.disabled = false;
        const apartado = document.getElementById("apartado");
        apartado.textContent= "Este apartado solo debe ser visible para el tema normal";

    });

    const temaMinimalista = document.getElementById("temaMinimalista");
    temaMinimalista.addEventListener("click", ()=>{ 
        minimalista = true;
        console.log("minimalista");
        const link = document.getElementById("normal");
        link.disabled = true;
        const apartado = document.getElementById("apartado");
        apartado.textContent= "";

    });



}

(function(){
    console.log("Prueba inicial");
    fvista();
})();