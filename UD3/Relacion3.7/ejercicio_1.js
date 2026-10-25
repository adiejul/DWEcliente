//Crear un objeto literal persona con nombre y edad y una método que determine si es mayor de edad o no

const persona= {
    nombre:"Ana",
    edad: 38,
    esMayorEdad: function(){
        return this.edad >= 18 ? "Es mayor de edad" : "Es menor de edad"
    }
}

    document.write(`A) <br> nombre: ${persona.nombre}, edad: ${persona.edad}, ${persona.esMayorEdad()}<br>`)

// Crear una función constructora que permita crear objetos del tipo personas pasándole solo un nombre y edad, agregar el método.
function Persona(nombre, edad){
    this.nombre = nombre
    this.edad = edad
    this.esMayorEdad = function(){return this.edad >= 18 ? "Es mayor de edad" : "Es menor de edad"}
}

const persona1 = new Persona("pepe", 8)
const persona2 = new Persona("Mari", 36)

document.write(`B) <br> nombre: ${persona1.nombre}, edad: ${persona1.edad}, ${persona1.esMayorEdad()}<br>`)


// Crear un array que contenga varios objetos persona
const arPersonas = []

arPersonas.push(persona1, persona2)

document.write(`C)<br>`)
for (const personas of arPersonas) {
    document.write(`${personas.nombre} - ${personas.edad}<br>`)
}


//Crear una función que reciba el array y devuelva la edad promedio del grupo de personas.

function promedio(arPersonas){
    let suma = 0
    arPersonas.forEach(element => {
        suma += element.edad
    });
    
    return suma / arPersonas.length

}

document.write(`D) <br>La media de las personas es : ${promedio(arPersonas)}<br>`)