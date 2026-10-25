export default class Receta {

    constructor(id, nombre, elaboracion) {
        this.id = id
        this.nombre = nombre
        this.elaboracion = elaboracion
        this.ingredientes = []
    }

    // busca ingrediente
    buscaIngrediente(ingrediente){
        return this.ingredientes.find( ing => ing.nombre === ingrediente )
    }

    // hacer add con find por include solo mira referencia no valor
    addIngrediente(ingrediente) {
        return this.buscaIngrediente(ingrediente) ?  "El ingrediente ya existe" : this.ingredientes.push(ingrediente)
    }

    // elimina un ingrediente
    deleteIngrediente(ingrediente) {
        
        let indice = this.ingredientes.indexOf(ingrediente)
        
    }

    show() {
        const filas = this.ingredientes.map(ingrediente => `
            <tr>
                <td>${ingrediente.nombre}</td>
                <td>${ingrediente.cantidad}</td>
                <td>${ingrediente.unidades}</td>
            </tr>
        `).join("");

        return `

            <table border="1">

            <caption id="${this.nombre}">${this.nombre}</caption>

                <tr>
                    <th>Ingrediente</th>
                    <th>Cantidad</th>
                    <th>Unidad</th>
                </tr>
                
                ${filas}
           
            <tr>
                <td colspan="3">${this.elaboracion}</td>
            </tr>

            </table>

            `
    }
}