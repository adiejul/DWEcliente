


function Casa(calle, numero, cp) {
    this.calle = calle
    this.numero = numero
    this.cp = cp
    
    this.setNumero = function (num) {
        this.numero = num
    }
    this.setCalle = function (calle) {
        this.calle = calle
    }

    this.setcodigoPostal = function (cp) {
        this.cp = cp
    }

    this.imprimeCalle = function () {
        return this.calle
    }

    this.imprimeNumero = function () {
        return this.numero
    }

    this.imprimeCP = function () {
        return this.cp
    }

    document.write(`Nueva casa en calle ${this.calle}, nº. ${numero}, CP: ${cp}<br>`)
}

const casaA = new Casa("Jeroni Alamany", 15, "07011")
const casaB = new Casa("Victor Jara", 6, "18320")
const casaC = new Casa("Joan March", 11, "07025")



casaA.setNumero(15)
casaB.setCalle("Camino Caneiro")
casaB.setcodigoPostal("32004")

document.write(`Casa A: ${casaA.imprimeNumero()}<br>`)
document.write(`Casa B: ${casaB.imprimeCalle()}<br>`)
document.write(`Casa C: ${casaC.imprimeCP()}<br>`)

document.write(`Resultados despues de las modificaciones:<br>`)
document.write(`Casa a: ${casaA.imprimeCalle()}, nº. ${casaA.imprimeNumero()}, CP: ${casaA.imprimeCP()}<br>`)
document.write(`Casa b: ${casaB.imprimeCalle()}, nº. ${casaB.imprimeNumero()}, CP: ${casaB.imprimeCP()}<br>`)
document.write(`Casa c: ${casaC.imprimeCalle()}, nº. ${casaC.imprimeNumero()}, CP: ${casaC.imprimeCP()}<br>`)