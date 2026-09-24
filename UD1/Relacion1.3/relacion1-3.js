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

function circumference(radio){

    let circunferencia = 2 * 3.14 * radio

    return "La circunferencia es " + circunferencia;

}

function area(radio){

    let area= 3.14 * (radio * radio);

    return "El area es " + area; 

}

function convertTemperature(){
    let grados = parseFloat(prompt("Introduce los Grados a convertir en Fahrenheit"))
    let res= (grados * 9/5) + 32;

    return grados + "ºC son " +res+ "ºF"

}
