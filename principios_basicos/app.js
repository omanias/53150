//Variables
let variable = "Coder"
const variable_2 = "House"

//Funciones
function miFuncion(parametro1, parametro2) {
    let result = parametro1 + parametro2
    return result
}

//Arrays (forEach - map)
const numbers = [2, 5, 6, 7, 2]

/* numbers.forEach(function (num) {
    console.log(num * 2)
}) */

//Scope
const student_name = "Coder"
function greet() {
    const student_name = "House"
    console.log("Hi, " + student_name)
}
/* console.log(student_name)
greet() */

//Clousure
/* 
Caracteristica de Js que permite a una funcion acceder y recordar el ámbito léxico en el que fué creada
*/

function counter() {
    let contador = 0

    function increase() {
        contador++
        console.log(contador)
    }

    return increase
}

/* let myCounter = counter()
myCounter() */

//Template strings
const student_back_name = "Jared"
const age = 25
const message = `Hi, my name is ${student_back_name} and i'm ${age} years old`
// console.log(message)

//Classes
//Atributos = caracteristicas
// Métodos = acciones que realiza

class ClassName {
    constructor(parametros) {
    }

    //atributos
    coderStudent

    //metodos
    metodo1() {

    }
}

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

let persona1 = new Persona("Coder", 25)
// persona1.saludar()

// console.log(persona1)

class Contador {

    static cuentaGlobal = 0

    constructor(responsable) {
        this.responsable = responsable
        this.cuentaIndividual = 0
    }

    obtenerResponsable() {
        return this.responsable
    }

    obtenerCuentaIndividual() {
        return this.cuentaIndividual
    }
    static obtenerCuentaGlobal() {
        return Contador.cuentaGlobal
    }

    contar() {
        this.cuentaIndividual++
        Contador.cuentaGlobal++
    }

}


const contador1 = new Contador("Persona1")
// console.log(contador1.obtenerResponsable())
// console.log(contador1.obtenerCuentaIndividual())

contador1.contar()
contador1.contar()
contador1.contar()

console.log(Contador.obtenerCuentaGlobal())












