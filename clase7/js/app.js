/* Variables (espacio en memoria) */
var user = "Nico"; // = (asignación)

/* console.log => imprimir en consola */
console.log(user);

/* para nombrar variables tengo que comenzar con una letra, _ ó $ */
/* evitar espacios, usar lower camelCase */
/* se diferencia mayúscula y minúscula: 'nico' es distinto a 'Nico' */
/* hay palabras reservadas, por ejemplo: 'function' */

/* Tipos de datos */

/* number */
var base = 1.84; /* decimal */
var height = 4; /* entero */

/* string - cadena de caracteres (texto) */
var course = "Curso Frontend";

console.log(typeof height); /* typeof para consultar tipo de dato */

/* Operaciones con variables */
var rectangleArea = base * height;

var result = (154 * 56) / 98 + (867 - 56) / 13 + 43;
/* alert("El resultado es: " + result); */
alert(`El resultado es: ${result}`);

/* ------------- */

var varA = 2021;
console.log(varA);
console.log(typeof varA);

var varB = "Hack";
console.log(varB);
console.log(typeof varB);

var varC = varA + varB;
console.log(varC);
console.log(typeof varC);

var varD = varA / 0;
console.log(varD);
console.log(typeof varD);

var varE = varE + 0;
console.log(varE);
console.log(typeof varE);

var varF;
console.log(varF);
console.log(typeof varF);

/* ------------- */

var varG = "Hack ";
var varH = varG + varI; // varI no está definido aún
var varI = "Academy";

console.log(varH); // Hack undefined
console.log(typeof varH);

/* ------------- */

alert(`Bienvenido a "nuestro" 'sitio' web`);
