import Ingrediente from "./Ingrediente.js"
import Receta from "./Receta.js"

(function (){

    const receta= new Receta(1, "Paella", "los pasos a seguir...")

    const ingrediente1 = new Ingrediente("arroz", 1, "kg")
    const ingrediente2 = new Ingrediente("caldo", 1500, "ml")
    const ingrediente3 = new Ingrediente("pimientos", 150, "gr")
    const ingrediente4 = new Ingrediente("cebolla", 100, "gr")
    const ingrediente5 = new Ingrediente("pimenton", 1.5, "gr")

    receta.addIngrediente(ingrediente1)
    receta.addIngrediente(ingrediente2)
    receta.addIngrediente(ingrediente3)
    receta.addIngrediente(ingrediente4)
    receta.addIngrediente(ingrediente5)

    document.getElementById("contenidos").innerHTML= receta.show()

})();