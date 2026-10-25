function Telefono(numero){
    this.numero = numero
    this.numeroLlamadas = 0
    this.llamar = function (){ this.numeroLlamadas++}
}

const num1 = new Telefono(684032215)
const num2 = new Telefono(620245120)


num1.llamar()
num1.llamar()
num1.llamar()

num2.llamar()

document.write(`Llamadas al num1: ${num1.numeroLlamadas},
                llamadas al num2: ${num2.numeroLlamadas}`)