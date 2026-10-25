

function Alumno(id, nombre, media=5){
    this.id = id
    this.nombre = nombre
    this.media = media
    
    this.getNotaMedia = function(){
        return this.media
    }

    this.setnotaMedia = function(nuevaMedia){
        this.media = nuevaMedia
    }
}

function Colegio(nombre, nAulas, nAlumnos){
    this.nombre = nombre
    this.nAulas = nAulas
    this.nAlumnos = nAlumnos
    this.arDatos = []

    this.addAlumnos = function(alumno){
        this.arDatos.push(alumno)
    }

    this.consultaNotaMedia = function (id){
        let alumno = this.arDatos[id]
        return alumno.getNotaMedia()
    }

    this.modificaNotaMedia = function (id, mediaNueva){
        this.arDatos[id].setnotaMedia(mediaNueva)
    }
}

const colegio1 = new Colegio("colegio1", 32, 5)

const alumno1 = new Alumno(0, "alumno1",)
const alumno2 = new Alumno(1, "alumno2",)
const alumno3 = new Alumno(2, "alumno3",)
const alumno4 = new Alumno(3, "alumno4",)
const alumno5 = new Alumno(4, "alumno5",)

colegio1.addAlumnos(alumno1)
colegio1.addAlumnos(alumno2)
colegio1.addAlumnos(alumno3)
colegio1.addAlumnos(alumno4)
colegio1.addAlumnos(alumno5)

document.write(`La media del alumno 3: ${colegio1.consultaNotaMedia(3)}<br>`)

colegio1.modificaNotaMedia(1, 8)
document.write(`La media del alumno 1 es: ${colegio1.consultaNotaMedia(1)}`)






