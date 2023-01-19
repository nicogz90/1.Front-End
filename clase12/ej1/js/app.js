// Variables
var marcas = ["BMW", "Mercedes Benz", "Audi", "Ford", "Chevrolet"];

// Selectores
var btnMostrarMarcas = document.querySelector("#btn-mostrar-marcas");
var btnAgregarMarca = document.querySelector("#btn-agregar-marca");
var inputNuevaMarca = document.querySelector("#input-nueva-marca");
var ulMarcas = document.querySelector("#listado-marcas");

// Listeners
btnMostrarMarcas.addEventListener("click", mostrarMarcas);
btnAgregarMarca.addEventListener("click", agregarMarca);
btnAgregarMarca.disabled = true;

function mostrarMarcas() {
  ulMarcas.innerHTML = "";

  for (const marca of marcas) {
    ulMarcas.insertAdjacentHTML("beforeend", "<li>" + marca + "</li>");
  }
}

function agregarMarca() {
  // Guardo el contenido de la nueva marca
  var valueNuevaMarca = inputNuevaMarca.value;

  // Reviso si
  // if (!inputNuevaMarca) {
  if (valueNuevaMarca === "") {
    alert("La marca no puede estar vacía");
    return;
  }

  // Actualizo mi arreglo de marcas (si es que la nueva marca aún no existe)

  /* INDEXOF */
  /* if (marcas.indexOf(valueNuevaMarca) !== -1) {
    return alert("La marca ya existe");
  } */

  /* FIND */
  /* if (marcas.find((marca) => marca === valueNuevaMarca)) {
    return alert("La marca ya existe");
  } */

  /* INCLUDES */
  if (marcas.includes(valueNuevaMarca)) {
    return alert("La marca ya existe");
  }
  marcas.push(valueNuevaMarca);

  // Mostrar el arreglo de marcas en el HTML
  mostrarMarcas();

  // Resetear el input
  inputNuevaMarca.value = "";
}

// 1 - Deshabilitar el botón si no hay nada en el input
inputNuevaMarca.addEventListener("input", (e) => {
  if (e.target.value === "") {
    btnAgregarMarca.disabled = true;
  } else {
    btnAgregarMarca.disabled = false;
  }
});

// TODO
// 3 - Eliminar última marca
// 4 - Eliminar una marca puntual
