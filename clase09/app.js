var verdadero = true;
var falso = false;
var negado = !false;

var string1 = `Lorem ipsum dolor`;
var string2 = "Lorem ipsum dolor";
var string3 =
  "Lorem 'ipsum' dolor"; /* para agregar comillas dentro de un string */

"2" == 2; /* verdadero --> compara solo valores */
"2" === 2; /* falso --> compara además el typeof (tipo de dato) */

var diasSemana = ["Lunes", "Martes", "Miércoles"];
console.table(diasSemana); /* table --> para que se vea en formato de tabla */

/* Estructuras condicionales */
var edad = 15;
if (edad >= 18) {
  //entonces
  console.log("Sos mayor de edad");
} else {
  //sino
  console.log("Sos menor de edad");
}

/* Else IF */
if (edad < 18) {
  //entonces
  console.log("Sos menor de edad");
} else if (edad <= 21) {
  //sino si (pueden ser varios)
  console.log("Estás entre 18 y 21");
} else {
  console.log("Sos mayor de 21");
}

/* Truthy & Falsy */
var nombre = "";
if (!nombre) {
  console.log("Completar");
}

/* AND (&&), OR (||) */
var user = "admin";
var pass = "123456789";
var superadmin = true;

if ((user === "admin" && pass === "1234") || superadmin) {
  console.log("Login OK");
} else {
  console.log("Los datos ingresados son incorrectos");
}

/* Loops / Ciclos / Estructuras repetitivas */

/* Ciclo FOR */
tabla = 7;
for (var i = 1; i <= 10; i++) {
  // (inicio; hasta; paso) *i++ para ir de a uno
  console.log(`${tabla}x${i} = ${tabla * i}`);
}

// break
// continue

/* AGREGAR OPCIONES A SELECT USANDO JS */
var select = document.querySelector("select");

for (var i = 2022; i >= 1900; i--) {
  select.insertAdjacentHTML("beforeend", `<option value="${i}">${i}</option>`);
}

/* Ejercicio 1 */
/* funcion es par */
function esPar(numero) {
  var resultado;
  if (numero % 2 === 0) {
    resultado = "Par";
  } else {
    resultado = "Impar";
  }
  return resultado; // return también sirve para "cortar" una función. lo que siga después de un return dentro de una función no se va a leer
}

var x = 12;
console.log(`El número ${x} es ${esPar(x)}`);

/* Ejercicio 2 */

function maximoDeDos(num1, num2) {
  var maximo;
  if (num1 > num2) {
    maximo = num1;
  } else {
    maximo = num2;
  }
  return maximo;
}

var n1 = 4;
var n2 = 7;
console.log(`El máximo entre ${n1} y ${n2} es: ${maximoDeDos(n1, n2)}`);

/* Ejercicio 3 */

function maximoDeTres(n1, n2, x) {
  var maximo = maximoDeDos(n1, n2);
  if (maximo < x) {
    maximo = x;
  }
  return maximo;
}

var n1 = 3;
var n2 = 9;
var x = 8;
console.log(
  `El máximo entre ${n1}, ${n2} y ${x} es: ${maximoDeTres(n1, n2, x)}`
);

/* Ejercicio 4 */

function validarNombre(texto) {
  var resultado;
  if (typeof texto === typeof "texto" && texto !== "") {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

var texto = "nico";
console.log(validarNombre(texto));

var texto = "";
console.log(validarNombre(texto));

var texto = 1;
console.log(validarNombre(texto));

/* Ejercicio 5 */
function validarAnioNacimiento(numero) {
  var resultado;
  if (typeof numero === "number" && numero > 1920 && numero <= 2021) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

var numero = 1990;
console.log(validarAnioNacimiento(numero));

/* Ejercicio 6 */
for (i = 0; i <= 100; i = i + 4) {
  if (i % 4 === 0) console.log(i);
}

/* Ejercicio 7 */
function mostrarArray(array) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
var array = [1, 2, 3, 4, 5];
mostrarArray(array);

/* Ejercicio 8 */
function estaElemento(array, elemento) {
  var elementoEnArray = false;
  for (i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      elementoEnArray = true;
    }
    return elementoEnArray;
  }
}
array = [1, "nico", false];
elemento = 1;
console.log(estaElemento(array, elemento));

/* Ejercicio 9 */
function maximo(arrayDeNumeros) {
  var maximo = arrayDeNumeros[0];
  for (i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] >= maximo) {
      maximo = arrayDeNumeros[i];
    }
  }
  console.log(maximo);
}
arrayDeNumeros = [-3, -5];
maximo(arrayDeNumeros);

/* Ejercicio 10 */
var lado = 5;
for (var i = 1; i <= lado; i++) {
  var fila = [];
  for (var j = 1; j <= lado; j++) {
    if (i >= j) {
      fila = [fila, "o"];
    } else {
      fila = [fila, "."];
    }
    fila = fila.join(" ");
  }
  console.log(fila);
}

/* Ejercicio 11 */
var tableroAjedrez = document.querySelector(".tableroAjedrez");
var lado = 8;
for (var i = 1; i <= lado; i++) {
  var fila = [];
  for (var j = 1; j <= lado; j++) {
    if (i % 2 == 0 && j % 2 == 0) {
      fila = [
        fila,
        tableroAjedrez.insertAdjacentHTML(
          "beforeend",
          `<div class="whiteBox"></div>`
        ),
      ];
    } else if (i % 2 == 0 && j % 2 == 1) {
      fila = [
        fila,
        tableroAjedrez.insertAdjacentHTML(
          "beforeend",
          `<div class="blackBox"></div>`
        ),
      ];
    } else if (i % 2 == 1 && j % 2 == 0) {
      fila = [
        fila,
        tableroAjedrez.insertAdjacentHTML(
          "beforeend",
          `<div class="blackBox"></div>`
        ),
      ];
    } else if (i % 2 == 1 && j % 2 == 1) {
      fila = [
        fila,
        tableroAjedrez.insertAdjacentHTML(
          "beforeend",
          `<div class="whiteBox"></div>`
        ),
      ];
    }
    fila = fila.join("");
  }
  /* tableroAjedrez.insertAdjacentHTML("beforeend", `<br>`) */
}
