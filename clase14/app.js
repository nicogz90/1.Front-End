// la diferencia entre WHILE y DOWHILE es que si la condición no se cumple nunca, el WHILE no se corre nunca, pero el DOWHILE entra 1 vez

var titulo = document.querySelector("h1");
var button = document.querySelector("#button");
/* console.log(button) */
var form = document.querySelector("form");

button.addEventListener("click", function () {
  console.log("Se hizo click en el botón");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Se está haciendo click en el formulario");
});

titulo.addEventListener("mouseover", function () {
  console.log("El cursor está sobre el título");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    console.log("Caja se mueve hacia arriba");
  }
});

/* --------------- */

// OBJETOS //

var usuario1 = {
  nombre: "Luke", // propiedad = clave + valor
  apellido: "Skywalker",
  hijos: false,

  // Método
  saludar: function () {
    return `Hola, soy ${this.nombre}`; // THIS hace referencia al objeto dentro del cual estoy
  },

  saludarPersona: function (texto) {
    return `Hola ${texto}`;
  },
};

console.log(usuario1.saludar());
console.log(`Mi nombre es ${usuario1.nombre}`);
console.log(usuario1.saludarPersona("Nico"));

/* Ejercicio 1 */
const person = {
  firstname: "María",
  lastname: "Rodríguez",
  birth_date: "1983-04-19",
  email: "maria.rod@gmail.com",
  nationality: ["Uruguay", "España"],
  image: "https://thispersondoesnotexist.com/",
  education: [
    {
      institution: "Hack Academy",
      course: "Front-End",
      year: 2017,
    },
    {
      institution: "Hack Academy",
      course: "Back-End (PHP)",
      year: 2018,
    },
  ],
  jobs: [
    {
      company: "ACME S.A.",
      title: "Junior Developer",
      year_from: 2018,
      year_to: 2019,
    },
  ],
};
