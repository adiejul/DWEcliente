export default class Ingrediente{

    constructor(nombre, cantidad, unidades){
        
        this.nombre = nombre
        this.cantidad = cantidad
        this.unidades = unidades
    }

    show(){
        return (this.nombre + " " + this.cantidad + " " + this.unidades)
    }

}