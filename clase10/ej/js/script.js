// lowerCamelcase
var edad = 21;

var titulo = document.querySelector("h1");
var item2 = document.querySelector("#item2");
var parrafo = document.querySelector("p");
var navegacion = document.querySelector(".navegacion-principal");
var botonOcultar = document.querySelector("#ocultar-menu");

// Manipulando estilos
if (edad >= 18) {
  parrafo.style.backgroundColor = "yellow";
} else {
  parrafo.style.display = "none";
}

// Manipulando texto
item2.textContent = "Probando JavaScript";
titulo.textContent = "Un nuevo título";

// Manipular sus clases
console.log(navegacion.classList);
//

// Escuchar un evento en particular
document.addEventListener("click", function () {
  console.log("Estás haciendo click...");
});

titulo.addEventListener("click", function () {
  titulo.style.color = "blue";
});

botonOcultar.addEventListener("click", function () {
  navegacion.classList.toggle("ocultar");
});

/* Ejercicio 3 */
var body = document.querySelector("body");
body.style.backgroundColor = "red";
var btnCambiarFondo = document.querySelector("#cambiar-fondo");

btnCambiarFondo.addEventListener("click", function () {
  if (body.style.backgroundColor === "red") {
    body.style.backgroundColor = "green";
  } else if (body.style.backgroundColor === "green") {
    body.style.backgroundColor = "red";
  } else {
  }
});

/* Ejercicio 5 */
/* A */
var parrafos = document.querySelectorAll("p");
console.log(parrafos);
function formatP() {
  for (const parrafo of parrafos) {
    parrafo.style.color = "green";
    parrafo.style.fontSize = "2rem";
  }
}
formatP();

/* B */
function lorem() {
  for (const parrafo of parrafos) {
    parrafo.insertAdjacentHTML("beforeend", `<p>Lorem ipsum...</p>`);
  }
}
lorem();

/* C */
function alertRepetido(s, n) {
  var alerta = "";
  for (var i = 0; i < n; i++) {
    alerta = `${alerta} ${s}`;
  }
  alert(alerta);
}
alertRepetido("hola", 3);

/* D */
function alarma() {
  var interval = setInterval(cambiarFondo, 500);
  function cambiarFondo() {
    if (document.querySelector("body").style.backgroundColor === "red") {
      document.querySelector("body").style.backgroundColor = "white";
    } else {
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  setTimeout(function () {
    clearInterval(interval);
  }, 5000);
}
alarma();
