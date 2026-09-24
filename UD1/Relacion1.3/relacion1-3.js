function ageCalculator(edad){

    let anyoActual = new Date().getFullYear();

    let res = anyoActual - edad;

    return "Tienen " + (res-1) + " o " + res + " años";
}

