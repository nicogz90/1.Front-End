// EJERCICIO 1
const emailInput = document.querySelector("#email");

/**
 * Función que valida si un email es válido.
 * Recibe un string y retorna true si corresponde a un email válido.
 * En caso contrario, retorna false.
 */
function validarEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

emailInput.addEventListener("input", () => {
  if (validarEmail(emailInput.value)) {
    emailInput.classList.remove("not-valid");
    emailInput.classList.add("valid");
  } else {
    emailInput.classList.remove("valid");
    emailInput.classList.add("not-valid");
  }
});

// EJERCICIO 2
const blueBox = document.querySelector(".blue-box");
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      blueBox.classList.add("left");
      blueBox.classList.remove("right");
      break;
    case "ArrowUp":
      blueBox.classList.add("up");
      blueBox.classList.remove("down");
      break;
    case "ArrowRight":
      blueBox.classList.add("right");
      blueBox.classList.remove("left");
      break;
    case "ArrowDown":
      blueBox.classList.add("down");
      blueBox.classList.remove("up");
      break;

    default: // exit this handler for other keys
      return;
  }
  e.preventDefault();
});
