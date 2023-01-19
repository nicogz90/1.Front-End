var arrayDeNombres = ["Nico", "Ine", "Wilman", "Ana", "Fede"];

for (var i = 0; i < arrayDeNombres.length; i++) {
    console.log(`Hola ${arrayDeNombres[i]}`);
}

console.log("---------------");

// CALLBACK, otra forma de recorrer (TODO) un array:
arrayDeNombres.forEach(function (valorActual) {
    console.log(`Hola ${valorActual}`);
})

console.log("---------------");

// for of...
for (var valorActual of arrayDeNombres) {
    console.log(`Hola ${valorActual}`);
}


// window --> DOM (Document Object Model) : JS arma un acceso al HTML
console.log(window)
console.log(window.document)
console.log(document)

console.log(document.querySelector("h1").textContent); // titulo original
var miTitulo = document.querySelector("h1"); // acceso a titulo
miTitulo.textContent = "nuevo titulo"; // titulo modificado (ó .innerText ó .innerHTML)

var parrafo = document.querySelector("p");
parrafo.style.backgroundColor = "red"; // tambien se puede manipular estilos

var navegacion = document.querySelector(".navegacion-principal");
navegacion.classList.add("ocultar");


// Ejercicio 1 --> probar en pagina de Hack Academy: https://ha.dev
function buscarTitulo() {
    var titulo = document.querySelector("h1");
    if (!titulo) {
        alert(`Error: Falta titulo`);
    } else {
        titulo.style.fontFamily = "Times New Roman";
    }
}
buscarTitulo();


// Ejercicio 2
function toggleMenu() {
    var menu = document.querySelector(".dropdown-menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
toggleMenu();