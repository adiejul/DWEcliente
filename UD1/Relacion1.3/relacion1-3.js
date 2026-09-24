function ageCalculator(edad){

    let anyoActual = new Date().getFullYear();

    let res = anyoActual - edad;

    return "Tienes " + (res-1) + " o " + res + " años";
}

function supplyCalculator(){

    let edad = parseInt(prompt("Introduce tu edad: "))
    let edadMaxima = parseInt(prompt("Introduce la edad maxima: "));
    let cantidadDiaria = parseInt(prompt("Introduce la cantidad maxima de suministros al dia: "))

    let res = ((edadMaxima - edad)*365) * cantidadDiaria  

    return "Necesitaras " + res + " para que te duren hasta la avanzada edad de " + edadMaxima + " años";

}


