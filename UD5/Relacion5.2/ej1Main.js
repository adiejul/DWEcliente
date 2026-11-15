

function muestraEnlaces(){

    //numero de enlaces de la pagina
    let numeroEnlaces = document.getElementsByTagName("a");

    //Direccion a la que enlaza el penultimo enlace, empleo el de arriba 
    
    //Numero de enlaces que enlazan a google
    let enlacesGoogle = document.querySelectorAll('a[href*="google"]');

    //Numero de enlaces del tercer parrafo
    let parrafos = document.getElementsByTagName("p");
    let enlacesParrafo = parrafos[2].getElementsByTagName("a")
    

    console.log("1. numero de enlaces: ", numeroEnlaces.length);
    console.log("2. Penultimo enlace: ", numeroEnlaces[ numeroEnlaces.length-2]);
    console.log("3. Enlaces que van a google: ", enlacesGoogle.length)
    console.log("4. Enlaces del tercer parrafo: ", enlacesParrafo.length)
   
}


(function(){
    console.log("imprime esto")
    muestraEnlaces();
})();