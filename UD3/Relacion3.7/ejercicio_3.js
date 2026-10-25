/*
Crear la función constructura punto que recibe un par de coordenadas (x,y) y devuelve un 
objeto punto en esa posición. 
• Crear la función constructora recta que recibe como argumento 2 puntos.
*/


function Punto(x, y){
    this.x = x
    this.y = y
    this.posicion = function(){
        return `La posicion es ${this.x} - ${this.y}`
    }
}


const punto1 = new Punto(15, 15)
const punto2 = new Punto(-5, 8)

document.write(`Punto 1 ${punto1.posicion()}<br>`)
document.write(`Punto 2 ${punto2.posicion()}<br>`)

function Recta(p1, p2){
    this.p1 = p1
    this.p2 = p2
    this.posicion = function(){
        return `La recta pasa por (${this.p1.x}, ${this.p1.y}) y (${this.p2.x}, ${this.p2.y})`
   
    }
}

const recta1 = new Recta(punto1, punto2)

document.write(`recta 1 ${recta1.posicion()}<br>`)

