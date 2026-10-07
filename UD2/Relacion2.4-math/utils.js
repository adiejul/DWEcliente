function numeroAleatorio(){

    return Math.random();
}

function numeroAleatorioMayor(){

    return Math.random() *(200-100) +100;
}

function numeroAleatorioSolicita(){
    let num1 = parseFloat(prompt("Introduce un numero"));
    let num2 = parseFloat(prompt("Introduce un numero"));

    if(num1 > num2){
        return Math.random() * (num2-num1) +num1
    }else{
        return Math.random() * (num1-num2) +num2
    }
}

function calculaAngulo(){
    let angulo= parseFloat(prompt("Introduce el angulo: "));

    return "El seno es "+ (Math.sin(angulo)).toFixed(2) +" el coseno es "+ (Math.cos(angulo)).toFixed(2) + " y la tangente es " + (Math.tan(angulo)).toFixed(2)


}