function numeroAleatorio() {

    return Math.random();
}

function numeroAleatorioMayor() {

    return Math.random() * (200 - 100) + 100;
}

function numeroAleatorioSolicita() {
    let num1 = parseFloat(prompt("Introduce un numero"));
    let num2 = parseFloat(prompt("Introduce un numero"));

    if (num1 > num2) {
        return Math.random() * (num2 - num1) + num1
    } else {
        return Math.random() * (num1 - num2) + num2
    }
}

function calculaAngulo() {
    let angulo = parseFloat(prompt("Introduce el angulo: "));

    let radianes = Math.PI * angulo / 180;


    return "El seno es " + (Math.sin(radianes)).toFixed(2) + " el coseno es " + (Math.cos(radianes)).toFixed(2) + " y la tangente es " + (Math.tan(radianes)).toFixed(2);
}

function calculaHipotenusa() {
    let cateto1 = parseFloat(prompt("Introduce el primer cateto: "));
    let cateto2 = parseFloat(prompt("Introduce el segundo cateto: "));
    return Math.hypot(cateto1, cateto2).toFixed(2);
}

function repetirHipotenusa() {

    let respuesta;
    let cont = 1

    do {

        document.write("hipotenusa numero " + cont + ":  ");
        document.write(calculaHipotenusa() + " <br>");

        let res = prompt("¿Desea continuar?")

        respuesta = res.trim().toLowerCase();
        cont++;

    } while (respuesta !== "no")

    return "Programa terminado";
}

function segundoGrado() {

    let a = parseInt(prompt("Introduce el valor de a"));
    let b = parseInt(prompt("Introduce el valor de b"));
    let c = parseInt(prompt("Introduce el valor de c"));

    let operacion = Math.pow(b, 2) + (-4 * a * c)

    if (a == 0)
        return "No es una operacion de segundo grado"
    else if (operacion < 0)
        return "b² - 4ac da numero negativo, no se puede realizar la equacionb"
    else {

        let x1 = ((-1 * b) + Math.sqrt(operacion)) / (2 * a)
        let x2 = ((-1 * b) - Math.sqrt(operacion)) / (2 * a)

        return "El resultado con el + es " + x1 + ", el resultado con el - es " + x2;
    }
}

function potencia() {

    let base = parseInt(prompt("Introduce el valor de la base "));
    let expo = parseInt(prompt("Introduce el valor del exponente"));

    return Math.pow(base, expo);
}

function numeroAscendente() {

    let numero = parseFloat(prompt("Introduce el numero: "));

    document.write(`<table border="1">`);
    document.write(`<tr><th>Numero</th><th>Seno</th></tr>`);

    for (let i = numero; i <= numero + 10; i++) {

        let radianes = Math.PI * i / 180;
        let resultado = (Math.sin(radianes)).toFixed(2)

        document.write(`
            <tr>
                <td>${i}</td>
                <td>${resultado}</td>
            </tr>
        `);
    }

    document.write(`</table>`);
    return " ";
}

function imagenRandom() {
    let numero = Math.floor(Math.random() * 3) + 1;

    if (numero == 1) {
        return `<img src="./img/1.jpg" alt="moto 1">`;

    } else if (numero == 2) {
        return `<img src="./img/2.jpg" alt="moto 2">`;

    } else
        return `<img src="./img/3.jpg" alt="moto 3 ">`;

}

