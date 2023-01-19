/* Seleccionar el botón */
var btnEnviar = document.querySelector('#btn-enviar');

/* Asociar una función manejadora al evento click del botón */
btnEnviar.addEventListener('click', enviarForm);

function enviarForm(e) {
	e.preventDefault();

	// Nuevo título
	var titulo = document.querySelector('h1');
	var nuevoTitulo = document.querySelector('#formTitle').value;
	console.log(nuevoTitulo) // para verificar valor en consola
	titulo.textContent = nuevoTitulo;

	// Tamano título
	var tamanoTitulo = document.querySelector('#titleSize').value;
	console.log(tamanoTitulo) // para verificar valor en consola
	titulo.style.fontSize = `${tamanoTitulo}rem`

	// Color título
	var colorTitulo = document.querySelector('input[name=titleColor]:checked').value
	console.log(colorTitulo) // para verificar valor en consola
	titulo.style.color = colorTitulo

	// Nuevo párrafo
	var parrafo = document.querySelector('.contenido p');
	var nuevoParrafo = document.querySelector('#formText').value;
	console.log(nuevoParrafo) // para verificar valor en consola
	parrafo.textContent = nuevoParrafo;
}