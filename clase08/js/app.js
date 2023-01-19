//función que no depende de ningún input
function saludar() {
    console.log("Hola")
}

saludar() //usar la función saludar

//función que depende de otro(s) parámetros
function saludarPersona(nombre) {
    console.log("Hola " + nombre)
}

saludarPersona("Nico")
saludarPersona("Ine")


//función sumar
function sumar(a, b) {
    return a + b
}

console.log(sumar(2, 10))

// Math variable con varias funciones matemáticas, por ejemplo:
Math.min(2, 10, 5) // función mínimo
Math.round(5.69) // redondeo

Math.random() // numero aleatorio entre 0 y 1
Math.random() * 5 // numero aleatorio entre 0 y 5
Math.random() * 5 + 1 // numero aleatorio entre 1 y 6

Math.trunc(Math.random() * 5 + 1) // trunc elimina los decimales


// [array] => arreglo: conjunto de datos homogéneo)
var listadoDeNombres = ["Luke", "Leia", "Han"]; // los arrays arrancan con índice 0

console.log(`Hola ${listadoDeNombres[0]}`); // Hola Luke

console.log(listadoDeNombres.length)

listadoDeNombres.push("Rei", "Kylo") // push agrega elementos al final del array
listadoDeNombres.unshift("Dark Vader") // push agrega elementos al principio del array
listadoDeNombres.pop() // saca el último elemento del array
listadoDeNombres.shift() // saca el primer elemento del array
listadoDeNombres.splice(1, 2) // elimina 2 elementos del array, desde la posición 1
listadoDeNombres[1] = "Nico" // sustituye el elemento en el índice 1 por "Nico"
console.log(listadoDeNombres)


var mariaEsChilena = true
var hoyEsFeriado = false

var varA = !mariaEsChilena // false
console.log(varA)

/* -------------- */

var v1 = 5 * ""
console.log(`5 * "": ${v1}`) // 0

var v1 = 5 + ""
console.log(`5 + "": ${v1}`) // 5

var v1 = 5 / ""
console.log(`5 / "": ${v1}`) // Infinity

var v1 = 5 + true
console.log(`5 + true: ${v1}`) // 6

var v1 = 5 + "3"
console.log(`5 + "3": ${v1}`) // 53

var v1 = 5 - "3"
console.log(`5 - "3": ${v1}`) // 2

var v1 = "5" - "3"
console.log(`"5" - "3": ${v1}`) // 2

/* -------------- */

var min, max
var promedio = (min + max) / 2
console.log(promedio) // min y max no definidos, no funciona

/* -------------- */

var edad = 32
console.log("Tengo " + edad + " anos.")

/* -------------- */

function duplicar(numeroCualquiera) {
    return 2 * numeroCualquiera
}
console.log(duplicar(3))

/* -------------- */

function numeroAleatorio() {
    return Math.round(Math.random() * 100 + 1)
}
console.log(numeroAleatorio())

