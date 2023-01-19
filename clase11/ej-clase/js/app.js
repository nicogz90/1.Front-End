var btnMenu = document.querySelector("#dropdownMenuButton1");

// btnMenu.textContent = "<strong>Menú</strong> desplegable";
// btnMenu.innerText = "Menú desplegable";
btnMenu.innerHTML = "<strong>Menú</strong> desplegable";

// Opción 1
/* btnMenu.addEventListener("click", function () {
	var dropdownMenu = document.querySelector('.dropdown-menu');

	if (dropdownMenu.style.display === 'block') {
		dropdownMenu.style.display = 'none';
	} else {
		dropdownMenu.style.display = 'block';
	}
}); */

// Opción 2
btnMenu.addEventListener("click", clickMenu);

// console.log(btnMenu);

function clickMenu() {
  var dropdownMenu = document.querySelector(".dropdown-menu");

  //  dropdownMenu.classList.toggle("ha-hide");
  dropdownMenu.classList.toggle("ha-show");

  // if ( dropdownMenu.classList.contains('ha-hide') ) {

  // 	dropdownMenu.classList.remove('ha-hide');
  // 	dropdownMenu.classList.add('ha-show');
  // } else {
  // 	dropdownMenu.classList.add('ha-hide');
  // 	dropdownMenu.classList.remove('ha-show');
  // }
}

// console.log(clickMenu);

// Devuelve un NodeList (simil Array)
// var cursos = document.querySelectorAll('.cursos li');

// for (var i = 0; i < cursos.length; i++) {
// 	console.log(cursos[i]);
// }

// cursos.forEach(function (curso) {
// 	console.log(curso.textContent);
// });

// for (const curso of cursos) {
// 	console.log(curso.textContent);
// }

/* Crear el elemento HTML */
// var li = document.createElement('li');

/* Asignarle contenido */
// li.textContent = "Curso HTML";

/* Selecciono una referencia existente en el documento HTML */
// var ul = document.querySelector('.cursos');

/* Método 1 */
// ul.append(li);

/* Método 2 */
// ul.appendChild(li);

/* Método 3 */
// var textoHTML = '<li>Curso <strong>CSS</strong></li>';
// ul.insertAdjacentHTML('afterbegin', textoHTML);

/* Método 4 */
// ul.insertAdjacentElement('beforeend', li);

var cursos = ["HTML", "CSS", "Javascript", "PHP", "MySQL", "React"];

var ul = document.querySelector(".cursos");

// for (const curso of cursos) {
// 	var li = document.createElement('li');
// 	li.textContent = curso;

// 	ul.insertAdjacentElement('beforeend', li);
// }

cursos.forEach(function (curso) {
  var textLI = `<li>${curso}</li>`;
  // ul.insertAdjacentHTML('beforeend', '<li>' + curso + '</li>');
  // ul.insertAdjacentHTML('beforeend', `<li>${curso}</li>`);
  ul.insertAdjacentHTML("afterbegin", textLI);
});

/* Formularios */

var btnEnviar = document.querySelector("#btn-enviar");

btnEnviar.addEventListener("click", enviarFormulario);

function enviarFormulario(e) {
  e.preventDefault();

  var inputEmail = document.querySelector("#email").value;
  var inputPassword = document.querySelector("#password").value;
  var inputAddress = document.querySelector("#address").value;
  var inputCurso = document.querySelector("#curso").value;
  var inputRadio = document.querySelector('input[type="radio"]:checked').value;

  if (!validarPassword(inputPassword)) {
    return;
  }

  console.log("Enviando....");
  console.log(inputEmail, inputPassword, inputAddress, inputCurso, inputRadio);
}

function validarPassword(pwd) {
  if (pwd.length < 6) {
    alert("El password debe contener más de 6 caracteres");
    return false;
  }
  return true;
}
